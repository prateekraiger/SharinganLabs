import Button from '../ui/Button';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="cta-bg"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="heading-2 text-white mb-6">
          Ready to Build Something
          <br />
          <span className="text-accent">Extraordinary?</span>
        </h2>
        
        <p className="body-large text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss your project and create a digital experience that
          exceeds your expectations. Get in touch today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="large" className="btn-glow">
            Start Your Project
          </Button>
          <Button variant="ghost" size="large" className="text-white border-white hover:bg-white hover:text-dark">
            Schedule a Call
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">150+</div>
            <div className="text-gray-300 text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-gray-300 text-sm">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">12</div>
            <div className="text-gray-300 text-sm">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
