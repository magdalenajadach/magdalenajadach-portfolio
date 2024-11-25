import Image from "next/image";

const projects = [
  {
    title: "Code Editor",
    description: "The Raspberry Pi Code Editor is a browser-based platform designed to help young learners explore coding in an intuitive and interactive environment. Built with React for a responsive user interface and CodeMirror for powerful code editing functionality, it supports HTML and Python projects.",
    url: "https://editor.raspberrypi.org/en",
    imageUrl: "/projects/editor2.png",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasts using React and OpenWeatherMap API. Provides current conditions, hourly and 5-day forecasts, with an intuitive and responsive design.",
    url: "https://www.weather.jadach.dev",
    imageUrl: "/projects/weather.png",
  },
  {
    title: "Projects site",
    description: "The Raspberry Pi Foundation's Projects site offers a wide range of free, accessible resources to help people learn coding, electronics, and digital making. As part of the team, I focused on enhancing accessibility for translations and ensuring seamless support for right-to-left languages, enabling a more inclusive experience for global users.",
    url: "https://projects.raspberrypi.org/en",
    imageUrl: "/projects/projects.png",
  },
];

export default function ProjectSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-zomp">My recent projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden mb-10 bg-seasalt text-raisin-black rounded-lg shadow-md"
          >
            <div className="flex flex-col sm:flex-row items-stretch">
              <div className="sm:w-1/3 md:w-1/4">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                />
              </div>
              <div className="sm:w-2/3 md:w-3/4 p-6">
                <h3 className="font-semibold text-2xl mb-2">{project.title}</h3>
                <p className="text-xl mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-carrot-orange hover:underline text-xl font-medium"
                >
                  Visit {project.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
