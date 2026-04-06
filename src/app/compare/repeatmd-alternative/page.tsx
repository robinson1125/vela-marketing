import type { Metadata } from "next";
import ComparisonSection from "@/components/sections/ComparisonSection";
import LeadCapture from "@/components/sections/LeadCapture";

export const metadata: Metadata = {
  title: "RepeatMD Alternative for Medical Aesthetics | Vela Reward",
  description:
    "Looking for a RepeatMD alternative? Vela Reward offers flat pricing from $149/mo, zero revenue sharing, full white-label branding, flash sales, QR checkout, and GHL integration. Start free for 30 days.",
  alternates: { canonical: "https://velareward.com/compare/repeatmd-alternative" },
};

export default function RepeatMDAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            RepeatMD Alternative
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight text-dark mb-6">
            The best RepeatMD alternative for medical aesthetics clinics
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Stop sharing your revenue with your loyalty platform. Vela Reward gives you
            everything RepeatMD offers — and more — for a flat monthly fee with zero
            percentage cuts.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-lg transition-colors shadow-md"
          >
            Start your free 30-day trial
          </a>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-14">
            Why clinics are switching from RepeatMD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "No revenue sharing — ever",
                body: "RepeatMD takes a percentage of every sale processed through their platform. Vela Reward charges a flat monthly fee. Every dollar your patients spend belongs to you.",
              },
              {
                title: "Full white-label branding",
                body: "Your logo, your colors, your messaging. Patients see your clinic — not Vela. RepeatMD forces their branding into the patient experience.",
              },
              {
                title: "Flat pricing from $149/mo",
                body: "Starter starts at $149/mo. Growth at $299/mo. Pro at $499/mo. No surprises, no transaction fees, no hidden costs. All plans include a 30-day free trial.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-border rounded-2xl p-7"
              >
                <h3 className="text-lg font-bold text-dark mb-3">{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Reasons */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-10">
            What you get with Vela Reward
          </h2>
          <ul className="space-y-4">
            {[
              "Full loyalty engine with points on every dollar — not just visits",
              "Flash sales with countdown timers and push notifications",
              "QR wallet checkout with Apple Pay support",
              "Membership tiers with real benefits and rollover credits",
              "Treatment packages sold as prepaid voucher wallets",
              "Deep GoHighLevel integration — contacts, tags, and workflows sync automatically",
              "Physical retail store and product subscriptions",
              "NPS surveys with instant alerts",
              "Challenges, badges, and gamification to keep patients engaged",
              "CSV patient import to make switching painless",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-base text-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonSection />

      {/* Lead Capture */}
      <LeadCapture />
    </>
  );
}
