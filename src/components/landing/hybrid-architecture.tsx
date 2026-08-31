import { WifiOff, Cloud, Database, Cpu, ArrowRight, ShieldCheck, RefreshCw, Zap } from "lucide-react";

export function HybridArchitecture() {
  return (
    <section id="architecture" className="py-24 bg-[#080e18] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
            <Cpu className="h-3.5 w-3.5 text-indigo-400" />
            <span>Devrim Yaratan Hibrit Mimari</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            İnternet Kesilse Bile Kantarınız Asla Durmaz.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Geleneksel bulut tabanlı yazılımlar internet koptuğunda kantarınızı kilitler; eski masaüstü yazılımlar ise merkezden izlenemez. KolayKantar her ikisinin en güçlü yönlerini birleştirir.
          </p>
        </div>

        {/* Mimari Akış Şeması */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Adım 1: Saha İstemcisi */}
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 relative group hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 font-bold text-lg">
              1
            </div>
            <h3 className="text-lg font-bold text-white">Saha Kantar İstasyonu</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Masaüstü Electron istemcisi seri port (RS232/USB) üzerinden indikatöre bağlanır. Tartımlar anında yerel <strong>SQLite</strong> veritabanına işlenir ve fiş milisaniyeler içinde basılır.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
              <Zap className="h-4 w-4" />
              <span>Gecikmesiz Donanım Entegrasyonu</span>
            </div>
          </div>

          {/* Adım 2: Çevrimdışı Güvenlik Motoru */}
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 relative group hover:border-indigo-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 font-bold text-lg">
              2
            </div>
            <h3 className="text-lg font-bold text-white">Akıllı Senkronizasyon</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              İnternet koptuğunda sistem <strong>%100 çevrimdışı</strong> çalışmaya devam eder. Bağlantı yeniden kurulduğunda tartım kayıtları, daralar ve iptaller arka planda buluta aktarılır.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-indigo-400 font-semibold">
              <RefreshCw className="h-4 w-4" />
              <span>Otomatik İki Yönlü Sync</span>
            </div>
          </div>

          {/* Adım 3: Çok Kiracılı Bulut ERP */}
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 relative group hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 font-bold text-lg">
              3
            </div>
            <h3 className="text-lg font-bold text-white">Bulut ERP & Müşteri Portalı</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Şirket yöneticileri istedikleri cihazdan anlık ciro ve tonaj dökümlerini görür; müşteriler ise kendi müşteri portalından ekstre ve fişlerine erişir.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-purple-400 font-semibold">
              <Cloud className="h-4 w-4" />
              <span>Dünyanın Her Yerinden Canlı Erişim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
