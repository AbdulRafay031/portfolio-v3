import Link from "next/link";
import { DownloadCvButton } from "@/components/providers/cv-download-provider";
import { FiArrowUpRight, FiArrowDown, FiDownload } from "react-icons/fi";
import { OdooExpertise } from "@/components/v5/showcase";
import { HeroSystem, ShowcaseBento } from "@/components/v6/showcase";
import { AgentSwarm } from "@/components/v6/agent-swarm";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { ProjectVisual, Flagship, TechExplorer, MotionLab, Reveal } from "@/components/v4/experience";

export default function Home() {
  return (
    <div className="v4-home">
      <AgentSwarm/>
      <section className="v4-wrap v5-hero">
        <div className="v5-hero-copy"><p className="v4-kicker v6-eyebrow">ODOO TECHNO-FUNCTIONAL CONSULTANT / FULL-STACK / AI</p><h1>Engineering<br/>what&apos;s <em>next.</em></h1><p className="v5-status"><i className="v4-dot"/> Currently at <strong>TechHub</strong></p><p className="v5-role">I connect business processes, ERP and intelligent software to build systems that work in the real world.</p><div className="v4-actions"><Link className="v4-button" href="#showcase">Explore my work <FiArrowUpRight/></Link><DownloadCvButton className="v4-button secondary">Download CV <FiDownload/></DownloadCvButton></div><a className="v5-scroll" href="#showcase"><FiArrowDown/> Explore the ecosystem</a></div><HeroSystem/>
      </section>
      <ShowcaseBento/>
      <OdooExpertise/>
      <Flagship/>
      <section className="v4-wrap v4-section" id="selected"><Reveal><div className="v4-section-head"><div><p className="v4-kicker">02 / SELECTED WORK</p><h2 className="v4-heading">Built to solve.<br/>Designed to last.</h2></div><Link className="v4-text-link" href="/projects">All projects <FiArrowUpRight/></Link></div></Reveal>
        <div className="v4-project-grid">{projects.filter(p=>p.featured && p.slug!=="fatimaz").map((p,i)=><Reveal key={p.slug}><Link className="v4-project" href={`/projects/${p.slug}`}><ProjectVisual project={p}/><div className="v4-project-meta"><div><p className="v4-kicker">0{i+2} / {p.categories[0]}</p><h3>{p.title}</h3></div><FiArrowUpRight/></div><p>{p.description}</p></Link></Reveal>)}</div>
      </section>
      <section className="v4-wrap v4-section" id="about"><Reveal><div className="v4-section-head"><div><p className="v4-kicker">03 / THE PERSON</p><h2 className="v4-heading">Beyond<br/>the interface.</h2></div><Link className="v4-text-link" href="/about">More about me <FiArrowUpRight/></Link></div></Reveal><div className="v4-bento"><div className="v4-bento-main"><p className="v4-kicker">ABOUT ME</p><h3>Engineering with a product mindset.</h3><p>Based in Karachi, I work across frontend, backend and AI. My focus is connecting design and business logic into reliable, usable products.</p></div><div><p className="v4-kicker">CERTIFICATION</p><h3>Micro1</h3><p>Certified Frontend Engineer</p><Link href="/about" className="v4-text-link">Credentials <FiArrowUpRight/></Link></div><div><p className="v4-kicker">BACKGROUND</p><h3>BS Computer Science</h3><p>SMIU · Web & mobile development · Agentic AI studies</p></div></div></section>
      <TechExplorer/>
      <MotionLab/>
      <section className="v4-wrap v4-section"><Reveal><div className="v4-section-head"><div><p className="v4-kicker">06 / EXPERIENCE</p><h2 className="v4-heading">The journey.</h2></div><Link href="/experience" className="v4-text-link">Full timeline <FiArrowUpRight/></Link></div></Reveal><div className="v4-timeline">{experience.map((e,i)=><Reveal key={e.company}><div className="v4-timeline-row"><span className="v4-kicker">0{i+1}</span><div><h3>{e.company}</h3><p>{e.role}</p></div><span>{e.period}</span></div></Reveal>)}</div></section>
      <section className="v4-contact"><div className="v4-wrap"><p className="v4-kicker">07 / LET’S COLLABORATE</p><h2>Have something<br/>ambitious in mind?</h2><Link href="/contact" className="v4-button">Let’s build it <FiArrowUpRight/></Link></div></section>
    </div>
  );
}
