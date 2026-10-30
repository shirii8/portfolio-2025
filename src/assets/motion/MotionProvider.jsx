import { MotionConfig } from "motion/react";

// With reducedMotion="user", Motion drops transform and layout animations for
// visitors who ask their OS for less motion, while keeping gentle opacity
// fades. Hand-rolled loops check useReducedMotion themselves.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
