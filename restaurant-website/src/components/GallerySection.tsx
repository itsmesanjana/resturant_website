import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Atmosphere & Artistry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-4">
            An Intimate Mayfair Sanctuary
          </h2>
          <p className="text-cream-200/70 text-base font-light">
            Designed with antique smoked mirrors, hand-chiseled slate, bronze accents, and warm candlelight.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer border border-gold-500/20 bg-obsidian-900"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              {/* Overlay Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-cream-100 font-medium">
                  {item.title}
                </h3>
              </div>

              {/* Zoom Icon indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-obsidian-950/80 border border-gold-500/40 flex items-center justify-center text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-cream-200 hover:text-gold-400 p-2 z-10"
              aria-label="Close Preview"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full bg-obsidian-900 border border-gold-500/30 rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-obsidian-950 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 block mb-1">
                    {selectedImage.category}
                  </span>
                  <h4 className="font-serif text-2xl text-cream-50">{selectedImage.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 text-xs uppercase tracking-wider rounded-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
