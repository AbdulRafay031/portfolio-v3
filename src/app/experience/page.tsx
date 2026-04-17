import { Container } from "@/components/layout/container";
import { experience } from "@/data/experience";

export const metadata = {
  title: "Experience | Abdul Rafay",
  description: "Work experience and achievements.",
};

export default function ExperiencePage() {
  return (
    <div className="bg-bg-primary">
      <Container className="py-16 md:py-20">
        <h1 className="text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
          Experience
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
          A focused timeline of roles and the outcomes I shipped.
        </p>

        <div className="mt-12 space-y-6">
          {experience.map((x, idx) => (
            <div key={`${x.company}-${x.role}`} className="relative">
              <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
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
                <ul className="mt-6 space-y-2 text-sm text-text-muted">
                  {x.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>

              {idx !== experience.length - 1 ? (
                <div className="mx-auto my-6 h-px w-full max-w-[900px] bg-[linear-gradient(to_right,transparent,var(--border),transparent)]" />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

