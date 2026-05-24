"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { SectionHeader } from "@/components/hud/SectionHeader";
import { FiArrowRight } from "react-icons/fi";

export function Blog() {
  return (
    <section id="blog" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 06 — FIELD JOURNAL"
          title="WRITING & SIGNALS"
          caption="Notes from the integration trenches. Drafts incoming."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative border border-cyan/15 bg-panel p-6 hover:border-cyan/40 transition-colors"
            >
              <span className="pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-l border-t border-cyan/60" />
              <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-r border-b border-cyan/60" />

              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em]">
                <span className="text-cyan">{post.tag.toUpperCase()}</span>
                <span className="text-text-faint">{post.date.toUpperCase()}</span>
              </div>
              <h3 className="mt-3 font-display text-lg text-text group-hover:text-cyan transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-text-dim leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-cyan/70 group-hover:text-cyan transition-colors">
                READ <FiArrowRight />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
