import React from 'react';
import { motion } from 'motion/react';
import { HoverCard } from '@/src/components/ui/HoverCard';
import { 
  FileJson, 
  Layers, 
  Globe, 
  Database, 
  Zap, 
  Search, 
  Cpu, 
  Cloud 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const stacks = [
    { name: 'React / Next.js', icon: Globe, color: 'text-nova-blue', level: 98, glow: 'rgba(56, 189, 248, 0.3)' },
    { name: 'TypeScript', icon: FileJson, color: 'text-blue-400', level: 95, glow: 'rgba(96, 165, 250, 0.3)' },
    { name: 'Node.js', icon: Cpu, color: 'text-green-400', level: 90, glow: 'rgba(74, 222, 128, 0.3)' },
    { name: 'Tailwind CSS', icon: Layers, color: 'text-cyan-400', level: 99, glow: 'rgba(34, 211, 238, 0.3)' },
    { name: 'Postgres / NoSQL', icon: Database, color: 'text-indigo-400', level: 85, glow: 'rgba(129, 140, 248, 0.3)' },
    { name: 'GraphQL', icon: Zap, color: 'text-pink-400', level: 88, glow: 'rgba(244, 114, 182, 0.3)' },
    { name: 'Docker / K8s', icon: Cloud, color: 'text-blue-300', level: 82, glow: 'rgba(147, 197, 253, 0.3)' },
    { name: 'Python / AI', icon: Search, color: 'text-yellow-400', level: 80, glow: 'rgba(250, 204, 21, 0.3)' },
  ];

  return (
    <section id="stack" className="py-24 bg-nova-navy/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter"
          >
            THE <span className="text-gradient">ALGORITHM</span>
          </motion.h2>
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold">Optimized for performance and scale</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stacks.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <HoverCard glowColor={item.glow} className="group h-full">
                <div className="p-8 glass-card rounded-3xl flex flex-col items-center justify-center gap-6 h-full border-white/5 group-hover:border-nova-blue/30 transition-all duration-500">
                  <div className={`p-4 rounded-2xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={32} />
                  </div>
                  <div className="text-center space-y-3 w-full">
                    <h3 className="font-display font-medium text-lg">{item.name}</h3>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.1 + 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-nova-blue to-nova-purple"
                      />
                    </div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{item.level}% PROFICIENCY</div>
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
