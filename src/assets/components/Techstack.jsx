import React from "react";

const techStack = [
  { name: "HTML5", category: "Markup", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Styling", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", category: "Styling", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "TypeScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "VS Code", category: "Editor", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", category: "Design", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "GitHub", category: "Repository", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "SQL", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GSAP", category: "Animation", img: "https://raw.githubusercontent.com/greensock/GSAP-Docs/master/src/img/gsap-logo.svg" },
  { name: "C", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Git", category: "VCS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Vite", category: "Build Tool", img: "https://vitejs.dev/logo.svg" },
];


const TechStack = () => {
  return (
    <div  id='Techstack' className="min-h-screen bg-white text-gray-950 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 font-TurretRoad">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-600 text-sm mx-auto max-w-max">
            <div className="w-4 h-4 rounded-full bg-gray-500  " />
            <span className="text-center font-extrabold text-bg-gray-950">TECH STACK</span>
          </div>
          <div className="text-4xl md:text-7xl font-extrabold  bg-gradient-to-r from-black via-gray-500 to-black text-transparent bg-clip-text">
            Built with Modern Technologies
          </div>
          <p className="text-gray-900 max-w-2xl mx-auto text-base font-black">
            Leveraging cutting-edge tools to build sleek, fast, and dynamic web experiences.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 gap-5">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-white border border-gray-300 rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-500 transform hover:scale-110 hover:z-20 hover:shadow-[0_20px_30px_rgba(0,0,0,0.15),0_10px_15px_rgba(0,0,0,0.1),0_0_25px_rgba(0,0,0,0.2)]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Logo icon */}
                <div className="p-3 rounded-lg group hover:scale:1.1 transition-colors duration-300 flex items-center justify-center w-20 h-20 select-none">
                <img src={tech.img} alt={tech.name} className="w-8 h-8 object-contain" />
                </div>

              <div className="mt-4">
                <h3 className="font-bold text-gray-950 text:3xl font-TurretRoad">{tech.name}</h3>
                <p className="text-xs text-gray-400 mt-1 font-normal">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-600 flex justify-center items-center gap-2 font-TurretRoad">
          <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse font-extrabold" />
          <span className="font-semibold">Constantly evolving with new technologies</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
