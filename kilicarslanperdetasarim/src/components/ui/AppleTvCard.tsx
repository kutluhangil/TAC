"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { GalleryImage } from "@/data/gallery";

interface AppleTvCardProps {
  image: GalleryImage;
  onClick: () => void;
  priority?: boolean;
}

export function AppleTvCard({ image, onClick, priority = false }: AppleTvCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for the mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animation for smooth return to center
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform the mouse position to rotation angles (max 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Calculate glare position based on mouse position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  
  const glareBackground = useMotionTemplate`radial-gradient(
    circle at ${glareX} ${glareY}, 
    rgba(255,255,255,0.4) 0%, 
    transparent 50%
  )`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative aspect-square w-full cursor-pointer rounded-xl bg-linen-dark shadow-md"
    >
      <div 
        className="absolute inset-0 z-10 overflow-hidden rounded-xl shadow-lg transition-all duration-300"
        style={{
          boxShadow: isHovered 
            ? "0 20px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)"
            : "0 10px 20px -10px rgba(0,0,0,0.2)",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center"
          priority={priority}
          style={{
            transform: isHovered ? "scale(1.05) translateZ(20px)" : "scale(1) translateZ(0)",
            transition: "transform 0.4s ease-out",
          }}
        />
        
        {/* Apple TV glare effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-xl transition-opacity duration-300"
          style={{
            background: glareBackground,
            opacity: isHovered ? 1 : 0
          }}
        />
      </div>
    </motion.div>
  );
}
