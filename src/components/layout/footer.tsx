import Link from "next/link";
import { Scale, Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#04080e] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Kolon 1: Logo & Şirket Bilgisi */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 p-0.5">
              <div className="w-full h-full bg-[#070d17] rounded-[6px] flex items-center justify-center">
                <Scale className="h-4 w-4 text-cyan-400" />
              </div>
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white">
              KOLAY<span className="text-cyan-400">KANTAR</span> ERP
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-sm">
            Türkiye'nin ilk ve tek <strong>Hibrit Mimariye</strong> sahip kantar otomasyonu ve ERP platformu. İnternet kopsa dahi sahada sıfır kesintiyle tartım alın, bulutla anında senkronize olun.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Zersoft Yazılım Teknolojileri A.Ş. Güvencesiyle</span>
          </div>
        </div>

        {/* Kolon 2: Ürün ve Modüller */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-bold text-sm tracking-wider uppercase">Ürün</h4>
          <ul className="space-y-2">
            <li><Link href="#features" className="hover:text-cyan-400 transition-colors">Kantar Kokpiti</Link></li>
            <li><Link href="#architecture" className="hover:text-cyan-400 transition-colors">Hibrit Offline Motor</Link></li>
            <li><Link href="#portal" className="hover:text-cyan-400 transition-colors">Müşteri Portalı</Link></li>
            <li><Link href="#pricing" className="hover:text-cyan-400 transition-colors">Fiyatlandırma</Link></li>
            <li><Link href="#demo" className="hover:text-cyan-400 transition-colors">Canlı Demo</Link></li>
          </ul>
        </div>

        {/* Kolon 3: Sektörler */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-bold text-sm tracking-wider uppercase">Sektörler</h4>
          <ul className="space-y-2">
            <li><Link href="#sectors" className="hover:text-cyan-400 transition-colors">Maden & Taş Ocakları</Link></li>
            <li><Link href="#sectors" className="hover:text-cyan-400 transition-colors">Asfalt & Hazır Beton</Link></li>
            <li><Link href="#sectors" className="hover:text-cyan-400 transition-colors">Geri Dönüşüm & Hurda</Link></li>
            <li><Link href="#sectors" className="hover:text-cyan-400 transition-colors">Tarım & Hububat</Link></li>
            <li><Link href="#sectors" className="hover:text-cyan-400 transition-colors">Lojistik & Antrepo</Link></li>
          </ul>
        </div>

        {/* Kolon 4: İletişim */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-bold text-sm tracking-wider uppercase">İletişim & Destek</h4>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>0 (850) 300 00 00</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>info@kolaykantar.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>Teknopark İstanbul / Bursa Nilüfer Ofisi</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Telif Satırı */}
      <div className="border-t border-slate-900 bg-[#03060a] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} KolayKantar.com. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/gizlilik" className="hover:text-slate-300">Gizlilik Sözleşmesi</Link>
            <Link href="/gizlilik" className="hover:text-slate-300">KVKK Aydınlatma Metni</Link>
            <Link href="/iletisim" className="hover:text-slate-300">İletişim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
