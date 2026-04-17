"use client";

import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { radarSkills } from "@/data/skills";

export function SkillsRadar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-[320px] w-full rounded-2xl border border-border/70 bg-bg-secondary/25" />
    );
  }

  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarSkills}>
          <PolarGrid stroke="rgba(136,146,164,0.35)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "rgba(226,232,240,0.85)", fontSize: 12 }}
          />
          <PolarRadiusAxis
            tick={{ fill: "rgba(136,146,164,0.7)", fontSize: 11 }}
            axisLine={false}
            tickCount={6}
            domain={[0, 100]}
          />
          <Radar
            dataKey="value"
            stroke="rgba(108,99,255,0.95)"
            fill="rgba(108,99,255,0.3)"
          />
          <Tooltip
            contentStyle={{
              background: "rgba(22,27,39,0.85)",
              border: "1px solid rgba(42,48,64,0.9)",
              borderRadius: 12,
            }}
            labelStyle={{ color: "rgba(226,232,240,0.95)" }}
            itemStyle={{ color: "rgba(226,232,240,0.95)" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

