import type { Metadata } from "next";
import LeadCapture from "@/components/sections/LeadCapture";

export const metadata: Metadata = {
  title: "GoHighLevel Med Spa Integration | Vela Reward",
  description:
    "Deep native GoHighLevel integration for medical aesthetics clinics. Every patient action — signups, purchases, memberships, flash sales — syncs to GHL with contacts, tags, and workflow triggers.",
  alternates: { canonical: "https://velareward.com/features/ghl-integration" },
};

export default function GHLIntegrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            GHL Integration
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight text-dark mb-6">
            Every patient action syncs to GoHighLevel automatically
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Stop copying data between systems. Vela Reward connects directly to your
            GoHighLevel CRM so every signup, purchase, membership change, and flash
            sale redemption triggers the right workflow without any manual effort.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-lg transition-colors shadow-md"
          >
            Start your free 30-day trial
          </a>
        </div>
      </section>

      {/* What Syncs */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-14">
            What syncs to GoHighLevel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Contact created",
                body: "When a new patient registers in the app, a GHL contact is created automatically with name, email, phone, and custom fields.",
              },
              {
                title: "Tags added",
                body: "Membership tier changes, flash sale redemptions, loyalty milestones, and more trigger GHL tags so your automations fire instantly.",
              },
              {
                title: "Workflows triggered",
                body: "New VIP member? Welcome sequence starts. Lapsed patient? Win-back workflow fires. Every patient action can trigger the right GHL workflow.",
              },
              {
                title: "Notes logged",
                body: "Purchases, point redemptions, and treatment completions are logged as notes on the GHL contact so your team has full context.",
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

      {/* Key Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark text-center mb-10">
            Why med spas love the GHL integration
          </h2>
          <ul className="space-y-4">
            {[
              "Zero manual data entry — patient data flows from Vela to GHL automatically",
              "Contacts created with full profile data including custom fields",
              "Tags applied based on real patient behavior — purchases, tiers, milestones",
              "GHL workflows triggered by in-app events — no Zapier or middleware needed",
              "Purchase notes logged on the contact record for complete visibility",
              "Flash sale redemptions tagged so you can follow up with targeted campaigns",
              "Membership upgrades and downgrades sync instantly with tag changes",
              "Works with your existing GHL workflows — no rebuild required",
              "Native integration included on all plans at no extra cost",
              "Connect with your Private Integration Token and Location ID in minutes",
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
