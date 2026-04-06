import type { Metadata } from "next";
import LeadCapture from "@/components/sections/LeadCapture";

export const metadata: Metadata = {
  title: "Med Spa Loyalty Program Software | Vela Reward",
  description:
    "The loyalty program software built for medical aesthetics clinics. Points on every dollar, membership tiers, challenges, birthday bonuses, referral rewards, and gamification. Flat pricing from $149/mo.",
  alternates: { canonical: "https://velareward.com/features/loyalty-program" },
};

export default function LoyaltyProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Loyalty Engine
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight text-dark mb-6">
            The loyalty program your med spa patients will actually use
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Reward every dollar spent — not just visits. Give patients a reason to
            come back, spend more, and refer their friends with a loyalty engine
            designed specifically for medical aesthetics.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-lg transition-colors shadow-md"
          >
            Start your free 30-day trial
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-14">
            How the loyalty engine works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Patients earn points",
                body: "Every dollar spent earns points — purchases, subscriptions, retail, even referrals. Birthday bonuses and visit streaks add up automatically.",
              },
              {
                step: "2",
                title: "They redeem at checkout",
                body: "Patients apply points as credit toward any treatment or product. The app always prompts them to use available points and credit before charging their card.",
              },
              {
                step: "3",
                title: "They level up",
                body: "Customizable membership tiers unlock exclusive pricing, bonus point multipliers, free monthly treatments, and rollover credits as patients climb.",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="bg-white border border-border rounded-2xl p-7"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-primary">{card.step}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-10">
            Everything your loyalty program needs
          </h2>
          <ul className="space-y-4">
            {[
              "Points earned on every dollar — in-app purchases, in-clinic checkout, subscriptions, and retail",
              "Birthday bonuses awarded automatically on the patient's birthday",
              "Referral rewards — patients earn points when their friends sign up and make a purchase",
              "Visit streak bonuses that reward consistency and keep patients coming back",
              "Customizable membership tiers with exclusive perks and point multipliers",
              "Treatment packages sold as prepaid voucher wallets patients can redeem over time",
              "Challenges and badges that gamify the patient experience",
              "Points and credit always prompted at checkout before charging the card",
              "Full white-label branding — all loyalty terminology is configurable",
              "Admin dashboard to manage points, tiers, and rewards in real time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-base text-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lead Capture */}
      <LeadCapture />
    </>
  );
}
