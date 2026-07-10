"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CurtainRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Set when the element is the section's own wrapper and needs an id anchor. */
  id?: string;
}

const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Signature reveal: content parts from the center outward like opening
 * curtains, via a native CSS clip-path transition.
 *
 * The observed element and the clipped element must be different nodes:
 * Chrome factors clip-path into IntersectionObserver's intersection area,
 * so observing the clipped node itself would never report it as visible.
 * Falls back to a plain fade when the user prefers reduced motion.
 */
export function CurtainReveal({ children, className, id }: CurtainRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} id={id} className={className}>
      <div
        style={{
          clipPath: reduceMotion
            ? undefined
            : inView
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 50% 0% 50%)",
          opacity: inView ? 1 : 0,
          transition: `clip-path 0.8s ${EASE_CSS}, opacity 0.8s ${EASE_CSS}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
