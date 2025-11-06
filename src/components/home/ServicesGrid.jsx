import { services } from '../../data/services';
import Card from '../ui/Card';
import './ServicesGrid.css';

const ServicesGrid = () => {
  return (
    <section className="services-section py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label text-primary mb-4 block">What We Do</span>
          <h2 className="heading-2 text-dark mb-6">
            Our Services
          </h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of design and development services
            to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="service-icon text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="heading-5 text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="body text-gray-600 mb-6">
                {service.shortDescription}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300"
              >
                Learn more
                <span className="ml-1">→</span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
