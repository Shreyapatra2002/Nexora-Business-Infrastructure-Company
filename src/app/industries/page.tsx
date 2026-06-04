import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Nexora serves colleges, jewellery, healthcare, salons, fashion, hospitality, manufacturing, startups, and MSMEs.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        subtitle="Sector-specific playbooks across education, luxury retail, care, beauty, fashion, F&B, manufacturing, and high-growth enterprises."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10"
              >
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexora-black via-nexora-black/50 to-nexora-black/20" />
                <p className="absolute inset-x-0 bottom-0 p-4 text-center font-display text-sm text-nexora-gold-light">
                  {ind.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/contact">Discuss your sector</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
