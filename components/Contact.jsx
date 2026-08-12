"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "../constants/data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Build mailto link
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In <span className="text-cyan">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass p-8 rounded-2xl flex flex-col gap-8 h-full border border-white/5">
              <h3 className="text-2xl font-bold text-white tracking-wide">Contact Information</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-cyan transition-colors group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-cyan/10 transition-colors">
                    <Mail size={24} className="text-cyan" />
                  </div>
                  <span className="font-medium truncate">{PERSONAL_INFO.email}</span>
                </a>
                
                <div className="flex items-center gap-4 text-slate-300 group cursor-default">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-cyan/10 transition-colors">
                    <Phone size={24} className="text-cyan" />
                  </div>
                  <span className="font-medium truncate">{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-cyan hover:text-navy hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all text-slate-300">
                    <FaGithub size={24} />
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-cyan hover:text-navy hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all text-slate-300">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 glass p-8 rounded-2xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto md:ml-auto px-8 py-3 bg-cyan text-navy font-bold rounded-lg hover:bg-cyan/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_4px_14px_rgba(0,212,255,0.4)]"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSuccess ? (
                  <span>Sent Successfully!</span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
