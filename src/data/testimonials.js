/**
 * Testimonials data for SharinganLabs
 */

export const testimonials = [
  {
    id: 1,
    quote: "SharinganLabs didn't just build us a website, they crafted a digital experience that perfectly captures our brand essence. The attention to detail is phenomenal.",
    author: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechPay Solutions',
    avatar: '/assets/images/team/client-1.jpg',
    logo: '/assets/images/clients/techpay-logo.svg',
    rating: 5,
    project: 'FinTech Dashboard'
  },
  {
    id: 2,
    quote: 'Working with this team was an absolute pleasure. They understood our vision and delivered beyond our expectations. Our sales have tripled since the new site launched.',
    author: 'Michael Green',
    position: 'Founder',
    company: 'GreenLeaf Organics',
    avatar: '/assets/images/team/client-2.jpg',
    logo: '/assets/images/clients/greenleaf-logo.svg',
    rating: 5,
    project: 'GreenLeaf E-commerce'
  },
  {
    id: 3,
    quote: 'The app they built is not just functional, it\'s beautiful. Our users constantly compliment the design and user experience. Worth every penny.',
    author: 'Dr. Emily Chen',
    position: 'Founder',
    company: 'MindfulMe Inc.',
    avatar: '/assets/images/team/client-3.jpg',
    logo: '/assets/images/clients/mindfulme-logo.svg',
    rating: 5,
    project: 'MindfulMe App'
  },
  {
    id: 4,
    quote: 'Their brand design work is exceptional. The new identity has completely transformed how people perceive our business. Highly recommended!',
    author: 'Marcus Williams',
    position: 'Owner',
    company: 'Velocity Fitness Studios',
    avatar: '/assets/images/team/client-4.jpg',
    logo: '/assets/images/clients/velocity-logo.svg',
    rating: 5,
    project: 'Velocity Fitness Rebrand'
  },
  {
    id: 5,
    quote: 'Professional, creative, and always on time. They guided us through the entire process and the result speaks for itself.',
    author: 'Jennifer Lopez',
    position: 'Marketing Director',
    company: 'Luxe Fashion',
    avatar: '/assets/images/team/client-5.jpg',
    logo: '/assets/images/clients/luxe-logo.svg',
    rating: 5,
    project: 'Luxe E-commerce Platform'
  }
];

export const getTestimonialsByRating = (minRating) => {
  return testimonials.filter(t => t.rating >= minRating);
};
