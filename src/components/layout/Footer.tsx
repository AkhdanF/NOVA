import React from 'react';
import { Cpu, Copyright } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-nova-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-nova-blue to-nova-purple flex items-center justify-center">
              <Cpu className="text-nova-navy" size={16} />
            </div>
            <span className="text-lg font-display font-bold tracking-tighter uppercase italic">
              Nova<span className="text-nova-blue">.</span>
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {['Status: Operational', 'Location: Decentralized', 'Version: 2.0.4'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-nova-blue animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <Copyright size={12} /> {new Date().getFullYear()} NOVA SYSTEM ARCHITECTS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
