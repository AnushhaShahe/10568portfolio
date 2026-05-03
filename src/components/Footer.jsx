import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass border-t-glass-border border-b-0 border-x-0 mt-20 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tighter inline-block mb-3">
              K<span className="text-primary">T</span>
            </a>
            <p className="text-text-muted font-medium text-sm max-w-xs">
              Designing and building the next generation of premium web experiences.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <FaGithub size={20} />, href: "#" },
              { icon: <FaTwitter size={20} />, href: "#" },
              { icon: <FaLinkedin size={20} />, href: "#" },
              { icon: <FaInstagram size={20} />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border flex items-center justify-center text-text-color hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,16,122,0.3)]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-4 glass rounded-2xl text-text-color hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border text-center text-sm text-text-muted font-medium">
          <p>&copy; {new Date().getFullYear()} Kristina K Thomas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
