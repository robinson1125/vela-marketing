import type { Metadata } from "next";
import JoinClient from "./JoinClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Join ${slug} | Vela Reward`,
    description: `Download the app and start earning rewards on every visit.`,
  };
}

export default async function JoinPage({ params }: PageProps) {
  const { slug } = await params;
  return <JoinClient slug={slug} />;
}
