import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPlaceholderPage() {
  return (
    <section className="min-h-[60vh] border-t border-white/5 pb-24 pt-32">
      <Container>
        <h1 className="font-display text-3xl text-nexora-gold-light">Admin panel (roadmap)</h1>
        <p className="mt-4 max-w-2xl text-sm text-white/60">
          Future surface for blog CMS, lead inbox, consultation bookings, and SEO landing templates.
          Protect with JWT and role-based access; connect to PostgreSQL.
        </p>
      </Container>
    </section>
  );
}
