export type ProjectCategory =
  | "E-Commerce"
  | "Full-Stack"
  | "Frontend"
  | "API/Backend"
  | "Finance"
  | "Next.js"
  | "AI/ML";

export type Project = {
  slug: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  tech: string[];
  featured?: boolean;
  links: { live?: string; github?: string };
};

/** Includes flagship MERN work + AI/agentic projects from github.com/AbdulRafay031 */
export const projects: Project[] = [
  {
    slug: "fatimaz",
    title: "FatimaZ — E-Commerce Platform",
    description:
      "Full dynamic e-commerce with dual admin+user panel, real-time inventory, order management, and stock updates.",
    categories: ["E-Commerce", "Full-Stack", "Next.js"],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
    featured: true,
    links: {
      live: "https://fatimaz.vercel.app/",
    },
  },
  {
    slug: "retail-ledger",
    title: "Retail Ledger Web Application",
    description:
      "Cloud-based financial automation with unlimited users, expense tracking, balance management, and real-time dashboards.",
    categories: ["Finance", "Full-Stack", "Frontend", "API/Backend"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Axios", "Redux"],
    featured: true,
    links: {
      live: "https://fatimaz-shop-app.vercel.app/",
    },
  },
  {
    slug: "personal-ai-employee-ftes",
    title: "Personal AI Employee (FTEs)",
    description:
      "Python project exploring AI employee / agent-style automation patterns — substantial codebase for experiments and iteration.",
    categories: ["AI/ML", "Full-Stack"],
    tech: ["Python", "AI", "Automation"],
    featured: true,
    links: {
      github: "https://github.com/AbdulRafay031/Personal-AI-Employee-FTEs",
    },
  },
  {
    slug: "agentic-ai-class-1",
    title: "Agentic AI — Class 1",
    description:
      "Coursework repo for agentic AI fundamentals (Python), aligned with GIAIC / agentic AI learning path.",
    categories: ["AI/ML"],
    tech: ["Python", "Agentic AI", "LLMs"],
    featured: true,
    links: {
      github: "https://github.com/AbdulRafay031/AgenticAIClass1",
    },
  },
  {
    slug: "giaic-assignments-python",
    title: "GIAIC Assignments (Python)",
    description:
      "Python assignments and exercises from the GIAIC program — structured practice for AI-oriented development.",
    categories: ["AI/ML", "API/Backend"],
    tech: ["Python", "GIAIC", "AI"],
    links: {
      github: "https://github.com/AbdulRafay031/GIAIC_Assignments_Python",
    },
  },
  {
    slug: "hackathon1-book",
    title: "Hackathon 1 — Book / Robotics",
    description:
      "Hackathon project with deployed demo; robotics / VLA-oriented branch work (see repo branches).",
    categories: ["AI/ML", "Frontend"],
    tech: ["Shell", "Vercel", "Hackathon"],
    links: {
      live: "https://hackathon1-book-rho.vercel.app",
      github: "https://github.com/AbdulRafay031/Hackathon1-Book",
    },
  },
  {
    slug: "nao-medical-task",
    title: "NAO Medical Task",
    description:
      "TypeScript project with a live demo — medical / robotics task workflow (NAO-related).",
    categories: ["AI/ML", "Frontend"],
    tech: ["TypeScript", "Vercel"],
    links: {
      live: "https://nao-medical-task.vercel.app",
      github: "https://github.com/AbdulRafay031/Nao-Medical-Task",
    },
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description:
      "My previous Next.js portfolio — reference project before the v3 redesign.",
    categories: ["Frontend", "Next.js"],
    tech: ["Next.js", "Tailwind CSS", "EmailJS"],
    links: {
      live:   "https://portfolio-v3-sage-delta.vercel.app/",
      github: "https://github.com/AbdulRafay031",
    },
  },
];

export const projectFilters = [
  "All",
  "AI/ML",
  "E-Commerce",
  "Full-Stack",
  "Frontend",
  "API/Backend",
  "Finance",
  "Next.js",
] as const;
