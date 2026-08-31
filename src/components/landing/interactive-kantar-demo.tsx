"use client";

import { useState } from "react";
import { Scale, Truck, CheckCircle2, RefreshCw, Printer, Shield, Wifi, WifiOff, FileText, ArrowRight } from "lucide-react";

export function InteractiveKantarDemo() {
  const [plate, setPlate] = useState("16 HY 2026");
  const [company, setCompany] = useState("KALYON İNŞAAT A.Ş.");
  const [material, setMaterial] = useState("0-4 TOZ MALZEME");
  const [grossWeight, setGrossWeight] = useState(38540);
  const [tareWeight, setTareWeight] = useState(13540);
  const [isSaved, setIsSaved] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const netWeight = Math.max(0, grossWeight - tareWeight);
  const netTon = (netWeight / 1000).toFixed(2);
  const unitPrice = 280;
  const totalPrice = ((netWeight / 1000) * unitPrice).toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";

  const handleSimulate = () => {
    setIsSaved(true);
    setTimeout(() => {
      // simulate receipt
    }, 400);
  };

  const handleReset = () => {
    setIsSaved(false);
  };

  return (
    <div className="relative max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-sky-500/30 via-slate-800/40 to-transparent shadow-2xl">
      <div className="bg-[#0b1523] rounded-[22px] border border-slate-700/80 p-5 md:p-8 overflow-hidden">
        {/* Üst Bar: Simülatör Kontrolleri & Durum Rozetleri */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs font-mono font-bold text-slate-400 ml-2">
              KOLAYKANTAR KOKPİT v2026 • CANLI TARTIM SİMÜLATÖRÜ
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Offline Modu Simüle Et Butonu */}
            <button
              onClick={() => setIsOffline(!isOffline)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isOffline
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
              }`}
            >
              {isOffline ? <WifiOff className="h-3.5 w-3.5 text-amber-400" /> : <Wifi className="h-3.5 w-3.5 text-emerald-400" />}
              <span>{isOffline ? "Çevrimdışı (Offline)" : "Bulut Senkronize"}</span>
            </button>
          </div>
        </div>

        {/* Kokpit Grid Düzeni */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start">
          {/* Sol Kolon: Tartım Giriş Formu */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Araç Plakası:</label>
                <div className="relative">
                  <input
                    type="text"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value.toUpperCase())}
                    className="w-full bg-[#122033] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-black font-mono tracking-widest text-cyan-400 focus:outline-none focus:border-cyan-400"
                  />
                  <Truck className="h-4 w-4 text-slate-500 absolute right-3 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Müşteri / Cari:</label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#122033] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-200 focus:outline-none focus:border-cyan-400"
                >
                  <option value="KALYON İNŞAAT A.Ş.">KALYON İNŞAAT A.Ş.</option>
                  <option value="AKÇANSA ÇİMENTO SAN.">AKÇANSA ÇİMENTO SAN.</option>
                  <option value="ŞELALE BETON A.Ş.">ŞELALE BETON A.Ş.</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Malzeme Cinsi:</label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-[#122033] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-200 focus:outline-none focus:border-cyan-400"
                >
                  <option value="0-4 TOZ MALZEME">0-4 TOZ MALZEME</option>
                  <option value="12-22 NO 3 MALZEME">12-22 NO 3 MALZEME</option>
                  <option value="ALTTEMEL MALZEME">ALTTEMEL MALZEME</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Dara Ağırlığı (Kg):</label>
                <input
                  type="number"
                  value={tareWeight}
                  onChange={(e) => setTareWeight(Number(e.target.value))}
                  className="w-full bg-[#122033] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-mono font-bold text-slate-300 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Tartım Kaydet Butonu */}
            <div className="pt-2 flex items-center gap-3">
              {!isSaved ? (
                <button
                  type="button"
                  onClick={handleSimulate}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all transform active:scale-98"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Tartımı Kaydet & Fiş Bas (F12)</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-sm flex items-center justify-center gap-2 border border-cyan-500/40"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Yeni Tartım Al</span>
                </button>
              )}
            </div>
          </div>

          {/* Sağ Kolon: Dijital İndikatör & Canlı Fiş Önizleme */}
          <div className="lg:col-span-5 space-y-4">
            {/* Dijital Kantar İndikatör Ekranı */}
            <div className="bg-[#050a12] p-5 rounded-2xl border-2 border-cyan-500/40 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-cyan-400 mb-1">
                <span>CANLI İNDİKATÖR (RS232)</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  STABİL
                </span>
              </div>

              <div className="text-right py-2">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-wider text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                  {grossWeight.toLocaleString("tr-TR")}
                </span>
                <span className="text-lg font-bold text-cyan-500 ml-2">KG</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">DARA:</span>
                  <span className="text-slate-300 font-bold">{tareWeight.toLocaleString("tr-TR")} KG</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[10px]">NET TONAJ:</span>
                  <span className="text-emerald-400 font-black text-sm">{netTon} TON</span>
                </div>
              </div>
            </div>

            {/* Fiş Çıktısı Simülasyonu */}
            {isSaved && (
              <div className="bg-white text-slate-900 p-4 rounded-xl shadow-2xl border border-slate-300 text-[11px] font-mono space-y-2 animate-in fade-in zoom-in-95 duration-200">
                <div className="text-center font-bold border-b border-dashed border-slate-400 pb-1.5">
                  <p className="text-xs">KOLAYKANTAR RESMİ TARTIM FİŞİ</p>
                  <p className="text-[10px] text-slate-500">Fiş No: 2026-000842 • {new Date().toLocaleDateString('tr-TR')}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between"><span>Plaka:</span><strong className="font-bold">{plate}</strong></div>
                  <div className="flex justify-between"><span>Cari:</span><span>{company}</span></div>
                  <div className="flex justify-between"><span>Malzeme:</span><span>{material}</span></div>
                  <div className="flex justify-between border-t border-dashed pt-1 font-bold">
                    <span>NET AĞIRLIK:</span>
                    <span className="text-blue-700">{netTon} TON ({netWeight.toLocaleString('tr-TR')} KG)</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>TUTAR:</span>
                    <span>{totalPrice}</span>
                  </div>
                </div>
                <div className="text-center text-[9px] text-slate-500 pt-1 border-t border-dashed">
                  {isOffline ? "⚡ Çevrimdışı Belleğe Kaydedildi (Senkronizasyon Kuyruğunda)" : "✅ Bulut Veritabanına Başarıyla Yazıldı"}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
