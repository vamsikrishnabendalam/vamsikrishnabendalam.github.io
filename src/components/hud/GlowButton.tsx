"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "gold";
  href?: string;
  external?: boolean;
  icon?: ReactNode;
};

export function GlowButton({
  variant = "primary",
  href,
  external,
  icon,
  children,
  className,
  disabled,
  ...props
}: Props) {
  const styles = {
    primary:
      "border-cyan/60 text-cyan bg-cyan/5 hover:bg-cyan/15 hover:shadow-[0_0_24px_rgba(57,217,255,0.45)]",
    ghost:
      "border-text-dim/30 text-text-dim hover:border-cyan/60 hover:text-cyan",
    gold:
      "border-gold/60 text-gold bg-gold/5 hover:bg-gold/15 hover:shadow-[0_0_24px_rgba(255,181,71,0.45)]",
  }[variant];

  const inner = (
    <span
      className={cn(
        "relative inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-[0.25em] uppercase border transition-all duration-300",
        "before:absolute before:top-0 before:left-0 before:h-2 before:w-2 before:border-l before:border-t before:border-current",
        "after:absolute after:bottom-0 after:right-0 after:h-2 after:w-2 after:border-r after:border-b after:border-current",
        styles,
        disabled && "opacity-50 cursor-not-allowed hover:bg-transparent hover:shadow-none",
        className,
      )}
    >
      {icon ? <span className="text-base leading-none">{icon}</span> : null}
      {children}
    </span>
  );

  const focusRing =
    "inline-block rounded-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={focusRing}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={focusRing}
    >
      {inner}
    </button>
  );
}
