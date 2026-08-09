"use client";
import { motion } from "framer-motion";
import { SKILLS } from "../constants/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d1326] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-cyan">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide border-b border-white/10 pb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="flex items-center gap-3 bg-white/5 rounded-lg p-3 transition-colors border border-white/5"
                    >
                      <Icon className="text-cyan text-xl" />
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
