import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { yugabyteServices, yugabyteSaaS } from "@/lib/vertical-content";

export const metadata: Metadata = {
  title: "Yugabyte",
  description: "Payroll, software development, and SaaS products by Nexora Yugabyte.",
};

export default function YugabytePage() {
  return (
    <>
      <PageHero
        title="Yugabyte"
        subtitle="Third-party payroll, custom software, and SaaS products — the technology and manpower backbone inside Nexora."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
                Services
              </p>
              <ul className="mt-6 space-y-4 text-white/75">
                {yugabyteServices.map((s) => (
                  <li key={s} className="text-base">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
                SaaS products
              </p>
              <ul className="mt-6 space-y-4">
                {yugabyteSaaS.map((s) => (
                  <li key={s}>
                    <Link
                      href="/saas"
                      className="font-display text-xl text-nexora-gold-light hover:text-white"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Talk to Yugabyte</Button>
                <Button href="/saas" variant="outline">
                  View SaaS
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
