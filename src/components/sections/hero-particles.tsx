"use client";

import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

let inited = false;

export function HeroParticles() {
  useMemo(() => {
    if (inited) return;
    inited = true;
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 55, density: { enable: true } },
      color: { value: ["#6C63FF", "#00D4FF"] },
      links: { enable: true, opacity: 0.25, distance: 140, color: "#6C63FF" },
      move: { enable: true, speed: 0.6 },
      opacity: { value: { min: 0.12, max: 0.45 } },
      size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0"
    />
  );
}

