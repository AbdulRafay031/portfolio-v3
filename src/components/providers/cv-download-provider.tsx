"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import { FiCode, FiLayers, FiDownload, FiX } from "react-icons/fi";

const CvContext = createContext<() => void>(() => {});

export function CvDownloadProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();
  return (
    <CvContext.Provider value={() => { if (!dialog.current?.open) dialog.current?.showModal(); }}>
      {children}
      <dialog ref={dialog} className="cv-selector" aria-labelledby="cv-title" aria-describedby="cv-description" onClick={event => { if (event.target === event.currentTarget) close(); }}>
        <div className="cv-selector-content">
          <button type="button" className="cv-close" aria-label="Close CV selector" onClick={close}><FiX /></button>
          <span className="cv-eyebrow">01 / CAREER PROFILE</span>
          <h2 id="cv-title">Choose your CV.</h2>
          <p id="cv-description">Two specialties. Select the profile that matches your opportunity.</p>
          <div className="cv-options">
            <a className="cv-option" href="/Abdul-Rafay-Resume.pdf" download="Abdul-Rafay-MERN-Stack-Developer.pdf" onClick={close}>
              <span className="cv-icon"><FiCode /></span><span className="cv-option-copy"><strong>MERN Stack Developer</strong><small>Full-stack web development • React • Node.js</small></span><FiDownload className="cv-arrow" />
            </a>
            <a className="cv-option" href="/Abdul-Rafay-Odoo-Techno-Functional-Consultant.pdf" download="Abdul-Rafay-Odoo-Techno-Functional-Consultant.pdf" onClick={close}>
              <span className="cv-icon"><FiLayers /></span><span className="cv-option-copy"><strong>Odoo Techno-Functional Consultant</strong><small>ERP • Business processes • Odoo development</small></span><FiDownload className="cv-arrow" />
            </a>
          </div>
          <p className="cv-note">PDF FORMAT · DIRECT DOWNLOAD</p>
        </div>
      </dialog>
    </CvContext.Provider>
  );
}

export function DownloadCvButton({ children, className, beforeOpen }: { children: ReactNode; className?: string; beforeOpen?: () => void }) {
  const open = useContext(CvContext);
  return <button type="button" className={className} aria-haspopup="dialog" onClick={() => { beforeOpen?.(); open(); }}>{children}</button>;
}
