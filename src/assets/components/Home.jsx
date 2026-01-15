import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SkillsCarousel from "./SkillsCarousel";


const Home = () => {
  return (
    <div id="Home" className="Home flex-col w-screen h-screen bg-white">
      
      <Navbar />
      <SkillsCarousel/>
    </div>
  );
};

export default Home;
