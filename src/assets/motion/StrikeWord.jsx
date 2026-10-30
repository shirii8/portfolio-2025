import { motion } from "motion/react";
import { EASE_OUT, IN_VIEW } from "./presets";

// A phrase that gets crossed out once it scrolls into view: the page's way of
// saying "not this, that". Ink stays black; the struck words fade to grey.
export default function StrikeWord({ text, delay = 0 }) {
  return (
    <motion.span className="relative inline-block" initial="kept" whileInView="struck" viewport={IN_VIEW}>
      <motion.span
        variants={{ kept: { opacity: 1 }, struck: { opacity: 0.35, transition: { delay, duration: 0.4 } } }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden
        variants={{
          kept: { scaleX: 0 },
          struck: { scaleX: 1, transition: { delay, duration: 0.5, ease: EASE_OUT } },
        }}
        className="absolute left-[-4px] right-[-4px] top-[52%] h-[0.08em] min-h-[2px] origin-left rounded-full bg-gray-950"
      />
    </motion.span>
  );
}
