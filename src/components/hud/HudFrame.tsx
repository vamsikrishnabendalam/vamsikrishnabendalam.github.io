import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  label?: string;
  variant?: "default" | "gold";
};

export function HudFrame({
  children,
  className,
  label,
  variant = "default",
}: Props) {
  const accent = variant === "gold" ? "border-gold/40" : "border-cyan/30";
  const labelColor = variant === "gold" ? "text-gold" : "text-cyan";

  return (
    <div className={cn("relative", className)}>
      {/* Corner brackets */}
      <span
        className={cn(
          "pointer-events-none absolute -top-px -left-px h-4 w-4 border-l border-t",
          accent,
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute -top-px -right-px h-4 w-4 border-r border-t",
          accent,
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-l border-b",
          accent,
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-r border-b",
          accent,
        )}
      />
      <div
        className={cn(
          "border",
          variant === "gold" ? "border-gold/20" : "border-cyan/15",
          "bg-panel backdrop-blur-sm",
        )}
      >
        {children}
      </div>
      {label ? (
        <div
          className={cn(
            "pointer-events-none absolute -top-2 left-3 z-10 px-2 font-mono text-[10px] tracking-[0.3em] bg-bg",
            labelColor,
          )}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
}
