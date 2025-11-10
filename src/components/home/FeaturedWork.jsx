import { useRef, useEffect } from 'react';
import { getFeaturedProjects } from '../../data/projects';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const featuredProjects = getFeaturedProjects();
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-32" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div data-scroll data-scroll-speed="0.5">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Our Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              A collection of our latest and greatest projects.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            View All Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className="bg-background/50 backdrop-blur-lg border border-border rounded-xl overflow-hidden group"
            >
              <a href={`/work/${project.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.category}</p>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
