"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

const CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "salon", label: "Salon" },
  { id: "yatak", label: "Yatak Odası" },
  { id: "mutfak-banyo", label: "Mutfak & Banyo" },
  { id: "ofis", label: "Ofis & Çalışma" },
  { id: "balkon", label: "Cam Balkon" },
];

function getCategoryMatch(product: Product, categoryId: string): boolean {
  if (categoryId === "all") return true;
  
  const bestFor = product.bestFor.map((b) => b.toLowerCase());
  
  switch (categoryId) {
    case "salon":
      return bestFor.some(b => b.includes("salon") || b.includes("her oda") || b.includes("yemek odası"));
    case "yatak":
      return bestFor.some(b => b.includes("yatak") || b.includes("çocuk") || b.includes("genç") || b.includes("her oda"));
    case "mutfak-banyo":
      return bestFor.some(b => b.includes("mutfak") || b.includes("banyo") || b.includes("her oda"));
    case "ofis":
      return bestFor.some(b => b.includes("ofis") || b.includes("çalışma") || b.includes("makam") || b.includes("plaza"));
    case "balkon":
      return bestFor.some(b => b.includes("balkon"));
    default:
      return true;
  }
}

interface ModellerViewProps {
  products: Product[];
}

export function ModellerView({ products }: ModellerViewProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter((p) => getCategoryMatch(p, activeCategory));

  return (
    <div>
      {/* Filters */}
      <div className="mt-8 mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-tac-red text-white shadow-md"
                : "bg-white border border-charcoal/10 text-charcoal-soft hover:border-tac-red hover:text-tac-red"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center text-charcoal-soft">
          Bu kategoriye uygun model bulunamadı.
        </div>
      )}
    </div>
  );
}
