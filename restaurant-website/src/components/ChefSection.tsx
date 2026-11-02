import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, CheckCircle2 } from 'lucide-react';
import { CHEF_INFO } from '../data/restaurantData';

export const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-24 bg-obsidian-900 border-t border-b border-gold-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chef Image with Gold Framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border-2 border-gold-500/30 shadow-2xl relative">
                <img
                  src={CHEF_INFO.image}
                  alt={CHEF_INFO.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating Accolade Badge */}
              <div className="absolute -bottom-6 -right-6 bg-obsidian-950 border border-gold-500/40 p-4 rounded-sm shadow-xl hidden sm:block max-w-[200px]">
                <Award className="w-8 h-8 text-gold-400 mb-2" />
                <div className="text-xs font-serif text-cream-100 font-medium">Michelin Distinction</div>
                <div className="text-[10px] text-cream-200/60 uppercase tracking-wider">Europe & UK Guild</div>
              </div>
            </div>
          </motion.div>

          {/* Biography & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Visionary Culinary Director</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-2">
              {CHEF_INFO.name}
            </h2>
            <div className="text-sm uppercase tracking-widest text-gold-400/90 font-serif mb-6">
              {CHEF_INFO.title}
            </div>

            <p className="text-cream-200/80 text-base leading-relaxed mb-6 font-light">
              {CHEF_INFO.bio}
            </p>

            {/* Quote Callout */}
            <div className="relative bg-obsidian-950/80 border-l-2 border-gold-400 p-6 my-6 rounded-r-sm">
              <Quote className="w-8 h-8 text-gold-500/20 absolute top-4 right-4" />
              <p className="font-serif italic text-lg sm:text-xl text-cream-100 leading-relaxed">
                {CHEF_INFO.philosophy}
              </p>
            </div>

            {/* Accolades List */}
            <div className="pt-4">
              <div className="text-xs uppercase tracking-wider text-cream-200/50 mb-3 font-medium">
                Accreditation & Career Honors
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHEF_INFO.accolades.map((acc) => (
                  <div key={acc} className="flex items-center space-x-2.5 text-xs text-cream-200/90">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{acc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
