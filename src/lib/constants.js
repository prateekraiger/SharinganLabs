/**
 * Constants for SharinganLabs website
 */

export const SITE_CONFIG = {
  name: 'SharinganLabs',
  tagline: 'We Transform Visions Into Digital Masterpieces',
  description: 'Award-winning full-service design and development agency specializing in UI/UX design, web development, mobile apps, and brand design.',
  url: 'https://sharinganlabs.com',
  email: 'hello@sharinganlabs.com',
  phone: '+1 (555) 123-4567',
  address: 'San Francisco, CA',
  social: {
    twitter: 'https://twitter.com/sharinganlabs',
    linkedin: 'https://linkedin.com/company/sharinganlabs',
    instagram: 'https://instagram.com/sharinganlabs',
    dribbble: 'https://dribbble.com/sharinganlabs',
    behance: 'https://behance.net/sharinganlabs',
    github: 'https://github.com/sharinganlabs'
  }
};

export const NAVIGATION_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' }
];

export const COLORS = {
  primary: '#DC143C',
  secondary: '#1A1A1D',
  accent: '#00D9FF',
  dark: '#000000',
  light: '#FFFFFF',
  gray: {
    100: '#F7F7F7',
    200: '#E1E1E1',
    300: '#CFCFCF',
    400: '#B1B1B1',
    500: '#9E9E9E',
    600: '#7E7E7E',
    700: '#626262',
    800: '#515151',
    900: '#3B3B3B'
  }
};

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  verySlow: 1.0
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536
};
