import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative text-center py-20 bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold mb-6 text-white">
          Welcome to My Art Portfolio
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Discover my latest artworks and projects.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-full shadow-lg hover:bg-secondary transition duration-300">
          <Link to={"/projects"}> View Gallery</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
