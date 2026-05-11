import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: `${(i * 17.7 + 13) % 100}%`,
        top: `${(i * 23.1 + 7) % 100}%`,
        duration: 8 + (i % 9) * 0.7,
        delay: (i % 6) * 0.4,
        size: 1 + (i % 3),
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-[20%] -top-[15%] h-[55vmin] w-[55vmin] rounded-full bg-[var(--blob-1)] blur-[120px] animate-blob" />
      <div className="animation-delay-2000 absolute -right-[15%] top-[15%] h-[45vmin] w-[45vmin] rounded-full bg-[var(--blob-2)] blur-[100px] animate-blob" />
      <div className="animation-delay-4000 absolute bottom-[-20%] left-[25%] h-[60vmin] w-[60vmin] rounded-full bg-[var(--blob-3)] blur-[130px] animate-blob" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(5,150,105,0.06),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_50%)]" />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/25 dark:bg-primary/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.15, 0.55, 0.15],
            y: [0, -18, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;
