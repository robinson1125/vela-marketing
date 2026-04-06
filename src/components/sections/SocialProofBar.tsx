"use client";

import AnimateIn from "@/components/ui/AnimateIn";

const CLINIC_TYPES = [
  "Medical Aesthetics",
  "Wellness Spa",
  "Hormone Clinic",
  "Skin Care Studio",
  "Medspa",
  "Anti-Aging Center",
  "Cosmetic Dermatology",
  "IV Therapy Lounge",
  "Body Contouring",
  "Laser Clinic",
];

export default function SocialProofBar() {
  return (
    <section className="bg-surface-alt py-8 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <AnimateIn>
          <p className="text-center text-sm text-muted-light mb-5">
            Replacing RepeatMD at clinics across the country
          </p>
        </AnimateIn>

        {/* Scrolling row */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3 animate-scroll">
            {[...CLINIC_TYPES, ...CLINIC_TYPES].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="shrink-0 px-5 py-2.5 rounded-full bg-white border border-border text-sm font-medium text-muted whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
