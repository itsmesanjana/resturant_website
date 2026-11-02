import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, ArrowRight, RotateCcw } from 'lucide-react';
import { Property, SearchFilterState } from '../types';

interface PropertyGridProps {
  properties: Property[];
  filters: SearchFilterState;
  onFilterChange: (filters: SearchFilterState) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  filters,
  onFilterChange,
  onSelectProperty,
}) => {
  const categoryFilters = [
    'All',
    'Modern Estate',
    'Penthouse',
    'Villa',
    'Historic Townhome',
  ];

  // Filtering Logic
  const filtered = properties.filter((p) => {
    // Listing Type (Buy/Rent/All)
    if (filters.listingType !== 'All' && p.listingType !== filters.listingType) {
      return false;
    }
    // Category
    if (filters.category !== 'All' && p.category !== filters.category) {
      return false;
    }
    // Bedrooms
    if (filters.minBedrooms > 0 && p.bedrooms < filters.minBedrooms) {
      return false;
    }
    // Max price
    if (filters.maxPrice < 50000000 && p.price > filters.maxPrice) {
      return false;
    }
    // Search query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      const match =
        p.title.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.architecturalStyle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const handleReset = () => {
    onFilterChange({
      searchQuery: '',
      listingType: 'All',
      category: 'All',
      maxPrice: 50000000,
      minBedrooms: 0,
    });
  };

  return (
    <section id="listings" className="py-24 bg-white border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C6A28] font-semibold block mb-2">
              Global Portfolio Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
              Available Architectural Residences
            </h2>
          </div>

          {/* Results Count & Reset */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0 text-xs text-stone-500">
            <span>Showing <strong className="text-stone-900">{filtered.length}</strong> of {properties.length} Properties</span>
            {(filters.searchQuery || filters.category !== 'All' || filters.listingType !== 'All' || filters.minBedrooms > 0) && (
              <button
                onClick={handleReset}
                className="flex items-center space-x-1 text-[#8C6A28] hover:text-[#C5A059] font-semibold cursor-pointer underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center flex-wrap gap-2 mb-10">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterChange({ ...filters, category: cat })}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer ${
                filters.category === cat
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat === 'All' ? 'All Residences' : cat}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-[#FAF9F6] border border-dashed border-stone-300 rounded-sm">
            <h3 className="font-serif text-2xl text-stone-800 mb-2">No Matching Properties</h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto mb-6">
              We could not find residences matching your specific criteria. Try adjusting your price threshold or search terms.
            </p>
            <button
              onClick={handleReset}
              className="bg-stone-900 text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-sm hover:bg-[#C5A059] hover:text-stone-950 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filtered.map((prop) => (
                <motion.div
                  layout
                  key={prop.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectProperty(prop)}
                  className="bg-[#FAF9F6] border border-stone-200 rounded-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={prop.images[0]}
                        alt={prop.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm">
                        {prop.listingType === 'Buy' ? 'For Sale' : 'Private Lease'}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/95 text-stone-900 text-sm font-serif font-bold px-3 py-1 rounded-sm shadow">
                        {prop.formattedPrice}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center space-x-1.5 text-xs text-stone-400 uppercase tracking-wider mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>{prop.location}</span>
                      </div>

                      <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-[#8C6A28] transition-colors mb-2">
                        {prop.title}
                      </h3>

                      <p className="text-xs text-stone-500 line-clamp-2 font-light leading-relaxed mb-4">
                        {prop.description}
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-stone-200 text-stone-600 text-xs">
                        <div className="flex items-center space-x-1">
                          <Bed className="w-3.5 h-3.5 text-stone-400" />
                          <span>{prop.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath className="w-3.5 h-3.5 text-stone-400" />
                          <span>{prop.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Maximize className="w-3.5 h-3.5 text-stone-400" />
                          <span>{prop.sqft.toLocaleString()} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button className="w-full py-2 text-xs uppercase tracking-widest font-semibold text-stone-800 group-hover:text-[#8C6A28] border-t border-stone-200 flex items-center justify-between transition-colors">
                      <span>Inspect Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};
