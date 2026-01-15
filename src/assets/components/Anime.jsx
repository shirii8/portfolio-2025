import { motion, useScroll } from 'framer-motion';

const Anime = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Glass Background */}
      <div className="w-16 h-16 rounded-full bg-black/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl relative">
        
        {/* Background Circle (Track) */}
        <svg className="w-12 h-12 -rotate-90 transform">
          <circle
            cx="24" cy="24" r="20"
            stroke="currentColor" strokeWidth="4" fill="transparent"
            className="text-white/10"
          />
          {/* Foreground Circle (Progress) */}
          <motion.circle
            cx="24" cy="24" r="20"
            stroke="white" strokeWidth="4" fill="transparent"
            strokeDasharray="125.6" // 2 * pi * r (20)
            strokeLinecap="round"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        
        {/* Percentage Text inside */}
        <span className="absolute text-[10px] font-bold text-white">
           Scroll
        </span>
      </div>
    </div>
  );
};

export default Anime;