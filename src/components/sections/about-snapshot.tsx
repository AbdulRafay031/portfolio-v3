import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FiArrowUpRight, FiAward } from "react-icons/fi";

const stats = [
  { label: "Years Exp", value: "2+" },
  { label: "Projects Built", value: "20+" },
  { label: "Happy Clients", value: "15+" },
] as const;

export function AboutSnapshot() {
  return (
    <section className="bg-bg-secondary py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold text-text-muted">
                Based in Karachi, Pakistan
              </div>
              <div className="mt-3 text-2xl font-semibold text-text-primary [font-family:var(--font-display)]">
                I build products that feel fast, polished, and reliable.
              </div>
              <p className="mt-4 leading-7 text-text-muted">
                I'm a MERN Stack Developer with hands-on experience building
                scalable web platforms including e-commerce and financial
                systems. I focus on performance, accessibility, and clean
                architecture — and I'm actively building AI skills through GIAIC
                (Python, prompt engineering, agentic AI) with public repos on
                GitHub.
              </p>

              {/* ── Micro1 badge ── */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent-primary/50 bg-accent-primary/10 px-4 py-2 text-xs font-semibold text-accent-primary">
                <FiAward className="h-3.5 w-3.5" />
                Micro1 Certified Frontend Engineer · June 2026
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border/80 bg-bg-secondary/30 p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-text-primary">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-text-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent-primary/50 px-5 py-2.5 text-sm font-semibold text-accent-primary transition hover:bg-accent-primary/10"
                >
                  More about me <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold text-text-muted">
                What I care about
              </div>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                <li>• Performance-first UI that passes Lighthouse.</li>
                <li>• Smooth interactions that feel premium (not distracting).</li>
                <li>• Maintainable codebases with strong types and structure.</li>
                <li>• Products that ship: deploy, monitor, iterate.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold text-text-muted">
                Primary stack
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind",
                  "Redux",
                  "TypeScript",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent-primary/15 px-3 py-1 text-xs font-semibold text-accent-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}