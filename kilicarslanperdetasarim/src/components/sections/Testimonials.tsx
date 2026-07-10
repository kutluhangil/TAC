import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { CurtainReveal } from "@/components/motion/CurtainReveal";

function Stars({ rating }: { rating: 4 | 5 }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} / 5 yıldız`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-4 w-4 fill-brass text-brass"
              : "h-4 w-4 text-charcoal/20"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full break-inside-avoid flex-col overflow-hidden rounded-2xl border border-brass/25 bg-white/60">
      {/* Real installation photo slot — cards render text-only until provided. */}
      {testimonial.photo && (
        <div className="relative aspect-[4/3]">
          <Image
            src={testimonial.photo}
            alt={`${testimonial.model} — montaj fotoğrafı`}
            fill
            sizes="(max-width: 640px) 85vw, 30vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <Stars rating={testimonial.rating} />
        <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-charcoal">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
        <figcaption className="mt-4 flex items-center justify-between gap-3">
          <span className="font-body text-sm font-semibold text-charcoal">
            {testimonial.name} — {testimonial.district}
          </span>
          <span className="rounded-full bg-linen-warm px-3 py-1 text-xs font-medium text-charcoal-soft">
            {testimonial.model}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="yorumlar" className="bg-linen-warm py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <CurtainReveal>
          <p className="eyebrow">Yorumlar</p>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
            Komşularınız ne diyor?
          </h2>
        </CurtainReveal>

        {/* Mobile: swipeable snap carousel. Desktop: three-column masonry. */}
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:block md:columns-3 md:gap-5 md:space-y-5 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="w-[85vw] max-w-[340px] shrink-0 snap-center md:mb-5 md:w-auto md:max-w-none"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
