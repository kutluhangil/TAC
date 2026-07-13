"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Öncesi",
  afterLabel = "Sonrası",
}: BeforeAfterSliderProps) {
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const clampedX = Math.max(0, Math.min(x, width));
    const percentage = (clampedX / width) * 100;
    setPosition(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isResizing) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = () => setIsResizing(false);

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);
    return () => window.removeEventListener("pointerup", handlePointerUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden rounded-2xl select-none shadow-lg border border-brass/20"
      onPointerMove={handlePointerMove}
      onPointerDown={(e) => {
        setIsResizing(true);
        handleMove(e.clientX);
      }}
      style={{ touchAction: "none" }} // Prevents page scrolling while swiping
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 z-10 rounded-full bg-black/60 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          style={{ filter: "grayscale(100%) brightness(0.8)" }} // Simulated "Before" look
        />
        <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/60 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize hover:bg-tac-red transition-colors"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl shadow-black/30 border-2 border-brass/20">
          <MoveHorizontal className="h-5 w-5 text-charcoal" />
        </div>
      </div>
    </div>
  );
}
