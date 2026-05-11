import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

export const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<{ cmd: string; result: string }[]>([
    { cmd: 'whoami', result: 'nova_dev // Elite Fullstack Engineer' },
    { cmd: 'skills --list', result: 'React, TypeScript, Node.js, Cloud Architectures, Web3' },
    { cmd: 'location', result: 'Digital Frontier // Remote' },
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    let response = '';
    const cmd = currentInput.toLowerCase().trim();

    switch (cmd) {
      case 'help':
        response = 'Available commands: about, experience, projects, clear, help';
        break;
      case 'about':
        response = 'Dedicated to building immersive, high-performance web experiences.';
        break;
      case 'experience':
        response = '10+ years of digital alchemy across top tech firms.';
        break;
      case 'projects':
        response = 'A collection of bleeding-edge prototypes and production systems.';
        break;
      case 'clear':
        setCommands([]);
        setCurrentInput('');
        return;
      default:
        response = `Command not found: ${cmd}. Type 'help' for options.`;
    }

    setCommands([...commands, { cmd: currentInput, result: response }]);
    setCurrentInput('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-card rounded-lg overflow-hidden shadow-2xl font-mono text-sm border border-nova-blue/20">
      <div className="bg-white/10 px-4 py-2 flex items-center gap-2 border-bottom border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 text-center text-xs text-white/40 uppercase tracking-widest flex items-center justify-center gap-2">
          <TerminalIcon size={12} /> nova.sh — zsh
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="p-6 h-64 overflow-y-auto space-y-3 bg-nova-navy/40 custom-scrollbar"
      >
        {commands.map((c, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2 text-nova-blue">
              <ChevronRight size={14} />
              <span className="text-nova-purple font-bold">nova</span>
              <span>$</span>
              <span className="text-white">{c.cmd}</span>
            </div>
            <div className="text-white/60 pl-6 leading-relaxed italic">{c.result}</div>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2 text-nova-blue">
          <ChevronRight size={14} />
          <span className="text-nova-purple font-bold">nova</span>
          <span>$</span>
          <input
            type="text"
            autoFocus
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};
