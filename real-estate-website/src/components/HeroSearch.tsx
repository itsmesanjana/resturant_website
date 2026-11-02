import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign, Bed, ArrowRight, ShieldCheck } from 'lucide-react';
import { SearchFilterState } from '../types';

interface HeroSearchProps {
  filters: SearchFilterState;
  onFilterChange: (filters: SearchFilterState) => void;
  onSearchSubmit: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  filters,
  onFilterChange,
  onSearchSubmit,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Architectural Photo with Dark Neutral Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=85"
          alt="EstateVista luxury architectural estate"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/60 to-[#141312]/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 w-full">
        {/* Prestige Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1 rounded-full border border-[#C5A059]/40 bg-stone-900/80 backdrop-blur-md mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-stone-200 font-medium">
            Ultra-Prime Global Real Estate Advisory
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.06] mb-6"
        >
          Architectural Mastery. <br />
          <span className="italic font-normal text-[#C5A059]">Extraordinary Living.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Representing private buyers and sellers of premier architectural residences, waterfront villas, and trophy penthouses worldwide.
        </motion.p>

        {/* Property Search Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="bg-stone-950/90 border border-stone-800 p-4 sm:p-6 rounded-sm shadow-2xl backdrop-blur-xl max-w-5xl mx-auto text-left"
        >
          {/* Buy / Rent Switcher */}
          <div className="flex items-center space-x-4 mb-5 border-b border-stone-800 pb-4">
            {(['All', 'Buy', 'Rent'] as const).map((type) => (
              <button
                key={type}
                onClick={() => {
                  const defaultPrice = type === 'Rent' ? 1000000 : 50000000;
                  onFilterChange({ ...filters, listingType: type, maxPrice: defaultPrice });
                }}
                className={`text-xs uppercase tracking-widest font-semibold pb-1 transition-all cursor-pointer ${
                  filters.listingType === type
                    ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {type === 'All' ? 'All Residences' : `For ${type}`}
              </button>
            ))}
          </div>

          {/* Search Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location / Keyword Search */}
            <div className="bg-stone-900/90 border border-stone-800 p-3 rounded-sm">
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1 flex items-center space-x-1 font-medium">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Location or Keyword</span>
              </label>
              <input
                type="text"
                placeholder="Bel-Air, Miami, London, Como..."
                value={filters.searchQuery}
                onChange={(e) =>
                  onFilterChange({ ...filters, searchQuery: e.target.value })
                }
                className="w-full bg-transparent text-white text-xs placeholder:text-stone-500 focus:outline-none"
              />
            </div>

            {/* Property Type */}
            <div className="bg-stone-900/90 border border-stone-800 p-3 rounded-sm">
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1 flex items-center space-x-1 font-medium">
                <Home className="w-3 h-3 text-[#C5A059]" />
                <span>Property Category</span>
              </label>
              <select
                value={filters.category}
                onChange={(e) =>
                  onFilterChange({ ...filters, category: e.target.value })
                }
                className="w-full bg-transparent text-white text-xs focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-stone-900 text-white">All Architecture Styles</option>
                <option value="Modern Estate" className="bg-stone-900 text-white">Modern Estates</option>
                <option value="Penthouse" className="bg-stone-900 text-white">Penthouses</option>
                <option value="Villa" className="bg-stone-900 text-white">Waterfront Villas</option>
                <option value="Historic Townhome" className="bg-stone-900 text-white">Historic Townhomes</option>
              </select>
            </div>

            {/* Bedrooms Count */}
            <div className="bg-stone-900/90 border border-stone-800 p-3 rounded-sm">
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1 flex items-center space-x-1 font-medium">
                <Bed className="w-3 h-3 text-[#C5A059]" />
                <span>Bedrooms</span>
              </label>
              <select
                value={filters.minBedrooms}
                onChange={(e) =>
                  onFilterChange({ ...filters, minBedrooms: Number(e.target.value) })
                }
                className="w-full bg-transparent text-white text-xs focus:outline-none cursor-pointer"
              >
                <option value={0} className="bg-stone-900 text-white">Any Bedrooms</option>
                <option value={4} className="bg-stone-900 text-white">4+ Bedrooms</option>
                <option value={5} className="bg-stone-900 text-white">5+ Bedrooms</option>
                <option value={6} className="bg-stone-900 text-white">6+ Bedrooms</option>
              </select>
            </div>

            {/* Price Filter & Action */}
            <div className="bg-stone-900/90 border border-stone-800 p-3 rounded-sm">
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1 flex items-center space-x-1 font-medium">
                <DollarSign className="w-3 h-3 text-[#C5A059]" />
                <span>Max Budget</span>
              </label>
              <select
                value={filters.maxPrice}
                onChange={(e) =>
                  onFilterChange({ ...filters, maxPrice: Number(e.target.value) })
                }
                className="w-full bg-transparent text-white text-xs focus:outline-none cursor-pointer"
              >
                {filters.listingType === 'Rent' ? (
                  <>
                    <option value={1000000} className="bg-stone-900 text-white">All Rental Rates</option>
                    <option value={50000} className="bg-stone-900 text-white">Under $50,000 / month</option>
                    <option value={100000} className="bg-stone-900 text-white">Under $100,000 / month</option>
                  </>
                ) : (
                  <>
                    <option value={50000000} className="bg-stone-900 text-white">All Purchase Prices</option>
                    <option value={20000000} className="bg-stone-900 text-white">Under $20,000,000</option>
                    <option value={30000000} className="bg-stone-900 text-white">Under $30,000,000</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Search Trigger Button */}
          <div className="mt-5 flex justify-end">
            <button
              onClick={onSearchSubmit}
              className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#b08e48] text-stone-950 font-bold px-8 py-3.5 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg"
            >
              <Search className="w-4 h-4" />
              <span>Explore Available Residences</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
