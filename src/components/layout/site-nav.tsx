"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg-primary/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-[var(--container-pad-mobile)] py-4 md:px-[var(--container-pad-desktop)]">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-text-primary"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg-card/50 backdrop-blur-md transition group-hover:border-accent-primary/60 group-hover:shadow-[0_0_18px_rgba(108,99,255,0.35)]">
            AR
          </span>
          <span className="hidden sm:inline">Abdul Rafay</span>
          <span className="ml-2 hidden items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 text-xs font-semibold text-accent-green sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            Available for work
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative rounded-xl px-3 py-2 text-sm font-semibold text-text-muted transition hover:text-text-primary",
                  active && "text-text-primary"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-primary transition-transform duration-300",
                    "group-hover:scale-x-100",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/projects"
            className="hidden items-center gap-2 rounded-xl border border-accent-primary/40 bg-accent-primary/10 px-4 py-2 text-sm font-semibold text-text-primary transition hover:border-accent-primary/70 hover:shadow-[0_0_18px_rgba(108,99,255,0.35)] md:inline-flex"
          >
            View work <FiArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href="/Abdul-Rafay-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-4 py-2 text-sm font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]"
          >
            <span className="hidden sm:inline">Download CV</span>
            <FiDownload className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

