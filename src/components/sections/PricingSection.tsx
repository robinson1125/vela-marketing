"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const PLANS = [
  {
    key: "starter",
    name: "Starter",
    subtitle: "Perfect for growing clinics under 500 patients",
    monthly: 149,
    annual: 124,
    features: [
      "Up to 500 patients",
      "Full loyalty and points engine",
      "Membership tiers (up to 2)",
      "Treatment packages (up to 3)",
      "QR wallet checkout",
      "Gift cards",
      "GHL integration",
      "Disputes management",
      "Email support",
    ],
    cta: "Start free trial",
    ctaLink: "#lead-form",
    highlighted: false,
  },
  {
    key: "growth",
    name: "Growth",
    subtitle: "For established clinics ready to grow fast",
    monthly: 299,
    annual: 249,
    features: [
      "Up to 2,500 patients",
      "Everything in Starter, plus:",
      "Flash sales engine",
      "SMS campaigns",
      "Physical retail store",
      "Product subscriptions",
      "NPS surveys",
      "Challenges and badges",
      "Membership tiers (up to 5)",
      "Treatment packages (up to 10)",
      "Priority support",
    ],
    cta: "Start free trial",
    ctaLink: "#lead-form",
    highlighted: true,
  },
  {
    key: "pro",
    name: "Pro",
    subtitle: "For high-volume clinics and multi-location practices",
    monthly: 499,
    annual: 416,
    features: [
      "Unlimited patients",
      "Everything in Growth, plus:",
      "AI treatment recommendations",
      "Multiple locations",
      "Unlimited membership tiers",
      "Unlimited packages",
      "White label domain",
      "Dedicated onboarding call",
      "Phone support",
    ],
    cta: "Talk to us",
    ctaLink: "#lead-form",
    highlighted: false,
  },
];

const FAQS = [
  {
    q: "Is there really no revenue sharing?",
    a: "Yes. We charge a flat monthly fee and nothing else. Every dollar your patients spend belongs to your clinic. No percentages, no transaction fees, no hidden costs.",
  },
  {
    q: "What happens after my trial ends?",
    a: "You choose a plan and enter payment details. If you do not upgrade, your account is paused but your data is never deleted. You can reactivate anytime.",
  },
  {
    q: "Can I switch plans?",
    a: "Yes, upgrade or downgrade anytime. Changes take effect at your next billing date. No penalties or lock-in contracts.",
  },
  {
    q: "Do my patients need to download a new app?",
    a: "Yes, they download the Vela Reward app from the App Store or Google Play. Your clinic branding appears the moment they join using your unique clinic code.",
  },
  {
    q: "Can I import my patients from RepeatMD?",
    a: "We provide a CSV import tool that brings your patient list into Vela Reward. Loyalty history cannot be transferred, but you can grant existing patients a welcome bonus to ease the transition.",
  },
  {
    q: "What if I need help setting up?",
    a: "Every plan includes email support and a setup guide. Growth and Pro include priority support. Pro includes a dedicated onboarding call with our team.",
  },
  {
    q: "Is my patient data secure?",
    a: "Yes. All data is encrypted at rest and in transit. We follow HIPAA compliance standards and sign Business Associate Agreements with all plans.",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight text-dark mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            No percentage of your sales. Ever. Just a flat monthly fee that gets cheaper as you grow.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-border rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-primary text-white" : "text-muted hover:text-dark"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${annual ? "bg-primary text-white" : "text-muted hover:text-dark"}`}
            >
              Annual <span className="text-xs opacity-80">save 2 months</span>
            </button>
          </div>
        </AnimateIn>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PLANS.map((plan, i) => (
            <AnimateIn key={plan.key} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-7 h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-white border-2 border-primary shadow-lg"
                    : "bg-white border border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-dark">{plan.name}</h3>
                  <p className="text-sm text-muted mt-1">{plan.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-dark">
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-base text-muted">/mo</span>
                  {annual && (
                    <span className="ml-2 text-xs font-medium text-primary bg-primary-50 px-2 py-0.5 rounded-full">
                      Save ${(plan.monthly - plan.annual) * 12}/yr
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => {
                    const isHeader = f.includes("Everything in");
                    return (
                      <li key={f} className="flex items-start gap-2.5">
                        {!isHeader && <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />}
                        <span className={`text-sm ${isHeader ? "font-semibold text-dark" : "text-muted"}`}>
                          {f}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={plan.ctaLink}
                  className={`block text-center py-3.5 rounded-lg text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary-light text-white shadow-md"
                      : "bg-surface hover:bg-surface-alt text-dark border border-border"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trial note */}
        <AnimateIn className="text-center mb-16">
          <p className="text-sm text-muted">
            All plans include a <strong className="text-dark">30-day free trial</strong>. No credit card required.
          </p>
        </AnimateIn>

        {/* FAQ */}
        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-dark text-center mb-8">Frequently asked questions</h3>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center justify-between w-full px-6 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-dark pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
