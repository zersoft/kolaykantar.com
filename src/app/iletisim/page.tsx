import type { Metadata } from "next";
import { ContactDemoForm } from "@/components/landing/contact-demo-form";

export const metadata: Metadata = {
  title: "İletişim & Ücretsiz Canlı Demo Talebi | KolayKantar ERP",
  description:
    "KolayKantar kantar otomasyonu için ücretsiz canlı demo ve fiyat teklifi alın. Telefon: +90 (555) 587 93 70, E-posta: info@kolaykantar.com, Nilüfer / Bursa.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactDemoForm />
    </div>
  );
}
