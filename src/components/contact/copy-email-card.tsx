"use client";

import { useEffect, useState } from "react";
import { FiCheck, FiCopy, FiMail } from "react-icons/fi";

export function CopyEmailCard({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      data-cursor="interactive"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
        } catch {
          setCopied(false);
        }
      }}
      className="w-full rounded-3xl border border-border bg-bg-card/40 p-8 text-left backdrop-blur-md transition hover:border-accent-primary/60 hover:shadow-[0_0_18px_rgba(108,99,255,0.25)]"
      aria-label="Copy email"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-bg-secondary/25">
            <FiMail className="h-4 w-4 text-accent-primary" />
          </span>
          <div>
            <div className="text-xs font-semibold text-text-muted">Email</div>
            <div className="mt-1 text-sm font-semibold text-text-secondary">
              {email}
            </div>
          </div>
        </div>

        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-bg-secondary/25 text-text-secondary">
          {copied ? (
            <FiCheck className="h-4 w-4" />
          ) : (
            <FiCopy className="h-4 w-4" />
          )}
        </span>
      </div>

      <div className="mt-4 text-sm text-text-muted">
        Click to copy
        {copied ? (
          <span className="ml-2 font-semibold text-accent-green">Copied</span>
        ) : null}
      </div>
    </button>
  );
}

