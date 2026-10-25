import React from "react";
import SkillsCarousel from "./SkillsCarousel";


const Home = () => {
  return (
    <div id="Home" className="Home flex flex-col w-full min-h-screen bg-white">
      
      {/* Spacer for the fixed navbar rendered in App */}
      <div className="h-[72px] shrink-0" />
      <SkillsCarousel/>
    </div>
  );
};

export default Home;
