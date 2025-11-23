export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image - Replace with your photo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/skills-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white/80 backdrop-blur-md rounded-lg p-8 hover:bg-white/90 transition-colors shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-rose-500">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-700 text-lg flex items-center">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

