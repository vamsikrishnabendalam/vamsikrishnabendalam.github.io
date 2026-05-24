"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursor?: boolean;
  onDone?: () => void;
};

export function TerminalText({
  text,
  speed = 35,
  startDelay = 0,
  className,
  cursor = true,
  onDone,
}: Props) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let raf = 0;
    const start = setTimeout(() => {
      const tick = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) {
          raf = window.setTimeout(tick, speed) as unknown as number;
        } else {
          setDone(true);
          onDone?.();
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearTimeout(raf);
    };
  }, [text, speed, startDelay, onDone]);

  return (
    <span className={cn("font-mono", className)}>
      {shown}
      {cursor && !done ? (
        <span className="ml-0.5 inline-block w-[0.6ch] animate-blink text-cyan">
          ▍
        </span>
      ) : null}
    </span>
  );
}
