import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Sparkles, ArrowRight } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';

interface SignatureDishesProps {
  onOpenReservation: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenReservation }) => {
  return (
    <section id="signatures" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chef's Masterpieces</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-4">
            Signature Degustation
          </h2>
          <p className="text-cream-200/70 text-base font-light">
            Our most celebrated creations, refined over hundreds of service evenings and praised by international gastronomy critics.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-obsidian-900 border border-gold-500/15 hover:border-gold-500/50 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-gold-500/10"
            >
              {/* Dish Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent opacity-80" />
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-obsidian-950/90 border border-gold-500/40 px-3 py-1 rounded-sm text-gold-400 font-serif text-lg font-semibold backdrop-blur-sm">
                  {dish.price}
                </div>

                {/* Dietary Tag */}
                {dish.dietary && (
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                    {dish.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-sm backdrop-blur-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Dish Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-cream-50 group-hover:text-gold-400 transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-cream-200/70 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Sommelier Pairing */}
                {dish.pairing && (
                  <div className="pt-4 border-t border-gold-500/15 mt-2">
                    <div className="flex items-center space-x-2 text-xs text-gold-400 font-serif italic mb-3">
                      <Wine className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Pairing: {dish.pairing}</span>
                    </div>

                    <button
                      onClick={onOpenReservation}
                      className="w-full text-center py-2 text-xs uppercase tracking-widest text-cream-200 hover:text-gold-400 border border-gold-500/20 hover:border-gold-400/50 rounded-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <span>Reserve to Taste</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
