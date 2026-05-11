import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Institute Helpdesk & IT Support Ticket System',
      desc: 'A comprehensive IT support ticket system built for educational institutes. Features include ticket creation, assignment, tracking, and role-based access control.',
      tags: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <Section
      id="projects"
      title="Featured Work"
      subtitle="A selection of my best projects showcasing my technical and design capabilities."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.55 }}
            whileHover={{ y: -6 }}
            className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:border-primary/35 hover:shadow-[0_24px_56px_rgba(5,150,105,0.14)]"
          >
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-emerald-600/25 to-teal-500/20" />
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent dark:from-black/70" />
              <Code2
                className="absolute -bottom-4 -right-4 h-40 w-40 text-white/10"
                strokeWidth={1}
                aria-hidden
              />
              <h3 className="absolute bottom-5 left-6 right-6 z-10 text-xl font-bold leading-snug text-white drop-shadow-md sm:text-2xl">
                {project.title}
              </h3>
            </div>

            <div className="relative z-10 flex flex-1 flex-col p-6">
              <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted">{project.desc}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-glass-border bg-black/[0.04] px-3 py-1 text-xs font-semibold text-[var(--text-color)] dark:bg-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 border-t border-glass-border pt-4">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm font-bold text-text-muted transition-colors hover:text-primary"
                >
                  <FaGithub size={18} /> Source
                </a>
                <a
                  href={project.demo}
                  className="group/demo ml-auto flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary-hover"
                >
                  Live Demo{' '}
                  <ExternalLink
                    size={16}
                    className="transition-transform group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
