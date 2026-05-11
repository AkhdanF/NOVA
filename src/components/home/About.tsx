import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: 'Lines of Code', value: '450K+', icon: Shield, color: 'text-nova-blue' },
    { label: 'Success Rate', value: '100%', icon: Target, color: 'text-nova-purple' },
    { label: 'Users Reached', value: '2M+', icon: Users, color: 'text-nova-cyan' },
    { label: 'Processing Speed', value: '5ms', icon: Zap, color: 'text-yellow-400' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                The Architect of <br />
                <span className="text-nova-blue">Digital Ecosystems</span>
              </h2>
              <div className="w-20 h-1 bg-nova-purple rounded-full" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed max-w-2xl"
            >
              I bridge the gap between abstract concepts and hyper-functional reality. 
              My approach combines mathematical precision with creative intuition to build 
              systems that aren't just tools, but extensions of human capability.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass-card rounded-2xl space-y-2 border-white/5 hover:border-white/20 transition-colors group"
                >
                  <stat.icon className={`${stat.color} group-hover:scale-110 transition-transform`} size={24} />
                  <div className="text-2xl font-display font-bold">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Abstract Visual representation */}
              <div className="absolute inset-0 border-4 border-nova-blue/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-dashed border-nova-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-10 bg-gradient-to-br from-nova-blue/20 to-nova-purple/20 rounded-full blur-2xl animate-pulse" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-1">
                  <div className="text-5xl font-display font-black text-white">01</div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/50">Core Identity</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
