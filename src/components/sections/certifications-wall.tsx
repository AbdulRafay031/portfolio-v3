import { Container } from "@/components/layout/container";
import { certifications } from "@/data/certifications";
import { FiAward } from "react-icons/fi";

export function CertificationsWall() {
  return (
    <section className="border-t border-border/60 bg-bg-secondary py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-text-muted">
              Certifications
            </div>
            <h2 className="mt-2 text-2xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-3xl">
              Credentials & programs
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md transition hover:border-accent-primary/50 hover:shadow-[0_0_22px_rgba(108,99,255,0.18)]"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-primary/40 bg-accent-primary/10 text-accent-primary">
                  <FiAward className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-lg font-bold text-text-primary">
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-accent-cyan">
                    {c.issuer}
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                    {c.period}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-text-muted">
                    {c.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
