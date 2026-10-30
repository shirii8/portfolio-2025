import { motion } from "motion/react";
import { EASE_OUT, IN_VIEW, INK } from "./presets";

// A hand-drawn mark that draws itself around or under a word.
const SHAPES = {
  // A long ink stroke under a headline word.
  swash: {
    d: "M2 14c60-10 120 6 190 0s140-10 206 4",
    viewBox: "0 0 400 24",
    className: "-bottom-[0.06em] left-0 h-[0.13em] w-full",
  },
  underline: {
    d: "M3 9C40 3 82 13 122 8S186 5 197 10",
    viewBox: "0 0 200 16",
    className: "-bottom-[0.1em] left-0 h-[0.16em] w-full",
  },
  circle: {
    d: "M108 6C160 3 197 16 196 32 195 51 140 59 92 58 38 57 3 47 4 30 5 13 52 4 120 9",
    viewBox: "0 0 200 62",
    className: "-left-[0.28em] -right-[0.28em] -top-[0.06em] -bottom-[0.36em]",
  },
};

export default function Scribble({ kind, delay = 0, color = INK, trigger = "view", strokeWidth = 3 }) {
  const shape = SHAPES[kind];
  const target = { pathLength: 1, opacity: 1 };
  return (
    <svg
      viewBox={shape.viewBox}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute overflow-visible ${shape.className}`}
      aria-hidden
    >
      <motion.path
        d={shape.d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        {...(trigger === "view" ? { whileInView: target, viewport: IN_VIEW } : { animate: target })}
        transition={{ duration: 0.9, delay, ease: EASE_OUT }}
      />
    </svg>
  );
}
