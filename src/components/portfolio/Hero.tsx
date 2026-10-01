"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import AvatarScene from "./AvatarScene";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const tick = () => {
    const i = loopNum % PERSONAL_INFO.heroTyping.length;
    const fullText = PERSONAL_INFO.heroTyping[i] ?? "";
    const updatedText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else if (isDeleting) {
      setTypingSpeed(50);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, typingSpeed, loopNum]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Avatar — first on mobile, right on desktop */}
        <div className="lg:order-2">
          <AvatarScene />
        </div>

        <div className="lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan font-mono text-lg mb-4 tracking-wide">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {PERSONAL_INFO.name}.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-400 mb-8 min-h-[52px]">
              I am a <span className="text-gradient border-r-2 border-cyan pr-1 animate-pulse">{displayText}</span>
            </h2>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-slate-300 mb-10 leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
          >
            <button
              onClick={() => handleNavClick("#projects")}
              className="group px-8 py-3 bg-cyan text-navy font-bold rounded-lg hover:bg-cyan/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)]"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="group px-8 py-3 glass glass-hover text-white rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
            >
              <Mail className="group-hover:text-cyan transition-colors" size={20} />
              Contact Me
            </button>
            <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0 sm:ml-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="p-3 glass glass-hover text-slate-300 hover:text-cyan rounded-full transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-3 glass glass-hover text-slate-300 hover:text-cyan rounded-full transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noreferrer"
                title="Download Resume"
                className="p-3 glass glass-hover text-slate-300 hover:text-cyan rounded-full transition-all"
              >
                <Download size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
