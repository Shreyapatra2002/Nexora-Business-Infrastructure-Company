import Image from "next/image";
import { industries } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function IndustriesSection() {
  return (
    <section className="border-t border-white/5 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                Built for <span className="text-gradient-gold">real sectors</span>
              </>
            }
            subtitle="From education and healthcare to retail, manufacturing, and high-growth MSMEs."
          />
          <Button href="/industries" variant="outline" className="shrink-0">
            Full industries list
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.04}>
              <div className="group relative aspect-square overflow-hidden rounded-sm border border-white/10">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexora-black via-nexora-black/55 to-nexora-black/20" />
                <p className="absolute inset-x-0 bottom-0 p-3 text-center font-display text-xs text-nexora-gold-light sm:text-sm">
                  {ind.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
