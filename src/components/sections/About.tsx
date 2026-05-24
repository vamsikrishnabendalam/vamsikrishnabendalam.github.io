"use client";

import { motion } from "framer-motion";
import { profile, education } from "@/lib/data";
import { SectionHeader } from "@/components/hud/SectionHeader";
import { HudFrame } from "@/components/hud/HudFrame";

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 01 — IDENTITY"
          title="ABOUT THE OPERATOR"
          caption="Profile dossier — compiled from 5+ years across four high-stakes domains."
        />

        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <HudFrame label="// DOSSIER" className="h-full">
              <div className="p-6 md:p-8 font-sans text-text-dim leading-relaxed">
                <p className="text-text text-lg leading-relaxed">
                  {profile.summary}
                </p>
                <p className="mt-5">
                  I sit at the intersection of{" "}
                  <span className="text-cyan">technical consulting</span>,{" "}
                  <span className="text-cyan">integration engineering</span> and{" "}
                  <span className="text-cyan">data infrastructure</span> —
                  translating partner & stakeholder requirements into shipped,
                  reliable systems. Recently leading a 10-engineer pod
                  delivering retail-media connectors for Walmart, Baidu,
                  DoorDash, Chewy and Qihoo.
                </p>
                <p className="mt-5">
                  My playground spans Make.com, Python, SQL, Snowflake, AWS,
                  Ab Initio and Hive — and increasingly, Gen AI co-pilots that
                  compress delivery cycles.
                </p>
              </div>
            </HudFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <HudFrame label="// VITALS" variant="gold">
              <div className="p-6 font-mono text-sm space-y-3">
                <Row k="LOC" v={profile.location} />
                <Row k="EMAIL" v={profile.email} />
                <Row k="PHONE" v={profile.phone} />
                <Row k="STATUS" v="OPEN TO OPPORTUNITIES" highlight />
                <Row k="FOCUS" v="PARTNER SOLUTIONS / INTEGRATIONS" />
              </div>
            </HudFrame>

            <HudFrame label="// EDUCATION">
              <div className="p-6 font-sans">
                {education.map((e) => (
                  <div key={e.degree}>
                    <div className="font-display text-base text-text">
                      {e.degree}
                    </div>
                    <div className="mt-1 text-sm text-text-dim">
                      {e.institution}
                    </div>
                    <div className="mt-1 font-mono text-xs tracking-widest text-cyan">
                      {e.year}
                    </div>
                  </div>
                ))}
              </div>
            </HudFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({
  k,
  v,
  highlight,
}: {
  k: string;
  v: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="w-16 shrink-0 text-[10px] tracking-[0.3em] text-text-faint">
        {k}
      </span>
      <span className="h-px flex-1 bg-gold/15" />
      <span
        className={
          highlight
            ? "text-gold text-glow-gold text-xs tracking-widest"
            : "text-text text-xs tracking-wider"
        }
      >
        {v}
      </span>
    </div>
  );
}
