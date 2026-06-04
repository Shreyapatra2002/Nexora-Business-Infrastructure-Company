import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected Nexora engagements — structure, growth, and technology outcomes.",
};

const placeholders = [
  {
    title: "MSME governance & CRM rollout",
    sector: "Manufacturing SME",
    summary:
      "Governance framework, SOP library, and Yugabyte CRM deployment with KPI dashboards for plant and sales leadership.",
  },
  {
    title: "Regional college brand lift",
    sector: "Private college",
    summary:
      "Zivara-led positioning, PR cadence, and Bengal Aura content systems for admissions and parent trust.",
  },
  {
    title: "Hospitality launch series",
    sector: "Restaurant group",
    summary:
      "BeautyGlam experiential launches paired with funnel analytics and Einstein-style reporting for cohort performance.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Representative narratives — anonymized where required. Full write-ups available under NDA during engagement."
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {placeholders.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-sm border border-nexora-gold/20 bg-nexora-charcoal/60 p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexora-gold">
                  {c.sector}
                </p>
                <h2 className="mt-4 font-display text-xl text-white">{c.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">{c.summary}</p>
                <Button href="/contact" variant="ghost" className="mt-8 !px-0">
                  Request full brief
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
