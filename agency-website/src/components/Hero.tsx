import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-cyber-900">
      {/* Background Neon Blobs & Grid Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-neon-purple/20 via-neon-indigo/20 to-neon-cyan/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E294515_1px,transparent_1px),linear-gradient(to_bottom,#1E294515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neon-purple/40 bg-cyber-850/80 backdrop-blur-md mb-8 shadow-lg shadow-neon-purple/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
          <span className="text-xs uppercase tracking-widest text-slate-200 font-semibold">
            Next-Gen Web Engineering & AI Solutions
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
          <span className="text-xs text-neon-cyan font-bold">San Francisco • London</span>
        </motion.div>

        {/* Dynamic Gradient Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight leading-[1.05] mb-8"
        >
          We Architect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-purple">
            Market-Defining
          </span>{' '}
          Digital Products.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-10"
        >
          Nexora Digital is an elite engineering and design consultancy. We partner with venture-backed startups and category leaders to build high-velocity web platforms, resilient architectures, and intelligent software systems.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto bg-gradient-to-r from-neon-purple via-neon-violet to-neon-cyan hover:opacity-95 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-neon-purple/25 transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 cursor-pointer"
          >
            <span>Launch Your Next Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#projects"
            className="w-full sm:w-auto border border-cyber-600 hover:border-neon-cyan/50 bg-cyber-850/80 hover:bg-cyber-800 text-slate-200 hover:text-white px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Code2 className="w-4 h-4 text-neon-cyan" />
            <span>Explore Case Studies</span>
          </a>
        </motion.div>

        {/* Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-cyber-850/90 border border-cyber-700/80 shadow-2xl backdrop-blur-xl max-w-4xl mx-auto text-left"
        >
          {AGENCY_INFO.stats.map((stat) => (
            <div key={stat.label} className="border-r last:border-r-0 border-cyber-700/50 px-3">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Client / Tech Marquee */}
        <div className="mt-16 pt-8 border-t border-cyber-800/80 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold block mb-4">
            Trusted by Builders from Premier Ecosystems
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            {AGENCY_INFO.clientLogos.map((logo) => (
              <div key={logo} className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan" />
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
