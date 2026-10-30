import React from 'react';
import ProjectsShowcase, { projects } from './ProjectShowcase';
import ProjectIndex from './ProjectIndex';
import TypeLabel from '../motion/TypeLabel';
import TextReveal from '../motion/TextReveal';
import Reveal from '../motion/Reveal';

const Projects = () => {
  return (
    <section
      id='Projects'
      className="min-h-screen bg-white text-gray-950 px-4 sm:px-6 py-16 sm:py-24 flex flex-col">
      <div className="w-full max-w-6xl mx-auto mb-12 sm:mb-20 font-TurretRoad">
        <div className="flex items-center justify-between font-extrabold tracking-widest text-xs sm:text-sm text-gray-500 border-b border-gray-200 pb-3">
          <TypeLabel text="[05] SELECTED WORK" className="text-gray-950" />
          <span>2024 — NOW</span>
        </div>
        {/* Project Section Heading */}
        <h2 className="mt-10 text-5xl sm:text-7xl lg:text-8xl font-extrabold text-gray-950 leading-[1.05]">
          <TextReveal segments={[{ text: "Crafting real-world" }, { text: "solutions", mark: "swash" }, { text: "with code" }]} />
        </h2>
        <Reveal delay={0.3} as="p" className="mt-5 max-w-2xl text-gray-600 text-base sm:text-lg font-bold">
          AI agents, mobile apps, live storefronts and redesigns. Hover a title for a preview, or tap it to jump to the details.
        </Reveal>
      </div>

      <ProjectIndex projects={projects} />

      <div className="w-full mt-8 sm:mt-12">
        <ProjectsShowcase/>
      </div>
    </section>
  );
};

export default Projects;
