"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#compare", label: "Compare" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b transition-shadow duration-200 ${
        scrolled ? "shadow-nav border-border" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="text-xl font-extrabold tracking-tight text-dark">Vela</span>
          <span className="text-xl font-extrabold tracking-tight text-primary">Reward</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.velareward.com/login"
            className="text-sm font-medium text-muted hover:text-dark transition-colors px-4 py-2"
          >
            Sign In
          </a>
          <a
            href="#lead-form"
            className="text-sm font-semibold text-white bg-primary hover:bg-primary-light px-5 py-2.5 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-dark"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 px-5 pt-6 pb-8 flex flex-col shadow-xl" style={{ backgroundColor: "#ffffff" }}>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-dark py-3 border-b border-border"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://app.velareward.com/login"
              className="text-center text-sm font-medium text-muted border border-border rounded-lg py-3 hover:bg-surface-alt transition-colors"
            >
              Sign In
            </a>
            <a
              href="#lead-form"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-semibold text-white bg-primary hover:bg-primary-light rounded-lg py-3 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
