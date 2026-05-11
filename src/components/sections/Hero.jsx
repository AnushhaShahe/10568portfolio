import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative scroll-mt-[5.5rem] overflow-hidden pb-12 pt-4 lg:scroll-mt-10 lg:pb-20 lg:pt-2"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/5" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_0_24px_rgba(5,150,105,0.15)] backdrop-blur-md"
        >
          <Sparkles size={14} strokeWidth={2.5} className="text-primary" />
          Welcome to my universe
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.05] tracking-tight text-[var(--text-color)]"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient drop-shadow-[0_0_40px_rgba(5,150,105,0.25)]">Shloka Shetty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl"
        >
          A passionate developer based in Mumbai, crafting futuristic, premium, and highly responsive web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-[0_12px_40px_rgba(5,150,105,0.35)] ring-1 ring-white/25 transition-shadow hover:shadow-[0_16px_48px_rgba(5,150,105,0.45)]"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Shloka_Shetty_Resume.pdf"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-2xl border border-glass-border bg-surface-color/80 px-8 py-4 text-sm font-bold text-[var(--text-color)] shadow-[0_8px_32px_rgba(5,80,50,0.06)] backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_12px_36px_rgba(5,150,105,0.12)] dark:shadow-none"
          >
            <Download size={18} />
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 flex items-center gap-6 border-t border-glass-border pt-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Social</span>
          <div className="flex items-center gap-5">
            {[
              { icon: <FaGithub size={24} />, href: '#' },
              { icon: <FaLinkedin size={24} />, href: '#' },
              { icon: <FaTwitter size={24} />, href: '#' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -4, scale: 1.08 }}
                className="text-text-muted transition-colors hover:text-primary"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
