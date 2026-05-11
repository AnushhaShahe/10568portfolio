import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Section = ({ id, children, className, title, subtitle }) => {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-[5.5rem] py-16 sm:py-20 lg:scroll-mt-10',
        className
      )}
    >
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10 mb-12 max-w-3xl lg:mb-16"
        >
          {title && (
            <h2 className="mb-4 flex items-center gap-4 text-3xl font-bold tracking-tight text-[var(--text-color)] sm:text-4xl">
              <span
                className="h-10 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-primary to-emerald-400 shadow-[0_0_20px_rgba(5,150,105,0.45)]"
                aria-hidden
              />
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="max-w-2xl pl-6 text-base leading-relaxed text-text-muted sm:text-lg">{subtitle}</p>
          )}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
