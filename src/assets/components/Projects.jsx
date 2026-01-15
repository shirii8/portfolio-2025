import { ProjectorIcon } from 'lucide-react';
import React from 'react';
import ProjectsShowcase from './ProjectShowcase';
import FlowingMenu from '../ui/FlowingMenu'
import CircularGallery from '../ui/CircularGallery'



const demoItems = [
  { link: '#', text: 'Frontend', image: '/images/BerkshireHathaway.png' },
  { link: '#', text: 'Backend', image: '/images/airbnb.png' },
  { link: '#', text: 'UI/UX', image: '/images/DesignBattle.png' },
  { link: '#', text: 'Redesign', image: '/images/grocery.png' },
   { link: '#', text: 'Redesign', image: '/images/notes.png' },
   { link: '#', text: 'Redesign', image: '/images/LiquidGlassExperience.jpg' },
   { link: '#', text: 'Redesign', image: '/images/TeslaCarBuildAssistant.jpg' },
];



const Projects = () => {
  return (
    <div
      id='Projects'
      className="min-h-screen bg-white text-gray-950 px-6 py-16 flex flex-col">
        {/* <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
        </div> */}

        <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>

      <div className="w-full flex flex-col items-center">
        {/* Project Section Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold font-TurretRoad bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-transparent bg-clip-text text-center">
          Projects
        </h1>
        <p className="text-gray-600 text-xl font-semibold font-TurretRoad text-center mt-4">
          Crafting Real-World Solutions with Code
        </p>
      </div>
      <div className="w-full mt-12">
        <ProjectsShowcase/>
      </div>
    </div>
  );
};

export default Projects;
