"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

export function ProductCardImage({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const swipeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || images.length <= 1) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (swipeTimeout.current) return; // Prevent rapid fires
      
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      touchStartX.current = touchEndX;
      
      swipeTimeout.current = setTimeout(() => {
        swipeTimeout.current = null;
      }, 300);
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    if (swipeTimeout.current) {
      clearTimeout(swipeTimeout.current);
      swipeTimeout.current = null;
    }
  };

  if (images.length === 0) {
    return <ProductImagePlaceholder name={alt} />;
  }

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentIndex(0);
      }}
      onTouchStart={(e) => {
        setIsHovered(true);
        handleTouchStart(e);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        setIsHovered(false);
        setCurrentIndex(0);
        handleTouchEnd();
      }}
      onTouchCancel={() => {
        setIsHovered(false);
        setCurrentIndex(0);
        handleTouchEnd();
      }}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 30vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${i === 0 ? "group-hover:scale-[1.04] transition-transform" : ""}`}
        />
      ))}
      
      {/* Indicator dots for multiple images */}
      {images.length > 1 && (
        <div className={`absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
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
