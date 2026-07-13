"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [mainIndex, setMainIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setMainIndex((prev) => (prev + 1) % images.length);
    },
    [images.length]
  );

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setMainIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setMainIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setMainIndex((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length]);

  // Preload prev/next images to eliminate delay
  useEffect(() => {
    if (images.length <= 1) return;
    const nextIdx = (mainIndex + 1) % images.length;
    const prevIdx = (mainIndex - 1 + images.length) % images.length;
    
    // Simple browser cache preloading
    const img1 = new window.Image();
    img1.src = images[nextIdx];
    const img2 = new window.Image();
    img2.src = images[prevIdx];
  }, [mainIndex, images]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <ProductImagePlaceholder name={name} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Image */}
        <div
          className="relative aspect-[16/10] w-full flex-1 cursor-zoom-in overflow-hidden rounded-2xl bg-linen-warm"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={images[mainIndex]}
            alt={`${name} - görsel ${mainIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
          {/* Click-to-expand hint */}
          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
            Büyütmek için tıkla
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:h-auto lg:max-h-[600px] lg:w-40 pb-2 lg:pb-0 lg:pr-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brass/40">
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setMainIndex(idx)}
                className={`relative h-24 lg:h-28 w-36 lg:w-full shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                  idx === mainIndex
                    ? "border-tac-red opacity-100 shadow-md"
                    : "border-transparent opacity-55 hover:opacity-90"
                }`}
                aria-label={`${name} görsel ${idx + 1}`}
              >
                <Image
                  src={src}
                  alt={`${name} küçük görsel ${idx + 1}`}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 sm:p-10"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 z-[60] rounded-full bg-white/15 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/30"
              aria-label="Kapat"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[60] rounded-full bg-black/50 px-4 py-1 text-sm text-white backdrop-blur-sm">
                {mainIndex + 1} / {images.length}
              </div>
            )}

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-[60] rounded-full bg-white/15 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/30 sm:left-8"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-[60] rounded-full bg-white/15 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/30 sm:right-8"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-full max-h-[85vh] w-full max-w-5xl touch-pan-y"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -40) {
                  nextImage();
                } else if (offset.x > 40) {
                  prevImage();
                }
              }}
            >
              <Image
                src={images[mainIndex]}
                alt={`${name} büyük görsel ${mainIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setMainIndex(i); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === mainIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
