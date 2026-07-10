export interface GuideItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

export const guide: GuideItem[] = [
  {
    question: "Hangi odaya hangi perde?",
    answer:
      "Salonda tül + fon kombinasyonu veya rustik en şık sonucu verir. Yatak odasında karartmalı fon perde uyku konforu sağlar. Mutfak ve banyoda silinebilir stor veya metal jaluzi pratik ve hijyeniktir. Ofiste screen veya zebra perde; cam balkonda ise plise ideal çözümdür.",
    linkText: "Modelleri inceleyin",
    linkHref: "/modeller",
  },
  {
    question: "Perdenin ömrü ne kadar?",
    answer:
      "Kaliteli polyester tül ve fon perdeler doğru bakımla 10 yıl ve üzeri kullanılır; jaluzi ve stor mekanizmaları düzenli kullanımda yıllarca sorunsuz çalışır. Ömrü belirleyen üç şey: kumaş kalitesi, doğru ölçü (sürtünmeyen perde yıpranmaz) ve düzgün montaj.",
  },
  {
    question: "Bakım nasıl yapılır?",
    answer:
      "Tüller düşük devirde makinede yıkanabilir; fon perdeler kumaşına göre kuru temizleme isteyebilir. Jaluziler nemli bezle silinir; storların çoğu silinebilir kumaştır. Sökme-yıkama-takma zahmetine girmek istemezseniz yıkama ve tadilat hizmetimizden yararlanabilirsiniz.",
    linkText: "Yıkama & tadilat hizmeti",
    linkHref: "/#hizmetler",
  },
  {
    question: "Perde ısı ve ses yalıtımına etki eder mi?",
    answer:
      "Evet. Kalın dokuma fon perdeler pencere kaynaklı ısı kaybını azaltmaya ve odadaki yankıyı düşürmeye yardımcı olur. Özellikle kışın kapalı fon perde hissedilir fark yaratır; ev sineması ve çocuk odasında akustiği de yumuşatır.",
  },
  {
    question: "Doğru ölçü neden önemli?",
    answer:
      "Hazır perde ile ısmarlama arasındaki fark ustalık detaylarında gizlidir: pile katsayısı, tavan yüksekliği, korniş taşma payı ve zemin boşluğu doğru hesaplanmazsa perde ya sürtünür ya da eksik durur. Yerinde ölçü alıyor, milimetrik dikiyor, temiz montajla teslim ediyoruz.",
    linkText: "Yerinde ölçü için arayın",
    linkHref: "/#iletisim",
  },
];
