"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="border-b border-cyan/15 bg-bg/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full border border-cyan/60 animate-pulse-ring" />
              <div className="absolute inset-1 rounded-full border border-cyan/40" />
              <div className="absolute inset-2.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(57,217,255,0.8)]" />
            </div>
            <div className="font-display text-sm font-bold tracking-[0.3em] text-text group-hover:text-cyan transition-colors">
              {profile.shortName}.JARVIS
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] tracking-[0.3em]">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative px-3 py-2 transition-colors",
                    isActive ? "text-cyan" : "text-text-dim hover:text-text",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-cyan shadow-[0_0_8px_rgba(57,217,255,0.8)]"
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          {/* Status */}
          <div className="hidden md:flex items-center gap-4 font-mono text-[11px] tracking-[0.3em]">
            <span className="flex items-center gap-2 text-text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              ONLINE
            </span>
            <StatusClock />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden font-mono text-[11px] tracking-[0.3em] text-cyan border border-cyan/40 px-3 py-2"
            aria-label="menu"
            aria-expanded={open}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-b border-cyan/15 bg-bg/95 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 font-mono text-xs tracking-[0.3em]">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-2 transition-colors",
                    isActive ? "text-cyan" : "text-text-dim",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </motion.header>
  );
}

function StatusClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="text-cyan tabular-nums" suppressHydrationWarning>
      {time || "--:--:--"}
    </span>
  );
}
