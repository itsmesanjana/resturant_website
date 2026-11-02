# Saffron & Sage — Luxury Fine Dining & Wine Bar Website

A high-converting, Michelin-grade restaurant & lounge web experience built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Highlights & Features

- **Opulent Aesthetic:** Dark obsidian theme paired with warm champagne gold accents, serif typography, and curated food photography.
- **Interactive Seasonal Tasting Menu:** Real-time category filtering (Starters, Mains, Wood-Fired & Steaks, Desserts, Cellar & Cocktails) with dietary tags and sommelier pairings.
- **Table Reservation System:** Validated guest reservation engine that generates an instant WhatsApp concierge reservation brief.
- **Atmospheric Lightbox Gallery:** Fullscreen modal preview of dining rooms, kitchen pass, and wine vaults.
- **Executive Chef Profile:** Accolades, philosophy, and culinary distinction background.
- **Location & Concierge Integration:** Interactive map styling, opening times, dress code guidelines, and direct contact buttons.
- **Mobile Responsive:** Seamless responsive drawer navigation with smooth micro-interactions.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### Installation
```bash
# Navigate to the project directory
cd restaurant-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The application runs locally at `http://localhost:3001` (or next available port).

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
restaurant-website/
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
│   │   └── restaurantData.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Story.tsx
│       ├── SignatureDishes.tsx
│       ├── MenuSection.tsx
│       ├── GallerySection.tsx
│       ├── ChefSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── ReservationSection.tsx
│       ├── ReservationModal.tsx
│       ├── LocationSection.tsx
│       └── Footer.tsx
```

---

## 🌐 Demo Limitations
- Table reservation requests format a structured inquiry message for WhatsApp or email dispatch (no backend database required).
