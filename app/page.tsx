import { HeroSection } from "@/components/sections/hero-section";
import { IdentificationSection } from "@/components/sections/identification-section";
import { GuiltBreakSection } from "@/components/sections/guilt-break-section";
import { TreatmentSection } from "@/components/sections/treatment-section";
import { ResultsSection } from "@/components/sections/results-section";
import { SafetySection } from "@/components/sections/safety-section";
import { ProfessionalSection } from "@/components/sections/professional-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function CriolipoliseLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IdentificationSection />
      <GuiltBreakSection />
      <TreatmentSection />
      <ResultsSection />
      <TestimonialsSection />
      <SafetySection />
      <ProfessionalSection />
      <CTASection />
      <Footer />
    </main>
  );
}
