"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let currentProgress = 0;
    
    // Simulate non-linear loading
    const interval = setInterval(() => {
      const remaining = 100 - currentProgress;
      // Add a random amount between 1% and 15% of the remaining progress
      const increment = Math.max(1, Math.floor(Math.random() * (remaining * 0.15)));
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Hold at 100% for a moment
      }
      setProgress(currentProgress);
    }, 150); // Update every 150ms

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy"
        >
          <div className="flex flex-col items-center gap-8 w-full max-w-xs px-6">
            {/* Logo or text animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-bold text-white tracking-widest flex items-center gap-1"
            >
              <span className="text-cyan">&lt;</span>
              Akhilesh
              <span className="text-cyan">/&gt;</span>
            </motion.div>

            {/* Progress bar container */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-cyan"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.15 }}
              />
            </div>

            {/* Percentage text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan font-mono text-sm tracking-widest"
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
