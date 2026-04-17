import Link from "next/link";
import { Container } from "@/components/layout/container";
import { experience } from "@/data/experience";
import { FiArrowUpRight } from "react-icons/fi";

export function ExperiencePreview() {
  return (
    <section className="bg-bg-primary py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-text-muted">Experience</div>
            <h2 className="mt-2 text-3xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-4xl">
              Timeline & impact.
            </h2>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-cyan"
          >
            Full experience <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6">
          {experience.slice(0, 4).map((x) => (
            <div
              key={`${x.company}-${x.role}`}
              className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md transition hover:border-accent-primary/60"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <div className="text-lg font-bold text-text-primary">
                    {x.company}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-text-secondary">
                    {x.role}
                  </div>
                </div>
                <div className="text-sm font-semibold text-text-muted">
                  {x.period}
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-text-muted">
                {x.bullets.slice(0, 3).map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

