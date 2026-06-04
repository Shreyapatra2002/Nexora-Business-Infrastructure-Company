import Image from "next/image";
import Link from "next/link";
import { verticalCards } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function VerticalsSection() {
  return (
    <section className="border-t border-white/5 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Verticals"
            title={
              <>
                Specialist <span className="text-gradient-gold">divisions</span>
              </>
            }
            subtitle="Four pillars delivering structure, brand elevation, experiences, and technology."
          />
          <Button href="/verticals" variant="outline" className="shrink-0">
            View all verticals
          </Button>
        </div>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {verticalCards.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-sm border border-white/10 bg-nexora-charcoal">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nexora-black via-nexora-black/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="font-display text-2xl text-white">{v.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                      {v.short}
                    </p>
                    <Link
                      href={v.href}
                      className="mt-6 inline-flex items-center text-sm font-medium text-nexora-gold hover:text-nexora-gold-light"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
