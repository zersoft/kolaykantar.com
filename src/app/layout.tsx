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

import { ThemeProvider } from "@/components/theme-provider";
import { SchemaOrg } from "@/components/seo/schema-org";
import { QuickContactFab } from "@/components/layout/quick-contact-fab";

export const metadata: Metadata = {
  metadataBase: new URL("https://kolaykantar.com"),
  title: "KolayKantar ERP | Taşıt & Tır Kantarı Otomasyonu, Çevrimdışı Tartım Yazılımı",
  description:
    "İnternet kesintisinde sıfır kesintiyle çalışan masaüstü tartım yazılımı, çok kiracılı bulut ERP ve 7/24 müşteri sevkiyat portali. Baykon, Tunahan, Esit indikatörleriyle %100 uyumlu. Ücretsiz canlı demo.",
  keywords: [
    "kantar programı",
    "kantar otomasyonu",
    "tır kantarı programı",
    "kantar yazılımı",
    "kantar tartım sistemi",
    "taşıt kantarı otomasyonu",
    "hibrit kantar programı",
    "offline kantar yazılımı",
    "çevrimdışı kantar sistemi",
    "kantar fişi programı",
    "müşteri kantar portali",
    "maden kantar otomasyonu",
    "hazır beton kantar programı",
    "taş ocağı kantar yazılımı",
    "tıbbi atık kantar otomasyonu",
    "hbys kantar entegrasyonu",
    "baykon kantar programı",
    "tunahan indikatör yazılımı",
    "esit kantar programı",
    "rs232 kantar okuma",
    "kantar e-irsaliye programı",
    "zersoft kantar",
    "kolay kantar",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Zersoft Yeni Nesil Teknoloji", url: "https://zersoft.net" }],
  creator: "Zersoft Yeni Nesil Teknoloji",
  publisher: "Zersoft Yeni Nesil Teknoloji",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "KolayKantar ERP | Yeni Nesil Kantar Otomasyonu & Bulut Platformu",
    description:
      "İnternet kesilse dahi durmayan çevrimdışı masaüstü motoru, anlık bulut ERP ve 7/24 canlı müşteri sevkiyat portali.",
    url: "https://kolaykantar.com",
    siteName: "KolayKantar ERP",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/brand/logo-dark.svg",
        width: 1200,
        height: 630,
        alt: "KolayKantar ERP — Hibrit Kantar Otomasyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KolayKantar ERP | Taşıt & Tır Kantarı Otomasyonu",
    description:
      "Sıfır kesintili çevrimdışı kantar otomasyonu, anlık bulut ERP ve müşteri portali.",
    images: ["/brand/logo-dark.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#f8fafc] dark:bg-[#060b13] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <QuickContactFab />
          <SchemaOrg />
        </ThemeProvider>
      </body>
    </html>
  );
}
