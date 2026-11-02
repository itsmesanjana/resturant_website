import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageSquare, Accessibility, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Clinic Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Facility Location & Accessibility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Our Medical Center Campus
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Conveniently situated in the central Medical District with dedicated subterranean patient parking and ground-level wheelchair access.
              </p>
            </div>

            {/* Address & Quick Contacts */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Physical Campus
                </span>
                <p className="text-slate-900 font-bold text-sm">
                  {CLINIC_INFO.address}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center space-x-2 text-xs font-semibold text-brand-600 hover:text-brand-700"
                >
                  <Phone className="w-4 h-4 text-brand-500" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-brand-600 truncate"
                >
                  <Mail className="w-4 h-4 text-brand-500" />
                  <span className="truncate">{CLINIC_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm mb-4">
                <Clock className="w-4 h-4 text-brand-500" />
                <span>Clinical Operating Hours</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-100 pb-1.5 text-slate-700">
                  <span>Regular Clinics:</span>
                  <span className="font-semibold text-slate-900">{CLINIC_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5 text-slate-700">
                  <span>Saturday Clinic:</span>
                  <span className="font-semibold text-slate-900">{CLINIC_INFO.hours.saturday}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5 text-slate-700">
                  <span>Sunday Urgent Care:</span>
                  <span className="font-semibold text-slate-900">{CLINIC_INFO.hours.sunday}</span>
                </div>
                <div className="flex justify-between pt-1 text-red-600 font-semibold">
                  <span>Emergency Triage:</span>
                  <span>24 Hours / 7 Days</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Concierge */}
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20CarePlus%20Medical,%20I%20have%20an%20enquiry%20regarding%20specialist%20consultations.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-900 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect with Patient Desk via WhatsApp</span>
            </a>
          </div>

          {/* Interactive Map & Amenities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200/90 relative shadow-xl bg-slate-200">
              <iframe
                title="CarePlus Medical Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105621.57946129849!2d-118.38128362544254!3d34.053690899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-xl max-w-xs">
                <div className="font-bold text-xs text-slate-900 mb-0.5">CarePlus Medical Center</div>
                <div className="text-[11px] text-slate-500">Suite 400 • Free valet for mobility-impaired patients</div>
              </div>
            </div>

            {/* Accessibility badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start space-x-3">
                <Accessibility className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">Full ADA Accessibility</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Ramps, automated doors, wide elevators, and dedicated accessible restrooms throughout the facility.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-tealbrand-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">Private Patient Transport</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Designated non-emergency medical transit loading bays at Entrance C.
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
