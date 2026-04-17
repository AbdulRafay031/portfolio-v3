"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiSearch } from "react-icons/fi";
import { projectFilters, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/cn";

type Filter = (typeof projectFilters)[number];

function matchesFilter(p: (typeof projects)[number], f: Filter) {
  if (f === "All") return true;
  return p.categories.includes(f as ProjectCategory);
}

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (!matchesFilter(p, filter)) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              data-cursor="interactive"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border border-border bg-bg-card/30 px-4 py-2 text-xs font-semibold text-text-muted backdrop-blur-md transition hover:border-accent-primary/60 hover:text-text-secondary",
                filter === f &&
                  "border-accent-primary/60 bg-accent-primary/10 text-text-secondary shadow-[0_0_16px_rgba(108,99,255,0.25)]"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="h-11 w-full rounded-2xl border border-border bg-bg-card/30 pl-11 pr-4 text-sm text-text-secondary placeholder:text-text-muted backdrop-blur-md outline-none transition focus:border-accent-cyan/60"
          />
        </div>
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {visible.map((p) => (
          <motion.div
            layout
            key={p.slug}
            className="group relative overflow-hidden rounded-3xl border border-border bg-bg-card/40 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-accent-primary/60 hover:shadow-[0_0_22px_rgba(108,99,255,0.25)]"
          >
            <div className="flex flex-wrap gap-2">
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-primary/15 px-3 py-1 text-xs font-semibold text-accent-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 text-lg font-bold text-text-primary">
              {p.title}
            </div>
            <div className="mt-2 text-sm leading-7 text-text-muted">
              {p.description}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Link
                href={`/projects/${p.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-4 py-2 text-sm font-semibold text-white transition hover:shadow-[0_0_18px_rgba(108,99,255,0.6)]"
              >
                Case study <FiArrowUpRight className="h-4 w-4" />
              </Link>
              {p.links.live ? (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-accent-cyan/60"
                >
                  Live <FiArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
              {p.links.github ? (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-accent-primary/60"
                >
                  <FiGithub className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {visible.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-border bg-bg-card/30 p-10 text-center text-sm text-text-muted">
          No projects match your search.
        </div>
      ) : null}
    </div>
  );
}

