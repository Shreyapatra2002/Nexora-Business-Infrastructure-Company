import Image from "next/image";
import { heroImage } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-16 lg:pt-20">
      <Image
        src={heroImage}
        alt="Premium corporate workspace"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nexora-black via-nexora-black/85 to-nexora-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-nexora-black via-transparent to-nexora-black/40" />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24 lg:min-h-[calc(100svh-5rem)] lg:py-32">
        <p className="mb-6 max-w-xl text-xs font-semibold uppercase tracking-[0.35em] text-nexora-gold">
          Business Infrastructure
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Nexora builds, structures, promotes, and{" "}
          <span className="text-gradient-gold">scales businesses.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          Growth. PR. Technology. Manpower. Analytics. Promotion — Complete business
          infrastructure for SMEs &amp; MSMEs.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact">Book Consultation</Button>
          <Button href="/about" variant="outline">
            Explore Nexora
          </Button>
        </div>
      </Container>
    </section>
  );
}
