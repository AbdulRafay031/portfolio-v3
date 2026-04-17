export type SkillGroup = {
  title: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 78 },
      { name: "MongoDB", level: 76 },
      { name: "REST APIs", level: 84 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 85 },
      { name: "Vercel", level: 80 },
      { name: "Testing", level: 60 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Python (AI)", level: 78 },
      { name: "Prompt engineering", level: 80 },
      { name: "Agentic AI patterns", level: 72 },
    ],
  },
];

export const radarSkills = [
  { subject: "Frontend", value: 90 },
  { subject: "Backend", value: 78 },
  { subject: "AI/ML", value: 74 },
  { subject: "Design", value: 65 },
  { subject: "APIs", value: 84 },
] as const;

