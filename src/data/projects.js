/**
 * Projects/Portfolio data for SharinganLabs
 */

export const projects = [
  {
    id: 'project-ai-1',
    title: 'AI-Powered Chatbot Platform',
    slug: 'ai-chatbot-platform',
    client: 'TechCorp Industries',
    category: 'AI & Machine Learning',
    tags: ['AI', 'NLP', 'ChatGPT', 'React'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/ai-chatbot-thumb.jpg',
    heroImage: '/assets/images/projects/ai-chatbot-hero.jpg',
    shortDescription: 'Enterprise-grade AI chatbot with advanced NLP and multi-language support',
    description: 'Built a sophisticated AI chatbot platform leveraging GPT-4 and custom fine-tuned models to provide intelligent customer support across multiple channels.',
    challenge: 'Create an AI solution that understands context, maintains conversation history, and provides accurate responses while handling 10K+ concurrent users.',
    solution: 'Implemented a distributed architecture with Redis caching, vector embeddings for semantic search, and real-time streaming responses with WebSocket connections.',
    results: [
      '85% reduction in customer support tickets',
      '95% user satisfaction rate',
      '3-second average response time',
      'Handles 50K+ conversations daily'
    ],
    services: ['AI Integration', 'Full-Stack Development', 'UI/UX Design'],
    technologies: ['GPT-4', 'LangChain', 'Pinecone', 'React', 'Node.js', 'Redis', 'WebSocket'],
    timeline: '16 weeks',
    teamSize: '8 people',
    testimonial: {
      quote: 'This AI chatbot has revolutionized our customer support. The technology is cutting-edge and the results speak for themselves.',
      author: 'Jennifer Martinez',
      position: 'CTO, TechCorp Industries',
      avatar: '/assets/images/team/client-ai-1.jpg'
    },
    images: [
      '/assets/images/projects/ai-chatbot-1.jpg',
      '/assets/images/projects/ai-chatbot-2.jpg',
      '/assets/images/projects/ai-chatbot-3.jpg'
    ],
    awards: ['Best AI Innovation 2024', 'Tech Excellence Award']
  },
  {
    id: 'project-ai-2',
    title: 'AI Image Generation Studio',
    slug: 'ai-image-generator',
    client: 'CreativeAI Labs',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Computer Vision', 'Stable Diffusion', 'Image Generation'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/ai-image-thumb.jpg',
    heroImage: '/assets/images/projects/ai-image-hero.jpg',
    shortDescription: 'Professional AI image generation platform with custom model training',
    description: 'Developed a comprehensive AI image generation studio powered by Stable Diffusion and DALL-E 3, featuring custom model fine-tuning, style transfer, and batch processing.',
    challenge: 'Build a production-ready platform that allows users to generate, edit, and upscale images with AI while maintaining brand consistency and quality.',
    solution: 'Created a scalable cloud-based solution with GPU optimization, custom LoRA training, and advanced prompt engineering tools.',
    results: [
      '1M+ images generated monthly',
      '40% faster generation time',
      '4.9/5 user rating',
      'Featured on Product Hunt'
    ],
    services: ['AI Development', 'Cloud Architecture', 'UI/UX Design'],
    technologies: ['Stable Diffusion', 'DALL-E 3', 'PyTorch', 'ComfyUI', 'AWS', 'React', 'FastAPI'],
    timeline: '20 weeks',
    teamSize: '10 people',
    testimonial: {
      quote: 'The AI image studio has transformed our creative workflow. We can now produce high-quality visuals in minutes instead of hours.',
      author: 'David Chen',
      position: 'Creative Director, CreativeAI Labs',
      avatar: '/assets/images/team/client-ai-2.jpg'
    },
    images: [
      '/assets/images/projects/ai-image-1.jpg',
      '/assets/images/projects/ai-image-2.jpg',
      '/assets/images/projects/ai-image-3.jpg'
    ],
    awards: ['Best Design Tool 2024', 'Innovation in AI']
  },
  {
    id: 'project-ai-3',
    title: 'Voice AI Assistant',
    slug: 'voice-ai-assistant',
    client: 'SmartHome Solutions',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Voice Recognition', 'NLP', 'IoT'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/voice-ai-thumb.jpg',
    heroImage: '/assets/images/projects/voice-ai-hero.jpg',
    shortDescription: 'Multi-language voice assistant with emotion detection and smart home integration',
    description: 'Built an advanced voice AI assistant with real-time speech recognition, natural language understanding, emotion detection, and seamless smart home device integration.',
    challenge: 'Create a voice assistant that understands multiple languages, detects user emotions, and controls smart home devices with low latency.',
    solution: 'Implemented Whisper for speech recognition, custom NLP models for intent classification, and real-time audio streaming with emotion analysis.',
    results: [
      '99% speech recognition accuracy',
      'Supports 15+ languages',
      '200ms response latency',
      '500K+ active users'
    ],
    services: ['AI Development', 'Mobile Development', 'IoT Integration'],
    technologies: ['Whisper', 'GPT-4', 'TensorFlow', 'WebRTC', 'React Native', 'MQTT', 'Python'],
    timeline: '18 weeks',
    teamSize: '9 people',
    testimonial: {
      quote: 'The voice AI assistant is incredibly responsive and understands context better than any solution we\'ve tried. Game-changing technology.',
      author: 'Lisa Anderson',
      position: 'Product Manager, SmartHome Solutions',
      avatar: '/assets/images/team/client-ai-3.jpg'
    },
    images: [
      '/assets/images/projects/voice-ai-1.jpg',
      '/assets/images/projects/voice-ai-2.jpg',
      '/assets/images/projects/voice-ai-3.jpg'
    ],
    awards: ['Best Voice AI 2024']
  },
  {
    id: 'project-ai-4',
    title: 'AI Code Assistant IDE',
    slug: 'ai-code-assistant',
    client: 'DevTools Inc.',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Code Generation', 'Developer Tools', 'GPT-4'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/code-ai-thumb.jpg',
    heroImage: '/assets/images/projects/code-ai-hero.jpg',
    shortDescription: 'Intelligent code completion and generation with multi-language support',
    description: 'Developed an AI-powered code assistant integrated into popular IDEs, offering intelligent code completion, bug detection, code reviews, and automated documentation.',
    challenge: 'Build an AI tool that understands codebase context, generates production-ready code, and integrates seamlessly with existing developer workflows.',
    solution: 'Created a VS Code extension with fine-tuned CodeLlama models, RAG for codebase context, and real-time code analysis using AST parsing.',
    results: [
      '70% faster code completion',
      '50% reduction in bugs',
      '100K+ downloads',
      'Featured by Microsoft'
    ],
    services: ['AI Development', 'Developer Tools', 'Extension Development'],
    technologies: ['CodeLlama', 'GPT-4', 'TypeScript', 'Langchain', 'ChromaDB', 'VS Code API'],
    timeline: '14 weeks',
    teamSize: '7 people',
    testimonial: {
      quote: 'This AI code assistant has become an essential part of our development toolkit. It\'s like having a senior developer pair programming with you.',
      author: 'Robert Thompson',
      position: 'Engineering Lead, DevTools Inc.',
      avatar: '/assets/images/team/client-ai-4.jpg'
    },
    images: [
      '/assets/images/projects/code-ai-1.jpg',
      '/assets/images/projects/code-ai-2.jpg',
      '/assets/images/projects/code-ai-3.jpg'
    ],
    awards: ['Best Developer Tool 2024', 'Innovation Award']
  },
  {
    id: 'project-ai-5',
    title: 'Predictive Analytics Platform',
    slug: 'predictive-analytics',
    client: 'DataVision Corp',
    category: 'AI & Machine Learning',
    tags: ['Machine Learning', 'Analytics', 'Big Data', 'Python'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/analytics-ai-thumb.jpg',
    heroImage: '/assets/images/projects/analytics-ai-hero.jpg',
    shortDescription: 'ML-powered predictive analytics for business intelligence and forecasting',
    description: 'Built a comprehensive predictive analytics platform using advanced machine learning models for sales forecasting, customer churn prediction, and trend analysis.',
    challenge: 'Process massive datasets in real-time and provide accurate predictions with explainable AI insights for business decision-making.',
    solution: 'Implemented ensemble ML models with XGBoost and neural networks, real-time data pipelines with Apache Kafka, and interactive dashboards with explainable AI visualizations.',
    results: [
      '92% prediction accuracy',
      '10TB+ data processed daily',
      '$2M+ cost savings',
      '80% faster insights'
    ],
    services: ['Machine Learning', 'Data Engineering', 'Dashboard Development'],
    technologies: ['Python', 'TensorFlow', 'XGBoost', 'Apache Kafka', 'Spark', 'React', 'D3.js'],
    timeline: '22 weeks',
    teamSize: '12 people',
    testimonial: {
      quote: 'The predictive analytics platform has given us unprecedented insights into our business. The ROI has been incredible.',
      author: 'Amanda Rodriguez',
      position: 'Chief Data Officer, DataVision Corp',
      avatar: '/assets/images/team/client-ai-5.jpg'
    },
    images: [
      '/assets/images/projects/analytics-ai-1.jpg',
      '/assets/images/projects/analytics-ai-2.jpg',
      '/assets/images/projects/analytics-ai-3.jpg'
    ],
    awards: ['Best Analytics Platform 2024', 'Data Science Excellence']
  },
  {
    id: 'project-ai-6',
    title: 'AI Video Content Generator',
    slug: 'ai-video-generator',
    client: 'MediaPro Studios',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Video Generation', 'Computer Vision', 'Deep Learning'],
    year: 2024,
    featured: true,
    thumbnail: '/assets/images/projects/video-ai-thumb.jpg',
    heroImage: '/assets/images/projects/video-ai-hero.jpg',
    shortDescription: 'AI-powered video generation, editing, and enhancement platform',
    description: 'Created an innovative AI video generation platform that creates, edits, and enhances videos using cutting-edge diffusion models and video transformers.',
    challenge: 'Generate high-quality, coherent videos from text prompts while maintaining temporal consistency and allowing for precise editing control.',
    solution: 'Leveraged Runway Gen-2, Stable Video Diffusion, and custom video inpainting models with frame interpolation for smooth 60fps output.',
    results: [
      '50K+ videos generated',
      '4K resolution support',
      '60% faster than manual editing',
      'Featured on TechCrunch'
    ],
    services: ['AI Development', 'Video Processing', 'Cloud Infrastructure'],
    technologies: ['Stable Video Diffusion', 'PyTorch', 'FFmpeg', 'CUDA', 'React', 'AWS', 'WebGPU'],
    timeline: '24 weeks',
    teamSize: '11 people',
    testimonial: {
      quote: 'This AI video platform has revolutionized our content production. We can now create professional videos in a fraction of the time.',
      author: 'James Wilson',
      position: 'CEO, MediaPro Studios',
      avatar: '/assets/images/team/client-ai-6.jpg'
    },
    images: [
      '/assets/images/projects/video-ai-1.jpg',
      '/assets/images/projects/video-ai-2.jpg',
      '/assets/images/projects/video-ai-3.jpg'
    ],
    awards: ['Best Video AI Tool 2024', 'Creative Tech Innovation']
  },
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
