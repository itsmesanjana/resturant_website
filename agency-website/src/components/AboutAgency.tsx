import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Shield, Rocket } from 'lucide-react';

export const AboutAgency: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cyber-950 border-t border-b border-cyber-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Code Box / Graphic */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-cyber-900 border border-cyber-700 rounded-2xl overflow-hidden shadow-2xl p-6 relative group"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-cyber-800 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">nexora-engine-v4.ts</span>
              </div>

              {/* Code Mockup */}
              <div className="font-mono text-xs text-slate-300 space-y-2 leading-relaxed">
                <div>
                  <span className="text-neon-purple font-semibold">import</span>{' '}
                  <span className="text-white">{'{ Architect, Scale }'}</span>{' '}
                  <span className="text-neon-purple font-semibold">from</span>{' '}
                  <span className="text-neon-cyan">'@nexora/core'</span>;
                </div>
                <div className="text-slate-500 italic">// Zero technical debt. Infinite scalability.</div>
                <div>
                  <span className="text-neon-violet font-semibold">const</span>{' '}
                  <span className="text-white">product</span> ={' '}
                  <span className="text-neon-cyan font-semibold">new</span>{' '}
                  <span className="text-emerald-400">Architect</span>({'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">performance:</span>{' '}
                  <span className="text-yellow-400">'Sub-second Core Web Vitals'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">architecture:</span>{' '}
                  <span className="text-yellow-400">'Domain-Driven Typesafe'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">aiIntegration:</span>{' '}
                  <span className="text-emerald-400">true</span>,
                </div>
                <div>{'}'});</div>
                <div>
                  <span className="text-neon-purple font-semibold">await</span>{' '}
                  <span className="text-white">product</span>.
                  <span className="text-neon-cyan">deployToGlobalEdge</span>();
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyber-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-400 font-semibold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>All Systems Operational</span>
                </span>
                <span>Latency: 18ms</span>
              </div>
            </motion.div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neon-cyan bg-cyber-850 px-3.5 py-1 rounded-full border border-cyber-700">
              <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
              <span>Agency Philosophy & Manifesto</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Bridging the Chasm Between High Art and Bulletproof Code
            </h2>

            <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg">
              Most software agencies force clients into a compromise: beautiful design that buckles under enterprise traffic, or clunky technical architecture with soulless user experience. Nexora Digital was founded to obliterate this false choice.
            </p>

            <p className="text-slate-400 font-light leading-relaxed text-sm">
              We operate as high-velocity product squads. Every engineer on our team possesses deep design intuition, and our designers write production code. Together with our global studios in San Francisco and London, we engineer web platforms that captivate users and scale to millions of concurrent sessions.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-cyber-800">
              <div className="p-4 rounded-xl bg-cyber-900 border border-cyber-800">
                <Rocket className="w-5 h-5 text-neon-purple mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">Velocity Without Debt</h4>
                <p className="text-xs text-slate-400">Rapid two-week sprint cadence with clean TypeScript types.</p>
              </div>

              <div className="p-4 rounded-xl bg-cyber-900 border border-cyber-800">
                <Cpu className="w-5 h-5 text-neon-cyan mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">AI-First Tooling</h4>
                <p className="text-xs text-slate-400">Embed intelligent automation directly into business logic.</p>
              </div>

              <div className="p-4 rounded-xl bg-cyber-900 border border-cyber-800">
                <Shield className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">100% IP Transfer</h4>
                <p className="text-xs text-slate-400">Complete code, Figma, and infrastructure ownership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
