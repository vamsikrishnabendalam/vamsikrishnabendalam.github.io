"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/hud/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 03 — MISSION ARCHIVE"
          title="SELECTED PROJECTS"
          caption="Shipped systems. Real clients. Real impact."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative border border-cyan/15 bg-panel backdrop-blur-sm overflow-hidden"
            >
              {/* Hover scan */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-cyan/15 px-5 py-2.5 font-mono text-[10px] tracking-[0.3em]">
                <span className="text-cyan">
                  PRJ-{String(i + 1).padStart(3, "0")}
                </span>
                <span className="text-gold">{p.highlight}</span>
              </div>

              <div className="p-6">
                <div className="text-[10px] font-mono tracking-[0.3em] text-text-faint">
                  CLIENT // {p.client}
                </div>
                <h3 className="mt-2 font-display text-xl text-text group-hover:text-cyan transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-text-dim leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-widest text-cyan/80 border border-cyan/20 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner brackets */}
              <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-l border-t border-cyan/50" />
              <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-r border-t border-cyan/50" />
              <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-l border-b border-cyan/50" />
              <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-r border-b border-cyan/50" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
