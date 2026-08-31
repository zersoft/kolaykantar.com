"use client";

import { Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight, Activity, Keyboard, Sparkles } from "lucide-react";

export function RoiCalculator() {
  return (
    <section id="efficiency" className="py-24 bg-[#080e18] border-t border-slate-800 relative overflow-hidden">
      {/* Arka Plan Işık Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300">
            <Zap className="h-3.5 w-3.5 text-cyan-400" />
            <span>Saha Hızı & Operasyonel Verimlilik</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            Saniyeler İçinde Tartım, Sıfır Kuyruk.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Yoğun sevkiyat saatlerinde kantar önünde oluşan araç kuyruklarına son verin. KolayKantar, tüm tartım ve fiş sürecini minimum adıma indirerek sahanıza benzersiz bir hız kazandırır.
          </p>
        </div>

        {/* Karşılaştırma & Hız Kartları */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Sol: Geleneksel Manuel Tartım */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 md:p-8 border border-slate-800 space-y-5 opacity-80">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Eski / Manuel Sistemler</span>
              <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold text-[10px]">Yavaş & Hantal</span>
            </div>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-300 block mb-0.5">1. Manuel Bilgi Girişi</span>
                <span>Plaka, cari ve malzeme her seferinde elle tek tek aranır veya yazılır.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-300 block mb-0.5">2. İndikatör Beklemesi</span>
                <span>Operatör kantar göstergesine bakar, rakamı klavyeden manuel yazar.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-slate-300 block mb-0.5">3. Kuyruk ve Gecikme</span>
                <span>Araç başı 1-2 dakika süren işlemler sahada uzun araç kuyrukları oluşturur.</span>
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-red-400/80 font-bold">
              ⏱️ Ortalama Tartım Süresi: ~90-120 Saniye
            </div>
          </div>

          {/* Orta: Ok Ayracı */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Zap className="h-6 w-6" />
            </div>
          </div>

          {/* Sağ: KolayKantar Hızlı Akış */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 md:p-8 border-2 border-cyan-500/50 bg-[#0a1626] space-y-5 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">KolayKantar ile Akıllı Akış</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/40">
                Ultra Hızlı
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-[#07101b] border border-cyan-500/30">
                <span className="font-bold text-white block mb-0.5 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  Otomatik Plaka & Dara Çözümleme
                </span>
                <span>Plaka yazıldığı anda kayıtlı cari, şoför ve geçerli dara otomatik dolar.</span>
              </div>

              <div className="p-3 rounded-xl bg-[#07101b] border border-cyan-500/30">
                <span className="font-bold text-white block mb-0.5 flex items-center gap-1.5">
                  <Keyboard className="h-3.5 w-3.5 text-cyan-400" />
                  Kısayol Tuşlarıyla Seri İşlem (F1-F12)
                </span>
                <span>İndikatörden anlık stabil ağırlık okunur; F12 ile tartım kaydedilir ve fiş anında basılır.</span>
              </div>

              <div className="p-3 rounded-xl bg-[#07101b] border border-cyan-500/30">
                <span className="font-bold text-white block mb-0.5 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  Anlık Sevkiyat & Portale Bildirim
                </span>
                <span>İşlem bittiği saniye merkez muhasebe ve müşteri portalı güncellenir.</span>
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-emerald-400 font-black">
              ⚡ Ortalama Tartım Süresi: ~10-15 Saniye
            </div>
          </div>
        </div>

        {/* Alt Bilgi Bandı */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="glass-card p-5 rounded-2xl border border-slate-800">
            <span className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 block mb-1">
              %80
            </span>
            <span className="text-xs text-slate-300 font-bold block">Daha Hızlı Tartım</span>
            <span className="text-[11px] text-slate-500">Saha kuyrukları tamamen ortadan kalkar</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800">
            <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 block mb-1">
              %0
            </span>
            <span className="text-xs text-slate-300 font-bold block">Operatör Hata Payı</span>
            <span className="text-[11px] text-slate-500">Otomatik dara ve akıllı cari eşleme</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800">
            <span className="text-2xl sm:text-3xl font-black font-mono text-purple-400 block mb-1">
              7/24
            </span>
            <span className="text-xs text-slate-300 font-bold block">Kesintisiz Saha Akışı</span>
            <span className="text-[11px] text-slate-500">İnternet kopsa dahi tartıma devam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
