import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Section = ({ id, children, className, title, subtitle }) => {
  return (
    <section id={id} className={cn("py-24 px-6 max-w-6xl mx-auto relative", className)}>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20 relative z-10"
        >
          {title && (
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight relative inline-block">
              {title}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
            </h2>
          )}
          {subtitle && <p className="text-lg text-text-muted max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
