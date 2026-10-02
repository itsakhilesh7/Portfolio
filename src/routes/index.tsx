import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import TechMarquee from "@/components/portfolio/TechMarquee";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import GitHubStats from "@/components/portfolio/GitHubStats";
import Leadership from "@/components/portfolio/Leadership";
import Awards from "@/components/portfolio/Awards";
import Contact from "@/components/portfolio/Contact";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${PERSONAL_INFO.name} | Full Stack Developer` },
      { name: "description", content: `Portfolio of ${PERSONAL_INFO.name}, a passionate Full Stack Developer specializing in Next.js.` },
      { property: "og:title", content: `${PERSONAL_INFO.name} | Full Stack Developer` },
      { property: "og:description", content: `Portfolio of ${PERSONAL_INFO.name}, a passionate Full Stack Developer specializing in Next.js.` },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${PERSONAL_INFO.name} | Full Stack Developer` },
      { name: "twitter:description", content: `Portfolio of ${PERSONAL_INFO.name}, a passionate Full Stack Developer specializing in Next.js.` },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechMarquee />
      <Experience />
      <Education />
      <Projects />
      <GitHubStats />
      <Leadership />
      <Awards />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/10 mt-auto glass bg-navy/80">
        <p>
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs">Built with TanStack Start, Tailwind CSS, & Framer Motion</p>
      </footer>
    </main>
  );
}
