import type { Product } from "@/data/products";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  /**
   * "snap": horizontal swipe with a 1.2-card peek on mobile (home teaser).
   * "grid": stacked responsive grid (full catalog page).
   */
  layout?: "snap" | "grid";
}

export function ProductGrid({ products, layout = "grid" }: ProductGridProps) {
  if (layout === "snap") {
    return (
      <StaggerChildren
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scroll-px-5 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3"
        itemClassName="w-[78vw] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none"
      >
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </StaggerChildren>
    );
  }

  return (
    <StaggerChildren className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </StaggerChildren>
  );
}
