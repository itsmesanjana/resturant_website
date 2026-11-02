export interface Specialty {
  id: string;
  name: string;
  description: string;
  iconName: string;
  treatmentCount: string;
  conditions: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  specialtyId: string;
  experienceYears: number;
  bio: string;
  availableDays: string[];
  imageUrl: string;
  fellowships: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  department: string;
  quote: string;
  date: string;
  rating: number;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  specialty: string;
  doctor: string;
  preferredDate: string;
  timeSlot: string;
  symptoms: string;
  isFirstVisit: boolean;
}
