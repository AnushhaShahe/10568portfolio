import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Code2, Layout, Zap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 className="mb-6 h-10 w-10 text-primary drop-shadow-[0_0_12px_rgba(5,150,105,0.45)]" />,
      title: 'Clean Architecture',
      desc: 'I build scalable, maintainable systems using modern design patterns and clean code principles.',
    },
    {
      icon: <Layout className="mb-6 h-10 w-10 text-primary drop-shadow-[0_0_12px_rgba(5,150,105,0.45)]" />,
      title: 'Premium UI/UX',
      desc: 'Crafting pixel-perfect, glassmorphic, and highly interactive user interfaces.',
    },
    {
      icon: <Zap className="mb-6 h-10 w-10 text-primary drop-shadow-[0_0_12px_rgba(5,150,105,0.45)]" />,
      title: 'High Performance',
      desc: 'Optimizing rendering, assets, and network requests for lightning-fast web applications.',
    },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Fusing creativity with engineering to build the digital future."
    >
      <div className="mb-16 flex flex-col gap-12 lg:mb-20 lg:flex-row lg:items-start lg:gap-16">
        <div className="w-full space-y-6 text-lg leading-relaxed text-text-muted lg:w-1/2">
          <p>
            Hello! I&apos;m{' '}
            <strong className="font-semibold text-[var(--text-color)]">Shloka Shetty</strong>, a web developer based
            in Mumbai, India. I specialize in building premium digital experiences that are as technically sound as
            they are visually striking.
          </p>
          <p>
            My approach combines modern frameworks like React with cutting-edge CSS techniques (like glassmorphism and
            complex animations) to deliver products that truly stand out in today&apos;s crowded digital landscape.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass group relative overflow-hidden rounded-2xl p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/12 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="relative z-10 mb-4 text-2xl font-bold text-[var(--text-color)]">Beyond Coding</h3>
            <ul className="relative z-10 space-y-4">
              {['Constant Learner of New Tech', 'Open Source Contributor', 'Design Enthusiast'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-muted">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(5,150,105,0.7)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.55 }}
            whileHover={{ y: -6 }}
            className="glass group rounded-2xl p-8 transition-shadow duration-300 hover:border-primary/35 hover:shadow-[0_20px_50px_rgba(5,150,105,0.12)]"
          >
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1">
              {card.icon}
            </div>
            <h3 className="relative z-10 mb-3 text-xl font-bold text-[var(--text-color)]">{card.title}</h3>
            <p className="relative z-10 leading-relaxed text-text-muted">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;
