import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          We are a team of passionate designers and developers dedicated to creating beautiful and functional websites. Our goal is to help businesses succeed online by providing them with the tools and expertise they need to thrive in the digital world.
        </p>
      </div>
    </section>
  );
};

export default About;
