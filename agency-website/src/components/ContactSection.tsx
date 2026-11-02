import React, { useState, useEffect } from 'react';
import { MessageSquare, Check, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPlan = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    projectType: initialPlan || 'Full-Stack Web Application',
    budgetRange: '$10,000 – $25,000',
    timeline: 'Within 4 – 6 Weeks',
    brief: '',
  });

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, projectType: initialPlan }));
    }
  }, [initialPlan]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate or personal email required.';
    if (!formData.companyName.trim()) errs.companyName = 'Company or project name required.';
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

    const msg = `*Nexora Digital - New Project Initiative*
*Lead:* ${formData.fullName}
*Company:* ${formData.companyName}
*Email:* ${formData.email}
*Initiative Type:* ${formData.projectType}
*Target Budget:* ${formData.budgetRange}
*Timeline Target:* ${formData.timeline}
*Scope Overview:* ${formData.brief || 'Seeking product architecture partnership.'}

Requesting sprint availability review.`;

    const encoded = encodeURIComponent(msg);
    const link = `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encoded}`;
    setWhatsAppLink(link);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-cyber-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neon-cyan bg-cyber-850 px-3.5 py-1 rounded-full border border-cyber-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
            <span>Ready to Scale?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Initiate Your Engineering Sprint
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Fill out your project specifications below. Our technical leadership team will analyze your requirements and respond within 24 hours.
          </p>
        </div>

        <div className="bg-cyber-850 border border-cyber-700 p-8 sm:p-12 rounded-2xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-purple to-neon-cyan flex items-center justify-center mx-auto text-white shadow-xl shadow-neon-purple/25">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white">Project Brief Formatted!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your initiative for{' '}
                <strong className="text-neon-cyan">{formData.companyName}</strong> ({formData.projectType}) has been packaged for immediate technical dispatch.
              </p>

              <div className="bg-cyber-900 border border-cyber-750 p-4 rounded-xl text-xs text-slate-400 max-w-md mx-auto text-left flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Demo Portfolio Notice:</strong>
                  In this demo portfolio, your project brief can be sent directly to our leads on WhatsApp or via email.
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-cyber-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit via WhatsApp Studio</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-cyber-700 text-slate-300 hover:text-white px-6 py-3.5 rounded-xl text-xs font-semibold"
                >
                  Edit Specifications
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className={`w-full px-4 py-3 bg-cyber-900 border ${
                      errors.fullName ? 'border-red-500' : 'border-cyber-700'
                    } text-xs text-white rounded-xl focus:outline-none focus:border-neon-cyan`}
                  />
                  {errors.fullName && <span className="text-red-400 text-[10px] mt-1 block">{errors.fullName}</span>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.io"
                    className={`w-full px-4 py-3 bg-cyber-900 border ${
                      errors.email ? 'border-red-500' : 'border-cyber-700'
                    } text-xs text-white rounded-xl focus:outline-none focus:border-neon-cyan`}
                  />
                  {errors.email && <span className="text-red-400 text-[10px] mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Nexus AI Labs"
                    className={`w-full px-4 py-3 bg-cyber-900 border ${
                      errors.companyName ? 'border-red-500' : 'border-cyber-700'
                    } text-xs text-white rounded-xl focus:outline-none focus:border-neon-cyan`}
                  />
                  {errors.companyName && <span className="text-red-400 text-[10px] mt-1 block">{errors.companyName}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                    Project Typology
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-900 border border-cyber-700 text-xs text-white rounded-xl focus:outline-none focus:border-neon-cyan cursor-pointer"
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Product UI/UX & Design System">Product UI/UX & Design System</option>
                    <option value="Generative AI & LLM Integration">Generative AI & LLM Integration</option>
                    <option value="Headless E-Commerce Platform">Headless E-Commerce Platform</option>
                    <option value="MVP Launch Sprint">MVP Launch Sprint</option>
                    <option value="Growth Engine Dedicated">Growth Engine Dedicated</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                    Budget Allocation
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-900 border border-cyber-700 text-xs text-white rounded-xl focus:outline-none focus:border-neon-cyan cursor-pointer"
                  >
                    <option value="$5,000 – $10,000">$5,000 – $10,000 (Early MVP)</option>
                    <option value="$10,000 – $25,000">$10,000 – $25,000 (Full Sprint)</option>
                    <option value="$25,000 – $50,000">$25,000 – $50,000 (Complex Platform)</option>
                    <option value="$50,000+">$50,000+ (Enterprise Transformation)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-900 border border-cyber-700 text-xs text-white rounded-xl focus:outline-none focus:border-neon-cyan cursor-pointer"
                  >
                    <option value="Immediate (Next 2 Weeks)">Immediate (Next 2 Weeks)</option>
                    <option value="Within 4 – 6 Weeks">Within 4 – 6 Weeks</option>
                    <option value="Next Quarter">Next Quarter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                  Project Vision & Technical Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Share links to existing repositories, Figma boards, API specs, or desired capabilities..."
                  className="w-full px-4 py-3 bg-cyber-900 border border-cyber-700 text-xs text-white rounded-xl focus:outline-none focus:border-neon-cyan"
                />
              </div>

              <div className="pt-4 border-t border-cyber-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-light">
                  Standard mutual NDAs available before in-depth technical disclosure.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-neon-purple via-neon-violet to-neon-cyan hover:opacity-95 text-white font-bold px-9 py-4 rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-xl shadow-neon-purple/20 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Initiative Brief</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
