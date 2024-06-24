import React from "react";

function Projects() {
  return (
    <div className="py-20 bg-background">
      <h2 className="text-4xl font-bold mb-6 text-primary">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded">
          <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
          <p className="text-text">Description of project 1</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
          <p className="text-text">Description of project 2</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Projects;
