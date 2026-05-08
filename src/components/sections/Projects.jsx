import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Academic resource portal",
      desc: "An Academic Resource Portal is a web platform that helps students access study materials, notes, assignments, and educational resources in one place.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <Section
      id="projects"
      title="Featured Work"
      subtitle="A selection of my best projects showcasing my technical and design capabilities."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,16,122,0.2)] flex flex-col h-full"
          >
            {/* Image Container with Zoom effect */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-20 drop-shadow-md">
                {project.title}
              </h3>
            </div>
            
            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-text-muted text-sm mb-6 flex-1 leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-glass-border rounded-full text-text-color font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-glass-border mt-auto">
                <a href={project.github} className="flex items-center gap-1.5 text-sm font-bold hover:text-primary transition-colors">
                  <FaGithub size={18} /> Source
                </a>
                <a href={project.demo} className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover transition-colors ml-auto group/demo">
                  Live Demo <ExternalLink size={16} className="group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
