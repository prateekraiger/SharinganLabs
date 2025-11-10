import { useRef, useEffect } from 'react';
import { services } from '../../data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/shadcn/card';
import { Badge } from '../ui/shadcn/badge';
import { Button } from '../ui/shadcn/button';
import { ArrowRight, Sparkles } from 'lucide-react';
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
          <Badge variant="glass" className="mb-8 px-6 py-3 text-base">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Our Expertise
          </Badge>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            AI & Design <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From AI integration to full-stack development, we deliver cutting-edge solutions
            powered by the latest technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card group relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer transition-all duration-500 border-2"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:via-pink-600/10 group-hover:to-cyan-600/20 transition-all duration-700"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                {/* Icon with animated background */}
                <div className="mb-4 relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative">
                    {service.icon}
                  </div>
                </div>

                <CardTitle className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-base text-gray-300 leading-relaxed">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                {/* Key Features */}
                <div className="space-y-2.5 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-purple-400 text-xs">✓</span>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline Badge */}
                <Badge variant="outline" className="mb-4">
                  {service.timeline}
                </Badge>

                {/* CTA Button */}
                <Button 
                  variant="ghost" 
                  className="w-full group/btn justify-between hover:bg-purple-500/10"
                  onClick={() => window.location.href = `/services/${service.slug}`}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </CardContent>

              {/* Corner accent with animated shine */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
