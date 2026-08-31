# ⚖️ KolayKantar.com — Yeni Nesil Hibrit Kantar Otomasyonu & Bulut ERP

<p align="center">
  <img src="https://raw.githubusercontent.com/zersoft/kolay-kantar-erp/master/apps/web/public/logo.svg" alt="KolayKantar Logo" width="120" height="120" />
</p>

<p align="center">
  <strong>Türkiye'nin İlk Hibrit (Offline Masaüstü + Çok Kiracılı Bulut ERP) Kantar Otomasyonu Platformu</strong>
</p>

<p align="center">
  <a href="https://kolaykantar.com"><img src="https://img.shields.io/badge/Website-kolaykantar.com-0ea5e9?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
  <a href="https://zersoft.net"><img src="https://img.shields.io/badge/Geliştirici-Zersoft-6366f1?style=for-the-badge&logo=shield" alt="Zersoft" /></a>
  <img src="https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript" />
</p>

---

## 🌟 Proje Hakkında

**kolaykantar.com**, KolayKantar ERP'nin kurumsal vitrini, ürün tanıtımı ve SaaS müşteri edinme platformudur. Madencilik, taş ocakları, hazır beton, asfalt, geri dönüşüm ve tarım sektörlerindeki ağır tonajlı kantar operasyonları için geliştirilen hibrit otomasyon çözümlerini tanıtır.

### 🔑 Öne Çıkan Özellikler ve Modüller

- 🎮 **Canlı İnteraktif Kantar Simülatörü**: Ziyaretçilerin web sitesi üzerinde canlı tartım alıp fiş basabileceği, RS232 indikatörünü ve çevrimdışı (offline) modu test edebileceği etkileşimli bileşen.
- ⚡ **Hibrit Mimari Görselleştirmesi**: İnternet kopsa dahi sahada sıfır kesintiyle çalışan yerel SQLite masaüstü motoru + anlık bulut PostgreSQL senkronizasyonu.
- ⏱️ **Saha Hızı & Sıfır Kuyruk**: Geleneksel manuel tartım (90-120 sn) ile KolayKantar akıllı tartımı (10-15 sn) arasındaki operasyonel verimlilik karşılaştırması.
- 🚚 **Müşteri & Kurum Portalı Vitrini**: Müşterilerin 7/24 kendi tonaj çekimlerini, malzeme icmallerini ve kantar fişlerini canlı takip etmesi.
- 💳 **Esnek & İstasyon Bazlı Fiyatlandırma**:
  - **Bulut / SaaS Aboneliği**: Standart, Profesyonel ve Kurumsal paketler (+İstasyon seçici).
  - **Ömür Boyu Offline Lisans (On-Premise)**: Tek seferlik ödeme ile kalıcı offline lisans (İlk 6 ay ücretsiz güncelleme dahil).
- 📱 **Tam Responsive & Modern Glassmorphism Tasarımı**: Ultra hızlı yükleme süreleri, SEO uyumlu semantic HTML5 ve Schema.org yapılandırılmış veriler.

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji / Kütüphane |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| **Kullanıcı Arayüzü** | [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) |
| **Stil & Tasarım** | [Tailwind CSS](https://tailwindcss.com/) & Özel Glassmorphism CSS |
| **İkon Seti** | [Lucide React](https://lucide.dev/) |
| **Tipografi** | Google Fonts ([Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit)) |
| **SEO & Meta** | Next.js Metadata API, OpenGraph, JSON-LD, Sitemap.xml & Robots.txt |

---

## 🚀 Kurulum ve Yerel Geliştirme

### Gereksinimler
- Node.js `v18.18.0` veya üzeri
- npm, pnpm veya yarn paket yöneticisi

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
# veya Turbopack ile:
npx next dev --turbopack --port 3200
```
Tarayıcınızda **`http://localhost:3200`** adresine gidin.

### 3. Üretim Derlemesi (Production Build)
```bash
npm run build
npm start
```

---

## 📁 Proje Dizin Yapısı

```text
kolaykantar.com/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global stiller ve cam efektleri
│   │   ├── layout.tsx            # Ana HTML/Head kabuğu ve fontlar
│   │   ├── page.tsx              # Ana sayfa (Landing Page)
│   │   ├── gizlilik/page.tsx     # KVKK ve Gizlilik Politikası
│   │   └── iletisim/page.tsx     # İletişim ve Demo Talep Sayfası
│   ├── components/
│   │   ├── landing/              # Hero, Simülatör, Mimari, Fiyatlandırma, vb.
│   │   │   ├── hero-section.tsx
│   │   │   ├── interactive-kantar-demo.tsx
│   │   │   ├── hybrid-architecture.tsx
│   │   │   ├── features-grid.tsx
│   │   │   ├── customer-portal-showcase.tsx
│   │   │   ├── industry-solutions.tsx
│   │   │   ├── roi-calculator.tsx (Saha Hızı & Verimlilik)
│   │   │   ├── pricing-section.tsx (İstasyon Hesaplayıcı & Ömür Boyu)
│   │   │   ├── faq-section.tsx
│   │   │   └── contact-demo-form.tsx
│   │   └── layout/
│   │       ├── navbar.tsx        # Responsive üst navigasyon
│   │       └── footer.tsx        # Kurumsal alt bilgi
│   └── lib/
│       └── utils.ts              # Yardımcı formatlayıcılar
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 🏢 Kurumsal & İletişim

**KolayKantar ERP**, **Zersoft Yeni Nesil Teknoloji** tarafından geliştirilmektedir.

- 🌐 **Web Siteleri**: [kolaykantar.com](https://kolaykantar.com) • [zersoft.net](https://zersoft.net)
- 📞 **Telefon**: +90 (555) 587 93 70
- ✉️ **E-Posta**: [info@zersoft.net](mailto:info@zersoft.net) • [info@kolaykantar.com](mailto:info@kolaykantar.com)
- 📍 **Konum**: Bursa / Türkiye

---

<p align="center">
  © 2026 <strong>KolayKantar ERP</strong> • <strong>ZERSOFT Yeni Nesil Teknoloji</strong>. Tüm hakları saklıdır.
</p>
