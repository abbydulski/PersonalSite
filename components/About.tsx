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
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
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
            I&apos;m currently working in venture capital in Silicon Valley. I graduated with a BS and MEng in Computer Science and Cognition from MIT in 2025. I hope to one day work on products tailored to support people with neurodevelopmental disorders and improve cognition.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            I love all things outdoors - I competed for MIT&apos;s Varsity Rowing team for 4 years and have since taken up distance running, biking, and climbing. I&apos;m hoping to learn how to surf and get back into swimming this year. Always looking for new ways to explore the outdoors with friends!
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I like to make with different materials as well. I have created lamps, jewelery, and other items with basic machines - laser cutter, drill press, waterjet, 3D printer, CNC machine, etc. I would like to find a space to continue these projects in the Bay Area.
          </p>
        </div>
      </div>
    </section>
  );
}

