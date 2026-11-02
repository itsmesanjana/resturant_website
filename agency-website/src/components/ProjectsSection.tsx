import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/agencyData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'FinTech', 'AI & SaaS', 'E-Commerce', 'Web3'];

  const filtered =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-cyber-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neon-cyan bg-cyber-850 px-3.5 py-1 rounded-full border border-cyber-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-neon-purple text-white shadow-lg shadow-neon-purple/20'
                    : 'bg-cyber-800 text-slate-400 hover:text-white hover:bg-cyber-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => onSelectProject(proj)}
                className="bg-cyber-850 border border-cyber-700/80 hover:border-neon-cyan/50 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-neon-cyan/10 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-cyber-950">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-900 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 bg-cyber-950/90 text-neon-cyan border border-neon-cyan/30 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold backdrop-blur-md">
                      {proj.category}
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cyber-950/80 border border-cyber-700 flex items-center justify-center text-white group-hover:bg-neon-purple group-hover:border-neon-purple transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                      {proj.client}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                      {proj.tagline}
                    </p>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-3 gap-2 p-3.5 bg-cyber-900 border border-cyber-750 rounded-xl mb-6 text-center">
                      {proj.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display font-extrabold text-neon-cyan text-base sm:text-lg">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-slate-300 bg-cyber-800 border border-cyber-700 px-2.5 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <div className="pt-4 border-t border-cyber-800 flex items-center justify-between text-xs font-semibold text-neon-cyan group-hover:text-white transition-colors">
                    <span>Inspect Full Architectural Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
