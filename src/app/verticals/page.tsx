import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { verticalCards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Verticals",
  description:
    "Zivara Growth & PR, Bengal Aura, BeautyGlam, and Yugabyte — Nexora specialist divisions.",
};

export default function VerticalsPage() {
  return (
    <>
      <PageHero
        title="Our Verticals"
        subtitle="Four client-facing divisions — each with dedicated craft, leadership, and delivery playbooks inside the Nexora infrastructure layer."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {verticalCards.map((v) => (
              <Link
                key={v.slug}
                href={v.href}
                className="group block overflow-hidden rounded-sm border border-white/10 bg-nexora-charcoal transition hover:border-nexora-gold/40"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nexora-black via-nexora-black/40 to-transparent" />
                </div>
                <div className="p-8">
                  <h2 className="font-display text-2xl text-nexora-gold-light group-hover:text-white">
                    {v.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{v.short}</p>
                  <span className="mt-6 inline-block text-sm font-medium text-nexora-gold">
                    Learn more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
