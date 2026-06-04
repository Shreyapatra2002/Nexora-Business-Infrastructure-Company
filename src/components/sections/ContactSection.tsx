import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/5 bg-nexora-charcoal py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Start a <span className="text-gradient-gold">conversation</span>
                </>
              }
              subtitle="Share your context — we respond with a structured next step and the right vertical lead."
            />
            <Reveal>
              <div className="mt-8 space-y-6 text-sm text-white/70">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexora-gold">
                    Email
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a href={`mailto:${site.emails.info}`} className="hover:text-nexora-gold-light">
                        {site.emails.info}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${site.emails.management}`}
                        className="hover:text-nexora-gold-light"
                      >
                        {site.emails.management}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${site.emails.hr}`} className="hover:text-nexora-gold-light">
                        {site.emails.hr}
                      </a>
                    </li>
                  </ul>
                </div>
                <Button href={site.whatsapp} className="w-full sm:w-auto">
                  WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
