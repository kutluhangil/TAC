"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 4 Saniyede bir kart değişimi
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Sadece ekranda göreceğimiz ilk 3 kartı alıyoruz
  const visibleCards = [
    products[currentIndex % products.length],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
  ];

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[4/5] mx-auto mt-12 lg:mt-0 lg:ml-auto">
      <AnimatePresence mode="popLayout">
        {visibleCards.map((product, index) => {
          return (
            <motion.div
              key={product.slug}
              layout
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 100, // Aşağıdan gelir
                rotate: 5,
              }}
              animate={{
                opacity: 1 - index * 0.15, // 1, 0.85, 0.7
                scale: 1 - index * 0.05, // 1, 0.95, 0.9
                y: index * 25, // Aşağı doğru yığılım (0, 25, 50)
                rotate: index % 2 === 0 ? 0 : -2, // Hafif sağa sola yatık görünüm
                zIndex: 3 - index, // En üstteki (0) en büyük z-index'e sahip
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
                y: -150, // Yukarı doğru uçar
                x: -50, // Sola doğru kayar
                rotate: -10,
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-charcoal/10 flex flex-col group"
              style={{ transformOrigin: "top center" }}
            >
              {/* Resim Alanı */}
              <div className="relative flex-1 bg-linen/30 w-full overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* İçerik Alanı */}
              <div className="bg-white p-6 relative">
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-charcoal-soft line-clamp-2 mb-4">
                  {product.shortDesc}
                </p>
                <Link
                  href={`/modeller/${product.slug}`}
                  className="inline-flex items-center text-sm font-medium text-tac-red hover:text-red-700 transition-colors"
                >
                  Modeli İncele
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
