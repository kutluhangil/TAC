export interface Service {
  slug: string;
  name: string;
  desc: string;
  details: string[];
  image?: string;
}

export const services: Service[] = [
  {
    slug: "yikama-tadilat",
    name: "Yıkama ve Tadilat",
    desc: "Mevcut perdeleriniz sökülür, yıkanır, gerekiyorsa boy/en tadilatı yapılır ve yeniden takılır.",
    details: [
      "Perdeleriniz yerinden özenle sökülür",
      "Kumaşına uygun yöntemle yıkanır",
      "Boy ve en tadilatı yapılır",
      "Ütülenmiş ve pileleri düzeltilmiş halde yeniden takılır",
    ],
    image: "/images/services/yikama-tadilat.png",
  },
  {
    slug: "kornis-montaji",
    name: "Korniş Montajı",
    desc: "Her tip korniş ve ray sistemi için yerinde ölçü alınır, profesyonel montaj yapılır.",
    details: [
      "Yerinde milimetrik ölçü",
      "Alçıpan, beton ve asma tavana uygun montaj",
      "Boru korniş, ray ve gizli ray sistemleri",
      "Eski korniş sökümü ve değişimi",
    ],
    image: "/images/services/kornis-montaj.png",
  },
];
