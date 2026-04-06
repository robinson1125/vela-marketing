"use client";

import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
import AnimateIn from "@/components/ui/AnimateIn";

interface FormState {
  clinic_name: string;
  owner_name: string;
  email: string;
  phone: string;
  current_software: string;
  clinic_size: string;
  plan_interest: string;
}

const DEFAULT_FORM: FormState = {
  clinic_name: "",
  owner_name: "",
  email: "",
  phone: "",
  current_software: "",
  clinic_size: "",
  plan_interest: "",
};

export default function LeadCapture() {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    });
  }, []);

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.clinic_name.trim() || !form.owner_name.trim() || !form.email.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        clinic_name: form.clinic_name.trim(),
        owner_name: form.owner_name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone || null,
        current_software: form.current_software || null,
        clinic_size: form.clinic_size || null,
        plan_interest: form.plan_interest || null,
        source: "lead-form",
        ...utmParams,
      });

      if (error) {
        if (error.code === "23505") {
          toast.error("This email has already been submitted. We will be in touch!");
        } else {
          throw error;
        }
      } else {
        setSubmitted(true);
        toast.success("Thank you! We will be in touch soon.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <section id="lead-form" className="py-20 lg:py-28 bg-primary-dark">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <AnimateIn>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">&#10003;</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              We have received your information
            </h2>
            <p className="text-lg text-white/70 mb-6">
              We will be in touch within 1 business day. In the meantime, explore the platform.
            </p>
            <a
              href="https://app.velareward.com"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary-dark text-base font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Explore the dashboard
            </a>
          </AnimateIn>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-5">
        <AnimateIn className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Ready to stop sharing your revenue?
          </h2>
          <p className="text-lg text-primary-100/70 max-w-2xl mx-auto">
            Join the growing number of clinics that switched from RepeatMD to Vela Reward.
            Start your free 30-day trial today — no credit card required.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  Clinic Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.clinic_name}
                  onChange={(e) => update("clinic_name", e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm py-2.5 focus:border-primary focus:ring-primary"
                  placeholder="e.g. Radiant Skin Clinic"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.owner_name}
                  onChange={(e) => update("owner_name", e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm py-2.5 focus:border-primary focus:ring-primary"
                  placeholder="Full name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm py-2.5 focus:border-primary focus:ring-primary"
                  placeholder="you@yourclinic.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm py-2.5 focus:border-primary focus:ring-primary"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  Current Software
                </label>
                <select
                  value={form.current_software}
                  onChange={(e) => update("current_software", e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm py-2.5 focus:border-primary focus:ring-primary"
                >
                  <option value="">Select...</option>
                  <option value="repeatmd">RepeatMD</option>
                  <option value="mindbody">Mindbody</option>
                  <option value="other">Other</option>
                  <option value="nothing">Nothing currently</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  How many patients?
                </label>
                <select
                  value={form.clinic_size}
                  onChange={(e) => update("clinic_size", e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm py-2.5 focus:border-primary focus:ring-primary"
                >
                  <option value="">Select...</option>
                  <option value="under_500">Under 500</option>
                  <option value="500_to_2000">500 - 2,000</option>
                  <option value="over_2000">Over 2,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  Plan interest
                </label>
                <select
                  value={form.plan_interest}
                  onChange={(e) => update("plan_interest", e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm py-2.5 focus:border-primary focus:ring-primary"
                >
                  <option value="">Select...</option>
                  <option value="starter">Starter — $149/mo</option>
                  <option value="growth">Growth — $299/mo</option>
                  <option value="pro">Pro — $499/mo</option>
                  <option value="not_sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-primary hover:bg-primary-light text-white text-base font-bold rounded-lg transition-colors disabled:opacity-50 shadow-md"
            >
              {submitting ? "Submitting..." : "Start my free trial"}
            </button>

            <div className="flex items-center justify-center gap-2 mt-4">
              <Shield className="w-3.5 h-3.5 text-muted-light" />
              <p className="text-xs text-muted-light">
                No credit card required. We respect your privacy and will never share your information.
              </p>
            </div>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
