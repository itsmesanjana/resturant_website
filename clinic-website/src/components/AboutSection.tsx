import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeartHandshake, Microscope, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Patient-First Ethics',
      description: 'Transparent treatment planning where patient dignity, comfort, and informed consent guide every decision.',
    },
    {
      icon: Microscope,
      title: 'Diagnostic Precision',
      description: 'High-resolution imaging suites and on-site molecular pathology ensure faster, verified diagnoses.',
    },
    {
      icon: Award,
      title: 'Interdisciplinary Panels',
      description: 'Specialists collaborate weekly to review complex clinical cases for holistic, unified recovery plans.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80"
                  alt="Modern clean hospital corridor"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg pt-6"
              >
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80"
                  alt="Modern clinical examination equipment"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              <span>About CarePlus Medical</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Modern Healthcare Sanctuary Built on Clinical Integrity
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              Founded over 25 years ago, CarePlus Medical has evolved into a premier regional ambulatory clinic. We believe medicine should be both scientifically rigorous and deeply comforting. Our outpatient facility brings together primary physicians, board-certified surgeons, and cutting-edge imaging technologies under one roof.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm">
              We eliminate the stress of disjointed medical care. With digital record integration, same-day specialist consultations, and zero hidden fees, you and your loved ones receive seamless medical attention.
            </p>

            <div className="space-y-4 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{pillar.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center space-x-6 text-xs text-slate-600 font-semibold">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-tealbrand-500" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-tealbrand-500" />
                <span>In-Network with Major Insurers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
