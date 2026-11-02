import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Stethoscope, Building2, Clock, Video, Dumbbell, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/clinicData';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scan': return <Scan className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      default: return <Dumbbell className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
            <span>Clinical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Patient-Centered Clinical Services
          </h2>
          <p className="text-slate-600 text-base">
            Equipped with contemporary diagnostic apparatus, rapid clinical pathology, and seamless digital patient workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv, index) => (
            <motion.div
              key={serv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  {getServiceIcon(serv.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {serv.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {serv.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                {serv.features.map((feat) => (
                  <div key={feat} className="flex items-start space-x-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-tealbrand-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
