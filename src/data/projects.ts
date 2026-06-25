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
  impact?: string;
  categories: ProjectCategory[];
  tech: string[];
  featured?: boolean;
  links: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
  slug: "fyp",
  title: "Final Year Project (FYP)",
  description:
    "A full-stack web application developed as a Final Year Project, focused on solving real-world problems through modern software engineering practices. Features responsive user interfaces, secure authentication, database integration, and scalable architecture to deliver an efficient and user-friendly experience.",
  impact: "Academic capstone project · Full-stack development · Real-world problem solving",
  categories: ["Full-Stack", "Frontend", "API/Backend"],
  tech: ["Next.js", "PostgreSQL", "Prisma", "JavaScript"],
  links: {
    live: "fyp-ten-delta.vercel.app",
    github: "https://github.com/huzidev/FYP",
  },
},
  {
    slug: "fatimaz",
    title: "FatimaZ — E-Commerce Platform",
    description:
      "Full dynamic e-commerce platform with dual admin+user panel, real-time inventory, order management, and stock updates. Serves 5k+ monthly users in production.",
    impact: "5k+ monthly users · Production-deployed",
    categories: ["E-Commerce", "Full-Stack", "Next.js"],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
    featured: true,
    links: {
      live: "https://fatimaz.vercel.app/",
      github: "https://github.com/AbdulRafay031/Fatimaz-Clothing-Store_E-commerce-.git",
    },
  },
  {
    slug: "retail-ledger",
    title: "Erp Management Web Application",
    description:
      "Cloud-based financial automation with unlimited users, expense tracking, balance management, and real-time dashboards. Built for real businesses — production deployed.",
    impact: "Production-deployed · Real business use",
    categories: ["Finance", "Full-Stack", "Frontend", "API/Backend"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Axios", "Redux"],
    featured: true,
    links: {
      live: "https://fatimaz-shop-app.vercel.app/",
      github: "https://github.com/AbdulRafay031/LedgerApp.git",
    },
    
  },
  {
    slug: "personal-ai-employee-ftes",
    title: "Personal AI Employee (FTEs)",
    description:
      "Python-based AI agent prototype implementing tool-calling, memory simulation, and multi-step autonomous task execution. Explores agentic AI patterns for real-world automation use cases — 500+ lines, actively maintained.",
    impact: "Agent-style AI · 500+ lines · Actively maintained",
    categories: ["AI/ML", "Full-Stack"],
    tech: ["Python", "AI", "Agentic AI", "Tool-calling", "LLMs"],
    featured: true,
    links: {
      github: "https://github.com/AbdulRafay031/Personal-AI-Employee-FTEs",
    },
  },
 {
  slug: "ai-powered-grocery-planner",
  title: "AI-Powered Grocery Planner",
  description:
    "An intelligent grocery planning application that uses AI to generate personalized shopping lists, meal recommendations, and budget-aware grocery plans. Designed to help users reduce food waste, save time, and make smarter purchasing decisions through AI-driven insights and automation.",
  impact: "AI-powered planning · Smart recommendations · Productivity focused",
  categories: ["AI/ML", "Full-Stack"],
  tech: ["Python", "OpenAI", "AI", "Next.js", "React", "Automation"],
  links: {
    github: "https://github.com/AbdulRafay031/AI-Powered_Grocery-Planner",
    live: "https://fatimaz-shop-app.vercel.app/",
  },
},
  {
    slug: "hackathon1-book",
    title: "Robotics-Book",
    description:
      "Hackathon project with deployed demo; robotics / VLA-oriented branch work demonstrating rapid prototyping and deployment skills.",
    categories: ["AI/ML", "Frontend"],
    tech: ["Shell", "Vercel", "Hackathon"],
    links: {
      live: "https://hackathon1-book-rho.vercel.app",
      github: "https://github.com/AbdulRafay031/Hackathon1-Book",
    },
  },
  {
    slug: "nao-medical-task",
    title: "Language Translator Web Application",
    description:
      "TypeScript project with a live demo — medical / robotics task workflow demonstrating integration of AI-assisted interfaces with real-world use cases.",
    categories: ["AI/ML", "Frontend"],
    tech: ["TypeScript", "Vercel", "GenerativeAI", "Gemini API"],
    links: {
      live: "https://nao-medical-task.vercel.app",
      github: "https://github.com/AbdulRafay031/Nao-Medical-Task",
    },
  },
  {
    slug: "portfolio-v1",
    title: "Abdul Rafay Portfolio",
    description:
      "My previous Next.js portfolio — reference project before the v3 redesign. Built with EmailJS contact form and Tailwind CSS.",
    categories: ["Frontend", "Next.js"],
    tech: ["Next.js", "Tailwind CSS", "EmailJS"],
    links: {
      live: "https://portfolio-v3-sage-delta.vercel.app/",
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