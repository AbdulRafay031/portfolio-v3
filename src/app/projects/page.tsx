import { Container } from "@/components/layout/container";
import { ProjectsGallery } from "@/components/projects/projects-gallery";

export const metadata = {
  title: "Projects | Abdul Rafay",
  description:
    "Projects gallery with filtering and search. Explore featured work and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-bg-primary">
      <Container className="py-16 md:py-20">
        <h1 className="text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
          Projects
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
          Browse a curated set of projects. Use filters and search to quickly
          find relevant work.
        </p>

        <div className="mt-10">
          <ProjectsGallery />
        </div>
      </Container>
    </div>
  );
}

