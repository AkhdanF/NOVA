import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Spotlight } from '@/src/components/ui/Spotlight';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Neon Nexus",
      description: "A decentralized social protocol with real-time neural visualization and encrypted message streams.",
      tech: ["Next.js", "Three.js", "WebRTC"],
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "Quantum Ledger",
      description: "High-frequency trading interface for synthetic assets using custom WASM aggregation engines.",
      tech: ["Rust", "React", "D3.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "Nova OS",
      description: "A shell-based operating system for cloud environments with integrated AI terminal assistance.",
      tech: ["Electron", "Node.js", "Go"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "Neural Canvas",
      description: "Collaborative generative art platform driven by real-time biomass sensor feedback.",
      tech: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter"
            >
              PROJECT <span className="text-gradient">SHOWCASE</span>
            </motion.h2>
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold leading-relaxed">System deployments and functional prototypes</p>
          </div>
          
          <motion.a 
            href="#" 
            className="group flex items-center gap-2 text-nova-blue text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            Archive Protocol <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Spotlight className="group glass-card rounded-3xl overflow-hidden border-white/5 hover:border-nova-blue/20 transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-nova-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                    <a href={project.link} className="p-4 bg-white/10 rounded-full hover:bg-nova-blue hover:text-nova-navy transition-all duration-300 transform hover:scale-110">
                      <Eye size={24} />
                    </a>
                    <a href={project.github} className="p-4 bg-white/10 rounded-full hover:bg-nova-purple hover:text-white transition-all duration-300 transform hover:scale-110">
                      <Github size={24} />
                    </a>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-widest border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold group-hover:text-nova-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-white/5">
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Ver 2.4.0</span>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="text-nova-blue flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                    >
                      Initialize <ExternalLink size={14} />
                    </motion.button>
                  </div>
                </div>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
