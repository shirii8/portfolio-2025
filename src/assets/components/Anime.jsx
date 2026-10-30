import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import { scrollToTarget } from '../motion/SmoothScroll';

// Reading-progress ring that doubles as a back-to-top button. Appears once
// the visitor has scrolled past the first screen.
const Anime = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  // The number updates straight from the motion value, so scrolling never
  // re-renders React; state only flips when the badge shows or hides.
  const percentText = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (v) => setVisible(v > 0.04));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => scrollToTarget(0)}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-gray-200 shadow-[0_10px_30px_rgba(3,7,18,0.12)] flex items-center justify-center"
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="24" cy="24" r="20" stroke="#e5e7eb" strokeWidth="2.5" fill="transparent" />
            <motion.circle
              cx="24" cy="24" r="20"
              stroke="#030712" strokeWidth="2.5" fill="transparent"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <motion.span className="relative font-TurretRoad text-[11px] sm:text-xs font-extrabold text-gray-950 tabular-nums transition-opacity duration-200 group-hover:opacity-0">
            {percentText}
          </motion.span>
          <span aria-hidden className="absolute font-TurretRoad text-lg font-extrabold text-gray-950 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Anime;
