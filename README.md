<div align="center">

<img src="docs/media/hero.svg" alt="Kılıçarslan Perde & Tasarım — a roller blind unrolls and a zebra blind shifts in a window, beside the mobile site with models and a sticky WhatsApp bar" width="100%">

<p>
  <a href="https://kilicarslanperdetasarim.vercel.app"><img alt="Live" src="https://img.shields.io/badge/live-visit%20the%20atelier-c8935f?style=for-the-badge&labelColor=6b4a3a"></a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js%2014-Framer%20Motion-e2c290?style=for-the-badge&labelColor=6b4a3a">
  <img alt="Mobile first" src="https://img.shields.io/badge/mobile-first-8a9b7a?style=for-the-badge&labelColor=6b4a3a">
  <img alt="Client" src="https://img.shields.io/badge/client-local%20atelier-c8935f?style=for-the-badge&labelColor=6b4a3a">
</p>

<p><em>A premium, mobile-first showcase for Kılıçarslan Perde & Tasarım, a local curtain and interior atelier:<br>
ten curtain models, a gallery of finished rooms, a buying guide and contact one tap away.</em></p>

</div>

<img src="docs/media/divider.svg" width="100%" alt="">

## The idea

A neighbourhood curtain workshop gets most of its customers from a phone: someone sees a finished room, wants the same, and sends a WhatsApp message. The site is built for exactly that path. It shows the models and real finished work in a way that feels like a premium brand, answers the questions people ask before buying, and keeps WhatsApp and call buttons in reach on every screen.

> **Contact never scrolls away.** On phones a sticky bar holds WhatsApp and call; on desktop a floating button does the same. Every page is a step toward a message, not a dead end.

<img src="docs/media/divider.svg" width="100%" alt="">

## Features

| | |
|---|---|
| **Ten models** | Roller (stor), pleated (plise), wooden and metal venetian blinds, rustic, zebra, decorative rails, sheer (tül), drapes (fon) and office screen blinds, each with its own page and photo gallery. |
| **Finished work** | A gallery of completed rooms with a full-screen lightbox. |
| **Buying guide** | Which curtain for which room, how long curtains last, how to care for them, with links to the models and services. |
| **Services** | Washing and alterations, and curtain rail installation. |
| **Testimonials** | Short notes from customers. |
| **Contact** | A sticky mobile bar and a floating desktop button for WhatsApp and phone. |
| **Motion** | Framer Motion reveals and transitions tuned for phones. |
| **SEO** | Metadata, a generated Open Graph image, `sitemap.ts` and `robots.ts`. |
| **Optimised images** | 180+ product, gallery and brand images served through `next/image`. |

<img src="docs/media/divider.svg" width="100%" alt="">

## How it fits together

```mermaid
flowchart LR
  DATA[src/data<br/>products · gallery · guide · services · testimonials · business] --> PAGES[Next.js App Router]
  PAGES --> HOME[/ · hero · models · work · guide · services/]
  PAGES --> MOD[/modeller · /modeller/slug/]
  PAGES --> WORK[/yapilan-isler · lightbox/]
  PAGES --> SEO[sitemap · robots · OG image]
  HOME --> CTA[Sticky WhatsApp / call]
  MOD --> CTA
  WORK --> CTA
```

| Route | Page |
|---|---|
| `/` | Home: hero, featured models, finished work, guide, services, testimonials |
| `/modeller` · `/modeller/[slug]` | All models and one model with its gallery |
| `/yapilan-isler` | Finished work |

<img src="docs/media/divider.svg" width="100%" alt="">

## Türkçe özet

**Kılıçarslan Perde & Tasarım** için hazırlanmış, mobil öncelikli ve premium görünümlü bir vitrin sitesi. Stor, plise, ahşap ve metal jaluzi, rustik, zebra, dekoratif ray, tül, fon ve ofis screen perde olmak üzere on model kendi sayfası ve galerisiyle; tamamlanan işler tam ekran galeride; hangi odaya hangi perde, ömür ve bakım soruları rehberde. Yıkama-tadilat ve korniş montajı hizmetleri anlatılıyor. Telefonda yapışkan bir çubuk, masaüstünde yüzen bir düğme WhatsApp ve aramayı her zaman bir dokunuş uzakta tutuyor.

<img src="docs/media/divider.svg" width="100%" alt="">

## Development

The app lives in `kilicarslanperdetasarim/`:

```sh
cd kilicarslanperdetasarim
npm install
npm run dev
npm run build
```

No environment variables are needed; business details live in `src/data/business.ts`.

```
kilicarslanperdetasarim/src/app/          home, modeller, yapilan-isler, sitemap, robots, OG image
kilicarslanperdetasarim/src/components/   hero, products, gallery (lightbox), sections, layout (sticky contact), motion
kilicarslanperdetasarim/src/data/         products, gallery, guide, services, testimonials, business
kilicarslanperdetasarim/public/images/    brand, products, gallery, services, testimonials
```

<div align="center">
<br>
<a href="https://github.com/kutluhangil"><img src="docs/media/signature.svg" width="100%" alt="Built by kutluhangil"></a>
<sub>Client project · the room and models in the banner are drawn.</sub>
</div>
