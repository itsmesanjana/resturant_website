import React from 'react';
import { Zap, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-950 text-slate-400 pt-16 pb-12 border-t border-cyber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cyber-800">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-purple to-neon-cyan flex items-center justify-center text-white">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                NEXORA<span className="text-neon-cyan">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Creative digital engineering studio. Crafting next-generation SaaS architectures, bespoke design systems, and autonomous AI pipelines for market pioneers.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-cyber-900 border border-cyber-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-cyber-900 border border-cyber-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-cyan transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-cyber-900 border border-cyber-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Engineering
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Next.js & React Apps</a></li>
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Product UI/UX Systems</a></li>
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Generative AI & RAG</a></li>
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Headless Shopify Plus</a></li>
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Cloud & Kubernetes</a></li>
            </ul>
          </div>

          {/* Agency */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-neon-cyan transition-colors">Our Manifesto</a></li>
              <li><a href="#projects" className="hover:text-neon-cyan transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-neon-cyan transition-colors">Velocity Framework</a></li>
              <li><a href="#pricing" className="hover:text-neon-cyan transition-colors">Sprint Pricing</a></li>
              <li><a href="#faq" className="hover:text-neon-cyan transition-colors">Client FAQs</a></li>
            </ul>
          </div>

          {/* Studios */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Global Studios
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                <span>San Francisco HQ • 500 Howard Street, SOMA</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-neon-purple shrink-0 mt-0.5" />
                <span>London Studio • 12 Shoreditch High Street, E1</span>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="w-4 h-4 text-neon-cyan shrink-0" />
                <span>{AGENCY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-neon-cyan shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <div className="py-6 text-xs text-slate-500 leading-relaxed border-b border-cyber-800">
          <p>
            <strong>Portfolio Showcase:</strong> Nexora Digital is an agency frontend showcase created to exhibit modern agency aesthetics, reactive case study modals, pricing engines, and brief generation.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Nexora Digital Engineering Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Confidentiality Standard</a>
            <a href="#" className="hover:text-slate-300">Security Architecture</a>
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
