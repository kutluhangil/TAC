import { products } from "@/data/products";

/**
 * Slow-scrolling strip of model names under the hero. Pure CSS animation
 * (transform only); the list is duplicated once for a seamless loop.
 * Decorative — the models are listed properly in the grid below.
 */
export function ModelMarquee() {
  const names = products.map((p) => p.name);

  const strip = (
    <div className="flex shrink-0 items-center">
      {names.map((name) => (
        <span key={name} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-lg text-charcoal-soft">
            {name}
          </span>
          <span className="h-1 w-1 rounded-full bg-brass" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="overflow-hidden border-y border-brass/30 bg-linen-warm py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {strip}
        {strip}
      </div>
    </div>
  );
}
