import React from "react";

const techStack = [
  // Languages
  { name: "HTML5", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Styling", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "PostgreSQL", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },

  // Frontend
  { name: "React", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", category: "Styling", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

  // Backend
  { name: "Node.js", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  // Animation
  { name: "GSAP", category: "Animation", img: "https://raw.githubusercontent.com/greensock/GSAP-Docs/master/src/img/gsap-logo.svg" },

  // Data Science
  { name: "Pandas", category: "Data Science", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", category: "Data Science", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", category: "Data Science", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Seaborn", category: "Data Science", img: "https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg" },

  // Tools
  { name: "Git", category: "VCS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", category: "Design", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Postman", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Jupyter Notebook", category: "Tools", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Vite", category: "Build Tool", img: "https://vitejs.dev/logo.svg" },

  // // Core Competencies
  // { name: "Data Structures & Algorithms", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/binary.svg" },
  // { name: "REST API Design", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/network.svg" },
  // { name: "Database Architecture", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/database.svg" },
  // { name: "Authentication & Authorization", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/shield-check.svg" },
  // { name: "Full-Stack Development", category: "Concepts", img: "https://cdn.jsdelivr.net/npm/lucide-static@1.28.0/icons/layers.svg" },
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
