import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Electronics and Computer Science Engineering',
      school: 'Fr.CRCE Bandra',
      period: 'Present (2nd Year)',
      description:
        'Currently pursuing my degree, focusing on core engineering principles and modern software development practices.',
      icon: <GraduationCap size={24} />,
    },
  ];

  return (
    <Section
      id="education"
      title="Education & Experience"
      subtitle="My academic and professional background."
    >
      <div className="relative mx-auto mt-4 max-w-4xl">
        <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-primary/60 via-emerald-500/40 to-transparent shadow-[0_0_12px_rgba(5,150,105,0.4)] md:left-1/2 md:block md:-translate-x-1/2" />

        <div className="space-y-14 md:space-y-16">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.55 }}
              className={`relative flex flex-col items-center gap-8 md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-8 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-primary bg-[var(--bg-color)] text-primary shadow-[0_0_24px_rgba(5,150,105,0.5)] backdrop-blur-md md:left-1/2 md:flex md:-translate-x-1/2">
                {item.icon}
              </div>

              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`glass rounded-2xl p-8 transition-shadow duration-300 hover:border-primary/35 hover:shadow-[0_20px_48px_rgba(5,150,105,0.12)] ${
                    index % 2 === 0 ? 'md:mr-10 md:text-right' : 'md:ml-10'
                  }`}
                >
                  <div
                    className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[var(--text-color)]">{item.degree}</h3>
                  <h4 className="mb-4 text-lg font-medium text-text-muted">{item.school}</h4>
                  <p className="leading-relaxed text-text-muted">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
