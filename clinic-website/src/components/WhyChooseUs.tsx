import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, HeartHandshake, FileText, Smartphone, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Minimal Wait Times',
      desc: 'Smart digital scheduling ensures 95% of patients are seen within 15 minutes of scheduled appointment.',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Safety Protocols',
      desc: 'Stringent sterilization and HEPA-filtered cleanrooms exceeding international infection prevention norms.',
    },
    {
      icon: HeartHandshake,
      title: 'Compassionate Nursing Team',
      desc: 'Our registered nurses provide patient education, follow-up calls, and thoughtful post-treatment support.',
    },
    {
      icon: Smartphone,
      title: 'Secure Digital Portal',
      desc: 'Access lab results, physician consultation summaries, and prescription refills 24/7 on your mobile device.',
    },
    {
      icon: FileText,
      title: 'Transparent Billing',
      desc: 'Direct in-network insurance verification before procedures with clear out-of-pocket estimates and no surprise bills.',
    },
    {
      icon: Award,
      title: 'Integrated Care Team',
      desc: 'Primary care, diagnostic imaging, and 30+ specialists operate under unified medical record governance.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-tealbrand-700 bg-tealbrand-50 px-3 py-1 rounded-full mb-3">
            <span>The CarePlus Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Discerning Patients Entrust Their Care to Us
          </h2>
          <p className="text-slate-600 text-base">
            We redefine the outpatient clinic experience by combining clinical mastery with warmth and respect for your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-brand-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{adv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{adv.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
