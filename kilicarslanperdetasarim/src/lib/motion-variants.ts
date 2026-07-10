import type { Variants } from "framer-motion";

// Shared easing — soft deceleration that reads as fabric settling.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Signature motif: content opens outward from center like parting curtains.
// clip-path values must keep identical unit structure (all %) so Framer
// Motion can interpolate them; mixing unitless 0 with % breaks the tween.
export const curtainReveal: Variants = {
  hidden: { clipPath: "inset(0% 50% 0% 50%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

// Reduced-motion fallback: everything degrades to a plain opacity fade.
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};
