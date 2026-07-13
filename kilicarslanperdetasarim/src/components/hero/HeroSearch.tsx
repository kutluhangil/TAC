"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={wrapperRef} className="relative z-20 mt-6 w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-charcoal/40" />
        <input
          type="text"
          className="w-full rounded-full border border-charcoal/20 bg-white/80 backdrop-blur-md py-3.5 pl-12 pr-4 font-body text-base text-charcoal placeholder:text-charcoal/40 focus:border-tac-red focus:outline-none focus:ring-1 focus:ring-tac-red shadow-sm transition-all"
          placeholder="Perde modeli arayın (örn. Stor, Tül)..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      <AnimatePresence>
        {isOpen && query.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-2xl bg-white border border-charcoal/10 shadow-xl"
          >
            {filteredProducts.length > 0 ? (
              <ul className="max-h-60 overflow-y-auto py-2">
                {filteredProducts.map((product) => (
                  <li key={product.slug}>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        router.push(`/modeller/${product.slug}`);
                      }}
                      className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-linen-warm focus:bg-linen-warm focus:outline-none"
                    >
                      <div>
                        <p className="font-display font-medium text-charcoal">{product.name}</p>
                        <p className="text-xs text-charcoal-soft line-clamp-1 mt-0.5">{product.shortDesc}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-tac-red flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-6 text-center text-sm text-charcoal-soft">
                &quot;{query}&quot; için sonuç bulunamadı.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
