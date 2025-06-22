import React from "react";

const Contact = () => {
  return (
    <section className="py-18 px-6 mt-2.5 rounded-2xl bg-gray-50 hover:bg-gray-100" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-8">
          I'm currently open to internships, freelance projects, and developer roles. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <a
          href="mailto:argekarnisarga15@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/NisargaArgekar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=twitter"
              alt="Twitter"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
