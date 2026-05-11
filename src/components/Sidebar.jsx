import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Cpu,
  FolderKanban,
  GraduationCap,
  Mail,
  Share2,
  Moon,
  Sun,
  Download,
  Menu,
  X,
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home', id: 'home', href: '#home', icon: Home },
  { name: 'About', id: 'about', href: '#about', icon: User },
  { name: 'Skills', id: 'skills', href: '#skills', icon: Cpu },
  { name: 'Projects', id: 'projects', href: '#projects', icon: FolderKanban },
  { name: 'Education', id: 'education', href: '#education', icon: GraduationCap },
  { name: 'Contact', id: 'contact', href: '#contact', icon: Mail },
  { name: 'Social', id: 'social', href: '#social', icon: Share2 },
];

function scrollToHash(hash, onDone) {
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  onDone?.();
}

const NavButton = ({ link, active, onNavigate }) => {
  const Icon = link.icon;
  const isActive = active === link.id;

  return (
    <li>
      <a
        href={link.href}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(link.href);
        }}
        className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
          isActive
            ? 'text-[var(--text-color)]'
            : 'text-text-muted hover:text-[var(--text-color)]'
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="sidebarActive"
            className="absolute inset-0 rounded-xl bg-primary/15 border border-primary/25 shadow-[0_0_24px_rgba(5,150,105,0.12)]"
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          />
        )}
        <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/[0.04] dark:bg-white/[0.06]">
          <Icon size={18} className={isActive ? 'text-primary' : ''} strokeWidth={2} />
        </span>
        <span className="relative z-10">{link.name}</span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavigate = useCallback((href) => {
    scrollToHash(href, () => setMobileOpen(false));
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);

    const updateActive = () => {
      const headerOffset = window.innerWidth >= 1024 ? 0 : 72;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOffset + 120 && rect.bottom >= headerOffset + 40) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  const sidebarInner = (
    <>
      <div className="flex items-center justify-between gap-3 px-1 pb-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('#home');
          }}
          className="group flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-600 text-base font-bold tracking-tight text-white shadow-[0_8px_32px_rgba(5,150,105,0.35)] ring-2 ring-white/30 transition-transform duration-300 group-hover:scale-[1.03]">
            SS
          </span>
          <div className="min-w-0 text-left">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Portfolio</p>
            <p className="truncate font-semibold text-[var(--text-color)]">Shloka Shetty</p>
          </div>
        </a>
        <button
          type="button"
          onClick={toggleTheme}
          className="relative hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-glass-border bg-black/[0.03] transition-colors hover:border-primary/40 dark:bg-white/[0.05] lg:flex"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <motion.span
            initial={false}
            animate={{ rotate: theme === 'dark' ? 0 : 180 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="flex"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-primary" />
            )}
          </motion.span>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto pr-1" aria-label="Primary">
        <p className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted">Navigate</p>
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <NavButton key={link.id} link={link} active={activeSection} onNavigate={handleNavigate} />
          ))}
        </ul>
      </nav>

      <div className="mt-auto space-y-3 border-t border-glass-border pt-6">
        <a
          href="/resume.pdf"
          download="Shloka_Shetty_Resume.pdf"
          className="group flex w-full items-center justify-center gap-2 rounded-xl border border-primary/35 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary shadow-[0_0_24px_rgba(5,150,105,0.12)] transition-all hover:bg-primary hover:text-white hover:shadow-[0_12px_40px_rgba(5,150,105,0.35)]"
        >
          <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
          Download Resume
        </a>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-3 border-b border-glass-border bg-[var(--bg-color)]/80 px-4 py-3 backdrop-blur-xl lg:hidden">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('#home');
          }}
          className="flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-sm font-bold text-white shadow-[0_6px_24px_rgba(5,150,105,0.35)]">
            SS
          </span>
          <span className="font-semibold text-[var(--text-color)]">Shloka Shetty</span>
        </a>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border bg-black/[0.03] dark:bg-white/[0.05]"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-primary" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border bg-black/[0.03] dark:bg-white/[0.05]"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Desktop sidebar */}
      <aside
        className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] flex-col border-r border-glass-border bg-[var(--bg-color)]/65 p-6 backdrop-blur-2xl lg:flex"
        aria-label="Sidebar"
      >
        {sidebarInner}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
              aria-label="Close menu overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 36 }}
              className="fixed left-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col border-r border-glass-border bg-[var(--bg-color)]/95 p-6 pt-20 backdrop-blur-2xl lg:hidden"
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
              {sidebarInner}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
