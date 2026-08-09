"use client";
import { motion } from "framer-motion";
import { LEADERSHIP } from "../constants/data";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Leadership & <span className="text-cyan">Involvement</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {LEADERSHIP.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 border border-white/5 hover:border-cyan/30 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 p-4 bg-white/5 rounded-2xl text-cyan group-hover:bg-cyan/10 transition-colors">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                    <h4 className="text-cyan font-medium mb-1">{item.organization}</h4>
                    <span className="inline-block text-xs font-semibold text-slate-400 mb-4 bg-white/5 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
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
