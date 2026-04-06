"use client";

import { DollarSign, Smartphone, Lock } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const PAIN_POINTS = [
  {
    icon: DollarSign,
    title: "Revenue sharing that never stops",
    body: "RepeatMD charges $740/month plus a percentage of every transaction. As your clinic grows, their cut grows with it. You are penalized for your own success.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "Your brand, their platform",
    body: "Your patients download an app that looks and feels like RepeatMD, not your clinic. Your brand identity disappears behind someone else's logo and design.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Lock,
    title: "Features you pay for but cannot customize",
    body: "Loyalty rates, tier names, reward structures, home screen layout — all locked to their defaults. You pay premium prices for a one-size-fits-all experience.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight text-dark mb-4">
            Still paying RepeatMD a percentage of every sale?
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            You built your clinic. You earned those patients.
            Why are you sharing your revenue with a software company?
          </p>
        </AnimateIn>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PAIN_POINTS.map((point, i) => (
            <AnimateIn key={point.title} delay={i * 0.12}>
              <div className="bg-surface rounded-2xl p-7 h-full border border-border hover:border-border/80 hover:shadow-md transition-all duration-200">
                <div className={`w-12 h-12 rounded-xl ${point.iconBg} flex items-center justify-center mb-5`}>
                  <point.icon className={`w-5 h-5 ${point.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{point.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{point.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Callout box */}
        <AnimateIn delay={0.1}>
          <div className="bg-primary-dark rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug max-w-3xl mx-auto mb-3">
              The average clinic on RepeatMD pays over <span className="text-accent-light">$8,880 per year</span> in
              platform fees alone — before revenue sharing.
            </p>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
              That is enough to pay for Vela Reward&apos;s Growth plan for over two years — with no percentage
              of your sales taken. Ever.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
