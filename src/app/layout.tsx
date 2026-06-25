import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { Loader } from "@/components/ui/loader";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-v3-sage-delta.vercel.app"),
  title: "Abdul Rafay | MERN Stack Developer — Karachi",
  description:
    "Full-stack developer specializing in React, Next.js, Node.js. Micro1 Certified Frontend Engineer. Available for remote & on-site roles.",
  keywords: [
    "MERN Stack Developer Karachi",
    "Next.js Developer Pakistan",
    "React Developer",
    "Full Stack Developer Karachi",
    "Micro1 Certified Frontend Engineer",
  ],
  openGraph: {
    type: "website",
    images: ["/og-image.png"],
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
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden flex flex-col bg-bg-primary text-text-secondary">
        <ThemeProvider>
          <LenisProvider>
            <Loader />
            <CustomCursor />
            <SiteNav />

            <main className="flex-1 overflow-x-hidden">
              {children}
            </main>

            <SiteFooter />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}