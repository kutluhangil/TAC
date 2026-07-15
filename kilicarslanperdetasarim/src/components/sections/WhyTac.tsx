import { CurtainReveal } from "@/components/motion/CurtainReveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

const stats = [
  {
    value: "M.Ö. 3000",
    label:
      "Perdenin bilinen ilk kullanımı Eski Mısır'a dayanır. Hayvan derileri ve keten kumaşlarla başlayan bu serüven, yüzyıllar içinde zarafet sembolüne dönüştü.",
  },
  {
    value: "16. Yüzyıl",
    label:
      "Avrupa'da Rönesans ile birlikte perdeler, sadece ışığı kesmek için değil, pencereleri bir tablo gibi süslemek için ihtişamlı kumaşlarla tasarlanmaya başlandı.",
  },
  {
    value: "Modern Çağ",
    label:
      "Geleneksel dokuma tezgâhlarından günümüzün akıllı mekanizmalarına uzanan bu köklü miras, evlerimize zarafet ve fonksiyonellik katmaya devam ediyor.",
  },
];

export function WhyTac() {
  return (
    <section id="neden-tac" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <CurtainReveal>
        <p className="eyebrow">Perdenin Tarihçesi</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
          Tarihten Günümüze Zarafet
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
            &ldquo;Kaliteli kumaş, kusursuz işçilik. Yerinde ölçü
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
