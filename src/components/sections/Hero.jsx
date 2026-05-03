import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* Text Content */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full glass text-primary font-medium mb-8 text-sm tracking-wide shadow-[0_0_15px_rgba(255,16,122,0.2)]">
              ✨ Welcome to my universe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]"
          >
            Hi, I'm <br />
            <span className="text-gradient">Kristina K Thomas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl leading-relaxed"
          >
            A passionate developer based in Mumbai, crafting futuristic, premium, and highly responsive web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-hover transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,16,122,0.4)] hover:shadow-[0_0_30px_rgba(255,16,122,0.6)] hover:-translate-y-1"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="px-8 py-4 glass rounded-2xl font-bold hover:bg-white/10 dark:hover:bg-black/10 transition-all flex items-center gap-2 hover:-translate-y-1 group"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: <FaGithub size={26} />, href: "#" },
              { icon: <FaLinkedin size={26} />, href: "#" },
              { icon: <FaTwitter size={26} />, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300 drop-shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
