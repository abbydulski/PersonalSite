export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image - Replace with your photo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Hi, I&apos;m <span className="text-rose-500">Abby</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-800">
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="animate-bounce block">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

