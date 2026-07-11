import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle, Phone } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { business } from "@/data/business";
import { ColorSwatches } from "@/components/products/ColorSwatches";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductGallery } from "@/components/products/ProductGallery";
import { FadeUp } from "@/components/motion/FadeUp";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.shortDesc} Yerinde ölçü ve montaj — ${business.location}.`,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);
  const whatsappText = encodeURIComponent(
    `Merhaba, ${product.name} modeli için fiyat almak istiyorum.`
  );

  return (
    <div className="pb-24 pt-24 md:pt-28">
      <div className="mx-auto max-w-4xl px-5">
        <Link
          href="/modeller"
          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-charcoal-soft transition-colors hover:text-tac-red"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Tüm Modeller
        </Link>

        <FadeUp className="mt-6">
          <p className="eyebrow">TAÇ Perde Modeli</p>
          <h1 className="mt-2 font-display text-[clamp(2rem,6vw,3.25rem)] font-semibold text-charcoal">
            {product.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-charcoal-soft">
            {product.shortDesc}
          </p>
        </FadeUp>
      </div>

      {/* Gallery */}
      <FadeUp className="mt-8">
        <div className="mx-auto max-w-4xl px-5">
          <ProductGallery images={product.images} name={product.name} />
        </div>
      </FadeUp>

      <div className="mx-auto mt-10 max-w-4xl space-y-10 px-5">
        <div className="max-w-2xl space-y-4 leading-relaxed text-charcoal">
          {product.longDesc.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Özellikler</p>
            <ul className="mt-4 space-y-2.5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-tac-red"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Nerelerde kullanılır?</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.bestFor.map((room) => (
                <li
                  key={room}
                  className="rounded-full border border-brass/40 bg-linen-warm px-4 py-1.5 text-sm font-medium text-charcoal"
                >
                  {room}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-brass/30 bg-brass/30 sm:grid-cols-2">
          <div className="bg-linen-warm p-6">
            <p className="eyebrow">Ömür</p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal">
              {product.lifespan}
            </p>
          </div>
          <div className="bg-linen-warm p-6">
            <p className="eyebrow">Bakım</p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal">
              {product.care}
            </p>
          </div>
        </div>

        <ColorSwatches colors={product.colors} />

        {/* Conversion block: the only place on the page with a red surface. */}
        <div className="rounded-2xl bg-tac-red p-6 text-linen sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Bu model için fiyat alın
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-linen/85">
            Yerinde ölçü alıyor, kumaşı birlikte seçiyor, net fiyatı yerinde
            veriyoruz. {business.serviceArea}.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-linen px-7 py-3 font-body font-semibold text-tac-red transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={`${business.whatsappHref}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-linen/50 px-7 py-3 font-body font-semibold text-linen transition-colors hover:bg-tac-deep"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <p className="eyebrow">Diğer Modeller</p>
        <div className="mt-5">
          <ProductGrid products={others.slice(0, 3)} layout="grid" />
        </div>
      </div>
    </div>
  );
}
