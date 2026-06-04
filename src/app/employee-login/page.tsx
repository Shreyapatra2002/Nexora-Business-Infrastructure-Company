import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Employee Login",
  description: "Future employee portal for Nexora and Yugabyte workforce programs.",
};

export default function EmployeeLoginPage() {
  return (
    <section className="min-h-[70vh] border-t border-white/5 pb-24 pt-32 lg:pt-40">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
          Placeholder
        </p>
        <h1 className="mt-4 font-display text-4xl text-white md:text-5xl">Employee login</h1>
        <p className="mt-6 max-w-xl text-white/65">
          HR and payroll self-service for field and studio teams — wired to Yugabyte manpower
          operations when authentication layer is deployed.
        </p>
        <div className="mt-10">
          <Button href={`mailto:${site.emails.hr}`} variant="outline">
            Contact HR
          </Button>
        </div>
      </Container>
    </section>
  );
}
