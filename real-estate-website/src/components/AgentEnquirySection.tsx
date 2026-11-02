import React, { useState } from 'react';
import { MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/estateData';

export const AgentEnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Acquisition of Prime Residence',
    targetBudget: '$10M – $25M',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full legal name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone is required.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    const msg = `*EstateVista - Private Advisory Inquiry*
*Principal:* ${formData.name}
*Interest:* ${formData.interest}
*Budget Range:* ${formData.targetBudget}
*Contact:* ${formData.phone} | ${formData.email}
*Brief:* ${formData.message || 'Direct confidential advisory consultation'}

Please arrange a partner-level introduction.`;

    const encoded = encodeURIComponent(msg);
    const link = `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encoded}`;
    setWhatsAppLink(link);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#141312] text-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
            Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Initiate a Private Advisory Dialogue
          </h2>
          <p className="text-stone-400 text-sm font-light max-w-lg mx-auto mt-3">
            Connect with a Senior Managing Partner regarding off-market acquisitions, estate divestments, or architectural advisory.
          </p>
        </div>

        <div className="bg-stone-900 border border-stone-800 p-8 sm:p-12 rounded-sm shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059]">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl text-white">Advisory Brief Formatted</h3>
              <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your confidential inquiry regarding{' '}
                <strong className="text-[#C5A059]">{formData.interest}</strong> ({formData.targetBudget}) is ready for private partner dispatch.
              </p>

              <div className="p-3 bg-stone-950 border border-stone-800 rounded-sm text-[11px] text-stone-500 max-w-md mx-auto text-left">
                <strong className="text-stone-300">Demo Portfolio Notice:</strong> Transmit your details via our direct WhatsApp desk or partner email.
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-stone-950 font-bold px-8 py-3.5 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit via WhatsApp Desk</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-stone-700 text-stone-300 hover:text-white px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider"
                >
                  Edit Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Baroness Evelyn Vance"
                    className={`w-full px-4 py-3 bg-stone-950 border ${
                      errors.name ? 'border-red-500' : 'border-stone-800'
                    } text-xs text-white rounded-sm focus:outline-none focus:border-[#C5A059]`}
                  />
                  {errors.name && <span className="text-red-400 text-[10px] mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="evelyn@domain.com"
                    className={`w-full px-4 py-3 bg-stone-950 border ${
                      errors.email ? 'border-red-500' : 'border-stone-800'
                    } text-xs text-white rounded-sm focus:outline-none focus:border-[#C5A059]`}
                  />
                  {errors.email && <span className="text-red-400 text-[10px] mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                    Direct Contact Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (212) 555-0199"
                    className={`w-full px-4 py-3 bg-stone-950 border ${
                      errors.phone ? 'border-red-500' : 'border-stone-800'
                    } text-xs text-white rounded-sm focus:outline-none focus:border-[#C5A059]`}
                  />
                  {errors.phone && <span className="text-red-400 text-[10px] mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                    Advisory Objective
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 text-xs text-white rounded-sm focus:outline-none focus:border-[#C5A059] cursor-pointer"
                  >
                    <option value="Acquisition of Prime Residence">Acquisition of Prime Residence</option>
                    <option value="Discreet Sale of Private Estate">Discreet Sale of Private Estate</option>
                    <option value="Off-Market Portfolio Inquiry">Off-Market Portfolio Inquiry</option>
                    <option value="Ultra-Prime Long Term Lease">Ultra-Prime Long Term Lease</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                    Capital Allocation Scope
                  </label>
                  <select
                    value={formData.targetBudget}
                    onChange={(e) => setFormData({ ...formData, targetBudget: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 text-xs text-white rounded-sm focus:outline-none focus:border-[#C5A059] cursor-pointer"
                  >
                    <option value="$5M – $10M">$5,000,000 – $10,000,000</option>
                    <option value="$10M – $25M">$10,000,000 – $25,000,000</option>
                    <option value="$25M – $50M">$25,000,000 – $50,000,000</option>
                    <option value="$50M+">$50,000,000+ (Trophy Estates)</option>
                    <option value="Luxury Lease">$30,000 – $150,000 / month (Lease)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                  Confidential Guidance & Architectural Specifics
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Geographic focus (e.g. Bel-Air, Lake Como), waterfront criteria, acreage..."
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 text-xs text-white rounded-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-[11px] text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>NDAs executed immediately upon initial partner conference.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#b08e48] text-stone-950 font-bold px-10 py-4 rounded-sm text-xs uppercase tracking-widest transition-all cursor-pointer shadow-xl"
                >
                  Submit Advisory Brief
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
