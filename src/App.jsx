import React from 'react'
import Home from './assets/components/Home'
import "./index.css";
import About from './assets/components/About';
import Techstack from './assets/components/Techstack';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Marquee from './assets/components/Marquee';
import Hero from './assets/components/Hero';
import Anime from './assets/components/Anime';
import Navbar from './assets/components/Navbar';
import Manifesto from './assets/components/Manifesto';
import AgenticAI from './assets/components/AgenticAI';
import SmoothScroll from './assets/motion/SmoothScroll';

const App = () => {
  return (
    
    <div className='overflow-x-hidden'>
      <SmoothScroll/>
      <Navbar/>
      <Anime/>
      <Home/>
       <div className='w-full flex flex-col justify-center items-center bg-white'>
      <div className='mt-1 w-full'><Marquee/></div>
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <Hero/>
     </div>
      <Manifesto/>
      <AgenticAI/>
      <Techstack/>
      <Projects/>
      {/* <About/> */}
      <Contact/>
    </div>
  )
}

export default App;
