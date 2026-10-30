import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import TypeLabel from "../motion/TypeLabel";
import TextReveal from "../motion/TextReveal";
import Reveal from "../motion/Reveal";
import { EASE_OUT, IN_VIEW } from "../motion/presets";

// The agent loop Recall runs, drawn as a cycle that steps along on its own.
const LOOP = [
  { step: "Plan", note: "Model returns one JSON action" },
  { step: "Guard", note: "Default-deny checks on every action" },
  { step: "Act", note: "API calls, or a real browser when needed" },
  { step: "Verify", note: "Before/after snapshots on every write" },
];

const PRINCIPLES = [
  {
    title: "Hand-built agent loops",
    body: "ReAct-style loops written from scratch, with no orchestration framework, so every step is visible and debuggable.",
  },
  {
    title: "Guardrails by default",
    body: "Actions are validated against trusted data. Anything irreversible, like refunds or emails, waits for a human to approve.",
  },
  {
    title: "Grounded answers",
    body: "RAG over transcripts with embeddings and semantic retrieval, so every answer comes with clickable, timestamped citations.",
  },
  {
    title: "Evaluated, not vibes",
    body: "Fault-injected test stores, an external grader, 12 scenarios and 40 offline tests, so changes are measured.",
  },
];

const BUILDS = [
  { name: "Recall", what: "Autonomous AI operations agent", href: "#project-recall" },
  { name: "Rewi", what: "Video & meeting summarizer with Q&A", href: "#project-rewi" },
];

const GRID = { show: { transition: { staggerChildren: 0.08 } } };
const CARD = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

const AgentLoop = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % LOOP.length), 1600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <ol className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {LOOP.map((s, i) => {
        const on = i === active;
        return (
          <li
            key={s.step}
            className={`relative rounded-2xl border p-4 sm:p-5 transition-colors duration-500 ${on ? "bg-gray-950 border-gray-950 text-white" : "bg-white border-gray-200 text-gray-950"}`}
          >
            <div className="flex items-center justify-between font-TurretRoad text-xs font-extrabold tracking-widest">
              <span className={on ? "text-gray-400" : "text-gray-400"}>{String(i + 1).padStart(2, "0")}</span>
              <span className="relative flex h-2 w-2">
                {on && <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-70 animate-ping" />}
                <span className={`relative inline-flex h-2 w-2 rounded-full ${on ? "bg-white" : "bg-gray-300"}`} />
              </span>
            </div>
            <p className="mt-4 font-TurretRoad text-2xl sm:text-3xl font-extrabold">{s.step}</p>
            <p className={`mt-1 text-xs sm:text-sm leading-snug ${on ? "text-gray-300" : "text-gray-500"}`}>{s.note}</p>
            {/* Connector to the next step */}
            <span
              aria-hidden
              className={`hidden lg:block absolute top-1/2 -right-4 w-4 h-px ${i === LOOP.length - 1 ? "lg:hidden" : "bg-gray-300"}`}
            />
          </li>
        );
      })}
    </ol>
  );
};

const AgenticAI = () => (
  <section id="Agentic" className="w-full bg-white px-4 sm:px-6 py-16 sm:py-24">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between font-TurretRoad font-extrabold tracking-widest text-xs sm:text-sm text-gray-500 border-b border-gray-200 pb-3">
        <TypeLabel text="[03] AGENTIC AI" className="text-gray-950" />
        <span>CURRENTLY BUILDING</span>
      </div>

      <div className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-end">
        <h2 className="font-TurretRoad text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-950 leading-[1.05]">
          <TextReveal
            segments={[
              { text: "Agents that do" },
              { text: "real", mark: "underline" },
              { text: "work, safely." },
            ]}
          />
        </h2>
        <Reveal delay={0.3} as="p" className="font-TurretRoad text-base sm:text-lg font-bold text-gray-600">
          I build AI systems that plan, act and check their own work: tool-using agents with guardrails,
          and retrieval apps that cite their sources. Fewer demos, more things you can trust.
        </Reveal>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="mb-4 font-TurretRoad text-xs sm:text-sm font-extrabold tracking-widest text-gray-500">
          THE LOOP, EVERY STEP
        </div>
        <AgentLoop />
      </div>

      <motion.ul
        className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={IN_VIEW}
        variants={GRID}
      >
        {PRINCIPLES.map((p, i) => (
          <motion.li key={p.title} variants={CARD} className="bg-white p-6 sm:p-8">
            <span className="font-TurretRoad text-xs font-extrabold tracking-widest text-gray-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-TurretRoad text-xl sm:text-2xl font-extrabold text-gray-950">{p.title}</h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600">{p.body}</p>
          </motion.li>
        ))}
      </motion.ul>

      <Reveal className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        {BUILDS.map((b) => (
          <a
            key={b.name}
            href={b.href}
            className="group flex-1 flex items-center justify-between gap-4 rounded-full border-2 border-gray-950 px-6 py-3 font-TurretRoad transition-colors duration-300 hover:bg-gray-950 hover:text-white"
          >
            <span>
              <span className="text-lg sm:text-xl font-extrabold">{b.name}</span>
              <span className="ml-3 text-xs sm:text-sm font-bold text-gray-500 group-hover:text-gray-300">{b.what}</span>
            </span>
            <span aria-hidden className="text-xl transition-transform duration-300 group-hover:rotate-45">↗</span>
          </a>
        ))}
      </Reveal>
    </div>
  </section>
);

export default AgenticAI;
