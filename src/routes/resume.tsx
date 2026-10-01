import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCE, PROJECTS, SKILLS, AWARDS, LEADERSHIP } from "@/lib/portfolio-data";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: `Resume | ${PERSONAL_INFO.name}` },
      { name: "description", content: `Resume of ${PERSONAL_INFO.name}, Full Stack Developer.` },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="min-h-screen bg-navy text-slate-300 py-12 px-4 print:py-0 print:bg-white print:text-slate-900">
      <div className="max-w-4xl mx-auto bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden border border-white/10 print:shadow-none print:border-0 print:rounded-none print:bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan/10 to-blue-500/10 p-10 border-b border-white/10 print:bg-slate-100 print:border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 print:text-slate-900">{PERSONAL_INFO.name}</h1>
              <p className="text-lg text-cyan font-medium mb-4 print:text-blue-700">{PERSONAL_INFO.role}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-cyan print:text-slate-700">
                  <Mail size={14} />
                  {PERSONAL_INFO.email}
                </a>
                <span className="flex items-center gap-1.5 print:text-slate-700">
                  <Phone size={14} />
                  {PERSONAL_INFO.phone}
                </span>
                <span className="flex items-center gap-1.5 print:text-slate-700">
                  <MapPin size={14} />
                  India
                </span>
              </div>
            </div>
            <div className="flex gap-3 print:hidden">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan/10 hover:border-cyan/30 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-cyan" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan/10 hover:border-cyan/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-cyan" />
              </a>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan text-navy font-semibold hover:bg-cyan/90 transition-colors"
              >
                <Download size={18} />
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>

        <div className="p-10 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wider border-b border-cyan/30 pb-2 print:text-slate-900 print:border-slate-300">
              Summary
            </h2>
            <p className="leading-relaxed">{PERSONAL_INFO.shortBio}</p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-cyan/30 pb-2 print:text-slate-900 print:border-slate-300">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between md:items-start gap-1">
                  <div>
                    <h3 className="font-bold text-white print:text-slate-900">{edu.degree}</h3>
                    <p className="text-cyan print:text-blue-700">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-slate-400 md:text-right print:text-slate-600">
                    <p>{edu.duration}</p>
                    <p>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-cyan/30 pb-2 print:text-slate-900 print:border-slate-300">
              Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <div key={i}>
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-1 mb-2">
                    <div>
                      <h3 className="font-bold text-white print:text-slate-900">{exp.role}</h3>
                      <p className="text-cyan print:text-blue-700">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-400 md:text-right print:text-slate-600">{exp.duration}</span>
                  </div>
                  <ul className="space-y-1.5 ml-4 list-disc marker:text-cyan">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-cyan/30 pb-2 print:text-slate-900 print:border-slate-300">
              Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((project, i) => (
                <div key={i}>
                  <h3 className="font-bold text-white print:text-slate-900">{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded-full bg-cyan/10 text-cyan print:bg-slate-100 print:text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-cyan/30 pb-2 print:text-slate-900 print:border-slate-300">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILLS.map((category, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-white mb-2 print:text-slate-900">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, j) => (
                      <span key={j} className="text-sm text-slate-400 print:text-slate-600">
                        {skill.name}{j < category.items.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership & Awards */}
          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-cyan/30 pb-2 print:text-slate-900 print:border-slate-300">
                Leadership
              </h2>
              <div className="space-y-3">
                {LEADERSHIP.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-white print:text-slate-900">{item.role}</h3>
                    <p className="text-sm text-cyan print:text-blue-700">{item.organization}</p>
                    <p className="text-xs text-slate-400 print:text-slate-600">{item.duration}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-cyan/30 pb-2 print:text-slate-900 print:border-slate-300">
                Awards
              </h2>
              <div className="space-y-3">
                {AWARDS.map((award, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-white print:text-slate-900">{award.title}</h3>
                    <p className="text-sm text-slate-400 print:text-slate-600">{award.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 print:hidden">
        <Link to="/" className="text-cyan hover:underline text-sm">
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
}
