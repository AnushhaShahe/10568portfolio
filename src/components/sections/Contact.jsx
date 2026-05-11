import { useState } from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to collaborate? Let's talk."
    >
      <div className="relative flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(100%,480px)] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full space-y-10 lg:w-[38%]"
        >
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[var(--text-color)] sm:text-3xl">Contact Information</h3>
            <p className="leading-relaxed text-text-muted">
              Ready to start your next big project? Reach out via email or phone, or simply fill out the form.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-glass-border bg-primary/10 text-primary shadow-[0_0_20px_rgba(5,150,105,0.15)] transition-transform duration-300 group-hover:scale-105">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">Email</h4>
                <a
                  href="mailto:shloka.shetty1555@gmail.com"
                  className="text-lg font-medium text-[var(--text-color)] transition-colors hover:text-primary"
                >
                  shloka.shetty1555@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-glass-border bg-primary/10 text-primary shadow-[0_0_20px_rgba(5,150,105,0.15)] transition-transform duration-300 group-hover:scale-105">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">Phone</h4>
                <a
                  href="tel:+917208530439"
                  className="text-lg font-medium text-[var(--text-color)] transition-colors hover:text-primary"
                >
                  +91 72085 30439
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-glass-border bg-primary/10 text-primary shadow-[0_0_20px_rgba(5,150,105,0.15)] transition-transform duration-300 group-hover:scale-105">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">Location</h4>
                <p className="text-lg font-medium text-[var(--text-color)]">Mumbai, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full flex-1"
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 sm:p-10">
            <h3 className="mb-8 text-2xl font-bold text-[var(--text-color)]">Send a Message</h3>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="ml-1 text-sm font-bold text-text-muted">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-2xl border border-glass-border bg-black/[0.04] px-5 py-4 backdrop-blur-md transition-all placeholder:text-text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 dark:bg-white/[0.06]"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="ml-1 text-sm font-bold text-text-muted">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-2xl border border-glass-border bg-black/[0.04] px-5 py-4 backdrop-blur-md transition-all placeholder:text-text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 dark:bg-white/[0.06]"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <label htmlFor="subject" className="ml-1 text-sm font-bold text-text-muted">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full rounded-2xl border border-glass-border bg-black/[0.04] px-5 py-4 backdrop-blur-md transition-all placeholder:text-text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 dark:bg-white/[0.06]"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-8 space-y-2">
              <label htmlFor="message" className="ml-1 text-sm font-bold text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-2xl border border-glass-border bg-black/[0.04] px-5 py-4 backdrop-blur-md transition-all placeholder:text-text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 dark:bg-white/[0.06]"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === 'sending'}
              whileHover={{ scale: formStatus === 'sending' ? 1 : 1.01, y: formStatus === 'sending' ? 0 : -2 }}
              whileTap={{ scale: formStatus === 'sending' ? 1 : 0.99 }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-emerald-600 py-4 text-lg font-bold text-white shadow-[0_12px_40px_rgba(5,150,105,0.35)] transition-shadow hover:shadow-[0_16px_48px_rgba(5,150,105,0.45)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {formStatus === 'sending' ? (
                'Sending...'
              ) : formStatus === 'success' ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
