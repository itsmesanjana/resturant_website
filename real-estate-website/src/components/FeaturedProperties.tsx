import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, ArrowRight, Sparkles } from 'lucide-react';
import { Property } from '../types';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
}) => {
  const featured = properties.filter((p) => p.featured);

  return (
    <section id="featured" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#8C6A28] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Private Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
              Trophy Featured Residences
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-md mt-4 md:mt-0 font-light">
            Each home in this collection represents the absolute zenith of global architectural design, craftsmanship, and location.
          </p>
        </div>

        {/* Featured Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => onSelectProperty(prop)}
              className="bg-white border border-stone-200/90 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/90 text-[#C5A059] border border-[#C5A059]/30 text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm font-semibold backdrop-blur-md">
                    {prop.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 text-stone-900 text-sm font-serif font-bold px-3.5 py-1.5 rounded-sm shadow-md">
                    {prop.formattedPrice}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center space-x-1.5 text-xs text-stone-400 uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{prop.city}, {prop.country}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-stone-900 group-hover:text-[#8C6A28] transition-colors mb-2">
                    {prop.title}
                  </h3>

                  <p className="text-xs text-stone-500 font-light leading-relaxed mb-6 line-clamp-2">
                    {prop.tagline}
                  </p>

                  {/* Specs Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-stone-100 text-stone-700 text-xs">
                    <div className="flex items-center space-x-1.5">
                      <Bed className="w-3.5 h-3.5 text-stone-400" />
                      <span>{prop.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Bath className="w-3.5 h-3.5 text-stone-400" />
                      <span>{prop.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Maximize className="w-3.5 h-3.5 text-stone-400" />
                      <span>{prop.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold text-stone-800 group-hover:text-[#8C6A28] flex items-center justify-between border-t border-stone-100 transition-colors">
                  <span>View Architectural Dossier</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
