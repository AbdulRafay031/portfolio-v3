import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { ProjectVisual } from "@/components/v4/experience";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({params}:{params:Promise<Params>}):Promise<Metadata>{
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug);
  return project?{title:`${project.title} | Abdul Rafay`,description:project.description}: {};
}

const details: Record<string,{problem:string; approach:string; outcome:string}> = {
  fatimaz:{problem:"Fashion retail needs a connected shopping and operational experience rather than isolated storefront and back-office tools.",approach:"A full-stack storefront, customer account area, centralized admin workflows, inventory and orders, with AI Stylist and virtual try-on features.",outcome:"The project is in development with a public storefront and a customer-facing demonstration. Final business performance will be evaluated after rollout."},
  fyp:{problem:"Build a practical capstone using a modern, maintainable full-stack architecture.",approach:"Next.js, PostgreSQL and Prisma support a responsive interface, authentication and structured data.",outcome:"Academic full-stack project with a deployed demo."},
  "retail-ledger":{problem:"Businesses need a unified view of expenses, balances and financial activity.",approach:"React and an Express/MongoDB backend connect tracking, balance management and dashboard views.",outcome:"A web-based financial management application."},
  "personal-ai-employee-ftes":{problem:"Explore how AI workflows can carry out multi-step tasks with context.",approach:"Python prototype exploring tool calling, memory simulation and agent-style execution.",outcome:"An experimental codebase for agentic automation concepts."},
  "ai-powered-grocery-planner":{problem:"Meal and grocery planning can be time-consuming and difficult to budget.",approach:"AI-assisted recommendations organize meal ideas, shopping lists and grocery budgets.",outcome:"A planning application designed to simplify grocery decisions."},
  "hackathon1-book":{problem:"Present robotics learning material in an accessible online format.",approach:"Rapid hackathon prototyping and deployment of a robotics-oriented web experience.",outcome:"A deployed hackathon demo."},
  "nao-medical-task":{problem:"Explore AI-assisted interfaces for language and task workflows.",approach:"TypeScript application with generative AI integration and a web interface.",outcome:"A deployed prototype demonstrating AI-assisted interactions."},
  "portfolio-v1":{problem:"Present technical projects and professional experience in a single site.",approach:"Next.js and Tailwind with an EmailJS-backed contact form.",outcome:"A previous portfolio iteration."},
};

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const detail=details[slug];

  return (
    <div className="bg-bg-primary">
      <Container className="py-12 md:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-text-secondary"
        >
          <FiArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <div className="mt-8 rounded-3xl border border-border bg-bg-card/40 p-6 md:p-10 backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span
                key={c}
                className="rounded-full bg-accent-primary/15 px-3 py-1 text-xs font-semibold text-accent-primary"
              >
                {c}
              </span>
            ))}
          </div>

          <h1 className="mt-5 text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/70 bg-bg-secondary/30 px-3 py-1 text-xs font-semibold text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-6 py-3 font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]"
              >
                Live demo <FiArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-text-secondary transition hover:border-accent-primary/60"
              >
                <FiGithub className="h-4 w-4" /> GitHub
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-8"><ProjectVisual project={project}/></div>
        {slug==="fatimaz"&&<section className="mt-12"><p className="v4-kicker">PRODUCT WALKTHROUGH</p><h2 className="v4-heading mb-6">See it in action.</h2><video className="w-full rounded-xl border border-border" controls playsInline preload="none" poster="/work/fatimaz.webp" src="/work/fatimaz-showcase.mp4"/></section>}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-bg-card/30 p-8 backdrop-blur-md lg:col-span-2">
            <h2 className="text-xl font-bold text-text-primary">
              Project breakdown
            </h2>
            <div className="mt-4 space-y-6 text-sm leading-7 text-text-muted">
              <div>
                <div className="font-semibold text-text-secondary">
                  Problem statement
                </div>
                <p className="mt-2">
                  {detail?.problem ?? project.description}
                </p>
              </div>
              <div>
                <div className="font-semibold text-text-secondary">
                  Solution & approach
                </div>
                <p className="mt-2">
                  {detail?.approach ?? project.tech.join(", ")}
                </p>
              </div>
              <div>
                <div className="font-semibold text-text-secondary">
                  Results / impact
                </div>
                <p className="mt-2">
                  {detail?.outcome ?? project.impact ?? "See the linked project for details."}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-bg-card/30 p-8 backdrop-blur-md">
            <h3 className="text-sm font-semibold text-text-muted">Overview</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-6">
                <dt className="text-text-muted">Type</dt>
                <dd className="font-semibold text-text-secondary">Web App</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-text-muted">Focus</dt>
                <dd className="font-semibold text-text-secondary">
                  {project.categories[0]}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
}

