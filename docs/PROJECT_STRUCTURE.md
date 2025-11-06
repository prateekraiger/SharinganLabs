# SharinganLabs - Project Structure

## Overview
This document outlines the complete folder structure for the SharinganLabs award-winning agency website.

## Folder Structure

```
sharinganlabs/
├── public/                      # Static assets
│   ├── fonts/                   # Custom fonts
│   └── (other public assets)
│
├── assets/                      # Media assets
│   ├── images/
│   │   ├── projects/           # Project thumbnails and images
│   │   ├── team/               # Team member photos
│   │   ├── clients/            # Client logos
│   │   └── services/           # Service illustrations
│   ├── videos/                 # Video assets
│   └── fonts/                  # Additional fonts
│
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   └── Card.jsx
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── home/               # Home page components
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   │   ├── ServicesGrid.jsx
│   │   │   ├── ServicesGrid.css
│   │   │   ├── FeaturedWork.jsx
│   │   │   ├── FeaturedWork.css
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Testimonials.css
│   │   │   ├── ClientLogos.jsx
│   │   │   ├── ClientLogos.css
│   │   │   ├── CTASection.jsx
│   │   │   └── CTASection.css
│   │   │
│   │   ├── work/               # Portfolio/work components
│   │   ├── about/              # About page components
│   │   ├── contact/            # Contact page components
│   │   ├── services/           # Services page components
│   │   └── animations/         # Animation components
│   │
│   ├── lib/                    # Utility libraries
│   │   ├── utils.js            # Helper functions
│   │   ├── constants.js        # App constants
│   │   └── animations.js       # Animation configs
│   │
│   ├── data/                   # Data files
│   │   ├── services.js         # Services data
│   │   ├── projects.js         # Portfolio data
│   │   ├── testimonials.js     # Testimonials data
│   │   └── team.js             # Team members data
│   │
│   ├── styles/                 # Global styles
│   │   ├── animations.css      # Animation styles
│   │   └── typography.css      # Typography styles
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript types (future)
│   ├── pages/                  # Page components (future routing)
│   │
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Main CSS file
│
├── docs/                       # Documentation
│   └── PROJECT_STRUCTURE.md
│
├── package.json
├── vite.config.js
├── PRD.md                      # Product Requirements Document
└── README.md
```

## Component Hierarchy

### Homepage
```
App
├── Header
├── Main
│   ├── Hero
│   ├── ServicesGrid
│   ├── FeaturedWork
│   ├── Testimonials
│   ├── ClientLogos
│   └── CTASection
└── Footer
```

## Technology Stack

- **Frontend Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP + Locomotive Scroll
- **Package Manager**: npm

## Design System

### Colors
- Primary: #DC143C (Crimson Red)
- Secondary: #1A1A1D (Dark Charcoal)
- Accent: #00D9FF (Electric Cyan)

### Typography
- Primary Font: Space Grotesk
- Secondary Font: Inter

## Next Steps

1. ✅ Folder structure created
2. ✅ Core components built
3. ✅ Homepage implemented
4. 🔄 Additional pages (Work, Services, About, Contact)
5. 🔄 Animation enhancements
6. 🔄 Responsive optimization
7. 🔄 Performance optimization

## Notes

- All components are modular and reusable
- CSS is scoped to components where needed
- Data is separated from components for easy maintenance
- Design follows the PRD specifications
