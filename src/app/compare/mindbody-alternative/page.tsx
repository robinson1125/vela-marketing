import type { Metadata } from "next";
import LeadCapture from "@/components/sections/LeadCapture";

export const metadata: Metadata = {
  title: "Mindbody Alternative for Med Spas | Vela Reward",
  description:
    "Mindbody was not built for medical aesthetics. Vela Reward is. Purpose-built loyalty, flash sales, QR checkout, GHL integration, and flat pricing from $149/mo. No revenue sharing. Start free.",
  alternates: { canonical: "https://velareward.com/compare/mindbody-alternative" },
};

export default function MindbodyAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Mindbody Alternative
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight text-dark mb-6">
            The Mindbody alternative built for med spas
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Mindbody is a booking platform designed for yoga studios and gyms.
            Your medical aesthetics clinic deserves a platform built specifically for you.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-lg transition-colors shadow-md"
          >
            Start your free 30-day trial
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-14">
            Why Mindbody falls short for med spas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Complex UI your staff hates",
                body: "Mindbody was built for fitness studios. The interface is bloated, confusing, and requires hours of training. Vela Reward is intuitive from day one with a clean admin dashboard built for aesthetics workflows.",
              },
              {
                title: "Not built for medical aesthetics",
                body: "No loyalty engine, no flash sales, no treatment packages, no membership tiers designed for med spa patients. Mindbody treats you like a gym. Vela treats you like the premium clinic you are.",
              },
              {
                title: "Expensive for what you get",
                body: "Mindbody charges premium prices and adds transaction fees on top. Vela Reward starts at $149/mo with zero revenue sharing, zero transaction fees, and more features out of the box.",
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

      {/* What You Get */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-10">
            What Vela Reward gives you that Mindbody cannot
          </h2>
          <ul className="space-y-4">
            {[
              "Full loyalty and points engine designed for medical aesthetics patients",
              "Flash sales with countdown timers and real-time push notifications",
              "QR wallet checkout — patients pay in seconds with Apple Pay",
              "Customizable membership tiers with rollover credits and exclusive pricing",
              "Treatment packages sold as prepaid voucher wallets",
              "Deep GoHighLevel integration — every patient action syncs to your CRM",
              "Full white-label branding — patients see your clinic, not Vela",
              "Physical retail store with product subscriptions",
              "Challenges, badges, and streaks to keep patients coming back",
              "Flat pricing from $149/mo — no revenue sharing, no hidden fees",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-base text-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social Proof Callout */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-lg text-muted leading-relaxed">
            Vela Reward was built by a clinic owner who tried Mindbody and everything
            in between. We know what medical aesthetics clinics actually need because
            we are one.
          </p>
        </div>
      </section>

      {/* Lead Capture */}
      <LeadCapture />
    </>
  );
}
