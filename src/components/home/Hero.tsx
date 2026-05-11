import React from 'react';
import { motion } from 'motion/react';
import { Terminal } from '@/src/components/ui/Terminal';
import { ArrowRight, Code, Sparkles, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nova-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nova-purple/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nova-blue/30 bg-nova-blue/10 text-nova-blue text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="animate-spin-slow" /> 
            Engineering the Future
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-display font-black leading-tight tracking-tighter">
              BEYOND THE <br />
              <span className="text-gradient">FRONTIER</span>
            </h1>
            <p className="text-lg text-white/60 max-w-lg leading-relaxed font-sans">
              Elite Fullstack Engineer specializing in building immersive digital architectures and high-performance neural interfaces. 
              Turning complex data into artistic interactions.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-nova-blue text-nova-navy font-bold flex items-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              View Protocol <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: '#8B5CF6' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-nova-purple transition-colors font-bold flex items-center gap-2"
            >
              Initiate Contact <Zap size={20} className="text-nova-purple" />
            </motion.a>
          </div>

          <div className="flex gap-12 pt-8 border-t border-white/5 italic">
            {[
              { label: 'Latency', value: '<20ms' },
              { label: 'Uptime', value: '99.9%' },
              { label: 'Builds', value: '1.2k+' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <Terminal />
          </div>
          
          {/* Floating Icons Decor */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-20 h-20 bg-nova-blue/10 rounded-full flex items-center justify-center border border-nova-blue/20 backdrop-blur-sm"
          >
            <Code className="text-nova-blue" size={32} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-16 h-16 bg-nova-purple/10 rounded-full flex items-center justify-center border border-nova-purple/20 backdrop-blur-sm"
          >
            <Cpu className="text-nova-purple" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Cpu: React.FC<{ size?: number; className?: string }> = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="15" x2="23" y2="15"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="15" x2="4" y2="15"></line>
  </svg>
);
