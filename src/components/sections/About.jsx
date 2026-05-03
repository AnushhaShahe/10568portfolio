import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Code2, Layout, Zap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 className="text-primary w-10 h-10 mb-6 drop-shadow-[0_0_10px_rgba(255,16,122,0.5)]" />,
      title: 'Clean Architecture',
      desc: 'I build scalable, maintainable systems using modern design patterns and clean code principles.'
    },
    {
      icon: <Layout className="text-primary w-10 h-10 mb-6 drop-shadow-[0_0_10px_rgba(255,16,122,0.5)]" />,
      title: 'Premium UI/UX',
      desc: 'Crafting pixel-perfect, glassmorphic, and highly interactive user interfaces.'
    },
    {
      icon: <Zap className="text-primary w-10 h-10 mb-6 drop-shadow-[0_0_10px_rgba(255,16,122,0.5)]" />,
      title: 'High Performance',
      desc: 'Optimizing rendering, assets, and network requests for lightning-fast web applications.'
    }
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Fusing creativity with engineering to build the digital future."
    >
      <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
        <div className="w-full md:w-1/2 space-y-6 text-lg text-text-muted leading-relaxed">
          <p>
            Hello! I'm <strong className="text-text-color font-semibold">Kristina K Thomas</strong>, a web developer based in Mumbai, India. I specialize in building premium digital experiences that are as technically sound as they are visually striking.
          </p>
          <p>
            My approach combines modern frameworks like React with cutting-edge CSS techniques (like glassmorphism and complex animations) to deliver products that truly stand out in today's crowded digital landscape.
          </p>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Beyond Coding</h3>
            <ul className="space-y-4 relative z-10">
              {['Constant Learner of New Tech', 'Open Source Contributor', 'Design Enthusiast'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-muted">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,16,122,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,16,122,0.15)]"
          >
            <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
              {card.icon}
            </div>
            <h3 className="text-xl font-extrabold mb-3">{card.title}</h3>
            <p className="text-text-muted leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;
