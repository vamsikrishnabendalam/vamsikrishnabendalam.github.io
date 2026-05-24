"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { profile } from "@/lib/data";
import { SectionHeader } from "@/components/hud/SectionHeader";
import { GlowButton } from "@/components/hud/GlowButton";
import { FiSend, FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";

type Status = "idle" | "sending" | "ok" | "err" | "info";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ""; // e.g. https://formspree.io/f/xxxxxxxx

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ENDPOINT) {
      // Fallback: open mail client
      const subject = encodeURIComponent(
        `JARVIS uplink — ${data.get("name") || "anonymous"}`,
      );
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("name")} <${data.get("email")}>`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("info");
      setMsg("Mail client opened. Send when ready.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        setMsg("Transmission complete. I'll respond shortly.");
        form.reset();
      } else {
        setStatus("err");
        setMsg("Uplink failed. Try email instead.");
      }
    } catch {
      setStatus("err");
      setMsg("Network error. Try email instead.");
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 07 — UPLINK"
          title="INITIATE CONTACT"
          caption="Secure channel open. Drop a transmission below."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-gold/25 bg-panel p-7"
          >
            <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-l border-t border-gold/70" />
            <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-r border-t border-gold/70" />
            <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-l border-b border-gold/70" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-r border-b border-gold/70" />

            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              CHANNEL // OPEN
            </div>
            <h3 className="mt-3 font-display text-2xl text-text">
              Let&apos;s build something.
            </h3>
            <p className="mt-3 text-sm text-text-dim leading-relaxed">
              Open to Partner Solutions Engineering, Technical Solutions
              Consulting, and Integration roles. Reach out about consulting,
              collaboration or just to compare notes on automation stacks.
            </p>

            <div className="mt-6 space-y-3 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-text-dim hover:text-cyan transition-colors"
              >
                <FiMail className="text-cyan" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-text-dim hover:text-cyan transition-colors"
              >
                <FiPhone className="text-cyan" />
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-dim hover:text-cyan transition-colors"
              >
                <FiLinkedin className="text-cyan" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-dim hover:text-cyan transition-colors"
              >
                <FiGithub className="text-cyan" />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative border border-cyan/25 bg-panel p-7 space-y-5"
          >
            <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-l border-t border-cyan/70" />
            <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-r border-t border-cyan/70" />
            <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-l border-b border-cyan/70" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-r border-b border-cyan/70" />

            <Field name="name" label="OPERATOR NAME" required />
            <Field name="email" type="email" label="UPLINK ADDRESS" required />
            <Field name="subject" label="TRANSMISSION SUBJECT" />
            <Field name="message" label="MESSAGE" required textarea />

            <div className="flex items-center justify-between gap-4">
              <div
                role="status"
                aria-live="polite"
                className={`font-mono text-[10px] tracking-widest ${
                  status === "ok"
                    ? "text-green-400"
                    : status === "err"
                    ? "text-red"
                    : status === "info"
                    ? "text-cyan"
                    : "text-text-faint"
                }`}
              >
                {status === "sending"
                  ? "// transmitting..."
                  : status === "ok" || status === "err" || status === "info"
                  ? msg
                  : "// awaiting input"}
              </div>
              <GlowButton
                variant="primary"
                icon={<FiSend />}
                type="submit"
                disabled={status === "sending"}
              >
                Transmit
              </GlowButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "w-full bg-transparent border border-text-dim/20 px-4 py-3 font-mono text-sm text-text placeholder-text-faint focus:outline-none focus:border-cyan/60 focus:shadow-[0_0_18px_rgba(57,217,255,0.18)] transition-all";
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.3em] text-text-faint mb-1.5">
        {label}
        {required ? <span className="text-red"> *</span> : null}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
