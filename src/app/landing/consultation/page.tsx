import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Book a consultation",
  description: "Schedule a structured consultation with Nexora.",
};

/** Duplicate this route as a starting point for campaign-specific landing pages. */
export default function ConsultationLandingPage() {
  return (
    <section className="min-h-screen border-t border-white/5 pb-24 pt-28 lg:pt-36">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nexora-gold">
          Nexora
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-white md:text-5xl">
          Book a <span className="text-gradient-gold">consultation</span>
        </h1>
        <p className="mt-6 max-w-2xl text-white/65">
          Template landing section — pair with UTM tracking, Meta/Google ads, and CRM webhook in
          production.
        </p>
        <div className="mt-12 max-w-xl">
          <ContactForm />
        </div>
        <div className="mt-10">
          <Button href="/" variant="ghost">
            Back to main site
          </Button>
        </div>
      </Container>
    </section>
  );
}
