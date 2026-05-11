import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Code, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Aether Labs',
      role: 'Principal Systems Architect',
      period: '2023 - PRESENT',
      location: 'Hyper-Sphere (Remote)',
      description: 'Leading the development of distributed cloud architectures and neural-optimized frontend interface systems.',
      tech: ['Next.js 14', 'GO', 'Web3', 'K8s']
    },
    {
      company: 'Cyberdyne Systems',
      role: 'Senior UI/UX Engineer',
      period: '2020 - 2023',
      location: 'New San Francisco',
      description: 'Developed high-fidelity data visualization interfaces for autonomous logistics networks using D3.js and React.',
      tech: ['React', 'D3', 'TypeScript', 'Node.js']
    },
    {
      company: 'Null Sector',
      role: 'Fullstack Developer',
      period: '2018 - 2020',
      location: 'The Grid',
      description: 'Engineered performant e-commerce engines and microservice architectures for international luxury brands.',
      tech: ['Vue.js', 'Express', 'Redis', 'AWS']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-nova-navy/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter"
          >
            TIMELINE <span className="text-gradient">LOG</span>
          </motion.h2>
          <div className="w-24 h-1 bg-nova-blue mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-nova-blue/30 before:to-transparent">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-nova-blue/50 bg-nova-navy absolute left-0 md:left-1/2 md:-ml-5 transition duration-500 group-hover:scale-125 z-10 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <Briefcase size={16} className="text-nova-blue" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-8 rounded-3xl border-white/5 hover:border-nova-blue/20 transition-all duration-500 hover:shadow-2xl hover:shadow-nova-blue/10 ml-16 md:ml-0">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-nova-blue transition-colors">
                      {exp.role}
                    </h3>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/50 tracking-widest uppercase flex items-center gap-2">
                      <Calendar size={12} /> {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm font-medium text-nova-purple">
                    <span className="flex items-center gap-1.5"><Code size={14} /> {exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1.5 opacity-60"><MapPin size={14} /> {exp.location}</span>
                  </div>
                  
                  <p className="text-white/60 leading-relaxed text-sm italic">
                    "{exp.description}"
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-[9px] font-bold text-nova-blue/60 uppercase tracking-widest">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
