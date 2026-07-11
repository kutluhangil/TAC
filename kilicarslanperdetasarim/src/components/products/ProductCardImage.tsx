"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

export function ProductCardImage({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchActiveTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle while active (hover or recent touch)
  useEffect(() => {
    if (!isActive || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isActive, images.length]);

  const activateTemporarily = (ms = 4000) => {
    setIsActive(true);
    if (touchActiveTimer.current) clearTimeout(touchActiveTimer.current);
    touchActiveTimer.current = setTimeout(() => {
      setIsActive(false);
      setCurrentIndex(0);
    }, ms);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    // Activate cycling on touch
    activateTemporarily(5000);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || images.length <= 1) return;
    const dx = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(dx) > 40) {
      if (dx > 0) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      touchStartX.current = e.touches[0].clientX;
      activateTemporarily(5000);
    }
  };

  if (images.length === 0) {
    return <ProductImagePlaceholder name={alt} />;
  }

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => {
        if (touchActiveTimer.current) clearTimeout(touchActiveTimer.current);
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
        setCurrentIndex(0);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 30vw"
          priority={i === 0}
          className={`object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Indicator dots */}
      {images.length > 1 && (
        <div
          className={`absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                i === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
