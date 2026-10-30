import React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";

const TILT = 18; // degrees at the tile's edge
const SPRING = { stiffness: 260, damping: 20, mass: 0.5 };

// One tool in the tech grid. With a mouse it lifts, tilts toward the cursor in
// 3D with a soft glare, and the rest of the grid blurs back. On touch it gives
// a springy press instead, since there is no hover to follow.
const TechTile = ({ tech, variants, canHover, dimmed, onHover }) => {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(px, [0, 1], [-TILT, TILT]), SPRING);
  const rotateX = useSpring(useTransform(py, [0, 1], [TILT, -TILT]), SPRING);
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.9), rgba(255,255,255,0) 60%)`;

  const handleMove = (e) => {
    if (!canHover) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.li variants={variants} className="relative hover:z-20">
      {/* Blur lives on this wrapper: a filter on the tilting card itself would flatten its 3D depth. */}
      <motion.div
        className="h-full [perspective:700px]"
        animate={{
          filter: dimmed ? "blur(1.5px)" : "blur(0px)",
          opacity: dimmed ? 0.55 : 1,
          scale: dimmed ? 0.96 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
      <motion.div
        onMouseEnter={canHover ? onHover : undefined}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={canHover ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={canHover ? { scale: 1.12 } : undefined}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative h-full bg-white border border-gray-200 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center cursor-default select-none transition-[border-color,box-shadow] duration-300 hover:border-gray-950 hover:shadow-[0_24px_40px_rgba(3,7,18,0.18),0_8px_16px_rgba(3,7,18,0.10)] active:border-gray-950"
      >
        {/* Glare that follows the cursor */}
        {canHover && (
          <motion.span
            aria-hidden
            style={{ backgroundImage: glare }}
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
          />
        )}

        {/* Icon floats above the card surface for depth */}
        <div
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16"
          style={canHover ? { transform: "translateZ(36px)" } : undefined}
        >
          <img
            src={tech.img}
            alt=""
            loading="lazy"
            draggable="false"
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_6px_8px_rgba(3,7,18,0.12)]"
          />
        </div>

        <div className="mt-2 min-w-0 w-full" style={canHover ? { transform: "translateZ(20px)" } : undefined}>
          <h3 className="font-bold text-sm sm:text-base text-gray-950 font-TurretRoad break-words">{tech.name}</h3>
          <p className="text-xs text-gray-400 mt-1 font-normal">{tech.category}</p>
        </div>
      </motion.div>
      </motion.div>
    </motion.li>
  );
};

export default TechTile;
