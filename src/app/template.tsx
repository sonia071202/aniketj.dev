"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
