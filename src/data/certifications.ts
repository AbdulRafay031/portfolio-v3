export type Certification = {
  title: string;
  issuer: string;
  period: string;
  detail: string;
};

/** Matches resume education section: SMIT (2024) and GIAIC (2025–2026). */
export const certifications: Certification[] = [
  {
    title: "Web Application Development",
    issuer: "SMIT (Saylani Mass IT Training Program)",
    period: "2024",
    detail:
      "Intensive web application development track covering modern frontend and full-stack fundamentals.",
  },
  {
    title: "Agentic AI — Meta AI, Python & Prompt Engineering",
    issuer: "GIAIC (Governor Initiative for Artificial Intelligence & Computing)",
    period: "2025 — 2026",
    detail:
      "Program covering Meta AI tooling, Python for AI, prompt engineering, and agentic AI systems — aligned with coursework repos on GitHub.",
  },
];
