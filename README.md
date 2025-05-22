# AirDoctor HVAC – Front-End Refactor (Stage 1)

This repository contains the front-end rewrite of the AirDoctor HVAC marketing site and service portal.  
Stage 1 focuses on migrating the public UI to React, Vite, and TailwindCSS while laying the groundwork for future API integration.

## Tech Stack

• React 19 + React Router 7  
• Vite 6 (HMR, lightning-fast dev server)  
• TailwindCSS 4 (PostCSS 8, ESM config)  
• Lucide-react icons  
• ESLint with React Refresh & hooks rules

## Quick Start

```bash
git clone https://github.com/Majestyk1/airdoctor-refactor.git
cd airdoctor-refactor
npm install
npm run dev     # http://localhost:5173
```

### Available Scripts

| Script  | Purpose                        |
|---------|--------------------------------|
| dev     | Start development server (HMR) |
| build   | Create production build        |
| preview | Serve the build locally        |
| lint    | Run ESLint checks              |

## Implemented Features (Stage 1)

1. **Responsive Navbar**  
   • Scroll-aware background/shadow  
   • Mobile drawer (Menu/X)  
   • Accessible links + phone CTA

2. **Hero Carousel**  
   • Two slides cycling every 6 s  
   • Image overlay & CTA buttons  
   • Fully responsive (60-80 vh)

3. **Services Section**  
   • `ServiceCard` component with dynamic icon mapping  
   • Grid layout (1-col mobile → 3-col desktop)

4. **Routing & Layout**  
   • `App.jsx` wraps `<Router>` with `<Navbar>` + routes  
   • `Home.jsx` composes `Hero` + services grid

## Build & Styling Fixes Delivered

• Replaced failing placeholder.com images with local assets (`src/assets/test*.jpg`).  
• Fixed Tailwind compilation issues:  
  – `postcss.config.js` now uses `tailwindcss` + `autoprefixer` plugins.  
  – `src/index.css` employs `@tailwind` directives (`base`, `components`, `utilities`).  
  – `tailwind.config.js` converted to ESM with correct `content` globs.  
  – Styles now load correctly (no default blue/purple links, layout renders as expected).

## Branch Strategy

All work is being committed to **`stage-1-frontend-and-api`**.  
PR deadline: **7 days before the 28-day mark**.

## Next Steps

• Connect to backend API endpoints (Stage 2).  
• Build remaining pages (Service, Installation, Retrofit, etc.).  
• Add CMS-driven content and form handling.  
• Perform Lighthouse accessibility & performance audits.

---

© 2024 AirDoctor HVAC. MIT license (update if needed).
