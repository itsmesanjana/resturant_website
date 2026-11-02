import React from 'react';
import { ShieldCheck, Compass, EyeOff, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: EyeOff,
      title: 'Complete Off-Market Discretion',
      description: 'Our private off-market ledger matches buyers and sellers without public MLS exposure, social media promotion, or press curiosity.',
    },
    {
      icon: Compass,
      title: 'Architectural Due Diligence',
      description: 'Every estate is assessed by our architectural historical consultants, civil engineers, and master interior designers prior to listing.',
    },
    {
      icon: ShieldCheck,
      title: 'Cross-Border Legal Mastery',
      description: 'Comprehensive navigation of international tax treaties, Swiss banking escrows, Italian landmark authorities, and UK freehold governance.',
    },
    {
      icon: Award,
      title: 'Private Aviation & Escort Concierge',
      description: 'Complimentary executive helicopter transfers and chauffeur escorts arranged for qualified international buyer property viewings.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A28] font-semibold block mb-2">
            The EstateVista Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight">
            Why Discerning Principals Partner With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="p-6 bg-[#FAF9F6] border border-stone-200 rounded-sm">
                <div className="w-12 h-12 bg-stone-900 text-[#C5A059] flex items-center justify-center mb-5 rounded-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">{p.title}</h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
