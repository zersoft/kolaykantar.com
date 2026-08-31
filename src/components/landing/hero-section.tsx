import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, WifiOff, CheckCircle2, Play } from "lucide-react";
import { InteractiveKantarDemo } from "./interactive-kantar-demo";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#060b13]">
      {/* Arka Plan Glow Efektleri */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/15 to-cyan-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Üst Hap Rozet */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Türkiye'nin İlk Hibrit (Offline + Bulut) Kantar Otomasyonu</span>
            <ArrowRight className="h-3 w-3 text-cyan-400" />
          </div>
        </div>

        {/* Ana Başlık */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight font-display leading-[1.1]">
            Kantar Operasyonlarında{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
              Sıfır Kesinti,
            </span>{" "}
            Maksimum Hız.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            İnternet kopsa dahi tartıma devam eden <strong>Masaüstü Motoru</strong>, anlık <strong>Bulut ERP Senkronizasyonu</strong> ve müşterileriniz için <strong>Canlı Sevkiyat Portalı</strong> tek platformda.
          </p>

          {/* Aksiyon Butonları */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              <span>Ücretsiz Canlı Demo İsteyin</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#interactive-demo"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-card border border-slate-700 hover:border-slate-500 text-white font-bold text-sm hover:bg-slate-800/80 flex items-center justify-center gap-2 transition-all"
            >
              <Play className="h-4 w-4 text-cyan-400 fill-cyan-400" />
              <span>Simülatörü Dene</span>
            </Link>
          </div>

          {/* Güven Rozetleri */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>%100 Çevrimdışı Çalışma</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Tüm İndikatörlerle Uyumlu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Çok Kiracılı SaaS Altyapısı</span>
            </div>
          </div>
        </div>

        {/* İnteraktif Simülatör / Önizleme Bileşeni */}
        <div id="interactive-demo" className="mt-16 md:mt-20">
          <InteractiveKantarDemo />
        </div>
      </div>
    </section>
  );
}
