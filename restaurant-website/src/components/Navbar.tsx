import React, { useState, useEffect } from 'react';
import { Utensils, Phone, Calendar, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
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
    { label: 'Story', href: '#story' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Menu', href: '#menu' },
    { label: 'Ambiance', href: '#gallery' },
    { label: 'The Chef', href: '#chef' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-obsidian-950/80 via-obsidian-950/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center bg-obsidian-900 group-hover:border-gold-400 transition-colors">
              <Utensils className="w-5 h-5 text-gold-400 transition-transform group-hover:rotate-12" />
            </div>
            <div>
              <span className="font-serif text-2xl tracking-widest text-cream-50 font-semibold block leading-tight">
                SAFFRON <span className="text-gold-400 font-normal">&</span> SAGE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400/80 block">
                Fine Gastronomy • Mayfair
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-cream-200/80 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center space-x-2 text-xs uppercase tracking-wider text-cream-200/90 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenReservation}
              className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-obsidian-950 font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onOpenReservation}
              className="bg-gold-500 text-obsidian-950 text-xs font-semibold px-3 py-1.5 rounded-sm sm:hidden"
            >
              Reserve
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cream-200 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/98 border-b border-gold-500/20 backdrop-blur-xl px-6 py-8 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-cream-100 hover:text-gold-400 transition-colors py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-gold-500/20 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full bg-gold-500 text-obsidian-950 font-semibold text-sm uppercase tracking-widest py-3 rounded-sm flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Saffron%20%26%20Sage,%20I%20would%20like%20to%20enquire%20about%20a%20table%20reservation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 font-medium text-xs uppercase tracking-widest py-3 rounded-sm text-center"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
