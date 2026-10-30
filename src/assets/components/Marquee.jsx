// Marquee.jsx
import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

const Skills = [
  ".AI / ML",
  ".FRONTEND",
  ".BACKEND",
  ".ANIMATION",
  ".DESIGN",
  ".PRODUCT MANAGEMENT",
  ".DATABASE MANAGEMENT",
];

// Keeps a value inside [min, max) so the strip loops seamlessly.
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Drifts on its own, speeds up with scroll velocity and flips direction when
// the visitor scrolls back up.
const Marquee = () => {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skew = useTransform(smoothVelocity, [-2000, 0, 2000], [8, 0, -8]);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * -2 * (delta / 1000);
    const f = velocityFactor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    move += direction.current * -2 * Math.abs(f) * (delta / 1000);
    baseX.set(baseX.get() + move);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div className="w-full py-4 rounded-lg bg-[#151918] overflow-hidden">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full border-t-2 border-zinc-300" />
        <div className="absolute bottom-0 left-0 w-full border-b-2 border-zinc-300" />

        <motion.div
          className="flex w-max gap-10 text-white whitespace-nowrap pt-6 pb-6 pr-10"
          style={{ x, skewX: skew, willChange: "transform" }}
        >
          {/* Duplicated skills to make seamless loop */}
          {[...Skills, ...Skills].map((skill, index) => (
            <h2
              key={index}
              aria-hidden={index >= Skills.length}
              className="text-[max(1.75rem,4vw)] leading-none font-TurretRoad font-bold uppercase"
            >
              {skill}
            </h2>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
