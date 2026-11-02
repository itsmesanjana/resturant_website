import React from 'react';
import { WORK_PROCESS } from '../data/agencyData';

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-cyber-950 border-t border-b border-cyber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neon-purple bg-cyber-850 px-3.5 py-1 rounded-full border border-cyber-700 mb-3">
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            The 4-Step Velocity Framework
          </h2>
          <p className="text-slate-400 text-base font-light">
            We operate with surgical precision. No bloated bureaucracy, endless meetings, or vague deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((p) => (
            <div
              key={p.step}
              className="bg-cyber-900 border border-cyber-800 hover:border-neon-purple/50 p-6 rounded-2xl relative flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl font-extrabold text-cyber-700 group-hover:text-neon-cyan transition-colors">
                    {p.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-cyber-800 border border-cyber-700 text-neon-purple">
                    {p.duration}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cyber-800/80 text-[11px] font-mono text-neon-cyan flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                <span>Deterministic Milestone Delivery</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
