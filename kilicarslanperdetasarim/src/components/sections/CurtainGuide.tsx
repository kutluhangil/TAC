import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { guide } from "@/data/guide";
import { CurtainReveal } from "@/components/motion/CurtainReveal";

/**
 * Buyer's guide as a native <details> accordion — works without JS,
 * one-hand friendly on mobile, keyboard accessible for free.
 */
export function CurtainGuide() {
  return (
    <section id="rehber" className="bg-linen-warm py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <CurtainReveal>
          <p className="eyebrow">Perde Rehberi</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
            Karar vermeden önce bilmeniz gerekenler
          </h2>
        </CurtainReveal>

        <div className="mt-10 divide-y divide-brass/30 border-y border-brass/30">
          {guide.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-medium text-charcoal transition-colors hover:text-tac-red [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="guide-chevron h-5 w-5 shrink-0 text-brass transition-transform duration-200"
                  aria-hidden="true"
                />
              </summary>
              <div className="pb-6 pr-8">
                <p className="text-sm leading-relaxed text-charcoal-soft">
                  {item.answer}
                </p>
                {item.linkText && item.linkHref && (
                  <Link
                    href={item.linkHref}
                    className="mt-3 inline-block font-body text-sm font-semibold text-tac-red hover:text-tac-deep"
                  >
                    {item.linkText} →
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
