import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-bg-primary">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-pad-mobile)] py-10 md:px-[var(--container-pad-desktop)]">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold text-text-primary">
              Abdul Rafay
            </div>
            <div className="mt-1 text-sm text-text-muted">
              MERN Stack Developer · Frontend Engineer · Karachi, Pakistan
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:abdul.rafay.9389@gmail.com"
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card/40 text-text-secondary backdrop-blur-md transition hover:border-accent-primary/60 hover:shadow-[0_0_18px_rgba(108,99,255,0.35)]"
            >
              <FiMail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/AbdulRafay031"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card/40 text-text-secondary backdrop-blur-md transition hover:border-accent-primary/60 hover:shadow-[0_0_18px_rgba(108,99,255,0.35)]"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rafay-a6569b3a7"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card/40 text-text-secondary backdrop-blur-md transition hover:border-accent-primary/60 hover:shadow-[0_0_18px_rgba(108,99,255,0.35)]"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Abdul Rafay. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/projects" className="hover:text-text-secondary">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-text-secondary">
              Contact
            </Link>
            <a
              href="/Abdul-Rafay-Resume.pdf"
              className="hover:text-text-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

