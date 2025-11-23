export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image - Replace with your photo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          I&apos;m always open to new opportunities and collaborations. Feel free to
          reach out if you&apos;d like to work together!
        </p>

        <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 md:p-12 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <a
              href="mailto:abbydulski@gmail.com"
              className="flex items-center justify-center gap-3 text-gray-700 hover:text-rose-500 transition-colors text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              abbydulski@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/abbydulski"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-100 hover:bg-rose-200 p-4 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abbydulski/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-100 hover:bg-rose-200 p-4 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <p className="text-gray-600">
          © 2025 Abby Dulski. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}

