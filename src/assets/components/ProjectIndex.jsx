import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';

// Numbered list of every project. On hover-capable screens a preview of the
// project follows the cursor; each row jumps to that project's card below.
const ProjectIndex = ({ projects }) => {
  const listRef = useRef(null);
  const [active, setActive] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  const handleMove = (e) => {
    const rect = listRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const activeProject = active === null ? null : projects[active];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-end justify-between gap-4 pb-4 border-b-2 border-gray-950 font-TurretRoad">
        <span className="text-sm sm:text-base font-extrabold tracking-widest">[INDEX]</span>
        <span className="text-sm sm:text-base font-extrabold tracking-widest text-gray-500">
          {String(projects.length).padStart(2, '0')} PROJECTS
        </span>
      </div>

      <ul
        ref={listRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setActive(null)}
        className="relative"
      >
        {projects.map((project, idx) => {
          const dimmed = active !== null && active !== idx;
          return (
            <li key={project.slug} className="border-b border-gray-200">
              <a
                href={`#${project.slug}`}
                onMouseEnter={() => setActive(idx)}
                className={`group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[4rem_1fr_auto] items-center gap-3 sm:gap-6 py-4 sm:py-6 font-TurretRoad transition-opacity duration-300 ${dimmed ? 'md:opacity-30' : 'opacity-100'}`}
              >
                <span className="text-sm sm:text-lg font-bold text-gray-400">{project.number}</span>
                <span className="min-w-0">
                  <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 truncate transition-transform duration-300 md:group-hover:translate-x-3">
                    {project.name}
                  </span>
                  {project.subtitle && (
                    <span className="block mt-1 text-xs sm:text-sm font-semibold text-gray-500 truncate md:group-hover:translate-x-3 transition-transform duration-300">
                      {project.subtitle}
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-3">
                  {project.privateBuild && (
                    <span className="hidden md:inline-block px-3 py-1 rounded-full border border-dashed border-gray-400 text-xs font-bold tracking-wide text-gray-500 whitespace-nowrap">
                      Private Build
                    </span>
                  )}
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full border border-gray-300 text-xs font-bold tracking-wide text-gray-700 whitespace-nowrap group-hover:bg-gray-950 group-hover:text-white group-hover:border-gray-950 transition-colors duration-300">
                    {project.tag}
                  </span>
                  <span aria-hidden="true" className="text-xl sm:text-2xl text-gray-950 transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          );
        })}

        {/* Cursor-following preview, only where a mouse can hover. */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              key="preview"
              className="pointer-events-none absolute top-0 left-0 z-20 hidden md:block w-80 lg:w-96 aspect-[16/10] rounded-xl overflow-hidden border-4 border-gray-950 bg-gray-950 shadow-2xl"
              style={{ x: springX, y: springY, translateX: '-50%', translateY: '-110%' }}
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              {projects.map((project, idx) => (
                <img
                  key={project.slug}
                  src={project.image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${idx === active ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-gray-950 text-white text-xs font-bold font-TurretRoad tracking-wide">
                {activeProject.tag}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ProjectIndex;
