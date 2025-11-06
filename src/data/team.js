/**
 * Team members data for SharinganLabs
 */

export const team = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Founder & Creative Director',
    bio: 'With 12+ years of experience in digital design, Alex leads our creative vision and ensures every project exceeds expectations.',
    image: '/assets/images/team/alex.jpg',
    expertise: ['Brand Strategy', 'Creative Direction', 'UI/UX Design'],
    social: {
      linkedin: 'https://linkedin.com/in/alexrivera',
      twitter: 'https://twitter.com/alexrivera',
      dribbble: 'https://dribbble.com/alexrivera'
    },
    funFact: 'Coffee enthusiast and amateur photographer'
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Lead Designer',
    bio: 'Sophia specializes in creating beautiful, user-centered designs that solve real problems and delight users.',
    image: '/assets/images/team/sophia.jpg',
    expertise: ['UI/UX Design', 'Design Systems', 'Prototyping'],
    social: {
      linkedin: 'https://linkedin.com/in/sophiachen',
      dribbble: 'https://dribbble.com/sophiachen',
      behance: 'https://behance.net/sophiachen'
    },
    funFact: 'Loves hiking and watercolor painting'
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    bio: 'Marcus brings ideas to life with clean, efficient code. Specializes in React and modern web technologies.',
    image: '/assets/images/team/marcus.jpg',
    expertise: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    social: {
      linkedin: 'https://linkedin.com/in/marcusjohnson',
      github: 'https://github.com/marcusjohnson',
      twitter: 'https://twitter.com/marcusdev'
    },
    funFact: 'Mechanical keyboard collector'
  },
  {
    id: 4,
    name: 'Emma Williams',
    role: 'Mobile Developer',
    bio: 'Emma creates beautiful mobile experiences for iOS and Android. Expert in React Native and Flutter.',
    image: '/assets/images/team/emma.jpg',
    expertise: ['React Native', 'Flutter', 'iOS', 'Android'],
    social: {
      linkedin: 'https://linkedin.com/in/emmawilliams',
      github: 'https://github.com/emmawilliams',
      twitter: 'https://twitter.com/emmadev'
    },
    funFact: 'Marathon runner and yoga instructor'
  },
  {
    id: 5,
    name: 'David Park',
    role: 'Brand Strategist',
    bio: 'David helps brands find their unique voice and visual identity. Over 8 years of branding experience.',
    image: '/assets/images/team/david.jpg',
    expertise: ['Brand Strategy', 'Visual Identity', 'Marketing'],
    social: {
      linkedin: 'https://linkedin.com/in/davidpark',
      twitter: 'https://twitter.com/davidbrand'
    },
    funFact: 'Vintage vinyl record collector'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Project Manager',
    bio: 'Lisa ensures projects run smoothly from start to finish. Expert in agile methodologies and client communication.',
    image: '/assets/images/team/lisa.jpg',
    expertise: ['Project Management', 'Agile', 'Client Relations'],
    social: {
      linkedin: 'https://linkedin.com/in/lisaanderson',
      twitter: 'https://twitter.com/lisapm'
    },
    funFact: 'Travel blogger and foodie'
  }
];

export const getTeamMembersByRole = (role) => {
  return team.filter(member => member.role.includes(role));
};
