import {
  Scale,
  Building2,
  Truck,
  ShieldCheck,
  FileSpreadsheet,
  Keyboard,
  Barcode,
  UploadCloud,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Scale,
      title: "Kantar Kokpit Otomasyonu",
      description: "Seri port (RS232/USB/TCP-IP) indikatör bağlantısı, tek tıkla kilo alma, kayıtlı dara ve kantar darası yönetimi.",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      icon: Barcode,
      title: "Tıbbi Atık Kokpiti & HBYS Entegrasyonu",
      description: "50x55 mm termal barkod etiket baskısı, hızlı dara butonları (Siyah Poşet 0.040 kg), poliklinik ve resmi tutanak dökümü.",
      color: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    },
    {
      icon: UploadCloud,
      title: "MDB & Eski Kantar Veri Aktarımı",
      description: "Eski kantar yazılımlarından (.mdb, Access, Excel, DBF) 500 MB'a kadar verileri 4MB chunked asenkron motorla tek tıkla buluta aktarma.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      icon: Server,
      title: "İzole Neon DB Veritabanı (Multi-DB)",
      description: "Her müşteriye özel bağımsız PostgreSQL / Neon DB tahsisi, dinamik tenant routing ve %100 fiziksel/mantıksal veri güvenliği.",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    },
    {
      icon: Building2,
      title: "Kaynak Firma & Çoklu Şirket Yönetimi",
      description: "Aynı kantarda birden fazla grup şirketi adına ayrı fiş, irsaliye, fatura başlığı ve kantar/üretim takip ayrımı.",
      color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    },
    {
      icon: Truck,
      title: "Dış Müşteri & Nakliyeci Portalı",
      description: "Müşterilerinizin kendi sevkiyatlarını, malzeme tonaj dökümlerini ve tartım fişlerini anlık görebileceği 7/24 portal.",
      color: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    },
    {
      icon: Keyboard,
      title: "Hızlı Klavye Kısayolları (F1-F12)",
      description: "Saha operatörlerinin fare kullanmadan saniyeler içinde seri tartım yapmasını sağlayan ergonomik kısayol motoru.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      icon: FileSpreadsheet,
      title: "Malzeme İcmal & Alttoplam Raporu",
      description: "Malzeme bazında gruplanmış sefer adedi, brüt/dara/net tonajlar ve tek tıkla Excel (CSV) dışa aktarımı.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Rol Bazlı 9 Seviyeli Güvenlik",
      description: "Operatör, Şantiye Şefi, Saha Koordinatörü, Muhasebe ve Yönetici seviyelerinde hassas yetkilendirme ile tam gizlilik.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#060b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            A'dan Z'ye Eksiksiz Kantar & ERP Özellikleri
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Saha operasyonlarının zorlu koşullarına dayanacak şekilde tasarlanmış, hız ve güvenliği merkezine alan çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-7 rounded-2xl border border-slate-800 space-y-3.5 relative"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${f.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
