import { useRef, useEffect } from 'react';
import { getFeaturedProjects } from '../../data/projects';
import { Button } from '../ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section className="py-32 relative overflow-hidden" data-scroll-section>
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div data-scroll data-scroll-speed="0.5">
            <span className="inline-block px-4 py-2 rounded-full glass-light text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/20">
              Our Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              A collection of our latest and greatest projects.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="mt-6 md:mt-0 glass-light border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
          >
            View All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              href={`/work/${project.slug}`}
              className="group block relative overflow-hidden rounded-2xl glass-light border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ 
                    backgroundImage: `url(${project.thumbnail})`,
                    backgroundColor: 'rgba(139, 92, 246, 0.1)'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060010] via-transparent to-transparent opacity-60"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-purple-300 text-sm font-semibold mb-2">{project.category}</p>
                    <div className="flex items-center text-white font-semibold">
                      View Case Study
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 glass-light text-purple-300 rounded-full font-medium border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-purple transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
