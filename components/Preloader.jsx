"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear increments feel more "alive" than a flat ramp
        const next = prev + (100 - prev) * 0.12 + 1.5;
        return next >= 100 ? 100 : Math.floor(next);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
        >
          {/* Ambient glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2 }}
            className="absolute w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[120px]"
          />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex items-center gap-1 text-4xl md:text-5xl font-display font-bold text-white tracking-wider"
          >
            <span className="text-cyan">&lt;</span>
            <motion.span
              initial={{ letterSpacing: "0.4em", opacity: 0 }}
              animate={{ letterSpacing: "0.05em", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Akhilesh
            </motion.span>
            <span className="text-cyan">/&gt;</span>
          </motion.div>

          {/* Progress bar */}
          <div className="relative z-10 mt-10 w-56 md:w-72 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan to-blue-500 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          </div>

          {/* Progress percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 mt-4 text-xs font-mono text-slate-400 tracking-[0.3em]"
          >
            {String(progress).padStart(3, "0")}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
