import { motion } from 'framer-motion';
import { Code2, Palette, Cuboid, Rocket, PenTool, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    points: ['Custom Websites', 'React / Next.js', 'E-Commerce Solutions']
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    points: ['Wireframing', 'Prototyping', 'User Interfaces']
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Logo Design',
    points: ['Brand Identity', 'Minimalist Logos', 'Typography']
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: 'GFX & Graphics',
    points: ['Social Media Art', 'Thumbnails', 'Banners & Posters']
  },
  {
    icon: <Cuboid className="w-8 h-8" />,
    title: '3D Experiences',
    points: ['WebGL / Three.js', 'Interactive Models', 'Immersive Webs']
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Optimization',
    points: ['SEO Boost', 'Speed Tuning', 'Accessibility']
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-sm text-pink-400 font-semibold tracking-widest uppercase mb-3">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Services Offered</h3>
          <p className="text-gray-400 text-lg">Comprehensive digital solutions with a focus on quality and creativity.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 relative z-10 shadow-lg group-hover:shadow-blue-500/50">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10 text-white">{service.title}</h4>
              <ul className="text-gray-400 space-y-2 relative z-10">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span className="text-sm font-medium text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
