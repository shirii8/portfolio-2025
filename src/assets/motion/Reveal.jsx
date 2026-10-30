import { motion } from "motion/react";
import { EASE_OUT, IN_VIEW } from "./presets";

// Generic scroll entrance: content lifts in from slightly below.
export default function Reveal({ children, delay = 0, y = 32, className = "", as = "div", ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={IN_VIEW}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
