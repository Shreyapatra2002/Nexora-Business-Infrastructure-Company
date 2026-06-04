import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog / Media / PR",
  description: "Insights, announcements, and media from Nexora Global.",
};

const posts = [
  {
    slug: "infrastructure-before-campaigns",
    title: "Why infrastructure must lead campaigns",
    date: "2025-01-12",
    excerpt: "Governance, data, and manpower as prerequisites for sustainable growth narratives.",
  },
  {
    slug: "kpi-layers-for-msmes",
    title: "KPI layers that MSME boards actually use",
    date: "2025-02-03",
    excerpt: "From operational cadence to leadership dashboards — a practical stack.",
  },
  {
    slug: "event-led-brand-lift",
    title: "Event-led brand lift without losing discipline",
    date: "2025-02-20",
    excerpt: "How BeautyGlam experiences tie back to funnel and reporting.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog / Media / PR"
        subtitle="Editorial, press, and field notes from Nexora verticals. Headless CMS and admin publishing — roadmap aligned."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <p className="max-w-2xl text-sm text-white/55">
            Static placeholders below; swap for CMS-driven routes when PostgreSQL and admin panel
            are connected.
          </p>
          <ul className="mt-12 space-y-6">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="border-b border-white/10 pb-8 last:border-0 last:pb-0"
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <time className="text-xs uppercase tracking-wider text-nexora-gold">{post.date}</time>
                  <h2 className="mt-2 font-display text-2xl text-white group-hover:text-nexora-gold-light">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm text-white/60">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
