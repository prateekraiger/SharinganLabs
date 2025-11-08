import { useRef, useEffect } from 'react';
import { services } from '../../data/services';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesGrid.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesGrid = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 65%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="services-section py-32 relative overflow-hidden"
      data-scroll-section
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-scroll data-scroll-speed="0.5">
          <span className="inline-block px-4 py-2 rounded-full glass-light text-purple-300 text-sm font-medium mb-6 border border-purple-500/20">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of design and development services
            to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card group relative p-8 rounded-2xl glass-light border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-purple transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <span className="text-purple-400 mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 group/link transition-all duration-300"
                >
                  Learn more
                  <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
