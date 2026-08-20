"use client";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Work <span className="text-cyan">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line connecting timeline nodes */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan/20 transform -translate-x-1/2"></div>

          {EXPERIENCE.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-navy border-2 border-cyan rounded-full transform -translate-x-1/2 mt-6 md:mt-0 z-10 shadow-[0_0_10px_rgba(0,212,255,0.6)]"></div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`pl-12 md:pl-0 md:w-5/12 w-full pt-0`}
                >
                  <div className="glass p-6 md:p-8 rounded-2xl glass-hover relative border border-white/5">
                    <span className="inline-block px-3 py-1 bg-cyan/10 text-cyan text-sm font-semibold rounded-full mb-4">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-slate-400 mb-4">{exp.company}</h4>
                    <ul className="space-y-3 text-slate-300 text-sm md:text-base">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-cyan mt-1 shrink-0">▹</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Spacer */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 z-0"></div>
    </section>
  );
}
