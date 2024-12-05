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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center z-10 space-y-6">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-rose-100 to-amber-200 tracking-tight">
          Check out my <br /> work.
        </h1>
        <Link to="/projects">
          <button className="bg-rose-400 text-white py-3 px-8 rounded-lg border border-rose-300 shadow-md hover:bg-amber-300 hover:border-amber-200 transition duration-300 ease-in-out glow-on-click">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
