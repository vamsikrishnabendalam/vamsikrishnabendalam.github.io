"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { BootSequence } from "@/components/sections/BootSequence";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Awards } from "@/components/sections/Awards";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScanLine } from "@/components/hud/ScanLine";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Home() {
  const [booted, setBooted] = useState(false);

  useIsoLayoutEffect(() => {
    if (sessionStorage.getItem("jarvis-booted") === "1") {
      setBooted(true);
    }
  }, []);

  function onBootDone() {
    sessionStorage.setItem("jarvis-booted", "1");
    setBooted(true);
  }

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-200 focus:bg-bg focus:text-cyan focus:border focus:border-cyan focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:tracking-[0.3em]"
      >
        SKIP TO CONTENT
      </a>
      {!booted ? <BootSequence onDone={onBootDone} /> : null}
      <ScanLine />
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Awards />
        <Divider />
        <Blog />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

function Divider() {
  return (
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="flex items-center gap-4 opacity-50">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
        <span className="font-mono text-[10px] tracking-[0.4em] text-cyan/40">
          ◆
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      </div>
    </div>
  );
}
