"use client";

import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-cyan/15 bg-bg-elev/80 backdrop-blur-md mt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6">
                <div className="absolute inset-0 rounded-full border border-cyan/60 animate-pulse-ring" />
                <div className="absolute inset-[7px] rounded-full bg-cyan shadow-[0_0_10px_rgba(57,217,255,0.8)]" />
              </div>
              <span className="font-display text-sm font-bold tracking-[0.3em] text-text">
                {profile.shortName}.JARVIS
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] tracking-wider text-text-dim leading-relaxed">
              Just A Rather Very Intelligent System.
              <br />
              Designed and engineered by {profile.name}.
            </p>
          </div>

          <div className="font-mono text-[11px] tracking-widest text-text-dim space-y-1">
            <div>BUILD // v1.0.0</div>
            <div>STACK // NEXT.JS · THREE.JS · GSAP</div>
            <div>DEPLOY // GITHUB PAGES</div>
          </div>

          <div className="font-mono text-[11px] tracking-widest text-text-dim md:text-right">
            <div>
              © {new Date().getFullYear()} {profile.name}
            </div>
            <div className="mt-1 text-text-faint">
              All systems nominal · {profile.location}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
