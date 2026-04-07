import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import JoinClient from "./JoinClient";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vjsrsxkjpeknstxyzpkm.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: clinic } = await supabase
    .from("clinics")
    .select("name, app_name")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  const name = clinic?.name || "Vela Reward";
  return {
    title: `Join ${name} | Vela Reward`,
    description: `Download the ${name} app and start earning rewards on every visit.`,
  };
}

export default async function JoinPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: clinic } = await supabase
    .from("clinics")
    .select("name, app_name, primary_color, secondary_color, logo_url, hero_headline, hero_subheadline")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (!clinic) {
    notFound();
  }

  return <JoinClient slug={slug} clinic={clinic} />;
}
