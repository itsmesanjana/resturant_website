import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Cloud } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/agencyData';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Terminal className="w-5 h-5 text-neon-cyan" />;
      case 1: return <Database className="w-5 h-5 text-neon-purple" />;
      case 2: return <Cpu className="w-5 h-5 text-neon-violet" />;
      default: return <Cloud className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="tech" className="py-24 bg-cyber-950 border-t border-b border-cyber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neon-purple bg-cyber-850 px-3.5 py-1 rounded-full border border-cyber-700 mb-3">
            <span>Modern Production Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Battle-Tested Technology Stack
          </h2>
          <p className="text-slate-400 text-base font-light">
            We reject ephemeral hype in favor of stable, highly optimized frameworks capable of handling high throughput.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-neon-purple to-neon-indigo text-white shadow-lg shadow-neon-purple/20'
                  : 'bg-cyber-900 border border-cyber-800 text-slate-400 hover:text-white hover:border-cyber-700'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {TECH_CATEGORIES[activeTab].items.map((tech) => (
            <div
              key={tech}
              className="bg-cyber-900/90 border border-cyber-800 hover:border-neon-cyan/40 p-5 rounded-xl text-center flex flex-col items-center justify-center space-y-2 group transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-cyber-800 border border-cyber-700 flex items-center justify-center text-neon-cyan group-hover:scale-110 group-hover:text-neon-purple transition-all">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-sm text-slate-200 group-hover:text-white transition-colors">
                {tech}
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                Production Verified
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
