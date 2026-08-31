import { HeroSection } from "@/components/landing/hero-section";
import { HybridArchitecture } from "@/components/landing/hybrid-architecture";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { CustomerPortalShowcase } from "@/components/landing/customer-portal-showcase";
import { IndustrySolutions } from "@/components/landing/industry-solutions";
import { RoiCalculator } from "@/components/landing/roi-calculator";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { ContactDemoForm } from "@/components/landing/contact-demo-form";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HybridArchitecture />
      <FeaturesGrid />
      <CustomerPortalShowcase />
      <IndustrySolutions />
      <RoiCalculator />
      <PricingSection />
      <FaqSection />
      <ContactDemoForm />
    </div>
  );
}
