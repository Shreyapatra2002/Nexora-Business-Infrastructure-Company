import Image from "next/image";
import { saasProducts } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function SaasSection() {
  return (
    <section className="border-t border-white/5 bg-nexora-charcoal py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="SaaS"
            title={
              <>
                Software that <span className="text-gradient-gold">executes</span>
              </>
            }
            subtitle="Dashboards, CRM, and acquisition systems engineered for operational clarity."
          />
          <Button href="/saas" variant="outline" className="shrink-0">
            SaaS overview
          </Button>
        </div>

        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          {saasProducts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-nexora-black">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nexora-black via-nexora-black/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-xl text-nexora-gold-light">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{p.short}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/35">
                    Dashboard access — coming soon
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
