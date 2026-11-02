import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-cyber-950/90 backdrop-blur-md overflow-y-auto p-4 sm:p-6 lg:p-10 flex items-center justify-center cursor-pointer"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl my-8 bg-cyber-900 border border-cyber-700 rounded-2xl shadow-2xl overflow-hidden cursor-default"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-cyber-800 text-slate-300 hover:text-white border border-cyber-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero image banner */}
          <div className="relative aspect-[21/9] overflow-hidden bg-cyber-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-900 via-cyber-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-widest text-neon-cyan font-bold bg-cyber-950/80 px-3 py-1 rounded-full border border-neon-cyan/30 inline-block mb-2">
                {project.category} • {project.client}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-cyber-850 border border-cyber-750 text-center">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-neon-cyan">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-cyber-850/80 border border-cyber-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-rose-400 mb-2 flex items-center space-x-2">
                  <span>The Architectural Challenge</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-cyber-850/80 border border-cyber-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-2 flex items-center space-x-2">
                  <span>The Engineering Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack list */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300 mb-3 flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-neon-purple" />
                <span>Production Stack Deployed</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-cyber-800 border border-cyber-700 text-neon-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA bar */}
            <div className="pt-4 border-t border-cyber-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => alert(`Demo Application: Live demo link trigger for ${project.title}`)}
                className="w-full sm:w-auto border border-cyber-700 hover:border-neon-cyan text-slate-200 hover:text-white px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Demo Environment</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-neon-purple to-neon-indigo hover:opacity-95 text-white font-bold px-7 py-3 rounded-lg text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg"
              >
                <span>Request Similar Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
