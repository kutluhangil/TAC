"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { GalleryImage } from "@/data/gallery";

interface AppleTvCardProps {
  image: GalleryImage;
  onClick: () => void;
  priority?: boolean;
}

export function AppleTvCard({ image, onClick, priority = false }: AppleTvCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  // Tilt — max ±12°
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(
    circle at ${glareX} ${glareY},
    rgba(255,255,255,0.35) 0%,
    transparent 55%
  )`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    /* perspective wrapper so the 3D rotation has depth */
    <div style={{ perspective: "800px" }} className="w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        whileHover={{ scale: 1.06, z: 10 }}
        whileTap={{ scale: 0.96 }}
        className="relative aspect-square w-full cursor-pointer rounded-2xl"
      >
        {/* Card inner */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl"
          style={{
            boxShadow: isHovered
              ? "0 24px 48px -12px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.15)"
              : "0 8px 24px -8px rgba(0,0,0,0.22)",
            transition: "box-shadow 0.35s ease",
          }}
        >
          {/* Photo */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-500 ease-out select-none"
            style={{
              transform: isHovered ? "scale(1.07)" : "scale(1)",
              pointerEvents: "none",
            }}
            priority={priority}
            draggable={false}
          />

          {/* Glare overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: glareBackground,
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Filigran watermark — centered, no fade */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
            <Image
              src="/images/brand/filigran.png"
              alt=""
              width={360}
              height={180}
              className="object-contain max-w-[80%] max-h-[80%] select-none"
              style={{ pointerEvents: "none" }}
              draggable={false}
            />
          </div>

          {/* Transparent blocking overlay — removes "Save Image As" from right-click */}
          <div
            className="absolute inset-0 z-20"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Subtle dark gradient at bottom for depth */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 rounded-b-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </motion.div>
    </div>
  );
}
