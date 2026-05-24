"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { profile } from "@/lib/data";
import { TerminalText } from "@/components/hud/TerminalText";
import { GlowButton } from "@/components/hud/GlowButton";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const ArcReactor = dynamic(
  () => import("@/components/three/ArcReactor").then((m) => m.ArcReactor),
  { ssr: false },
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 hud-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      {/* Decorative tracking rings */}
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="relative h-[680px] w-[680px]">
          <div className="absolute inset-0 rounded-full border border-cyan/10 animate-rotate-slow" />
          <div className="absolute inset-10 rounded-full border border-cyan/15 animate-rotate-reverse" />
          <div className="absolute inset-24 rounded-full border border-dashed border-cyan/10 animate-rotate-slow" />
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 px-6 py-16">
        {/* Text column */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.4em] text-cyan/80"
          >
            <span className="h-px w-12 bg-cyan/60" />
            <span>SYSTEM // OPERATOR PROFILE</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 font-display text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-wide"
          >
            <span className="block text-text">VAMSI KRISHNA</span>
            <span className="block text-shimmer">BENDALAM</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 font-mono text-sm text-cyan tracking-widest"
          >
            <TerminalText
              text={`> role: ${profile.title}`}
              startDelay={900}
              speed={28}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-2 font-mono text-xs md:text-sm text-text-dim tracking-wider max-w-xl"
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="mt-6 max-w-xl font-sans text-base text-text-dim leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
            className="mt-8 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { label: "YEARS", value: "5+" },
              { label: "DOMAINS", value: "4" },
              { label: "DELIVERY GAIN", value: "40%+" },
            ].map((s) => (
              <div
                key={s.label}
                className="relative border border-cyan/20 bg-cyan/5 px-3 py-3"
              >
                <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-l border-t border-cyan" />
                <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-cyan" />
                <div className="font-display text-2xl font-bold text-cyan text-glow">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.3em] text-text-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GlowButton
              href={profile.resumeUrl}
              external
              variant="gold"
              icon={<FiDownload />}
            >
              Download Resume
            </GlowButton>
            <GlowButton href="#contact" variant="primary" icon={<FiMail />}>
              Initiate Contact
            </GlowButton>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-8 flex items-center gap-4 font-mono text-[11px] tracking-[0.3em] text-text-dim"
          >
            <span>SOCIAL//</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <FiMail /> Email
            </a>
          </motion.div>
        </div>

        {/* Arc reactor column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="relative aspect-square w-full max-w-[520px] mx-auto"
        >
          {/* Outer concentric rings (CSS) */}
          <div className="absolute inset-0 rounded-full border border-cyan/15 animate-rotate-slow" />
          <div className="absolute inset-6 rounded-full border border-dashed border-cyan/20 animate-rotate-reverse" />
          <div className="absolute inset-14 rounded-full border border-cyan/10" />

          {/* Crosshair brackets */}
          {[
            "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
            "bottom-0 left-1/2 -translate-x-1/2 translate-y-2 rotate-180",
            "top-1/2 left-0 -translate-y-1/2 -translate-x-2 -rotate-90",
            "top-1/2 right-0 -translate-y-1/2 translate-x-2 rotate-90",
          ].map((pos, i) => (
            <span
              key={i}
              className={`pointer-events-none absolute ${pos} text-cyan/60 font-mono text-xs`}
            >
              ◢◣
            </span>
          ))}

          <ArcReactor className="h-full w-full" />

          {/* Floating labels */}
          <div className="pointer-events-none absolute top-4 -left-2 hidden md:block font-mono text-[10px] tracking-[0.3em] text-cyan/70">
            CORE: 100%
          </div>
          <div className="pointer-events-none absolute bottom-4 -right-2 hidden md:block font-mono text-[10px] tracking-[0.3em] text-cyan/70">
            OUTPUT: STABLE
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-text-dim"
      >
        <span>SCROLL</span>
        <span className="block h-8 w-px bg-gradient-to-b from-cyan/80 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
