"use client";

import { motion } from "framer-motion";
import { awards, certifications } from "@/lib/data";
import { SectionHeader } from "@/components/hud/SectionHeader";
import { FiAward, FiBookOpen } from "react-icons/fi";

export function Awards() {
  return (
    <section id="awards" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 05 — DECORATIONS"
          title="AWARDS & CERTIFICATIONS"
          caption="Recognised for delivery, performance and continuous learning."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-gold">
              <FiAward className="text-base" />
              ACHIEVEMENTS & AWARDS
              <span className="h-px flex-1 bg-gold/30" />
            </div>
            <div className="space-y-3">
              {awards.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative flex items-center justify-between border border-gold/20 bg-gold/5 px-5 py-3 hover:border-gold/50 transition-colors"
                >
                  <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-l border-t border-gold/70" />
                  <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-gold/70" />
                  <div>
                    <div className="font-display text-base text-text">
                      {a.title}
                    </div>
                    <div className="font-mono text-[10px] tracking-widest text-text-dim">
                      {a.org}
                    </div>
                  </div>
                  <div className="font-mono text-xs tracking-widest text-gold text-glow-gold">
                    {a.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-cyan">
              <FiBookOpen className="text-base" />
              CERTIFICATIONS
              <span className="h-px flex-1 bg-cyan/30" />
            </div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative border border-cyan/20 bg-cyan/5 px-5 py-3 hover:border-cyan/50 transition-colors"
                >
                  <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-l border-t border-cyan/70" />
                  <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-cyan/70" />
                  <div className="font-display text-base text-text">
                    {c.title}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-text-dim">
                    {c.org}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 border border-text-dim/20 bg-panel p-5">
              <div className="font-mono text-[10px] tracking-[0.3em] text-text-faint">
                {"// CORE ATTRIBUTES"}
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm text-text-dim">
                <li>· RCA & Troubleshooting</li>
                <li>· Technical Documentation</li>
                <li>· Stakeholder Management</li>
                <li>· Cross-Functional Delivery</li>
                <li>· Internet Technologies</li>
                <li>· Android Deployment</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
