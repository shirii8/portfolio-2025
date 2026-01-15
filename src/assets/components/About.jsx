import React from 'react';
import aboutImage from '../images/about.png';
import arrowImage from '../images/arrow.png';
import SkillsCarousel from './SkillsCarousel';

const skillsList = [
  { id: 1, label: "Frontend" },
  { id: 2, label: "Backend" },
  { id: 3, label: "UI/UX" },
  { id: 4, label: "Product Management" }
];

// Dummy Recent Works
const recentWorkList = [
  { title: "Portfolio Website", desc: "React + Tailwind CSS, interactive UI." },
  { title: "Fluid Mechanics Visualizer", desc: "C++ tool for velocity field analysis." },
  { title: "GSAP Animated Loader", desc: "Modern animated component for hackathons." }
];

const About = () => {
  return (
    <div id='About' className="About min-h-screen w-full bg-white flex justify-between items-center px-20">
      <div className="grid grid-cols-3 gap-12 w-50 max-w-3xl boborder-gray-200 rounded-3xl shadow-xl bg-white p-12">
        {/* About Section */}
        <div  id='AboutSection' className="flex flex-col items-start gap-6 border-r border-gray-200 pr-10">
          <div className="text-7xl font-TurretRoad font-bold bg-gradient-to-r from-black via-gray-500 to-black text-transparent bg-clip-text mb-2 flex">
            About
             <img src={aboutImage} alt="" className='h-5 w-5'/>
          </div>
          <div className="max-w-xs text-2xl text-gray-950 font-bold font-TurretRoad">
            I’m a sophomore at IIT Bhubaneswar, passionate about blending design and logic to craft animated, interactive websites. What started as a love for visuals grew into a drive to build seamless digital experiences. Current learning: Backend.
          </div>
        </div>

        
      </div>
      {/* Recent Work Section */}
        <div className="flex flex-col items-start gap-6 pl-10 w-50">
          <div className="text-7xl font-TurretRoad font-extrabold bg-gradient-to-r from-gray-950 via-gray-400 to-gray-950 text-transparent bg-clip-text mb-2 flex">
            Recent
            <img src={arrowImage} alt="" className='h-5 w-5'/>
          </div>
          <div className="flex flex-col gap-5 w-full max-w-xs">
            {recentWorkList.map((work, idx) => (
              <div key={idx} className="px-6 py-4 rounded-xl border border-gray-400 transition hover:border-gray-950 hover:bg-gray-100 shadow">
                <div className="font-semibold text-xl text-gray-700">{work.title}</div>
                <div className="text-gray-500 text-base">{work.desc}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default About;



