"use client";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiPlay, FiX, FiCode, FiLayers, FiCpu } from "react-icons/fi";
import { type Project } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export function Reveal({children}: {children: ReactNode}) {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (!ref.current || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node=ref.current;
    const io=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){node.classList.add("v4-visible");io.disconnect();}}, {threshold:0.09});
    node.classList.add("v4-reveal"); io.observe(node);
    return ()=>io.disconnect();
  },[]);
  return <div ref={ref}>{children}</div>;
}

export function ProjectVisual({project}: {project: Project}) {
  if(project.slug==="fatimaz") return <div className="v4-project-visual fatimaz-visual"><Image src="/work/fatimaz.webp" alt="Fatimaz storefront preview" width={1100} height={764} sizes="(max-width: 768px) 100vw, 50vw"/></div>;
  return <div className={`v4-project-visual visual-${project.categories.includes("AI/ML")?"ai":"system"}`} aria-hidden="true"><span className="v4-kicker">{project.categories[0]} / PROJECT</span><div className="v4-abstract">{project.categories.includes("AI/ML")?<FiCpu/>:project.categories.includes("Finance")?<FiLayers/>:<FiCode/>}</div><div className="v4-visual-title">{project.title}</div><div className="v4-visual-pills">{project.tech.slice(0,3).map(t=><span key={t}>{t}</span>)}</div></div>;
}
const chapters=[
  {label:"Storefront",title:"A smarter shopping experience.",description:"Product discovery, categories, 360° product presentation, cart and checkout."},
  {label:"AI experience",title:"Intelligence meets fashion.",description:"AI Stylist and virtual try-on features designed to support product discovery."},
  {label:"Customer portal",title:"Everything in one place.",description:"Account management, orders and customer service connected to the business."},
  {label:"Operations",title:"A connected control center.",description:"Admin workflows for catalog, inventory, orders, customer management and reporting."},
];
export function Flagship(){
  const [active,setActive]=useState(0);
  const dialog=useRef<HTMLDialogElement>(null);
  return <section className="v4-flagship" id="work"><div className="v4-wrap v4-section"><Reveal><div className="v4-section-head"><div><p className="v4-kicker">01 / FLAGSHIP PROJECT</p><h2 className="v4-heading">Commerce,<br/>reimagined.</h2></div><span className="v4-kicker">CLIENT PROJECT / IN DEVELOPMENT</span></div></Reveal>
    <div className="v4-flag-grid"><div className="v4-browser"><div className="v4-browser-bar"><span>● ● ●</span><span>fatimaz.vercel.app</span><FiArrowUpRight/></div><Image src="/work/fatimaz.webp" alt="Real Fatimaz online storefront" width={1100} height={764} sizes="(max-width:900px) 100vw, 65vw"/><button className="v4-play" onClick={()=>dialog.current?.showModal()}><FiPlay/> Watch project film</button></div>
      <div className="v4-flag-info"><p className="v4-kicker">FATIMAZ / FULL-STACK E-COMMERCE</p><div className="v4-tabs" role="group" aria-label="Project chapters">{chapters.map((c,i)=><button key={c.label} aria-pressed={active===i} className={active===i?"active":""} onClick={()=>setActive(i)}>{String(i+1).padStart(2,"0")} {c.label}</button>)}</div><div key={active} className="v4-chapter"><h3>{chapters[active].title}</h3><p>{chapters[active].description}</p></div><Link href="/projects/fatimaz" className="v4-button">Read case study <FiArrowUpRight/></Link><a href="https://fatimaz.vercel.app/" target="_blank" rel="noreferrer" className="v4-text-link">Visit website <FiArrowUpRight/></a></div></div>
    <dialog ref={dialog} className="v4-dialog" onClose={()=>dialog.current?.querySelector("video")?.pause()}><div className="v4-dialog-header"><strong>Fatimaz — customer showcase</strong><button aria-label="Close video" onClick={()=>dialog.current?.close()}><FiX/></button></div><video controls playsInline preload="none" poster="/work/fatimaz.webp" src="/work/fatimaz-showcase.mp4"/></dialog>
  </div></section>;
}
export function TechExplorer(){
  const [selected,setSelected]=useState(0);
  const group=skillGroups[selected];
  return <section className="v4-wrap v4-section" id="skills"><Reveal><div className="v4-section-head"><div><p className="v4-kicker">04 / TECHNOLOGY ECOSYSTEM</p><h2 className="v4-heading">Tools are only<br/>the beginning.</h2></div><Link className="v4-text-link" href="/skills">Explore skills <FiArrowUpRight/></Link></div></Reveal><div className="v4-tech"><div className="v4-tech-tabs" role="group" aria-label="Skill categories">{skillGroups.map((g,i)=><button key={g.title} onClick={()=>setSelected(i)} aria-pressed={selected===i} className={selected===i?"active":""}><span>0{i+1}</span>{g.title}<FiArrowUpRight/></button>)}</div><div className="v4-tech-content"><p className="v4-kicker">ACTIVE DOMAIN / {group.title}</p><div className="v4-tech-list">{group.skills.map(s=><span key={s.name}>{s.name}</span>)}</div><p>Explore the projects that put these technologies into practice.</p><Link className="v4-text-link" href="/projects">Browse projects <FiArrowUpRight/></Link></div></div></section>;
}
export function MotionLab(){
  const [mode,setMode]=useState("Orbit");
  const [speed,setSpeed]=useState(5);
  return <section className="v4-wrap v4-section" id="lab"><Reveal><div className="v4-section-head"><div><p className="v4-kicker">05 / EXPERIMENTAL LAB</p><h2 className="v4-heading">Curiosity,<br/>in motion.</h2></div><Link className="v4-text-link" href="/projects/personal-ai-employee-ftes">AI agent project <FiArrowUpRight/></Link></div></Reveal><div className="v4-lab"><div><p className="v4-kicker">INTERACTIVE EXPERIMENT / 01</p><h3>Motion playground</h3><p>Change the geometry and movement of this CSS-driven experiment.</p><div className="v4-tabs" role="group" aria-label="Motion mode">{["Orbit","Stack","Wave"].map(m=><button key={m} className={mode===m?"active":""} aria-pressed={mode===m} onClick={()=>setMode(m)}>{m}</button>)}</div><label className="v4-range">Motion speed <input type="range" min="1" max="10" value={speed} onChange={e=>setSpeed(Number(e.target.value))}/></label></div><div className={`v4-lab-canvas lab-${mode.toLowerCase()}`} style={{"--motion-speed":`${11-speed}s`} as CSSProperties} aria-hidden="true">{Array.from({length:9},(_,i)=><span key={i} style={{"--i":i} as CSSProperties}/>)}</div></div></section>;
}
