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
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center">
          About Me
        </h2>
        <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 md:p-12 shadow-xl">
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            I&apos;m a ....
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            When I&apos;m ...
          </p>
        </div>
      </div>
    </section>
  );
}

