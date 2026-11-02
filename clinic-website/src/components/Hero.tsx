import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Clock, Star, ArrowRight, UserCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-brand-50/70 via-white to-slate-50 overflow-hidden">
      {/* Decorative subtle medical gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-tealbrand-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-200 shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-semibold text-brand-800 uppercase tracking-wider">
                Accredited Medical Center of Excellence
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Advanced Medical Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-tealbrand-500">
                Deep Personal Empathy.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              At CarePlus Clinic, our board-certified physicians, state-of-the-art diagnostic imaging suites, and multidisciplinary specialists unite to provide evidence-based healthcare for you and your family.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenAppointment}
                className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority Appointment</span>
              </button>

              <a
                href="#specialties"
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Specialties</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>

            {/* Key Service Assurance */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Same-Day Urgent Care</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <UserCheck className="w-4 h-4 text-tealbrand-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Board-Certified Doctors</span>
              </div>
              <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">99.2% Patient Trust</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-lg"
            >
              {/* Doctor Hero Image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=80"
                  alt="Doctor consulting patient with empathy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-sm font-bold">Dr. Sarah Lin, MD, FAAP</div>
                  <div className="text-xs text-white/80">Department of Pediatrics & Preventive Medicine</div>
                </div>
              </div>

              {/* Floating Stat Card 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-tealbrand-50 flex items-center justify-center text-tealbrand-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">JCAHO Accredited</div>
                  <div className="text-[11px] text-slate-500">Highest safety tier</div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">&lt; 15 Min Wait</div>
                  <div className="text-[11px] text-slate-500">Priority scheduling</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Clinical Statistics Counter Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {CLINIC_INFO.stats.map((stat) => (
            <div key={stat.label} className="border-r last:border-r-0 border-slate-100 px-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
