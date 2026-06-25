import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { CopyEmailCard } from "@/components/contact/copy-email-card";
import { FiGithub, FiLinkedin, FiMapPin, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "Contact | Abdul Rafay",
  description: "Contact Abdul Rafay for roles, freelance, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="bg-bg-primary">
      <Container className="py-16 md:py-20">
        <h1 className="text-4xl font-extrabold text-text-primary [font-family:var(--font-display)] sm:text-5xl">
          Contact
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
          For job opportunities, freelance work, or collaboration — send me a
          message and I’ll reply as soon as possible.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <CopyEmailCard email="rafay16031@gmail.com" />

            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="flex items-center gap-3 text-sm font-semibold text-text-secondary">
                <FiPhone className="h-4 w-4 text-accent-cyan" /> +92-316-116-3799
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm font-semibold text-text-secondary">
                <FiMapPin className="h-4 w-4 text-accent-primary" /> Karachi,
                Pakistan
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold text-text-muted">
                Socials
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/AbdulRafay031"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-secondary/25 px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-accent-primary/60"
                >
                  <FiGithub className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-rafay-a6569b3a7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-secondary/25 px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-accent-primary/60"
                >
                  <FiLinkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}

