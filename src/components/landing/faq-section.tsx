"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "İnternet kesildiğinde tartım almaya devam edebilir miyiz?",
      a: "Evet! KolayKantar'ın yerel masaüstü istemcisi tüm verileri yerel SQLite veritabanında tutar. İnternet kesilse bile operatör tartım alır, daraları çözer ve fiş basar. İnternet geldiğinde kayıtlar otomatik olarak bulut veritabanına aktarılır.",
    },
    {
      q: "Hangi kantar indikatörleri ve markaları ile uyumludur?",
      a: "Tunçmatik, Baykon, Esit, Dini Argeo, Keli, Yaohua, Sartorius ve standart RS232 / USB / TCP-IP protokolü kullanan tüm yerli ve yabancı indikatör modelleriyle %100 uyumludur.",
    },
    {
      q: "Mevcut carilerimizi ve araç daralarımızı sisteme aktarabilir miyiz?",
      a: "Evet. Excel dosyanızdaki tüm müşteri, şantiye, araç plakası ve malzeme listelerini tek tıkla sisteme aktarabilmeniz için hazır içe aktarma sihirbazı sunuyoruz.",
    },
    {
      q: "Müşteri Portalı nedir ve müşterilerimiz nasıl giriş yapar?",
      a: "Müşterilerinize özel bir kullanıcı adı ve şifre tanımlayabilirsiniz. Müşteriniz yalnızca kendi firmasına ait malzeme alımlarını, araç seferlerini ve tartım fişlerini 7/24 telefonundan veya bilgisayarından izleyebilir.",
    },
    {
      q: "Logo, Mikro veya SAP gibi muhasebe yazılımlarına veri aktarılabilir mi?",
      a: "Evet. Enterprise paketimizde veya API entegrasyonumuzla tartım ve irsaliye kayıtları doğrudan muhasebe/ERP sisteminize fatura veya irsaliye olarak aktarılabilir.",
    },
  ];

  return (
    <section className="py-24 bg-[#080e18] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300">
            <HelpCircle className="h-3.5 w-3.5 text-cyan-400" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-cyan-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
