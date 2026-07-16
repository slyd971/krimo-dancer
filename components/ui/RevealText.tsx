"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
