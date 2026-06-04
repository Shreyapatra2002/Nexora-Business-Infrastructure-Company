import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Eight-step Nexora delivery methodology from requirements to reporting.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Our Process"
        subtitle="A single thread from discovery to reporting — transparent phases, accountable owners, and measurable checkpoints."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-nexora-gold/35 md:block" />
            <ol className="space-y-0">
              {processSteps.map((step, i) => (
                <li key={step} className="relative flex gap-8 border-b border-white/5 py-10 first:pt-0 last:border-0">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-nexora-gold bg-nexora-black font-display text-sm text-nexora-gold">
                    {i + 1}
                  </div>
                  <div>
                    <h2 className="font-display text-xl text-white md:text-2xl">{step}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      Structured deliverables and sign-off criteria aligned to this phase. Nexora
                      vertical leads coordinate dependencies across growth, creative, events, and
                      technology.
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
