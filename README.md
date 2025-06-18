# AirDoctor HVAC – Complete React Application

A modern, fully responsive HVAC company website built with React, featuring optimized performance, professional design, and integrated third-party services. Successfully deployed to production with GitHub Pages and Vercel.

## 🚀 Live Deployments

- **Primary (GitHub Pages)**: [https://majestyk1.github.io/airdoctor-refactor/](https://majestyk1.github.io/airdoctor-refactor/)
- **Secondary (Vercel)**: [https://airdoctor-refactor.vercel.app/](https://airdoctor-refactor.vercel.app/)

## 🛠 Tech Stack

### Frontend
- **React 19** + **React Router 7** - Modern component architecture
- **Vite 6** - Lightning-fast development and optimized builds
- **TailwindCSS 4** + **BEM Methodology** - Hybrid styling approach
- **Lucide React** - Professional icon system
- **ESLint** - Code quality and consistency

### Integrations
- **EmailJS** - Contact form email delivery (no backend required)
- **Google Maps API** - Interactive location mapping

### Development & Deployment
- **Vercel** - Edge deployment with automatic builds
- **GitHub Pages** - Static hosting with custom domain support

## 📁 Project Architecture

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── AirDoctorLogoFull.jsx
│   │   ├── AnimatedButton.jsx
│   │   ├── CTASection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── InfoCard.jsx
│   │   ├── LocationMap.jsx    # Google Maps integration
│   │   ├── ServiceCard.jsx
│   │   └── StatCard.jsx
│   ├── Navbar.jsx        # Responsive navigation
│   └── ScrollToTop.jsx   # Route change scroll management
├── constants/            # Centralized data management
│   ├── navigation.js     # Menu links and routing
│   ├── services.js       # Service offerings data
│   ├── projects.js       # Portfolio/case studies
│   ├── stats.js          # Company statistics
│   ├── maps.js           # Location coordinates
│   └── index.js          # Unified exports
├── pages/                # Route-level components
│   ├── Home.jsx          # Landing page with hero carousel
│   ├── About.jsx         # Company information
│   ├── Contact.jsx       # Contact form (EmailJS)
│   ├── Projects.jsx      # Portfolio showcase
│   └── Footer.jsx        # Site footer
└── assets/
    └── images/           # Optimized media assets
```

## ⚡ Performance Features

### Build Optimization
- **Code splitting** with Vite's intelligent bundling
- **Tree shaking** for minimal bundle size
- **Gzip compression**: 586KB → 174KB delivered
- **Fast refresh** development experience

### Mobile-First Design
- **BEM + Tailwind** hybrid methodology for maintainable styles
- **Progressive enhancement** from mobile to desktop
- **Touch-friendly** interfaces with proper hit targets
- **Accessible** navigation and interactions

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Majestyk1/airdoctor-refactor.git
cd airdoctor-refactor

# Install dependencies
npm install

# Start development server
npm run dev     # http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 EmailJS Integration

The contact form is powered by EmailJS for reliable email delivery:

```javascript
// Configured in Contact.jsx
const serviceID = 'your_service_id'
const templateID = 'your_template_id'
const publicKey = 'your_public_key'
```

### Setup Instructions:
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Configure email service (Gmail, Outlook, etc.)
3. Create email template
4. Add credentials to environment variables

## 🗺 Google Maps Integration

Interactive location mapping in the LocationMap component:

```javascript
// Maps configuration in src/constants/maps.js
export const mapLocations = [
  {
    id: 'headquarters',
    name: 'AirDoctor HVAC',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    address: '123 Main St, New York, NY 10001'
  }
]
```

### API Setup:
1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API
3. Configure billing and usage limits
4. Add key to environment variables

## 🎯 Future Development: CMS Integration

#### CMS Technology Options
- **Headless CMS**: Strapi, Sanity, or Contentful


## 📋 Available Scripts

| Script    | Purpose                           |
|-----------|-----------------------------------|
| `dev`     | Start development server with HMR |
| `build`   | Create optimized production build |
| `preview` | Serve production build locally    |
| `lint`    | Run ESLint checks and fixes      |
| `deploy`  | Deploy to GitHub Pages           |

## 🎨 Design System

### BEM + Tailwind Methodology
```jsx
// Component structure with proper BEM naming
<div className="service-card border rounded-lg p-6 bg-white hover:shadow-lg">
  <div className="service-card__header flex items-center mb-4">
    <h3 className="service-card__title text-xl font-bold text-gray-800">
      Service Title
    </h3>
    <span className="service-card__badge service-card__badge_featured">
      Featured
    </span>
  </div>
  <div className="service-card__content text-gray-600">
    Service description content
  </div>
</div>
```

### Responsive Breakpoints
- **Mobile**: Default (0px+)
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+)
- **Large**: `lg:` (1024px+)
- **Extra Large**: `xl:` (1280px+)


## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About AirDoctor HVAC

Professional HVAC services for residential and commercial clients. Specializing in installation, maintenance, and energy-efficient upgrades with over 20 years of industry experience.

**Built with ❤️ for AirDoctor HVAC** | **© 2024 All Rights Reserved**
