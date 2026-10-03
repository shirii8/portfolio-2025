import React from 'react';

const projects = [
  {
    name: "Hertz",
    image: "https://hertz-6j6rt2cx6-shriyas-projects-239e0065.vercel.app/",
    description: "A live E-commerce website that I designed, built and handled the entire database handling and backend security for tessch-India;s first modular sneaker brand.",
    tech: ["Next", "Typescript", "SQL", "Supabase", "Tailwind"],
    demo: "https://www.tessch.in/"
  },
  {
    name: "Tessch",
    image: "/images/tessch.png",
    description: "A live E-commerce website that I designed, built and handled the entire database handling and backend security for tessch-India;s first modular sneaker brand.",
    tech: ["Next", "Typescript", "SQL", "Supabase", "Tailwind"],
    demo: "https://www.tessch.in/"
  },
  {
    name: "Kruti-Coffee Website Reimagined",
    image: "/images/krutiCoffee.jpg",
    description: "A complete modern overhaul of the Kruti Coffee website. Distinct focus on premium aesthetics, seamless user journeys, and a luxury cafe feel to drive brand engagement.",
    tech: ["React", "JSON", "MongoDb", "Tailwind"],
    demo: "https://kruticoffee-website.vercel.app/"
  },
  {
    name: "Whatsapp Chat Analyser",
    image: "/images/wsapChatAnalyser.jpg",
    description: "Developed and deployed a full-stack WhatsApp Chat Analyzer using Python, Streamlit, and Pandas. Built a custom regex parser to process unstructured raw chat exports into structured datasets enriched with 8 temporal features for interactive analytics.",
    tech: ["Streamlit", "Python", "Regex", "Numpy", "Pandas"],
    demo: " https://whatsapp-chat-analyzer-statistics.streamlit.app/"
  },
  {
    name: "Tesla Car Build Assistant",
    image: "/images/TeslaCarBuildAssistant.jpg",
    description: "A portfolio with animated routes, smooth GSAP scenes, and utility-first Tailwind CSS design.",
    tech: ["Html", "Js", "Css"],
    demo: "tesla-build-assistant-btsi5tbgv-shriyas-projects-239e0065.vercel.app"
  },
   {
    name: "Liquid Glass Experience",
    image: "/images/LiquidGlassExperience.jpg",
    description: "A portfolio with animated routes, smooth GSAP scenes, and utility-first Tailwind CSS design.",
    tech: ["React", "Tailwind", "Vite", "GSAP", "Framer-Motion"],
    demo: "https://frontend-hack-three.vercel.app/"
  },
  {
    name: "Inlign-Redesign",
    image: "/images/Inlign.png",
    description: "Upgraded the visual language to a luxury tech aesthetic while strictly adhering to the original brand colors for continuity.",
    tech: ["React", "Js", "Css", "GSAP", "Framer Motion"],
    demo: "https://inlign-redesign-frontend-r-2-wrgc-3jyyr0pg2.vercel.app/"
  },
  {
    name: "DesignBattle",
    image: "/images/DesignBattle.png",
    description: "A portfolio with animated routes, smooth GSAP scenes, and utility-first Tailwind CSS design.",
    tech: ["Html", "Js", "Css"],
    demo: "https://design-battle-flax.vercel.app/"
  },
  // {
  //   name: "airbnb",
  //   image: "/images/airbnb.png",
  //   description: "A creative canvas reminiscent of Figma, with drag-and-drop elements and SVG export.",
  //   tech: ["Html", "Js", "Css"],
  //   demo: "https://your-designspace-demo.com"
  // },
  {
    name: "BerkshireHathaway",
    image: "/images/BerkshireHathaway.png",
    description: `Transformed the text-heavy interface into a modern, visually engaging UI,
Modernized typography and layout to create a polished, professional aesthetic,
Optimized navigation, simplifying access to key corporate data and news.`,
    tech: ["Html", "Js", "Css"],
    demo: "https://ps-1-psi.vercel.app/"
  },
];

const ProjectsGrid = () => (
  <section className="w-full max-w-6xl mx-auto py-20 px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-10 ">
    {projects.map((project, idx) => (
      <div
        key={project.name}
        className="bg-white border border-gray-200 rounded-2xl flex flex-col shadow transition-all duration-500 transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(35,35,50,0.13),0_10px_15px_rgba(60,60,80,0.10)] hover:z-10"
        style={{ animationDelay: `${idx * 60}ms` }}
      >
        {/* Project image */}
        <div className="w-full h-48 flex-shrink-0 overflow-hidden rounded-t-2xl bg-gray-100">
          <img
            src={project.image}
            alt={project.name}
            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
            draggable="false"
          />
        </div>
        {/* Card content */}
        <div className="flex flex-col p-6 flex-1">
          <h3 className="text-2xl font-bold font-TurretRoad text-gray-950 mb-2">{project.name}</h3>
          <p className="font-TurretRoad text-gray-700 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <span className="font-semibold text-gray-600">Tech Stack:</span>
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md bg-gray-100 text-gray-800 font-TurretRoad border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-TurretRoad px-6 py-2 rounded-full border border-gray-300 bg-gray-950 text-white font-semibold tracking-wide shadow hover:scale-105 hover:bg-gray-800 transition-all duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    ))}
  </section>
);

export default ProjectsGrid;
