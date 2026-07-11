"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [mainIndex, setMainIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <ProductImagePlaceholder name={name} />
      </div>
    );
  }

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setMainIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setMainIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div 
          className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-linen-warm"
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
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setMainIndex(idx)}
                className={`relative h-20 w-32 shrink-0 snap-start overflow-hidden rounded-xl border-2 transition-all ${
                  idx === mainIndex ? "border-tac-red opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${name} küçük görsel ${idx + 1}`}
                  fill
                  sizes="128px"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 z-[60] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-[60] rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-8"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-[60] rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-8"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative h-full max-h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[mainIndex]}
                alt={`${name} büyük görsel`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
