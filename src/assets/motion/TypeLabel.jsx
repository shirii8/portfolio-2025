import { motion } from "motion/react";
import { IN_VIEW } from "./presets";

// Section labels type themselves out with a caret, like a transcript coming in.
// Characters only change opacity, so the label's width never shifts.

const CHAR = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};

const CARET = {
  hidden: { opacity: 0 },
  show: { opacity: [1, 0, 1, 0, 1, 0], transition: { duration: 1.8, ease: "linear" } },
};

export default function TypeLabel({ text, className = "" }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="show"
        viewport={IN_VIEW}
        variants={{ show: { transition: { staggerChildren: 0.022 } } }}
      >
        {Array.from(text).map((c, i) => (
          <motion.span key={i} variants={CHAR}>
            {c}
          </motion.span>
        ))}
        <motion.span
          variants={CARET}
          className="ml-[2px] inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-current"
        />
      </motion.span>
    </span>
  );
}
