"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const TRUST_BADGES = [
  "No revenue sharing",
  "Cancel anytime",
  "30-day free trial",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Subtle radial gradient */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_left,_rgba(26,92,58,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        {/* Left — copy */}
        <div className="flex-1 max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">The RepeatMD Alternative</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-dark mb-6"
          >
            The loyalty and commerce platform your patients will{" "}
            <span className="text-primary">actually use</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-xl"
          >
            Built for medical aesthetics clinics. No revenue sharing. No percentage of your sales.
            Just a flat monthly fee and a better app than anything else on the market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-light text-white text-base font-semibold rounded-lg transition-colors shadow-md"
            >
              Start your free 30-day trial
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-surface-alt text-dark text-base font-medium rounded-lg border border-border transition-colors"
            >
              See how it works <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-accent text-sm tracking-tight">★★★★★</div>
              <span className="text-sm text-muted">Rated 5/5 by clinic owners</span>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex justify-center relative max-w-md lg:max-w-lg"
        >
          {/* Phone frame */}
          <div className="relative">
            <div className="w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-dark rounded-[40px] p-3 shadow-lg">
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="bg-primary px-5 pt-10 pb-6">
                  <p className="text-white/70 text-xs font-medium">Welcome back, Sarah</p>
                  <p className="text-white text-lg font-bold mt-1">Radiant Skin Clinic</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="bg-white/20 rounded-lg px-3 py-1.5">
                      <p className="text-white text-[10px]">Points</p>
                      <p className="text-white text-sm font-bold">4,200</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-3 py-1.5">
                      <p className="text-white text-[10px]">Tier</p>
                      <p className="text-white text-sm font-bold">Gold</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-3 py-1.5">
                      <p className="text-white text-[10px]">Streak</p>
                      <p className="text-white text-sm font-bold">6</p>
                    </div>
                  </div>
                </div>

                {/* Flash sale card */}
                <div className="mx-4 -mt-3 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl p-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-[10px] font-medium">FLASH SALE</p>
                      <p className="text-white text-sm font-bold">30% Off Hydrafacial</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-2 py-1">
                      <p className="text-white text-xs font-bold font-mono">2:34:17</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 flex-1">
                  <p className="text-xs font-semibold text-gray-500">POPULAR TREATMENTS</p>
                  {[
                    { name: "Hydrafacial Signature", price: "$199", color: "bg-teal-50" },
                    { name: "Botox — Full Face", price: "$450", color: "bg-purple-50" },
                    { name: "Chemical Peel", price: "$149", color: "bg-amber-50" },
                  ].map((item) => (
                    <div key={item.name} className={`${item.color} rounded-xl p-3 flex items-center justify-between`}>
                      <div>
                        <p className="text-xs font-semibold text-gray-900">{item.name}</p>
                        <p className="text-[10px] text-gray-500">{item.price}</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-[10px]">+</div>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="border-t border-gray-100 px-6 py-2.5 flex justify-between">
                  {["Home", "Services", "Wallet", "Profile"].map((t) => (
                    <div key={t} className="text-center">
                      <div className="w-5 h-5 mx-auto rounded bg-gray-200 mb-0.5" />
                      <p className="text-[8px] text-gray-400">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card — flash sale stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-4 -left-12 sm:-left-16 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <div>
                <p className="text-xs font-semibold text-dark">Flash sale live</p>
                <p className="text-[10px] text-muted">47 redemptions in 2 hours</p>
              </div>
            </motion.div>

            {/* Floating card — new member */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 -right-8 sm:-right-14 bg-white rounded-xl shadow-lg border border-border px-4 py-3"
            >
              <p className="text-xs font-semibold text-dark">New member joined</p>
              <p className="text-[10px] text-primary font-medium">Gold tier unlocked ✦</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
