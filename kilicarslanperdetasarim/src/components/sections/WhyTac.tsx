import { CurtainReveal } from "@/components/motion/CurtainReveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

const stats = [
  {
    value: "1974",
    label:
      "Zorlu Ailesi'nin ürünlerini tek marka altında topladığı yıl. Kökleri Denizli Babadağ dokumacılığına dayanan, Türkiye'nin en köklü ev tekstili markası.",
  },
  {
    value: "1976",
    label:
      "TAÇ'ın perde üretimine başladığı yıl; 1984'ten beri tül perde ihracatı yapıyor. Üretim, Avrupa'nın en büyük entegre ev tekstili tesislerinde, Türkiye'de.",
  },
  {
    value: "1500+",
    label:
      "Türkiye genelinde satış noktası; yüzlerce mağaza ve 30'dan fazla ülkede varlık. Türkiye ev tekstilinin lider markası.",
  },
];

export function WhyTac() {
  return (
    <section id="neden-tac" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <CurtainReveal>
        <p className="eyebrow">Neden TAÇ?</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
          Türkiye&apos;de dokunur, dünyaya satılır
        </h2>
      </CurtainReveal>

      <StaggerChildren className="mt-10 grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.value} className="border-t border-brass/40 pt-5">
            <p className="font-display text-4xl font-semibold text-tac-red">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
              {stat.label}
            </p>
          </div>
        ))}
      </StaggerChildren>

      <CurtainReveal className="mt-12">
        <figure className="rounded-2xl bg-linen-warm p-8 md:p-10">
          <blockquote className="max-w-2xl font-display text-2xl font-medium leading-snug text-charcoal md:text-3xl">
            &ldquo;Marka TAÇ&apos;ın, ölçü ve işçilik bizim. Yerinde ölçü
            alıyor, milimetrik dikiyor, temiz montajla teslim ediyoruz.&rdquo;
          </blockquote>
          <figcaption className="eyebrow mt-5">
            Ufuk Kılıçarslan — Kılıçarslan Perde &amp; Tasarım
          </figcaption>
        </figure>
      </CurtainReveal>
    </section>
  );
}
