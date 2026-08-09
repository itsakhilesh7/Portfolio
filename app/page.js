import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import { PERSONAL_INFO } from "@/constants/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Awards />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/10 mt-auto glass bg-[#0a0f1e]/80">
        <p>
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs">Built with Next.js, Tailwind CSS, & Framer Motion</p>
      </footer>
    </main>
  );
}
