import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

import { ProductCardImage } from "./ProductCardImage";

/**
 * Catalog card. Interactions are CSS-only: image scales on hover (desktop),
 * the whole card compresses slightly while pressed (mobile).
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/modeller/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-brass/25 bg-white/60 transition-transform duration-200 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-linen-warm">
        <ProductCardImage images={product.images} alt={product.name} />
      </div>
      <div className="p-5">
        <h3 className="font-display text-[1.35rem] font-semibold text-charcoal">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-charcoal-soft">
          {product.shortDesc}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-tac-red">
          İncele
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
