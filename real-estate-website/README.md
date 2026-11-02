# EstateVista — Ultra-Prime Real Estate Agency Website

An ultra-luxury, high-converting architectural real estate web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Highlights & Features

- **Architectural Prestige Aesthetic:** Refined typography (Cormorant Garamond + Plus Jakarta Sans), muted stone and bronze palette, high-contrast imagery, and generous breathing room.
- **Interactive Multi-Parameter Search Engine:** Search by location keyword, listing type (Buy/Rent/All), category (Modern Estates, Penthouses, Villas, Historic Townhomes), bedroom count, and budget sliders.
- **Dynamic Property Listing Catalog:** Instant reactive filtering with result counters, empty states, and one-click reset triggers.
- **Comprehensive Architectural Dossier Modal:** Multi-image gallery switcher, full architectural breakdown, verified amenities list, dedicated agent profile, and VIP tour reservation form.
- **Discreet Client Engagement:** Generates pre-formatted WhatsApp VIP viewing requests and private advisory inquiries without requiring a backend database.
- **Clearly Labelled Fictional Demo Content:** Realistic sample estates with transparent demonstration disclaimers.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### Installation
```bash
# Navigate to project directory
cd real-estate-website

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

The application runs locally at `http://localhost:3003` (or next available port).

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
real-estate-website/
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
│   │   └── estateData.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── HeroSearch.tsx
│       ├── FeaturedProperties.tsx
│       ├── PropertyGrid.tsx
│       ├── PropertyCategories.tsx
│       ├── PropertyDetailModal.tsx
│       ├── AboutAgency.tsx
│       ├── WhyChooseUs.tsx
│       ├── TestimonialsSection.tsx
│       ├── AgentEnquirySection.tsx
│       └── Footer.tsx
```

---

## 🌐 Demo Limitations
- All properties and pricing are fictional demo data created for portfolio representation.
- Tour bookings format an inquiry message for direct transmission via WhatsApp or email.
