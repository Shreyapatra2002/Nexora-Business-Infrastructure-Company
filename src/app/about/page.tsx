import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ecosystem } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Nexora",
  description:
    "Nexora is a business infrastructure company uniting consulting discipline with technology and promotion verticals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Nexora"
        subtitle="We are a business infrastructure company — not a conventional agency. Our model unites strategy, governance, software, manpower, and brand elevation under one premium operating system."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
                Positioning
              </p>
              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Consulting rigor. Technology depth. Promotion craft.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                Nexora serves SMEs and MSMEs that need structure before scale — governance,
                KPIs, CRM, payroll, analytics, PR, and acquisition systems delivered as an
                integrated stack rather than disconnected vendors.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Our verticals — Zivara, Bengal Aura, BeautyGlam, Yugabyte, Einstein Analytics,
                and Client Funnel — operate as specialist teams with shared standards and
                leadership oversight.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/verticals">Our verticals</Button>
                <Button href="/contact" variant="outline">
                  Book consultation
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80"
                alt="Leadership meeting"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nexora-black/80 to-transparent" />
            </div>
          </div>
        </Container>
      </section>
      <section className="border-t border-white/5 bg-nexora-charcoal py-20">
        <Container>
          <h2 className="font-display text-2xl text-white md:text-3xl">Ecosystem at a glance</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {ecosystem.map((row) => (
              <li
                key={row.vertical}
                className="rounded-sm border border-nexora-gold/20 bg-nexora-black/50 px-6 py-5"
              >
                <span className="font-display text-nexora-gold-light">{row.vertical}</span>
                <span className="mt-2 block text-sm text-white/60">{row.role}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
