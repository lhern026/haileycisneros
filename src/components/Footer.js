import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" text-white py-8 shadow-lg w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-serif">
            <Link
              to="/"
              className="hover:text-secondary transition duration-300"
            >
              Hailey Cisneros
            </Link>
          </h1>
          <p className="mt-2 text-sm hidden md:block">
            © 2024 Hailey Cisneros. All rights reserved.
          </p>
        </div>
        <nav className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <Link
            to="/about"
            className="hover:text-secondary transition duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-secondary transition duration-300"
          >
            Projects
          </Link>
        </nav>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition duration-300"
          >
            <i className="fab fa-tiktok text-2xl"></i>
          </a>
        </div>
      </div>
      <div className="text-center md:hidden mt-4">
        <p className="text-sm">© 2024 Hailey Cisneros.</p>
      </div>
    </footer>
  );
}

export default Footer;
