"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { business } from "@/data/business";
import { EASE } from "@/lib/motion-variants";
import { navLinks } from "./Header";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

/** Full-screen menu that opens with the signature curtain-parting motif. */
export function MobileNav({ open, onClose }: MobileNavProps) {
  const reduceMotion = useReducedMotion();

  // Prevent the page from scrolling behind the open overlay; close on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-linen"
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { clipPath: "inset(0% 50% 0% 50%)", opacity: 0 }
          }
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
          }
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { clipPath: "inset(0% 50% 0% 50%)", opacity: 0 }
          }
          transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: EASE }}
        >
          <div className="flex h-16 items-center justify-end px-5">
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal"
              aria-label="Menüyü kapat"
              autoFocus
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col items-center justify-center gap-7"
            aria-label="Mobil menü"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-display text-3xl font-semibold text-charcoal transition-colors hover:text-tac-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-6 pb-[calc(2rem+env(safe-area-inset-bottom))]">
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-tac-red py-3.5 font-body font-semibold text-linen"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-charcoal/25 py-3.5 font-body font-semibold text-charcoal"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
