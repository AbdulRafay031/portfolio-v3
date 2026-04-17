import { Container } from "@/components/layout/container";
import { CertificationsWall } from "@/components/sections/certifications-wall";
import { experience } from "@/data/experience";

export const metadata = {
  title: "About | Abdul Rafay",
  description:
    "Learn more about Abdul Rafay — MERN Stack Developer and Frontend Engineer.",
};

export default function AboutPage() {
  return (
    <div className="bg-bg-primary">
      <Container className="py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
            About
          </h1>
          <p className="mt-5 text-base leading-7 text-text-muted">
            I’m a Full Stack Developer specializing in JavaScript-based web
            applications with hands-on experience in React, Next.js, and MERN
            stack development. I’m also growing deep skills in{" "}
            <span className="text-text-secondary">
              AI, Python, and agentic systems
            </span>{" "}
            through GIAIC (2025–2026), with public coursework and projects on
            GitHub.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold text-text-muted">
                Work timeline
              </div>
              <div className="mt-6 space-y-6">
                {experience.map((x) => (
                  <div
                    key={`${x.company}-${x.role}`}
                    className="rounded-2xl border border-border/70 bg-bg-secondary/25 p-6"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div className="text-base font-bold text-text-primary">
                        {x.company}
                      </div>
                      <div className="text-sm font-semibold text-text-muted">
                        {x.period}
                      </div>
                    </div>
                    <div className="mt-1 text-sm font-semibold text-text-secondary">
                      {x.role}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-text-muted">
                      {x.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold text-text-muted">
                Location
              </div>
              <div className="mt-2 text-base font-semibold text-text-primary">
                Karachi, Pakistan
              </div>
              <div className="mt-4 text-sm text-text-muted">
                Available for remote and on-site opportunities.
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold text-text-muted">
                Education
              </div>
              <div className="mt-2 text-base font-semibold text-text-primary">
                BS Computer Science
              </div>
              <div className="mt-1 text-sm text-text-muted">
                Sindh Madrasa-tul-Islam University · 2022–2026
              </div>
              <div className="mt-4 text-sm text-text-muted">
                Certifications: SMIT Web Application Development (2024); GIAIC
                Agentic AI / Meta AI, Python &amp; Prompt Engineering (2025–2026)
                — see below.
              </div>
            </div>
          </div>
        </div>
      </Container>

      <CertificationsWall />
    </div>
  );
}
