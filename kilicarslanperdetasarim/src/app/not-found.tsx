import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="linen-texture flex min-h-[100svh] flex-col items-center justify-center px-5 text-center">
      <Image
        src="/images/brand/tac-logo.png"
        alt=""
        width={96}
        height={85}
        className="opacity-30"
      />
      <h1 className="mt-6 font-display text-3xl font-semibold text-charcoal">
        Bu perde burada değil
      </h1>
      <p className="mt-3 max-w-sm text-charcoal-soft">
        Aradığınız sayfa taşınmış ya da hiç dikilmemiş olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-tac-red px-8 py-3.5 font-body font-semibold text-linen transition-colors hover:bg-tac-deep"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
