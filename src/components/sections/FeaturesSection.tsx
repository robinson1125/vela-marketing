"use client";

import { Trophy, Zap, QrCode, CreditCard, RefreshCw, Palette } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

interface Feature {
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  phone: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    eyebrow: "Loyalty",
    title: "Earn points on every dollar — not just clinic visits",
    body: "RepeatMD only rewards patients when they visit. Vela Reward rewards every dollar spent — in the app, at checkout, on subscriptions. Plus bonus points for birthdays, referrals, and milestone achievements.",
    icon: Trophy,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    phone: (
      <PhoneMockup>
        <div className="bg-primary px-5 pt-8 pb-5">
          <p className="text-white/70 text-[10px]">YOUR REWARDS</p>
          <p className="text-white text-2xl font-bold mt-1">4,200 pts</p>
          <div className="mt-3 bg-white/15 rounded-lg p-2.5">
            <div className="flex justify-between text-[10px] text-white/70 mb-1"><span>Gold</span><span>Platinum — 5,000 pts</span></div>
            <div className="h-2 bg-white/20 rounded-full"><div className="h-2 bg-accent rounded-full" style={{ width: "84%" }} /></div>
          </div>
        </div>
        <div className="p-4 space-y-2.5">
          <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-xs font-bold">+</div>
            <div><p className="text-xs font-semibold text-gray-900">Purchase — Hydrafacial</p><p className="text-[10px] text-gray-500">+7,960 points earned</p></div>
            <span className="ml-auto text-xs font-bold text-green-600">+7,960</span>
          </div>
          <div className="flex items-center gap-3 bg-purple-50 rounded-xl p-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white text-xs font-bold">★</div>
            <div><p className="text-xs font-semibold text-gray-900">Birthday Bonus</p><p className="text-[10px] text-gray-500">Happy birthday, Sarah!</p></div>
            <span className="ml-auto text-xs font-bold text-purple-600">+250</span>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold">6</div>
            <div><p className="text-xs font-semibold text-gray-900">Visit Streak Bonus</p><p className="text-[10px] text-gray-500">6 months in a row!</p></div>
            <span className="ml-auto text-xs font-bold text-blue-600">+500</span>
          </div>
        </div>
      </PhoneMockup>
    ),
  },
  {
    eyebrow: "Flash Sales",
    title: "Fill your schedule on slow days with one tap",
    body: "Launch a flash sale from your phone in under two minutes. Set the discount, the duration, and the audience. Push notification goes to every eligible patient. Watch redemptions roll in real time.",
    icon: Zap,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    phone: (
      <PhoneMockup>
        <div className="bg-gradient-to-br from-orange-500 to-rose-500 px-5 pt-8 pb-6">
          <p className="text-white/80 text-[10px] font-medium">FLASH SALE LIVE</p>
          <p className="text-white text-xl font-bold mt-1">Summer Glow Sale</p>
          <p className="text-white/80 text-xs mt-0.5">30% off all facials</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
              <p className="text-white text-lg font-bold font-mono">2:34:17</p>
              <p className="text-white/60 text-[9px]">remaining</p>
            </div>
            <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
              <p className="text-white text-lg font-bold">47</p>
              <p className="text-white/60 text-[9px]">redeemed</p>
            </div>
            <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
              <p className="text-white text-lg font-bold">$4.2k</p>
              <p className="text-white/60 text-[9px]">revenue</p>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2.5">
          <p className="text-[10px] font-semibold text-gray-400">INCLUDED TREATMENTS</p>
          {["Hydrafacial Signature", "Chemical Peel", "LED Light Therapy"].map((t) => (
            <div key={t} className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
              <span className="text-xs font-medium text-gray-900">{t}</span>
              <span className="text-[10px] font-bold text-orange-500">30% OFF</span>
            </div>
          ))}
        </div>
      </PhoneMockup>
    ),
  },
  {
    eyebrow: "QR Checkout",
    title: "Patients pay with a QR code at your front desk",
    body: "No card fumbling. No POS terminal drama. Patients open the app, show the QR code, your staff scans it, and the card on file is charged instantly with points awarded automatically.",
    icon: QrCode,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    phone: (
      <PhoneMockup>
        <div className="px-5 pt-10 pb-4 text-center">
          <p className="text-gray-500 text-xs font-medium mb-4">SHOW THIS TO YOUR PROVIDER</p>
          <div className="w-44 h-44 mx-auto bg-gray-900 rounded-2xl p-3 mb-4">
            <div className="w-full h-full bg-white rounded-xl grid grid-cols-5 grid-rows-5 gap-0.5 p-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={`rounded-sm ${[0,1,4,5,6,9,10,14,15,16,19,20,21,24].includes(i) ? "bg-gray-900" : "bg-white"}`} />
              ))}
            </div>
          </div>
          <p className="text-lg font-bold text-gray-900">Sarah Johnson</p>
          <p className="text-xs text-gray-400 mt-0.5">Gold Member · 4,200 pts</p>
        </div>
        <div className="mx-5 bg-green-50 rounded-xl p-3 text-center">
          <p className="text-xs font-semibold text-green-700">Card on file: Visa ****4242</p>
          <p className="text-[10px] text-green-600 mt-0.5">Points awarded automatically on charge</p>
        </div>
      </PhoneMockup>
    ),
  },
  {
    eyebrow: "Memberships",
    title: "Predictable monthly revenue from memberships",
    body: "Create membership tiers with real benefits — free monthly treatments, exclusive pricing, bonus points, rollover credits. Patients pay monthly, you get predictable MRR. Add treatment packages for one-time prepaid bundles.",
    icon: CreditCard,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    phone: (
      <PhoneMockup>
        <div className="px-5 pt-8 pb-4">
          <p className="text-gray-400 text-[10px] font-semibold">MEMBERSHIP TIERS</p>
        </div>
        <div className="px-4 space-y-3 pb-4">
          {[
            { name: "Beauty Bank", price: "$49", color: "border-gray-300 bg-gray-50", badge: "bg-gray-200 text-gray-600", perks: ["10% off all treatments", "100 bonus pts/mo"] },
            { name: "VIP Gold", price: "$99", color: "border-amber-300 bg-amber-50", badge: "bg-amber-100 text-amber-700", perks: ["20% off all treatments", "1 free facial/mo", "2x points"] },
            { name: "Platinum Elite", price: "$199", color: "border-purple-300 bg-purple-50", badge: "bg-purple-100 text-purple-700", perks: ["30% off everything", "2 free treatments/mo", "3x points", "Free shipping"] },
          ].map((tier) => (
            <div key={tier.name} className={`rounded-xl border-2 ${tier.color} p-3.5`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tier.badge}`}>{tier.name}</span>
                <span className="text-sm font-bold text-gray-900">{tier.price}<span className="text-[10px] text-gray-400 font-normal">/mo</span></span>
              </div>
              {tier.perks.map((p) => (
                <p key={p} className="text-[10px] text-gray-600 py-0.5">&#10003; {p}</p>
              ))}
            </div>
          ))}
        </div>
      </PhoneMockup>
    ),
  },
  {
    eyebrow: "CRM Integration",
    title: "Every patient action syncs to your GHL CRM",
    body: "New patient registered? GHL contact created. Membership purchased? Tag added and workflow triggered. Flash sale redeemed? Note logged. Your GHL automations fire automatically based on real patient behavior.",
    icon: RefreshCw,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    phone: (
      <PhoneMockup>
        <div className="px-5 pt-8 pb-3">
          <p className="text-gray-400 text-[10px] font-semibold mb-3">LIVE SYNC FEED</p>
        </div>
        <div className="px-4 space-y-2 pb-4">
          {[
            { action: "Contact created", detail: "Sarah Johnson → GHL", time: "2m ago", color: "bg-green-50 text-green-600", dot: "bg-green-500" },
            { action: "Tag added", detail: "\"VIP Gold Member\"", time: "2m ago", color: "bg-blue-50 text-blue-600", dot: "bg-blue-500" },
            { action: "Workflow triggered", detail: "Welcome VIP sequence", time: "2m ago", color: "bg-purple-50 text-purple-600", dot: "bg-purple-500" },
            { action: "Note logged", detail: "Purchased Hydrafacial — $199", time: "5m ago", color: "bg-amber-50 text-amber-600", dot: "bg-amber-500" },
            { action: "Tag added", detail: "\"Flash Sale Redeemer\"", time: "1h ago", color: "bg-blue-50 text-blue-600", dot: "bg-blue-500" },
            { action: "Contact created", detail: "Mike Chen → GHL", time: "3h ago", color: "bg-green-50 text-green-600", dot: "bg-green-500" },
          ].map((item, i) => (
            <div key={i} className={`${item.color} rounded-xl p-3 flex items-center gap-3`}>
              <div className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-900">{item.action}</p>
                <p className="text-[10px] text-gray-500 truncate">{item.detail}</p>
              </div>
              <span className="text-[9px] text-gray-400 shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </PhoneMockup>
    ),
  },
  {
    eyebrow: "White Label",
    title: "Patients see your clinic. Not Vela.",
    body: "Upload your logo, set your brand colors, write your own headlines. The app looks and feels like your clinic built it. Vela Reward powers it invisibly in the background.",
    icon: Palette,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    phone: (
      <PhoneMockup>
        <div className="pt-6 px-4 pb-4">
          <p className="text-gray-400 text-[10px] font-semibold mb-3">SAME APP. YOUR BRAND.</p>
          <div className="grid grid-cols-2 gap-3">
            {/* Generic */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-600 h-14 flex items-center justify-center"><span className="text-white text-[10px] font-bold">Generic App</span></div>
              <div className="p-2 space-y-1.5">
                <div className="h-2 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
                <div className="h-6 bg-gray-200 rounded mt-2" />
              </div>
              <p className="text-[8px] text-center text-red-400 font-medium pb-2">RepeatMD branding</p>
            </div>
            {/* Branded */}
            <div className="rounded-xl border-2 border-primary overflow-hidden">
              <div className="bg-primary h-14 flex items-center justify-center"><span className="text-white text-[10px] font-bold">Radiant Skin</span></div>
              <div className="p-2 space-y-1.5">
                <div className="h-2 bg-primary/20 rounded w-3/4" />
                <div className="h-2 bg-primary/20 rounded w-1/2" />
                <div className="h-6 bg-primary/20 rounded mt-2" />
              </div>
              <p className="text-[8px] text-center text-primary font-bold pb-2">Your brand &#10003;</p>
            </div>
          </div>
        </div>
      </PhoneMockup>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The complete platform</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight text-dark mb-4">
            Everything RepeatMD has. Everything it doesn&apos;t.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Built from scratch by a clinic owner who was tired of paying for a platform
            that did not put their clinic first.
          </p>
        </AnimateIn>

        {/* Feature rows */}
        <div className="space-y-20 lg:space-y-28">
          {FEATURES.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
              >
                {/* Text */}
                <AnimateIn direction={isReversed ? "right" : "left"} delay={0.1} className="flex-1">
                  <div className="max-w-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-9 h-9 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
                        <feature.icon className={`w-4.5 h-4.5 ${feature.iconColor}`} />
                      </div>
                      <span className="text-xs font-semibold text-muted uppercase tracking-wider">{feature.eyebrow}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-dark leading-snug mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base text-muted leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </AnimateIn>

                {/* Phone */}
                <AnimateIn direction={isReversed ? "left" : "right"} delay={0.2} className="flex-1 flex justify-center">
                  {feature.phone}
                </AnimateIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Phone mockup wrapper ──
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[260px] sm:w-[280px] h-auto bg-dark rounded-[36px] p-2.5 shadow-lg">
      <div className="w-full bg-white rounded-[28px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
