import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Link } from "react-router-dom";
import ThreeScene from "./ThreeScene"; // Adjust the import path as needed
import Header from "./Header";
import { WavyBackground } from "./WavyBackground"; // Adjust the import path as needed

const Home = () => {
  return (
    <div className="relative h-screen">
      <WavyBackground containerClassName="absolute inset-0 z-0" />
      <Header />
      <ThreeScene />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Check out my <br /> work.
        </h1>
        <Link to="/projects">
          <button className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition duration-300 glow-on-click">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
