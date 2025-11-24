export default function Projects() {
  const projects = [
    {
      title: "",
      description: "A full-stack web application built with Next.js and PostgreSQL. Features include user authentication, real-time updates, and responsive design.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      demo: "https://project-one-demo.vercel.app",
    },
    {
      title: "",
      description: "An innovative mobile-first application that solves real-world problems with elegant UI/UX and robust backend architecture.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project-two",
      demo: "https://project-two-demo.vercel.app",
    },
    {
      title: "",
      description: "Open-source tool that helps developers streamline their workflow. Built with performance and developer experience in mind.",
      tech: ["Python", "FastAPI", "Docker", "AWS"],
      github: "https://github.com/yourusername/project-three",
      demo: "https://project-three-demo.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image - Replace with your photo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/projects-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/80 backdrop-blur-md rounded-lg p-6 hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 hover:text-rose-600 font-semibold"
                >
                  GitHub →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 hover:text-rose-600 font-semibold"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

