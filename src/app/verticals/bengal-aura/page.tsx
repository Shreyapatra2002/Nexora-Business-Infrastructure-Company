import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { bengalAuraServices } from "@/lib/vertical-content";

export const metadata: Metadata = {
  title: "Bengal Aura",
  description:
    "Digital brand promotion through professional shoots, campaigns, and collaborations.",
};

export default function BengalAuraPage() {
  return (
    <>
      <PageHero
        title="Bengal Aura"
        subtitle="Digital brand promotion with production-grade creative: photography, film, collaborations, and always-on social craft."
        image="https://images.unsplash.com/photo-1542038785106-86f56f840f3c?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
                Capabilities
              </p>
              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Brand elevation through content and campaigns
              </h2>
              <ul className="mt-8 space-y-3 text-white/75">
                {bengalAuraServices.map((s) => (
                  <li key={s} className="flex gap-3 text-sm">
                    <span className="text-nexora-gold">—</span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/contact">Brief Bengal Aura</Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=900&q=80"
                alt="Production"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nexora-black/70 to-transparent" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
