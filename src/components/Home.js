import React from "react";
import ThreeScene from "./ThreeScene"; // Adjust the import path as needed
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ThreeScene />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white  bg-opacity-50 p-4">
        <h2 className="text-6xl font-bold mb-6 text-primary">
          Welcome to My Art Portfolio
        </h2>
        <p className="text-xl text-accent mb-8">
          Discover my latest artworks and projects.
        </p>
        <Link to="/projects">
          <button className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition duration-300">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
