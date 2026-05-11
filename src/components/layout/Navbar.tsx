import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        isScrolled ? "py-4 bg-nova-navy/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nova-blue to-nova-purple flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Cpu className="text-nova-navy" size={24} />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter uppercase italic">
            Nova<span className="text-nova-blue">.</span>
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-nova-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nova-blue transition-all group-hover:w-full" />
            </motion.a>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-white/50 hover:text-nova-blue transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 text-white/50 hover:text-nova-blue transition-colors">
              <Twitter size={18} />
            </a>
          </div>
          
          <a 
            href="#contact" 
            className="px-6 py-2 rounded-full border border-nova-blue/50 text-nova-blue text-sm font-bold hover:bg-nova-blue hover:text-nova-navy transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            Hires Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nova-navy border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-white/80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4">
                <Github />
                <Linkedin />
                <Twitter />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
