import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Wine, Sparkles, Compass } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-obsidian-900 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gold-500/20 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80"
                  alt="Fine dining preparation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs tracking-wider uppercase text-gold-300 font-serif">
                  The Hearth & Embers
                </span>
              </div>
              <div className="p-6 bg-obsidian-950/90 border border-gold-500/20 rounded-sm">
                <div className="font-serif text-3xl sm:text-4xl text-gold-400 font-semibold mb-1">100%</div>
                <div className="text-xs uppercase tracking-wider text-cream-200/70">Organic Terroir Produce</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 pt-8"
            >
              <div className="p-6 bg-obsidian-950/90 border border-gold-500/20 rounded-sm">
                <div className="font-serif text-3xl sm:text-4xl text-gold-400 font-semibold mb-1">14+</div>
                <div className="text-xs uppercase tracking-wider text-cream-200/70">Years of Michelin Heritage</div>
              </div>
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gold-500/20 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80"
                  alt="Atmospheric restaurant interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs tracking-wider uppercase text-gold-300 font-serif">
                  Mayfair Sanctuary
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Culinary Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-6">
              Where Ancient Fire Meets Modern Gastronomic Poetry
            </h2>

            <p className="text-cream-200/80 text-base sm:text-lg font-light leading-relaxed mb-6">
              Founded in Mayfair, Saffron & Sage was created to restore the ritual of dining to its most soulful, sensory form. We source rare spices along the ancient silk road, pairing them with pristine British seafood, dry-aged heritage beef, and biodynamic organic produce grown exclusively for our kitchen.
            </p>

            <p className="text-cream-200/70 text-sm sm:text-base font-light leading-relaxed mb-8">
              Every course is prepared with ancient hearth craftsmanship—utilising cherrywood embers and white Japanese binchotan charcoal—accompanied by an award-winning cellar of over four hundred vintage crus.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gold-500/15">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-sm bg-obsidian-950 border border-gold-500/30 text-gold-400 shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-cream-100 font-serif text-lg font-medium">Binchotan Embers</h4>
                  <p className="text-xs text-cream-200/60 leading-relaxed mt-1">
                    Direct smoke-infusion at extreme heat locks in pure essence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-sm bg-obsidian-950 border border-gold-500/30 text-gold-400 shrink-0">
                  <Wine className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-cream-100 font-serif text-lg font-medium">Sommelier Pairings</h4>
                  <p className="text-xs text-cream-200/60 leading-relaxed mt-1">
                    Bespoke cellar journeys curated individually for each guest.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-sm bg-obsidian-950 border border-gold-500/30 text-gold-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-cream-100 font-serif text-lg font-medium">Seasonal Terroir</h4>
                  <p className="text-xs text-cream-200/60 leading-relaxed mt-1">
                    Menus evolve weekly following micro-season harvests.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-sm bg-obsidian-950 border border-gold-500/30 text-gold-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-cream-100 font-serif text-lg font-medium">Private Dining</h4>
                  <p className="text-xs text-cream-200/60 leading-relaxed mt-1">
                    Dedicated vaulted dining room for celebrations up to 24 guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
