import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Hey, I'm <span className="text-blue-600">Nisarga Argekar</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6">
        Full-Stack Developer | Passionate about clean UI & code
      </p>
      <p className="max-w-xl text-gray-500 mb-6">
        I build responsive web apps using React, Firebase, and modern frameworks.
        I love crafting intuitive user experiences that are fast and functional.
      </p>

      <div className="flex gap-4 mb-6">
        <a
          href="https://your-resume-link.com"
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          href="mailto:your.email@example.com"
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded-xl hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>

      <div className="flex space-x-4">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-8 h-8" />
        </a>
        {/* Add more icons as needed */}
      </div>
    </section>
  );
};

export default Hero;
