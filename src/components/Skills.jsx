import React from "react";

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-white" id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Skills & Tools
        </h2>

        <p className="text-gray-600 mb-6">
          Here are some technologies I work with regularly.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react" alt="Frontend" />
          <img src="https://skillicons.dev/icons?i=java,python,mysql,firebase" alt="Backend" />
          <img src="https://skillicons.dev/icons?i=git,github,vercel,netlify" alt="Tools" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
