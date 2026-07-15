import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { Hero } from "@/components/hero/Hero";
import { ModelMarquee } from "@/components/hero/ModelMarquee";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CurtainReveal } from "@/components/motion/CurtainReveal";
import { WhyTac } from "@/components/sections/WhyTac";
import { CurtainGuide } from "@/components/sections/CurtainGuide";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { Faq } from "@/components/sections/Faq";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { InstagramFeed } from "@/components/sections/InstagramFeed";

export default function Home() {
  return (
    <>
      <Hero />
      <ModelMarquee />

      <section id="modeller" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <CurtainReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Modeller</p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
                Perde modelleri
              </h2>
            </div>
            <Link
              href="/modeller"
              className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-tac-red transition-colors hover:text-tac-deep"
            >
              Tümünü gör
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </CurtainReveal>
        <div className="mt-10">
          <ProductGrid products={products} layout="snap" />
        </div>
      </section>

      <WhyTac />
      <HowWeWork />
      <CurtainGuide />
      <Services />
      <Testimonials />
      <Faq />
      <InstagramFeed />
      <ContactSection />
    </>
  );
}
