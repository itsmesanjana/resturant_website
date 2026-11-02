import React, { useState, useEffect } from 'react';
import { Building, Phone, Calendar, Menu, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/estateData';

interface NavbarProps {
  onScheduleViewing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleViewing }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured', href: '#featured' },
    { label: 'Properties', href: '#listings' },
    { label: 'Categories', href: '#categories' },
    { label: 'The Agency', href: '#agency' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141312]/95 backdrop-blur-md border-b border-stone-800 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#141312]/80 via-[#141312]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border border-[#C5A059] flex items-center justify-center bg-stone-900 group-hover:bg-[#C5A059]/20 transition-colors">
              <Building className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <span className="font-serif text-2xl tracking-[0.18em] text-white font-semibold block leading-tight">
                ESTATE<span className="text-[#C5A059]">VISTA</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 block">
                Private Estates & Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-stone-300 hover:text-[#C5A059] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={`tel:${AGENCY_INFO.phone}`}
              className="flex items-center space-x-2 text-xs text-stone-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{AGENCY_INFO.phone}</span>
            </a>

            <button
              onClick={onScheduleViewing}
              className="bg-[#C5A059] hover:bg-[#b08e48] text-stone-950 font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all shadow-lg flex items-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Viewing</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onScheduleViewing}
              className="bg-[#C5A059] text-stone-950 text-xs font-semibold px-3 py-1.5 rounded-sm md:hidden"
            >
              Tour
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#141312]/98 border-b border-stone-800 px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium text-stone-200 hover:text-[#C5A059] py-1 border-b border-stone-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onScheduleViewing();
              }}
              className="w-full bg-[#C5A059] text-stone-950 font-semibold text-xs uppercase tracking-widest py-3 rounded-sm flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Private Viewing</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
