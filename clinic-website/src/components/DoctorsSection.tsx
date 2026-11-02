import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';

interface DoctorsSectionProps {
  onBookDoctor: (doctorName: string, specialtyName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookDoctor }) => {
  const [selectedSpecialtyFilter, setSelectedSpecialtyFilter] = useState<string>('all');

  const specialties = [
    { id: 'all', label: 'All Physicians' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'orthopedics', label: 'Orthopedics' },
    { id: 'pediatrics', label: 'Pediatrics' },
    { id: 'dermatology', label: 'Dermatology' },
    { id: 'internal', label: 'Internal Medicine' },
  ];

  const filteredDoctors =
    selectedSpecialtyFilter === 'all'
      ? DOCTORS
      : DOCTORS.filter((d) => d.specialtyId === selectedSpecialtyFilter);

  return (
    <section id="doctors" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Medical Staff Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Board-Certified Medical Specialists
          </h2>
          <p className="text-slate-600 text-base">
            Our physicians hold credentials from the nation's leading medical institutions and are committed to clear, patient-guided care.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecialtyFilter(spec.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedSpecialtyFilter === spec.id
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Headshot */}
                <div className="aspect-[4/4] overflow-hidden bg-slate-100 relative">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-700 shadow-sm flex items-center space-x-1">
                    <Award className="w-3 h-3 text-brand-500" />
                    <span>{doc.experienceYears} Yrs Exp</span>
                  </div>
                </div>

                {/* Information */}
                <div className="p-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-600 mb-1">
                    {doc.specialty}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-3 font-medium">
                    {doc.qualifications}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {doc.bio}
                  </p>

                  {/* Available Days */}
                  <div className="flex items-center space-x-2 text-[11px] text-slate-500 pb-2">
                    <Clock className="w-3.5 h-3.5 text-tealbrand-500 shrink-0" />
                    <span>In Clinic: {doc.availableDays.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Booking Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookDoctor(doc.name, doc.specialty)}
                  className="w-full bg-slate-50 hover:bg-brand-500 text-slate-700 hover:text-white font-semibold text-xs py-2.5 rounded-lg border border-slate-200 hover:border-brand-500 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {doc.name.split(' ')[1]}</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
