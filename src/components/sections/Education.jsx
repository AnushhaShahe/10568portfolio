import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.E. in Electronics and Computer Science Engineering",
      school: "Fr.CRCE Bandra",
      period: "Present (2nd Year)",
      description: "Currently pursuing my degree, focusing on core engineering principles and modern software development practices.",
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <Section
      id="education"
      title="Education & Experience"
      subtitle="My academic and professional background."
    >
      <div className="relative max-w-4xl mx-auto mt-12">
        {/* Timeline Line - Glowing */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2 hidden md:block rounded-full shadow-[0_0_15px_rgba(255,16,122,0.5)]" />

        <div className="space-y-16">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot - Glowing */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-surface-color border-4 border-primary items-center justify-center text-primary z-10 shadow-[0_0_20px_rgba(255,16,122,0.8)] backdrop-blur-md">
                {item.icon}
              </div>

              {/* Content Card - Glassmorphism */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className={`glass p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,16,122,0.15)] ${
                  index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12'
                }`}>
                  <div className={`flex items-center gap-2 mb-3 text-primary font-bold tracking-wider text-sm ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                  <h4 className="text-lg text-text-muted mb-4 font-medium">{item.school}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
