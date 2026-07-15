import Image from "next/image";

/**
 * Branded stand-in shown until a product photo is provided: linen ground,
 * a brass hairline frame and the mark at low opacity. Never a gray
 * "image not found" box.
 */
export function ProductImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="linen-texture flex h-full w-full flex-col items-center justify-center gap-3 bg-linen-warm p-6">
      <div className="flex flex-col items-center gap-3 border border-brass/40 px-8 py-6">
        <Image
          src="/images/brand/logo.png"
          alt=""
          width={96}
          height={85}
          className="opacity-20"
        />
        <p className="font-display text-lg text-charcoal-soft">{name}</p>
      </div>
    </div>
  );
}
