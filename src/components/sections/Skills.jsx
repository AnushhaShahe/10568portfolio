import Section from '../ui/Section';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'Tailwind CSS / Glassmorphism', level: 95 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: 'Backend & Tooling',
      skills: [
        { name: 'Node.js / Express', level: 75 },
        { name: 'PostgreSQL / MongoDB', level: 70 },
        { name: 'Git & CI/CD', level: 80 },
        { name: 'Figma (UI/UX)', level: 85 },
      ],
    },
  ];

  return (
    <Section
      id="skills"
      title="Technical Mastery"
      subtitle="The tools and technologies I use to bring ideas to life."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: catIndex === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="mb-8 text-2xl font-bold text-primary drop-shadow-[0_0_10px_rgba(5,150,105,0.35)]">
              {category.title}
            </h3>
            <div className="space-y-6">
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="mb-2 flex justify-between">
                    <span className="font-semibold text-[var(--text-color)] transition-colors group-hover:text-primary">
                      {skill.name}
                    </span>
                    <span className="font-mono text-sm text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-black/[0.06] shadow-inner dark:bg-white/[0.08]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.25 + index * 0.08, ease: 'easeOut' }}
                      className="relative h-full rounded-full bg-gradient-to-r from-primary via-emerald-500 to-teal-400 shadow-[0_0_14px_rgba(5,150,105,0.55)]"
                    >
                      <div className="absolute inset-0 animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 lg:mt-20">
        <h3 className="mb-8 text-center text-2xl font-bold text-[var(--text-color)]">Additional Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['HTML5', 'CSS3', 'Redux Toolkit', 'REST APIs', 'GraphQL', 'Docker', 'AWS', 'Vercel', 'Firebase'].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 18 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="cursor-default rounded-full border border-glass-border bg-surface-color/90 px-5 py-2.5 text-sm font-semibold tracking-wide text-[var(--text-color)] shadow-sm backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
