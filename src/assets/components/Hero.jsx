import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import MEImage from "../images/MY.jpeg";
import TextReveal from "../motion/TextReveal";
import TypeLabel from "../motion/TypeLabel";
import AnimatedNumber from "../motion/AnimatedNumber";
import Reveal from "../motion/Reveal";
import { projects } from "./ProjectShowcase";

const AI_BUILDS = projects.filter((p) => /AI/.test(p.tag)).length;

const stats = [
  { value: projects.length, label: "Projects shipped", format: (n) => String(n).padStart(2, "0") },
  { value: AI_BUILDS, label: "AI agents & RAG apps", format: (n) => String(n).padStart(2, "0") },
  { value: 2024, label: "Building since", format: (n) => String(n) },
];

const Hero = () => {
  const ref = useRef(null);
  // Portrait drifts slower than the page and the ring turns as you scroll past.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={ref} id="About" className="w-full px-4 py-14 sm:py-20 flex flex-col items-center">
      <div className="w-full max-w-6xl flex items-center justify-between font-TurretRoad font-extrabold tracking-widest text-xs sm:text-sm text-gray-500 border-b border-gray-200 pb-3">
        <TypeLabel text="[01] ABOUT" className="text-gray-950" />
        <span>BHUBANESWAR, IN</span>
      </div>

      <h1 className="mt-10 sm:mt-14 text-gray-950 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold font-TurretRoad text-center leading-[1.05]">
        <TextReveal
          segments={[
            { text: "Hello, I'm" },
            { text: "SHRIYA", mark: "swash" },
          ]}
          stagger={0.09}
        />
      </h1>

      <div className="mt-12 sm:mt-16 flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-10 md:gap-12">
        {/* Left text */}
        <Reveal className="order-2 md:order-1 flex flex-row md:flex-col items-center md:items-start gap-3 font-extrabold text-2xl sm:text-3xl xl:text-4xl text-gray-950 font-TurretRoad md:max-w-xs text-center md:text-left">
          <span>DEVELOPER ESTD.2024</span>
          <a
            href="#Projects"
            aria-label="See projects"
            className="group h-14 w-14 lg:h-20 lg:w-20 shrink-0 border-2 border-gray-600 rounded-full flex items-center justify-center text-2xl lg:text-3xl transition-colors duration-300 hover:bg-gray-950 hover:text-white hover:border-gray-950"
          >
            <span className="transition-transform duration-300 group-hover:rotate-[-45deg]">↘</span>
          </a>
        </Reveal>

        {/* Center image */}
        <div className="order-1 md:order-2 relative flex justify-center items-center shrink-0">
          <motion.svg
            viewBox="0 0 100 100"
            aria-hidden
            style={{ rotate: ringRotate }}
            className="absolute -inset-4 sm:-inset-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] h-[calc(100%+2rem)] sm:h-[calc(100%+3rem)] text-gray-950"
          >
            <defs>
              <path id="hero-ring" d="M50,50 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
            </defs>
            <text className="font-TurretRoad" fontSize="5" fill="currentColor">
              {/* textLength stretches the two loops to exactly one lap (2πr ≈ 289). */}
              <textPath href="#hero-ring" textLength="287" lengthAdjust="spacing">
                FULL-STACK • AI / ML • DESIGN • MOTION • FULL-STACK • AI / ML • DESIGN • MOTION •
              </textPath>
            </text>
          </motion.svg>
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            whileInView={{ clipPath: "circle(50% at 50% 50%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] rounded-full overflow-hidden"
          >
            <motion.img
              src={MEImage}
              alt="Shriya Panda"
              style={{ y: photoY, scale: photoScale }}
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </div>

        {/* Right text */}
        <div className="order-3 font-extrabold text-2xl sm:text-3xl xl:text-4xl text-gray-950 font-TurretRoad max-w-md text-center md:text-right leading-snug">
          <TextReveal
            segments={[
              { text: "Full-stack developer, currently learning" },
              { text: "AI/ML", mark: "underline" },
              { text: "to build even more interactive and creative platforms." },
            ]}
            stagger={0.035}
            delay={0.2}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 sm:mt-24 w-full max-w-5xl grid grid-cols-3 border-y border-gray-950 divide-x divide-gray-200 font-TurretRoad">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="px-3 sm:px-6 py-5 sm:py-8 text-center">
            <AnimatedNumber
              value={s.value}
              format={s.format}
              className="block text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tabular-nums"
            />
            <span className="mt-2 block text-[10px] sm:text-sm font-bold tracking-widest uppercase text-gray-500">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Hero;
