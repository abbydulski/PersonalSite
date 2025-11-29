export default function Projects() {
  const projects = [
    {
      title: "Wavelength",
      description: "A friends-first social feed with no short-form content or endless scroll. Share real experiences with photos and ratings, and quickly see what your circle is up to. Features a discover map to find useful, recent posts within 100 miles.",
      tech: ["JavaScript", "React", "Web Development"],
      github: "https://github.com/abbydulski/Wavelength-Web",
      demo: "https://wavelength-web.vercel.app",
      image: "/images/wavelength-preview.jpg",
    },
    {
      title: "Sleep Stage Classification",
      description: "An open-source sleep staging model that processes data from everyday wearables (Apple Watch, Samsung Watch, etc.) and stages your sleep using heart rate and accelerometer metrics.",
      tech: ["Python", "Machine Learning", "Data Science"],
      github: "https://github.com/abbydulski/Sleep-Stage-Classification",
      demo: "https://abbydulski.github.io/Sleep-Stage-Classification/",
      image: "/images/sleep-preview.jpg",
    },
    {
      title: "Card Generator",
      description: "Generate personalized cards for anyone in your life using Reve.com! A creative tool to design and customize greeting cards.",
      tech: ["TypeScript", "Next.js", "Web Development"],
      github: "https://github.com/abbydulski/CardGenerator",
      demo: "https://card-generator-puce-nu.vercel.app",
      image: "/images/cardgenerator-preview.jpg",
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
              className="bg-white/80 backdrop-blur-md rounded-lg overflow-hidden hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

