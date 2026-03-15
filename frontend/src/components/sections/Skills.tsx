import { motion } from 'framer-motion';

const skills = [
  { 
    category: 'Frontend Development', 
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'] 
  },
  { 
    category: 'Design & Graphics', 
    items: ['Figma', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Logo Design'] 
  },
  { 
    category: 'Backend & Tools', 
    items: ['Node.js', 'Express', 'Git', 'Vercel', 'REST APIs', 'PostgreSQL'] 
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen py-24 bg-black/95 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-3">My Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-10 hover:bg-white/5 transition-all duration-300 group"
            >
              <h4 className="text-2xl font-bold mb-8 text-white group-hover:text-blue-400 transition-colors">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 uppercase tracking-wider cursor-default shadow-sm transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
