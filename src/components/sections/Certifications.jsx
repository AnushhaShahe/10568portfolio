import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: <Award size={32} className="text-primary" />
    },
    {
      title: "Advanced React & GraphQL",
      issuer: "Frontend Masters",
      date: "2023",
      icon: <BadgeCheck size={32} className="text-primary" />
    },
    {
      title: "Full Stack Open",
      issuer: "University of Helsinki",
      date: "2022",
      icon: <Award size={32} className="text-primary" />
    }
  ];

  return (
    <Section
      id="certifications"
      title="Certifications & Achievements"
      subtitle="Milestones in my continuous learning journey."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,16,122,0.15)]"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              {cert.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
            <p className="text-text-muted font-medium mb-1">{cert.issuer}</p>
            <p className="text-sm text-gray-500 font-mono">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
