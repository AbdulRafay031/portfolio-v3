"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div initial={false} animate={{ y: 0 }} transition={{ duration: reduce ? 0 : 0.3 }}>
      {children}
    </motion.div>
  );
}

