"use client";
import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBox, FiCpu, FiDatabase, FiShoppingCart, FiSettings, FiFileText, FiCheck, FiActivity } from "react-icons/fi";

const modules = [
  { label: "Sales", icon: FiShoppingCart, detail: "Quotations, sales orders and customer workflows." },
  { label: "Inventory", icon: FiBox, detail: "Stock movements, locations and traceability." },
  { label: "Manufacturing", icon: FiSettings, detail: "Bills of materials, manufacturing orders and work centers." },
  { label: "AI Automation", icon: FiCpu, detail: "AI-assisted processes and connected applications." },
  { label: "Purchase", icon: FiShoppingCart, detail: "Purchase orders, suppliers and receipts." },
  { label: "Accounting", icon: FiDatabase, detail: "Financial workflows and operational reporting." },
];

export function HeroSystem(){
  const [active,setActive]=useState(2);
  return <div className="v5-system"><div className="v5-sculpture"><Image src="/work/system-ribbon.webp" alt="Interlocking metallic ribbons representing connected systems" fill priority sizes="(max-width: 800px) 100vw, 55vw"/></div><svg className="v5-connections" viewBox="0 0 600 360" aria-hidden="true"><path d="M90 70 Q300 20 510 70 M50 180 Q300 300 550 180 M90 290 Q300 340 510 290 M90 70 Q230 160 90 290 M510 70 Q370 160 510 290"/></svg>{modules.map((m,i)=><button key={m.label} style={{"--node":i} as CSSProperties} className={`v5-node node-${i} ${active===i?"active":""}`} aria-pressed={active===i} onClick={()=>setActive(i)}><m.icon/>{m.label}</button>)}<div className="v5-system-caption" aria-live="polite"><span>CONNECTED SYSTEM / {modules[active].label}</span><p>{modules[active].detail}</p></div></div>;
}

const flow = ["Draft", "Confirmed", "In progress", "Done"];
export function ShowcaseBento(){
  return <section className="v4-wrap v5-showcase" id="showcase"><div className="v5-section-label"><span>01 / SELECTED SYSTEMS</span><Link href="/projects">All projects <FiArrowUpRight/></Link></div><div className="v5-bento-grid"><article className="v5-panel v5-fashion"><div className="v5-panel-copy"><p className="v4-kicker">FULL-STACK COMMERCE</p><h2>Fatimaz</h2><p>Fashion commerce, engineered from storefront to operations.</p><ul>{["Storefront & collections","Checkout & orders","Inventory & customer portal","AI shopping experience"].map(t=><li key={t}><FiCheck/>{t}</li>)}</ul><Link href="/projects/fatimaz" className="v4-button secondary">View Fatimaz <FiArrowUpRight/></Link></div><div className="v5-fashion-preview"><div className="v5-window">● ● ● <span>fatimaz.vercel.app</span></div><Image src="/work/fatimaz.webp" alt="Actual Fatimaz storefront" width={1100} height={764} sizes="(max-width:800px) 100vw, 40vw"/></div></article><article className="v5-panel v5-erp"><div className="v5-panel-copy"><p className="v4-kicker">TECHNO-FUNCTIONAL CONSULTING</p><h2>Odoo ERP</h2><p>Connect business processes with technical solutions.</p><Link href="#odoo" className="v4-text-link">Explore expertise <FiArrowUpRight/></Link></div><div className="v5-erp-demo"><header><b>odoo</b><span>Manufacturing</span></header><strong>Manufacturing Orders</strong><div className="v5-flow">{flow.map((s,i)=><span key={s} className={`step-${i}`}>{s}</span>)}</div><div className="v5-demo-row"><span>Reference</span><span>Product</span><span>Status</span></div><div className="v5-demo-row"><span>MO / 001</span><span>Sample product</span><span>In progress</span></div><small>Illustrative workflow</small></div></article><article className="v5-panel v5-ai"><div className="v5-panel-copy"><p className="v4-kicker">INTELLIGENT SYSTEMS</p><h2>AI Automation</h2><p>Connected workflows and agentic applications.</p><Link href="/projects/personal-ai-employee-ftes" className="v4-text-link">View AI project <FiArrowUpRight/></Link></div><div className="v5-ai-diagram"><div><span><FiFileText/> Data</span><span><FiDatabase/> ERP</span></div><i/><strong><FiCpu/> AI agent</strong><i/><div><span><FiActivity/> Actions</span><span><FiFileText/> Reports</span></div></div></article></div></section>;
}

export function OdooExpertise(){
  const [tab,setTab]=useState(0);
  const groups=[{title:"Functional",items:["Business process mapping","Manufacturing & inventory workflows","Purchase & sales workflows","Configuration & testing"]},{title:"Technical",items:["Odoo customization","Python & ORM","QWeb reporting","Integration patterns"]}];
  return <section className="v4-wrap v4-section v5-expertise" id="odoo"><div className="v4-section-head"><div><p className="v4-kicker">02 / ERP PRACTICE</p><h2 className="v4-heading">Business meets<br/>engineering.</h2></div><span className="v5-status"><i className="v4-dot"/> TechHub / Present</span></div><div className="v5-expertise-grid"><div><p className="v4-kicker">ODOO TECHNO-FUNCTIONAL CONSULTANT</p><h3>From business need to working system.</h3><p>My work brings process understanding and technical implementation together across the Odoo ecosystem.</p><Link className="v4-text-link" href="/experience">Professional experience <FiArrowUpRight/></Link></div><div><div className="v4-tabs" role="group" aria-label="ERP expertise">{groups.map((g,i)=><button className={tab===i?"active":""} aria-pressed={tab===i} key={g.title} onClick={()=>setTab(i)}>{g.title}</button>)}</div><ul>{groups[tab].items.map(x=><li key={x}><FiCheck/>{x}</li>)}</ul></div></div></section>;
}
