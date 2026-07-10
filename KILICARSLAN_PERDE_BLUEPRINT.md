# KILIÇARSLAN PERDE & TASARIM — Proje Blueprint

> **Tagline:** "Pencereniz, evinizin en güzel köşesi olsun."
> **Tür:** Showcase / vitrin sitesi (statik içerik, sipariş yok, kullanıcı hesabı yok)
> **Hedef kitle:** Tuzla / İstanbul ve çevresinde perde taktırmak isteyen ev & ofis sahipleri
> **Birincil cihaz:** MOBİL (trafiğin çoğunluğu telefondan gelecek) — desktop ikinci ama eşit derecede premium
> **Deploy:** Vercel → `kilicarslanperdetasarim.vercel.app`

---

## 0. Claude Code'a Başlangıç Notu (ÖNCE OKU)

Bu proje bir arkadaş için yapılan gerçek bir işletme sitesidir. Site **sadece vitrin** amaçlıdır:
ziyaretçi modellere bakar, beğenir, telefonla arar veya mail atar. Hepsi bu.

**Kesin kurallar:**
- ❌ Sipariş / sepet / ödeme / kullanıcı girişi / form-backend YOK.
- ❌ Sahte ürün görseli, stok fotoğraf, Unsplash placeholder YOK. Görseller kullanıcı tarafından verilecek.
- ❌ CMS, veritabanı, API YOK. Tüm içerik `src/data/` altında TypeScript dosyalarında.
- ✅ İletişim = `tel:` linki, `mailto:` linki ve WhatsApp `wa.me` linki. Backend gerektirmez.
- ✅ Görseller gelene kadar zarif, markalı placeholder bileşeni kullanılır (aşağıda tanımlı).

**Proje başında kullanıcı şu dosyaları verecek (uploads klasörüne bak):**

| Dosya | İçerik | Kullanım |
|---|---|---|
| `tac-seeklogo.png` | TAÇ resmi logosu (kırmızı bayrak/dalga formu, transparan PNG) | Hero animasyonu, header, favicon türetme |
| `IMG_3262.JPG` | Kartvizit ön yüz | Referans — iletişim bilgileri buradan doğrulandı |
| `IMG_3263.JPG` | Kartvizit arka yüz | Referans — ürün listesi buradan doğrulandı |
| Perde ürün görselleri | Nano Banana ile üretilmiş model görselleri | `public/images/products/` altına, slug ile eşleşen isimlerle |
| Montaj fotoğrafları (sonra) | Arkadaşın taktığı gerçek perdelerin fotoğrafları | Yorumlar bölümüne tek tek eklenecek |

Görseller ilk oturumda eksikse: placeholder sistemiyle devam et, görsel yollarını data dosyasında
hazır bırak, kullanıcı görselleri verdiğinde tek dosyadan bağlanabilsin.

---

## 1. İşletme Bilgileri (Kartvizitten — DEĞİŞTİRME)

```ts
// src/data/business.ts
export const business = {
  name: "Kılıçarslan Perde & Tasarım",
  owner: "Ufuk Kılıçarslan",
  brand: "TAÇ",                          // Tüm ürünler TAÇ markalı
  phone: "0532 467 54 28",
  phoneHref: "tel:+905324675428",
  whatsappHref: "https://wa.me/905324675428",
  email: "ufukkilicarslan76@gmail.com",
  emailHref: "mailto:ufukkilicarslan76@gmail.com",
  location: "Tuzla / İstanbul",
  serviceArea: "Tuzla, Pendik, Kartal, Gebze ve çevresi", // Anadolu yakası vurgusu
} as const;
```

---

## 2. Ürün Kataloğu (Kartvizit arka yüzünden — 10 model + 2 hizmet)

Her ürünün **renk kartelası ve ürün kodları SONRA gelecek**. Data modelinde alanları şimdiden aç,
boş dizi ile başlat, UI'da "Renk seçenekleri için arayınız" fallback'i göster.

```ts
// src/data/products.ts
export interface ColorOption {
  code: string;        // TAÇ ürün kodu — SONRA EKLENECEK
  name: string;        // Renk adı — SONRA EKLENECEK
  hex?: string;        // Swatch rengi — SONRA EKLENECEK
}

export interface Product {
  slug: string;
  name: string;
  shortDesc: string;       // Kart üzerinde 1 cümle
  longDesc: string;        // Detay sayfası paragrafları
  features: string[];      // "Kolay temizlik", "Işık kontrolü" gibi
  bestFor: string[];       // "Salon", "Ofis", "Mutfak"
  lifespan: string;        // "Doğru bakımla 10+ yıl"
  care: string;            // Bakım önerisi
  colors: ColorOption[];   // [] — kodlar gelince doldurulacak
  images: string[];        // ["/images/products/stor-1.webp", ...] — görseller gelince
}
```

**Model listesi ve her biri için yazılacak gerçek içerik** (longDesc bunlardan genişletilecek —
uydurma teknik değer yazma, aşağıdaki genel geçer doğru bilgilerle sınırlı kal):

| # | Model | Slug | Özet içerik yönü |
|---|---|---|---|
| 1 | Stor Perde | `stor-perde` | Düz inen, rulo mekanizmalı; minimal görünüm, az yer kaplar; mutfak-banyo-ofis; silinebilir kumaş seçenekleri; güneş kontrolü |
| 2 | Plise Perde | `plise-perde` | Akordeon katlamalı; cam balkon ve pencere içi montaj; yukarı-aşağı iki yönlü kullanım; dar alanların kurtarıcısı |
| 3 | Ahşap Jaluzi | `ahsap-jaluzi` | Doğal ahşap lameller; sıcak ve prestijli görünüm; kanat açısıyla ışık kontrolü; çalışma odası ve salon |
| 4 | Metal Jaluzi | `metal-jaluzi` | Alüminyum lamel; ofis klasiği; neme dayanıklı, mutfak-banyoya uygun; uzun ömür, kolay silme |
| 5 | Rustik | `rustik` | Dekoratif boru korniş + halkalı fon; klasik-şık salon çözümü; kumaş ve aksesuar kombinasyonu |
| 6 | Zebra Perde | `zebra-perde` | Şeffaf + opak yatay bantlar; tek perdede tül + fon etkisi; kademeli ışık ayarı; en çok tercih edilen modern model |
| 7 | Dekoratif Ray | `dekoratif-ray` | Gizli/şık ray sistemleri; ağır fon perdeleri sorunsuz taşır; tavan ve duvar montaj seçenekleri |
| 8 | Tül Perde | `tul-perde` | Gün ışığını süzer, mahremiyet sağlar; TAÇ tüllerinin dayanıklılığı ve muntazam pile duruşu; ütü gerektirmeyen zemin seçenekleri |
| 9 | Fon Perde | `fon-perde` | Kalın dokuma kumaş; ışık kesme (karartma seçenekleri), ısı ve ses yalıtımına katkı; tülle kombin |
| 10 | Screen Ofis Perdesi | `screen-ofis-perdesi` | Teknik screen kumaş; dışarısı görünür, içerisi görünmez; ekran yansımasını azaltır; ofis ve plaza standardı |

```ts
// src/data/services.ts — kartvizitteki 2 hizmet
export const services = [
  { slug: "yikama-tadilat", name: "Yıkama ve Tadilat",
    desc: "Mevcut perdeleriniz sökülür, yıkanır, gerekiyorsa boy/en tadilatı yapılır ve yeniden takılır." },
  { slug: "kornis-montaji", name: "Korniş Montajı",
    desc: "Her tip korniş ve ray sistemi için yerinde ölçü alınır, profesyonel montaj yapılır." },
] as const;
```

---

## 3. Tasarım Sistemi — "Atölye Kırmızısı"

### 3.1 Felsefe

Bu site bir SaaS dashboard'u DEĞİL; bir zanaat işletmesinin vitrini. Tipik AI-sitesi görünümünden
(bej zemin + terracotta, ya da simsiyah zemin + neon yeşil) **bilinçli olarak kaçın**. Kimlik zaten
hazır: TAÇ logosunun bordo-kırmızısı ve kumaş dalgası. Tasarım bu iki unsurdan türeyecek.

**İmza motif — "Perde Açılışı":** Sayfa geçişlerinde ve section reveal'lerinde içerik, iki yana
açılan perde gibi ortadan dışa doğru açılır (clip-path animasyonu). Bu motif sitenin hatırlanacak
tek büyük jesti; geri kalan her şey sakin ve disiplinli kalır.

### 3.2 Renk Paleti

```css
/* globals.css — CSS custom properties */
:root {
  --tac-red:        #C8102E;  /* TAÇ logo kırmızısı — sadece vurgu, CTA, logo */
  --tac-red-deep:   #8E0C21;  /* Hover, gradyan derinliği */
  --linen:          #FAF7F2;  /* Ana zemin — keten beyazı (saf beyaz değil) */
  --linen-warm:     #F1EBE1;  /* Alternatif section zemini */
  --charcoal:       #1F1B18;  /* Ana metin — sıcak antrasit */
  --charcoal-soft:  #55504B;  /* İkincil metin */
  --brass:          #A98E5B;  /* Korniş pirinci — ince detay çizgileri, hover altın tonu */
}
```

Kural: kırmızı toplam yüzeyin ~%8'ini geçmesin. Zemin keten, metin antrasit; kırmızı sadece
markanın konuştuğu yerlerde. Pirinç ton yalnızca hairline divider ve küçük ikonlarda.

### 3.3 Tipografi

| Rol | Font | Neden |
|---|---|---|
| Display (başlıklar) | **Fraunces** (Google Fonts, variable) | Kumaş gibi yumuşak hatlı, "soft" optik ekseniyle sıcak; klasik perde zanaatına gönderme yapar ama modern durur |
| Body | **Figtree** | Türkçe karakter desteği temiz, mobilde küçük boyutta okunaklı, geometrik ama soğuk değil |
| Utility (kod/etiket) | **Figtree** medium, letter-spacing +0.08em, uppercase | Ürün kodları ve eyebrow etiketleri için |

Ölçek (mobile-first): body 16px / h3 1.35rem / h2 clamp(1.75rem, 5vw, 2.75rem) / hero clamp(2.5rem, 9vw, 5rem).

### 3.4 Animasyon Prensipleri (üst düzey ama ölçülü)

Framer Motion kullan. Hedef: "premium ve akıcı", "her şey zıplıyor" değil.

1. **Hero — TAÇ logo sahnesi (sitenin açılış anı):**
   - `tac-seeklogo.png` merkeze gelir; logonun dalga formu SVG mask ile soldan sağa "kumaş dalgalanması"
     hissiyle çizilir (opacity + mask-position animasyonu, ~1.2s).
   - Ardından "KILIÇARSLAN PERDE & TASARIM" harfleri stagger ile (her harf 30ms arayla, yukarıdan
     yumuşak spring) belirir.
   - En sonda alt satır tagline fade-in + hafif letter-spacing daralması.
   - Bu sekans sadece ilk yüklemede oynar; iç navigasyonda tekrar etmez (sessionStorage flag).
2. **Perde Açılışı (imza):** Section'lar viewport'a girerken `clip-path: inset(0 50% 0 50%)` →
   `inset(0 0 0 0)`, 0.8s, custom ease `[0.22, 1, 0.36, 1]`. Sayfa geçişlerinde aynı motif ters yönde.
3. **Ürün kartları:** Scroll-triggered stagger (60ms), hover'da görsel 1.04 scale + kart hafif lift,
   mobilde hover yerine tap-highlight yok, karta basılıyken subtle scale-down (0.98).
4. **Marquee şerit:** "Stor • Plise • Zebra • Tül • Fon…" model isimleri hero altında yavaş akan
   tek satır şerit (CSS animation, GPU-friendly, `transform` only).
5. **Zorunlu:** `prefers-reduced-motion` medyasında tüm animasyonlar opacity-only fade'e düşer.
   Animasyonlar `transform` ve `opacity` dışına çıkmaz (layout thrash yok). Mobilde blur/parallax yok.

### 3.5 Placeholder Bileşeni (görseller gelene kadar)

`<ProductImagePlaceholder />`: keten dokulu zemin (CSS gradient noise), ortada pirinç renkli ince
çizgiyle çerçevelenmiş TAÇ logosu %20 opacity + ürün adı. Asla "image not found" gri kutusu değil —
placeholder bile markalı dursun. Görsel yolu dolunca otomatik `next/image`'a düşer.

---

## 4. Teknoloji Yığını

| Katman | Seçim | Not |
|---|---|---|
| Framework | **Next.js 14 (App Router) + TypeScript** | Statik export uyumlu yapı; tüm sayfalar SSG |
| Stil | **Tailwind CSS** | Design token'lar `tailwind.config.ts` içinde yukarıdaki paletle |
| Animasyon | **Framer Motion** | + saf CSS keyframes (marquee gibi sürekli animasyonlar için) |
| Görsel | **next/image** | WebP, `sizes` attribute mobil öncelikli, LCP görseli `priority` |
| Font | **next/font/google** | Fraunces + Figtree, `display: swap` |
| İkon | **lucide-react** | Telefon, mail, WhatsApp, konum |
| Deploy | **Vercel** | Proje adı: `kilicarslanperdetasarim` |
| Analitik/DB/Auth | YOK | Bilinçli olarak sıfır bağımlılık |

---

## 5. Klasör Yapısı

```
kilicarslanperdetasarim/
├── CLAUDE.md
├── README.md
├── public/
│   ├── images/
│   │   ├── brand/tac-logo.png          # tac-seeklogo.png buraya kopyalanır
│   │   ├── products/                   # Nano Banana görselleri (slug-1.webp, slug-2.webp)
│   │   └── installs/                   # Gerçek montaj fotoğrafları (yorumlar için, sonra)
│   └── favicon.ico                     # TAÇ logosundan türet
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Font, metadata, JSON-LD LocalBusiness
│   │   ├── page.tsx                    # Ana sayfa (tüm section'lar)
│   │   ├── modeller/
│   │   │   ├── page.tsx                # Tüm modeller grid
│   │   │   └── [slug]/page.tsx         # Model detay (generateStaticParams)
│   │   ├── not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/   (Header, Footer, MobileNav, StickyContactBar)
│   │   ├── hero/     (HeroLogo, HeroTagline, ModelMarquee)
│   │   ├── products/ (ProductCard, ProductGrid, ColorSwatches, ProductImagePlaceholder)
│   │   ├── sections/ (WhyTac, CurtainGuide, Services, Testimonials, ContactSection)
│   │   └── motion/   (CurtainReveal, FadeUp, StaggerChildren — reusable wrapper'lar)
│   ├── data/         (business.ts, products.ts, services.ts, testimonials.ts, guide.ts)
│   └── lib/          (motion-variants.ts, utils.ts)
├── tailwind.config.ts
└── next.config.mjs
```

---

## 6. Sayfa & Section Akışı

### 6.1 Ana Sayfa (yukarıdan aşağıya)

1. **Header:** Sol: küçük TAÇ logo + "Kılıçarslan Perde". Sağ (desktop): Modeller / Rehber /
   Yorumlar / İletişim. Mobil: hamburger yerine **alt sabit iletişim çubuğu** tercih edildiği için
   header sade kalır; menü tam ekran overlay (perde açılışı motifiyle açılır).
2. **Hero:** TAÇ logo animasyon sahnesi (3.4/1). Altında iki CTA: "Modelleri İncele" (kırmızı,
   primary) ve "WhatsApp'tan Yaz" (outline). Arkaplan: keten zemin üzerinde çok hafif, yavaş hareket
   eden kumaş kıvrımı SVG gradyanı.
3. **Model Marquee:** Akan model isimleri şeridi.
4. **Modeller Grid:** 10 ürün kartı. Mobil: yatay kaydırmalı snap-scroll 1.2 kart görünümü VEYA
   2'li grid — ikisini de dene, dokunuşta daha iyi hissettireni seç. Desktop: 3 sütun. Her kart:
   görsel, model adı, 1 cümle, "İncele →".
5. **Neden TAÇ? (marka güveni):** 3-4 kısa blok + rakamlar. İçerik §7.1'den.
6. **Perde Rehberi:** Accordion/tab yapısında bilgi içeriği (§7.2). Mobilde accordion şart.
7. **Hizmetler:** Yıkama & Tadilat + Korniş Montajı — 2 geniş kart.
8. **Yorumlar (Referanslar):** §8'deki placeholder yorumlar. Her yorum kartında **fotoğraf slotu**
   var (gerçek montaj fotoğrafları sonra eklenecek); fotoğraf yoksa kart fotosuz düzene düşer.
   Mobil: swipe'lı carousel (snap-scroll), desktop: 3'lü masonry.
9. **İletişim:** Büyük telefon numarası (tıklanabilir), mail, WhatsApp butonu, "Tuzla / İstanbul —
   çevre ilçelere yerinde ölçü ve montaj" metni. Harita YOK (dükkan adresi verilmedi), form YOK.
10. **Footer:** Logo, model linkleri, "TAÇ yetkili ürünleriyle hizmet verilmektedir" notu, telif.

**Mobil StickyContactBar:** Ekranın altında sabit, iki bölmeli bar: [📞 Hemen Ara] [WhatsApp].
Hero geçildikten sonra görünür (scroll > 80vh), safe-area-inset-bottom'a saygılı. Bu sitenin
dönüşüm noktası budur — en çok özen buraya.

### 6.2 Model Detay Sayfası (`/modeller/[slug]`)

- Başlık + longDesc (2-3 paragraf gerçek bilgi)
- Görsel galerisi (swipe, mobilde full-bleed)
- **Renk & Kod bölümü:** `colors` doluysa swatch grid (renk karesi + kod + ad); boşsa
  "Renk kartelası için arayın, kataloğu yerinde gösterelim" + arama CTA'sı
- Özellikler listesi, "Nerelerde kullanılır", ömür & bakım kutusu
- Alt: "Bu model için fiyat alın" → tel/WhatsApp CTA + diğer modeller şeridi

---

## 7. İçerik (SİTE BOŞ KALMAYACAK — bunları yaz, genişlet)

Aşağıdaki bilgiler doğrulanmış genel bilgilerdir; Claude Code bunları akıcı Türkçe pazarlama
metnine dönüştürecek. **Uydurma istatistik, sertifika numarası, test değeri EKLEME.**

### 7.1 "Neden TAÇ?" marka içeriği

- TAÇ, Zorlu Ailesi'nin ürünlerini 1974'te tek marka altında topladığı, kökleri Denizli Babadağ
  dokumacılığına dayanan Türkiye'nin en köklü ev tekstili markasıdır.
- 1976'dan beri perde üretiyor; 1984'ten beri tül perde ihracatı yapıyor. Bugün Türkiye ev tekstilinin
  lider markası; yurt içinde yüzlerce mağaza ve 1500+ satış noktası, 30'dan fazla ülkede varlık.
- Üretim Türkiye'de, Avrupa'nın en büyük entegre ev tekstili tesislerinde yapılır ("Türkiye'de
  üretilir, dünyaya satılır" açısı).
- TAÇ tül ve perdelik kumaşları dayanıklılığı, uzun ömrü ve pilelerinin muntazam duruşuyla bilinir;
  ütü gerektirmeyen zeminli tüller gibi yenilikçi ürünleri vardır.
- Kılıçarslan Perde & Tasarım açısı: "Marka TAÇ'ın, ölçü ve işçilik bizim. Yerinde ölçü alıyor,
  milimetrik dikiyor, temiz montajla teslim ediyoruz."

### 7.2 Perde Rehberi içeriği (accordion başlıkları)

1. **Hangi odaya hangi perde?** — Salon: tül+fon veya rustik; yatak odası: karartmalı fon; mutfak/
   banyo: silinebilir stor veya metal jaluzi; ofis: screen veya zebra; cam balkon: plise.
2. **Perdenin ömrü ne kadar?** — Kaliteli polyester tül ve fon perdeler doğru bakımla 10 yıl ve
   üzeri kullanılır; jaluzi ve stor mekanizmaları düzenli kullanımda yıllarca sorunsuz çalışır.
   Ömrü belirleyen üç şey: kumaş kalitesi, doğru ölçü (sürtünmeyen perde yıpranmaz) ve düzgün montaj.
3. **Bakım nasıl yapılır?** — Tüller düşük devirde makinede yıkanabilir; fon perdeler kumaşına göre
   kuru temizleme isteyebilir; jaluziler nemli bezle silinir; storların çoğu silinebilir kumaştır.
   (Yıkama & tadilat hizmetimize bağla.)
4. **Perde ısı ve ses yalıtımına etki eder mi?** — Kalın dokuma fon perdeler pencere kaynaklı ısı
   kaybını azaltmaya ve odadaki yankıyı düşürmeye yardımcı olur; kışın kapalı fon perde fark yaratır.
5. **Doğru ölçü neden önemli?** — Hazır perde ile ısmarlama arasındaki fark; pile katsayısı, tavan
   yüksekliği, korniş taşma payı gibi ustalık detayları. (Yerinde ölçü hizmetine bağla.)

### 7.3 SEO & Metadata

- Title: "Kılıçarslan Perde & Tasarım | TAÇ Perde Modelleri — Tuzla / İstanbul"
- Description: model adlarını ve "yerinde ölçü, montaj" ifadesini içersin.
- JSON-LD `LocalBusiness` (HomeAndConstructionBusiness): ad, telefon, bölge. Open Graph görseli:
  TAÇ logolu markalı kart (basit bir statik og.png üret).
- Tüm sayfa dili `lang="tr"`, i18n YOK (tek dil Türkçe — bu projede İngilizce gerekmiyor).

---

## 8. Yorumlar Bölümü (placeholder → gerçek fotoğraflar sonra)

`src/data/testimonials.ts` — 6 adet inandırıcı, abartısız Türkçe yorum yaz. Kurgu kuralları:
gerçek kişi adı kullanma; "Ayşe K. — Tuzla", "Mehmet D. — Pendik" formatı; her yorum farklı bir
modele değinsin (zebra, stor, tül+fon, plise, jaluzi, korniş montajı); ton samimi ve yerel olsun
("ölçüye geldiler, ertesi gün taktılar" gibi); 5 yıldız spamı yerine 4-5 yıldız karışımı.

```ts
export interface Testimonial {
  name: string; district: string; model: string;
  rating: 4 | 5; text: string;
  photo?: string;   // "/images/installs/xxx.webp" — GERÇEK montaj fotoğrafı, SONRA eklenecek
}
```

UI: fotoğraflı yorum kartı foto üstte, metin altta; fotoğrafsızsa sadece metin kartı. Kullanıcı
fotoğrafları verdiğinde tek tek `photo` alanına bağlanacak — bölüm başına yorum yazma/yeniden
düzenleme gerekmesin.

---

## 9. Agent Sistemi (9 Agent — dosya sahipliği + kabul kriterleri)

| # | Agent | Sahip olduğu dosyalar | Kabul kriteri |
|---|---|---|---|
| 1 | **Foundation** | config dosyaları, `globals.css`, `tailwind.config.ts`, `layout.tsx`, font kurulumu, CLAUDE.md | `npm run build` temiz; token'lar Tailwind'de; fontlar swap ile yükleniyor |
| 2 | **Data** | `src/data/*` | 10 ürün + 2 hizmet + 6 yorum + rehber içeriği eksiksiz; TS tipleri strict geçiyor; renk/kod/foto alanları boş-durum destekli |
| 3 | **Motion** | `src/components/motion/*`, `lib/motion-variants.ts` | CurtainReveal, FadeUp, Stagger wrapper'ları çalışıyor; reduced-motion fallback test edildi |
| 4 | **Hero** | `components/hero/*` | Logo sahnesi mobilde 60fps akıyor; sessionStorage ile tek sefer oynuyor; LCP < 2.5s |
| 5 | **Products** | `components/products/*`, `/modeller` sayfaları | Grid + detay statik üretiliyor; placeholder markalı; renk swatch boş-durumu doğru |
| 6 | **Sections** | `components/sections/*` (WhyTac, Guide, Services, Testimonials) | İçerik §7'den, accordion mobilde tek elle kullanılabilir; yorum kartı foto'lu/fotosuz iki düzeni de destekliyor |
| 7 | **Layout/Contact** | Header, Footer, MobileNav, StickyContactBar, ContactSection | tel/mailto/wa.me linkleri gerçek cihazda çalışıyor; sticky bar safe-area uyumlu; overlay menü perde motifiyle açılıyor |
| 8 | **QA/Performance** | Lighthouse turu, erişilebilirlik | Mobil Lighthouse: Performance ≥ 90, A11y ≥ 95, SEO ≥ 95; 320px'de taşma yok; focus görünür; kontrast AA |
| 9 | **Deploy** | `next.config.mjs`, Vercel ayarı, README | Vercel projesi `kilicarslanperdetasarim` adıyla; production URL çalışıyor; og.png doğrulandı |

---

## 10. Uygulama Fazları

**Faz 1 — Temel (Agent 1-2):** Proje init, token'lar, fontlar, tüm data dosyaları, CLAUDE.md.
**Faz 2 — Hareket dili (Agent 3):** Motion wrapper'ları izole geliştir, reduced-motion dahil.
**Faz 3 — Hero + Ana sayfa (Agent 4-6):** Yukarıdan aşağıya section section; her section bitince mobil görünümde kontrol.
**Faz 4 — Modeller (Agent 5):** Grid + detay + placeholder + boş renk durumu.
**Faz 5 — İletişim katmanı (Agent 7):** Sticky bar, linkler, overlay menü.
**Faz 6 — QA (Agent 8):** Lighthouse, 320/375/768/1440 kırılımları, reduced-motion, klavye.
**Faz 7 — Deploy (Agent 9):** Vercel'e yükle (`kilicarslanperdetasarim`), production smoke test.

Her faz sonunda dur ve kullanıcıya göster; commit'leri KULLANICI atacak (aşağıdaki kurallar).

**Sonradan gelecek veriler için tek-dosya güncelleme sözleşmesi:**
- Ürün görselleri geldiğinde → sadece `products.ts` içindeki `images` dizileri güncellenir.
- Renk kodları geldiğinde → sadece `colors` dizileri doldurulur; UI otomatik swatch'a geçer.
- Montaj fotoğrafları geldiğinde → sadece `testimonials.ts` içindeki `photo` alanları bağlanır.

---

## 11. CLAUDE.md İçeriği (projeye aynen yaz)

```md
# Kılıçarslan Perde & Tasarım — Çalışma Kuralları

## Git
- ASLA `git commit`, `git push` çalıştırma; branch oluşturma. Tüm commit/push işlemlerini
  Kutluhan manuel yapar.
- Commit mesajlarına, koda veya PR'lara hiçbir Claude/AI atfı (Co-Authored-By dahil) ekleme.

## Kod stili
- Yorumlar doğal, profesyonel İngilizce; "neden"i açıklar, "ne"yi değil.
- Sahte görsel/veri ekleme. Görsel yoksa ProductImagePlaceholder kullan.
- İçerik dili Türkçe (kod ve yorumlar İngilizce).

## Proje sınırları
- Backend, form endpoint, DB, auth YOK. İletişim yalnızca tel/mailto/wa.me linkleri.
- Mobil öncelikli: her bileşen önce 375px'de tasarlanır, sonra desktop'a genişletilir.
```

---

## 12. README Şablonu

```md
# Kılıçarslan Perde & Tasarım

TAÇ perde modelleri için mobil öncelikli vitrin sitesi. Tuzla / İstanbul.

**Canlı:** https://kilicarslanperdetasarim.vercel.app

## Stack
Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Vercel

## Geliştirme
npm install && npm run dev

## İçerik güncelleme
Tüm içerik `src/data/` altındadır — görsel, renk kodu ve yorum fotoğrafları
kod değişikliği gerektirmeden bu dosyalardan eklenir.
```

---

## 13. Son Kontrol Listesi (Deploy öncesi)

- [ ] 320px'de yatay scroll yok, sticky bar iOS safe-area'da doğru
- [ ] Hero animasyonu düşük donanımlı Android'de akıcı (Chrome DevTools 4x CPU throttle ile test)
- [ ] `prefers-reduced-motion` ile site tamamen kullanılabilir
- [ ] Tüm tel/mailto/wa.me linkleri gerçek numaraya gidiyor: +90 532 467 54 28
- [ ] Sahte görsel/stok fotoğraf yok; tüm placeholder'lar markalı
- [ ] Renk/kod bölümleri boş-durum metniyle şık görünüyor
- [ ] Lighthouse mobil: Perf ≥ 90, A11y ≥ 95, SEO ≥ 95
- [ ] Vercel proje adı `kilicarslanperdetasarim`, production alias doğru
