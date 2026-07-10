import { Mail, MapPin, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { CurtainReveal } from "@/components/motion/CurtainReveal";

export function ContactSection() {
  return (
    <section id="iletisim" className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
      <CurtainReveal>
        <p className="eyebrow">İletişim</p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
          Yerinde ölçü için bir telefon yeter
        </h2>

        <a
          href={business.phoneHref}
          className="mt-8 inline-block font-display text-[clamp(2rem,8vw,4rem)] font-semibold tracking-tight text-tac-red transition-colors hover:text-tac-deep"
        >
          {business.phone}
        </a>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-tac-red px-8 py-3.5 font-body font-semibold text-linen transition-colors hover:bg-tac-deep sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp&apos;tan Yaz
          </a>
          <a
            href={business.emailHref}
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-charcoal/25 px-8 py-3.5 font-body font-semibold text-charcoal transition-colors hover:border-tac-red hover:text-tac-red sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {business.email}
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-charcoal-soft">
          <MapPin className="h-4 w-4 text-brass" aria-hidden="true" />
          {business.location} — çevre ilçelere yerinde ölçü ve montaj:{" "}
          {business.serviceArea}
        </p>
      </CurtainReveal>
    </section>
  );
}
