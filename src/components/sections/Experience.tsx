"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeader } from "@/components/hud/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 02 — DEPLOYMENT LOG"
          title="EXPERIENCE TIMELINE"
          caption="Mission history across Retail Media, Banking, Healthcare and E-Commerce."
        />

        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/0 via-cyan/40 to-cyan/0" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative grid md:grid-cols-2 md:gap-12 ${
                    left ? "" : "md:[&>div:first-child]:col-start-2"
                  }`}
                >
                  {/* Node */}
                  <span className="absolute left-3 md:left-1/2 top-3 -translate-x-1/2 z-10 flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-cyan/50 animate-pulse-ring" />
                    <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(57,217,255,0.8)]" />
                  </span>

                  <div
                    className={`relative pl-10 md:pl-0 ${
                      left ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                  >
                    <div
                      className={`relative border border-cyan/15 bg-panel backdrop-blur-sm p-6 hover:border-cyan/40 transition-colors`}
                    >
                      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-l border-t border-cyan/50" />
                      <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-r border-t border-cyan/50" />
                      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-l border-b border-cyan/50" />
                      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-r border-b border-cyan/50" />

                      <div className="font-mono text-[10px] tracking-[0.3em] text-cyan">
                        {exp.period}
                      </div>
                      <h3 className="mt-2 font-display text-xl text-text">
                        {exp.company}
                      </h3>
                      <div className="mt-1 text-sm text-text-dim">
                        {exp.designation} · {exp.location}
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-gold">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {exp.project}
                      </div>
                      <div className="mt-2 text-xs text-text-dim font-mono tracking-wider">
                        CLIENT // {exp.client} · ROLE // {exp.role}
                      </div>

                      <ul
                        className={`mt-4 space-y-2 text-sm text-text-dim leading-relaxed ${
                          left ? "md:text-right" : ""
                        }`}
                      >
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className={`relative ${
                              left
                                ? "md:pr-4 md:before:content-[''] md:before:absolute md:before:right-0 md:before:top-2.5 md:before:h-px md:before:w-2 md:before:bg-cyan/40 pl-4 md:pl-0 before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-px before:w-2 before:bg-cyan/40 md:before:left-auto"
                                : "pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-px before:w-2 before:bg-cyan/40"
                            }`}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`mt-5 flex flex-wrap gap-1.5 ${
                          left ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[10px] tracking-widest text-cyan/80 border border-cyan/20 px-2 py-0.5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
