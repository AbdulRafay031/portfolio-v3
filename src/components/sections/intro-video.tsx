"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-border bg-bg-card/40 p-4 backdrop-blur-md overflow-hidden"
    >
      <div className="text-xs font-semibold text-text-muted mb-3 px-2">
        Intro · 60 seconds
      </div>

      <div className="relative w-full rounded-2xl overflow-hidden bg-bg-secondary" style={{ paddingBottom: "56.25%" }}>
        {/* ── Replace /intro.mp4 with your actual video filename in /public ── */}
        <video
          ref={videoRef}
          src="/intro.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
          playsInline
        />

        {/* Play / Pause overlay */}
        {!playing && (
          <div
            onClick={toggle}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer bg-black/40 backdrop-blur-sm"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-md transition hover:bg-white/20">
              <svg className="h-7 w-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white/90">Watch Intro</p>
          </div>
        )}

        {/* Pause button while playing */}
        {playing && (
          <button
            onClick={toggle}
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="3" width="4" height="18" rx="1"/>
              <rect x="15" y="3" width="4" height="18" rx="1"/>
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
}