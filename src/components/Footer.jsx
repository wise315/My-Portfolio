import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">MyPortfolio</h2>
            <p className="text-sm text-gray-400">
              Creating innovative web solutions that deliver exceptional user
              experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.73a4.74 4.74 0 0 0 2.084-2.61 9.84 9.84 0 0 1-3.126 1.2 4.905 4.905 0 0 0-8.414 3.17 5.34 5.34 0 0 0 .116 1.118C7.691 7.94 4.066 5.887 1.64 2.88a4.891 4.891 0 0 0-.661 2.452c0 1.69.825 3.18 2.083 4.05a4.9 4.9 0 0 1-2.225-.63v.064a4.905 4.905 0 0 0 3.942 4.806 5.095 5.095 0 0 1-2.212.086 4.91 4.91 0 0 0 4.571 3.41A9.875 9.875 0 0 1 .98 19.196a14.054 14.054 0 0 0 7.548 2.192c9.052 0 14.01-7.497 14.01-14.006 0-.214-.005-.428-.016-.64a9.935 9.935 0 0 0 2.442-2.563" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.2c-1 0-1.7-.8-1.7-1.8s.8-1.8 1.8-1.8c1 0 1.7.8 1.7 1.8s-.8 1.8-1.8 1.8zm12.5 10.2h-3v-4.8c0-1.2-.4-2-1.4-2-.8 0-1.3.6-1.5 1.2-.1.3-.1.6-.1.9v4.7h-3v-9h3v1.2c.4-.7 1.2-1.6 2.7-1.6 1.9 0 3.3 1.3 3.3 4v5.4z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.3 1.1 2.8.9.1-.6.3-1.1.5-1.3-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.3a11.3 11.3 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.2 2.8.1 3.1.8.9 1.3 2 1.3 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.6 1 .6 2v3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
