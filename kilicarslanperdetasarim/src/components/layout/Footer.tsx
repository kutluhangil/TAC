import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { business } from "@/data/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pb-28 pt-14 text-linen md:pb-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/logo.png"
                alt="Logo"
                width={48}
                height={42}
              />
              <span className="font-display text-xl font-semibold">
                Kılıçarslan Perde &amp; Tasarım
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-linen/70">
              {business.tagline}
            </p>
            <p className="mt-4 text-sm text-linen/70">
              {business.location} — {business.serviceArea}
            </p>
          </div>

          <nav aria-label="Sayfa linkleri" className="grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-4">Modeller</p>
              <ul className="flex flex-col gap-2.5">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/modeller/${product.slug}`}
                      className="text-sm text-linen/70 transition-colors hover:text-linen"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Keşfet</p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/yapilan-isler"
                    className="text-sm text-linen/70 transition-colors hover:text-linen"
                  >
                    Yapılan İşler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#rehber"
                    className="text-sm text-linen/70 transition-colors hover:text-linen"
                  >
                    Rehber
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#iletisim"
                    className="text-sm text-linen/70 transition-colors hover:text-linen"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-linen/15 pt-6 text-xs text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Tüm hakları saklıdır.
          </p>
          <p>Kaliteli ürünlerle hizmet verilmektedir.</p>
        </div>
      </div>
    </footer>
  );
}
