import type { Metadata } from "next";
import LeadCapture from "@/components/sections/LeadCapture";

export const metadata: Metadata = {
  title: "Med Spa Flash Sale Software | Vela Reward",
  description:
    "Fill your schedule on slow days with flash sales. Launch a sale from your phone in under two minutes. Countdown timers, push notifications, real-time redemption tracking. Flat pricing from $149/mo.",
  alternates: { canonical: "https://velareward.com/features/flash-sales" },
};

export default function FlashSalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Flash Sales
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight text-dark mb-6">
            Fill your schedule on slow days with one tap
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Launch a flash sale from your phone in under two minutes. Set the discount,
            the duration, and the audience. A push notification hits every eligible
            patient and redemptions roll in real time.
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
            How flash sales work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Create the sale",
                body: "Pick the treatments or products, set the discount percentage, choose a duration, and select which patient segments should see it.",
              },
              {
                step: "2",
                title: "Push it live",
                body: "One tap sends a push notification to every eligible patient. A countdown timer creates urgency and drives immediate action.",
              },
              {
                step: "3",
                title: "Watch it fill up",
                body: "Track redemptions, revenue, and remaining inventory in real time from your admin dashboard or your phone.",
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
            Why clinics love flash sales
          </h2>
          <ul className="space-y-4">
            {[
              "Launch a sale from your phone in under two minutes — no computer required",
              "Countdown timers create urgency and drive immediate purchases",
              "Push notifications reach every eligible patient instantly",
              "Target specific patient segments — new patients, lapsed patients, VIP members",
              "Set inventory limits to control how many redemptions you accept",
              "Real-time dashboard shows redemptions, revenue, and remaining capacity",
              "Patients purchase instantly in-app with their card on file",
              "Flash sale redemptions sync to GoHighLevel with tags and notes",
              "Turn slow Tuesdays into your busiest days of the week",
              "Available on Growth and Pro plans — included at no extra cost",
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
