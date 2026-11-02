# CarePlus Medical & Specialty Clinic — Modern Healthcare Website

A clean, trustworthy healthcare & multi-specialty clinic web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Highlights & Features

- **Clinical Aesthetics:** Trustworthy clinical palette featuring crisp white, sky blue, and calming teal accents with frosted cards and high accessibility contrast.
- **Medical Specialties Showcase:** Interactive departments (Cardiology, Neurology, Orthopedics, Pediatrics, Dermatology, Internal Medicine) with common treated conditions.
- **Board-Certified Physicians Directory:** Filterable doctor profiles featuring authentic qualifications, clinical experience, and individual appointment booking CTAs.
- **Appointment Scheduling Engine:** Interactive form with specialty and physician auto-selection, field validation, and WhatsApp triage request generation.
- **Clinical Facilities & Services:** Detailed breakdown of on-site 3T MRI, ambulatory surgery, urgent care, and digital patient portal.
- **Location, Transit & Access:** Google Maps integration, parking access, emergency triage directions, and full ADA compliance badges.
- **Ethical Integrity:** Strictly adheres to professional healthcare presentation without unsubstantiated claims.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### Installation
```bash
# Navigate to the project directory
cd clinic-website

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

The application runs locally at `http://localhost:3002` (or next available port).

### Production Build
```bash
# Compile TypeScript and bundle assets
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure
```
clinic-website/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── clinicData.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── AboutSection.tsx
│       ├── SpecialtiesSection.tsx
│       ├── DoctorsSection.tsx
│       ├── ServicesSection.tsx
│       ├── WhyChooseUs.tsx
│       ├── TestimonialsSection.tsx
│       ├── AppointmentSection.tsx
│       ├── AppointmentModal.tsx
│       ├── LocationSection.tsx
│       └── Footer.tsx
```

---

## 🌐 Demo Limitations
- No medical records or patient health information (PHI) are stored on this server. Appointment submissions format a structured inquiry message for WhatsApp or email dispatch.
