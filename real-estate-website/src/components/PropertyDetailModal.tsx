import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { Property, ViewingFormData } from '../types';
import { AGENCY_INFO } from '../data/estateData';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
}) => {
  const todayDate = new Date().toISOString().split('T')[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formData, setFormData] = useState<ViewingFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    viewingType: 'In-Person VIP Tour',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState('');

  useEffect(() => {
    if (property) {
      setActiveImageIndex(0);
      setSubmitted(false);
      setErrors({});
    }
  }, [property?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full legal name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone is required.';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred viewing date.';
    return errs;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const msg = `*EstateVista - VIP Property Viewing Request*
*Property:* ${property.title}
*Price:* ${property.formattedPrice}
*Location:* ${property.location}, ${property.city}
*Client:* ${formData.fullName}
*Viewing Type:* ${formData.viewingType}
*Preferred Date:* ${formData.preferredDate}
*Contact:* ${formData.phone} | ${formData.email}
*Special Notes:* ${formData.message || 'Private viewing request'}

Please confirm availability for private escort.`;

    const encoded = encodeURIComponent(msg);
    const link = `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encoded}`;
    setWhatsAppLink(link);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md overflow-y-auto p-4 sm:p-6 lg:p-10 flex items-center justify-center cursor-pointer"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl my-8 bg-white border border-stone-300 rounded-sm shadow-2xl overflow-hidden cursor-default"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Gallery & Specs Column */}
            <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-stone-200">
              {/* Main Image */}
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-3 bg-stone-200 relative">
                <img
                  src={property.images[activeImageIndex] || property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-stone-950/90 text-[#C5A059] px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                  {property.category}
                </div>
              </div>

              {/* Thumbnail selector */}
              {property.images.length > 1 && (
                <div className="flex space-x-2 mb-6">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-20 h-14 rounded-sm overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#C5A059] opacity-100'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Title & Price */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium">
                  {property.title}
                </h3>
                <span className="font-serif text-2xl font-bold text-[#8C6A28]">
                  {property.formattedPrice}
                </span>
              </div>

              <div className="flex items-center space-x-1.5 text-xs text-stone-500 uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{property.location}, {property.city}, {property.country}</span>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-4 gap-2 p-3 bg-white border border-stone-200 rounded-sm text-center mb-6 text-xs text-stone-700">
                <div>
                  <div className="font-bold text-stone-900 text-sm">{property.bedrooms}</div>
                  <div className="text-[10px] uppercase text-stone-400">Bedrooms</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-sm">{property.bathrooms}</div>
                  <div className="text-[10px] uppercase text-stone-400">Bathrooms</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-sm">{property.sqft.toLocaleString()}</div>
                  <div className="text-[10px] uppercase text-stone-400">Interior Sq Ft</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-sm">{property.yearBuilt}</div>
                  <div className="text-[10px] uppercase text-stone-400">Year Built</div>
                </div>
              </div>

              {/* Architectural Description */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 mb-2">
                  Architectural Description
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 mb-3">
                  Signature Amenities & Finishes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.amenities.map((am) => (
                    <div key={am} className="flex items-center space-x-2 text-xs text-stone-700 bg-white p-2 rounded-sm border border-stone-200">
                      <Check className="w-3.5 h-3.5 text-[#8C6A28] shrink-0" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Viewing & Agent Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Agent Card */}
                <div className="p-4 bg-[#FAF9F6] border border-stone-200 rounded-sm flex items-center space-x-3 mb-6">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#C5A059]"
                  />
                  <div>
                    <div className="text-xs font-bold text-stone-900">{property.agent.name}</div>
                    <div className="text-[10px] text-stone-500">{property.agent.title}</div>
                    <div className="text-xs text-[#8C6A28] font-medium mt-0.5">{property.agent.phone}</div>
                  </div>
                </div>

                <h4 className="font-serif text-xl text-stone-900 mb-2">
                  Request VIP Inspection
                </h4>
                <p className="text-xs text-stone-500 font-light mb-6">
                  Private viewings are conducted with strict client confidentiality.
                </p>

                {submitted ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#8C6A28] flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h5 className="font-serif text-xl text-stone-900">Viewing Dossier Ready</h5>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Your scheduled {formData.viewingType} for <strong className="text-stone-900">{property.title}</strong> is formatted for concierge dispatch.
                    </p>
                    <div className="bg-[#FAF9F6] p-3 border border-stone-200 text-[11px] text-stone-500 text-left">
                      <strong className="text-stone-700">Fictional Demo Notice:</strong> Clearly labelled demonstration property. Send via WhatsApp to experience the client confirmation workflow.
                    </div>
                    <div className="pt-2">
                      <a
                        href={whatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-stone-950 font-bold px-6 py-3 rounded-sm text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Dispatch via WhatsApp Concierge</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lord Charles Harrington"
                        className={`w-full px-3 py-2.5 bg-stone-50 border ${
                          errors.fullName ? 'border-red-500' : 'border-stone-300'
                        } text-xs text-stone-900 rounded-sm focus:outline-none focus:border-[#C5A059]`}
                      />
                      {errors.fullName && (
                        <span className="text-red-500 text-[10px] mt-0.5 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="charles@domain.com"
                          className={`w-full px-3 py-2.5 bg-stone-50 border ${
                            errors.email ? 'border-red-500' : 'border-stone-300'
                          } text-xs text-stone-900 rounded-sm focus:outline-none focus:border-[#C5A059]`}
                        />
                        {errors.email && (
                          <span className="text-red-500 text-[10px] mt-0.5 block">{errors.email}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (310) 555-0100"
                          className={`w-full px-3 py-2.5 bg-stone-50 border ${
                            errors.phone ? 'border-red-500' : 'border-stone-300'
                          } text-xs text-stone-900 rounded-sm focus:outline-none focus:border-[#C5A059]`}
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-[10px] mt-0.5 block">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          min={todayDate}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`w-full px-3 py-2.5 bg-stone-50 border ${
                            errors.preferredDate ? 'border-red-500' : 'border-stone-300'
                          } text-xs text-stone-900 rounded-sm focus:outline-none focus:border-[#C5A059]`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                          Tour Format
                        </label>
                        <select
                          value={formData.viewingType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              viewingType: e.target.value as ViewingFormData['viewingType'],
                            })
                          }
                          className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300 text-xs text-stone-900 rounded-sm focus:outline-none focus:border-[#C5A059] cursor-pointer"
                        >
                          <option value="In-Person VIP Tour">In-Person VIP Tour</option>
                          <option value="Live 4K Virtual Walkthrough">Live 4K Virtual Walkthrough</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                        Discreet Notes & Inquiries
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Proof of funds / timing preferences..."
                        className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300 text-xs text-stone-900 rounded-sm focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C5A059] hover:bg-[#b08e48] text-stone-950 font-bold text-xs uppercase tracking-widest py-3.5 rounded-sm transition-all shadow-md cursor-pointer"
                    >
                      Submit Viewing Request
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-4 border-t border-stone-200 mt-6 flex items-center space-x-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>All client communications protected under non-disclosure governance.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
