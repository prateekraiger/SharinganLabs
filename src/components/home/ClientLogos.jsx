import { clients } from '../../data/clients';

const ClientLogos = () => {
  return (
    <section className="py-24" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-scroll data-scroll-speed="0.5">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Trusted By The Best
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Clients</span>
          </h3>
        </div>

        <div className="relative w-full overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <div className="bg-secondary px-8 py-4 rounded-lg">
                  <span className="text-xl font-bold text-secondary-foreground">
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
