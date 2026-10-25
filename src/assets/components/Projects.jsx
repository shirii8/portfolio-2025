import React from 'react';
import ProjectsShowcase, { projects } from './ProjectShowcase';
import ProjectIndex from './ProjectIndex';

const Projects = () => {
  return (
    <div
      id='Projects'
      className="min-h-screen bg-white text-gray-950 px-4 sm:px-6 py-16 flex flex-col">
      <div className="w-full flex flex-col items-center mb-10 sm:mb-16">
        {/* Project Section Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold font-TurretRoad bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-transparent bg-clip-text text-center">
          Projects
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl font-semibold font-TurretRoad text-center mt-4">
          Crafting Real-World Solutions with Code
        </p>
      </div>

      <ProjectIndex projects={projects} />

      <div className="w-full mt-8 sm:mt-12">
        <ProjectsShowcase/>
      </div>
    </div>
  );
};

export default Projects;
