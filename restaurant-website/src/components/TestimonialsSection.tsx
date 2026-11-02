import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Critic Acclaim</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-4">
            Words of Reverence
          </h2>
          <p className="text-cream-200/70 text-base font-light">
            Insights from international epicurean publications and discerning guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-obsidian-900 border border-gold-500/15 p-8 rounded-sm relative flex flex-col justify-between group hover:border-gold-500/40 transition-colors shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex space-x-1 mb-6 text-gold-400">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>

                <p className="font-serif italic text-cream-100 text-lg leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-gold-500/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-gold-500/40"
                />
                <div>
                  <h4 className="font-serif text-cream-50 font-medium text-base">{t.author}</h4>
                  <div className="text-xs text-gold-400/90 font-medium">{t.publication}</div>
                  <div className="text-[11px] text-cream-200/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
