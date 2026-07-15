import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { FloatingContactDesktop } from "@/components/layout/FloatingContactDesktop";
import { business } from "@/data/business";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default:
      "Kılıçarslan Perde & Tasarım | Perde Modelleri — Tuzla / İstanbul",
    template: "%s | Kılıçarslan Perde & Tasarım",
  },
  description:
    "Perde modelleri: zebra, stor, plise, tül, fon, ahşap ve metal jaluzi, screen ofis perdesi. Tuzla, Pendik, Kartal ve Gebze'de yerinde ölçü, milimetrik dikim ve profesyonel montaj.",
  openGraph: {
    title: "Kılıçarslan Perde & Tasarım",
    description:
      "Perde modelleri — yerinde ölçü, montaj. Tuzla / İstanbul.",
    locale: "tr_TR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
};

// LocalBusiness structured data so local searches surface the phone number directly.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  telephone: "+905324675428",
  email: business.email,
  url: business.url,
  image: `${business.url}/images/brand/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tuzla",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: business.serviceArea,
  founder: business.owner,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContactBar />
        <FloatingContactDesktop />
      </body>
    </html>
  );
}
