import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(titleRef.current.children, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        stagger: 0.15,
        rotateX: -20
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
      .from(ctaRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="hero min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      data-scroll
      data-scroll-speed="1"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full glass-light text-purple-300 text-sm font-medium border border-purple-500/20">
            ✨ Award-Winning Design Agency
          </span>
        </div>

        <h1 ref={titleRef} className="heading-1 text-white mb-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="block">We Transform</span>
          <span className="block text-gradient">Digital Experiences</span>
          <span className="block">Into Masterpieces</span>
        </h1>
        
        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Full-service design and development agency crafting exceptional 
          digital experiences that captivate audiences and drive results.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="large" className="group relative overflow-hidden">
            <span className="relative z-10">View Our Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
          <Button variant="secondary" size="large" className="glass-light border border-purple-500/30 hover:border-purple-500/60 transition-all">
            Start a Project
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center" data-scroll data-scroll-speed="0.5">
            <div className="text-4xl font-bold text-gradient-purple mb-2">250+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center" data-scroll data-scroll-speed="0.6">
            <div className="text-4xl font-bold text-gradient-purple mb-2">50+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center" data-scroll data-scroll-speed="0.7">
            <div className="text-4xl font-bold text-gradient-purple mb-2">15+</div>
            <div className="text-sm text-gray-400">Awards Won</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-transparent rounded-full animate-bounce"></div>
          </div>
          <span className="text-sm text-gray-500 mt-3">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
