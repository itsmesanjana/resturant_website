import React, { useState } from 'react';
import { Calendar, Users, Clock, Utensils, MessageCircle, Check, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationFormData } from '../types';

interface ReservationSectionProps {
  isModal?: boolean;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ isModal = false }) => {
  const todayDate = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '19:30',
    seatingArea: 'Main Dining Hall',
    dietaryNotes: '',
    specialOccasion: 'None',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [whatsAppLink, setWhatsAppLink] = useState<string>('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide the guest name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address is required.';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Valid contact telephone is required.';
    if (!formData.date) errs.date = 'Please select a dining date.';
    if (!formData.time) errs.time = 'Please select a service time.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    
    // Construct prefilled WhatsApp booking message
    const message = `*Table Reservation Request - Saffron & Sage*
*Guest Name:* ${formData.name}
*Party Size:* ${formData.guests} Guests
*Date:* ${formData.date}
*Time:* ${formData.time}
*Seating Area:* ${formData.seatingArea}
*Occasion:* ${formData.specialOccasion}
*Contact:* ${formData.phone} | ${formData.email}
*Special Notes:* ${formData.dietaryNotes || 'None'}

Please confirm table availability.`;

    const encoded = encodeURIComponent(message);
    const link = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
    setWhatsAppLink(link);
    setSubmitted(true);
  };

  const content = (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>Table Reservations</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-cream-50 leading-tight mb-4">
          Reserve Your Gastronomic Journey
        </h2>
        <p className="text-cream-200/70 text-sm sm:text-base font-light">
          Due to our intimate seating capacity of forty covers, advance reservation is warmly advised.
        </p>
      </div>

      <div className="bg-obsidian-950 border border-gold-500/25 p-6 sm:p-10 rounded-sm shadow-2xl relative">
        {submitted ? (
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto text-gold-400">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-cream-50">Reservation Request Prepared!</h3>
            <p className="text-cream-200/80 text-sm max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-gold-300">{formData.name}</strong>. Your reservation request for{' '}
              <strong className="text-gold-300">{formData.guests} guests</strong> on{' '}
              <strong className="text-gold-300">{formData.date} at {formData.time}</strong> is ready for instant concierge confirmation.
            </p>
            
            <div className="bg-obsidian-900 border border-gold-500/20 p-4 rounded-sm text-xs text-cream-200/70 max-w-md mx-auto">
              <span className="text-gold-400 font-semibold block mb-1">Demo Portfolio Notice:</span>
              This demo application forwards your structured booking brief directly to our concierge on WhatsApp or your preferred channel.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3.5 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-900/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Concierge</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto border border-gold-500/30 text-cream-200 hover:text-gold-400 px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest cursor-pointer"
              >
                Edit Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium">
                  Guest Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Lady Katherine Davies"
                  className={`w-full bg-obsidian-900 border ${
                    errors.name ? 'border-red-500' : 'border-gold-500/30'
                  } focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none transition-colors`}
                />
                {errors.name && (
                  <span className="text-red-400 text-[11px] flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="katherine@example.com"
                  className={`w-full bg-obsidian-900 border ${
                    errors.email ? 'border-red-500' : 'border-gold-500/30'
                  } focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none transition-colors`}
                />
                {errors.email && (
                  <span className="text-red-400 text-[11px] flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 7911 123456"
                  className={`w-full bg-obsidian-900 border ${
                    errors.phone ? 'border-red-500' : 'border-gold-500/30'
                  } focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none transition-colors`}
                />
                {errors.phone && (
                  <span className="text-red-400 text-[11px] flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span>Party Size</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full bg-obsidian-900 border border-gold-500/30 focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                    <option key={n} value={n} className="bg-obsidian-950 text-cream-100">
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Date *</span>
                </label>
                <input
                  type="date"
                  required
                  min={todayDate}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full bg-obsidian-900 border ${
                    errors.date ? 'border-red-500' : 'border-gold-500/30'
                  } focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none`}
                />
                {errors.date && (
                  <span className="text-red-400 text-[11px] block mt-1">{errors.date}</span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Service Time</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-obsidian-900 border border-gold-500/30 focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none cursor-pointer"
                >
                  <optgroup label="Lunch Service" className="bg-obsidian-950">
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                  </optgroup>
                  <optgroup label="Dinner Service" className="bg-obsidian-950">
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium flex items-center space-x-1.5">
                  <Utensils className="w-3.5 h-3.5 text-gold-400" />
                  <span>Seating Area</span>
                </label>
                <select
                  value={formData.seatingArea}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seatingArea: e.target.value as ReservationFormData['seatingArea'],
                    })
                  }
                  className="w-full bg-obsidian-900 border border-gold-500/30 focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none cursor-pointer"
                >
                  <option value="Main Dining Hall" className="bg-obsidian-950">Main Dining Hall</option>
                  <option value="Garden Veranda" className="bg-obsidian-950">Garden Veranda</option>
                  <option value="Chef's Counter" className="bg-obsidian-950">Chef's Open Counter</option>
                  <option value="Private Wine Cellar" className="bg-obsidian-950">Private Wine Cellar</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium">
                  Special Occasion
                </label>
                <select
                  value={formData.specialOccasion}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specialOccasion: e.target.value as ReservationFormData['specialOccasion'],
                    })
                  }
                  className="w-full bg-obsidian-900 border border-gold-500/30 focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none cursor-pointer"
                >
                  <option value="None" className="bg-obsidian-950">Dining Experience</option>
                  <option value="Birthday" className="bg-obsidian-950">Birthday Celebration</option>
                  <option value="Anniversary" className="bg-obsidian-950">Romantic Anniversary</option>
                  <option value="Business Dinner" className="bg-obsidian-950">Executive Business Dinner</option>
                  <option value="Romance" className="bg-obsidian-950">Special Romantic Date</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/80 mb-2 font-medium">
                  Dietary Requirements & Notes
                </label>
                <input
                  type="text"
                  value={formData.dietaryNotes}
                  onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                  placeholder="Allergies, sommelier preferences..."
                  className="w-full bg-obsidian-900 border border-gold-500/30 focus:border-gold-400 text-cream-100 text-sm px-4 py-3 rounded-sm outline-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-cream-200/60 font-light">
                Credit card guarantee is held only for parties of 6 or more.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 font-semibold px-10 py-4 rounded-sm text-xs uppercase tracking-widest shadow-xl shadow-gold-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Confirm Table Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return <div className="py-2">{content}</div>;
  }

  return (
    <section id="reservation" className="py-24 bg-obsidian-900 relative">
      {content}
    </section>
  );
};
