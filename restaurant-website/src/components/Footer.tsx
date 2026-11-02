import React, { useState } from 'react';
import { Utensils, Instagram, Facebook, ArrowRight, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-obsidian-950 border-t border-gold-500/20 pt-16 pb-12 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gold-500/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold-500/60 flex items-center justify-center bg-obsidian-900">
                <Utensils className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-serif text-2xl tracking-widest text-cream-50 font-semibold">
                SAFFRON <span className="text-gold-400 font-normal">&</span> SAGE
              </span>
            </div>
            <p className="text-xs text-cream-200/70 leading-relaxed max-w-sm font-light">
              Michelin-guided artisanal gastronomy in Mayfair. Elevating the harmony of ancient spice routes and open flame craftsmanship.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-cream-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-cream-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base text-cream-100 uppercase tracking-wider font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#story" className="hover:text-gold-400 transition-colors">Our Story</a></li>
              <li><a href="#signatures" className="hover:text-gold-400 transition-colors">Signature Dishes</a></li>
              <li><a href="#menu" className="hover:text-gold-400 transition-colors">Autumn Tasting Menu</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">The Ambiance</a></li>
              <li><a href="#chef" className="hover:text-gold-400 transition-colors">Chef Laurent Vance</a></li>
              <li><a href="#reviews" className="hover:text-gold-400 transition-colors">Critic Reviews</a></li>
            </ul>
          </div>

          {/* Dining Policies */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base text-cream-100 uppercase tracking-wider font-semibold">
              Information
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/70">
              <li>Private Vault Hire</li>
              <li>Wine Cellar Tastings</li>
              <li>Allergen Advisory</li>
              <li>Press Inquiries</li>
              <li>Smart Elegant Attire</li>
              <li>Valet Service</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base text-cream-100 uppercase tracking-wider font-semibold">
              The Epicurean Gazette
            </h4>
            <p className="text-xs text-cream-200/70 font-light">
              Receive private invitations to seasonal tasting debuts, rare vintage release dinners, and chef collaborations.
            </p>
            {subscribed ? (
              <div className="p-3 bg-gold-500/20 border border-gold-400/40 rounded-sm text-xs text-gold-300 flex items-center space-x-2">
                <Check className="w-4 h-4 text-gold-400" />
                <span>You have been added to our private guest register.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-obsidian-900 border border-gold-500/30 text-xs px-3.5 py-2.5 rounded-l-sm focus:outline-none focus:border-gold-400 text-cream-100"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-gold-500 hover:bg-gold-400 text-obsidian-950 px-4 rounded-r-sm transition-colors cursor-pointer flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-200/50 gap-4">
          <p>© {new Date().getFullYear()} Saffron & Sage Gastronomy Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold-400">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400">Terms of Dining</a>
            <a href="#" className="hover:text-gold-400">Cookie Management</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
