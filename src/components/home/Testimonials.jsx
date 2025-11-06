import { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-section py-24 bg-secondary text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label text-primary mb-4 block">Testimonials</span>
          <h2 className="heading-2 mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="testimonial-carousel relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-slide ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              {/* Quote */}
              <div className="text-center mb-12">
                <div className="text-6xl text-primary mb-6">"</div>
                <p className="body-large text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-700 mb-4 overflow-hidden">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h4 className="heading-6 mb-1">{testimonial.author}</h4>
                <p className="body-small text-gray-400">
                  {testimonial.position}, {testimonial.company}
                </p>
                
                {/* Star Rating */}
                <div className="flex gap-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
