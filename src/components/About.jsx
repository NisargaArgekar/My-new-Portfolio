import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-gray-600 mb-6">
          I'm a passionate and detail-oriented software developer with a strong foundation in 
          front-end and full-stack web development. I love creating clean, user-friendly 
          interfaces and scalable applications.
        </p>
        <p className="text-gray-600 mb-6">
          I’ve worked on various real-world projects using React, Firebase, Tailwind CSS, and 
          REST APIs. Whether I’m building personal projects or collaborating with a team, 
          I aim for performance, responsiveness, and great user experience.
        </p>
        <p className="text-gray-600">
          Currently looking for opportunities where I can contribute and grow as a developer. 
          Open to internships, freelance, and full-time roles.
        </p>
      </div>
    </section>
  );
};

export default About;
