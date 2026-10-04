"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Eski kantar programımızdaki (.mdb / Access / Excel) verileri aktarabilir miyiz?",
      a: "Kesinlikle evet! KolayKantar'ın gelişmiş MDB & Veri Aktarım Sihirbazı sayesinde, eski kantar yazılımlarınızın veritabanı dosyalarını (.mdb, Access, DBF, Excel) 500 MB'a kadar asenkron motorla tek tıkla yükleyebilirsiniz. Geçmiş yıllara ait tüm tartım fişleriniz, cari hesaplarınız, araç plakalarınız ve dara geçmişiniz sıfır veri kaybıyla yeni sisteme aktarılır.",
    },
    {
      q: "Hastaneler için tıbbi atık tartımı ve HBYS entegrasyonu nasıl çalışır?",
      a: "KolayKantar Sağlık Kokpiti; poliklinik ve servis bazlı tıbbi atık tartımlarını doğrudan barkodlu termal yazıcıya (50x55 mm) iletir. Siyah poşet (0.040 kg) ve konteynerler için hızlı dara tuşları, ulusal atık kodları (EWC) ve resmi çift imzalı teslim tutanakları eksiksiz üretilir. HBYS altyapılarıyla tam entegre çalışır.",
    },
    {
      q: "Aynı sahada birden fazla şirketimiz var, tek kantardan farklı firmalar adına fiş kesebilir miyiz?",
      a: "Evet. 'Kaynak Firma (SellerEntity)' mimarimiz sayesinde aynı kantar istasyonundan birden fazla grup şirketi veya tüzel kişilik seçilebilir. Her firmanın kendine ait fiş şablonu, fatura unvanı, logo ve resmi irsaliye serisi bağımsız olarak basılır.",
    },
    {
      q: "Verilerimiz nerede saklanıyor ve diğer firmalardan nasıl izole ediliyor?",
      a: "KolayKantar, her müşteriye bağımsız PostgreSQL (Neon DB) veritabanı tahsis eden dinamik 'Database-per-Tenant' mimarisi kullanır. Şirket verileriniz diğer firmaların veritabanlarıyla asla karışmaz, fiziksel ve mantıksal olarak %100 izoledir.",
    },
    {
      q: "İnternet kesildiğinde tartım almaya devam edebilir miyiz?",
      a: "Evet! KolayKantar'ın yerel masaüstü istemcisi tüm verileri yerel SQLite veritabanında tutar. İnternet kesilse bile operatör tartım alır, daraları çözer ve fiş basar. İnternet geldiğinde kayıtlar otomatik olarak bulut veritabanına aktarılır.",
    },
    {
      q: "Hangi kantar indikatörleri ve markaları ile uyumludur?",
      a: "Tunahan, Baykon, Esit, Dini Argeo, Keli, Yaohua, Sartorius ve standart RS232 / USB / TCP-IP protokolü kullanan tüm yerli ve yabancı indikatör modelleriyle %100 uyumludur.",
    },
    {
      q: "Müşteri Portalı nedir ve müşterilerimiz nasıl giriş yapar?",
      a: "Müşterilerinize özel bir kullanıcı adı ve şifre tanımlayabilirsiniz. Müşteriniz yalnızca kendi firmasına ait malzeme alımlarını, araç seferlerini ve tartım fişlerini 7/24 telefonundan veya bilgisayarından izleyebilir.",
    },
    {
      q: "Mevcut kantar donanımımızı veya indikatörümüzü değiştirmemiz gerekir mi?",
      a: "Hayır. KolayKantar, piyasadaki mevcut tüm tartım terminalleri (Baykon, Tunahan, Esit, Dini Argeo, Sartorius vb.) ile RS232, USB veya TCP-IP ağı üzerinden doğrudan haberleşir. Hiçbir ek indikatör veya donanım yatırımı yapmadan dakikalar içinde devreye alabilirsiniz.",
    },
    {
      q: "Kurulum ve operatör eğitimi ne kadar sürer?",
      a: "Uzaktan bağlantıyla kurulum ve operatör eğitimi ortalama 30-45 dakika içinde tamamlanır. Saha operatörünüz aynı gün içinde tartım almaya başlayabilir. Talep edilmesi halinde Türkiye genelinde yerinde saha devreye alma ve donanım kalibrasyon desteği sağlanmaktadır.",
    },
    {
      q: "Logo, Mikro veya SAP gibi muhasebe yazılımlarına veri aktarılabilir mi?",
      a: "Evet. Enterprise paketimizde veya API entegrasyonumuzla tartım ve irsaliye kayıtları doğrudan muhasebe/ERP sisteminize fatura veya irsaliye olarak aktarılabilir.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/60 dark:bg-[#080e18] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
            <HelpCircle className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-cyan-600 dark:text-cyan-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
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
