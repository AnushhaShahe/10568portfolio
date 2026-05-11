import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const socials = [
  { name: 'GitHub', href: '#', icon: FaGithub },
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'Instagram', href: '#', icon: FaInstagram },
];

const Social = () => {
  return (
    <Section
      id="social"
      title="Social Links"
      subtitle="Connect with me on the platforms below."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {socials.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.name}
              href={item.href}
              aria-label={`${item.name} profile`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(5,150,105,0.12)] dark:hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={22} />
                </span>
                <span className="text-lg font-bold text-[var(--text-color)]">{item.name}</span>
              </div>
              <ArrowUpRight
                size={20}
                className="relative text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden
              />
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
};

export default Social;
