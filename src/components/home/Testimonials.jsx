import { testimonials } from '../../data/testimonials';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Testimonials = () => {
  return (
    <section className="py-32" data-scroll-section>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20" data-scroll data-scroll-speed="0.5">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-lg text-muted-foreground mb-6">"{testimonial.quote}"</p>
                      <Avatar className="w-16 h-16 mb-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <h4 className="text-lg font-semibold text-foreground">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
