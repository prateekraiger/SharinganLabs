import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../ui/shadcn/button';
import { Badge } from '../ui/shadcn/badge';
import { Sparkles, Zap, TrendingUp, ArrowRight } from 'lucide-react';
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
      {/* Animated Background Orbs - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/15 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <Badge variant="glass" className="px-6 py-3 text-base font-semibold animate-pulse">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Award-Winning AI & Design Agency
          </Badge>
        </div>

        <h1 ref={titleRef} className="heading-1 text-white mb-8 text-5xl md:text-7xl lg:text-[120px] font-extrabold leading-[1.1] tracking-tight">
          <span className="block">We Build</span>
          <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
            AI-Powered
          </span>
          <span className="block">Digital Products</span>
        </h1>
        
        <p ref={subtitleRef} className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          Full-service AI & design agency building intelligent applications with 
          <span className="text-purple-400 font-medium"> GPT-4, Claude, Gemini</span>, and cutting-edge tech.
          <br className="hidden md:block" />
          Transform your vision into reality with our expert team.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="xl" className="group relative overflow-hidden shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70">
            <Zap className="w-5 h-5 mr-2" />
            View AI Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="xl" className="group">
            <TrendingUp className="w-5 h-5 mr-2" />
            Start a Project
          </Button>
        </div>

        {/* Stats - Enhanced */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center glass-light rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105" data-scroll data-scroll-speed="0.5">
            <div className="text-5xl font-black text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-3">300+</div>
            <div className="text-sm text-gray-300 font-medium">AI Projects</div>
          </div>
          <div className="text-center glass-light rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105" data-scroll data-scroll-speed="0.6">
            <div className="text-5xl font-black text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 mb-3">100+</div>
            <div className="text-sm text-gray-300 font-medium">Happy Clients</div>
          </div>
          <div className="text-center glass-light rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105" data-scroll data-scroll-speed="0.7">
            <div className="text-5xl font-black text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">25+</div>
            <div className="text-sm text-gray-300 font-medium">Awards Won</div>
          </div>
          <div className="text-center glass-light rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105" data-scroll data-scroll-speed="0.8">
            <div className="text-5xl font-black text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 mb-3">99%</div>
            <div className="text-sm text-gray-300 font-medium">Satisfaction</div>
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
