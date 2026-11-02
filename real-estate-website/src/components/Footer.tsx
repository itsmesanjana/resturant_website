import React from 'react';
import { Building, MapPin, Phone, Mail } from 'lucide-react';
import { AGENCY_INFO } from '../data/estateData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 border border-[#C5A059] flex items-center justify-center bg-stone-900">
                <Building className="w-5 h-5 text-[#C5A059]" />
              </div>
              <span className="font-serif text-2xl tracking-[0.18em] text-white font-semibold">
                ESTATE<span className="text-[#C5A059]">VISTA</span>
              </span>
            </div>
            <p className="text-xs text-stone-500 font-light leading-relaxed max-w-sm">
              Global ultra-prime architectural real estate brokerage and private family office advisory. Member of international luxury real estate syndicates.
            </p>
            <div className="pt-2 text-xs text-stone-400">
              <span className="text-stone-300 font-semibold block mb-1">Global Metropolitan Desks:</span>
              <div className="flex flex-wrap gap-2 text-[11px] text-[#C5A059]">
                {AGENCY_INFO.locations.map((loc) => (
                  <span key={loc} className="border border-stone-800 px-2 py-0.5 rounded-sm bg-stone-900">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Residences
            </h4>
            <ul className="space-y-2 text-xs text-stone-500">
              <li><a href="#featured" className="hover:text-white transition-colors">Trophy Estates</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">Modern Glass Pavilions</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">Waterfront Villas</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">Sky Penthouses</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">Historic Freeholds</a></li>
            </ul>
          </div>

          {/* The Firm */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              The Firm
            </h4>
            <ul className="space-y-2 text-xs text-stone-500">
              <li><a href="#agency" className="hover:text-white transition-colors">About EstateVista</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Off-Market Ledger</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Endorsements</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Partner Directory</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Private Escrow Advisory</a></li>
            </ul>
          </div>

          {/* Global Headquarters */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Global Headquarters
            </h4>
            <div className="space-y-2 text-xs text-stone-500">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{AGENCY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fictional Demo Property Disclaimer */}
        <div className="py-6 text-xs text-stone-500 leading-relaxed border-b border-stone-800">
          <p>
            <strong>Demo Portfolio Notice:</strong> EstateVista is a conceptual luxury portfolio application designed to exhibit high-end real estate frontend architecture. All properties, architectural descriptions, photography pairings, pricing figures, and agent personas are fictional demo representations.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-4">
          <p>© {new Date().getFullYear()} EstateVista Global Real Estate Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-400">Client Confidentiality Agreement</a>
            <a href="#" className="hover:text-stone-400">Equal Housing Opportunity</a>
            <a href="#" className="hover:text-stone-400">Terms of Representation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
