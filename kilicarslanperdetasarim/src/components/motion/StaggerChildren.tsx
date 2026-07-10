"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeOnly, staggerContainer } from "@/lib/motion-variants";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  /** Class applied to each staggered item wrapper. */
  itemClassName?: string;
}

/**
 * Wraps each direct child in a fade-up item inside a stagger container,
 * so server-rendered children animate in sequence on scroll.
 */
export function StaggerChildren({
  children,
  className,
  itemClassName,
}: StaggerChildrenProps) {
  const reduceMotion = useReducedMotion();
  const item = reduceMotion ? fadeOnly : fadeUp;

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {Children.map(children, (child) => (
        <motion.div variants={item} className={itemClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
