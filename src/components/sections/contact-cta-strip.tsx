import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FiArrowUpRight } from "react-icons/fi";

export function ContactCtaStrip() {
  return (
    <section className="bg-bg-secondary">
      <div className="border-y border-border/60 bg-[radial-gradient(40rem_18rem_at_20%_50%,color-mix(in_oklab,var(--accent-primary)_18%,transparent)_0%,transparent_70%)]">
        <Container className="py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-semibold text-text-muted">
                Contact
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-3xl">
                Let&apos;s build something great.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
                If you have a role, a project, or a collaboration in mind, I’d
                love to hear about it.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-6 py-3 font-semibold text-white transition hover:shadow-[0_0_20px_rgba(108,99,255,0.6)]"
            >
              Contact me <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}

