"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Clock, AlertCircle, Sparkles } from "lucide-react";
import { formatNumber, formatCurrency } from "@/lib/utils";

export function RoiCalculator() {
  const [dailyTrucks, setDailyTrucks] = useState(80);
  const [scaleCount, setScaleCount] = useState(2);

  // Hesaplama Mantığı:
  // Manuel tartımda araç başı 45 saniye kayıp vs KolayKantar'da 15 saniye (Araç başı 30 sn kazanç)
  // Hatalı dara/kaçak tartım önleme: Araç başı ortalama 12 TL tasarruf
  const monthlyTrucks = dailyTrucks * 26 * scaleCount;
  const timeSavedMinutes = Math.round((monthlyTrucks * 30) / 60);
  const timeSavedHours = (timeSavedMinutes / 60).toFixed(1);
  const estimatedSavings = monthlyTrucks * 14.5;

  return (
    <section id="calculator" className="py-24 bg-[#080e18] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300">
            <Calculator className="h-3.5 w-3.5 text-amber-400" />
            <span>Tasarruf Hesaplayıcı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            KolayKantar İşletmenize Ne Kadar Kazandırır?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hızlı plaka tanıma, otomatik dara ve sıfır hatalı tartım ile elde edeceğiniz aylık zaman ve maliyet kazancını hesaplayın.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sol: Sürgülü Kontroller */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300">Kantar Başına Günlük Araç Sayısı:</label>
                  <span className="text-sm font-black font-mono text-cyan-400">{dailyTrucks} Araç/Gün</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={dailyTrucks}
                  onChange={(e) => setDailyTrucks(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10 Araç</span>
                  <span>150 Araç</span>
                  <span>300+ Araç</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300">Toplam Kantar İstasyonu Sayınız:</label>
                  <span className="text-sm font-black font-mono text-cyan-400">{scaleCount} İstasyon</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={scaleCount}
                  onChange={(e) => setScaleCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#0b1626] border border-slate-800 text-xs text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <span>Aylık Toplam Trafik: <strong>{formatNumber(monthlyTrucks)} Tartım</strong></span>
                </div>
                <p className="text-[11px]">
                  Kuyruk bekleme süreleri %65 azalır, operatör hata payı ve dara suistimalleri sıfırlanır.
                </p>
              </div>
            </div>

            {/* Sağ: Sonuç Kartı */}
            <div className="bg-gradient-to-br from-[#0c1e36] to-[#081525] p-6 rounded-2xl border border-cyan-500/30 text-center space-y-4 shadow-xl">
              <div>
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                  Tahmini Aylık Kazanç & Tasarruf
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white mt-1 text-gradient-cyan">
                  {formatCurrency(estimatedSavings)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-700/80 text-left">
                <div className="bg-[#060e1a] p-3 rounded-xl">
                  <span className="text-[10px] text-slate-400 block">Kazanılan Süre</span>
                  <span className="text-base font-black font-mono text-emerald-400">{timeSavedHours} Saat / Ay</span>
                </div>
                <div className="bg-[#060e1a] p-3 rounded-xl">
                  <span className="text-[10px] text-slate-400 block">Yıllık Katkı</span>
                  <span className="text-base font-black font-mono text-purple-400">{formatCurrency(estimatedSavings * 12)}</span>
                </div>
              </div>

              <a
                href="#demo"
                className="block w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-extrabold text-xs tracking-wide shadow-md transition-all"
              >
                Bu Tasarrufu İşletmenize Kazandırın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
