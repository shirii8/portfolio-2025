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

const App = () => {
  return (
    
    <div className='overflow-x-hidden'>
      <div className='fixed top-0 z-30 w-full'>
      <Navbar/>
      </div>
      <div className="fixed bottom-2 right-1/2 -translate-x-3/2 z-50 w-full max-w-md p-4">
         <Anime/>
      </div>
      <Home/>
       <div className='w-screen flex flex-col justify-center items-center min-w-screen bg-white'>
      <div className='mt-1'><Marquee/></div>
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <Hero/>
     </div>
      <Techstack/>
      <Projects/>
      {/* <About/> */}
      <Contact/>
    </div>
  )
}

export default App;
