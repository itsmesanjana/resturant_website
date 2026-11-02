import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-900/90 backdrop-blur-md border-b border-cyber-700 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-purple to-neon-cyan flex items-center justify-center text-white shadow-lg shadow-neon-purple/25 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-white block leading-none">
                NEXORA<span className="text-neon-cyan">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold block mt-0.5">
                Digital Engineering
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors relative py-1 hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Live Availability Badge */}
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-800 border border-cyber-700 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 text-[11px] font-medium">Q2/Q3 Slots Open</span>
            </div>

            <button
              onClick={onStartProject}
              className="bg-gradient-to-r from-neon-purple to-neon-indigo hover:from-neon-violet hover:to-neon-cyan text-white font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-lg shadow-neon-purple/20 transition-all flex items-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onStartProject}
              className="bg-neon-purple text-white text-xs font-bold px-3 py-1.5 rounded-lg sm:hidden"
            >
              Start
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cyber-950/98 border-b border-cyber-800 px-6 py-6 transition-all shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-display font-semibold text-slate-200 hover:text-neon-cyan py-1 border-b border-cyber-800/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-cyber-800 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full bg-gradient-to-r from-neon-purple to-neon-indigo text-white font-bold text-sm py-3 rounded-lg flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Initiate Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hello%20Nexora%20Digital,%20we%20have%20a%20new%20product%20initiative%20to%20discuss.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-cyber-700 text-slate-300 font-semibold text-xs py-2.5 rounded-lg text-center flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
