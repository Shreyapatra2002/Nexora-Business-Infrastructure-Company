import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { VerticalsSection } from "@/components/sections/VerticalsSection";
import { SaasSection } from "@/components/sections/SaasSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <VerticalsSection />
      <SaasSection />
      <IndustriesSection />
      <ProcessSection />
      <EngagementSection />
      <ContactSection />
    </>
  );
}
