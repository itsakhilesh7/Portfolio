"use client";
import { motion } from "framer-motion";
import { AWARDS } from "../constants/data";

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-[#0d1326] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Honors & <span className="text-cyan">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {AWARDS.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-cyan/20 bg-gradient-to-br from-cyan/5 to-transparent relative group"
              >
                {/* Decorative glow behind icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-cyan/20 rounded-full blur-xl group-hover:bg-cyan/40 transition-colors"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center text-center md:text-left">
                  <div className="shrink-0 p-4 bg-navy rounded-full border border-cyan/30 text-cyan mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,212,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-all">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
