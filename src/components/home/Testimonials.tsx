import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Satoshi Nakamoto",
      role: "Founder, Blockchain Frontier",
      text: "The architectural depth Nova brings to digital assets is unprecedented. A true visionary of the decentralized web.",
      rating: 5,
      avatar: "S"
    },
    {
      name: "Elena Vance",
      role: "CTO, Resonance Labs",
      text: "Nova doesn't just write code; they weave digital experiences that feel alive. The UI performance is unmatched.",
      rating: 5,
      avatar: "E"
    },
    {
      name: "Arthur Dent",
      role: "Hitchhiker & Systems Architect",
      text: "I spent 42 years looking for an interface that makes sense. Nova built it in a weekend. Panic-free engineering.",
      rating: 5,
      avatar: "A"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Quote className="text-nova-blue opacity-50 mb-4" size={48} />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter"
          >
            FEEDBACK <span className="text-gradient">LOOPS</span>
          </motion.h2>
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold leading-relaxed">Encrypted transmissions from the field</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card rounded-3xl relative group border-white/5 hover:border-nova-purple/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-nova-blue text-nova-blue" />
                ))}
              </div>
              
              <p className="text-white/80 italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nova-blue/20 to-nova-purple/20 border border-white/10 flex items-center justify-center font-display font-bold text-nova-blue">
                  {review.avatar}
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white group-hover:text-nova-blue transition-colors">
                    {review.name}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-medium">
                    {review.role}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Quote size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
