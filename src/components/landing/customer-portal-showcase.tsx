import { Truck, CheckCircle2, ShieldCheck, Download, Calendar, FileText } from "lucide-react";

export function CustomerPortalShowcase() {
  return (
    <section id="portal" className="py-24 bg-[#080e18] border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sol Kolon: Açıklamalar */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300">
              <Truck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Müşteri Memnuniyetini Artırın</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
              Müşterilerinize Özel 7/24 Canlı Sevkiyat Portalı.
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Müşterilerinizin "Bugün kaç ton çektik?", "Fişi tekrar gönderir misiniz?" telefonlarına son verin. KolayKantar Müşteri Portalı ile her cari kendi şifresiyle girip kendi sevkiyatlarını anında incelesin.
            </p>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span><strong>Hızlı Tarih Filtreleri:</strong> Bugün, Dün, Bu Hafta, Bu Ay ve Özel Tarih Aralığı.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span><strong>Malzeme İcmal Raporu:</strong> Çekilen malzemelerin alttoplamları ve sefer dağılımları.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span><strong>Tek Tıkla Excel & Fiş Yazdırma:</strong> Tüm dökümleri CSV formatında indirme ve fiş görüntüleme.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span><strong>Tam Veri İzolasyonu:</strong> Müşteriler diğer firmaların verilerini ve fabrika cirosunu asla göremez.</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Müşteri Portalı Görsel Mockup Kartı */}
          <div className="lg:col-span-6 relative">
            <div className="glass-card rounded-3xl p-6 border border-slate-700 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    🏢
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">ŞELALE BETON A.Ş.</h4>
                    <p className="text-[10px] text-slate-400">Müşteri Portalı • Aktif Oturum</p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  CANLI VERİ
                </span>
              </div>

              {/* KPI Mini Kartları */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#0b1626] p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Toplam Tonaj</span>
                  <span className="text-sm font-black font-mono text-cyan-400">28.877 TON</span>
                </div>
                <div className="bg-[#0b1626] p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Araç Seferi</span>
                  <span className="text-sm font-black font-mono text-emerald-400">1.000 SEFER</span>
                </div>
                <div className="bg-[#0b1626] p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Malzeme Çeşidi</span>
                  <span className="text-sm font-black font-mono text-purple-400">5 ÇEŞİT</span>
                </div>
              </div>

              {/* Mini Tablo */}
              <div className="bg-[#070e1a] rounded-xl p-3 border border-slate-800/80 text-[11px] font-mono space-y-2">
                <div className="flex justify-between text-slate-400 font-bold pb-1 border-b border-slate-800">
                  <span>Malzeme Cinsi</span>
                  <span>Sefer</span>
                  <span>Net Ton</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>0-4 TOZ MALZEME</span>
                  <span>615</span>
                  <strong className="text-cyan-400">18.238 T</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>12-22 NO 3 MALZEME</span>
                  <span>221</span>
                  <strong className="text-cyan-400">6.097 T</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>05-12 NO 2 MALZEME</span>
                  <span>160</span>
                  <strong className="text-cyan-400">4.402 T</strong>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <span className="text-[10px] text-cyan-400 font-bold flex items-center gap-1">
                  <Download className="h-3 w-3" /> Excel (CSV) Olarak İndirilebilir
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
