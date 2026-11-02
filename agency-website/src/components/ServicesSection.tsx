import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, ShoppingBag, Cloud, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-6 h-6 text-neon-purple" />;
      case 'Layers': return <Layers className="w-6 h-6 text-neon-cyan" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-neon-violet" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      default: return <Cloud className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-cyber-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neon-cyan bg-cyber-850 px-3.5 py-1 rounded-full border border-cyber-700 mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            End-to-End Digital Product Disciplines
          </h2>
          <p className="text-slate-400 text-base font-light">
            We handle everything from initial market discovery and interface design to complex distributed backend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cyber-850 border border-cyber-700/80 hover:border-neon-purple/50 p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-neon-purple/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyber-800 border border-cyber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(s.icon)}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  {s.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-cyber-700/60 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                    Key Deliverables
                  </span>
                  {s.deliverables.map((item) => (
                    <div key={item} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onSelectService}
                  className="w-full py-2.5 rounded-lg border border-cyber-700 hover:border-neon-purple text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white hover:bg-cyber-800 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Inquire Regarding Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
