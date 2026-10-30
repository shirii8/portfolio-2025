import { useEffect, useState } from "react";

// True only for a real mouse or trackpad. Touch screens fire fake hovers on
// tap, which would leave hover-only effects stuck on, so those effects check
// this first.
const QUERY = "(hover: hover) and (pointer: fine)";

export default function useCanHover() {
  const [canHover, setCanHover] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const update = () => setCanHover(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return canHover;
}
