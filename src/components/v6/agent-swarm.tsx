"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { FiRefreshCw, FiSkipForward } from "react-icons/fi";

const AGENTS = 15;
const colors = ["#c9ff74","#91d8ff","#e5baff","#ffdc8e","#ffa5b5","#a4f5d9","#c9baff","#f9bce9","#f0f8a2","#89baff","#ffbe89","#b5edff","#e2d0ff","#8effc4","#ffedbf"];
const typeSelectors = ".v5-hero h1,.v5-hero .v6-eyebrow,.v5-role,.v6-work-intro h2,.v6-work-intro .v4-kicker,.v4-section-head h2,.v4-section-head .v4-kicker,#about .v4-bento h3,#about .v4-bento p,#odoo .v5-expertise-grid > div:first-child h3,#odoo .v5-expertise-grid > div:first-child p,.v4-contact h2,.v4-contact .v4-kicker";
const installSelectors = ".v5-status,.v4-actions > a,.v4-actions > button,.v5-scroll,.v6-orbit-art img,.v6-orb-label,.v6-wire,.v6-chip,.v6-orbit-caption,.v6-work-intro a,.v6-work-card header,.v6-preview,.v6-erp-top,.v6-erp-ui h3,.v6-erp-steps,.v6-chart,.v6-erp-ui small,.v6-ai-ui > span,.v6-ai-ui > strong,.v6-ai-ui > div,.v6-work-card footer,#odoo .v5-expertise-grid .v4-tabs,#odoo .v5-expertise-grid li,#odoo .v5-expertise-grid a,#work .v4-browser-bar,#work .v4-browser img,#work .v4-play,#work .v4-flag-info > .v4-kicker,#work .v4-tabs button,#work .v4-chapter,#work .v4-flag-info > a,#selected .v4-project,#about .v4-bento a,#skills .v4-tech-tabs button,#skills .v4-tech-content,#lab .v4-lab > div,.v4-timeline-row,.v4-contact a";

type ElementTarget = HTMLElement | SVGElement;
type TextPart = {node: Text; original: string};
type Task = {el: ElementTarget; kind: "type" | "install"; state: "pending" | "working" | "done"; parts: TextPart[]; length: number; oldMinHeight?: string; oldAria?: string | null; };
type Assignment = {task: Task; start: number; duration: number; lastCount: number; tapped: boolean;};

function readParts(el: ElementTarget): TextPart[] {
  const parts: TextPart[] = [];
  const walker = document.createTreeWalker(el,NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.data.trim()) parts.push({node,original:node.data});
  }
  return parts;
}

export function AgentSwarm() {
  const overlay = useRef<HTMLDivElement>(null);
  const control = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const panel = overlay.current;
    const root = panel?.closest(".v4-home");
    if (!panel || !root) return;
    const cursors = Array.from(panel.querySelectorAll<HTMLElement>(".swarm-cursor"));
    const meter = panel.querySelector<HTMLElement>(".swarm-meter-fill");
    const status = panel.querySelector<HTMLElement>(".swarm-status");
    const label = panel.querySelector<HTMLElement>(".swarm-button-label");
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const tasks: Task[] = Array.from(root.querySelectorAll<ElementTarget>(typeSelectors+","+installSelectors)).map(el => {
      const kind = el.matches(typeSelectors) ? "type" : "install";
      const parts = kind === "type" ? readParts(el) : [];
      return {el,kind,state:"pending",parts,length:parts.reduce((n,p)=>n+p.original.length,0)};
    });
    const slots: Array<Assignment|null> = Array(AGENTS).fill(null);
    let frame = 0, enabled = false, finished = 0, initializedAt = 0;
    const rectVisible = (r: DOMRect) => r.bottom>80 && r.top<innerHeight-20 && r.right>0 && r.left<innerWidth;
    const move = (cursor: HTMLElement,x:number,y:number) => {
      const viewportWidth=document.documentElement.clientWidth;
      const viewportHeight=window.visualViewport?.height??innerHeight;
      const transform = `translate3d(${Math.round(Math.max(4,Math.min(viewportWidth-105,x)))}px,${Math.round(Math.max(65,Math.min(viewportHeight-40,y)))}px,0)`;
      if (cursor.style.transform !== transform) cursor.style.transform=transform;
    };
    const restoreText = (task:Task) => {
      if (task.oldMinHeight === undefined) return;
      task.parts.forEach(p=>p.node.data=p.original);
      task.el.style.minHeight=task.oldMinHeight;
      if (task.oldAria===null) task.el.removeAttribute("aria-label");
      else if (task.oldAria!==undefined) task.el.setAttribute("aria-label",task.oldAria);
      task.oldMinHeight=undefined;
    };
    const settle = (task:Task) => {
      restoreText(task);
      task.el.classList.remove("swarm-pending","swarm-selected","swarm-typing");
      task.el.style.removeProperty("--swarm-target");
      if (task.state!=="done") {task.state="done";finished++;}
    };
    const renderProgress = () => {
      if (meter) meter.style.width=`${finished/Math.max(tasks.length,1)*100}%`;
      const busy=slots.filter(Boolean).length;
      if (status) status.textContent=busy ? `${busy}/15 agents · ${finished}/${tasks.length} built` : finished===tasks.length ? "15 agents · Build complete" : "Scroll to build next section ↓";
    };
    const stop = () => {
      enabled=false;cancelAnimationFrame(frame);frame=0;
      slots.fill(null);
      tasks.forEach(settle);
      cursors.forEach(c=>{c.style.visibility="hidden";c.classList.remove("swarm-tap")});
      root.classList.remove("swarm-building");
      panel.dataset.mode="complete";
      if (label) label.textContent="Replay build";
      renderProgress();
    };
    const textAt = (task:Task,count:number) => {
      let rest=count, last:Text|null=null;
      for (const part of task.parts) {
        const n=Math.min(rest,part.original.length);
        part.node.data=part.original.slice(0,n);
        if(n>0) last=part.node;
        rest-=n;
      }
      if (!last) return null;
      const range=document.createRange();
      range.setStart(last,last.length-1);range.setEnd(last,last.length);
      return range.getBoundingClientRect();
    };
    const startTask = (task:Task,i:number,now:number) => {
      task.state="working";
      task.el.style.setProperty("--swarm-target",colors[i]);
      const r=task.el.getBoundingClientRect();
      const cursor=cursors[i];
      const tag=cursor.querySelector("span");
      const title=task.kind==="type" ? "Typing" : task.el.matches("img,.v6-preview,.v6-chart") ? "Rendering" : "Assembling";
      if(tag)tag.textContent=`${String(i+1).padStart(2,"0")} · ${title}`;
      // Arrive from a different position before revealing the target.
      move(cursor,r.left+Math.min(r.width*.8,50+(i%4)*38),r.top-32-(i%3)*12);
      cursor.style.visibility="visible";
      slots[i]={task,start:now+(i%5)*95,duration:task.kind==="type"?Math.min(2300,Math.max(900,task.length*28)):750,lastCount:-1,tapped:false};
    };
    const tick = (now:number) => {
      frame=0;if(!enabled)return;
      for (let i=0;i<AGENTS;i++) {
        const a=slots[i];if(!a)continue;
        const {task}=a;const cursor=cursors[i];const r=task.el.getBoundingClientRect();
        if (!task.el.isConnected || !rectVisible(r)) {
          if(task.el.isConnected&&!a.tapped){task.state="pending";task.el.style.removeProperty("--swarm-target");}
          else settle(task);
          slots[i]=null;cursor.style.visibility="hidden";cursor.classList.remove("swarm-tap");continue;
        }
        const elapsed=now-a.start;
        if (elapsed<0) continue;
        if (elapsed<450) {move(cursor,r.left+Math.min(r.width*.5,16),r.top+8);continue;}
        if (!a.tapped) {
          a.tapped=true;cursor.classList.add("swarm-tap");
          task.el.classList.remove("swarm-pending");task.el.classList.add("swarm-selected");
          if (task.kind==="type" && task.length>0) {
            task.oldMinHeight=task.el.style.minHeight;task.oldAria=task.el.getAttribute("aria-label");
            task.el.style.minHeight=`${r.height}px`;task.el.setAttribute("aria-label",task.el.textContent??"");
            task.el.classList.add("swarm-typing");textAt(task,0);
          }
        }
        const ratio=Math.min(1,(elapsed-450)/a.duration);
        if(task.kind==="type" && task.length>0){
          const count=Math.floor(ratio*task.length);
          if(count!==a.lastCount){a.lastCount=count;const caret=textAt(task,count);if(caret)move(cursor,caret.right+4,caret.top+3);}
        }else{
          move(cursor,r.left+Math.min(r.width*.8,12+ratio*r.width*.65),r.top+Math.min(r.height*.65,14+ratio*r.height*.3));
        }
        if(ratio>=1){settle(task);slots[i]=null;cursor.classList.remove("swarm-tap");cursor.style.visibility="hidden";}
      }
      // A task is not scheduled until its own element enters the viewport.
      // This means scrolling after ten seconds continues the build.
      tasks.filter(t=>t.state==="pending"&&!t.el.isConnected).forEach(settle);
      const pending=tasks.filter(t=>t.state==="pending" && rectVisible(t.el.getBoundingClientRect()));
      // Keep all 15 agents on desktop; schedule fewer simultaneous visual tasks
      // on narrow touch screens, where labels would otherwise cover the content.
      const parallel = matchMedia("(max-width: 600px)").matches ? 6 : AGENTS;
      for(let i=0;i<parallel&&pending.length;i++)if(!slots[i])startTask(pending.shift()!,i,now);
      renderProgress();
      if(finished>=tasks.length){stop();return;}
      if(slots.some(Boolean)||now-initializedAt<500)frame=requestAnimationFrame(tick);
    };
    const wake=()=>{if(enabled&&!frame)frame=requestAnimationFrame(tick)};
    const start=()=>{
      if(preference.matches){stop();return;}
      cancelAnimationFrame(frame);frame=0;slots.fill(null);
      tasks.forEach(t=>{restoreText(t);t.state="pending";t.parts=t.kind==="type"?readParts(t.el):[];t.length=t.parts.reduce((n,p)=>n+p.original.length,0);t.el.classList.remove("swarm-selected","swarm-typing");t.el.classList.add("swarm-pending")});
      cursors.forEach(c=>{c.style.visibility="hidden";c.classList.remove("swarm-tap")});
      finished=0;enabled=true;initializedAt=performance.now();root.classList.add("swarm-building");panel.dataset.mode="running";
      if(label)label.textContent="Skip build";
      wake();
    };
    const toggle=()=>enabled?stop():start();
    const interact=(event:Event)=>{
      if(!enabled||!(event.target instanceof Element)||panel.contains(event.target))return;
      const clicked=event.target.closest("a,button,input,select,textarea,[tabindex]");
      if(!clicked)return;
      // Release the clicked target immediately, without disabling future scroll animation.
      tasks.filter(t=>t.state!=="done"&&(t.el.contains(clicked)||clicked.contains(t.el))).forEach(t=>{
        settle(t);const i=slots.findIndex(a=>a?.task===t);if(i>=0){slots[i]=null;cursors[i].style.visibility="hidden";cursors[i].classList.remove("swarm-tap")}
      });wake();
    };
    const key=(event:KeyboardEvent)=>{if(enabled&&(event.key==="Escape"||event.key==="Tab"))stop()};
    const changed=()=>{if(preference.matches)stop()};
    const button=control.current;button?.addEventListener("click",toggle);
    window.addEventListener("scroll",wake,{passive:true});window.addEventListener("resize",wake);
    document.addEventListener("pointerdown",interact,true);document.addEventListener("keydown",key);preference.addEventListener("change",changed);
    if(preference.matches)stop();else start();
    return ()=>{enabled=false;cancelAnimationFrame(frame);tasks.forEach(settle);root.classList.remove("swarm-building");button?.removeEventListener("click",toggle);window.removeEventListener("scroll",wake);window.removeEventListener("resize",wake);document.removeEventListener("pointerdown",interact,true);document.removeEventListener("keydown",key);preference.removeEventListener("change",changed)};
  },[]);
  return <div ref={overlay} className="swarm-overlay" data-mode="idle">
    <div className="swarm-cursors" aria-hidden="true">{colors.map((color,i)=><div key={i} className="swarm-cursor" style={{"--swarm-color":color} as CSSProperties}><svg viewBox="0 0 24 29" aria-hidden="true"><path d="M2 2L22 18L13 19L8 27Z" stroke="#10111b" strokeWidth="1.5" strokeLinejoin="round"/></svg><span>{String(i+1).padStart(2,"0")}</span></div>)}</div>
    <aside className="swarm-hud" aria-label="Portfolio assembly animation"><div className="swarm-heading"><i/><span className="swarm-status">15 agents · Initializing</span></div><div className="swarm-meter" aria-hidden="true"><div className="swarm-meter-fill"/></div><button ref={control} className="swarm-control" type="button"><FiSkipForward className="swarm-skip-icon"/><FiRefreshCw className="swarm-replay-icon"/><span className="swarm-button-label">Skip build</span></button></aside>
  </div>;
}
