"use client";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Hi! I&apos;m {PERSONAL_INFO.name.split(" ")[0]}, a self-driven{" "}
              <span className="text-white font-medium">B.Tech Computer Science</span>{" "}
              student and full-stack developer. My passion lies in crafting 
              performant, scalable, and visually stunning web applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I&apos;m not coding, I&apos;m involved in my university&apos;s tech community,
              leading initiatives in the IoT Club and Apex Community. I thrive on
              learning new technologies and solving complex real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {PERSONAL_INFO.stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/5"
              >
                <div className="text-4xl font-bold text-cyan mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
