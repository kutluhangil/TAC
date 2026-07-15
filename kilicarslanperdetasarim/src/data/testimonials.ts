export interface Testimonial {
  name: string;
  district: string;
  model: string;
  rating: 4 | 5;
  text: string;
  photo?: string; // real installation photo
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmet L.",
    district: "Mimar Sinan",
    model: "Ahşap Jaluzi",
    rating: 5,
    text: "salon için zebra perde aldik çok iyi oldu ya :D ışık ayarı tam bizlik",
    photo: "/images/testimonials/tuzla_ev_1_1783925934328.png"
  },
  {
    name: "Ayşe M.",
    district: "İstasyon",
    model: "Tül + Fon Perde",
    rating: 5,
    text: "stor perde mutfakta hayat kurtariyo gerçekten, yağ lekesi dert olmaktan cikti :))",
    photo: "/images/testimonials/tuzla_ev_2_1783925942127.png"
  },
  {
    name: "Mehmet S.",
    district: "İçmeler",
    model: "Zebra Perde",
    rating: 4,
    text: "pileler harika duruyor eşim çok beğendi. tül fon kombini efsane...",
    photo: "/images/testimonials/tuzla_ev_3_1783925950121.png"
  },
  {
    name: "Zeynep Z.",
    district: "Orhanlı",
    model: "Plise Perde",
    rating: 5,
    text: "cam balkona plise taktırdım, inanilmaz pratik tavsiye ederim herkese",
    photo: "/images/testimonials/tuzla_ev_4_1783925958330.png"
  },
  {
    name: "Hakan K.",
    district: "Postane",
    model: "Ahşap Jaluzi",
    rating: 4,
    text: "çalışma odam ahşap jaluziyle çok havalı oldu, çok kaliteli malzeme valla",
    photo: "/images/testimonials/tuzla_ev_5_1783925965679.png"
  },
  {
    name: "Elif Y.",
    district: "Şifa",
    model: "Screen Ofis Perdesi",
    rating: 5,
    text: "kornişler takılırken eve hiç toz yapmadılar helal olsun :D",
    photo: "/images/testimonials/tuzla_ev_6_1783925994618.png"
  },
  {
    name: "Murat C.",
    district: "İstasyon",
    model: "Zebra Perde",
    rating: 5,
    text: "metal jaluzi siparişi verdim tam ölçüye göre geldi, ofis havası kattı odaya",
    photo: "/images/testimonials/tuzla_ev_7_1783926005978.png"
  },
  {
    name: "Fatma Z.",
    district: "Anadolu",
    model: "Tül + Fon Perde",
    rating: 5,
    text: "dekoratif ray ne kadar şık duruyormuş ya, eski kornişler çöpe :))",
    photo: "/images/testimonials/tuzla_ev_8_1783926014398.png"
  },
  {
    name: "Can P.",
    district: "Şifa",
    model: "Metal Jaluzi",
    rating: 5,
    text: "ofise screen perde yaptırdık, güneşi kesiyo ama dışarıyı gösteriyo çok ilginç",
    photo: "/images/testimonials/tuzla_ev_9_1783926023527.png"
  },
  {
    name: "Burcu D.",
    district: "Tepeören",
    model: "Ahşap Jaluzi",
    rating: 5,
    text: "ustalar çok saygiliydi işlerini hemen hallettiler sağolsunlar",
    photo: "/images/testimonials/tuzla_ev_10_1783926031256.png"
  },
  {
    name: "Ali S.",
    district: "Aydınlı",
    model: "Korniş Montajı",
    rating: 5,
    text: "fiyat performans kesinlikle 10 numara.. komşum da görüp sipariş verdi",
    photo: "/images/testimonials/tuzla_ev_11_1783926066241.png"
  },
  {
    name: "Esra R.",
    district: "Şifa",
    model: "Dekoratif Ray",
    rating: 5,
    text: "abi adamlar işinin ehli valla, tüller jilet gibi duruyo",
    
  },
  {
    name: "Mustafa O.",
    district: "İçmeler",
    model: "Ahşap Jaluzi",
    rating: 5,
    text: "bekledigimden cok daha iyi cikti, renk kartelasindan sectigim renk birebir geldi",
    
  },
  {
    name: "Merve J.",
    district: "Şifa",
    model: "Stor Perde",
    rating: 5,
    text: "ellerinize sağlik cok güzel oldu. ufuk beye ayrica tesekkürler",
    
  },
  {
    name: "Emre K.",
    district: "Anadolu",
    model: "Ahşap Jaluzi",
    rating: 5,
    text: "perde işi dert olur saniyodum ama sipsak hallettiler :D",
    
  },
  {
    name: "Selin D.",
    district: "Akfırat",
    model: "Metal Jaluzi",
    rating: 5,
    text: "hem uygun fiyat hem kaliteli hizmet. tuzlada tek gecerim",
    
  },
  {
    name: "Kemal X.",
    district: "Fatih",
    model: "Korniş Montajı",
    rating: 5,
    text: "taşinirken perdeleri kisa yaptirmişiz, burda düzelttiler sagolsunlar",
    
  },
  {
    name: "Gizem C.",
    district: "Anadolu",
    model: "Dekoratif Ray",
    rating: 5,
    text: "zebra perdeler çok pratikmiş, hanim çok sevdi",
    
  },
  {
    name: "Oğuz G.",
    district: "Aydınlı",
    model: "Screen Ofis Perdesi",
    rating: 5,
    text: "kalite tesadüf değildir abi.. fon perdeler yıkılıyo",
    
  },
  {
    name: "Ceren F.",
    district: "Fatih",
    model: "Stor Perde",
    rating: 5,
    text: "herkese önereceğim, çok temiz çalıştılar",
    
  },
  {
    name: "Yusuf R.",
    district: "Anadolu",
    model: "Zebra Perde",
    rating: 5,
    text: "siparişim tam zamanında geldi, hiç bekletmediler",
    
  },
  {
    name: "Büşra I.",
    district: "Aydınlı",
    model: "Metal Jaluzi",
    rating: 5,
    text: "kumaş kalitesi efsane.. yumuşacik tüller geldi",
    
  },
  {
    name: "Gökhan J.",
    district: "Anadolu",
    model: "Screen Ofis Perdesi",
    rating: 5,
    text: "ufuk ustamin ellerine saglik, kornişler taş gibi oldu",
    
  },
  {
    name: "Kübra B.",
    district: "Evliya Çelebi",
    model: "Korniş Montajı",
    rating: 4,
    text: "mutfak icin stor aldim 2 senedir kullaniyorum hala ilk gunku gibi",
    
  },
  {
    name: "Hüseyin L.",
    district: "Yayla",
    model: "Screen Ofis Perdesi",
    rating: 5,
    text: "ahşap jaluzi temizliği zor olur dediler ama hiç de öyle degilmis :D",
    
  },
  {
    name: "Cansu C.",
    district: "Tepeören",
    model: "Stor Perde",
    rating: 5,
    text: "hizli teslimat guler yuzlu hizmet tesekkurler",
    
  },
  {
    name: "Volkan P.",
    district: "Mimar Sinan",
    model: "Zebra Perde",
    rating: 4,
    text: "evlilik hazirliğinda en hizli çözülen işimiz perde oldu :))",
    
  },
  {
    name: "Deniz W.",
    district: "Anadolu",
    model: "Metal Jaluzi",
    rating: 4,
    text: "tasarimlari çok modern, klasik tüllerden bikmiştim",
    
  },
  {
    name: "Onur K.",
    district: "Şifa",
    model: "Plise Perde",
    rating: 5,
    text: "plise perdeler sayesinde cam balkonda yazin sicaktan pişmiyoruz",
    
  },
  {
    name: "Derya A.",
    district: "Akfırat",
    model: "Metal Jaluzi",
    rating: 5,
    text: "kesinlikle tavsiye ederim. ürünlerinin arkasindalar",
    
  },
  {
    name: "İbrahim G.",
    district: "Akfırat",
    model: "Dekoratif Ray",
    rating: 5,
    text: "montaja gelen arkadaşlar çok dikkatliydi evi hiç kirletmediler",
    
  },
  {
    name: "Bahar J.",
    district: "Yayla",
    model: "Zebra Perde",
    rating: 5,
    text: "yillardir kullanirim yine yaniltmadi.",
    
  },
  {
    name: "Serkan H.",
    district: "Cami",
    model: "Stor Perde",
    rating: 5,
    text: "renk uyumu harika, salona bambaşka bi hava geldi valla",
    
  },
  {
    name: "Sinem X.",
    district: "Aydınlı",
    model: "Stor Perde",
    rating: 5,
    text: "ekip çok hizli ve profesyonel çalişiyor, bravo",
    
  },
  {
    name: "Tolga A.",
    district: "Fatih",
    model: "Plise Perde",
    rating: 5,
    text: "perde seçerken çok kararsizdik ama harika yönlendirdiler",
    
  },
  {
    name: "Tuğba O.",
    district: "Postane",
    model: "Tül + Fon Perde",
    rating: 5,
    text: "işcilik mukemmel. ufuk abi cok yardimci oldu :D",
    
  },
  {
    name: "Cem T.",
    district: "Yayla",
    model: "Metal Jaluzi",
    rating: 5,
    text: "fiyatlar gayet makul, kaliteye gore cok iyi",
    
  },
  {
    name: "Aslı U.",
    district: "Tepeören",
    model: "Ahşap Jaluzi",
    rating: 5,
    text: "tül perdelerin desenine aşik oldum..",
    
  },
  {
    name: "Uğur I.",
    district: "Mimar Sinan",
    model: "Stor Perde",
    rating: 5,
    text: "balkonumu yenilemek için en doğru adresmişsiniz :))",
    
  },
  {
    name: "Pelin O.",
    district: "Orhanlı",
    model: "Zebra Perde",
    rating: 5,
    text: "stor perdenin zinciri falan çok sağlam çikti",
    
  },
  {
    name: "Engin R.",
    district: "İçmeler",
    model: "Stor Perde",
    rating: 5,
    text: "odanin isigi inanilmaz guzel oldu fon perdeler sagolsun",
    
  },
  {
    name: "Ece K.",
    district: "Cami",
    model: "Screen Ofis Perdesi",
    rating: 4,
    text: "her şey için çok teşekkürler, hayirli işler dilerim",
    
  },
  {
    name: "Fatih H.",
    district: "Şifa",
    model: "Zebra Perde",
    rating: 5,
    text: "jaluzi perdeler ofisime tam uydu, kurumsal bi hava katti",
    
  },
  {
    name: "Seda D.",
    district: "Akfırat",
    model: "Ahşap Jaluzi",
    rating: 5,
    text: "çocuk odasina stor yaptirdik deseni falan şahane",
    
  },
  {
    name: "Semih G.",
    district: "Fatih",
    model: "Plise Perde",
    rating: 4,
    text: "perde dikimi on numara beş yildiz :D",
    
  },
  {
    name: "Gamze C.",
    district: "Şifa",
    model: "Tül + Fon Perde",
    rating: 5,
    text: "gönül rahatliğiyla alişveriş yapabilirsiniz..",
    
  },
  {
    name: "Eren M.",
    district: "Orhanlı",
    model: "Korniş Montajı",
    rating: 5,
    text: "hizmet kalitesi ve musteri memnuniyeti dedikleri bu olsa gerek",
    
  },
  {
    name: "İrem F.",
    district: "Fatih",
    model: "Metal Jaluzi",
    rating: 5,
    text: "eve gelip o kadar hizli olcu aldilar ki sasirdim",
    
  },
  {
    name: "Kaan O.",
    district: "Anadolu",
    model: "Stor Perde",
    rating: 5,
    text: "kumaslar cidden cok kaliteli dokunur dokunmaz anliyosunuz",
    
  },
  {
    name: "Özge M.",
    district: "Anadolu",
    model: "Dekoratif Ray",
    rating: 5,
    text: "biz cok memnun kaldik, apartmanda iki kisiye daha onerdim :)",
    
  }
];
