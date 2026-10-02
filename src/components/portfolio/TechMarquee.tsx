"use client";

import { FaJava, FaPython, FaAws, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiMongodb,
} from "react-icons/si";

const TECH = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: FaReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Python", Icon: FaPython },
  { name: "Java", Icon: FaJava },
  { name: "Supabase", Icon: SiSupabase },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "AWS", Icon: FaAws },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: FaGithub },
];

export default function TechMarquee() {
  // Render the list twice so the -50% translate loop is seamless
  const items = [...TECH, ...TECH];

  return (
    <section aria-label="Technologies I work with" className="py-10 relative overflow-hidden border-y border-white/5 bg-navy/60">
      <div className="marquee-mask">
        <div className="marquee-track flex w-max items-center gap-12 px-6">
          {items.map(({ name, Icon }, i) => (
            <div
              key={`${name}-${i}`}
              className="group flex items-center gap-3 text-slate-400 hover:text-cyan transition-colors duration-300 shrink-0"
              aria-hidden={i >= TECH.length}
            >
              <Icon className="text-2xl transition-transform duration-300 group-hover:scale-125" />
              <span className="text-sm font-mono tracking-wide whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
