import { useEffect, useRef } from 'react';
import "./index.css";
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import About from './components/home/About';
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
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });

      const onResize = () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.update();
        }
      };

      window.addEventListener('resize', onResize);

      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
        window.removeEventListener('resize', onResize);
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="w-full min-h-screen relative">
      <Layout>
        <div data-scroll-section>
          <Hero />
          <About />
          <ServicesGrid />
          <FeaturedWork />
          <Testimonials />
          <ClientLogos />
          <CTASection />
        </div>
      </Layout>
    </div>
  );
}

export default App;