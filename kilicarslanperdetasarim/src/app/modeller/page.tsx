import type { Metadata } from "next";
import { products } from "@/data/products";
import { ModellerView } from "@/components/products/ModellerView";
import { FadeUp } from "@/components/motion/FadeUp";

export const metadata: Metadata = {
  title: "Perde Modelleri",
  description:
    "Perde modelleri: stor, plise, ahşap jaluzi, metal jaluzi, rustik, zebra, dekoratif ray, tül, fon ve screen ofis perdesi. Yerinde ölçü ve montaj — Tuzla / İstanbul.",
};

export default function ModellerPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:pt-32">
      <FadeUp>
        <p className="eyebrow">Perde Modelleri</p>
        <h1 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
          Her pencereye doğru model
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-charcoal-soft">
          On model arasından evinize ve ofisinize uygun olanı birlikte
          seçelim. Hepsinde yerinde ölçü, milimetrik dikim ve temiz montaj
          bizden.
        </p>
      </FadeUp>
      <ModellerView products={products} />
    </div>
  );
}
