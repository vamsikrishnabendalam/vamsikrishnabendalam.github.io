"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { coreSkills } from "@/lib/data";
import { SectionHeader } from "@/components/hud/SectionHeader";

const SkillsConstellation = dynamic(
  () =>
    import("@/components/three/SkillsConstellation").then(
      (m) => m.SkillsConstellation,
    ),
  { ssr: false },
);

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 04 — CAPABILITY MATRIX"
          title="SKILLS CONSTELLATION"
          caption="Operational stack — real-time uplink to my technical toolset."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-[560px] mx-auto"
          >
            <div className="absolute inset-0 rounded-full border border-cyan/15 animate-rotate-slow" />
            <div className="absolute inset-8 rounded-full border border-dashed border-cyan/15 animate-rotate-reverse" />
            <SkillsConstellation className="h-full w-full" />
            <div className="pointer-events-none absolute top-2 left-2 font-mono text-[10px] tracking-[0.3em] text-cyan/70">
              NODE.MAP
            </div>
            <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] tracking-[0.3em] text-cyan/70">
              UPLINK: LIVE
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {coreSkills.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative border border-cyan/15 bg-panel p-5"
              >
                <span className="pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-l border-t border-cyan/60" />
                <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-r border-b border-cyan/60" />
                <div className="font-mono text-[10px] tracking-[0.3em] text-cyan">
                  {`// ${String(i + 1).padStart(2, "0")}`}
                </div>
                <h4 className="mt-1 font-display text-base text-text">
                  {group.label}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((it) => (
                    <span
                      key={it}
                      className="font-mono text-[10px] tracking-widest text-text-dim border border-text-dim/20 px-2 py-0.5 hover:text-cyan hover:border-cyan/40 transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
