import React from 'react';
import { PlusCircle, ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white">
                <PlusCircle className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                CARE<span className="text-brand-400 font-extrabold">PLUS</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing compassionate, evidence-based outpatient and preventative care. Supported by board-certified physicians and high-precision clinical pathology.
            </p>
            <div className="flex items-center space-x-2 text-xs text-red-400 bg-red-950/40 p-2.5 rounded-lg border border-red-900/50">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>For acute trauma or chest pain, call 911 immediately.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Clinical Units</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#specialties" className="hover:text-white transition-colors">Cardiology</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Neurology</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Orthopedics</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Pediatrics</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Dermatology</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3T MRI & Imaging</a></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Patient Tools</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#appointment" className="hover:text-white transition-colors">Book Online</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Find a Doctor</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Accepted Insurance</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Campus Directions</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Patient Safety</a></li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Campus Contact</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Appointments: {CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Demo Disclaimer */}
        <div className="py-6 text-xs text-slate-500 leading-relaxed border-b border-slate-800">
          <p>
            <strong>Medical Disclaimer:</strong> The content displayed on this website is for informational and educational demonstration purposes only and does not constitute medical diagnosis, treatment advice, or formal physician-patient relationship. Always consult a qualified medical professional for health questions.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CarePlus Medical Group LLC. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400">HIPAA Privacy Notice</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
