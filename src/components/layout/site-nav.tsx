"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { DownloadCvButton } from "@/components/providers/cv-download-provider";
import {
  FiArrowUpRight,
  FiDownload,
  FiMenu,
  FiX,
} from "react-icons/fi";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const command = useRef<HTMLDialogElement>(null);
  const [query,setQuery]=useState("");
  const progress=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const key=(event:KeyboardEvent)=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();command.current?.showModal();}};
    const scroll=()=>{const total=document.documentElement.scrollHeight-window.innerHeight;if(progress.current)progress.current.style.transform=`scaleX(${total>0?window.scrollY/total:0})`;};
    window.addEventListener("keydown",key);window.addEventListener("scroll",scroll,{passive:true});scroll();
    return()=>{window.removeEventListener("keydown",key);window.removeEventListener("scroll",scroll);};
  },[]);

  return (
    <header className="v4-nav sticky top-0 z-50">
      <div ref={progress} className="v4-scroll-progress"/>
      <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-[var(--container-pad-mobile)] py-4 md:px-[var(--container-pad-desktop)]">
        {/* Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-text-primary"
        >
          <span className="v4-brand inline-flex h-9 w-9 items-center justify-center">
            AR
          </span>

          <span className="hidden sm:inline">Abdul Rafay</span>

          <span className="ml-2 hidden items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 text-xs font-semibold text-accent-green 2xl:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            At TechHub
          </span>
        </Link>

        {/* Desktop Nav */}
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

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="v4-command-button" onClick={()=>command.current?.showModal()} aria-label="Open command menu">⌘ K</button>
          <Link
            href="/projects"
            className="hidden items-center gap-2 rounded-xl border border-accent-primary/40 bg-accent-primary/10 px-4 py-2 text-sm font-semibold text-text-primary transition hover:border-accent-primary/70 hover:shadow-[0_0_18px_rgba(108,99,255,0.35)] md:inline-flex"
          >
            View Work
            <FiArrowUpRight className="h-4 w-4" />
          </Link>

          <DownloadCvButton
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-accent-primary px-4 py-2 text-sm font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]"
          >
            <span>Download CV</span>
            <FiDownload className="h-4 w-4" />
          </DownloadCvButton>

          <ThemeToggle />

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card/40 text-text-primary backdrop-blur-md transition hover:border-accent-primary/60 lg:hidden"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/60 bg-bg-primary/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 px-[var(--container-pad-mobile)] py-4">
            {links.map((l) => {
              const active = pathname === l.href;

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-accent-primary/10 text-text-primary"
                      : "text-text-muted hover:bg-bg-card/40 hover:text-text-primary"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="mt-3 border-t border-border/60 pt-3">
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="mb-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-accent-primary/40 bg-accent-primary/10 px-4 py-3 text-sm font-semibold text-text-primary"
              >
                View Work
                <FiArrowUpRight className="h-4 w-4" />
              </Link>

              <DownloadCvButton
                beforeOpen={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-primary px-4 py-3 text-sm font-semibold text-white"
              >
                Download CV
                <FiDownload className="h-4 w-4" />
              </DownloadCvButton>
            </div>
          </nav>
        </div>
      )}
      <dialog ref={command} className="v4-dialog v4-command" onClose={()=>setQuery("")}>
        <div className="v4-dialog-header"><strong>Quick navigation</strong><button aria-label="Close command menu" onClick={()=>command.current?.close()}><FiX/></button></div>
        <input autoFocus aria-label="Search navigation" placeholder="Search pages…" value={query} onChange={e=>setQuery(e.target.value)}/>
        <div className="v4-command-links">{links.filter(l=>l.label.toLowerCase().includes(query.toLowerCase())).map(l=><Link key={l.href} href={l.href} onClick={()=>command.current?.close()}>{l.label}<FiArrowUpRight/></Link>)}
        {"download cv".includes(query.toLowerCase())&&<DownloadCvButton className="cv-command-trigger" beforeOpen={()=>command.current?.close()}>Download CV<FiDownload/></DownloadCvButton>}</div>
      </dialog>
    </header>
  );
}
