import { useEffect, useRef } from 'react';
import "./index.css";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import ServicesGrid from './components/home/ServicesGrid';
import FeaturedWork from './components/home/FeaturedWork';
import Testimonials from './components/home/Testimonials';
import ClientLogos from './components/home/ClientLogos';
import CTASection from './components/home/CTASection';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="w-full min-h-screen relative">
      <Header />
      <main className="relative z-10" data-scroll-section>
        <Hero />
        <ServicesGrid />
        <FeaturedWork />
        <Testimonials />
        <ClientLogos />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;