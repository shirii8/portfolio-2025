import React from "react";
import MEImage from "../images/MY.jpeg";

import SplitText from '../ui/SplitText'

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div id="About" className="Home p-4 flex flex-col items-center justify-center">
      <div className="header">
        <SplitText
          text="Hello, Im SHRIYA"
          className="hero-header text-gray-950 text-9xl font-bold font-TurretRoad  mb-8"
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
      <div className="flex justify-between items-center w-full max-w-5xl px-4 gap-12">
        {/* Left text */}
        <div className="font-extrabold text-4xl text-gray-950 font-TurretRoad max-w-xs text-left">
          DEVELOPER ESTD.2024
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdmUtZG93bi1yaWdodC1pY29uIGx1Y2lkZS1tb3ZlLWRvd24tcmlnaHQiPjxwYXRoIGQ9Ik0xOSAxM1YxOUgxMyIvPjxwYXRoIGQ9Ik01IDVMMTkgMTkiLz48L3N2Zz4="
            className=" h-20 w-auto border-2 border-gray-600 rounded-full flex items-center justify-center m-2 p-4"
            alt=""
          />
        </div>
        {/* Center image */}
        <div className="flex justify-center items-center">
          <img src={MEImage} alt="ME" className="h-120 w-120 rounded-full" />
        </div>
        {/* Right text */}
        <div className="font-extrabold text-4xl text-gray-950 font-TurretRoad max-w-md text-right">
          Passionate web developer creating websites that stand out with smooth,
          engaging animations. Currently exploring backend development to grow
          into a full-stack creator.
        </div>
      </div>
    </div>
  );
};

export default Hero;


// bg-gradient-to-r from-black via-gray-500 to-black text-transparent bg-clip-text