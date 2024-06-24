import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-serif">
          <Link to="/" className="hover:text-secondary transition duration-300">
            Hailey Cisneros
          </Link>
        </h1>
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="hover:text-secondary transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-secondary transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-secondary transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-secondary transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary py-4">
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <Link
                to="/"
                className="hover:text-secondary transition duration-300 text-2xl"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-secondary transition duration-300 text-2xl"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-secondary transition duration-300 text-2xl"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-secondary transition duration-300 text-2xl"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
