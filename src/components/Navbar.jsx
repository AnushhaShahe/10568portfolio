import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-6'
      }`}
    >
      {/* Glass Background that fades in on scroll */}
      <div 
        className={`absolute inset-0 bg-surface-color backdrop-blur-xl border-b border-glass-border transition-opacity duration-500 ${
          isScrolled ? 'opacity-100 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'opacity-0'
        }`}
      />
      
      <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-between z-10">
        <a href="#home" className="text-2xl font-bold tracking-tighter group">
          K<span className="text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,16,122,0.8)]">T</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-surface-color/50 backdrop-blur-md px-2 py-1 rounded-full border border-glass-border shadow-sm">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors z-10 block ${
                    activeSection === link.href.substring(1) 
                      ? 'text-white' 
                      : 'text-text-color hover:text-primary'
                  }`}
                  onClick={() => setActiveSection(link.href.substring(1))}
                >
                  {link.name}
                </a>
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary rounded-full -z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center">
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full overflow-hidden group border border-transparent hover:border-glass-border transition-colors"
            aria-label="Toggle Theme"
          >
            <div className="absolute inset-0 bg-text-color/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 relative z-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-transparent hover:border-glass-border"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-color"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 md:hidden glass border-t-0 border-x-0 rounded-b-3xl"
          >
            <ul className="flex flex-col py-6 px-6 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(link.href.substring(1));
                    }}
                    className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all ${
                      activeSection === link.href.substring(1)
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-text-color hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
