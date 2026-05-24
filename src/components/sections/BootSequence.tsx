"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "> stark-industries/jarvis v4.7.2 — bootloader",
  "> verifying biometric signature ........ [ OK ]",
  "> mounting /home/vamsi ................. [ OK ]",
  "> linking knowledge graph .............. [ OK ]",
  "> loading retail-media connectors ...... [ OK ]",
  "> loading ETL pipelines ................ [ OK ]",
  "> establishing secure uplink ........... [ OK ]",
  "> J.A.R.V.I.S. online. welcome back, sir.",
];

function nowString() {
  if (typeof window === "undefined") return "--:--:--";
  return new Date().toLocaleTimeString();
}

export function BootSequence({ onDone }: { onDone: () => void }) {
  const reducedMotion = useReducedMotion();
  const [linesShown, setLinesShown] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [clock, setClock] = useState(nowString);

  // Skip the whole boot for users who prefer reduced motion
  useEffect(() => {
    if (reducedMotion) onDone();
  }, [reducedMotion, onDone]);

  // Live clock
  useEffect(() => {
    const id = window.setInterval(() => setClock(nowString()), 1000);
    return () => window.clearInterval(id);
  }, []);

  // Line-by-line reveal, then trigger fade
  useEffect(() => {
    if (reducedMotion) return;
    if (linesShown >= bootLines.length) {
      const t = setTimeout(() => setHidden(true), 500);
      return () => clearTimeout(t);
    }
    const delay = linesShown === 0 ? 200 : 180 + Math.random() * 120;
    const t = setTimeout(() => setLinesShown((n) => n + 1), delay);
    return () => clearTimeout(t);
  }, [linesShown, reducedMotion]);

  // Fade-out finished → signal parent
  useEffect(() => {
    if (!hidden) return;
    const t = setTimeout(onDone, 600);
    return () => clearTimeout(t);
  }, [hidden, onDone]);

  // ESC / Enter / Space dismisses
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setHidden(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          role="dialog"
          aria-label="System boot sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-bg"
        >
          <div className="absolute inset-0 hud-grid-fine opacity-40" />
          <div className="absolute inset-0 scanlines" />

          <CornerHud />

          <button
            type="button"
            onClick={() => setHidden(true)}
            className="absolute top-6 right-16 font-mono text-[10px] tracking-[0.3em] text-text-dim hover:text-cyan border border-text-dim/30 hover:border-cyan/60 px-3 py-1.5 transition-colors rounded-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          >
            SKIP // ESC
          </button>

          <div className="relative w-full max-w-2xl px-6">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.4em] text-cyan/70">
              <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
              SECURE BOOT
              <span className="ml-auto text-text-faint" suppressHydrationWarning>
                {clock}
              </span>
            </div>

            <div className="font-mono text-sm leading-relaxed text-cyan">
              {bootLines.slice(0, linesShown).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    i === bootLines.length - 1
                      ? "mt-2 text-gold text-glow-gold"
                      : "text-text-dim"
                  }
                >
                  {line.replace("[ OK ]", "")}
                  {line.includes("[ OK ]") ? (
                    <span className="text-cyan">[ OK ]</span>
                  ) : null}
                </motion.div>
              ))}
              {linesShown < bootLines.length && (
                <span className="ml-0.5 inline-block w-[0.6ch] animate-blink text-cyan">
                  ▍
                </span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CornerHud() {
  return (
    <>
      <span className="pointer-events-none absolute top-6 left-6 h-6 w-6 border-l border-t border-cyan/60" />
      <span className="pointer-events-none absolute top-6 right-6 h-6 w-6 border-r border-t border-cyan/60" />
      <span className="pointer-events-none absolute bottom-6 left-6 h-6 w-6 border-l border-b border-cyan/60" />
      <span className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-r border-b border-cyan/60" />
    </>
  );
}
