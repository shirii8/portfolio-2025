import React from "react";
import MEImage from "../images/MY.jpeg";

import SplitText from '../ui/SplitText'

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div id="About" className="Home w-full px-4 py-12 sm:py-16 flex flex-col items-center justify-center">
      <div className="header">
        <SplitText
          text="Hello, Im SHRIYA"
          className="hero-header text-gray-950 text-5xl sm:text-7xl lg:text-9xl font-bold font-TurretRoad mb-8 sm:mb-12"
          delay={100}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-8 md:gap-12">
        {/* Left text */}
        <div className="order-2 md:order-1 flex flex-row md:flex-col items-center md:items-start gap-2 font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-950 font-TurretRoad md:max-w-xs text-center md:text-left">
          DEVELOPER ESTD.2024
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdmUtZG93bi1yaWdodC1pY29uIGx1Y2lkZS1tb3ZlLWRvd24tcmlnaHQiPjxwYXRoIGQ9Ik0xOSAxM1YxOUgxMyIvPjxwYXRoIGQ9Ik01IDVMMTkgMTkiLz48L3N2Zz4="
            className="h-14 lg:h-20 w-auto border-2 border-gray-600 rounded-full p-3 lg:p-4 md:m-2"
            alt=""
          />
        </div>
        {/* Center image */}
        <div className="order-1 md:order-2 flex justify-center items-center shrink-0">
          <img src={MEImage} alt="ME" className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[26rem] lg:h-[26rem] rounded-full object-cover" />
        </div>
        {/* Right text */}
        <div className="order-3 font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-950 font-TurretRoad max-w-md text-center md:text-right">
          Full-stack developer, currently learning AI/ML to build even more
          interactive and creative platforms.
        </div>
      </div>
    </div>
  );
};

export default Hero;


// bg-gradient-to-r from-black via-gray-500 to-black text-transparent bg-clip-text