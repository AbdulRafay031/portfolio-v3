import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FiArrowUpRight, FiCpu } from "react-icons/fi";

export function AiHighlight() {
  return (
    <section className="overflow-hidden border-y border-border/60 bg-[radial-gradient(50rem_28rem_at_15%_30%,color-mix(in_oklab,var(--accent-primary)_12%,transparent)_0%,transparent_55%)] py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-bg-card/40 px-3 py-2 text-[11px] font-semibold text-text-muted backdrop-blur-md sm:text-xs">
              <FiCpu className="h-4 w-4 shrink-0 text-accent-cyan" />
              <span>AI &amp; Agentic Systems</span>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-text-primary [font-family:var(--font-display)] sm:text-3xl lg:text-4xl">
              AI Experience, Backed by GitHub.
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
              Alongside MERN development, I actively invest in{" "}
              <span className="font-medium text-text-secondary">
                Python, AI engineering, prompt engineering, and agentic systems
              </span>{" "}
              through{" "}
              <span className="font-medium text-text-secondary">
                GIAIC (2025–2026)
              </span>
              . My public repositories showcase hands-on work ranging from
              agentic AI experiments and automation workflows to larger
              AI-powered applications and production-ready prototypes.
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-text-secondary">
              <li>
                • GIAIC Track: Meta AI, Python, Prompt Engineering & Agentic AI
              </li>
              <li>
                • Projects: Personal AI Employee, AI Grocery Planner, Robotics
                Book, Generative AI Applications
              </li>
              <li>
                • SMIT (2024): Web Application Development Foundation
              </li>
              <li>
                • Focus Areas: AI Automation, LLM Integration, Full-Stack
                Development
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-primary px-5 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.55)] sm:w-auto"
              >
                View AI Projects
                <FiArrowUpRight className="h-4 w-4" />
              </Link>

              <span className="text-center text-xs leading-5 text-text-muted sm:text-left">
                Tip: Use the{" "}
                <strong className="text-text-secondary">AI/ML</strong> filter on
                the projects page.
              </span>
            </div>
          </div>

          {/* Code Card */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-border bg-bg-card/40 p-4 backdrop-blur-md sm:p-6 lg:p-8">
              <div className="font-mono text-[10px] text-text-muted sm:text-xs">
                highlight.json
              </div>

              <pre className="mt-4 w-full overflow-x-auto rounded-2xl bg-bg-secondary/20 p-4 text-[11px] leading-relaxed text-text-secondary sm:text-xs md:text-sm">
{`{
  "program": "GIAIC",
  "focus": [
    "Agentic AI",
    "Python",
    "Prompt Engineering",
    "LLM Applications"
  ],
  "repos": [
    "Personal-AI-Employee-FTEs",
    "AI-Powered_Grocery-Planner",
    "Robotics-Book",
    "Language-Web-App-GenAI"
  ],
  "skills": [
    "OpenAI APIs",
    "Automation",
    "Prompt Engineering",
    "Full-Stack Development"
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}