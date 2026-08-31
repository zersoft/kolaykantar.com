import { Mountain, Flame, Recycle, Wheat, Container, HardHat } from "lucide-react";

export function IndustrySolutions() {
  const industries = [
    {
      icon: Mountain,
      title: "Madencilik & Taş Ocakları",
      description: "Ağır tonajlı kamyon ve tır trafiğinde yüksek hızlı tartım, kırma eleme tesisleri malzeme kodları ve şantiye takibi.",
    },
    {
      icon: Flame,
      title: "Asfalt & Hazır Beton Tesisleri",
      description: "Agrega, bitüm ve çimento sevkiyatlarında hassas tartım, müşteri sözleşmeli fiyat listeleri ve sevk irsaliyeleri.",
    },
    {
      icon: Recycle,
      title: "Geri Dönüşüm & Hurda",
      description: "Farklı hurda sınıfları için anlık tartım, nakit/cari tahsilat ve perakende araç tartımlarında hızlı fiş basımı.",
    },
    {
      icon: Wheat,
      title: "Tarım, Hububat & Lisanslı Depo",
      description: "Hasat döneminde traktör ve kamyon kuyruklarını önleyen seri tartım, nem/rutubet düşümü ve ürün grubu analizleri.",
    },
    {
      icon: Container,
      title: "Lojistik, Liman & Antrepolar",
      description: "Konteyner ve tır giriş-çıkış tartımları, VGM / Dara kontrolleri ve çok şubeli kantar istasyonları merkezi yönetimi.",
    },
    {
      icon: HardHat,
      title: "İnşaat & Altyapı Projeleri",
      description: "Hafriyat döküm sahaları, dolgu malzemesi kontrolleri ve alt yüklenici nakliye sefer takip dökümleri.",
    },
  ];

  return (
    <section id="sectors" className="py-24 bg-[#060b13] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            Her Sektörün Tartım İhtiyacına Özel Çözüm
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Türkiye'nin dört bir yanındaki taş ocaklarından limanlara, beton santrallerinden lisanslı depolara kadar güvenle kullanılıyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="glass-card glass-card-hover p-7 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">{ind.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{ind.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
