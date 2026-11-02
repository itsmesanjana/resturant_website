import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, Activity, Baby, ShieldCheck, Stethoscope, ArrowRight, Check } from 'lucide-react';
import { SPECIALTIES } from '../data/clinicData';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyName: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectSpecialty }) => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState(SPECIALTIES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Brain': return <Brain className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Stethoscope className="w-6 h-6" />;
    }
  };

  const activeSpecialty = SPECIALTIES.find((s) => s.id === activeSpecialtyId) || SPECIALTIES[0];

  return (
    <section id="specialties" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
            <span>Specialized Clinical Departments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive Medical Specialties
          </h2>
          <p className="text-slate-600 text-base">
            From preventative screenings to complex outpatient therapies, our dedicated departments deliver targeted, coordinated medical care.
          </p>
        </div>

        {/* Specialties Grid / Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Department List */}
          <div className="lg:col-span-5 space-y-3">
            {SPECIALTIES.map((spec) => {
              const isActive = spec.id === activeSpecialtyId;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveSpecialtyId(spec.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-white border-brand-500 shadow-md shadow-brand-500/10'
                      : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {getIcon(spec.iconName)}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {spec.name}
                      </h4>
                      <span className="text-xs text-slate-500">{spec.treatmentCount}</span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-brand-500' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Specialty Detail Showcase Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeSpecialty.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider block mb-1">
                    Department Focus
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{activeSpecialty.name}</h3>
                </div>
                <div className="px-3.5 py-1.5 bg-tealbrand-50 text-tealbrand-700 font-semibold text-xs rounded-full border border-tealbrand-200">
                  {activeSpecialty.treatmentCount}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {activeSpecialty.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Conditions Commonly Evaluated & Treated
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSpecialty.conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span className="font-medium">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Emergency triage & walk-ins welcome for acute symptoms.
                </span>
                <button
                  onClick={() => onSelectSpecialty(activeSpecialty.name)}
                  className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs px-6 py-3 rounded-lg shadow-md shadow-brand-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book In {activeSpecialty.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
