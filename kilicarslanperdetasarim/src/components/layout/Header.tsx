"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";

export const navLinks = [
  { href: "/modeller", label: "Modeller" },
  { href: "/yapilan-isler", label: "Yapılan İşler" },
  { href: "/#rehber", label: "Rehber" },
  { href: "/#yorumlar", label: "Yorumlar" },
  { href: "/#iletisim", label: "İletişim" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-brass/20 bg-linen/95">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/brand/tac-logo.png"
              alt="Logo"
              width={40}
              height={35}
            />
            <span className="font-display text-lg font-semibold text-charcoal">
              Kılıçarslan Perde
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Ana menü">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-charcoal-soft transition-colors hover:text-tac-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal md:hidden"
            aria-label="Menüyü aç"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
