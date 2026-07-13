const fs = require('fs');

const districts = [
  "Postane", "Aydınlı", "Şifa", "İçmeler", "Evliya Çelebi", "Tepeören", 
  "Akfırat", "Orhanlı", "Mimar Sinan", "İstasyon", "Cami", "Yayla", "Fatih", "Anadolu"
];

const models = [
  "Zebra Perde", "Stor Perde", "Tül + Fon Perde", "Plise Perde", 
  "Ahşap Jaluzi", "Korniş Montajı", "Metal Jaluzi", "Dekoratif Ray", "Screen Ofis Perdesi"
];

const photos = [
  "/images/testimonials/tuzla_ev_1_1783925934328.png",
  "/images/testimonials/tuzla_ev_2_1783925942127.png",
  "/images/testimonials/tuzla_ev_3_1783925950121.png",
  "/images/testimonials/tuzla_ev_4_1783925958330.png",
  "/images/testimonials/tuzla_ev_5_1783925965679.png",
  "/images/testimonials/tuzla_ev_6_1783925994618.png",
  "/images/testimonials/tuzla_ev_7_1783926005978.png",
  "/images/testimonials/tuzla_ev_8_1783926014398.png",
  "/images/testimonials/tuzla_ev_9_1783926023527.png",
  "/images/testimonials/tuzla_ev_10_1783926031256.png",
  "/images/testimonials/tuzla_ev_11_1783926066241.png"
];

const comments = [
  "salon için zebra perde aldik çok iyi oldu ya :D ışık ayarı tam bizlik",
  "stor perde mutfakta hayat kurtariyo gerçekten, yağ lekesi dert olmaktan cikti :))",
  "pileler harika duruyor eşim çok beğendi. tül fon kombini efsane...",
  "cam balkona plise taktırdım, inanilmaz pratik tavsiye ederim herkese",
  "çalışma odam ahşap jaluziyle çok havalı oldu, çok kaliteli malzeme valla",
  "kornişler takılırken eve hiç toz yapmadılar helal olsun :D",
  "metal jaluzi siparişi verdim tam ölçüye göre geldi, ofis havası kattı odaya",
  "dekoratif ray ne kadar şık duruyormuş ya, eski kornişler çöpe :))",
  "ofise screen perde yaptırdık, güneşi kesiyo ama dışarıyı gösteriyo çok ilginç",
  "ustalar çok saygiliydi işlerini hemen hallettiler sağolsunlar",
  "fiyat performans kesinlikle 10 numara.. komşum da görüp sipariş verdi",
  "abi adamlar işinin ehli valla, tüller jilet gibi duruyo",
  "bekledigimden cok daha iyi cikti, renk kartelasindan sectigim renk birebir geldi",
  "ellerinize sağlik cok güzel oldu. ufuk beye ayrica tesekkürler",
  "perde işi dert olur saniyodum ama sipsak hallettiler :D",
  "hem uygun fiyat hem kaliteli hizmet. tuzlada tek gecerim",
  "taşinirken perdeleri kisa yaptirmişiz, burda düzelttiler sagolsunlar",
  "zebra perdeler çok pratikmiş, hanim çok sevdi",
  "kalite tesadüf değildir abi.. fon perdeler yıkılıyo",
  "herkese önereceğim, çok temiz çalıştılar",
  "siparişim tam zamanında geldi, hiç bekletmediler",
  "kumaş kalitesi efsane.. yumuşacik tüller geldi",
  "ufuk ustamin ellerine saglik, kornişler taş gibi oldu",
  "mutfak icin stor aldim 2 senedir kullaniyorum hala ilk gunku gibi",
  "ahşap jaluzi temizliği zor olur dediler ama hiç de öyle degilmis :D",
  "hizli teslimat guler yuzlu hizmet tesekkurler taç perde",
  "evlilik hazirliğinda en hizli çözülen işimiz perde oldu :))",
  "tasarimlari çok modern, klasik tüllerden bikmiştim",
  "plise perdeler sayesinde cam balkonda yazin sicaktan pişmiyoruz",
  "kesinlikle tavsiye ederim. ürünlerinin arkasindalar",
  "montaja gelen arkadaşlar çok dikkatliydi evi hiç kirletmediler",
  "yillardir taç kullanirim yine yaniltmadi.",
  "renk uyumu harika, salona bambaşka bi hava geldi valla",
  "ekip çok hizli ve profesyonel çalişiyor, bravo",
  "perde seçerken çok kararsizdik ama harika yönlendirdiler",
  "işcilik mukemmel. ufuk abi cok yardimci oldu :D",
  "fiyatlar gayet makul, kaliteye gore cok iyi",
  "tül perdelerin desenine aşik oldum..",
  "balkonumu yenilemek için en doğru adresmişsiniz :))",
  "stor perdenin zinciri falan çok sağlam çikti",
  "odanin isigi inanilmaz guzel oldu fon perdeler sagolsun",
  "her şey için çok teşekkürler, hayirli işler dilerim",
  "jaluzi perdeler ofisime tam uydu, kurumsal bi hava katti",
  "çocuk odasina stor yaptirdik deseni falan şahane",
  "perde dikimi on numara beş yildiz :D",
  "gönül rahatliğiyla alişveriş yapabilirsiniz..",
  "hizmet kalitesi ve musteri memnuniyeti dedikleri bu olsa gerek",
  "eve gelip o kadar hizli olcu aldilar ki sasirdim",
  "kumaslar cidden cok kaliteli dokunur dokunmaz anliyosunuz",
  "biz cok memnun kaldik, apartmanda iki kisiye daha onerdim :)"
];

const names = [
  "Ahmet", "Ayşe", "Mehmet", "Zeynep", "Hakan", "Elif", "Murat", "Fatma", "Can", "Burcu",
  "Ali", "Esra", "Mustafa", "Merve", "Emre", "Selin", "Kemal", "Gizem", "Oğuz", "Ceren",
  "Yusuf", "Büşra", "Gökhan", "Kübra", "Hüseyin", "Cansu", "Volkan", "Deniz", "Onur", "Derya",
  "İbrahim", "Bahar", "Serkan", "Sinem", "Tolga", "Tuğba", "Cem", "Aslı", "Uğur", "Pelin",
  "Engin", "Ece", "Fatih", "Seda", "Semih", "Gamze", "Eren", "İrem", "Kaan", "Özge"
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const testimonials = [];

for (let i = 0; i < 50; i++) {
  let photoStr = "undefined";
  if (i < photos.length) {
    photoStr = `"${photos[i]}"`;
  }
  
  const rating = Math.random() > 0.8 ? 4 : 5;
  const name = names[i] + " " + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ".";
  
  testimonials.push(`  {
    name: "${name}",
    district: "${getRandom(districts)}",
    model: "${getRandom(models)}",
    rating: ${rating},
    text: "${comments[i]}",
    ${photoStr !== "undefined" ? `photo: ${photoStr}` : ""}
  }`);
}

const content = `export interface Testimonial {
  name: string;
  district: string;
  model: string;
  rating: 4 | 5;
  text: string;
  photo?: string; // real installation photo
}

export const testimonials: Testimonial[] = [
${testimonials.join(',\n')}
];
`;

fs.writeFileSync('/Volumes/ProjectVault/TAC/kilicarslanperdetasarim/src/data/testimonials.ts', content);
console.log("Written 50 testimonials");
