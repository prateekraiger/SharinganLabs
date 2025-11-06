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
      
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, '-=0.5')
      .from(ctaRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="hero-gradient"></div>
      
      {/* Animated Background Elements */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 ref={titleRef} className="heading-1 text-dark mb-6">
          We Transform <span className="text-gradient">Visions</span>
          <br />
          Into Digital <span className="text-gradient">Masterpieces</span>
        </h1>
        
        <p ref={subtitleRef} className="body-large text-gray-600 max-w-3xl mx-auto mb-12">
          Award-winning full-service design and development agency crafting
          exceptional digital experiences that captivate and convert.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="large" className="btn-magnetic">
            View Our Work
          </Button>
          <Button variant="secondary" size="large">
            Start a Project
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator mt-20">
          <div className="scroll-line"></div>
          <span className="text-sm text-gray-500 mt-2">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
