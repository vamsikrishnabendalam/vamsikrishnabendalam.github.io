"use client";

export function ScanLine() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        className="absolute inset-x-0 h-32 animate-scan"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(57,217,255,0.04) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
