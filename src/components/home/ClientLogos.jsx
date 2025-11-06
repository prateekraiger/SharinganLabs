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
    <section className="client-logos py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="label text-primary mb-4 block">Trusted By</span>
          <h3 className="heading-3 text-dark">
            Amazing Brands We've Worked With
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
                <div className="client-logo">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-dark transition-colors">
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
