import { stats } from '../../data/stats.js';
import MagneticButton from '../ui/MagneticButton';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const CTASection = () => {
  return (
    <section className="py-32" data-scroll-section>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Card className="p-12 md:p-16">
          <CardContent>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's <span className="text-primary">Build</span> Something
              <br />
              Amazing Together
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to start a project? We're here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <MagneticButton>
                <Button size="lg">Get in Touch</Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="secondary">
                  View Our Work
                </Button>
              </MagneticButton>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t">
              {stats.map((stat, index) => (
                <div key={index} data-scroll data-scroll-speed={0.5 + index * 0.1}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
