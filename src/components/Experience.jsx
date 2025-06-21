import React from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Techsaksham",
    duration: "Jan 2024 – Mar 2024",
    points: [
      "Built responsive UI components using React and Tailwind CSS.",
      "Integrated Firebase for authentication and data storage.",
      "Collaborated on GitHub using proper PR workflow.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "AiRobosoft",
    duration: "May 2023 – Jul 2023",
    points: [
      "Developed dynamic web pages using HTML, CSS, and JavaScript.",
      "Worked on client-side validation and API integration.",
      "Improved page load performance by optimizing assets.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
