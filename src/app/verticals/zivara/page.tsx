import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { zivaraServices } from "@/lib/vertical-content";

export const metadata: Metadata = {
  title: "Zivara Growth & PR",
  description:
    "Business growth, PR, governance, and structural readiness for SMEs and MSMEs with turnover Rs. 70L to Rs. 10Cr.",
};

export default function ZivaraPage() {
  return (
    <>
      <PageHero
        title="Zivara Growth & PR"
        subtitle="For SMEs and MSMEs with turnover Rs. 70L to Rs. 10Cr. Strategy, reputation, and operating systems that prepare you for scale."
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
            Services
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-white md:text-4xl">
            Full-stack growth and governance for ambitious operators
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {zivaraServices.map((s) => (
              <li
                key={s}
                className="border border-white/10 bg-nexora-charcoal/80 px-5 py-4 text-sm text-white/80"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Button href="/contact">Engage Zivara</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
