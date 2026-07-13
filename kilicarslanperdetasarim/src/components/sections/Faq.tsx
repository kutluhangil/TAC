"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Ölçü ve montaj için ek ücret alıyor musunuz?",
    answer:
      "Hayır, Tuzla ve çevre ilçelerindeki hizmet bölgemizde yerinde ölçü alımı, kumaş seçimi ve profesyonel montaj hizmetimiz tamamen ücretsizdir. Fiyatlarımıza her şey dâhildir.",
  },
  {
    question: "Sipariş verildikten kaç gün sonra perdeler takılıyor?",
    answer:
      "Model ve kumaş stok durumuna göre değişmekle birlikte, siparişiniz onaylandıktan sonra ortalama 3 ila 5 iş günü içerisinde perdelerinizin montajı kusursuz bir şekilde tamamlanır.",
  },
  {
    question: "Perdelerin garanti süresi nedir?",
    answer:
      "Tüm TAÇ marka perde modellerimiz, mekanizma ve üretim hatalarına karşı 2 yıl garantilidir. Montaj sonrasında da herhangi bir sorunda bize ulaşabilirsiniz.",
  },
  {
    question: "Ödeme seçenekleriniz nelerdir?",
    answer:
      "Müşterilerimize esneklik sağlamak amacıyla kredi kartına taksit, havale/EFT ve nakit ödeme seçenekleri sunmaktayız.",
  },
  {
    question: "Perdelerin temizliği nasıl yapılır?",
    answer:
      "Zebra ve stor perdeler nemli bir bezle veya süngerle silinebilir. Kumaş stor perdelerin çoğu mekanizmadan çıkarılarak yıkanabilir. Tül ve fon perdelerimiz ise çamaşır makinesinde hassas programda kolaylıkla yıkanabilmektedir. Her model için montaj sırasında detaylı temizlik bilgisi veriyoruz.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
      <div className="text-center">
        <p className="eyebrow">Merak Edilenler</p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
          Sıkça Sorulan Sorular
        </h2>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-brass/20 bg-white/50 transition-colors hover:bg-white"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-5 text-left sm:p-6"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal sm:text-xl">
                  {faq.question}
                </h3>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linen-warm text-charcoal-soft transition-transform">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-6 pt-0 text-charcoal-soft sm:px-6">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
