import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils, Wine, Download, MessageSquare } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'starters', label: 'Starters & Crudo' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'steaks', label: 'Wood-Fired & Steaks' },
    { id: 'desserts', label: 'Desserts & Sweets' },
    { id: 'cocktails', label: 'Cellar & Cocktails' },
  ];

  const filteredItems: MenuItem[] =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Seasonal Culinary Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-4">
            The Autumn Tasting Menu
          </h2>
          <p className="text-cream-200/70 text-base font-light">
            Every dish is prepared upon order using organic British terroir ingredients, Mediterranean delicacies, and rare global spices.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20 font-semibold'
                  : 'bg-obsidian-950/80 border border-gold-500/20 text-cream-200/80 hover:text-gold-400 hover:border-gold-500/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-obsidian-950 border border-gold-500/15 hover:border-gold-500/40 rounded-sm overflow-hidden flex flex-col group transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 right-3 bg-obsidian-950/90 border border-gold-500/40 px-3 py-1 rounded-sm text-gold-400 font-serif text-lg font-semibold">
                    {item.price}
                  </div>

                  {item.dietary && (
                    <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                      {item.dietary.map((d) => (
                        <span
                          key={d}
                          className="text-[9px] uppercase tracking-wider bg-obsidian-950/90 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-sm"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-cream-50 group-hover:text-gold-400 transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-cream-200/70 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  {item.pairing && (
                    <div className="flex items-center space-x-1.5 text-[11px] text-gold-400/90 font-serif italic pt-3 border-t border-gold-500/10">
                      <Wine className="w-3 h-3 shrink-0" />
                      <span className="truncate">{item.pairing}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Menu Footer Callout */}
        <div className="mt-16 bg-obsidian-950 border border-gold-500/20 p-8 rounded-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-gold-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Bespoke Dietary & Allergens</span>
            </div>
            <p className="text-xs text-cream-200/70">
              Our culinary brigade caters with distinction to all bespoke dietary, halal, kosher-style, and vegan requests.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello,%20could%20you%20please%20share%20the%20detailed%20autumn%20tasting%20menu%20and%20wine%20pairings%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-sm flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Menu Enquiries</span>
            </a>
            
            <button
              onClick={() => alert('Demo Feature: Full 12-course sommelier tasting PDF menu is triggered in production.')}
              className="border border-gold-500/30 hover:border-gold-400 text-cream-200 hover:text-gold-300 text-xs uppercase tracking-wider px-4 py-3 rounded-sm flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>PDF Menu</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
