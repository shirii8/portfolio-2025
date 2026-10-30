import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";

let instance = null;

// Programmatic scrolling that goes through Lenis when it is running, so the
// two never fight over the scroll position.
export function scrollToTarget(target) {
  if (instance) instance.scrollTo(target, { offset: typeof target === "number" ? 0 : -72 });
  else if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

// Weighted, eased page scrolling. Anchor links glide to their section and land
// just below the fixed navbar. Skipped for visitors who prefer reduced motion.
export default function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -72 } });
    instance = lenis;
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, [reduce]);

  return null;
}
