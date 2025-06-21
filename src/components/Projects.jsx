import React from "react";

const projects = [
  {
    title: "HireVista",
    description:
      "A job portal connecting job seekers with recruiters. Includes authentication, resume upload, and search filters.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/your-username/hirevista",
    live: "https://hirevista.vercel.app",
  },
  {
    title: "BiteMeal",
    description:
      "A smart food-ordering web app with real-time menu and cart. Fully responsive and built with modern stack.",
    tech: ["React", "CSS", "LocalStorage"],
    github: "https://github.com/your-username/bitemeal",
    live: "https://bitemeal.vercel.app",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
