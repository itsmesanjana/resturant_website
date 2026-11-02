import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyGrid } from './components/PropertyGrid';
import { PropertyCategories } from './components/PropertyCategories';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { AboutAgency } from './components/AboutAgency';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AgentEnquirySection } from './components/AgentEnquirySection';
import { Footer } from './components/Footer';
import { PROPERTIES } from './data/estateData';
import { Property, SearchFilterState } from './types';

export function App() {
  const [filters, setFilters] = useState<SearchFilterState>({
    searchQuery: '',
    listingType: 'All',
    category: 'All',
    maxPrice: 50000000,
    minBedrooms: 0,
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleSearchSubmit = () => {
    const el = document.getElementById('listings');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      <Navbar
        onScheduleViewing={() => setSelectedProperty(PROPERTIES[0])}
      />

      <main className="flex-1">
        <HeroSearch
          filters={filters}
          onFilterChange={setFilters}
          onSearchSubmit={handleSearchSubmit}
        />
        <FeaturedProperties
          properties={PROPERTIES}
          onSelectProperty={setSelectedProperty}
        />
        <PropertyGrid
          properties={PROPERTIES}
          filters={filters}
          onFilterChange={setFilters}
          onSelectProperty={setSelectedProperty}
        />
        <PropertyCategories
          onSelectCategory={(cat) => setFilters({ ...filters, category: cat })}
        />
        <AboutAgency />
        <WhyChooseUs />
        <TestimonialsSection />
        <AgentEnquirySection />
      </main>

      <Footer />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}

export default App;
