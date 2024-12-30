import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Responsive Design",
    description:
      "I create pixel-perfect, responsive designs that work seamlessly across all devices.",
    icon: "📱",
  },
  {
    title: "React Development",
    description:
      "Building high-performance, modern web apps using React and the latest frameworks.",
    icon: "⚛️",
  },
  {
    title: "UI/UX Prototyping",
    description:
      "Transforming ideas into interactive prototypes with a focus on user experience.",
    icon: "🎨",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving site speed and performance for smooth and efficient user experiences.",
    icon: "🚀",
  },
  {
    title: "Tailwind CSS Styling",
    description:
      "Creating stunning designs using the utility-first CSS framework, Tailwind CSS.",
    icon: "💎",
  },
];

const ServicesPage = () => {
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
          My Services
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are the services I offer as a frontend developer.
        </motion.p>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="text-4xl mb-4 text-indigo-600">{service.icon}</div>
            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
