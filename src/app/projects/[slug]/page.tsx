import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="bg-bg-primary">
      <Container className="py-12 md:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-text-secondary"
        >
          <FiArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <div className="mt-8 rounded-3xl border border-border bg-bg-card/40 p-10 backdrop-blur-md">
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

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-bg-card/30 p-8 backdrop-blur-md lg:col-span-2">
            <h2 className="text-xl font-bold text-text-primary">
              Case study (template)
            </h2>
            <div className="mt-4 space-y-6 text-sm leading-7 text-text-muted">
              <div>
                <div className="font-semibold text-text-secondary">
                  Problem statement
                </div>
                <p className="mt-2">
                  What challenge did this project solve? (Add specifics per
                  project: business needs, users, constraints.)
                </p>
              </div>
              <div>
                <div className="font-semibold text-text-secondary">
                  Solution & approach
                </div>
                <p className="mt-2">
                  Architecture decisions, key features, and implementation
                  highlights.
                </p>
              </div>
              <div>
                <div className="font-semibold text-text-secondary">
                  Results / impact
                </div>
                <p className="mt-2">
                  Metrics, performance improvements, and deployment notes.
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
                <dt className="text-text-muted">Role</dt>
                <dd className="font-semibold text-text-secondary">
                  Full-stack
                </dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-text-muted">Team</dt>
                <dd className="font-semibold text-text-secondary">Solo</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
}

