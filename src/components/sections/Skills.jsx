import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "Tailwind CSS / Glassmorphism", level: 95 },
        { name: "Framer Motion", level: 85 },
      ]
    },
    {
      title: "Backend & Tooling",
      skills: [
        { name: "Node.js / Express", level: 75 },
        { name: "PostgreSQL / MongoDB", level: 70 },
        { name: "Git & CI/CD", level: 80 },
        { name: "Figma (UI/UX)", level: 85 },
      ]
    }
  ];

  return (
    <Section
      id="skills"
      title="Technical Mastery"
      subtitle="The tools and technologies I use to bring ideas to life."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, x: catIndex === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-primary drop-shadow-[0_0_8px_rgba(255,16,122,0.4)]">
              {category.title}
            </h3>
            <div className="space-y-6">
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-text-color group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-text-muted font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full shadow-[0_0_10px_rgba(255,16,122,0.8)] relative"
                    >
                      {/* Animated shine effect on progress bar */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-bold text-center mb-10">Additional Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML5", "CSS3", "Redux Toolkit", "REST APIs", "GraphQL", "Docker", "AWS", "Vercel", "Firebase"].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
              className="px-6 py-3 glass rounded-full text-sm font-bold tracking-wide hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,16,122,0.2)] cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
