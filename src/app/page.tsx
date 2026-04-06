import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import PricingSection from "@/components/sections/PricingSection";
import LeadCapture from "@/components/sections/LeadCapture";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <FeaturesSection />
      <ComparisonSection />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <LeadCapture />
    </main>
  );
}
