import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-cyber-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neon-cyan bg-cyber-850 px-3.5 py-1 rounded-full border border-cyber-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Predictable Product Sprint Models
          </h2>
          <p className="text-slate-400 text-base font-light mb-8">
            Transparent pricing without surprise change-orders. Choose standalone sprint execution or ongoing retained product acceleration.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="inline-flex items-center space-x-3 p-1.5 rounded-xl bg-cyber-850 border border-cyber-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-neon-purple text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard Sprint
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                isAnnual
                  ? 'bg-neon-purple text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Retainer</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-cyber-850 border-2 border-neon-purple shadow-2xl shadow-neon-purple/20 lg:-translate-y-2'
                    : 'bg-cyber-900 border border-cyber-750 hover:border-cyber-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-[10px] uppercase tracking-widest font-extrabold px-4 py-1 rounded-full shadow-lg">
                    Most Popular Growth Choice
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-cyber-800">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400">
                        {isAnnual ? '/ month (billed annually)' : '/ sprint'}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-neon-cyan mt-1">
                      Delivery Window: {plan.deliveryTime}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-300 block mb-3">
                      Package Inclusions:
                    </span>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-neon-purple to-neon-indigo text-white hover:opacity-95 shadow-lg shadow-neon-purple/25'
                        : 'bg-cyber-800 hover:bg-cyber-700 text-white border border-cyber-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
