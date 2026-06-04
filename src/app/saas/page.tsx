import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { saasProducts } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "SaaS Products",
  description: "Yugabyte CRM, Einstein Analytics, and Client Founding Funnel — Nexora software suite.",
};

export default function SaasPage() {
  return (
    <>
      <PageHero
        title="SaaS Products"
        subtitle="Dashboard-native products for pipeline management, KPI intelligence, and acquisition funnels — engineered for leadership visibility."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:gap-16">
            {saasProducts.map((p) => (
              <article
                key={p.slug}
                className="grid gap-8 overflow-hidden rounded-sm border border-white/10 bg-nexora-charcoal lg:grid-cols-2 lg:items-center"
              >
                <div className="relative aspect-[16/10] min-h-[220px] lg:min-h-[320px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-nexora-charcoal/90 lg:block" />
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="font-display text-3xl text-nexora-gold-light">{p.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-white/70">{p.short}</p>
                  <p className="mt-6 text-sm text-white/45">
                    Secure dashboard access and onboarding workflows — scheduled for client rollout.
                    Placeholder for future SSO and JWT-backed sessions.
                  </p>
                  <div className="mt-8">
                    <Button href="/contact" variant="outline">
                      Request product walkthrough
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
