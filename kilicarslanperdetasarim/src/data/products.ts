export interface ColorOption {
  code: string; // product code — to be filled when the catalog arrives
  name: string;
  hex?: string;
}

export interface Product {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string[];
  features: string[];
  bestFor: string[];
  lifespan: string;
  care: string;
  colors: ColorOption[]; // empty until color codes are provided
  images: string[];
}

export const products: Product[] = [
  {
    slug: "stor-perde",
    name: "Stor Perde",
    shortDesc:
      "Rulo mekanizmalı, düz inen minimal perde; az yer kaplar, kolay temizlenir.",
    longDesc: [
      "Stor perde, kumaşın üstteki rulo mekanizmaya sarılarak düz bir yüzey halinde inip kalktığı en sade perde çözümüdür. Kıvrım ve pile olmadığı için pencereyi olduğu gibi gösterir; küçük odalarda ve modern iç mekânlarda ferah, derli toplu bir görünüm sağlar.",
      "Silinebilir kumaş seçenekleri sayesinde mutfak ve banyo gibi lekelenmeye açık alanların ilk tercihidir. Güneş kontrolü isteyen odalarda ışık geçirgenliği farklı kumaşlarla ayarlanabilir; ofislerde ekran parlamasını azaltan dokular mevcuttur.",
      "Yerinde ölçü alıyor, mekanizmayı pencerenize milimetrik uyumla monte ediyoruz. Cam balkon, PVC ve ahşap doğrama fark etmeksizin temiz bir montajla teslim edilir.",
    ],
    features: [
      "Rulo mekanizma — az yer kaplar",
      "Silinebilir kumaş seçenekleri",
      "Farklı ışık geçirgenliği alternatifleri",
      "Zincirli kolay kullanım",
    ],
    bestFor: ["Mutfak", "Banyo", "Ofis", "Cam balkon"],
    lifespan: "Doğru kullanımda mekanizma yıllarca sorunsuz çalışır.",
    care: "Kumaş yüzeyi nemli bezle silinir; çoğu stor kumaşı su bazlı temizliğe uygundur.",
    colors: [],
    images: [
      "/images/products/stor-perde-1.png",
      "/images/products/stor-perde-2.png",
      "/images/products/stor-perde-3.png",
      "/images/products/stor-perde-4.png",
      "/images/products/stor-perde-5.png",
    ],
  },
  {
    slug: "plise-perde",
    name: "Plise Perde",
    shortDesc:
      "Akordeon katlamalı yapı; cam balkon ve pencere içi montajın kurtarıcısı.",
    longDesc: [
      "Plise perde, akordeon gibi katlanan özel kumaşıyla cam üzerine ince bir profille monte edilir. Kapladığı alan birkaç santimetreyi geçmez; bu yüzden cam balkonlarda, çatı pencerelerinde ve dar pencere içlerinde en pratik çözümdür.",
      "Yukarıdan aşağı, aşağıdan yukarı iki yönlü kullanılabilen modelleriyle hem mahremiyet hem gün ışığı aynı anda ayarlanır: alt taraf kapalıyken üstten ışık almaya devam edersiniz.",
      "Cam balkonda kanatların katlanmasına engel olmayacak şekilde her kanada ayrı ölçü alınır; perde camla birlikte hareket eder.",
    ],
    features: [
      "Pencere içine sıfır montaj",
      "İki yönlü (yukarı-aşağı) kullanım",
      "Cam balkon kanatlarıyla birlikte katlanır",
      "Dar alanlarda maksimum yer tasarrufu",
    ],
    bestFor: ["Cam balkon", "Çatı penceresi", "Mutfak", "Küçük odalar"],
    lifespan: "Kaliteli plise kumaşı formunu yıllarca korur.",
    care: "Hafif nemli bezle silme yeterlidir; katlar formunu kendiliğinden korur.",
    colors: [],
    images: [
      "/images/products/plise-perde-1.png",
      "/images/products/plise-perde-2.png",
      "/images/products/plise-perde-3.png",
      "/images/products/plise-perde-4.png",
      "/images/products/plise-perde-5.png",
    ],
  },
  {
    slug: "ahsap-jaluzi",
    name: "Ahşap Jaluzi",
    shortDesc:
      "Doğal ahşap lameller; sıcak, prestijli görünüm ve hassas ışık kontrolü.",
    longDesc: [
      "Ahşap jaluzi, doğal ahşap lamellerin kanat açısıyla ışığı yönlendirdiği klasik ama hiç eskimeyen bir perde türüdür. Ahşabın dokusu mekâna kumaşın veremeyeceği bir sıcaklık ve ağırlık katar.",
      "Lameller istediğiniz açıda sabitlenir: gün ışığını tavana yansıtabilir, dışarıdan gelen bakışı tamamen kesebilir ya da manzarayı açabilirsiniz. Çalışma odaları, salonlar ve makam odalarında prestijli duruşuyla tercih edilir.",
      "Farklı lamel genişlikleri ve ahşap tonlarıyla mobilyanıza uyumlu kombinasyon yapılır; yerinde ölçüyle pencere içine veya üstüne monte edilir.",
    ],
    features: [
      "Doğal ahşap lamel",
      "Kanat açısıyla kademesiz ışık kontrolü",
      "Farklı lamel genişliği ve ton seçenekleri",
      "Uzun ömürlü mekanizma",
    ],
    bestFor: ["Çalışma odası", "Salon", "Makam odası"],
    lifespan: "Doğru bakımla 10+ yıl formunu ve rengini korur.",
    care: "Kuru veya hafif nemli bezle lamel yönünde silinir; ıslak temizlik önerilmez.",
    colors: [],
    images: [
      "/images/products/ahsap-jaluzi-1.png",
      "/images/products/ahsap-jaluzi-2.png",
      "/images/products/ahsap-jaluzi-3.png",
      "/images/products/ahsap-jaluzi-4.png",
      "/images/products/ahsap-jaluzi-5.png",
    ],
  },
  {
    slug: "metal-jaluzi",
    name: "Metal Jaluzi",
    shortDesc:
      "Alüminyum lamelli ofis klasiği; neme dayanıklı, silmesi kolay.",
    longDesc: [
      "Metal jaluzi, alüminyum lamelleriyle ofislerin ve ıslak hacimlerin değişmez klasiğidir. Neme ve buhara dayanıklıdır; mutfakta, banyoda ve balkonda formunu kaybetmeden yıllarca kullanılır.",
      "Lamel açısıyla ışık istediğiniz gibi ayarlanır; tamamen toplandığında pencerenin neredeyse tamamını açıkta bırakır. Geniş renk yelpazesiyle kurumsal kimliğe veya mutfak dolabınıza uyum sağlar.",
      "Hafif yapısı sayesinde büyük pencerelerde bile zahmetsiz kullanılır; mekanizması az yer kaplar, temizliği bir bez darbesiyle biter.",
    ],
    features: [
      "Neme ve buhara dayanıklı alüminyum lamel",
      "Geniş renk seçeneği",
      "Kolay silinir, leke tutmaz",
      "Büyük pencerede hafif kullanım",
    ],
    bestFor: ["Ofis", "Mutfak", "Banyo", "Balkon"],
    lifespan: "Mekanizma düzenli kullanımda yıllarca sorunsuz çalışır.",
    care: "Nemli bezle silinir; lamel arası toz için tüy toplayıcı yeterlidir.",
    colors: [],
    images: [
      "/images/products/metal-jaluzi-1.png",
      "/images/products/metal-jaluzi-2.png",
      "/images/products/metal_jaluzi_3.png",
      "/images/products/metal_jaluzi_4.png",
      "/images/products/metal_jaluzi_5.png",
    ],
  },
  {
    slug: "rustik",
    name: "Rustik",
    shortDesc:
      "Dekoratif boru korniş ve halkalı fon; salonların klasik-şık çözümü.",
    longDesc: [
      "Rustik, perdenin kendisi kadar taşıyıcısının da görünür olduğu bir stildir: dekoratif boru korniş, uçlarındaki başlıklar ve halkalarla fon perdeyi bir çerçeve gibi taşır. Klasik ve şık salonların vazgeçilmezidir.",
      "Kumaş, halka ve korniş başlığı kombinasyonu mekânın karakterini belirler; ahşap veya metal korniş seçenekleriyle modern-rustik arası her tonda uygulanabilir. Tül ile birlikte çift katlı kullanımda derinlik kazanır.",
      "Korniş montajından kumaş seçimine kadar tüm kombinasyonu birlikte kuruyoruz; ağır kumaşlar için doğru taşıyıcı seçimi bizde.",
    ],
    features: [
      "Dekoratif boru korniş + halka sistemi",
      "Ahşap ve metal korniş seçenekleri",
      "Kumaş-aksesuar kombinasyonu",
      "Tül ile çift katlı kullanım",
    ],
    bestFor: ["Salon", "Yemek odası", "Yatak odası"],
    lifespan: "Kaliteli kumaş ve korniş doğru bakımla 10+ yıl kullanılır.",
    care: "Kumaşına göre makinede yıkama veya kuru temizleme; korniş kuru bezle silinir.",
    colors: [],
    images: [
      "/images/products/rustik-1.jpeg",
      "/images/products/rustik-2.jpeg",
      "/images/products/rustik-3.jpeg",
      "/images/products/rustik-4.jpeg",
      "/images/products/rustik-5.jpeg",
      "/images/products/rustik-6.jpeg",
      "/images/products/rustik-7.jpeg",
      "/images/products/rustik-8.jpeg",
      "/images/products/rustik-9.jpeg",
    ],
  },
  {
    slug: "zebra-perde",
    name: "Zebra Perde",
    shortDesc:
      "Şeffaf ve opak bantlar tek perdede; en çok tercih edilen modern model.",
    longDesc: [
      "Zebra perde, şeffaf ve opak yatay bantların üst üste kaydığı iki katmanlı yapısıyla tek perdede hem tül hem fon etkisi verir. Bantlar hizalandığında ışık süzülür, kaydırıldığında oda karartılır.",
      "Bu kademeli ışık ayarı sayesinde gün boyu değişen ışığa saniyeler içinde uyum sağlarsınız; bu da onu son yılların en çok tercih edilen modeli yapıyor. Salonlardan ofislere her mekânda modern ve derli toplu durur.",
      "Kumaş dokusuna göre sade, simli veya keten görünümlü alternatifler mevcuttur. Yerinde ölçüyle pencereye tam oturan kaset ve mekanizma monte edilir.",
    ],
    features: [
      "Tek perdede tül + fon etkisi",
      "Kademeli ışık ayarı",
      "Modern kaset mekanizma",
      "Zengin kumaş dokusu seçenekleri",
    ],
    bestFor: ["Salon", "Yatak odası", "Ofis", "Genç odası"],
    lifespan: "Mekanizma ve kumaş düzenli kullanımda yıllarca formunu korur.",
    care: "Hafif nemli bezle silinir; toz için kuru mikrofiber yeterlidir.",
    colors: [],
    images: [
      "/images/products/zebra-perde-1.webp",
      "/images/products/zebra_perde_2.png",
      "/images/products/zebra_perde_3.png",
      "/images/products/zebra_perde_4.png",
      "/images/products/zebra_perde_5.png",
    ],
  },
  {
    slug: "dekoratif-ray",
    name: "Dekoratif Ray",
    shortDesc:
      "Gizli ve şık ray sistemleri; ağır fon perdelerini sorunsuz taşır.",
    longDesc: [
      "Dekoratif ray sistemleri, perdenin süzülerek açılıp kapanmasını sağlayan modern taşıyıcılardır. Tavana gömülü gizli uygulamalardan görünür şık profillere kadar farklı seçenekleri vardır.",
      "Ağır fon perdeleri ve çift katlı tül+fon kombinasyonları için doğru ray seçimi perdenin ömrünü doğrudan belirler: doğru ray üzerinde perde sürtünmeden kayar, kumaş yıpranmaz.",
      "Tavan ve duvar montaj seçenekleriyle her tavan tipine uygulanır; alçıpan, beton ve asma tavan için doğru dübel ve taşıyıcı hesabını yerinde yapıyoruz.",
    ],
    features: [
      "Gizli (tavan gömme) ve görünür profil seçenekleri",
      "Ağır kumaşlarda sorunsuz taşıma",
      "Tavan ve duvar montaj alternatifleri",
      "Sessiz ve akıcı kayış",
    ],
    bestFor: ["Salon", "Otel & ofis projeleri", "Yüksek tavanlı mekânlar"],
    lifespan: "Kaliteli ray sistemi perdeden uzun yaşar; yıllarca bakım istemez.",
    care: "Ray kanalı yılda bir kuru bezle silinir; yağlama gerektirmez.",
    colors: [],
    images: [
      "/images/products/dekoratif-ray-1.webp",
      "/images/products/dekoratif_ray_2.png",
      "/images/products/dekoratif_ray_3.png",
      "/images/products/dekoratif_ray_4.png",
      "/images/products/dekoratif_ray_5.png",
    ],
  },
  {
    slug: "tul-perde",
    name: "Tül Perde",
    shortDesc:
      "Gün ışığını süzer, mahremiyeti korur; tüllerinin muntazam pile duruşu.",
    longDesc: [
      "Tül perde, gün ışığını süzerek içeri alırken dışarıdan bakışı engelleyen, evin en yumuşak katmanıdır. Bir tülün kalitesi pilesinin duruşundan belli olur: tüllerimiz muntazam pile duruşu ve dayanıklılığıyla bilinir.",
      "Ütü gerektirmeyen zemin seçenekleri sayesinde yıkandıktan sonra asıldığı gibi formunu alır. Düz, işlemeli, keten görünümlü ve simli dokular arasından evinizin stiline uygun tül birlikte seçilir.",
      "Pile katsayısını pencerenize ve kumaşa göre hesaplıyor, milimetrik dikişle tavandan zemine kusursuz bir duruş teslim ediyoruz.",
    ],
    features: [
      "Gün ışığını süzer, mahremiyet sağlar",
      "Ütü gerektirmeyen zemin seçenekleri",
      "Muntazam pile duruşu",
      "Fon perde ile kombin kullanım",
    ],
    bestFor: ["Salon", "Yatak odası", "Mutfak", "Her oda"],
    lifespan: "Kaliteli polyester tül doğru bakımla 10 yıl ve üzeri kullanılır.",
    care: "Düşük devirde makinede yıkanır; hafif nemliyken asılırsa ütü gerektirmez.",
    colors: [],
    images: [
      "/images/products/tul-perde-1.webp",
      "/images/products/tul_perde_2.png",
      "/images/products/tul_perde_3.png",
      "/images/products/tul_perde_4.png",
      "/images/products/tul_perde_5.png",
    ],
  },
  {
    slug: "fon-perde",
    name: "Fon Perde",
    shortDesc:
      "Kalın dokuma kumaş; ışık kesme, ısı ve ses yalıtımına katkı.",
    longDesc: [
      "Fon perde, pencerenin iki yanında duran kalın dokuma kumaş katmanıdır. Odaya renk ve derinlik verir; kapandığında ışığı büyük ölçüde keser, karartma (blackout) seçenekleriyle yatak odalarında tam karanlık sağlar.",
      "Kalın dokusu pencere kaynaklı ısı kaybını azaltmaya ve odadaki yankıyı düşürmeye yardımcı olur; kışın kapalı fon perde hissedilir fark yaratır.",
      "Tül ile kombin edildiğinde gündüz-gece dengesi kurulur: gündüz tül ışığı süzer, akşam fon mahremiyeti ve konforu tamamlar. Kumaş, renk ve pile stili yerinde birlikte seçilir.",
    ],
    features: [
      "Karartma (blackout) seçenekleri",
      "Isı kaybını azaltmaya katkı",
      "Yankıyı düşürür, akustiği yumuşatır",
      "Tül ile kombin kullanım",
    ],
    bestFor: ["Yatak odası", "Salon", "Çocuk odası", "Ev sineması"],
    lifespan: "Kaliteli fon kumaşı doğru bakımla 10 yıl ve üzeri kullanılır.",
    care: "Kumaşına göre düşük devirde yıkama veya kuru temizleme önerilir.",
    colors: [],
    images: [
      "/images/products/fon-perde-1.webp",
      "/images/products/fon_perde_2.png",
      "/images/products/fon_perde_3.png",
      "/images/products/fon_perde_4.png",
      "/images/products/fon_perde_5.png",
    ],
  },
  {
    slug: "screen-ofis-perdesi",
    name: "Screen Ofis Perdesi",
    shortDesc:
      "Teknik screen kumaş: dışarısı görünür, içerisi görünmez; plaza standardı.",
    longDesc: [
      "Screen perde, mikro gözenekli teknik kumaşıyla çalışan bir güneş kontrol sistemidir: gün ışığı içeri girer, manzara görünür kalır, ama dışarıdan içerisi görünmez.",
      "Ekran yansımasını azalttığı için ofislerin ve plazaların standardıdır; monitör başında geçen uzun saatlerde göz konforu sağlar. Güneşin ısısını da filtreleyerek klima yükünü hafifletmeye yardımcı olur.",
      "Stor mekanizmasıyla kullanılır; geniş cam cephelerde bile düzgün iner-kalkar. Ev ofislerinde ve salon camlarında da giderek daha çok tercih ediliyor.",
    ],
    features: [
      "Dışarısı görünür, içerisi görünmez",
      "Ekran yansımasını azaltır",
      "Güneş ısısını filtreler",
      "Geniş cam cephelere uygun",
    ],
    bestFor: ["Ofis", "Plaza", "Ev ofisi", "Geniş cam cepheler"],
    lifespan: "Teknik kumaş formunu ve rengini yıllarca korur.",
    care: "Nemli bezle silinir; gözenekli yapısı toz tutmaz.",
    colors: [],
    images: [
      "/images/products/screen-ofis-perdesi-1.webp",
      "/images/products/screen_perde_2.png",
      "/images/products/screen_perde_3.png",
      "/images/products/screen_perde_4.png",
      "/images/products/screen_perde_5.png",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
