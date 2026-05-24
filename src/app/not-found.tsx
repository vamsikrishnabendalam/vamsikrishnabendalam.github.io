import Link from "next/link";

export const metadata = {
  title: "404 // Signal Lost — J.A.R.V.I.S.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 hud-grid opacity-30" />
      <div className="absolute inset-0 scanlines" />

      <span className="pointer-events-none absolute top-6 left-6 h-6 w-6 border-l border-t border-cyan/60" />
      <span className="pointer-events-none absolute top-6 right-6 h-6 w-6 border-r border-t border-cyan/60" />
      <span className="pointer-events-none absolute bottom-6 left-6 h-6 w-6 border-l border-b border-cyan/60" />
      <span className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-r border-b border-cyan/60" />

      <div className="relative z-10 text-center max-w-xl">
        <div className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.4em] text-cyan/70">
          <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
          UPLINK SEVERED
          <span className="h-px w-12 bg-cyan/60" />
        </div>

        <h1 className="mt-6 font-display text-7xl md:text-8xl font-bold tracking-wider text-shimmer">
          404
        </h1>

        <p className="mt-4 font-mono text-sm tracking-widest text-text-dim">
          {"// signal lost in transit"}
        </p>

        <p className="mt-6 text-text-dim leading-relaxed">
          The route you requested is not in J.A.R.V.I.S.&apos;s registry.
          Re-establish uplink from a known coordinate.
        </p>

        <div className="mt-8 inline-flex">
          <Link
            href="/"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-[0.25em] uppercase border border-cyan/60 text-cyan bg-cyan/5 hover:bg-cyan/15 hover:shadow-[0_0_24px_rgba(57,217,255,0.45)] transition-all duration-300 before:absolute before:top-0 before:left-0 before:h-2 before:w-2 before:border-l before:border-t before:border-cyan after:absolute after:bottom-0 after:right-0 after:h-2 after:w-2 after:border-r after:border-b after:border-cyan"
          >
            Return to base
          </Link>
        </div>
      </div>
    </main>
  );
}
