"use client";

import { Check, X } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

interface Row {
  feature: string;
  others: string | boolean;
  vela: string | boolean;
}

const ROWS: Row[] = [
  { feature: "Monthly fee", others: "$400-740+/mo", vela: "From $149/mo" },
  { feature: "Revenue sharing", others: "Often a % of every sale", vela: "Never — $0" },
  { feature: "White label branding", others: "Partial", vela: "Full — your brand" },
  { feature: "Flash sales with countdown", others: "Basic offers only", vela: "Full engine with push" },
  { feature: "QR wallet checkout", others: false, vela: "Yes — Apple Pay too" },
  { feature: "Challenges and streaks", others: false, vela: "Full gamification" },
  { feature: "GoHighLevel integration", others: false, vela: "Deep native sync" },
  { feature: "Physical retail store", others: "Limited", vela: "Full e-commerce" },
  { feature: "Product subscriptions", others: false, vela: "Subscribe and save" },
  { feature: "NPS surveys", others: false, vela: "With instant alerts" },
  { feature: "Membership tiers", others: "Basic", vela: "Fully customizable" },
  { feature: "Treatment packages", others: false, vela: "With voucher wallet" },
  { feature: "SMS campaigns", others: true, vela: true },
  { feature: "Gift cards", others: true, vela: true },
  { feature: "AI recommendations", others: "Add-on fee", vela: "Included in Pro" },
  { feature: "Free trial", others: false, vela: "30 days free" },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-gray-300 mx-auto" />;
  return <span>{value}</span>;
}

export default function ComparisonSection() {
  return (
    <section id="compare" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight text-dark mb-4">
            How Vela Reward compares
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            We built this platform because we were a clinic owner who needed something better.
            We know exactly what was missing.
          </p>
        </AnimateIn>

        {/* Table */}
        <AnimateIn delay={0.1}>
          <div className="border border-border rounded-2xl overflow-hidden shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-surface-alt">
              <div className="px-5 py-4 text-sm font-semibold text-muted">Feature</div>
              <div className="px-5 py-4 text-sm font-semibold text-muted text-center border-x border-border">Other Platforms</div>
              <div className="px-5 py-4 text-sm font-semibold text-white text-center bg-primary rounded-tr-2xl">Vela Reward</div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-surface"} ${i < ROWS.length - 1 ? "border-b border-border/50" : ""}`}
              >
                <div className="px-5 py-3.5 text-sm font-medium text-dark">{row.feature}</div>
                <div className="px-5 py-3.5 text-sm text-muted text-center border-x border-border/50">
                  <CellValue value={row.others} />
                </div>
                <div className="px-5 py-3.5 text-sm text-dark font-medium text-center bg-primary-50/40">
                  <CellValue value={row.vela} />
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn delay={0.15} className="text-center mt-10">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-light text-white text-base font-semibold rounded-lg transition-colors shadow-md"
          >
            Get started in under 30 minutes
          </a>
          <p className="text-sm text-muted mt-3">
            Our onboarding wizard gets your clinic configured and your first product live in 7 steps
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
