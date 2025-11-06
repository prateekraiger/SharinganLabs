/**
 * Projects/Portfolio data for SharinganLabs
 */

export const projects = [
  {
    id: 'project-1',
    title: 'FinTech Dashboard',
    slug: 'fintech-dashboard',
    client: 'TechPay Solutions',
    category: 'Web Development',
    tags: ['UI/UX', 'React', 'Dashboard'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/fintech-thumb.jpg',
    heroImage: '/assets/images/projects/fintech-hero.jpg',
    shortDescription: 'A modern financial dashboard for managing transactions and analytics',
    description: 'Designed and developed a comprehensive financial dashboard that helps users track their transactions, view analytics, and manage their finances in real-time.',
    challenge: 'TechPay needed a user-friendly dashboard that could handle complex financial data while remaining intuitive for non-technical users.',
    solution: 'We created a clean, intuitive interface with real-time data visualization, smart filtering, and mobile-responsive design.',
    results: [
      '45% increase in user engagement',
      '30% reduction in support tickets',
      '95% positive user feedback',
      'Featured on ProductHunt'
    ],
    services: ['UI/UX Design', 'Web Development', 'API Integration'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Chart.js', 'Node.js'],
    timeline: '12 weeks',
    teamSize: '5 people',
    testimonial: {
      quote: 'SharinganLabs transformed our vision into reality. The dashboard exceeded all expectations.',
      author: 'Sarah Johnson',
      position: 'CEO, TechPay Solutions',
      avatar: '/assets/images/team/client-1.jpg'
    },
    images: [
      '/assets/images/projects/fintech-1.jpg',
      '/assets/images/projects/fintech-2.jpg',
      '/assets/images/projects/fintech-3.jpg'
    ],
    awards: ['Awwwards Honorable Mention', 'CSS Design Awards']
  },
  {
    id: 'project-2',
    title: 'GreenLeaf E-commerce',
    slug: 'greenleaf-ecommerce',
    client: 'GreenLeaf Organics',
    category: 'E-commerce',
    tags: ['E-commerce', 'React', 'Shopify'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/greenleaf-thumb.jpg',
    heroImage: '/assets/images/projects/greenleaf-hero.jpg',
    shortDescription: 'Beautiful e-commerce platform for organic products',
    description: 'A stunning e-commerce experience that showcases organic products with elegant design and smooth shopping experience.',
    challenge: 'Create an online store that reflects the brand\'s natural, sustainable values while providing seamless shopping.',
    solution: 'We designed a clean, earthy aesthetic with intuitive navigation, quick checkout, and detailed product pages.',
    results: [
      '200% increase in online sales',
      '60% faster checkout process',
      '40% increase in average order value',
      '4.8/5 customer satisfaction'
    ],
    services: ['Brand Design', 'Web Development', 'E-commerce'],
    technologies: ['React', 'Shopify', 'Next.js', 'Stripe', 'Tailwind CSS'],
    timeline: '10 weeks',
    teamSize: '4 people',
    testimonial: {
      quote: 'Our online presence has been completely transformed. Sales are through the roof!',
      author: 'Michael Green',
      position: 'Founder, GreenLeaf Organics',
      avatar: '/assets/images/team/client-2.jpg'
    },
    images: [
      '/assets/images/projects/greenleaf-1.jpg',
      '/assets/images/projects/greenleaf-2.jpg',
      '/assets/images/projects/greenleaf-3.jpg'
    ],
    awards: ['Best E-commerce Site 2024']
  },
  {
    id: 'project-3',
    title: 'MindfulMe App',
    slug: 'mindfulme-app',
    client: 'MindfulMe Inc.',
    category: 'Mobile Development',
    tags: ['Mobile', 'React Native', 'Wellness'],
    year: 2023,
    featured: true,
    thumbnail: '/assets/images/projects/mindful-thumb.jpg',
    heroImage: '/assets/images/projects/mindful-hero.jpg',
    shortDescription: 'Mental wellness app with meditation and tracking features',
    description: 'A comprehensive mental wellness application helping users track their mood, practice meditation, and improve mental health.',
    challenge: 'Design an app that feels calming and supportive while providing powerful tracking and meditation features.',
    solution: 'We created a soothing interface with gentle animations, guided meditations, and insightful mood analytics.',
    results: [
      '100K+ downloads in 6 months',
      '4.7/5 App Store rating',
      '70% daily active users',
      'Featured by Apple'
    ],
    services: ['UI/UX Design', 'Mobile Development'],
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    timeline: '14 weeks',
    teamSize: '6 people',
    testimonial: {
      quote: 'The app is exactly what we envisioned. Users love the interface and features.',
      author: 'Dr. Emily Chen',
      position: 'Founder, MindfulMe',
      avatar: '/assets/images/team/client-3.jpg'
    },
    images: [
      '/assets/images/projects/mindful-1.jpg',
      '/assets/images/projects/mindful-2.jpg',
      '/assets/images/projects/mindful-3.jpg'
    ],
    awards: ['Best Health App 2023']
  },
  {
    id: 'project-4',
    title: 'Velocity Fitness',
    slug: 'velocity-fitness',
    client: 'Velocity Fitness Studios',
    category: 'Brand Design',
    tags: ['Branding', 'Identity', 'Marketing'],
    year: 2023,
    featured: false,
    thumbnail: '/assets/images/projects/velocity-thumb.jpg',
    heroImage: '/assets/images/projects/velocity-hero.jpg',
    shortDescription: 'Complete brand identity for a premium fitness studio',
    description: 'Developed a bold, energetic brand identity that captures the intensity and premium nature of the fitness studio.',
    challenge: 'Stand out in a crowded fitness market with a unique, memorable brand that appeals to serious athletes.',
    solution: 'We created a dynamic brand system with bold typography, energetic colors, and versatile applications.',
    results: [
      '300% increase in brand recognition',
      '50% increase in membership',
      'Featured in design publications',
      'Rolled out across 5 locations'
    ],
    services: ['Brand Design', 'Marketing Collateral'],
    technologies: ['Adobe Illustrator', 'Photoshop', 'After Effects'],
    timeline: '6 weeks',
    teamSize: '3 people',
    testimonial: {
      quote: 'The new brand has completely elevated our presence. Members love it!',
      author: 'Marcus Williams',
      position: 'Owner, Velocity Fitness',
      avatar: '/assets/images/team/client-4.jpg'
    },
    images: [
      '/assets/images/projects/velocity-1.jpg',
      '/assets/images/projects/velocity-2.jpg',
      '/assets/images/projects/velocity-3.jpg'
    ],
    awards: []
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = () => {
  const categories = [...new Set(projects.map(project => project.category))];
  return ['All', ...categories];
};
