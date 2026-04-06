"use client";

import { Star, DollarSign, Clock, Sparkles } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight text-dark mb-4">
            Built by a clinic owner, for clinic owners
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Vela Reward exists because one clinic got tired of overpaying.
          </p>
        </AnimateIn>

        {/* Testimonial */}
        <AnimateIn delay={0.1}>
          <div className="bg-surface rounded-2xl border border-border p-8 sm:p-10 max-w-3xl mx-auto mb-14">
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl text-dark leading-relaxed mb-6">
              &ldquo;I was paying RepeatMD over $740 a month plus a percentage of every sale.
              I built Vela Reward because I wanted everything they had without giving away
              my revenue. Now my patients have a better app and I keep 100% of what I earn.&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div>
                <p className="font-semibold text-dark">Robbie Robinson</p>
                <p className="text-sm text-muted">Owner, Prosper Health and Wellness — Sioux City, Iowa</p>
                <p className="text-xs text-primary font-medium mt-0.5">Founder, Vela Reward</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Results bar */}
        <AnimateIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: DollarSign, value: "$0", label: "in revenue sharing", sub: "Keep every dollar you earn", color: "text-primary", bg: "bg-primary-50" },
              { icon: Clock, value: "30 days", label: "free trial", sub: "No credit card required to start", color: "text-accent-dark", bg: "bg-amber-50" },
              { icon: Sparkles, value: "7 steps", label: "to launch", sub: "From signup to patient-ready", color: "text-purple-600", bg: "bg-purple-50" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface rounded-2xl border border-border p-6 text-center">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm font-semibold text-dark mt-1">{stat.label}</p>
                <p className="text-xs text-muted mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
