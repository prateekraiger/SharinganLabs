import { getFeaturedProjects } from '../../data/projects';
import Button from '../ui/Button';
import './FeaturedWork.css';

const FeaturedWork = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="featured-work py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="label text-primary mb-4 block">Portfolio</span>
            <h2 className="heading-2 text-dark mb-4">
              Featured Work
            </h2>
            <p className="body-large text-gray-600 max-w-xl">
              Explore our latest projects and see how we've helped businesses
              transform their digital presence.
            </p>
          </div>
          <Button variant="secondary" className="mt-6 md:mt-0">
            View All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={`/work/${project.slug}`}
              className="project-card group block relative overflow-hidden rounded-3xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="project-image-wrapper relative aspect-[4/3] overflow-hidden bg-gray-200">
                <div
                  className="project-image w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url(${project.thumbnail})`,
                    backgroundColor: '#e5e7eb'
                  }}
                />
                
                {/* Overlay */}
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm mb-2">{project.category}</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="heading-4 text-dark mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="body text-gray-600 mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  View Case Study
                  <span className="ml-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
