import { useRef, useEffect, useState } from 'react';
import { getFeaturedProjects, getAllCategories } from '../../data/projects';
import { Button } from '../ui/shadcn/button';
import { Badge } from '../ui/shadcn/badge';
import { Card, CardContent } from '../ui/shadcn/card';
import { ExternalLink, Sparkles, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturedWork.css';

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const featuredProjects = getFeaturedProjects();
  const [activeFilter, setActiveFilter] = useState('All');
  const projectsRef = useRef([]);
  const categories = getAllCategories();

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 100,
          opacity: 0
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
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section className="featured-work py-32 relative overflow-hidden" data-scroll-section>
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="glass" className="mb-8 px-6 py-3 text-base">
            <Award className="w-4 h-4 mr-2 inline" />
            Our Portfolio
          </Badge>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            Featured <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">AI Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Cutting-edge AI solutions we've built for clients worldwide.
            From chatbots to image generation, explore our innovative work.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredProjects
            .filter(project => activeFilter === 'All' || project.category === activeFilter)
            .map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className="project-card group overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 border-2 cursor-pointer"
              onClick={() => window.location.href = `/work/${project.slug}`}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                {/* Placeholder gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-purple-400/30" />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="glass" className="backdrop-blur-xl">
                    {project.category}
                  </Badge>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary">
                    {project.year}
                  </Badge>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white font-bold text-lg">
                        View Project
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </div>
                      {project.awards && project.awards.length > 0 && (
                        <Award className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <CardContent className="p-8">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-base">
                  {project.shortDescription}
                </p>

                {/* Results Preview */}
                {project.results && project.results.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-purple-400 mb-3">Key Results:</p>
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-400">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>

              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button size="xl" variant="glass" className="group">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
