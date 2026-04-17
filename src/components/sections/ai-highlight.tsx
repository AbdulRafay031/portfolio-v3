import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FiArrowUpRight, FiCpu } from "react-icons/fi";

export function AiHighlight() {
  return (
    <section className="border-y border-border/60 bg-[radial-gradient(50rem_28rem_at_15%_30%,color-mix(in_oklab,var(--accent-primary)_12%,transparent)_0%,transparent_55%)] py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/40 px-4 py-2 text-xs font-semibold text-text-muted backdrop-blur-md">
              <FiCpu className="h-4 w-4 text-accent-cyan" />
              AI &amp; agentic systems
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-4xl">
              AI experience, backed by GitHub.
            </h2>
            <p className="mt-4 text-base leading-7 text-text-muted">
              Alongside MERN work, I invest in{" "}
              <span className="text-text-secondary">
                Python for AI, prompt engineering, and agentic patterns
              </span>{" "}
              through{" "}
              <span className="text-text-secondary">GIAIC (2025–2026)</span>.
              Coursework and side projects live in public repos — from
              agentic-AI class exercises to a larger Python-based AI employee
              prototype.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-text-secondary">
              <li>• GIAIC track: Meta AI, Python, prompt engineering</li>
              <li>• Repos: AgenticAIClass1, GIAIC Python assignments, Personal AI Employee FTEs</li>
              <li>• SMIT (2024): Web Application Development foundation</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.55)]"
              >
                View AI projects <FiArrowUpRight className="h-4 w-4" />
              </Link>
              <span className="self-center text-xs text-text-muted">
                Tip: use the <strong className="text-text-secondary">AI/ML</strong>{" "}
                filter on the projects page.
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
            <div className="font-mono text-xs text-text-muted">highlight.json</div>
            <pre className="mt-4 overflow-x-auto text-sm leading-relaxed text-text-secondary">
{`{
  "program": "GIAIC",
  "focus": ["Agentic AI", "Python", "Prompt engineering"],
  "repos": [
    "Personal-AI-Employee-FTEs",
    "AgenticAIClass1",
    "GIAIC_Assignments_Python"
  ]
}`}
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}
