import React, { useState, useEffect } from 'react';
import { PlusCircle, Phone, Calendar, Menu, X, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointment: (doctorId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
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
    { label: 'Specialties', href: '#specialties' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:bg-brand-600 transition-colors">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                CARE<span className="text-brand-500 font-extrabold">PLUS</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block">
                Medical & Specialty Clinic
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${CLINIC_INFO.emergencyLine}`}
              className="flex items-center space-x-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>24/7 Triage: {CLINIC_INFO.emergencyLine}</span>
            </a>

            <button
              onClick={() => onOpenAppointment()}
              className="bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs tracking-wide px-5 py-2.5 rounded-lg shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 transition-all flex items-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => onOpenAppointment()}
              className="bg-brand-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg md:hidden"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-600 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-brand-600 py-1 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full bg-brand-500 text-white font-semibold text-sm py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md shadow-brand-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full border border-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-lg text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>Call Clinic: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
