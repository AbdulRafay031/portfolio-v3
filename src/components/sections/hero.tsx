"use client";

import Link from "next/link";
import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { HeroParticles } from "./hero-particles";
import { motion, type Variants } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Staggered Framer Motion variants for the right-side stack cards
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // GSAP entrance timeline for left-side hero text
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.5 })
        .from(".hero-label", { opacity: 0, y: 20, duration: 0.4 }, "-=0.2")
        .from(".hero-title", { opacity: 0, y: 40, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-ctas", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-scroll", { opacity: 0, duration: 0.4 }, "-=0.2");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_70%_10%,color-mix(in_oklab,var(--accent-primary)_18%,transparent)_0%,transparent_60%),radial-gradient(50rem_30rem_at_20%_80%,color-mix(in_oklab,var(--accent-cyan)_14%,transparent)_0%,transparent_55%)]" />
      {/* Animated gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <HeroParticles />

      <Container className="relative py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ── Left: Hero text (GSAP-animated) ── */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg-card/30 px-4 py-2 text-xs font-semibold text-text-muted backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              Open to roles · Remote / On-site
            </div>

            <p className="hero-label mt-6 font-mono text-sm text-text-muted">
              Hello, I'm
            </p>

            <h1 className="hero-title mt-3 text-balance font-[700] tracking-tight text-text-primary [font-family:var(--font-display)] text-4xl leading-tight sm:text-5xl md:text-6xl">
              Abdul Rafay
            </h1>

            <div className="hero-subtitle mt-4 text-xl font-semibold text-text-secondary sm:text-2xl">
              <TypeAnimation
                sequence={[
                  "Frontend Engineer",
                  1400,
                  "MERN Stack Developer",
                  1400,
                  "AI Developer",
                  1400,
                  "Micro1 Certified Engineer",
                  1400,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </div>

            <p className="hero-desc mt-6 max-w-xl text-base leading-7 text-text-muted">
              I build fast, responsive, and scalable web applications with{" "}
              <span className="text-text-secondary">React</span>,{" "}
              <span className="text-text-secondary">Next.js</span>, and the{" "}
              <span className="text-text-secondary">MERN stack</span> — focused on
              clean architecture, API integration, and world-class UI/UX.
            </p>

            <div className="hero-ctas mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-primary px-6 py-3 font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]"
              >
                View Work <FiArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="/Abdul-Rafay-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-primary/50 px-6 py-3 font-semibold text-accent-primary transition hover:bg-accent-primary/10"
              >
                Download CV <FiDownload className="h-4 w-4" />
              </a>
            </div>

            <div className="hero-scroll mt-12 flex items-center gap-2 text-sm text-text-muted">
              <FiArrowDown className="h-4 w-4 animate-bounce" />
              Scroll for more
            </div>
          </div>

          {/* ── Right: Stack cards (Framer Motion stagger) ── */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md"
            >
              <div className="absolute -inset-px rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,color-mix(in_oklab,var(--accent-primary)_35%,transparent),transparent,transparent,color-mix(in_oklab,var(--accent-cyan)_28%,transparent))] opacity-30 blur-xl" />
              <div className="relative">
                <p className="font-mono text-xs text-text-muted">Currently</p>
                <p className="mt-2 text-lg font-semibold text-text-primary">
                  Building premium Next.js experiences
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {(
                    [
                      ["Next.js", "App Router · SEO"],
                      ["React", "UI systems"],
                      ["Node.js", "APIs · Auth"],
                      ["MongoDB", "Data modeling"],
                    ] as const
                  ).map(([t, d], i) => (
                    <motion.div
                      key={t}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      className="rounded-2xl border border-border/80 bg-bg-secondary/30 p-4"
                    >
                      <div className="text-sm font-semibold text-text-primary">{t}</div>
                      <div className="mt-1 text-xs text-text-muted">{d}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="pointer-events-none absolute -right-6 -top-6 hidden rotate-6 rounded-2xl border border-border bg-bg-card/30 p-4 font-mono text-xs text-text-muted shadow-[0_0_20px_rgba(0,212,255,0.15)] backdrop-blur-md lg:block">
              <span className="text-accent-cyan">const</span> stack ={" "}
              <span className="text-accent-primary">
                [&quot;Next.js&quot;,&quot;MERN&quot;]
              </span>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden -rotate-6 rounded-2xl border border-border bg-bg-card/30 p-4 font-mono text-xs text-text-muted shadow-[0_0_20px_rgba(108,99,255,0.18)] backdrop-blur-md lg:block">
              <span className="text-accent-primary">deploy</span>(
              <span className="text-accent-cyan">&quot;vercel&quot;</span>)
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}