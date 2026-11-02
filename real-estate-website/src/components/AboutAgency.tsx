import React from 'react';
import { AGENCY_INFO } from '../data/estateData';

export const AboutAgency: React.FC = () => {
  return (
    <section id="agency" className="py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[16/11] rounded-sm overflow-hidden shadow-2xl border border-stone-300">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=80"
                alt="EstateVista private architectural consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text & Track Record */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A28] font-semibold block">
              The Firm & Heritage
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
              A Bespoke Global Practice for Architectural Real Estate
            </h2>
            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              EstateVista was founded upon a singular imperative: to provide high-net-worth individuals, family offices, and architectural collectors with institutional-level discretion and access to the world’s most private properties.
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-xs sm:text-sm">
              Over sixty percent of our transactions occur entirely off-market. Through our global desks in New York, London, Beverly Hills, and Zurich, we curate seamless cross-border acquisitions backed by rigorous architectural due diligence.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              {AGENCY_INFO.stats.map((s) => (
                <div key={s.label} className="p-4 bg-white border border-stone-200 rounded-sm">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
