import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Standart İstasyon",
      badge: "Tek Kantar İçin",
      price: "1.490",
      description: "Tek kantar istasyonuna sahip bağımsız işletmeler ve taş ocakları için ideal.",
      features: [
        "1 Adet Saha Masaüstü Kantar İstemcisi",
        "%100 Çevrimdışı (Offline) Tartım Motoru",
        "İndikatör Seri Port (RS232/USB) Bağlantısı",
        "Kantar Fişi & İrsaliye Basımı",
        "Bulut Yedekleme & Mizan Dökümleri",
        "Temel Raporlama & Excel Dışa Aktarım",
      ],
      cta: "Hemen Başlayın",
      popular: false,
    },
    {
      name: "Profesyonel Bulut",
      badge: "En Çok Tercih Edilen",
      price: "2.990",
      description: "Çoklu kantar istasyonuna ve dış müşteri portali ihtiyacı olan işletmeler için.",
      features: [
        "Sınırsız Saha Kantar İstemcisi Desteği",
        "Özel Şirket Subdomaini (firma.kolaykantar.com)",
        "Dış Müşteri & Kurum Portalı (7/24 Erişim)",
        "Malzeme İcmal & Alttoplam Raporları",
        "Klavye Hızlı Kısayol Tuşları (F1-F12)",
        "Rol Bazlı Yetki Yönetimi (Operatör, Müdür, Muhasebe)",
        "7/24 Öncelikli Teknik Destek",
      ],
      cta: "Ücretsiz 14 Gün Deneyin",
      popular: true,
    },
    {
      name: "Kurumsal Enterprise",
      badge: "Büyük Şirketler İçin",
      price: "Özel Teklif",
      description: "Grup şirketleri, çok şubeli fabrikalar ve özel ERP/Muhasebe entegrasyonu isteyenler için.",
      features: [
        "Özel Sunucu & Dedicated Veritabanı Mimarisi",
        "Logo, Mikro, SAP ve Netsis ERP Entegrasyonu",
        "Kamera & Plaka Tanıma (LPR) Otomasyonu",
        "Bariyer & Trafik Işıkları Entegrasyonu",
        "Özel Raporlama Şablonları & Özel Fiş Dizaynı",
        "Yerinde Kurulum & Operatör Eğitimi",
        "SLA Garantili 7/24 VIP Destek",
      ],
      cta: "Teklif İsteyin",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#060b13] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            Şeffaf ve Esnek Fiyatlandırma
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Gizli maliyet yok. İhtiyacınıza uygun paketi seçin, anında kullanmaya başlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                p.popular
                  ? "border-cyan-500 shadow-2xl shadow-cyan-500/10 bg-[#0a1626] transform md:-translate-y-2"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 text-[11px] font-black tracking-wider uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  {p.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{p.description}</p>
                </div>

                <div className="py-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-white">
                      {p.price}
                    </span>
                    {p.price !== "Özel Teklif" && <span className="text-xs text-slate-400 font-semibold">₺ / Ay</span>}
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Yıllık ödemede %20 indirim</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                  {p.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="#demo"
                  className={`block w-full py-3.5 rounded-xl font-black text-xs text-center tracking-wide transition-all ${
                    p.popular
                      ? "bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 shadow-lg"
                      : "glass-card text-white hover:bg-slate-800 border border-slate-700"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
