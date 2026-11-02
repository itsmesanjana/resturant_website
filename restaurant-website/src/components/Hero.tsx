import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ChevronDown, Clock, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Dark Vignette & Gold Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&auto=format&fit=crop&q=85"
          alt="Saffron & Sage Fine Gastronomy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/75 to-obsidian-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#070605_80%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        {/* Prestige Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-obsidian-900/80 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-gold-300 font-medium">
            Michelin Guide Recommended 2024
          </span>
          <span className="w-1 h-1 rounded-full bg-gold-400" />
          <span className="text-xs text-cream-200/90 hidden sm:inline">Mayfair, London</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight font-medium text-cream-50 leading-[1.08] mb-6"
        >
          Artisanal Gastronomy <br />
          <span className="italic font-normal gold-gradient-text">& Open Flame Artistry</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-cream-200/80 font-light leading-relaxed mb-10"
        >
          {RESTAURANT_INFO.description}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-gold-500/20 transform hover:-translate-y-1 flex items-center justify-center space-x-3 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table Online</span>
          </button>
          
          <a
            href="#menu"
            className="w-full sm:w-auto border border-gold-500/40 hover:border-gold-400 text-cream-100 hover:text-gold-300 hover:bg-gold-500/10 px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Explore Tasting Menu</span>
          </a>
        </motion.div>

        {/* Key Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-gold-500/20 pt-8 max-w-3xl mx-auto text-left"
        >
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-wider text-cream-200/60">Lunch & Dinner</div>
              <div className="text-xs sm:text-sm font-medium text-cream-100">Tue – Sun Service</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Award className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-wider text-cream-200/60">Sommelier Selection</div>
              <div className="text-xs sm:text-sm font-medium text-cream-100">450+ Curated Cellar</div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center space-x-3 justify-center md:justify-start">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <div className="text-[11px] uppercase tracking-wider text-cream-200/60">Status</div>
              <div className="text-xs sm:text-sm font-medium text-emerald-400">Tonight's Tables Open</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#story"
        aria-label="Scroll to introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-200/60 hover:text-gold-400 transition-colors flex flex-col items-center space-y-1"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
