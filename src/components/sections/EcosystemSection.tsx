import { ecosystem } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function EcosystemSection() {
  return (
    <section className="border-t border-white/5 bg-nexora-charcoal py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Ecosystem"
          title={
            <>
              The <span className="text-gradient-gold">Nexora</span> operating map
            </>
          }
          subtitle="One infrastructure layer — vertical specialists for growth, promotion, software, and intelligence."
          align="center"
        />
        <Reveal>
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-sm border border-nexora-gold/20 bg-nexora-gold/20 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((row) => (
              <a
                key={row.vertical}
                href={row.href}
                className="group cursor-pointer bg-nexora-black/90 p-8 transition hover:bg-nexora-black"
              >
                <p className="font-display text-lg text-nexora-gold-light">{row.vertical}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{row.role}</p>
                <div className="mt-6 h-px w-12 bg-gradient-gold opacity-40 transition group-hover:w-full group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
