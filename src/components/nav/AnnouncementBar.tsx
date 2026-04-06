"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/config";

const STORAGE_KEY = "vela-announcement-dismissed";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  if (!ANNOUNCEMENT.enabled || dismissed) return null;

  function dismiss() {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, "true");
  }

  return (
    <div className="bg-primary text-white text-sm py-2 px-4 flex items-center justify-center relative">
      <a href={ANNOUNCEMENT.link} className="hover:underline">
        {ANNOUNCEMENT.emoji} {ANNOUNCEMENT.text}
      </a>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
