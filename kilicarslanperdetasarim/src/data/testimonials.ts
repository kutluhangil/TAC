export interface Testimonial {
  name: string;
  district: string;
  model: string;
  rating: 4 | 5;
  text: string;
  photo?: string; // real installation photo — to be linked when provided
}

export const testimonials: Testimonial[] = [
  {
    name: "Ayşe K.",
    district: "Tuzla",
    model: "Zebra Perde",
    rating: 5,
    text: "Salon ve yatak odası için zebra perde taktırdık. Ölçüye geldiler, ertesi gün taktılar. Bantların ışık ayarı tam bize göreymiş, iyi ki tül-fon uğraşına girmemişiz.",
  },
  {
    name: "Mehmet D.",
    district: "Pendik",
    model: "Stor Perde",
    rating: 5,
    text: "Mutfağa silinebilir stor önerdiler, ne kadar doğru bir tercihmiş. Yağ lekesi bezle çıkıyor. Montaj temizdi, arkalarında tek vida izi bile bırakmadılar.",
  },
  {
    name: "Zeynep A.",
    district: "Kartal",
    model: "Tül + Fon Perde",
    rating: 5,
    text: "TAÇ tülün duruşu gerçekten farklı, pileler asıldığı günkü gibi. Fon rengini Ufuk Bey'in önerisiyle seçtik, halıyla birebir oldu. Herkese tavsiye ederim.",
  },
  {
    name: "Hakan S.",
    district: "Gebze",
    model: "Plise Perde",
    rating: 4,
    text: "Cam balkona plise taktırdık. Kanatlarla birlikte katlanıyor, hiç engel olmuyor. Renk kartelasından seçim biraz uzun sürdü ama sonuç güzel oldu.",
  },
  {
    name: "Elif T.",
    district: "Tuzla",
    model: "Ahşap Jaluzi",
    rating: 5,
    text: "Çalışma odama ahşap jaluzi aldım, odanın havası tamamen değişti. Işığı tavana yansıtınca gün boyu lamba açmıyorum. Ölçü ve montaj aynı hafta bitti.",
  },
  {
    name: "Murat Y.",
    district: "Pendik",
    model: "Korniş Montajı",
    rating: 4,
    text: "Taşındığımız evde üç odanın kornişini değiştirdiler. Asma tavana rağmen sağlam monte ettiler, perdeler süzülerek açılıyor. Randevuya dakikası dakikasına geldiler.",
  },
];
