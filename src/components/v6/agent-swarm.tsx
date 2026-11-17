"use client";

import { useEffect, useRef } from "react";
import { FiRefreshCw, FiSkipForward } from "react-icons/fi";

const DURATION = 10_000;
const STORAGE_KEY = "rafay-agent-build-v1";
const colors = ["#c9ff74","#91d8ff","#e5baff","#ffdc8e","#ffa5b5","#a4f5d9","#c9baff","#f9bce9","#f0f8a2","#89baff","#ffbe89","#b5edff","#e2d0ff","#8effc4","#ffedbf"];
const names = ["Brand","Headline","Profile","Copy","Navigation","Resume","Motion","Visual","Identity","Systems","MRP","Inventory","AI","Sales","Context"];
const stageNames = [names,["Work label","Work title","Projects","Commerce","Storefront","Commerce meta","ERP label","ERP workflow","ERP meta","AI label","AI workflow","AI meta","ERP heading","Consulting","Skills"],["Project title","Storefront","Project label","Chapters","Case study","Details","Live site","Selected work","Project grid","About heading","About","Credentials","Education"]];
const waves = [
  [".v6-eyebrow",".v5-hero h1",".v5-hero .v5-status",".v5-role",".v4-actions > a",".v4-actions > button",".v5-scroll",".v6-orbit-art img",".v6-orb-label",".v6-wire",".chip-0",".chip-1",".chip-2",".chip-3",".v6-orbit-caption"],
  [".v6-work-intro .v4-kicker",".v6-work-intro h2",".v6-work-intro a",".v6-fatimaz header",".v6-fatimaz .v6-preview",".v6-fatimaz footer",".v6-erp-card header",".v6-erp-ui",".v6-erp-card footer",".v6-ai-card header",".v6-ai-ui",".v6-ai-card footer","#odoo .v4-section-head","#odoo .v5-expertise-grid > div:first-child","#odoo .v5-expertise-grid > div:last-child"],
  ["#work .v4-section-head","#work .v4-browser","#work .v4-flag-info > .v4-kicker","#work .v4-tabs","#work .v4-chapter","#work .v4-flag-info > .v4-button","#work .v4-flag-info > .v4-text-link","#selected .v4-section-head","#selected .v4-project-grid","#about .v4-section-head","#about .v4-bento-main","#about .v4-bento > div:nth-child(2)","#about .v4-bento > div:nth-child(3)"],
] as const;

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
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = waves.map(wave => wave.map(selector => root.querySelector<HTMLElement | SVGElement>(selector)));
    const allTargets = targets.flat().filter((element): element is HTMLElement | SVGElement => element !== null);
    const timers: number[] = [];
    let frame = 0;
    let running = false;
    let started = 0;
    let currentWave = -1;
    const active: Array<HTMLElement | SVGElement | null> = Array(15).fill(null);
    let complete = 0;
    const total = allTargets.length;
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    const clear = () => {
      timers.splice(0).forEach(window.clearTimeout);
      cancelAnimationFrame(frame);
      allTargets.forEach(el => el.classList.remove("swarm-pending","swarm-selected"));
      cursors.forEach(el => { el.classList.remove("swarm-tap"); el.style.visibility = "hidden"; });
      active.fill(null);
      root.classList.remove("swarm-building");
    };
    const finish = (remember = true) => {
      running = false;
      clear();
      panel.dataset.mode = "complete";
      if (meter) meter.style.width = "100%";
      if (status) status.textContent = "15 agents · Build complete";
      if (label) label.textContent = "Replay intro";
      if (remember) try { sessionStorage.setItem(STORAGE_KEY,"done"); } catch {}
    };
    const position = (cursor: HTMLElement, x: number, y: number) => {
      const transform = `translate3d(${Math.round(Math.max(4, Math.min(innerWidth - 105, x)))}px,${Math.round(Math.max(4, Math.min(innerHeight - 40, y)))}px,0)`;
      if (cursor.style.transform !== transform) cursor.style.transform = transform;
    };
    const updatePositions = () => {
      cursors.forEach((cursor,i) => {
        const target = active[i];
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const visible = rect.bottom > 72 && rect.top < innerHeight - 35 && rect.right > 0 && rect.left < innerWidth;
        // Keep the cursor swarm visible on the current viewport without scrolling the visitor.
        // Off-screen tasks are assembled in the background; cursors visibly verify the current screen.
        const tag = cursor.querySelector("span");
        const caption = visible ? stageNames[currentWave]?.[i] ?? names[i] : "Review";
        if (tag) { const text = `${String(i+1).padStart(2,"0")} · ${caption}`; if (tag.textContent !== text) tag.textContent = text; }
        cursor.style.visibility = "visible";
        if (visible) {
          position(cursor,rect.left+Math.min(rect.width*.68, 12+(i%3)*29),Math.max(74,rect.top+Math.min(rect.height*.45,12)));
        } else {
          const hero = targets[0][(i+currentWave*4)%15]?.getBoundingClientRect();
          if (hero && hero.bottom>72 && hero.top<innerHeight-35) position(cursor,hero.left+Math.min(hero.width*.65,18+(i%3)*37),Math.max(80,hero.top+Math.min(hero.height*.5,24)));
          else position(cursor,24+(i%5)*(innerWidth-110)/5,110+Math.floor(i/5)*Math.min(130,(innerHeight-150)/4));
        }
      });
    };
    const tick = () => {
      if (!running) return;
      const elapsed = performance.now() - started;
      if (meter) meter.style.width = `${Math.min(100,elapsed / DURATION*100)}%`;
      if (elapsed >= DURATION) { finish(); return; }
      updatePositions();
      frame = requestAnimationFrame(tick);
    };
    const stage = (index: number) => {
      if (!running) return;
      currentWave = index;
      const wave = targets[index];
      if (status) status.textContent = ["15 agents · Building identity","15 agents · Assembling systems","15 agents · Connecting projects"][index];
      cursors.forEach((cursor,i) => {
        const target = wave[i] ?? null;
        active[i] = null;
        if (!target) {cursor.style.visibility = "hidden"; return;}
        const tag = cursor.querySelector<HTMLElement>("span");
        if (tag) tag.textContent = `${String(i+1).padStart(2,"0")} · ${names[i]}`;
        // Each cursor has its own arrival, click and confirmation timing.
        later(() => {
          if (!running || currentWave !== index) return;
          active[i] = target;
          target.setAttribute("data-swarm-color",colors[i]);
          target.style.setProperty("--swarm-target",colors[i]);
          updatePositions();
          later(() => {
            if (!running || currentWave !== index) return;
            target.classList.remove("swarm-pending");
            target.classList.add("swarm-selected");
            cursor.classList.add("swarm-tap");
            complete++;
            if (status) status.textContent = `15 agents · ${complete}/${total} assembled`;
            later(() => { target.classList.remove("swarm-selected"); cursor.classList.remove("swarm-tap"); },560);
          }, 500+(i%4)*100);
        }, i*75);
      });
    };
    const start = () => {
      if (motion.matches) {finish(false);return;}
      clear();
      running = true;
      started = performance.now();
      currentWave = -1;
      complete = 0;
      panel.dataset.mode = "running";
      if (label) label.textContent = "Skip intro";
      if (status) status.textContent = "15 agents · Initializing";
      root.classList.add("swarm-building");
      allTargets.forEach(el => el.classList.add("swarm-pending"));
      const rect = root.getBoundingClientRect();
      cursors.forEach((cursor,i) => {
        cursor.style.visibility = "visible";
        position(cursor,rect.left+20+(i%5)*(Math.min(rect.width,innerWidth)-92)/5,100+Math.floor(i/5)*Math.min(135,(innerHeight-145)/4));
      });
      later(() => stage(0),380);
      later(() => stage(1),3300);
      later(() => stage(2),6300);
      later(() => { if (status) status.textContent = "15 agents · Final review"; },9050);
      frame = requestAnimationFrame(tick);
    };
    const toggle = () => running ? finish() : start();
    const interact = (event: Event) => {
      if (running && event.target instanceof Element && !panel.contains(event.target) && event.target.closest("a,button,input,select,textarea,[tabindex]")) finish();
    };
    const keydown = (event: KeyboardEvent) => { if (running && (event.key === "Escape" || event.key === "Tab")) finish(); };
    const changed = () => { if (motion.matches) finish(false); };
    const button = control.current;
    button?.addEventListener("click",toggle);
    document.addEventListener("pointerdown",interact,true);
    document.addEventListener("keydown",keydown);
    motion.addEventListener("change",changed);
    let seen = false;
    try {seen = sessionStorage.getItem(STORAGE_KEY) === "done";} catch {}
    if (seen || motion.matches || window.location.hash) finish(false);
    else start();
    return () => {
      running = false; clear();
      button?.removeEventListener("click",toggle);
      document.removeEventListener("pointerdown",interact,true);
      document.removeEventListener("keydown",keydown);
      motion.removeEventListener("change",changed);
      allTargets.forEach(el => {el.style.removeProperty("--swarm-target");el.removeAttribute("data-swarm-color");});
    };
  },[]);

  return <div ref={overlay} className="swarm-overlay" data-mode="idle">
    <div className="swarm-cursors" aria-hidden="true">{colors.map((color,i)=><div key={i} className="swarm-cursor" style={{"--swarm-color":color} as React.CSSProperties}><svg viewBox="0 0 24 29" aria-hidden="true"><path d="M2 2L22 18L13 19L8 27Z" stroke="#10111b" strokeWidth="1.5" strokeLinejoin="round"/></svg><span>{String(i+1).padStart(2,"0")} · {names[i]}</span></div>)}</div>
    <aside className="swarm-hud" aria-label="Portfolio assembly animation">
      <div className="swarm-heading"><i/><span className="swarm-status">15 agents · Initializing</span></div>
      <div className="swarm-meter" aria-hidden="true"><div className="swarm-meter-fill"/></div>
      <button ref={control} className="swarm-control" type="button"><FiSkipForward className="swarm-skip-icon"/><FiRefreshCw className="swarm-replay-icon"/><span className="swarm-button-label">Skip intro</span></button>
    </aside>
  </div>;
}
