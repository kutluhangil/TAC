import { Phone } from "lucide-react";
import type { ColorOption } from "@/data/products";
import { business } from "@/data/business";

/**
 * TAÇ color catalog for a model. Codes arrive later; until then the section
 * degrades to an elegant "call us" state instead of an empty grid.
 */
export function ColorSwatches({ colors }: { colors: ColorOption[] }) {
  if (colors.length === 0) {
    return (
      <div className="rounded-2xl border border-brass/30 bg-linen-warm p-6 sm:p-8">
        <p className="eyebrow">Renk &amp; Kod</p>
        <p className="mt-3 font-display text-xl text-charcoal">
          Renk kartelası için arayın, kataloğu yerinde gösterelim.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
          TAÇ kumaş kartelasını evinize getiriyor, renkleri kendi ışığınızda
          birlikte seçiyoruz.
        </p>
        <a
          href={business.phoneHref}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-tac-red px-6 py-3 font-body text-sm font-semibold text-linen transition-colors hover:bg-tac-deep"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {business.phone}
        </a>
      </div>
    );
  }

  return (
    <div>
      <p className="eyebrow">Renk &amp; Kod</p>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {colors.map((color) => (
          <li
            key={color.code}
            className="flex items-center gap-3 rounded-xl border border-brass/25 bg-white/60 p-3"
          >
            <span
              className="h-9 w-9 shrink-0 rounded-lg border border-charcoal/10"
              style={{ backgroundColor: color.hex ?? "#E8E2D6" }}
              aria-hidden="true"
            />
            <span>
              <span className="block font-body text-xs font-medium uppercase tracking-eyebrow text-charcoal-soft">
                {color.code}
              </span>
              <span className="block text-sm font-medium text-charcoal">
                {color.name}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
