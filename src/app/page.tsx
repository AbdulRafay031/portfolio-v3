import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { AiHighlight } from "@/components/sections/ai-highlight";
import { ContactCtaStrip } from "@/components/sections/contact-cta-strip";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSnapshot />
      <TechMarquee />
      <AiHighlight />
      <FeaturedProjects />
      <ExperiencePreview />
      <ContactCtaStrip />
    </div>
  );
}
