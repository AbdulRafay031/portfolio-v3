"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolved =
    theme === "system" ? (systemTheme ?? "dark") : (theme ?? "dark");

  return (
    <button
      type="button"
      data-cursor="interactive"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card/40 text-text-secondary backdrop-blur-md transition hover:border-accent-primary/60 hover:shadow-[0_0_18px_rgba(108,99,255,0.35)]",
        className
      )}
    >
      {mounted && resolved === "dark" ? (
        <FiSun className="h-4 w-4" />
      ) : (
        <FiMoon className="h-4 w-4" />
      )}
    </button>
  );
}

