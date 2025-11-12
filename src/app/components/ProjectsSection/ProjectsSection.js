import Image from "next/image";
import { projectsData } from "./projectsData";

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 w-full" id="projects" aria-labelledby="projects-heading">
      <div className="container mx-auto max-w-6xl">
        <h2
          id="projects-heading"
          className="text-4xl font-bold text-center mb-4 text-seasalt"
        >
          Latest Projects
        </h2>
        <p className="text-center text-seasalt text-lg mb-12 max-w-3xl mx-auto">
          A selection of recent work showcasing my expertise in building accessible,
          user-focused web applications with modern technologies.
        </p>
        {projectsData.map((project, index) => (
          <article
            key={project.title}
            className="overflow-hidden mb-10 bg-seasalt text-raisin-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row items-stretch">
              <div className="sm:w-1/3 md:w-1/4 relative">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt || `Screenshot of ${project.title}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={85}
                />
              </div>
              <div className="sm:w-2/3 md:w-3/4 p-6">
                <h3 className="font-semibold text-2xl mb-2 text-raisin-black">
                  {project.title}
                </h3>
                <p className="text-lg mb-4 text-raisin-black leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-raisin-black bg-carrot-orange px-4 py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:ring-offset-2 transition-all duration-200"
                  aria-label={`Visit ${project.title} project (opens in new tab)`}
                >
                  Visit {project.title}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
