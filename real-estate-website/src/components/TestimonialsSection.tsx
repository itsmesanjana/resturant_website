import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/estateData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A28] font-semibold block mb-2">
            Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight">
            Endorsements from Global Principals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 sm:p-10 border border-stone-200 rounded-sm relative shadow-sm flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#C5A059]/40 mb-4" />
              <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-stone-100">
                <div className="font-bold text-stone-900 text-sm">{t.client}</div>
                <div className="text-xs text-[#8C6A28] font-medium">{t.transaction}</div>
                <div className="text-[11px] text-stone-400 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
