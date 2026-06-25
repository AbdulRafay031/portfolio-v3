export type Certification = {
  id: string;
  title: string;
  issuer: string;
  period: string;
  detail: string;
  icon: string;
  link: string;
  image?: string;   // path to image in /public/certificates/
  highlight?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "micro1",
    title: "Micro1 Certified Frontend Engineer",
    issuer: "Micro1",
    period: "June 2026",
    detail:
      "Globally benchmarked Frontend Engineering certification — validates React, Next.js, TypeScript, and full-stack web development skills against international standards.",
    icon: "🏆",
    link: "https://microl.ai/apply-as-talent", // Replace with actual link
    image: "/certificates/micro1.jpg",     // Place image in /public/certificates/
    highlight: true,
  },
  {
    id: "giaic",
    title: "Agentic AI — Meta AI, Python & Prompt Engineering",
    issuer: "GIAIC (Governor Initiative for Artificial Intelligence & Computing)",
    period: "2025 — 2026",
    detail:
      "200+ hours covering Python for AI, prompt engineering, LLM APIs (OpenAI, Gemini, Groq), and multi-step agentic AI workflows.",
    icon: "🤖",
    link: "https://github.com/AbdulRafay031",
    image: "/certificates/giaic.png",
  },
  {
    id: "smit",
    title: "Web Application Development",
    issuer: "SMIT (Saylani Mass IT Training Program)",
    period: "2024",
    detail:
      "Intensive web application development track covering modern frontend and full-stack fundamentals — practical, project-based curriculum.",
    icon: "🌐",
    link: "#",
    image: "/certificates/smit.png",
  },
];