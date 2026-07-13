"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { Ruler, Scissors, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Ruler,
    title: "1. Ücretsiz Ölçü",
    description: "Adresinize gelip pencerelerinizin milimetrik ölçülerini alıyor, mekânınıza en uygun modelleri öneriyoruz."
  },
  {
    icon: Scissors,
    title: "2. Kumaş Seçimi ve Dikim",
    description: "Geniş kartelalarımızdan kumaşınızı seçiyorsunuz. Ardından profesyonel terzilerimiz perdelerinizi özenle dikiyor."
  },
  {
    icon: Wrench,
    title: "3. Profesyonel Montaj",
    description: "Söz verdiğimiz gün ve saatte gelip, perdelerinizi temiz ve eksiksiz bir şekilde kornişe veya duvara monte ediyoruz."
  },
  {
    icon: CheckCircle,
    title: "4. Mutlu Teslimat",
    description: "Mekanizmaların ve perdelerin kontrollerini yapıp, kullanım talimatlarını vererek süreci tamamlıyoruz."
  }
];

export function HowWeWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 overflow-hidden">
      <div className="text-center">
        <p className="eyebrow">Sürecimiz</p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
          Nasıl Çalışıyoruz?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-soft">
          Siparişten montaja kadar olan tüm süreci sizin için en zahmetsiz hale getiriyoruz. 
          Hiçbir detayla uğraşmanıza gerek kalmıyor.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, idx) => (
          <FadeUp key={idx} delay={idx * 0.1}>
            <div className="relative group">
              {/* Connector Line for larger screens */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-brass/50 to-transparent" />
              )}
              
              {/* Icon Container */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm border border-brass/20 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md mx-auto lg:mx-0">
                <step.icon className="h-8 w-8 text-tac-red" />
              </div>

              {/* Text */}
              <div className="text-center lg:text-left">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
