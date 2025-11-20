export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image - Replace with your photo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
          About Me
        </h2>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 md:p-12">
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
            I'm a passionate software developer with a love for creating
            innovative solutions to complex problems. With experience in
            full-stack development, I enjoy bringing ideas to life through
            clean, efficient code.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying the beautiful
            views of the Charles River and Golden Gate Bridge.
          </p>
        </div>
      </div>
    </section>
  );
}

