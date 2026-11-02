# Premium Freelance Web Development Portfolio Suite

A showcase collection of **FOUR independent, production-grade commercial websites** engineered with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

Each website is an autonomous commercial-grade application with its own `package.json`, isolated dependencies, custom design system, structured data, and responsive interactive workflows.

---

## 🏛️ Portfolio Project Index

| # | Project | Industry / Category | Design Direction | Local Dev Port | Folder Location |
|---|---|---|---|---|---|
| **1** | **[Saffron & Sage](./restaurant-website)** | Michelin-Grade Restaurant & Wine Bar | Dark Obsidian (`#0C0A09`), Warm Gold (`#D4AF37`), Fine Serifs | `http://localhost:3001` | [`/restaurant-website`](./restaurant-website) |
| **2** | **[CarePlus Medical](./clinic-website)** | Multi-Specialty Clinic & Urgent Care | Clinical White, Medical Sky (`#0284C7`), Soothing Teal | `http://localhost:3002` | [`/clinic-website`](./clinic-website) |
| **3** | **[EstateVista](./real-estate-website)** | Ultra-Prime Luxury Real Estate Agency | Warm Stone (`#FAF9F6`), Architectural Bronze, Spacious Grid | `http://localhost:3003` | [`/real-estate-website`](./real-estate-website) |
| **4** | **[Nexora Digital](./agency-website)** | High-End Digital Engineering Agency | Deep Navy (`#0B0F19`), Neon Purple & Cyber Cyan Accents | `http://localhost:3004` | [`/agency-website`](./agency-website) |

---

## ⚡ Quick Start (Run Any Application)

Each project can be launched independently. Open a terminal in the desired directory:

### 1. Saffron & Sage (Restaurant)
```bash
cd restaurant-website
npm install
npm run dev
# Opens at http://localhost:3001
```

### 2. CarePlus Medical (Healthcare Clinic)
```bash
cd clinic-website
npm install
npm run dev
# Opens at http://localhost:3002
```

### 3. EstateVista (Luxury Real Estate)
```bash
cd real-estate-website
npm install
npm run dev
# Opens at http://localhost:3003
```

### 4. Nexora Digital (Creative Digital Agency)
```bash
cd agency-website
npm install
npm run dev
# Opens at http://localhost:3004
```

---

## 🛠️ Global Code Architecture & Standards

- **Zero Monolithic Files:** Every section is partitioned into semantic, single-responsibility components with dedicated TypeScript interfaces.
- **Data-Driven UI:** All mock data (menus, doctors, properties, case studies, FAQs, and testimonials) reside in typed files under `src/data/`.
- **Micro-Interactions & Motion:** Fluid animations powered by Framer Motion (fade-ins, scroll reveals, scale hovers, and lightbox modals) without degrading performance.
- **Client-Side Form Validation:** All lead forms (reservations, consultations, property viewings, agency briefs) validate user inputs and generate instant WhatsApp inquiry links.
- **Production Verified:** All four applications compile with strict TypeScript checks (`tsc -b`) and bundle via Vite with zero errors.
