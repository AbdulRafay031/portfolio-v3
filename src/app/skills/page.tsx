import { Container } from "@/components/layout/container";
import { SkillsRadar } from "@/components/skills/skills-radar";
import { skillGroups } from "@/data/skills";

export const metadata = {
  title: "Skills | Abdul Rafay",
  description: "Interactive skills matrix and radar chart.",
};

export default function SkillsPage() {
  return (
    <div className="bg-bg-primary">
      <Container className="py-16 md:py-20">
        <h1 className="text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
          Skills
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
          A quick overview of my core strengths across frontend, backend, AI,
          and tools.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md lg:col-span-2">
            <div className="text-sm font-semibold text-text-muted">
              Skills matrix
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
                          <span>{s.level}%</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-border/50">
                          <div
                            className="h-2 rounded-full bg-accent-primary"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
            <div className="text-sm font-semibold text-text-muted">
              Skill radar
            </div>
            <div className="mt-6">
              <SkillsRadar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

