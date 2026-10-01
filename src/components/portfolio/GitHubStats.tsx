"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Star, GitFork, Users, BookMarked, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getGitHubStats } from "@/lib/github.functions";
import { fadeUpVariant } from "@/lib/portfolio-motion";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

function heatColor(count: number) {
  if (count === 0) return "rgba(255,255,255,0.06)";
  if (count < 3) return "rgba(0,212,255,0.25)";
  if (count < 6) return "rgba(0,212,255,0.45)";
  if (count < 10) return "rgba(0,212,255,0.7)";
  return "rgba(0,212,255,1)";
}

export default function GitHubStats() {
  const fetchStats = useServerFn(getGitHubStats);
  const { data, isLoading } = useQuery({
    queryKey: ["github-stats"],
    queryFn: () => fetchStats(),
    staleTime: 1000 * 60 * 10,
  });

  const profileUrl = data?.profile?.url ?? PERSONAL_INFO.github;

  return (
    <section id="github" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUpVariant} className="mb-14 text-center">
          <p className="text-cyan font-mono text-sm mb-3 tracking-widest">/ OPEN SOURCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">GitHub Activity</h2>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-slate-400 hover:text-cyan transition-colors text-sm font-mono"
          >
            <FaGithub size={16} />
            @{data?.profile?.login ?? "itsakhilesh7"}
          </a>
        </motion.div>

        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass rounded-xl h-24 animate-pulse" />
            ))}
          </div>
        )}

        {!isLoading && !data?.ok && (
          <motion.div {...fadeUpVariant} className="glass rounded-xl p-8 text-center">
            <p className="text-slate-400 mb-4">Live GitHub data is unavailable right now.</p>
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-bold rounded-lg"
            >
              <FaGithub size={18} /> View GitHub Profile
            </a>
          </motion.div>
        )}

        {!isLoading && data?.ok && (
          <>
            {/* Stat cards */}
            <motion.div {...fadeUpVariant} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Public Repos", value: data.profile?.publicRepos ?? 0, icon: BookMarked },
                { label: "Total Stars", value: data.totalStars, icon: Star },
                { label: "Followers", value: data.profile?.followers ?? 0, icon: Users },
                { label: "Following", value: data.profile?.following ?? 0, icon: Activity },
              ].map((stat) => (
                <div key={stat.label} className="glass glass-hover rounded-xl p-6 text-center">
                  <stat.icon className="mx-auto mb-2 text-cyan" size={20} />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Languages */}
            {data.languages.length > 0 && (
              <motion.div {...fadeUpVariant} className="glass rounded-xl p-6 mb-10">
                <h3 className="text-sm font-mono text-slate-400 mb-4 tracking-widest">TOP LANGUAGES</h3>
                <div className="flex h-2 rounded-full overflow-hidden mb-4">
                  {data.languages.map((lang, i) => (
                    <div
                      key={lang.name}
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: `rgba(0,212,255,${1 - i * 0.14})`,
                      }}
                    />
                  ))}
                </div>
                <ul className="flex flex-wrap gap-3">
                  {data.languages.map((lang) => (
                    <li key={lang.name} className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-full">
                      {lang.name} · {lang.percent}%
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Contribution graph */}
            {data.contributions && (
              <motion.div {...fadeUpVariant} className="glass rounded-xl p-6 mb-10 overflow-x-auto">
                <h3 className="text-sm font-mono text-slate-400 mb-4 tracking-widest">
                  {data.contributions.total} CONTRIBUTIONS IN THE LAST YEAR
                </h3>
                <div className="flex gap-[3px] min-w-max">
                  {data.contributions.weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.days.map((day) => (
                        <div
                          key={day.date}
                          title={`${day.count} contributions on ${day.date}`}
                          className="w-[10px] h-[10px] rounded-[2px]"
                          style={{ backgroundColor: heatColor(day.count) }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Live repos */}
            {data.repos.length > 0 && (
              <motion.div {...fadeUpVariant} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass glass-hover rounded-xl p-6 flex flex-col group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FaGithub className="text-cyan" size={18} />
                      <h4 className="font-bold text-white group-hover:text-cyan transition-colors truncate">
                        {repo.name}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed flex-grow mb-4 line-clamp-3">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-cyan inline-block" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={12} /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} /> {repo.forks}
                      </span>
                    </div>
                  </a>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
