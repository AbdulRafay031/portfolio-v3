import Link from "next/link";
import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { FiArrowUpRight, FiGithub, FiZap } from "react-icons/fi";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="bg-bg-secondary py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-text-muted">
              Featured Projects
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-4xl">
              Work I'm proud of.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
              A curated set of projects showing full-stack capability, strong UI
              craft, and production-ready architecture.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-cyan"
          >
            View all <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <div
              key={p.slug}
              data-cursor="interactive"
              className="group relative overflow-hidden rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-accent-primary/60 hover:shadow-[0_0_22px_rgba(108,99,255,0.25)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(40rem_18rem_at_30%_20%,color-mix(in_oklab,var(--accent-primary)_14%,transparent)_0%,transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  {p.categories.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-accent-primary/15 px-3 py-1 text-xs font-semibold text-accent-primary"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {p.description}
                </p>

                {/* ── Impact line ── */}
                {p.impact && (
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent-green/40 bg-accent-green/10 px-3 py-1 text-xs font-semibold text-accent-green">
                    <FiZap className="h-3 w-3" />
                    {p.impact}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 bg-bg-secondary/30 px-3 py-1 text-xs font-semibold text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]"
                  >
                    View case study <FiArrowUpRight className="h-4 w-4" />
                  </Link>
                  {p.links.github ? (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-text-secondary transition hover:border-accent-primary/60"
                    >
                      <FiGithub className="h-4 w-4" /> GitHub
                    </a>
                  ) : null}
                  {p.links.live ? (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-text-secondary transition hover:border-accent-cyan/60"
                    >
                      Live <FiArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}