import React from "react";

function About() {
  return (
    <div
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/random/1600x900/?artwork")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white mb-6 shadow-lg"
          />
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl">
            I am an artist based in [Your City], specializing in [Your Art
            Style]. My work explores [Your Themes].
          </p>
          <p className="text-lg text-gray-300 max-w-2xl">
            Art has always been my passion, and through my work, I aim to evoke
            emotions and provoke thoughts. Each piece is a journey into the
            depths of creativity, blending technique with raw inspiration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
