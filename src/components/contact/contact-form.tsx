"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { cn } from "@/lib/cn";
import { FiCheck, FiLoader } from "react-icons/fi";

const schema = z.object({
  name: z.string().min(2, "Name is too short").max(80),
  email: z.string().email("Enter a valid email"),
  subject: z.enum(["Job Opportunity", "Freelance", "Collaboration", "Other"]),
  message: z.string().min(10, "Message is too short").max(500),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const subjects = ["Job Opportunity", "Freelance", "Collaboration", "Other"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { subject: "Job Opportunity" },
  });

  const message = watch("message") ?? "";
  const chars = useMemo(() => message.length, [message]);

  const onSubmit = handleSubmit(async (values) => {
    setError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 } });
      reset();
      setTimeout(() => setStatus("idle"), 2500);
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md transition",
        status === "error" && "animate-[shake_300ms_ease-in-out]"
      )}
    >
      <div className="text-sm font-semibold text-text-muted">Send a message</div>
      <div className="mt-2 text-xl font-bold text-text-primary">
        Tell me about your project.
      </div>

      {/* honeypot */}
      <input
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("website")}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            className={inputClass(Boolean(errors.name))}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            className={inputClass(Boolean(errors.email))}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Subject" error={errors.subject?.message}>
          <select {...register("subject")} className={inputClass(false)}>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message" error={errors.message?.message}>
          <textarea
            {...register("message")}
            className={cn(inputClass(Boolean(errors.message)), "min-h-[140px]")}
            placeholder="What are you building? What’s the timeline?"
          />
          <div className="mt-2 text-right text-xs font-semibold text-text-muted">
            {chars} / 500
          </div>
        </Field>
      </div>

      {error ? (
        <div className="mt-4 rounded-2xl border border-accent-pink/40 bg-accent-pink/10 px-4 py-3 text-sm text-accent-pink">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        data-cursor="interactive"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-primary px-6 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]"
      >
        {status === "sending" ? (
          <>
            <FiLoader className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : status === "success" ? (
          <>
            <FiCheck className="h-4 w-4" /> Sent
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full rounded-2xl border bg-bg-secondary/25 px-4 py-3 text-sm text-text-secondary placeholder:text-text-muted outline-none backdrop-blur-md transition",
    invalid
      ? "border-accent-pink/60 focus:border-accent-pink"
      : "border-border focus:border-accent-cyan/60"
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <label className="text-xs font-semibold text-text-muted">{label}</label>
        {error ? (
          <div className="text-xs font-semibold text-accent-pink">{error}</div>
        ) : null}
      </div>
      {children}
    </div>
  );
}

