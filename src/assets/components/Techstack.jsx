import React, { useState } from "react";
import { motion } from "motion/react";
import TechTile from "./TechTile";
import useCanHover from "../motion/useCanHover";
import TypeLabel from "../motion/TypeLabel";
import TextReveal from "../motion/TextReveal";
import Reveal from "../motion/Reveal";
import { EASE_OUT, IN_VIEW } from "../motion/presets";

const techStack = [
  // Languages
  { name: "HTML5", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Styling", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "PostgreSQL", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },

  // Frontend
  { name: "React", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", category: "Styling", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

  // Backend
  { name: "Node.js", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  // Animation
  { name: "GSAP", category: "Animation", img: "https://cdn.simpleicons.org/greensock" },

  // Data Science
  { name: "Pandas", category: "Data Science", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", category: "Data Science", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", category: "Data Science", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Seaborn", category: "Data Science", img: "https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg" },

  // AI / ML
  { name: "Gemini API", category: "AI / ML", img: "https://cdn.simpleicons.org/googlegemini" },
  { name: "Streamlit", category: "AI / ML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
  { name: "FastAPI", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Pydantic", category: "Backend", img: "https://cdn.simpleicons.org/pydantic" },
  { name: "Supabase", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Playwright", category: "Testing", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
  { name: "pytest", category: "Testing", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },

  // Tools
  { name: "Git", category: "VCS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", category: "Design", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Postman", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Jupyter Notebook", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Vite", category: "Build Tool", img: "https://vitejs.dev/logo.svg" },

  // // Core Competencies
  // { name: "Data Structures & Algorithms", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/binary.svg" },
  // { name: "REST API Design", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/network.svg" },
  // { name: "Database Architecture", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/database.svg" },
  // { name: "Authentication & Authorization", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/shield-check.svg" },
  // { name: "Full-Stack Development", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/layers.svg" },
];


const GRID = { show: { transition: { staggerChildren: 0.035 } } };
const TILE = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

const TechStack = () => {
  const canHover = useCanHover();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="Techstack" className="min-h-screen bg-white text-gray-950 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between font-TurretRoad font-extrabold tracking-widest text-xs sm:text-sm text-gray-500 border-b border-gray-200 pb-3">
          <TypeLabel text="[04] TECH STACK" className="text-gray-950" />
          <span>{String(techStack.length).padStart(2, "0")} TOOLS</span>
        </div>

        <div className="mt-10 mb-10 sm:mb-16 font-TurretRoad">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-950 leading-[1.05]">
            <TextReveal
              segments={[
                { text: "Built with" },
                { text: "modern", mark: "underline" },
                { text: "technologies" },
              ]}
            />
          </h2>
          <Reveal delay={0.3} as="p" className="mt-5 text-gray-600 max-w-2xl text-base sm:text-lg font-bold">
            The tools I reach for, from pixel-level interfaces to typed backends and AI pipelines.
          </Reveal>
        </div>

        {/* Tech Grid */}
        <motion.ul
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={IN_VIEW}
          variants={GRID}
          onMouseLeave={() => setHovered(null)}
        >
          {techStack.map((tech, i) => (
            <TechTile
              key={tech.name}
              tech={tech}
              variants={TILE}
              canHover={canHover}
              dimmed={hovered !== null && hovered !== i}
              onHover={() => setHovered(i)}
            />
          ))}
        </motion.ul>

        {/* Footer */}
        <div className="mt-14 text-center text-sm text-gray-600 flex justify-center items-center gap-2 font-TurretRoad">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gray-950 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-950" />
          </span>
          <span className="font-semibold">Constantly evolving with new technologies</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
