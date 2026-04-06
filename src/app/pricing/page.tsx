import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import LeadCapture from "@/components/sections/LeadCapture";

export const metadata: Metadata = {
  title: "Pricing — Simple, Honest Plans | Vela Reward",
  description:
    "Flat monthly pricing with zero revenue sharing. Starter at $149/mo, Growth at $299/mo, Pro at $499/mo. All plans include a 30-day free trial. No credit card required.",
  alternates: { canonical: "https://velareward.com/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <LeadCapture />
    </>
  );
}
