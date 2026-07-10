"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { EASE } from "@/lib/motion-variants";

const PLAYED_KEY = "kp-hero-played";

type Phase = "initial" | "play" | "done";

/** Splits a line into per-letter spans for the staggered title reveal. */
function StaggeredLine({
  text,
  phase,
  baseDelay,
  className,
}: {
  text: string;
  phase: Phase;
  baseDelay: number;
  className?: string;
}) {
  const letters = Array.from(text);
  return (
    <span className={className} aria-hidden="true">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: -18 }}
          animate={
            phase === "initial"
              ? { opacity: 0, y: -18 }
              : { opacity: 1, y: 0 }
          }
          transition={
            phase === "done"
              ? { duration: 0 }
              : {
                  delay: baseDelay + i * 0.03,
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                }
          }
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Opening scene: the TAÇ logo draws in like rippling fabric, the business
 * name staggers in letter by letter, then the tagline settles. Plays once
 * per session (sessionStorage flag); repeat visits render the final state.
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
    <section className="linen-texture relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-20 text-center">
      <PingPongVideo />

      {/* Logo draws left-to-right like fabric being pulled across a rail. */}
      <motion.div
        className="relative w-36 sm:w-44 md:w-52"
        initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
        animate={
          shown
            ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
            : { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }
        }
        transition={instant ? { duration: 0 } : { duration: 1.2, ease: EASE }}
      >
        <Image
          src="/images/brand/tac-logo.png"
          alt="TAÇ logosu"
          width={800}
          height={704}
          priority
          sizes="(max-width: 640px) 144px, 208px"
        />
      </motion.div>

      <h1 className="mt-8 font-display font-semibold leading-[1.05] text-charcoal">
        <span className="sr-only">Kılıçarslan Perde &amp; Tasarım</span>
        <StaggeredLine
          text="KILIÇARSLAN"
          phase={phase}
          baseDelay={0.9}
          className="block text-[clamp(2.5rem,9vw,5rem)] tracking-tight"
        />
        <StaggeredLine
          text="PERDE & TASARIM"
          phase={phase}
          baseDelay={1.3}
          className="mt-1 block text-[clamp(1.1rem,4vw,2rem)] font-medium tracking-[0.14em] text-tac-red"
        />
      </h1>

      <motion.p
        className="mt-6 max-w-md font-body text-base text-charcoal-soft sm:text-lg"
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
        className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row"
        initial={{ opacity: 0, y: 16 }}
        animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={instant ? { duration: 0 } : { delay: 2.2, duration: 0.6, ease: EASE }}
      >
        <Link
          href="/modeller"
          className="rounded-full bg-tac-red px-8 py-3.5 font-body font-semibold text-linen transition-colors hover:bg-tac-deep active:scale-[0.98]"
        >
          Modelleri İncele
        </Link>
        <a
          href={business.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-charcoal/25 px-8 py-3.5 font-body font-semibold text-charcoal transition-colors hover:border-tac-red hover:text-tac-red active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp&apos;tan Yaz
        </a>
      </motion.div>

      <motion.p
        className="eyebrow mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: shown ? 1 : 0 }}
        transition={instant ? { duration: 0 } : { delay: 2.5, duration: 0.6 }}
      >
        {business.location} — yerinde ölçü &amp; montaj
      </motion.p>
    </section>
  );
}

/** A background video of a waving curtain that plays forward, then backward in a loop. */
function PingPongVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let isReversing = false;

    const playForward = () => {
      isReversing = false;
      video.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      if (!isReversing && video.duration && video.currentTime >= video.duration - 0.05) {
        isReversing = true;
        video.pause();
      }
    };

    let lastTime = performance.now();
    const loop = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (isReversing && video.duration) {
        const nextTime = video.currentTime - delta;
        if (nextTime <= 0) {
          video.currentTime = 0;
          playForward();
        } else {
          video.currentTime = nextTime;
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    rafId = requestAnimationFrame(loop);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Overlay to ensure text readability and blend with the linen texture */}
      <div className="absolute inset-0 bg-[#f7f5f0]/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f7f5f0] via-transparent to-transparent z-10" />
      <video
        ref={videoRef}
        src="/videos/curtain-waving.mp4"
        className="h-full w-full object-cover opacity-60 mix-blend-multiply"
        muted
        playsInline
        autoPlay
      />
    </div>
  );
}
