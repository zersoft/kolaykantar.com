export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-slate-300 space-y-6 text-sm">
      <h1 className="text-3xl font-black text-white font-display">Gizlilik Politikası & KVKK Aydınlatma Metni</h1>
      <p className="text-xs text-slate-400">Son Güncelleme: 31 Ağustos 2026</p>
      
      <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-4 leading-relaxed">
        <h2 className="text-base font-bold text-white">1. Veri Sorumlusu</h2>
        <p>KolayKantar ERP platformu ve kolaykantar.com web sitesi, Zersoft Yazılım Teknolojileri A.Ş. tarafından işletilmektedir.</p>

        <h2 className="text-base font-bold text-white">2. Toplanan Veriler ve Kullanım Amacı</h2>
        <p>Kantar otomasyonu süreçlerinde toplanan araç plakaları, şoför bilgileri, tartım ağırlıkları ve irsaliye kayıtları; yalnızca tartım işlemlerinin yasal mevzuata uygun şekilde yürütülmesi ve raporlanması amacıyla işlenir.</p>

        <h2 className="text-base font-bold text-white">3. Çok Kiracılı Veri Güvenliği ve İzolasyon</h2>
        <p>Her müşteri firmanın verisi bağımsız veritabanı şemalarında şifreli olarak tutulur. Dış müşteri portali kullanıcıları yalnızca kendi firmalarına ait kayıtlara erişebilir.</p>
      </div>
    </div>
  );
}
