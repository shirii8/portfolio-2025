import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import TypeLabel from "../motion/TypeLabel";
import StrikeWord from "../motion/StrikeWord";

// A statement that inks itself in as you scroll: each word goes from pale
// grey to black in reading order, tied to scroll position rather than time.

const LINES = [
  { words: "I started with" },
  { strike: "pretty pages" },
  { words: "interfaces that move. Then backends that hold up under real users. Now I'm building AI that does real work, with guardrails, citations and a human in the loop." },
];

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
};

const Manifesto = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });

  const words = LINES.flatMap((l) => (l.words ? l.words.split(" ") : []));
  let n = 0;

  return (
    <section ref={ref} id="Approach" className="w-full bg-white px-4 py-20 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <TypeLabel
          text="[02] APPROACH"
          className="font-TurretRoad text-xs sm:text-sm font-extrabold tracking-widest text-gray-950"
        />
        <p className="mt-8 font-TurretRoad font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.15] text-gray-950">
          {LINES.map((line, li) =>
            line.strike ? (
              <React.Fragment key={li}>
                <StrikeWord text={line.strike} delay={0.3} />{" "}
              </React.Fragment>
            ) : (
              line.words.split(" ").map((w, wi) => {
                const start = n / words.length;
                const end = (n + 1) / words.length;
                n += 1;
                return (
                  <React.Fragment key={`${li}-${wi}`}>
                    <Word progress={scrollYProgress} range={[start, end]}>
                      {w}
                    </Word>{" "}
                  </React.Fragment>
                );
              })
            )
          )}
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
