import React, { useState } from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
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
      <div className="flex flex-col lg:flex-row gap-16 relative">
        {/* Background glow for the contact section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[150px] pointer-events-none z-[-1]" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 space-y-10"
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-6">Contact Information</h3>
            <p className="text-text-muted leading-relaxed">
              Ready to start your next big project? Reach out via email or phone, or simply fill out the form.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(255,16,122,0.4)]">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wider text-text-muted uppercase mb-1">Email</h4>
                <a href="mailto:anushha.shahe06@gmail.com" className="text-lg font-medium text-text-color hover:text-primary transition-colors">
                  anushha.shahe06@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(255,16,122,0.4)]">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wider text-text-muted uppercase mb-1">Phone</h4>
                <a href="tel:+919326123303" className="text-lg font-medium text-text-color hover:text-primary transition-colors">
                  +91 93261 23303
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(255,16,122,0.4)]">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wider text-text-muted uppercase mb-1">Location</h4>
                <p className="text-lg font-medium text-text-color">
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/3"
        >
          <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-text-muted ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-5 py-4 bg-black/5 dark:bg-white/5 border border-glass-border rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 backdrop-blur-md"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-text-muted ml-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-5 py-4 bg-black/5 dark:bg-white/5 border border-glass-border rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 backdrop-blur-md"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <label htmlFor="subject" className="text-sm font-bold text-text-muted ml-1">Subject</label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-5 py-4 bg-black/5 dark:bg-white/5 border border-glass-border rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 backdrop-blur-md"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-bold text-text-muted ml-1">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-5 py-4 bg-black/5 dark:bg-white/5 border border-glass-border rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 backdrop-blur-md resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-hover text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(255,16,122,0.6)] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
