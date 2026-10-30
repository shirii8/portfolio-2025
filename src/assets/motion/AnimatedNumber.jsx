import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "motion/react";

// A number that springs up to its value the first time it scrolls into view.
export default function AnimatedNumber({ value, format = (n) => String(n), className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const spring = useSpring(0, { stiffness: 70, damping: 18, mass: 0.8 });
  const text = useTransform(spring, (v) => format(Math.round(v)));

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  if (reduce) return <span className={className}>{format(value)}</span>;
  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
