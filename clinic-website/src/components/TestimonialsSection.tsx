import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Hear From Those We Have Heighed & Healed
          </h2>
          <p className="text-slate-600 text-base">
            Real feedback from patients who received prompt diagnostic evaluations and personalized recovery plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{t.patientName}</div>
                <div className="text-xs text-brand-600 font-medium">{t.department}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
