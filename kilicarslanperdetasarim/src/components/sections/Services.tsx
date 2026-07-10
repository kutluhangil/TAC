import Image from "next/image";
import { Check, Ruler } from "lucide-react";
import { services } from "@/data/services";
import { CurtainReveal } from "@/components/motion/CurtainReveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

export function Services() {
  return (
    <section id="hizmetler" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <CurtainReveal>
        <p className="eyebrow">Hizmetler</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
          Perdeniz hazır olana kadar buradayız
        </h2>
      </CurtainReveal>

      <StaggerChildren className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-brass/25 bg-white/60"
          >
            {service.image ? (
              <div className="relative aspect-[16/9]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="linen-texture flex aspect-[16/9] items-center justify-center bg-linen-warm">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-brass/40">
                  <Ruler className="h-9 w-9 text-brass" aria-hidden="true" />
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-charcoal">
                {service.name}
              </h3>
              <p className="mt-2 leading-relaxed text-charcoal-soft">
                {service.desc}
              </p>
              <ul className="mt-5 space-y-2.5">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-tac-red"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </StaggerChildren>
    </section>
  );
}
