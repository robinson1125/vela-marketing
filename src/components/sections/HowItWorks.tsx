"use client";

import { UserPlus, Palette, Package, Send } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const STEPS = [
  {
    num: 1,
    icon: UserPlus,
    title: "Create your account",
    time: "2 minutes",
    description: "Enter your clinic name and email, choose your plan. No credit card required.",
    color: "bg-primary-50 text-primary border-primary/20",
  },
  {
    num: 2,
    icon: Palette,
    title: "Brand your app",
    time: "5 minutes",
    description: "Upload your logo, set your brand colors, write your welcome message for patients.",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    num: 3,
    icon: Package,
    title: "Add your treatments",
    time: "10 minutes",
    description: "Add your products and services, set prices, configure loyalty points and memberships.",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    num: 4,
    icon: Send,
    title: "Invite your patients",
    time: "5 minutes",
    description: "Share your unique join link or send the first SMS. Patients start earning rewards immediately.",
    color: "bg-teal-50 text-teal-600 border-teal-200",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight text-dark mb-4">
            From sign-up to patient-ready in 30 minutes
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            No developers. No IT team. Just you and a seven-step setup wizard.
          </p>
        </AnimateIn>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative mb-14">
          {/* Dashed connector line — desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-border z-0" />

          {STEPS.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                {/* Number circle */}
                <div className={`relative z-10 w-[68px] h-[68px] rounded-2xl border-2 ${step.color} flex items-center justify-center mb-5 shadow-sm bg-white`}>
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Time badge */}
                <span className="text-[11px] font-semibold text-muted-light bg-surface-alt px-3 py-1 rounded-full mb-3">
                  {step.time}
                </span>

                <h3 className="text-base font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-[240px]">{step.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn className="text-center">
          <p className="text-base text-muted mb-5">
            Your patients can start earning rewards the same day you sign up.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-light text-white text-base font-semibold rounded-lg transition-colors shadow-md"
          >
            Get started free
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
