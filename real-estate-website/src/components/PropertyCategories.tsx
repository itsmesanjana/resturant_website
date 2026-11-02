import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PropertyCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      title: 'Modern Estates',
      categoryKey: 'Modern Estate',
      count: '24 Available',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
      description: 'Glass-walled contemporary architectural pavilions and hillside promontories.',
    },
    {
      title: 'Waterfront Villas',
      categoryKey: 'Villa',
      count: '18 Available',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80',
      description: 'Private lakefront docks, coastal Mediterranean compounds, and private beaches.',
    },
    {
      title: 'Trophy Penthouses',
      categoryKey: 'Penthouse',
      count: '12 Available',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
      description: 'Multi-level sky mansions with rooftop infinity pools and 360-degree panoramas.',
    },
    {
      title: 'Historic Townhomes',
      categoryKey: 'Historic Townhome',
      count: '9 Available',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80',
      description: 'Restored Georgian freeholds, Parisian Haussmann apartments, and cast-iron lofts.',
    },
  ];

  return (
    <section id="categories" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A28] font-semibold block mb-2">
            Architectural Typologies
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight">
            Explore by Residence Genre
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => {
                onSelectCategory(cat.categoryKey);
                const el = document.getElementById('listings');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden border border-stone-200 cursor-pointer shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] bg-stone-900/90 px-2.5 py-1 rounded-sm border border-[#C5A059]/30">
                    {cat.count}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C5A059] group-hover:text-stone-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-white mb-2 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
