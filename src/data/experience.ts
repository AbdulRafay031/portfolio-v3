export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "KDYS Lab (Pvt) Ltd",
    role: "Frontend / MERN Developer",
    period: "2026 — Present",
    bullets: [
      "Built and maintained 3+ production Next.js modules for a client-facing platform, improving page load time from 5s+ to under 1.5s via lazy loading, code splitting, and image optimization.",
      "Engineered frontend components with custom CSS/JS, reducing layout bugs by 80% through cross-browser testing on Chrome, Firefox, and Safari.",
      "Integrated REST APIs across React dashboards, improving data accuracy and eliminating manual reporting — saving ~4 hours/week for internal teams.",
      "Implemented JWT authentication flows and protected route patterns used across 2 active production apps.",
    ],
  },
  {
    company: "CodSoft",
    role: "Frontend Developer",
    period: "2025 — 2026",
    bullets: [
      "Engineered user-friendly interfaces using JavaScript, React, and Next.js for production-grade web applications.",
      "Integrated APIs and improved application performance — reducing load times by 40% and increasing SEO scores across all client projects.",
    ],
  },
  {
    company: "Fiverr",
    role: "MERN Stack Developer (Freelance)",
    period: "2023 — 2026",
    bullets: [
      "Delivered 5+ freelance projects for international clients (UK, UAE, US) — all with 5-star ratings and on-time delivery.",
      "Built e-commerce, SaaS dashboard, and API-driven web apps — FatimaZ platform now serves 5k+ monthly users.",
      "Maintained 100% client retention rate across all engagements through clear communication and reliable deployment.",
    ],
  },
];