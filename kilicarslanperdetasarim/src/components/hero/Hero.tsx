"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";
import { business } from "@/data/business";
import { EASE } from "@/lib/motion-variants";
import { HeroSearch } from "./HeroSearch";
import { HeroCardStack } from "./HeroCardStack";

const PLAYED_KEY = "kp-hero-played";

type Phase = "initial" | "play" | "done";



/**
 * Opening scene: the logo draws in like rippling fabric, the business
 * name staggers in letter by letter, then the tagline settles.
 * Split layout with HeroCardStack on the right.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("initial");

  useEffect(() => {
    if (reduceMotion || sessionStorage.getItem(PLAYED_KEY) === "1") {
      setPhase("done");
      return;
    }
    sessionStorage.setItem(PLAYED_KEY, "1");
    setPhase("play");
  }, [reduceMotion]);

  const instant = phase === "done";
  const shown = phase !== "initial";

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-24 pt-32 lg:pt-20">
      <div className="absolute inset-0 bg-linen -z-10" />
      <div className="linen-texture absolute inset-0 -z-10 opacity-30 mix-blend-multiply" />
      
      <CurtainVideo />

      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-1 my-auto">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-center text-center pt-10 lg:pt-0 mx-auto max-w-xl">
          {/* Logo draws left-to-right like fabric being pulled across a rail. */}
          <motion.div
            className="relative z-10 w-64 sm:w-80 md:w-96"
            initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
            animate={
              shown
                ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
                : { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }
            }
            transition={instant ? { duration: 0 } : { duration: 1.2, ease: EASE }}
          >
            <Image
              src="/images/brand/hero-logo.png"
              alt="Logo"
              width={800}
              height={704}
              priority
              sizes="(max-width: 640px) 144px, 208px"
            />
          </motion.div>

          <h1 className="relative z-10 mt-8 font-display font-semibold leading-[1.05] text-charcoal">
            <span className="sr-only">Kılıçarslan Perde &amp; Tasarım</span>
          </h1>

          <motion.p
            className="relative z-10 mt-6 max-w-md font-body text-base text-charcoal-soft sm:text-lg"
            initial={{ opacity: 0, letterSpacing: "0.08em" }}
            animate={
              shown
                ? { opacity: 1, letterSpacing: "0.01em" }
                : { opacity: 0, letterSpacing: "0.08em" }
            }
            transition={instant ? { duration: 0 } : { delay: 1.9, duration: 0.7, ease: EASE }}
          >
            {business.tagline}
          </motion.p>

          <motion.div
            className="relative z-10 mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={instant ? { duration: 0 } : { delay: 2.2, duration: 0.6, ease: EASE }}
          >
            <Link
              href="/modeller"
              className="rounded-full bg-tac-red px-8 py-3.5 font-body font-semibold text-linen transition-colors hover:bg-tac-deep active:scale-[0.98] text-center"
            >
              Modelleri İncele
            </Link>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-8 py-3.5 font-body font-semibold text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp&apos;tan Yaz
            </a>
          </motion.div>

          <motion.p
            className="relative z-10 eyebrow mt-10 text-charcoal-soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: shown ? 1 : 0 }}
            transition={instant ? { duration: 0 } : { delay: 2.5, duration: 0.6 }}
          >
            {business.location} — yerinde ölçü &amp; montaj
          </motion.p>

          <motion.div
            className="relative z-30 w-full max-w-md lg:max-w-lg mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : 10 }}
            transition={instant ? { duration: 0 } : { delay: 2.8, duration: 0.6 }}
          >
            <HeroSearch />

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-[13px] sm:text-sm font-medium text-charcoal/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-tac-red" /> Ücretsiz Keşif ve Ölçü Alımı
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-tac-red" /> %100 Müşteri Memnuniyeti
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Animated Card Stack */}
        <motion.div
          className="relative z-20 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: shown ? 1 : 0, scale: shown ? 1 : 0.95 }}
          transition={instant ? { duration: 0 } : { delay: 3, duration: 0.8, ease: EASE }}
        >
          <HeroCardStack />
        </motion.div>

      </div>
    </section>
  );
}

/**
 * Billowing-curtain footage behind the hero. It plays through exactly once and
 * then gently fades out, leaving a calm linen backdrop. A warm linen wash and a
 * brighter centre keep the logo and copy legible while the fabric shows softly
 * at the edges. Skipped entirely for reduced-motion users.
 */
function CurtainVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setFaded(true);
      return;
    }
    const video = videoRef.current;
    if (!video) return;

    // One pass, then dissolve away — no loop.
    const handleEnded = () => setFaded(true);
    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => video.removeEventListener("ended", handleEnded);
  }, [reduceMotion]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden transition-opacity duration-[1800ms] ease-out ${
        faded ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src="/videos/curtain-waving.mp4"
        className="h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
      />
      {/* Warm linen wash blends the footage toward the palette. */}
      <div className="absolute inset-0 bg-linen-warm/45" />
      {/* Brighter centre keeps the logo and headline readable over the fabric. */}
      <div className="absolute inset-0 bg-[radial-gradient(115%_115%_at_50%_42%,rgba(250,248,245,0.85)_0%,rgba(250,248,245,0.45)_45%,rgba(250,248,245,0)_75%)]" />
      {/* Bottom fade so the location line reads against the clean background. */}
      <div className="absolute inset-0 bg-gradient-to-t from-linen via-transparent to-transparent" />
    </div>
  );
}
