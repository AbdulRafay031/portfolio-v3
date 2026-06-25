import { Container } from "@/components/layout/container";
import { CertificationsWall } from "@/components/sections/certifications-wall";
import { IntroVideo } from "@/components/sections/intro-video";

export const metadata = {
  title: "About | Abdul Rafay",
  description:
    "Learn more about Abdul Rafay — Micro1 Certified Frontend Engineer and MERN Stack Developer from Karachi.",
};

const careerTimeline = [
  { year: "2022", event: "Started BS Computer Science at Sindh Madrasa-tul-Islam University" },
  { year: "2023", event: "Started freelancing on Fiverr as a Frontend / MERN Stack Developer" },
  { year: "2023–24", event: "Web & Mobile Application Development course at SMIT" },
  { year: "2025–26", event: "Agentic AI course — Python, Prompt Engineering & AI workflows at GIAIC" },
  { year: "Apr 2026–Present", event: "Frontend Engineer at KDYS Lab (Pvt) Ltd" },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-primary">
      <Container className="py-16 md:py-20 space-y-10">

        {/* ── 1. Page header ── */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
            About
          </h1>
          <p className="mt-5 text-base leading-7 text-text-muted">
            Hey! I'm Abdul Rafay, a MERN stack developer based in Karachi. I
            build fast, scalable web applications — from clean UIs to solid
            APIs. In 2023, I started freelancing and shipped 5+ real projects
            for international clients. Now at KDYS Lab, working on production
            systems that power actual businesses.{" "}
            <span className="text-text-secondary">
              I'm also diving deep into AI &amp; agentic workflows through GIAIC.
            </span>{" "}
            I'm Micro1 certified as a Frontend Engineer, proving my skills stack
            up against global standards. Let's build something great.
          </p>
        </div>

        {/* ── 2. Intro Video ── */}
        <IntroVideo />

        {/* ── 3. Location + Education — side by side ── */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg-card/40 p-6 backdrop-blur-md">
            <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Location
            </div>
            <div className="mt-2 text-base font-semibold text-text-primary">
              Karachi, Pakistan
            </div>
            <div className="mt-1.5 text-sm text-text-muted">
              Available for remote and on-site opportunities.
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-bg-card/40 p-6 backdrop-blur-md">
            <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Education
            </div>
            <div className="mt-2 text-base font-semibold text-text-primary">
              BS Computer Science
            </div>
            <div className="mt-1 text-sm text-text-muted">
              Sindh Madrasa-tul-Islam University · 2022–2026
            </div>
          </div>
        </div>

        {/* ── 4. Career Timeline ── */}
        <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
          <div className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-8">
            Career timeline
          </div>

          {/* Mobile: vertical stepper */}
          <ol className="sm:hidden space-y-0">
            {careerTimeline.map((item, i) => (
              <li key={item.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-3 rounded-full bg-accent-primary shrink-0 mt-0.5 ring-4 ring-accent-primary/10" />
                  {i < careerTimeline.length - 1 && (
                    <div className="mt-1 mb-1 w-px flex-1 min-h-[2rem] bg-border" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="text-xs font-bold text-accent-primary leading-tight">
                    {item.year}
                  </div>
                  <div className="mt-1 text-sm text-text-muted leading-5">
                    {item.event}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Desktop: horizontal stepper */}
          <div className="hidden sm:block relative">
            <div className="absolute top-[9px] left-[calc(100%/10)] right-[calc(100%/10)] h-px bg-border" />
            <ol className="grid grid-cols-5 gap-0 relative">
              {careerTimeline.map((item) => (
                <li
                  key={item.year}
                  className="relative flex flex-col items-center text-center px-2"
                >
                  <div className="size-[18px] rounded-full border-2 border-accent-primary bg-bg-primary z-10 shrink-0 ring-4 ring-accent-primary/10" />
                  <div className="mt-3 text-[11px] font-bold text-accent-primary leading-tight">
                    {item.year}
                  </div>
                  <div className="mt-1.5 text-[11px] text-text-muted leading-[1.4]">
                    {item.event}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </Container>

      {/* ── 5. Degree + Certifications wall ── */}
      <CertificationsWall />
    </div>
  );
}