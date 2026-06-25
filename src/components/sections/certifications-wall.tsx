"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { certifications } from "@/data/certifications";
import { FiExternalLink, FiX, FiAward } from "react-icons/fi";

export function CertificationsWall() {
  const [selected, setSelected] = useState<(typeof certifications)[0] | null>(null);

  return (
    <section className="border-t border-border/60 bg-bg-secondary py-16">
      <Container className="space-y-14">

        {/* ── Degree block ── */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
            Degree
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-accent-primary/30 bg-gradient-to-br from-accent-primary/5 via-bg-card/40 to-bg-card/20 p-8 backdrop-blur-md">
            {/* Decorative cap icon */}
            <div className="absolute top-6 right-8 text-5xl opacity-10 select-none pointer-events-none">
              🎓
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <div className="text-xl font-extrabold text-text-primary [font-family:var(--font-display)]">
                  BS Computer Science
                </div>
                <div className="mt-1 text-sm font-semibold text-accent-primary">
                  Sindh Madrasa-tul-Islam University (SMIU)
                </div>
              </div>
              <span className="shrink-0 self-start rounded-xl border border-accent-primary/40 bg-accent-primary/10 px-4 py-1.5 text-xs font-bold text-accent-primary">
                2022 – 2026
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-text-muted">
              Four-year undergraduate program covering software engineering, data
              structures, algorithms, databases, operating systems, and computer
              networks. Graduated 2026.
            </p>
          </div>
        </div>

        {/* ── Certifications block ── */}
        <div>
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Certifications
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-3xl">
                Credentials &amp; programs
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.div
                key={c.id}
                onClick={() => c.image && setSelected(c)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative overflow-hidden rounded-3xl border p-6 backdrop-blur-md transition-shadow flex flex-col gap-3 ${
                  c.image ? "cursor-pointer" : "cursor-default"
                } ${
                  c.highlight
                    ? "border-accent-primary/60 bg-accent-primary/10 shadow-[0_0_22px_rgba(108,99,255,0.22)] hover:shadow-[0_0_32px_rgba(108,99,255,0.35)]"
                    : "border-border bg-bg-card/40 hover:border-accent-primary/50 hover:shadow-[0_0_22px_rgba(108,99,255,0.18)]"
                }`}
              >
                {c.highlight && (
                  <span className="absolute top-4 right-4 text-xs bg-accent-primary text-white px-2 py-0.5 rounded-full font-semibold">
                    Verified
                  </span>
                )}

                <div className="text-3xl">{c.icon}</div>

                <div>
                  <div className="text-base font-bold text-text-primary leading-snug">
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-accent-cyan">
                    {c.issuer}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted">
                    {c.period}
                  </div>
                </div>

                <p className="text-sm leading-6 text-text-muted flex-1">
                  {c.detail}
                </p>

                <div className="mt-auto flex items-center gap-3">
                  {c.image && (
                    <span className="text-xs font-semibold text-accent-cyan underline underline-offset-2">
                      View certificate →
                    </span>
                  )}
                  {c.link !== "#" && (
  <a
    href={c.link}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center gap-1 text-xs font-semibold text-accent-primary hover:underline"
  >
    View credential <FiExternalLink className="h-3 w-3" />
  </a>
)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>

      {/* ── Certificate Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl border border-border bg-bg-card shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div>
                  <div className="text-base font-bold text-text-primary">
                    {selected.title}
                  </div>
                  <div className="text-sm text-accent-cyan">{selected.issuer}</div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full p-2 text-text-muted hover:bg-bg-secondary hover:text-text-primary transition"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative w-full bg-bg-secondary" style={{ minHeight: 340 }}>
                {selected.image ? (
                  <Image
                    src={selected.image}
                    alt={`${selected.title} certificate`}
                    width={900}
                    height={640}
                    className="w-full h-auto object-contain"
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center h-80 text-text-muted text-sm">
                    No certificate image available
                  </div>
                )}
              </div>

              {/* Footer */}
              {selected.link !== "#" && (
  <div className="px-6 py-4 border-t border-border flex justify-end">
    <a
      href={selected.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-5 py-2.5 text-sm font-semibold text-white hover:shadow-[0_0_16px_rgba(108,99,255,0.5)] transition"
    >
      View official credential <FiExternalLink className="h-4 w-4" />
    </a>
  </div>
)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}