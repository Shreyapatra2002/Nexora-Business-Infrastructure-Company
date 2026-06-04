import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

const articles: Record<string, { title: string; body: string[] }> = {
  "infrastructure-before-campaigns": {
    title: "Why infrastructure must lead campaigns",
    body: [
      "Campaigns amplify what already works. When CRM, payroll, KPIs, and governance are immature, media spend and creative volume compound noise instead of revenue.",
      "Nexora sequences structural readiness with Zivara and Yugabyte before scaling promotion through Bengal Aura and BeautyGlam.",
    ],
  },
  "kpi-layers-for-msmes": {
    title: "KPI layers that MSME boards actually use",
    body: [
      "Leaders need three horizons: operational cadence (weekly), managerial review (monthly), and strategic portfolio (quarterly).",
      "Einstein Analytics-style dashboards should mirror decision forums — not export spreadsheets nobody opens.",
    ],
  },
  "event-led-brand-lift": {
    title: "Event-led brand lift without losing discipline",
    body: [
      "High-energy experiences create memory — but only if acquisition and nurture paths are instrumented.",
      "Pair BeautyGlam activations with funnel telemetry and executive reporting to protect ROI narratives.",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) return { title: "Post" };
  return { title: a.title, description: a.body[0]?.slice(0, 155) };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) notFound();

  return (
    <article className="border-t border-white/5 pb-24 pt-28 lg:pt-32">
      <Container>
        <Link href="/blog" className="text-sm text-nexora-gold hover:text-nexora-gold-light">
          Back to blog
        </Link>
        <h1 className="mt-8 max-w-3xl font-display text-4xl text-white md:text-5xl">{a.title}</h1>
        <div className="prose prose-invert mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-white/70">
          {a.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
