import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nexora — consultation, partnerships, and vertical inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Book a consultation or route your inquiry to the correct vertical lead. We reply with structure — scope, timeline, and next steps."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-white">Direct channels</h2>
              <ul className="mt-8 space-y-4 text-sm text-white/70">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-nexora-gold">
                    General
                  </span>
                  <a href={`mailto:${site.emails.info}`} className="hover:text-nexora-gold-light">
                    {site.emails.info}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-nexora-gold">
                    Management
                  </span>
                  <a
                    href={`mailto:${site.emails.founder}`}
                    className="hover:text-nexora-gold-light"
                  >
                    {site.emails.founder}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-nexora-gold">HR</span>
                  <a href={`mailto:${site.emails.hr}`} className="hover:text-nexora-gold-light">
                    {site.emails.hr}
                  </a>
                </li>
              </ul>
              <div className="mt-10">
                <Button href={site.whatsapp}>WhatsApp</Button>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
