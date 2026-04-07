"use client";

import { useEffect, useState } from "react";
import { Smartphone, Gift, Sparkles, Apple } from "lucide-react";

interface Clinic {
  name: string;
  app_name: string | null;
  primary_color: string | null;
  secondary_color: string | null;
  logo_url: string | null;
  hero_headline: string | null;
  hero_subheadline: string | null;
}

interface Props {
  slug: string;
  clinic: Clinic;
}

const APP_STORE_URL = "https://apps.apple.com/app/vela-reward/id0000000000";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.prosperhealth.app";

export default function JoinClient({ slug, clinic }: Props) {
  const [platform, setPlatform] = useState<"ios" | "android" | "other">("other");
  const primary = clinic.primary_color || "#8B5CF6";
  const secondary = clinic.secondary_color || "#FFFFFF";

  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) setPlatform("ios");
    else if (/Android/i.test(ua)) setPlatform("android");
  }, []);

  function openApp() {
    // Try the deep link — if app is installed it opens, otherwise nothing happens
    const deepLink = `velareward://join/${slug}`;
    window.location.href = deepLink;

    // After 1.5 seconds, if we are still here, send to the app store
    setTimeout(() => {
      if (platform === "ios") window.location.href = APP_STORE_URL;
      else if (platform === "android") window.location.href = PLAY_STORE_URL;
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: primary }}>
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-md mx-auto w-full text-center">
        {clinic.logo_url ? (
          <img src={clinic.logo_url} alt={clinic.name} className="w-24 h-24 rounded-2xl object-contain bg-white p-2 mb-6 shadow-lg" />
        ) : (
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: secondary }}>
            <Sparkles className="w-12 h-12" style={{ color: primary }} />
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: secondary }}>
          Welcome to {clinic.name}
        </h1>
        <p className="text-lg mb-10 opacity-90" style={{ color: secondary }}>
          {clinic.hero_subheadline || "Earn rewards every time you visit. Tap below to get the app and start earning."}
        </p>

        <button
          onClick={openApp}
          className="w-full py-4 rounded-2xl text-lg font-bold shadow-xl mb-4 flex items-center justify-center gap-2"
          style={{ backgroundColor: secondary, color: primary }}
        >
          <Smartphone className="w-5 h-5" /> Open the App
        </button>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <a
            href={APP_STORE_URL}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold"
            style={{ borderColor: secondary, color: secondary }}
          >
            <Apple className="w-4 h-4" /> App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold"
            style={{ borderColor: secondary, color: secondary }}
          >
            <Smartphone className="w-4 h-4" /> Google Play
          </a>
        </div>

        <div className="mt-10 space-y-3 text-left w-full">
          <Perk color={secondary} icon={<Gift className="w-4 h-4" style={{ color: primary }} />}>
            Earn points on every treatment and purchase
          </Perk>
          <Perk color={secondary} icon={<Sparkles className="w-4 h-4" style={{ color: primary }} />}>
            Exclusive flash sales and member pricing
          </Perk>
          <Perk color={secondary} icon={<Smartphone className="w-4 h-4" style={{ color: primary }} />}>
            Tap-to-pay checkout with Apple Pay
          </Perk>
        </div>
      </div>

      <div className="text-center pb-6 text-xs opacity-60" style={{ color: secondary }}>
        Powered by Vela Reward
      </div>
    </div>
  );
}

function Perk({ icon, children, color }: { icon: React.ReactNode; children: React.ReactNode; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <span className="text-sm" style={{ color }}>{children}</span>
    </div>
  );
}
