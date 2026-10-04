import { ShieldCheck, FileCheck2, Cpu, Headphones, Award, Server } from "lucide-react";

export function CorporateTrustBanner() {
  const credentials = [
    {
      icon: Award,
      title: "Yasal Mevzuat Uyumu",
      desc: "Sanayi ve Teknoloji Bakanlığı Tartı Aletleri Yönetmeliği, OIML R76 ve resmi çift imzalı tartım fişi formatı.",
    },
    {
      icon: FileCheck2,
      title: "GİB e-İrsaliye Entegrasyonu",
      desc: "Resmi e-İrsaliye ve e-Fatura süreçleriyle tam entegre; kantar fişinden tek tıkla resmi irsaliye aktarımı.",
    },
    {
      icon: Cpu,
      title: "80+ İndikatörle %100 Uyum",
      desc: "Baykon, Tunahan, Esit, Dini Argeo, Yaohua, Sartorius ve RS232/USB/TCP-IP protokolü kullanan tüm cihazlar.",
    },
    {
      icon: Server,
      title: "ISO 27001 & Müstakil DB",
      desc: "Her işletmeye özel bağımsız veritabanı (Database-per-Tenant) ile %100 fiziksel ve mantıksal veri izolasyonu.",
    },
    {
      icon: Headphones,
      title: "7/24 Kesintisiz Teknik Destek",
      desc: "Zersoft mühendislerinden doğrudan telefon, uzaktan bağlantı ve sahada anahtar teslim kurulum garantisi.",
    },
  ];

  return (
    <section className="py-10 bg-slate-100/80 dark:bg-[#070d17] border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
