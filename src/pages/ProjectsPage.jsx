import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and skills.",
    techStack: "React, Tailwind CSS, Framer Motion",
    link: "/home",
  },
  {
    title: "Expense Manager",
    description:
      "A responsive expense manager with a colourful graph to help in budgeting ",
    techStack: "HTML, CSS, Javascript",
    link: "https://expense-manager-io.vercel.app/",
  },
  {
    title: "React Jobs Site",
    description:
      "A responsive react jobs platform that allows users to post jobs.",
    techStack: "React",
    link: "https://react-jobs-site.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A selection of my work as a frontend developer.
        </motion.p>
      </header>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-sm text-indigo-600 mt-2">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
