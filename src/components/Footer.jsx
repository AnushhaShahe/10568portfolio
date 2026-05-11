import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-8 border-t border-glass-border bg-[var(--bg-color)]/60 py-10 backdrop-blur-xl">
      <div className="absolute left-1/2 top-0 h-px w-1/3 max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8 lg:px-12">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-[var(--text-color)]">Shloka Shetty</p>
          <p className="mt-1 max-w-md text-sm text-text-muted">
            Designing and building the next generation of premium web experiences.
          </p>
        </div>
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="glass flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-[var(--text-color)] transition-colors hover:border-primary/40 hover:text-primary"
          aria-label="Scroll to top"
        >
          Back to top
          <ArrowUp size={18} />
        </motion.button>
      </div>
      <p className="mt-8 text-center text-xs text-text-muted">
        &copy; {new Date().getFullYear()} Shloka Shetty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
