import "./index.css";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import ServicesGrid from './components/home/ServicesGrid';
import FeaturedWork from './components/home/FeaturedWork';
import Testimonials from './components/home/Testimonials';
import ClientLogos from './components/home/ClientLogos';
import CTASection from './components/home/CTASection';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
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