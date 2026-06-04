import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Client Login",
  description: "Future client portal — JWT authentication and SaaS dashboard links.",
};

export default function ClientLoginPage() {
  return (
    <section className="min-h-[70vh] border-t border-white/5 pb-24 pt-32 lg:pt-40">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-nexora-gold">
          Placeholder
        </p>
        <h1 className="mt-4 font-display text-4xl text-white md:text-5xl">Client login</h1>
        <p className="mt-6 max-w-xl text-white/65">
          Secure portal for engagement documents, invoices, and future Yugabyte / Einstein dashboard
          deep-links. Backend: Node.js or FastAPI with PostgreSQL and JWT — scaffold when ready.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="outline">
            Need access?
          </Button>
        </div>
      </Container>
    </section>
  );
}
