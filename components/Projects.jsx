"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeUpVariant, staggerContainer, itemFadeUp } from "../utils/motion";
import { PROJECTS } from "../constants/data";



export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d1326] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          {...fadeUpVariant}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-cyan">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUp}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group border border-white/5 hover:border-cyan/30 hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-cyan bg-cyan/10 p-3 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-4">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan transition-colors">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
