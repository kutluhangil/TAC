"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/business";
import { EASE } from "@/lib/motion-variants";

/**
 * The site's conversion point: a fixed two-segment call bar on mobile.
 * Appears once the visitor scrolls past the hero (~80vh).
 */
export function StickyContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafPending = false;
    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.8);
        rafPending = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 md:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="flex border-t border-brass/20 bg-linen pb-[env(safe-area-inset-bottom)]">
            <a
              href={business.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 bg-tac-red py-4 font-body font-semibold text-linen active:bg-tac-deep"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Hemen Ara
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 bg-charcoal py-4 font-body font-semibold text-linen active:bg-charcoal-soft"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
