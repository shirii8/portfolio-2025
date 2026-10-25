import React, { useState } from "react";

const services = [
  {
    id: "00-1",
    title: "WEB DESIGN",
    list: [
      "MODERN LAYOUTS",
      "RESPONSIVE DESIGN",
      "SEO-FRIENDLY STRUCTURE",
      "CLEAR NAVIGATION",
      "VISUAL STORYTELLING",
    ],
    description:
      "CREATING WEBSITES THAT STAND OUT FROM THE COMPETITION AND BRING REAL VALUE TO BUSINESSES. EACH PROJECT COMBINES CREATIVITY AND FUNCTIONALITY TO DELIVER THE BEST DIGITAL SOLUTIONS.",
  },
  {
    id: "00-2",
    title: "UI/UX",
    list: [
      "USER RESEARCH",
      "WIREFRAMING",
      "INTERACTIVE PROTOTYPES",
      "INFORMATION ARCHITECTURE",
      "USABILITY TESTING",
    ],
    description:
      "CRAFTING DIGITAL EXPERIENCES THAT ARE INTUITIVE AND ENGAGING. PRIORITIZING USER NEEDS TO BUILD INTERFACES THAT DRIVE SATISFACTION, ACCESSIBILITY, AND LONG-TERM LOYALTY.",
  },
  {
    id: "00-3",
    title: "CREATIVE DESIGN",
    list: [
      "BRAND IDENTITY",
      "VISUAL HIERARCHY",
      "TYPOGRAPHY MASTERY",
      "DIGITAL ART DIRECTION",
      "COMPOSED AESTHETICS",
    ],
    description:
      "TRANSLATING CONCEPTS INTO COMPELLING VISUAL NARRATIVES. COMBINING ARTISTIC VISION WITH STRATEGIC DESIGN TO CREATE DISTINCT BRAND IDENTITIES THAT CAPTURE ATTENTION AND RESONATE.",
  },
  {
    id: "00-4",
    title: "ANIMATION",
    list: [
      "MOTION GRAPHICS",
      "3D VISUALIZATION",
      "KINETIC TYPOGRAPHY",
      "VISUAL EFFECTS",
      "DYNAMIC TRANSITIONS",
    ],
    description:
      "BREATHING LIFE INTO STATIC VISUALS THROUGH MOVEMENT. USING TIMING, EASING, AND STORYTELLING TO EXPLAIN COMPLEX IDEAS AND ADD A LAYER OF POLISH TO THE USER EXPERIENCE.",
  },
  {
    id: "00-5",
    title: "DEVELOPMENT",
    list: [
      "CLEAN ARCHITECTURE",
      "PERFORMANCE OPTIMIZATION",
      "ROBUST INTEGRATIONS",
      "SEMANTIC CODE",
      "SCALABLE SOLUTIONS",
    ],
    description:
      "BRINGING DESIGNS TO LIFE WITH PIXEL-PERFECT PRECISION. WRITING EFFICIENT, MAINTAINABLE CODE TO BUILD ROBUST DIGITAL SOLUTIONS THAT PERFORM FLAWLESSLY ACROSS ALL PLATFORMS.",
  },
];

export default function ServicesLayout() {
  const [active, setActive] = useState(null);

  return (
    <div id="Services" className="w-full md:min-h-[82vh] bg-black font-TurretRoad text-white border-t border-gray-700">
      {/* Small screens: tap-to-expand list instead of hover columns */}
      <div className="md:hidden flex flex-col">
        {services.map((service) => {
          const open = active === service.id;
          return (
            <div key={service.id} className="border-b border-gray-700">
              <button
                type="button"
                onClick={() => setActive(open ? null : service.id)}
                aria-expanded={open}
                className="w-full flex items-center justify-between gap-4 px-5 py-6 text-left"
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-xs font-bold tracking-widest text-gray-500">{service.id}</span>
                  <span className="text-2xl font-extrabold uppercase tracking-widest text-gray-200">{service.title}</span>
                </span>
                <span className={`text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="mx-5 mb-6 bg-white text-black rounded-2xl p-5">
                    <ul className="text-base leading-relaxed text-gray-600 font-mono tracking-wide">
                      {service.list.map((item) => (
                        <li key={item}>/ {item}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[12px] leading-relaxed text-gray-600 font-mono tracking-wide">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden md:flex w-full">
      {services.map((service) => (
        <div
          key={service.id}
          onMouseEnter={() => setActive(service.id)}
          onMouseLeave={() => setActive(null)}
          className={`relative flex items-center justify-center border-r border-gray-700 transition-all duration-700 ease-in-out
            ${active === service.id ? "flex-[2]" : "flex-1"}
          `}
          style={{ height: "500px" }}
        >
          {/* Vertical title (default view) */}
          <h2
            className={`uppercase font-extrabold tracking-widest text-2xl transition-all duration-500 select-none
              ${active === service.id ? "opacity-0" : "opacity-100 text-gray-200"}
            `}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {service.title}
          </h2>

          {/* Floating card on hover */}
          {active === service.id && (
            <div
              className="absolute bg-white text-black rounded-2xl shadow-2xl p-6 w-[min(320px,90%)] h-[420px] flex flex-col justify-between transition-all duration-700"
              style={{
                transform: "translateY(0)",
              }}
            >
              <div>
                <span className="block text-xs font-bold tracking-widest text-gray-400">
                  {service.id}
                </span>
                <h2 className="text-xl font-extrabold uppercase tracking-widest mb-3">
                  {service.title}
                </h2>
              </div>

              <div className="flex flex-col gap-2 overflow-hidden">
                {service.list && (
                  <ul className="text-base lg:text-[20px] leading-relaxed text-gray-600 font-mono tracking-wide">
                    {service.list.map((item) => (
                      <li key={item}>/ {item}</li>
                    ))}
                  </ul>
                )}
                {service.description && (
                  <p className="text-[12px] leading-relaxed text-gray-600 font-mono tracking-wide">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
