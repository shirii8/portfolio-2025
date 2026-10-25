import React, { useState } from 'react';

export const projects = [
  {
    name: "Recall",
    subtitle: "Autonomous AI Operations Agent",
    tag: "AI Agent",
    image: "/images/recall.jpg",
    description: "An autonomous AI agent built by hand with no orchestration framework. A ReAct-style loop where the model returns one JSON action per step, gated by a default-deny guardrail engine that validates every action against trusted data, requires human approval for irreversible actions, and verifies each write with before/after snapshots. Includes a fake FastAPI + SQLite store with injected faults, an external grader, and an evaluation harness (12 scenarios plus 40 offline pytest tests). Streamlit web demo; Playwright drives headless Chromium to scrape a dashboard-only field; Pydantic validates tool arguments.",
    tech: ["Python", "Google Gemini API", "FastAPI", "SQLite", "Pydantic", "Playwright", "Streamlit", "pytest"],
    demo: "https://recall-aiemployee-shift.streamlit.app/"
  },
  {
    name: "Hertz",
    subtitle: "Taste-Based Discovery & Personal Art Record",
    tag: "Mobile App",
    image: "/images/hertz.png",
    description: "A social app that matches people on a shared “resonance” score and lets them keep a personal art record. A custom fuzzy-matching compatibility engine using Postgres pg_trgm (exact match, trigram, and bidirectional word similarity) over a 24-table schema. A zero-trust data layer with Row-Level Security on every user-data table, mediated through 31 SECURITY DEFINER RPC functions and Supabase Edge Functions so no raw table access or credentials touch the client. PostGIS geospatial discovery, a gesture-driven profile canvas editor (Reanimated plus Gesture Handler), and Sendbird chat provisioned directly from Postgres via the http extension.",
    tech: ["React Native (Expo)", "TypeScript", "PostgreSQL", "Supabase", "Row-Level Security", "pg_trgm", "PostGIS", "Sendbird", "Reanimated", "Gesture Handler"],
    demo: "https://hertz-iota.vercel.app/",
    privateBuild: true
  },
  {
    name: "Rewi",
    subtitle: "Video & Meeting Summarizer with Q&A",
    tag: "AI · RAG",
    image: "/images/vdoAgent.jpg",
    description: "A RAG app that turns a YouTube link, audio, or video into a title, summary, and structured notes (action items, key decisions, open questions), plus a chat that answers questions with clickable timestamped citations. It transcribes captions-first with a Whisper fallback, chunks the transcript with timestamps, embeds the chunks for semantic search, and retrieves the most relevant passages to ground each answer. A caption fast path plus concurrent LLM calls keep latency to the slowest single call rather than the sum.",
    tech: ["Python", "Streamlit", "Google Gemini API", "faster-whisper", "YouTube Captions", "Embeddings", "RAG"],
    demo: "https://vdo-agent.streamlit.app/"
  },
  {
    name: "Tessch",
    subtitle: "India's first modular sneaker brand",
    tag: "E-Commerce",
    image: "/images/tessch.png",
    description: "A live e-commerce website that I designed and built, handling the entire database and backend security for Tessch, India's first modular sneaker brand.",
    tech: ["Next.js", "TypeScript", "SQL", "Supabase", "Tailwind"],
    demo: "https://www.tessch.in/"
  },
  {
    name: "Kruti Coffee",
    subtitle: "Website Reimagined",
    tag: "Website Redesign",
    image: "/images/krutiCoffee.jpg",
    description: "A complete modern overhaul of the Kruti Coffee website. Distinct focus on premium aesthetics, seamless user journeys, and a luxury cafe feel to drive brand engagement.",
    tech: ["React", "JSON", "MongoDB", "Tailwind"],
    demo: "https://kruticoffee-website.vercel.app/"
  },
  {
    name: "WhatsApp Chat Analyser",
    subtitle: "Chat exports to interactive analytics",
    tag: "Data Analytics",
    image: "/images/wsapChatAnalyser.jpg",
    description: "Developed and deployed a full-stack WhatsApp Chat Analyzer using Python, Streamlit, and Pandas. Built a custom regex parser to process unstructured raw chat exports into structured datasets enriched with 8 temporal features for interactive analytics.",
    tech: ["Python", "Streamlit", "Regex", "NumPy", "Pandas"],
    demo: "https://whatsapp-chat-analyzer-statistics.streamlit.app/"
  },
  {
    name: "Tesla Car Build Assistant",
    tag: "Frontend",
    image: "/images/TeslaCarBuildAssistant.jpg",
    description: "A portfolio with animated routes, smooth GSAP scenes, and utility-first Tailwind CSS design.",
    tech: ["HTML", "JS", "CSS"],
    demo: "https://tesla-build-assistant-btsi5tbgv-shriyas-projects-239e0065.vercel.app"
  },
  {
    name: "Liquid Glass Experience",
    tag: "Frontend",
    image: "/images/LiquidGlassExperience.jpg",
    description: "A portfolio with animated routes, smooth GSAP scenes, and utility-first Tailwind CSS design.",
    tech: ["React", "Tailwind", "Vite", "GSAP", "Framer Motion"],
    demo: "https://frontend-hack-three.vercel.app/"
  },
  {
    name: "Inlign Redesign",
    tag: "Website Redesign",
    image: "/images/Inlign.png",
    description: "Upgraded the visual language to a luxury tech aesthetic while strictly adhering to the original brand colors for continuity.",
    tech: ["React", "JS", "CSS", "GSAP", "Framer Motion"],
    demo: "https://inlign-redesign-frontend-r-2-wrgc-3jyyr0pg2.vercel.app/"
  },
  {
    name: "DesignBattle",
    tag: "UI/UX",
    image: "/images/DesignBattle.png",
    description: "A portfolio with animated routes, smooth GSAP scenes, and utility-first Tailwind CSS design.",
    tech: ["HTML", "JS", "CSS"],
    demo: "https://design-battle-flax.vercel.app/"
  },
  {
    name: "Berkshire Hathaway",
    tag: "Website Redesign",
    image: "/images/BerkshireHathaway.png",
    description: "Transformed the text-heavy interface into a modern, visually engaging UI. Modernized typography and layout to create a polished, professional aesthetic, and optimized navigation to simplify access to key corporate data and news.",
    tech: ["HTML", "JS", "CSS"],
    demo: "https://ps-1-psi.vercel.app/"
  },
].map((project, idx) => ({
  ...project,
  number: String(idx + 1).padStart(2, '0'),
  slug: `project-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
}));

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > 220;

  return (
    <article
      id={project.slug}
      className="group scroll-mt-28 bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden shadow-sm transition-all duration-500 md:hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(35,35,50,0.13),0_10px_15px_rgba(60,60,80,0.10)]"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
        <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-gray-950 text-white text-xs font-semibold font-TurretRoad tracking-wide">
          {project.tag}
        </span>
        <span className="absolute top-3 right-3 z-10 flex items-center gap-2">
          {project.privateBuild && (
            <span className="px-2 py-1 rounded-md bg-white/90 text-gray-950 text-xs font-bold font-TurretRoad tracking-wide">
              🔒 Private Build
            </span>
          )}
          <span className="px-2 py-1 rounded-md bg-white/90 text-gray-950 text-xs font-bold font-TurretRoad">
            {project.number}
          </span>
        </span>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
          draggable="false"
        />
      </div>

      <div className="flex flex-col p-5 sm:p-6 flex-1">
        <h3 className="text-2xl sm:text-3xl font-bold font-TurretRoad text-gray-950">{project.name}</h3>
        {project.subtitle && (
          <p className="mt-1 text-sm sm:text-base font-semibold font-TurretRoad text-gray-500">{project.subtitle}</p>
        )}

        <p className={`mt-4 text-sm sm:text-base leading-relaxed text-gray-700 ${expanded ? '' : 'line-clamp-4'}`}>
          {project.description}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            className="self-start mt-2 text-sm font-semibold font-TurretRoad text-gray-950 underline underline-offset-4 hover:text-gray-500"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}

        <ul className="flex flex-wrap gap-2 mt-5 mb-6 text-xs sm:text-sm">
          {project.tech.map(tech => (
            <li
              key={tech}
              className="px-2 py-1 rounded-md bg-gray-100 text-gray-800 font-TurretRoad font-semibold border border-gray-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto self-start inline-flex items-center gap-2 font-TurretRoad px-6 py-2 rounded-full bg-gray-950 text-white font-semibold tracking-wide shadow hover:bg-gray-800 transition-colors duration-300"
        >
          Live Demo <span aria-hidden="true">↗</span>
        </a>
        {project.privateBuild && (
          <p className="mt-3 text-xs sm:text-sm font-semibold font-TurretRoad text-gray-500">
            Private build: source code is not public. Available on request.
          </p>
        )}
      </div>
    </article>
  );
};

const ProjectsGrid = () => (
  <section className="w-full max-w-6xl mx-auto py-12 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
    {projects.map(project => (
      <ProjectCard key={project.slug} project={project} />
    ))}
  </section>
);

export default ProjectsGrid;
