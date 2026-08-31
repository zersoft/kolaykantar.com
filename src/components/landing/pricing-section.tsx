"use client";

import { useState } from "react";
import { Check, Sparkles, Plus, ShieldCheck, Scale, Cpu, HelpCircle, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [stationCount, setStationCount] = useState<number>(2);

  const discountMultiplier = billingCycle === "yearly" ? 0.8 : 1; // %20 indirim

  // Paket Tanımları
  const plans = [
    {
      id: "starter",
      name: "Standart İstasyon",
      badge: "Tek Kantar İçin",
      includedStations: 1,
      extraStationAllowed: false,
      baseMonthlyPrice: 1490,
      description: "Tek kantar istasyonuna sahip bağımsız işletmeler, hafriyat ve taş ocakları için ideal.",
      features: [
        "1 Adet Saha Kantar İstasyonu Lisansı",
        "%100 Çevrimdışı (Offline) Yerel SQLite Motoru",
        "Tüm İndikatörlerle Seri Port (RS232/USB) Bağlantısı",
        "Tek Tıkla Termal & Lazer Fiş Basımı",
        "Bulut Veri Yedekleme & Temel Mizan",
        "Günlük ve Aylık Tartım Listeleri (Excel/CSV)",
        "Standart Mesai Saatleri Teknik Desteği",
      ],
      highlight: false,
    },
    {
      id: "pro",
      name: "Profesyonel Bulut",
      badge: "En Çok Tercih Edilen",
      includedStations: 2,
      extraStationAllowed: true,
      extraStationPrice: 550, // İstasyon başı aylık
      baseMonthlyPrice: 2990,
      description: "Çoklu kantara, şantiyelere ve dış müşteri sevkiyat portalına ihtiyaç duyan büyüyen firmalar için.",
      features: [
        "2 Adet Saha Kantar İstasyonu Dahil",
        "İlave İstasyon Eklenebilir (+550 ₺/Ay/İstasyon)",
        "Özel Şirket Subdomaini (firma.kolaykantar.com)",
        "7/24 Canlı Müşteri & Kurum Portalı",
        "Malzeme İcmal & Alttoplam Raporları",
        "Klavye Hızlı Kısayol Tuşları (F1-F12)",
        "Rol Bazlı Yetki Yönetimi (Operatör, Müdür, Muhasebe)",
        "7/24 Öncelikli Saha ve Telefon Desteği",
      ],
      highlight: true,
    },
    {
      id: "enterprise",
      name: "Kurumsal Enterprise",
      badge: "Büyük & Çok Şubeli Şirketler",
      includedStations: 5,
      extraStationAllowed: true,
      extraStationPrice: 400, // İstasyon başı avantajlı
      baseMonthlyPrice: 5900,
      description: "Çok şubeli fabrikalar, hazır beton & asfalt tesisleri ve özel ERP/Muhasebe entegrasyonu isteyenler için.",
      features: [
        "5 Adet Saha Kantar İstasyonu Dahil",
        "Avantajlı İlave İstasyon (+400 ₺/Ay/İstasyon)",
        "Logo, Mikro, SAP ve Netsis ERP Entegrasyonu",
        "Kamera & Otomatik Plaka Tanıma (LPR) Desteği",
        "Bariyer & Trafik Lambası Otomasyonu",
        "Özel Raporlama Şablonları & Özel Fiş Dizaynı",
        "Yerinde Kurulum, Operatör Eğitimi & VIP SLA Desteği",
      ],
      highlight: false,
    },
  ];

  // Seçilen istasyon sayısına göre Profesyonel Paket fiyat hesaplama
  const proExtraStations = Math.max(0, stationCount - 2);
  const proMonthlyTotal = (2990 + proExtraStations * 550) * discountMultiplier;

  return (
    <section id="pricing" className="py-24 bg-[#060b13] border-t border-slate-800 relative overflow-hidden">
      {/* Arka Plan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık & Açıklama */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300">
            <Scale className="h-3.5 w-3.5 text-cyan-400" />
            <span>İstasyon Bazlı Şeffaf Fiyatlandırma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            Kantar Sayınıza Göre Ölçeklenen Adil Planlar
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Saha operasyonlarında her kantar istasyonu bağımsız donanım, çevrimdışı motor ve teknik destek demektir. İhtiyacınız kadar istasyon ekleyin, sadece kullandığınız kadar ödeyin.
          </p>

          {/* Aylık / Yıllık Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-bold ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
              Aylık Ödeme
            </span>
            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="w-14 h-8 bg-slate-800 rounded-full p-1 border border-slate-700 relative transition-colors focus:outline-none"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md transition-transform duration-200 ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-bold ${billingCycle === "yearly" ? "text-white" : "text-slate-400"}`}>
                Yıllık Ödeme
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-black uppercase">
                %20 İndirim
              </span>
            </div>
          </div>
        </div>

        {/* İnteraktif İstasyon Hesaplayıcı Barı */}
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-5 border border-cyan-500/30 mb-14 text-center space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <span className="text-xs font-bold text-slate-300 block">İşletmenizde Kaç Adet Kantar İstasyonu Var?</span>
              <span className="text-[11px] text-slate-400">İstasyon sayınızı belirleyin, en uygun paketi ve maliyeti anında görün.</span>
            </div>

            <div className="flex items-center gap-2 bg-[#091322] px-3 py-1.5 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setStationCount(Math.max(1, stationCount - 1))}
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center text-sm"
              >
                -
              </button>
              <span className="font-mono font-black text-sm text-cyan-400 px-2 min-w-[70px] text-center">
                {stationCount} İstasyon
              </span>
              <button
                type="button"
                onClick={() => setStationCount(stationCount + 1)}
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center text-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Fiyatlandırma Kartları */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => {
            const calculatedPrice = p.id === "pro"
              ? proMonthlyTotal
              : p.baseMonthlyPrice * discountMultiplier;

            return (
              <div
                key={p.id}
                className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  p.highlight
                    ? "border-cyan-500 shadow-2xl shadow-cyan-500/15 bg-[#0a1626] transform lg:-translate-y-2 ring-1 ring-cyan-500/50"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 text-[11px] font-black tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    {p.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white">{p.name}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        {p.includedStations} Kantar Dahil
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{p.description}</p>
                  </div>

                  {/* Fiyat Alanı */}
                  <div className="py-2 border-y border-slate-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-white text-gradient-cyan">
                        {Math.round(calculatedPrice).toLocaleString("tr-TR")}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">₺ / Ay</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                      <span>{billingCycle === "yearly" ? "Yıllık faturalandırılır" : "Aylık ödeme"}</span>
                      {p.extraStationAllowed && (
                        <span className="text-cyan-400 font-bold">
                          +İlave İstasyon: {p.extraStationPrice} ₺/ay
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Özellik Listesi */}
                  <ul className="space-y-3 text-xs text-slate-300">
                    {p.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Aksiyon Butonu */}
                <div className="pt-8">
                  <a
                    href="#demo"
                    className={`block w-full py-3.5 rounded-xl font-black text-xs text-center tracking-wide transition-all ${
                      p.highlight
                        ? "bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-sky-500/25"
                        : "glass-card text-white hover:bg-slate-800 border border-slate-700"
                    }`}
                  >
                    {p.id === "enterprise" ? "Özel Teklif İsteyin" : "14 Gün Ücretsiz Deneyin"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Saha Destek Güvencesi Bilgi Kutusu */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-slate-400">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
            <Cpu className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-200 text-sm">Neden İstasyon Başı Lisanslama?</h4>
            <p className="leading-relaxed">
              Her fiziksel kantar istasyonu; sahada bağımsız çalışan çevrimdışı masaüstü istemcisi, seri port/indikatör donanım sürücüsü, fiş yazıcı protokolleri ve özel teknik destek hizmeti gerektirir. İstasyon bazlı lisanslama modeli sayesinde işletmeniz gereksiz maliyet ödemez, yalnızca aktif kullandığı saha noktaları için kesintisiz destek alır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
