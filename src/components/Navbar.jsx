import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-lg font-bold">MyLogo</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-black-400">
            Home
          </Link>
          <Link to="/projects" className="hover:text-black-400">
            Projects
          </Link>
          <Link to="/services" className="hover:text-black-400">
            Services
          </Link>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-black-400"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-black-400"
          >
            Projects
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-black-400"
          >
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
