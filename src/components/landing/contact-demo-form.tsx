"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, Building2, Sparkles } from "lucide-react";

export function ContactDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    scaleCount: "1",
    sector: "Maden / Taş Ocağı",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-24 bg-[#060b13] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Arka Plan Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none" />

          {!submitted ? (
            <div className="space-y-8 relative z-10">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>15 Dakikada Canlı Online Tanıtım</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                  Ücretsiz Canlı Demo ve Fiyat Teklifi Alın
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
                  Uzman ekibimiz işletmenizin kantar yapısını incelesin, firmanıza özel demo ortamını hemen hazırlasın.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Şirket / Firma Unvanı *</label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: ABC Madencilik A.Ş."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#0a1422] border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Yetkili Adı Soyadı *</label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-[#0a1422] border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Telefon Numarası *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0a1422] border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">E-Posta Adresi</label>
                    <input
                      type="email"
                      placeholder="ahmet@sirket.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0a1422] border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Faaliyet Sektörü</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-[#0a1422] border border-slate-700 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Maden / Taş Ocağı">Maden & Taş Ocağı</option>
                      <option value="Asfalt / Hazır Beton">Asfalt & Hazır Beton</option>
                      <option value="Geri Dönüşüm / Hurda">Geri Dönüşüm & Hurda</option>
                      <option value="Tarım / Hububat">Tarım & Hububat</option>
                      <option value="Lojistik / Antrepo">Lojistik & Antrepo</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Kantar Sayısı</label>
                    <select
                      value={formData.scaleCount}
                      onChange={(e) => setFormData({ ...formData, scaleCount: e.target.value })}
                      className="w-full bg-[#0a1422] border border-slate-700 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      <option value="1">1 İstasyon</option>
                      <option value="2-3">2 - 3 İstasyon</option>
                      <option value="4-10">4 - 10 İstasyon</option>
                      <option value="10+">10+ Çoklu Şube</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Eklemek İstediğiniz Not veya İhtiyaç</label>
                  <textarea
                    rows={3}
                    placeholder="Kullandığınız indikatör markası veya özel entegrasyon talebiniz..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0a1422] border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 transition-all"
                  >
                    <Send className="h-4 w-4" />
                    <span>Talebi Gönder & Demoyu Başlat</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-12 space-y-4 relative z-10 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Talebiniz Başarıyla Alındı!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Teşekkür ederiz. Müşteri temsilcimiz <strong>{formData.phone}</strong> numarasından sizinle en kısa sürede iletişime geçerek canlı demo sunumunu organize edecektir.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
