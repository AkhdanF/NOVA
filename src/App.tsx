/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { InteractiveCursor } from './components/ui/InteractiveCursor';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { TechStack } from './components/home/TechStack';
import { Projects } from './components/home/Projects';
import { Experience } from './components/home/Experience';
import { Testimonials } from './components/home/Testimonials';
import { Contact } from './components/home/Contact';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="relative selection:bg-nova-blue selection:text-nova-navy overflow-x-hidden">
      <ScrollProgress />
      <InteractiveCursor />
      <Navbar />

      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        <TechStack />
        
        <Projects />
        
        <Experience />
        
        <Testimonials />
        
        <Contact />
      </main>

      <Footer />
      
      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-nova-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-nova-purple/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
