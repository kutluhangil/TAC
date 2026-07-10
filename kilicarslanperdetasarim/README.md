# Kılıçarslan Perde & Tasarım

TAÇ perde modelleri için mobil öncelikli vitrin sitesi. Tuzla / İstanbul.

**Canlı:** https://kilicarslanperdetasarim.vercel.app

## Stack

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Vercel

## Geliştirme

```bash
npm install && npm run dev
```

## İçerik güncelleme

Tüm içerik `src/data/` altındadır — görsel, renk kodu ve yorum fotoğrafları
kod değişikliği gerektirmeden bu dosyalardan eklenir:

- Ürün görselleri → `products.ts` içindeki `images` dizileri
- TAÇ renk kodları → `products.ts` içindeki `colors` dizileri
- Gerçek montaj fotoğrafları → `testimonials.ts` içindeki `photo` alanları

Kaynak görseller `scripts/convert-images.mjs` ile webp'e dönüştürülür.
