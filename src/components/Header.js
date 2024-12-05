import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { WavyBackground } from "./WavyBackground"; // Adjust the import path as needed

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute w-full top-0 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-6">
        <h1 className="text-3xl font-serif">
          <Link to="/" className="hover:text-secondary transition duration-300">
            Hailey Cisneros
          </Link>
        </h1>
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8 font-medium text-gray-700">
            <li>
              <Link
                to="/"
                className="hover:text-rose-400 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-rose-400 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-rose-400 transition duration-300 ease-in-out"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-rose-400 transition duration-300 ease-in-out"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-rose-400 transition duration-300 ease-in-out .hover-underline-animation::after"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-rose-400 transition duration-300 ease-in-out"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-opacity-90 backdrop-blur-md overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <WavyBackground
              colors={["#4DD0E1", "#FFA600"]}
              waveWidth={30}
              blur={15}
            >
              <ul className="flex flex-col items-center space-y-6 py-4">
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
                    to="/gallery"
                    className="hover:text-secondary transition duration-300 text-2xl"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="hover:text-secondary transition duration-300 text-2xl"
                    onClick={toggleMenu}
                  >
                    Shop
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
            </WavyBackground>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
