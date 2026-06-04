import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { beautyGlamServices } from "@/lib/vertical-content";

export const metadata: Metadata = {
  title: "BeautyGlam",
  description:
    "Event and lifestyle promotion — DJ nights, ramp shows, launches, and curated experiences.",
};

export default function BeautyGlamPage() {
  return (
    <>
      <PageHero
        title="BeautyGlam"
        subtitle="Event and lifestyle promotion — high-energy experiences, launches, and influencer moments executed with premium production standards."
        image="https://images.unsplash.com/photo-1571266028243-e4733b1f0bb0?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1545128484-c24e560d0dee?w=1200&q=80"
                alt="Event"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-nexora-black/80 to-transparent" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
                Experiences
              </p>
              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                From ramp to nightlife — built for brands that own the room
              </h2>
              <ul className="mt-8 grid gap-2 text-sm text-white/75">
                {beautyGlamServices.map((s) => (
                  <li key={s} className="border-l-2 border-nexora-gold/40 pl-4">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/contact">Plan an experience</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
