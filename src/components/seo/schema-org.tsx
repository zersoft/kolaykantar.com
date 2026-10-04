export function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zersoft Yeni Nesil Teknoloji",
    "alternateName": "KolayKantar ERP",
    "url": "https://kolaykantar.com",
    "logo": "https://kolaykantar.com/brand/logo-dark.svg",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-555-587-93-70",
        "contactType": "sales",
        "email": "info@kolaykantar.com",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-555-587-93-70",
        "contactType": "technical support",
        "email": "info@zersoft.net",
        "areaServed": "TR",
        "availableLanguage": "Turkish"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bursa",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://zersoft.net",
      "https://app.kolaykantar.com"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KolayKantar ERP",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows 10, Windows 11, Windows Server, macOS, Linux, Web",
    "description": "Türkiye'nin ilk hibrit mimarili (çevrimdışı masaüstü + bulut SaaS) kantar otomasyonu, araç tartım ve sevkiyat ERP platformu.",
    "softwareVersion": "2026.4",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "TRY",
      "price": "0",
      "description": "15 Günlük Ücretsiz Deneme ve Canlı Demo",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "Zersoft Yeni Nesil Teknoloji"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Eski kantar programımızdaki (.mdb / Access / Excel) verileri aktarabilir miyiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. KolayKantar MDB & Veri Aktarım Sihirbazı sayesinde geçmiş kantar yazılımlarınızın veritabanı dosyalarını (.mdb, Access, DBF, Excel) 500 MB'a kadar sıfır veri kaybıyla yeni sisteme aktarabilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "İnternet kesildiğinde tartım almaya devam edebilir miyiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. KolayKantar'ın yerel masaüstü istemcisi tüm verileri yerel SQLite veritabanında tutar. İnternet kopsa dahi tartım alınır ve fiş basılır; bağlantı sağlandığında buluta otomatik eşitlenir."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi kantar indikatörleri ve markaları ile uyumludur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tunahan, Baykon, Esit, Dini Argeo, Keli, Yaohua, Sartorius ve standart RS232 / USB / TCP-IP protokolü kullanan tüm kantar indikatör modelleriyle %100 uyumludur."
        }
      },
      {
        "@type": "Question",
        "name": "Tek kantardan farklı şirketler adına fiş ve irsaliye kesilebilir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. 'Kaynak Firma (SellerEntity)' mimarisi sayesinde aynı tartım istasyonundan birden fazla grup şirketi veya tüzel kişilik adına ayrı fiş şablonu, logo ve irsaliye serisi ile işlem yapılabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Hastaneler için tıbbi atık tartımı ve HBYS entegrasyonu nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KolayKantar Sağlık Kokpiti; poliklinik ve servis bazlı tıbbi atık tartımlarını doğrudan barkodlu termal yazıcıya (50x55 mm) iletir. Ulusal atık kodları (EWC) ve resmi teslim tutanakları eksiksiz üretilir."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
