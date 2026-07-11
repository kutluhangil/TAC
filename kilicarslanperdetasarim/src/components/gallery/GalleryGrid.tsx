"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import { AppleTvCard } from "@/components/ui/AppleTvCard";
import { Lightbox } from "@/components/gallery/Lightbox";

export function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <AppleTvCard
            key={image.id}
            image={image}
            onClick={() => openLightbox(index)}
            priority={index < 8} // Preload the first 8 images
          />
        ))}
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
