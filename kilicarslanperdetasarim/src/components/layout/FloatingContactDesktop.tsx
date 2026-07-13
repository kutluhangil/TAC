"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { EASE } from "@/lib/motion-variants";

/**
 * A floating WhatsApp button for desktop users.
 * Appears on the bottom right after scrolling past the hero.
 * Hidden on mobile since StickyContactBar handles that.
 */
export function FloatingContactDesktop() {
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
          className="fixed bottom-8 right-8 z-50 hidden md:block"
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-6 w-6 text-white" />
            <span className="font-body font-semibold text-white">
              WhatsApp Hattı
            </span>
            
            {/* Ping animation effect */}
            <span className="absolute -right-1 -top-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-[#1da851]"></span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
