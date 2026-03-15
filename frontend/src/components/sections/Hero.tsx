import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Scene } from '../3d/Scene';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* 3D Background */}
      <Scene />

      {/* Content overlay */}
      <div className="section-container relative z-10 w-full mt-10 pointer-events-none">
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm"
          >
            Creative Developer | 3D Enthusiast
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white tracking-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Karun</span> <br />
            <span className="text-gray-300 text-4xl md:text-5xl lg:text-7xl">Building Epic Web Experiences</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          >
            I specialize in immersive, high-performance web applications and sleek designs. Let's build something amazing together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pointer-events-auto"
          >
            <a href="#projects" className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Explore My Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-blue-400 uppercase tracking-[0.2em] font-bold">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-blue-500/50 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
};
