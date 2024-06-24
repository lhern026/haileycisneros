import React from "react";

function Projects() {
  return (
    <div className="py-20 bg-background">
      <h2 className="text-5xl font-bold mb-12 text-center text-primary">
        My Projects
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
            <div
              className="bg-cover bg-center h-48"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/800x600?project")',
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Project 1
              </h3>
              <p className="text-gray-700 mb-4">
                Description of project 1. This is where you can add a brief
                overview of what the project is about, the technologies used,
                and any other relevant details.
              </p>
              <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-primary transition duration-300">
                View More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
            <div
              className="bg-cover bg-center h-48"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/800x600?design")',
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Project 2
              </h3>
              <p className="text-gray-700 mb-4">
                Description of project 2. This is where you can add a brief
                overview of what the project is about, the technologies used,
                and any other relevant details.
              </p>
              <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-primary transition duration-300">
                View More
              </button>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
