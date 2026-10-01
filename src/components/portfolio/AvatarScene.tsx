"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import avatarVideo from "@/assets/avatar-loop.mp4.asset.json";
import avatarPoster from "@/assets/avatar-poster.png.asset.json";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export default function AvatarScene() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-cyan/20 rounded-full blur-3xl opacity-60" />

      {/* Rotating neon ring */}
      <div
        className="absolute -inset-3 rounded-full border border-cyan/30"
        style={{
          maskImage: "conic-gradient(from 0deg, transparent 0deg, black 90deg, transparent 200deg, black 300deg)",
          animation: prefersReducedMotion ? undefined : "ring-spin 14s linear infinite",
        }}
      />

      <div className="relative w-full h-full rounded-full overflow-hidden border border-cyan/40 shadow-[0_0_60px_rgba(0,212,255,0.35)]">
        {prefersReducedMotion ? (
          <img
            src={avatarPoster.url}
            alt={`Illustrated avatar of ${PERSONAL_INFO.name}`}
            width={628}
            height={604}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={avatarVideo.url}
            poster={avatarPoster.url}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={`Animated avatar of ${PERSONAL_INFO.name}`}
            className="w-full h-full object-cover"
          />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
      </div>
    </motion.div>
  );
}
