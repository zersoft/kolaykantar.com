import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "KolayKantar ERP | Yeni Nesil Hibrit Kantar Otomasyonu & Bulut Platformu",
  description:
    "İnternet kesilse bile çalışan çevrimdışı masaüstü tartım yazılımı, çok kiracılı bulut ERP senkronizasyonu ve 7/24 canlı müşteri sevkiyat portali. Tüm indikatörlerle tam uyumlu.",
  keywords: [
    "kantar otomasyonu",
    "kantar programı",
    "kantar yazılımı",
    "hibrit kantar",
    "offline kantar",
    "müşteri portali",
    "maden kantar programı",
    "beton santrali tartım",
    "taş ocağı kantar",
    "zersoft",
  ],
  authors: [{ name: "Zersoft Yeni Nesil Teknoloji" }],
  openGraph: {
    title: "KolayKantar ERP | Hibrit Kantar Otomasyonu & Bulut Platformu",
    description:
      "Sıfır kesintili çevrimdışı kantar otomasyonu, anlık bulut ERP ve müşteri portali.",
    url: "https://kolaykantar.com",
    siteName: "KolayKantar ERP",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#060b13] text-slate-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
