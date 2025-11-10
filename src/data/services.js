/**
 * Services data for SharinganLabs
 */

export const services = [
  {
    id: 'ai-integration',
    title: 'AI Integration & Development',
    slug: 'ai-integration',
    icon: '🤖',
    shortDescription: 'Custom AI solutions powered by GPT-4, Claude, and Gemini',
    description: 'We build intelligent AI-powered applications leveraging the latest LLMs and machine learning technologies. From chatbots to content generation, we integrate AI seamlessly into your products.',
    features: [
      'GPT-4 & Claude Integration',
      'Custom AI Chatbots',
      'RAG (Retrieval Augmented Generation)',
      'AI Content Generation',
      'Prompt Engineering',
      'Fine-tuning & Model Training'
    ],
    tools: ['GPT-4', 'Claude', 'Gemini', 'LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate'],
    process: [
      'AI Strategy & Planning',
      'Data Preparation',
      'Model Selection & Training',
      'Integration & Testing',
      'Optimization',
      'Monitoring & Maintenance'
    ],
    timeline: '8-16 weeks',
    color: '#8B5CF6'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Image AI',
    slug: 'computer-vision',
    icon: '👁️',
    shortDescription: 'Advanced image recognition, generation, and processing',
    description: 'Transform your visual data with cutting-edge computer vision AI. From object detection to AI image generation with Stable Diffusion and DALL-E.',
    features: [
      'AI Image Generation',
      'Object Detection & Recognition',
      'Image Segmentation',
      'Facial Recognition',
      'OCR & Document Processing',
      'Video Analysis'
    ],
    tools: ['Stable Diffusion', 'DALL-E 3', 'YOLO', 'OpenCV', 'TensorFlow', 'PyTorch'],
    process: [
      'Use Case Analysis',
      'Data Collection & Labeling',
      'Model Training',
      'Inference Optimization',
      'Deployment',
      'Performance Tuning'
    ],
    timeline: '10-18 weeks',
    color: '#EC4899'
  },
  {
    id: 'nlp-solutions',
    title: 'NLP & Language AI',
    slug: 'nlp-solutions',
    icon: '💬',
    shortDescription: 'Natural language processing and understanding',
    description: 'Build intelligent language AI solutions including sentiment analysis, text classification, named entity recognition, and advanced language understanding.',
    features: [
      'Text Classification',
      'Sentiment Analysis',
      'Named Entity Recognition',
      'Language Translation',
      'Text Summarization',
      'Question Answering Systems'
    ],
    tools: ['Transformers', 'spaCy', 'NLTK', 'Hugging Face', 'GPT-4', 'BERT'],
    process: [
      'Requirements Analysis',
      'Corpus Development',
      'Model Selection',
      'Training & Validation',
      'Integration',
      'Continuous Learning'
    ],
    timeline: '8-14 weeks',
    color: '#06B6D4'
  },
  {
    id: 'ml-solutions',
    title: 'Machine Learning Solutions',
    slug: 'ml-solutions',
    icon: '📊',
    shortDescription: 'Predictive analytics and custom ML models',
    description: 'Create powerful predictive models and data-driven insights with custom machine learning solutions tailored to your business needs.',
    features: [
      'Predictive Analytics',
      'Recommendation Systems',
      'Anomaly Detection',
      'Time Series Forecasting',
      'Customer Segmentation',
      'Churn Prediction'
    ],
    tools: ['Python', 'TensorFlow', 'XGBoost', 'scikit-learn', 'PyTorch', 'Keras'],
    process: [
      'Problem Definition',
      'Data Analysis',
      'Feature Engineering',
      'Model Development',
      'Validation & Testing',
      'Deployment & Monitoring'
    ],
    timeline: '12-20 weeks',
    color: '#10B981'
  },
  {
    id: 'voice-ai',
    title: 'Voice AI & Speech Recognition',
    slug: 'voice-ai',
    icon: '🎙️',
    shortDescription: 'Advanced voice recognition and synthesis',
    description: 'Build intelligent voice applications with state-of-the-art speech recognition, text-to-speech, and voice cloning technologies.',
    features: [
      'Speech-to-Text',
      'Text-to-Speech',
      'Voice Cloning',
      'Emotion Detection',
      'Multi-language Support',
      'Real-time Processing'
    ],
    tools: ['Whisper', 'ElevenLabs', 'Google Speech API', 'WebRTC', 'PyAudio'],
    process: [
      'Audio Analysis',
      'Model Selection',
      'Training & Fine-tuning',
      'Real-time Optimization',
      'Integration',
      'Quality Assurance'
    ],
    timeline: '10-16 weeks',
    color: '#F59E0B'
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    slug: 'ai-automation',
    icon: '⚡',
    shortDescription: 'Intelligent automation for business processes',
    description: 'Automate complex workflows with AI agents that can reason, make decisions, and execute tasks autonomously.',
    features: [
      'AI Agent Development',
      'Workflow Orchestration',
      'Document Processing',
      'Data Extraction',
      'Multi-step Reasoning',
      'Task Automation'
    ],
    tools: ['LangChain', 'AutoGPT', 'n8n', 'Zapier', 'Make', 'GPT-4'],
    process: [
      'Workflow Analysis',
      'Agent Design',
      'Integration Setup',
      'Testing & Validation',
      'Deployment',
      'Optimization'
    ],
    timeline: '6-12 weeks',
    color: '#A855F7'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: '🎨',
    shortDescription: 'User-centered design that converts and delights',
    description: 'We create intuitive, beautiful interfaces backed by research and testing. From wireframes to high-fidelity prototypes, we design experiences users love.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Design Systems',
      'Interaction Design',
      'Usability Testing',
      'A/B Testing'
    ],
    tools: ['Figma', 'Adobe XD', 'Principle', 'Maze', 'Hotjar'],
    process: [
      'Research & Discovery',
      'Wireframing',
      'Visual Design',
      'Prototyping',
      'User Testing',
      'Iteration'
    ],
    timeline: '4-8 weeks',
    color: '#DC143C'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    slug: 'web-development',
    icon: '💻',
    shortDescription: 'Fast, scalable websites built with modern technologies',
    description: 'We build lightning-fast, SEO-optimized websites using cutting-edge frameworks. From landing pages to complex web applications.',
    features: [
      'React & Next.js Development',
      'Vue & Nuxt.js Development',
      'WordPress & Headless CMS',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Integration'
    ],
    tools: ['React', 'Next.js', 'Vue', 'Node.js', 'WordPress', 'Tailwind CSS'],
    process: [
      'Requirements Analysis',
      'Architecture Planning',
      'Development',
      'Testing',
      'Deployment',
      'Maintenance'
    ],
    timeline: '6-12 weeks',
    color: '#00D9FF'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    slug: 'mobile-development',
    icon: '📱',
    shortDescription: 'Native and cross-platform mobile applications',
    description: 'Build powerful mobile apps for iOS and Android. Native performance with React Native or Flutter for cross-platform efficiency.',
    features: [
      'iOS Native Development',
      'Android Native Development',
      'React Native Apps',
      'Flutter Applications',
      'App Store Optimization',
      'Push Notifications'
    ],
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
    process: [
      'Strategy & Planning',
      'Design & Prototyping',
      'Development',
      'Testing',
      'App Store Submission',
      'Post-Launch Support'
    ],
    timeline: '8-16 weeks',
    color: '#8B5CF6'
  },
  {
    id: 'brand-design',
    title: 'Brand Design',
    slug: 'brand-design',
    icon: '✨',
    shortDescription: 'Memorable brand identities that stand out',
    description: 'We create distinctive brand identities that capture your essence and resonate with your audience. From logo to full brand systems.',
    features: [
      'Logo Design',
      'Brand Identity',
      'Brand Guidelines',
      'Visual Language',
      'Marketing Collateral',
      'Brand Strategy'
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'After Effects'],
    process: [
      'Brand Discovery',
      'Research & Analysis',
      'Concept Development',
      'Design Refinement',
      'Brand Guidelines',
      'Asset Delivery'
    ],
    timeline: '4-6 weeks',
    color: '#F59E0B'
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    slug: 'full-stack-development',
    icon: '⚡',
    shortDescription: 'End-to-end application development',
    description: 'Complete application development from database to deployment. We handle everything from backend APIs to frontend interfaces.',
    features: [
      'Backend Development',
      'Frontend Development',
      'Database Design',
      'API Development',
      'Cloud Infrastructure',
      'DevOps & CI/CD'
    ],
    tools: ['Node.js', 'Python', 'React', 'PostgreSQL', 'AWS', 'Docker'],
    process: [
      'System Architecture',
      'Backend Development',
      'Frontend Development',
      'Integration',
      'Testing',
      'Deployment'
    ],
    timeline: '10-20 weeks',
    color: '#10B981'
  },
  {
    id: 'brand-rework',
    title: 'Brand Rework',
    slug: 'brand-rework',
    icon: '🔄',
    shortDescription: 'Refresh and modernize your existing brand',
    description: 'Give your brand a fresh look while maintaining its core identity. Perfect for companies ready to evolve.',
    features: [
      'Brand Audit',
      'Competitive Analysis',
      'Visual Refresh',
      'Logo Redesign',
      'Migration Strategy',
      'Rollout Planning'
    ],
    tools: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Brand.ai'],
    process: [
      'Brand Audit',
      'Strategy Development',
      'Design Exploration',
      'Testing & Validation',
      'Migration Planning',
      'Implementation'
    ],
    timeline: '6-10 weeks',
    color: '#EC4899'
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return services.filter(service => service.category === category);
};
