import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Mail, Clock, MessageSquare, Check, AlertCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES, DOCTORS } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  initialDoctor?: string;
  initialSpecialty?: string;
  isModal?: boolean;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialDoctor = '',
  initialSpecialty = '',
  isModal = false,
}) => {
  const todayDate = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    specialty: initialSpecialty || SPECIALTIES[0].name,
    doctor: initialDoctor || 'First Available Specialist',
    preferredDate: '',
    timeSlot: '09:30 AM',
    symptoms: '',
    isFirstVisit: true,
  });

  useEffect(() => {
    if (initialSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: initialSpecialty }));
    }
    if (initialDoctor) {
      setFormData((prev) => ({ ...prev, doctor: initialDoctor }));
    }
  }, [initialDoctor, initialSpecialty]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [whatsAppLink, setWhatsAppLink] = useState<string>('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Patient full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid telephone contact is required.';
    if (!formData.preferredDate) errs.preferredDate = 'Please choose a preferred consultation date.';
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

    const message = `*CarePlus Medical - Appointment Request*
*Patient:* ${formData.fullName}
*Specialty:* ${formData.specialty}
*Doctor:* ${formData.doctor}
*Date:* ${formData.preferredDate}
*Time Slot:* ${formData.timeSlot}
*First Visit:* ${formData.isFirstVisit ? 'Yes (New Patient)' : 'Returning Patient'}
*Contact:* ${formData.phone} | ${formData.email}
*Symptoms/Reason:* ${formData.symptoms || 'Routine Examination'}

Please confirm triage availability.`;

    const encoded = encodeURIComponent(message);
    const link = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`;
    setWhatsAppLink(link);
    setSubmitted(true);
  };

  const formContent = (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>Online Clinic Scheduling</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Request an Outpatient Consultation
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Complete the form below to reserve priority consultation time with our medical staff.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg">
        {submitted ? (
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-tealbrand-100 border border-tealbrand-400 flex items-center justify-center mx-auto text-tealbrand-700">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Appointment Request Prepared</h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your consultation request for{' '}
              <strong className="text-brand-600">{formData.specialty}</strong> with{' '}
              <strong className="text-slate-900">{formData.doctor}</strong> on{' '}
              <strong className="text-slate-900">{formData.preferredDate} ({formData.timeSlot})</strong> is prepared.
            </p>

            <div className="bg-white border border-brand-200 p-4 rounded-xl text-xs text-slate-600 max-w-md mx-auto text-left flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800 block mb-1">Demo Portfolio Mode:</span>
                No patient records are stored on this server. To complete your booking, transmit your details directly via our WhatsApp triage queue or email.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-slate-900 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Request via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto border border-slate-300 text-slate-700 hover:bg-white px-6 py-3.5 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Adjust Appointment Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full pl-10 pr-4 py-3 bg-white border ${
                      errors.fullName ? 'border-red-500' : 'border-slate-300'
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900`}
                  />
                </div>
                {errors.fullName && (
                  <span className="text-red-500 text-xs flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Contact Phone *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className={`w-full pl-10 pr-4 py-3 bg-white border ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900`}
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-500 text-xs flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Email & Department */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@example.com"
                    className={`w-full pl-10 pr-4 py-3 bg-white border ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900`}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-xs flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Clinical Specialty
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 cursor-pointer"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Doctor Selection & Preferred Date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Preferred Doctor
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 cursor-pointer"
                >
                  <option value="First Available Specialist">First Available Specialist</option>
                  {DOCTORS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Appointment Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={todayDate}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.preferredDate ? 'border-red-500' : 'border-slate-300'
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900`}
                  />
                </div>
                {errors.preferredDate && (
                  <span className="text-red-500 text-xs block mt-1">{errors.preferredDate}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Time Window
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 cursor-pointer"
                  >
                    <option value="08:30 AM">08:30 AM (Early)</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:30 PM">01:30 PM (Afternoon)</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:30 PM">04:30 PM (Evening)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Symptoms & Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Primary Symptoms or Consultation Reason (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                placeholder="Briefly describe your symptoms or preventative health goals..."
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="firstVisit"
                checked={formData.isFirstVisit}
                onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500 cursor-pointer"
              />
              <label htmlFor="firstVisit" className="text-xs text-slate-600 font-medium cursor-pointer">
                This will be my first visit to CarePlus Medical Clinic
              </label>
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                For life-threatening emergencies, dial 911 or visit the nearest ER immediately.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-500/25 transition-all cursor-pointer"
              >
                Submit Appointment Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return <div className="py-2">{formContent}</div>;
  }

  return (
    <section id="appointment" className="py-20 bg-white relative">
      {formContent}
    </section>
  );
};
