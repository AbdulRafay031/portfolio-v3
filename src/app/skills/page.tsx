import { Container } from "@/components/layout/container";
import { skillGroups } from "@/data/skills";
import Link from "next/link";

export const metadata = {
  title: "Skills | Abdul Rafay",
  description: "Odoo techno-functional consulting, ERP workflows, Python development, full-stack and AI skills.",
};

export default function SkillsPage() {
  return (
    <div className="bg-bg-primary">
      <Container className="py-16 md:py-20">
        <h1 className="text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
          My technology ecosystem.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
          Explore my Odoo techno-functional consulting practice at TechHub alongside full-stack engineering, AI and development tools.
        </p>

        <div className="mt-12 grid gap-6">
          <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
            <div className="text-sm font-semibold text-text-muted">
              Technical domains
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div
                  key={g.title}
                  className="rounded-2xl border border-border/70 bg-bg-secondary/25 p-6"
                >
                  <div className="text-sm font-bold text-text-primary">
                    {g.title}
                  </div>
                  <div className="mt-4 space-y-3">
                    {g.skills.map((s) => (
                      <div key={s.name}>
                        <div className="flex items-center justify-between text-xs font-semibold text-text-muted">
                          <span>{s.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link className="v4-button" href="/projects">See these skills in practice ↗</Link>
        </div>
      </Container>
    </div>
  );
}

