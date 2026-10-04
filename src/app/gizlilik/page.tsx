import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Sözleşmesi & KVKK Aydınlatma Metni | KolayKantar ERP",
  description:
    "KolayKantar ERP veri güvenliği, KVKK aydınlatma metni ve gizlilik politikası. Zersoft Yeni Nesil Teknoloji güvencesiyle verileriniz izole ve güvende.",
  alternates: {
    canonical: "/gizlilik",
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-slate-700 dark:text-slate-300 space-y-6 text-sm">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white font-display">Gizlilik Politikası & KVKK Aydınlatma Metni</h1>
      <p className="text-xs text-slate-500 dark:text-slate-400">Son Güncelleme: 31 Ağustos 2026</p>
      
      <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 leading-relaxed shadow-sm">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Veri Sorumlusu</h2>
        <p>KolayKantar ERP platformu ve kolaykantar.com web sitesi, <strong className="text-slate-900 dark:text-white">Zersoft Yeni Nesil Teknoloji</strong> (Bursa / Türkiye) tarafından işletilmektedir.</p>

        <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Toplanan Veriler ve Kullanım Amacı</h2>
        <p>Kantar otomasyonu süreçlerinde toplanan araç plakaları, şoför bilgileri, tartım ağırlıkları ve irsaliye kayıtları; yalnızca tartım işlemlerinin yasal mevzuata uygun şekilde yürütülmesi, müşteri ekstresi ve icmal raporlarının oluşturulması amacıyla işlenir.</p>

        <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Çok Kiracılı Veri Güvenliği ve İzolasyon</h2>
        <p>Her müşteri firmanın verisi bağımsız şemalarında şifreli olarak tutulur. Dış müşteri portali kullanıcıları yalnızca kendi firmalarına ait kayıtlara erişebilir.</p>

        <h2 className="text-base font-bold text-slate-900 dark:text-white">4. İletişim</h2>
        <p>KVKK kapsamındaki haklarınız veya veri güvenliği sorularınız için <strong className="text-slate-900 dark:text-white">info@zersoft.net</strong> veya <strong className="text-slate-900 dark:text-white">+90 (555) 587 93 70</strong> üzerinden bizimle iletişime geçebilirsiniz.</p>
      </div>
    </div>
  );
}
