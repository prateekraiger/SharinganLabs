import './ClientLogos.css';

const ClientLogos = () => {
  const clients = [
    'TechPay Solutions',
    'GreenLeaf Organics',
    'MindfulMe',
    'Velocity Fitness',
    'Luxe Fashion',
    'CloudSync',
    'FinanceFlow',
    'HealthPlus',
    'EduTech',
    'FoodieHub'
  ];

  return (
    <section className="client-logos py-24 overflow-hidden relative" data-scroll-section>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-scroll data-scroll-speed="0.5">
          <span className="inline-block px-4 py-2 rounded-full glass-light text-purple-300 text-sm font-medium mb-6 border border-purple-500/20">
            Trusted By
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Amazing Brands We've <span className="text-gradient">Worked With</span>
          </h3>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container">
          <div className="marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="client-logo-item"
              >
                <div className="client-logo glass-light px-8 py-4 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <span className="text-xl font-bold text-gray-300 hover:text-gradient-purple transition-colors">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
