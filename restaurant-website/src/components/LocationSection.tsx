import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-obsidian-950 relative border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mayfair Destination</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-4">
                Location & Service Hours
              </h2>
              <p className="text-cream-200/70 text-sm sm:text-base font-light">
                Nestled within a historic 19th-century Georgian townhome on Belgravia Crescent.
              </p>
            </div>

            {/* Address & Direct Inquiries */}
            <div className="space-y-4 border-l-2 border-gold-500/40 pl-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gold-400/90 font-medium block mb-1">
                  Physical Address
                </span>
                <p className="text-cream-100 font-serif text-lg leading-snug">
                  {RESTAURANT_INFO.address}
                </p>
                <span className="text-xs text-cream-200/50 mt-1 block">
                  Complimentary valet parking available at our private mews entrance.
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-gold-400/90 font-medium block mb-1">
                  Private Concierge & Bookings
                </span>
                <div className="flex flex-col space-y-1">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-cream-100 hover:text-gold-400 text-sm font-medium transition-colors flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>{RESTAURANT_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-cream-200/70 hover:text-gold-400 text-sm transition-colors flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4 text-gold-400" />
                    <span>{RESTAURANT_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-obsidian-900 border border-gold-500/20 p-6 rounded-sm">
              <div className="flex items-center space-x-2 text-gold-400 mb-4 font-serif text-lg font-medium">
                <Clock className="w-5 h-5" />
                <span>Service Times</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-gold-500/10 pb-2">
                  <span className="text-cream-200/80">Lunch Service:</span>
                  <span className="text-cream-100 font-medium">{RESTAURANT_INFO.hours.lunch}</span>
                </div>
                <div className="flex justify-between border-b border-gold-500/10 pb-2">
                  <span className="text-cream-200/80">Dinner Service:</span>
                  <span className="text-cream-100 font-medium">{RESTAURANT_INFO.hours.dinner}</span>
                </div>
                <div className="flex justify-between border-b border-gold-500/10 pb-2">
                  <span className="text-cream-200/80">Sunday Evening:</span>
                  <span className="text-cream-100 font-medium">{RESTAURANT_INFO.hours.sundayDinner}</span>
                </div>
                <div className="flex justify-between text-gold-400/80 pt-1">
                  <span>Mondays:</span>
                  <span>{RESTAURANT_INFO.hours.closed}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Button */}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Saffron%20%26%20Sage,%20I%20would%20like%20to%20enquire%20about%20a%20private%20dining%20table.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366]/90 hover:bg-[#25D366] text-obsidian-950 font-semibold px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with Mayfair Concierge via WhatsApp</span>
            </a>
          </div>

          {/* Interactive Google Map Simulation with Stylized Embed & Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[16/11] rounded-sm overflow-hidden border border-gold-500/30 relative shadow-2xl bg-obsidian-900">
              {/* Google Maps Embed iframe */}
              <iframe
                title="Saffron and Sage Mayfair London Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9934.332309852238!2d-0.15582379308107954!3d51.50346387920194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052fbdad035f%3A0xe5a1b3261f9d50a2!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card */}
              <div className="absolute top-4 left-4 bg-obsidian-950/95 border border-gold-500/40 p-4 rounded-sm shadow-2xl backdrop-blur-md max-w-xs">
                <div className="flex items-center space-x-2 text-gold-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-serif text-sm font-semibold tracking-wide">Saffron & Sage</span>
                </div>
                <p className="text-[11px] text-cream-200/80 leading-relaxed">
                  Belgravia Crescent, Mayfair • Valet parking attendant stationed outside 11:30 AM to late.
                </p>
              </div>
            </div>

            {/* Etiquette & Policy badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-obsidian-900/90 border border-gold-500/15 rounded-sm flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-cream-100 font-semibold mb-0.5">
                    Dress Code: Smart Elegant
                  </h4>
                  <p className="text-[11px] text-cream-200/60 leading-normal">
                    We invite guests to dress for the occasion. Athletic wear and beachwear are not permitted.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-obsidian-900/90 border border-gold-500/15 rounded-sm flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-cream-100 font-semibold mb-0.5">
                    Private Sommelier Consultation
                  </h4>
                  <p className="text-[11px] text-cream-200/60 leading-normal">
                    Rare Bordeaux & Burgundy verticals available for cellar pre-selection with our head sommelier.
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
