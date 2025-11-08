import Button from '../ui/Button';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section py-32 relative overflow-hidden" data-scroll-section>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="glass p-12 md:p-16 rounded-3xl border border-purple-500/30 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Something
            <br />
            <span className="text-gradient">Extraordinary?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create a digital experience that
            exceeds your expectations. Get in touch today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="accent" 
              size="large" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 shadow-lg shadow-purple-500/50 glow-purple"
            >
              Start Your Project
            </Button>
            <Button 
              variant="ghost" 
              size="large" 
              className="glass-light border-purple-500/30 hover:border-purple-500/60 text-white transition-all"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-purple-500/20">
            <div data-scroll data-scroll-speed="0.5">
              <div className="text-4xl md:text-5xl font-bold text-gradient-purple mb-2">150+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div data-scroll data-scroll-speed="0.6">
              <div className="text-4xl md:text-5xl font-bold text-gradient-purple mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div data-scroll data-scroll-speed="0.7">
              <div className="text-4xl md:text-5xl font-bold text-gradient-purple mb-2">50+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div data-scroll data-scroll-speed="0.8">
              <div className="text-4xl md:text-5xl font-bold text-gradient-purple mb-2">12</div>
              <div className="text-gray-400 text-sm">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
