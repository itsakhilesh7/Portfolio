"use client";
import { motion } from "framer-motion";
import { fadeUpVariant } from "../utils/motion";
import { EDUCATION } from "../constants/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0d1326]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          {...fadeUpVariant}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-cyan">Education</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              {...fadeUpVariant}
              transition={{ ...fadeUpVariant.transition, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl glass-hover relative border border-white/5 h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-cyan bg-cyan/10 p-4 rounded-xl">
                  <GraduationCap size={32} />
                </div>
                <span className="inline-block px-3 py-1 bg-white/10 text-slate-300 text-sm font-semibold rounded-full">
                  {edu.duration}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-lg font-medium text-cyan mb-4">{edu.institution}</h4>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-slate-300 font-mono text-sm">
                  <span className="text-cyan mr-2">▹</span>
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 z-0"></div>
    </section>
  );
}
