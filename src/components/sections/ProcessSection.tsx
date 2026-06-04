import { processSteps } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessSection() {
  return (
    <section className="border-t border-white/5 bg-nexora-charcoal py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Method"
            title={
              <>
                Our <span className="text-gradient-gold">eight-step</span> process
              </>
            }
            subtitle="A disciplined arc from discovery to reporting — consulting rigor with delivery muscle."
          />
          <Button href="/process" variant="outline" className="shrink-0">
            Process detail
          </Button>
        </div>

        <Reveal>
          <div className="relative mx-auto mt-8 max-w-4xl">
            <div className="absolute left-[15px] top-0 hidden h-full w-px bg-gradient-to-b from-nexora-gold via-nexora-gold/40 to-transparent md:block" />
            <ol className="space-y-0">
              {processSteps.map((step, i) => (
                <li
                  key={step}
                  className="relative flex gap-6 border-b border-white/5 py-8 first:pt-0 last:border-0"
                >
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-nexora-gold/60 bg-nexora-black font-display text-sm text-nexora-gold">
                    {i + 1}
                  </div>
                  <div className="pt-0.5">
                    <p className="font-display text-lg text-white">{step}</p>
                    <p className="mt-2 text-sm text-white/50">
                      Phase {i + 1} of delivery — aligned milestones and ownership.
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
