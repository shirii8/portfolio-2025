import { Fragment } from "react";
import { motion } from "motion/react";
import Scribble from "./Scribble";
import { EASE_OUT, IN_VIEW } from "./presets";

// Headline reveal: every word rises out of its own mask, one after another,
// like words landing as they're spoken. Words stay in the DOM the whole time,
// so screen readers and search engines read the full sentence.
//
// segments: [{ text, em?, className?, mark?: "underline" | "circle" | "swash", breakAfter? }]
// Marks are only for single words: a mark can't follow a phrase that wraps.

const WORD = {
  hidden: { y: "108%" },
  show: { y: "0%", transition: { duration: 0.85, ease: EASE_OUT } },
};

export default function TextReveal({ segments, trigger = "view", delay = 0, stagger = 0.07, className = "" }) {
  const wordCount = segments.reduce((n, s) => n + s.text.split(" ").length, 0);
  // Marks start drawing once the last word has landed.
  const markDelay = delay + wordCount * stagger + 0.35;

  return (
    <motion.span
      className={`block ${className}`}
      initial="hidden"
      {...(trigger === "view" ? { whileInView: "show", viewport: IN_VIEW } : { animate: "show" })}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {segments.map((seg, i) => {
        const Tag = seg.em ? "em" : "span";
        return (
          <Fragment key={i}>
            <Tag className={`${seg.mark ? "relative inline-block" : ""} ${seg.className ?? ""}`}>
              {seg.text.split(" ").map((w, j, all) => (
                <Fragment key={j}>
                  {/* The mask. Padding keeps descenders and overhang from being clipped. */}
                  <span className="-mb-[0.14em] -mr-[0.08em] inline-block overflow-hidden pb-[0.14em] pr-[0.08em] align-top">
                    <motion.span className="inline-block" variants={WORD}>
                      {w}
                    </motion.span>
                  </span>
                  {j < all.length - 1 && " "}
                </Fragment>
              ))}
              {seg.mark && <Scribble kind={seg.mark} delay={markDelay} trigger={trigger} color={seg.markColor} />}
            </Tag>
            {seg.breakAfter ? <br /> : i < segments.length - 1 && " "}
          </Fragment>
        );
      })}
    </motion.span>
  );
}
