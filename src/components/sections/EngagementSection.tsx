import { engagementModels } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function EngagementSection() {
  return (
    <section className="border-t border-white/5 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Engagement"
            title={
              <>
                Models that <span className="text-gradient-gold">fit</span> your stage
              </>
            }
            subtitle="From advisory sprints to retainers, projects, SaaS, payroll, and growth partnerships."
          />
          <Button href="/engagement" variant="outline" className="shrink-0">
            Compare models
          </Button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.model} delay={i * 0.05}>
              <div className="h-full rounded-sm border border-nexora-gold/25 bg-gradient-to-br from-nexora-charcoal to-nexora-black p-8 transition hover:border-nexora-gold/50">
                <p className="font-display text-xl text-nexora-gold-light">{m.model}</p>
                <p className="mt-3 text-sm text-white/65">{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
