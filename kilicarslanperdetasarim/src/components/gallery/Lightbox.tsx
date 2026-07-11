"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    },
    [isOpen, onNext, onPrev, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Preload prev/next images to eliminate delay
  useEffect(() => {
    if (!isOpen || images.length <= 1) return;
    const nextIdx = (currentIndex + 1) % images.length;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    
    // Simple browser cache preloading
    const img1 = new window.Image();
    img1.src = images[nextIdx].src;
    const img2 = new window.Image();
    img2.src = images[prevIdx].src;
  }, [currentIndex, images, isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    // AnimatePresence wraps the conditional so exit animations work
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/25 active:scale-95"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/25 active:scale-95 md:left-6"
            aria-label="Önceki görsel"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/25 active:scale-95 md:right-6"
            aria-label="Sonraki görsel"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Image container — stop click from bubbling to overlay */}
          <div
            className="relative h-[80vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="relative h-full w-full"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="90vw"
                className="object-contain drop-shadow-2xl select-none"
                style={{ pointerEvents: "none" }}
                priority
                draggable={false}
              />

              {/* Filigran watermark — centered, no fade */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
                <Image
                  src="/images/brand/filigran.png"
                  alt=""
                  width={640}
                  height={320}
                  className="object-contain max-w-[80%] max-h-[80%] select-none"
                  style={{ pointerEvents: "none" }}
                  draggable={false}
                />
              </div>

              {/* Blocking overlay — disables "Save Image As" */}
              <div
                className="absolute inset-0 z-10"
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>

            {/* Counter */}
            <p className="absolute -bottom-9 left-0 right-0 text-center text-sm font-medium text-white/60">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
