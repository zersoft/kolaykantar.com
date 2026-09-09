"use client";

import { useState } from "react";
import {
  Scale,
  Truck,
  CheckCircle2,
  RefreshCw,
  Printer,
  Shield,
  Wifi,
  WifiOff,
  FileText,
  Barcode,
  Hospital,
  Sparkles,
} from "lucide-react";

export function InteractiveKantarDemo() {
  const [activeTab, setActiveTab] = useState<"industrial" | "medical">("industrial");

  // Endüstriyel Kantar State
  const [plate, setPlate] = useState("16 HY 2026");
  const [company, setCompany] = useState("KALYON İNŞAAT A.Ş.");
  const [material, setMaterial] = useState("0-4 TOZ MALZEME");
  const [grossWeight, setGrossWeight] = useState(38540);
  const [tareWeight, setTareWeight] = useState(13540);

  // Tıbbi Atık Kokpit State
  const [polyclinic, setPolyclinic] = useState("GENEL CERRAHİ SERVİSİ");
  const [wasteCode, setWasteCode] = useState("18 01 03* Enfeksiyöz Tıbbi Atık");
  const [medicalGross, setMedicalGross] = useState(18.54);
  const [medicalTare, setMedicalTare] = useState(0.04);

  const [isSaved, setIsSaved] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  // Hesaplamalar
  const indNetWeight = Math.max(0, grossWeight - tareWeight);
  const indNetTon = (indNetWeight / 1000).toFixed(2);
  const indUnitPrice = 280;
  const indTotalPrice =
    ((indNetWeight / 1000) * indUnitPrice).toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";

  const medNetWeight = Math.max(0, medicalGross - medicalTare).toFixed(3);

  const handleSimulate = () => {
    setIsSaved(true);
  };

  const handleReset = () => {
    setIsSaved(false);
  };

  return (
    <div className="relative max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-sky-500/30 via-slate-800/40 to-transparent shadow-2xl">
      <div className="bg-[#0b1523] rounded-[22px] border border-slate-700/80 p-5 md:p-8 overflow-hidden">
        {/* Üst Bar: Mod Seçici ve Bağlantı Rozeti */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab("industrial");
                setIsSaved(false);
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "industrial"
                  ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md"
                  : "bg-slate-800/80 text-slate-400 hover:text-white"
              }`}
            >
              <Truck className="h-3.5 w-3.5" />
              <span>Ağır Vasıta & Endüstriyel Kantar</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("medical");
                setIsSaved(false);
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "medical"
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-500/20"
                  : "bg-slate-800/80 text-slate-400 hover:text-white"
              }`}
            >
              <Hospital className="h-3.5 w-3.5 text-rose-400" />
              <span>Hastane Tıbbi Atık Kokpiti (Yeni)</span>
            </button>
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
            {activeTab === "industrial" ? (
              <>
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
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-400 block mb-1">Poliklinik / Servis:</label>
                    <select
                      value={polyclinic}
                      onChange={(e) => setPolyclinic(e.target.value)}
                      className="w-full bg-[#122033] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-bold text-rose-300 focus:outline-none focus:border-rose-400"
                    >
                      <option value="GENEL CERRAHİ SERVİSİ">GENEL CERRAHİ SERVİSİ</option>
                      <option value="ACİL SERVİS">ACİL SERVİS</option>
                      <option value="AMELİYATHANE BİRİMİ">AMELİYATHANE BİRİMİ</option>
                      <option value="HEMODİYALİZ ÜNİTESİ">HEMODİYALİZ ÜNİTESİ</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 block mb-1">Ulusal Tıbbi Atık Kodu (EWC):</label>
                    <select
                      value={wasteCode}
                      onChange={(e) => setWasteCode(e.target.value)}
                      className="w-full bg-[#122033] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-200 focus:outline-none focus:border-rose-400"
                    >
                      <option value="18 01 03* Enfeksiyöz Tıbbi Atık">18 01 03* Enfeksiyöz Tıbbi Atık</option>
                      <option value="18 01 01 Kesici ve Delici Atık">18 01 01 Kesici ve Delici Atık</option>
                      <option value="18 01 02 Patolojik Atıklar">18 01 02 Patolojik Atıklar</option>
                      <option value="18 01 04 Genel Atıklar">18 01 04 Genel Atıklar</option>
                    </select>
                  </div>
                </div>

                {/* Hızlı Dara Ön Tanım Butonları (Kokpit Yeniliği) */}
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1.5">
                    Hızlı Dara Ön Tanımları (Tek Tıkla Seçim):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setMedicalTare(0.04)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        medicalTare === 0.04
                          ? "bg-rose-500/30 text-rose-300 border-rose-500"
                          : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                      }`}
                    >
                      Siyah Poşet (0.040 kg)
                    </button>
                    <button
                      type="button"
                      onClick={() => setMedicalTare(0.05)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        medicalTare === 0.05
                          ? "bg-rose-500/30 text-rose-300 border-rose-500"
                          : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                      }`}
                    >
                      Kırmızı Atık Poşeti (0.050 kg)
                    </button>
                    <button
                      type="button"
                      onClick={() => setMedicalTare(0.35)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        medicalTare === 0.35
                          ? "bg-rose-500/30 text-rose-300 border-rose-500"
                          : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                      }`}
                    >
                      Kesici Kova (0.350 kg)
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Tartım Kaydet Butonu */}
            <div className="pt-2 flex items-center gap-3">
              {!isSaved ? (
                <button
                  type="button"
                  onClick={handleSimulate}
                  className={`flex-1 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-98 ${
                    activeTab === "industrial"
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-emerald-500/25"
                      : "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white shadow-rose-500/25"
                  }`}
                >
                  {activeTab === "industrial" ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Tartımı Kaydet & Fiş Bas (F12)</span>
                    </>
                  ) : (
                    <>
                      <Barcode className="h-5 w-5" />
                      <span>Atığı Kaydet & 50x55mm Barkod Bas</span>
                    </>
                  )}
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

          {/* Sağ Kolon: Dijital İndikatör & Canlı Çıktı Önizleme */}
          <div className="lg:col-span-5 space-y-4">
            {/* Dijital Kantar İndikatör Ekranı */}
            <div className={`bg-[#050a12] p-5 rounded-2xl border-2 shadow-inner relative overflow-hidden ${
              activeTab === "industrial" ? "border-cyan-500/40" : "border-rose-500/40"
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-1">
                <span className={activeTab === "industrial" ? "text-cyan-400" : "text-rose-400"}>
                  {activeTab === "industrial" ? "CANLI İNDİKATÖR (RS232)" : "TIBBİ ATIK TERAZİSİ"}
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  STABİL
                </span>
              </div>

              <div className="text-right py-2">
                <span className={`text-4xl sm:text-5xl font-black font-mono tracking-wider drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] ${
                  activeTab === "industrial" ? "text-cyan-300" : "text-rose-300"
                }`}>
                  {activeTab === "industrial"
                    ? grossWeight.toLocaleString("tr-TR")
                    : medicalGross.toFixed(3)}
                </span>
                <span className={`text-lg font-bold ml-2 ${activeTab === "industrial" ? "text-cyan-500" : "text-rose-500"}`}>
                  KG
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">DARA:</span>
                  <span className="text-slate-300 font-bold">
                    {activeTab === "industrial"
                      ? `${tareWeight.toLocaleString("tr-TR")} KG`
                      : `${medicalTare.toFixed(3)} KG`}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[10px]">NET AĞIRLIK:</span>
                  <span className="text-emerald-400 font-black text-sm">
                    {activeTab === "industrial" ? `${indNetTon} TON` : `${medNetWeight} KG`}
                  </span>
                </div>
              </div>
            </div>

            {/* Çıktı Simülasyonu */}
            {isSaved && (
              activeTab === "industrial" ? (
                /* Endüstriyel Fiş */
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
                      <span className="text-blue-700">{indNetTon} TON ({indNetWeight.toLocaleString('tr-TR')} KG)</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>TUTAR:</span>
                      <span>{indTotalPrice}</span>
                    </div>
                  </div>
                  <div className="text-center text-[9px] text-slate-500 pt-1 border-t border-dashed">
                    {isOffline ? "⚡ Çevrimdışı Belleğe Kaydedildi (Senkronizasyon Kuyruğunda)" : "✅ Bulut Veritabanına Başarıyla Yazıldı"}
                  </div>
                </div>
              ) : (
                /* 50x55 mm Termal Barkod Etiketi */
                <div className="bg-white text-slate-900 p-4 rounded-xl shadow-2xl border-2 border-slate-400 text-[10px] font-mono space-y-1.5 animate-in fade-in zoom-in-95 duration-200 max-w-[280px] mx-auto">
                  <div className="border-b border-slate-900 pb-1 text-center">
                    <p className="font-black text-[11px] uppercase tracking-wider">T.C. SAĞLIK BAKANLIĞI</p>
                    <p className="text-[9px] font-bold text-slate-600">TIBBİ ATIK TARTIM VE ETİKET FORMU</p>
                  </div>
                  <div className="pt-0.5 space-y-0.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Birim:</span>
                      <strong className="font-bold text-right truncate max-w-[150px]">{polyclinic}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Atık:</span>
                      <span className="font-bold text-rose-600 truncate max-w-[150px]">{wasteCode.split(" ")[0]}</span>
                    </div>
                    <div className="flex justify-between border-t border-dashed border-slate-400 pt-1 font-black text-[11px]">
                      <span>NET KG:</span>
                      <span className="text-slate-950 font-mono text-sm">{medNetWeight} KG</span>
                    </div>
                  </div>
                  {/* Barkod Görsel Simülasyonu */}
                  <div className="pt-2 text-center border-t border-slate-900">
                    <div className="h-9 bg-slate-900 mx-auto rounded-sm flex items-center justify-center text-white text-[9px] font-mono tracking-widest px-2">
                      ||| | |||| || | ||||| | |||
                    </div>
                    <span className="text-[8px] text-slate-600 block mt-0.5">HBYS-ATIK-2026-09412</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
