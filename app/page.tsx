import { HeroSection } from "@/components/hero-section";
import { ServiceIntro } from "@/components/service-intro";
import { ReportPreview } from "@/components/report-preview";
import { UsageScenarios } from "@/components/usage-scenarios";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e3d8]">
      <HeroSection />
      <ServiceIntro />
      <ReportPreview />
      <UsageScenarios />
      <Footer />
    </main>
  );
}
