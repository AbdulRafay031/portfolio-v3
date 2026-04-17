import { Container } from "@/components/layout/container";

const rows = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  { label: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
  {
    label: "AI / Data",
    items: ["Python", "Prompt engineering", "Agentic AI", "LLM APIs"],
  },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "Postman"] },
] as const;

function MarqueeRow({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card/30 backdrop-blur-md">
      <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-3 px-6 py-4 hover:[animation-play-state:paused]">
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap rounded-full border border-border/70 bg-bg-secondary/30 px-4 py-1.5 text-xs font-semibold text-text-secondary"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="bg-bg-primary py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-text-muted">
              Tech Stack
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-4xl">
              Tools I use to ship.
            </h2>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-3 md:grid-cols-[160px_1fr]">
              <div className="text-sm font-semibold text-text-muted md:pt-4">
                {r.label}
              </div>
              <MarqueeRow items={r.items} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

