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
      "Build responsive React and Next.js components with performance and accessibility in mind.",
      "Collaborate through Git workflows and ship iterative improvements to production features.",
      "Own bug fixes and UX polish, optimizing SEO and cross-browser reliability.",
    ],
  },
  {
    company: "GIAIC",
    role: "AI — Python, Prompt Engineering & Agentic AI (Program)",
    period: "2025 — 2026",
    bullets: [
      "Studying Meta AI tooling, Python for AI, and prompt engineering within the GIAIC program.",
      "Shipping agentic-AI coursework and experiments to GitHub (e.g. AgenticAIClass1, GIAIC Python assignments).",
      "Building a larger Python-based Personal AI Employee prototype to practice multi-step agent-style workflows.",
    ],
  },
  {
    company: "CodSoft",
    role: "Frontend Developer",
    period: "2025 — 2026",
    bullets: [
      "Engineered user-friendly interfaces using JavaScript, React, and Next.js.",
      "Integrated APIs and improved application speed, SEO, and maintainability.",
    ],
  },
  {
    company: "Fiverr",
    role: "MERN Stack Developer (Freelance)",
    period: "2024 — 2026",
    bullets: [
      "Delivered client projects with clear communication and reliable deployments.",
      "Built dashboards and API-driven workflows to improve system visibility and accuracy.",
    ],
  },
];

