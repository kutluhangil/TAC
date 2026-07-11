import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Yapılan İşler | Kılıçarslan Perde",
  description: "Kılıçarslan Perde Tasarım olarak tamamladığımız perde ve ev tekstili projelerinden örnekler.",
};

export default function YapilanIslerPage() {
  return (
    <main className="min-h-screen bg-linen selection:bg-tac-red/20">
      <Header />
      
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 font-display text-4xl font-semibold tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Yapılan İşler
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-charcoal-soft">
              Bugüne kadar tamamladığımız tasarım ve uygulama projelerimizden bazıları.
              Daha fazlası için mağazamızı ziyaret edebilirsiniz.
            </p>
          </div>
          
          <GalleryGrid />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
