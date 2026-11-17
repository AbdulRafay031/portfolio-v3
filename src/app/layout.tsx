import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./portfolio-v4.css";
import "./portfolio-v5.css";
import "./portfolio-v6.css";
import "./cv-selector.css";
import { CvDownloadProvider } from "@/components/providers/cv-download-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-v3-sage-delta.vercel.app"),
  title: "Abdul Rafay — Odoo Consultant, Full-stack & AI Developer",
  description:
    "Odoo Techno-Functional Consultant at TechHub, full-stack developer and AI solutions builder based in Karachi.",
  keywords: [
    "MERN Stack Developer Karachi",
    "Next.js Developer Pakistan",
    "React Developer",
    "Full Stack Developer Karachi",
    "Micro1 Certified Frontend Engineer",
  ],
  openGraph: {
    type: "website",
    images: ["/work/fatimaz-live-v6.webp"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-screen overflow-x-hidden flex flex-col bg-bg-primary text-text-secondary">
        <ThemeProvider>
          <CvDownloadProvider>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <SiteNav />

            <main id="main-content" className="flex-1">
              {children}
            </main>

            <SiteFooter />
          </CvDownloadProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
