import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { engagementModels } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Engagement Model",
  description:
    "Consulting, retainer, project, SaaS, payroll, and growth partnership options with Nexora.",
};

export default function EngagementPage() {
  return (
    <>
      <PageHero
        title="Engagement Model"
        subtitle="Choose the commercial shape that matches your stage — from advisory sprints to embedded retainers and revenue-aligned partnerships."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((m) => (
              <div
                key={m.model}
                className="rounded-sm border border-white/10 bg-nexora-charcoal p-8 transition hover:border-nexora-gold/35"
              >
                <h2 className="font-display text-2xl text-nexora-gold-light">{m.model}</h2>
                <p className="mt-4 text-sm text-white/65">{m.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button href="/contact">Propose an engagement</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
