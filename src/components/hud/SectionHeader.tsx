"use client";

import { motion } from "framer-motion";

type Props = {
  code: string;
  title: string;
  caption?: string;
};

export function SectionHeader({ code, title, caption }: Props) {
  return (
    <div className="relative mb-14">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-mono text-[11px] tracking-[0.4em] text-cyan/70"
      >
        <span className="h-px w-12 bg-cyan/40" />
        <span>{code}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-wider text-text"
      >
        <span className="text-shimmer">{title}</span>
      </motion.h2>

      {caption ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-2xl font-sans text-text-dim"
        >
          {caption}
        </motion.p>
      ) : null}
    </div>
  );
}
