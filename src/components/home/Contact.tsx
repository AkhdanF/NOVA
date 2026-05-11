import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Transmission Received. I will initiate contact shortly.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nova-purple/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter"
              >
                INITIATE <br />
                <span className="text-gradient">COMMUNICATION</span>
              </motion.h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                Interested in starting a new protocol or joining forces? Transmit your vision and let's craft the future together.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Transmission Code', value: 'nova@frontiers.dev' },
                { icon: MapPin, label: 'Primary Node', value: 'Distributed // Remote' },
                { icon: Phone, label: 'Frequency', value: '+1 (555) NOVA-SYSTEM' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center border-white/5 group-hover:border-nova-blue/30 transition-all">
                    <item.icon size={20} className="text-nova-blue" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">{item.label}</div>
                    <div className="text-white font-medium group-hover:text-nova-blue transition-colors">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(56, 189, 248, 0.1)' }}
                  className="w-12 h-12 rounded-xl glass-card border-white/5 flex items-center justify-center transition-colors"
                >
                  <Icon size={20} className="text-white/60" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 glass-card rounded-3xl border-white/5 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold ml-1">Entity Identification</label>
                <input 
                  type="text" 
                  required
                  placeholder="NAME / ORGANIZATION"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-nova-blue/50 focus:bg-nova-blue/5 outline-none transition-all placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold ml-1">Communication Frequency</label>
                <input 
                  type="email" 
                  required
                  placeholder="EMAIL ADDRESS"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-nova-blue/50 focus:bg-nova-blue/5 outline-none transition-all placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold ml-1">Transmission Payload</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="YOUR MESSAGE TO THE FUTURE..."
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-nova-blue/50 focus:bg-nova-blue/5 outline-none transition-all placeholder:text-white/10 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-nova-blue to-nova-purple text-nova-navy font-black uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50 transition-opacity"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-nova-navy/30 border-t-nova-navy rounded-full animate-spin" />
                ) : (
                  <>
                    Send Transmission <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
            
            {/* Background Decor */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-nova-blue/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
