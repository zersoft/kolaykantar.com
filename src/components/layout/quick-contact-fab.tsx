"use client";

import { MessageCircle, Phone, Sparkles } from "lucide-react";

export function QuickContactFab() {
  const whatsappUrl =
    "https://wa.me/905555879370?text=" +
    encodeURIComponent(
      "Merhaba, KolayKantar ERP hakkında detaylı bilgi almak ve işletmemize özel canlı demo randevusu planlamak istiyorum."
    );

  return (
    <aside aria-label="Hızlı İletişim Menüsü" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      {/* İpucu Rozeti */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-slate-800/95 text-white border border-emerald-500/40 text-[11px] font-bold shadow-lg backdrop-blur-md animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Uzman Ekip Çevrimiçi • 15 Dk. Canlı Demo</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Hızlı Telefon Arama Butonu */}
        <a
          id="btn-call-fab"
          href="tel:+905555879370"
          title="Bizi Doğrudan Arayın: +90 (555) 587 93 70"
          className="p-3.5 rounded-full bg-slate-900 text-cyan-400 hover:text-white hover:bg-slate-800 border border-slate-700/80 shadow-xl transition-all hover:scale-105 flex items-center justify-center group"
        >
          <Phone className="h-5 w-5" />
          <span className="sr-only">Telefonla Ara: +90 555 587 93 70</span>
        </a>

        {/* WhatsApp İletişim Butonu */}
        <a
          id="btn-whatsapp-fab"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Üzerinden Hızlı Fiyat ve Demo Alın"
          className="px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs shadow-xl shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-105"
        >
          <MessageCircle className="h-5 w-5 fill-white text-emerald-600" />
          <span className="hidden sm:inline">WhatsApp Teklif & Demo</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
