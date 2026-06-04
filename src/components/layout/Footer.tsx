import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-nexora-charcoal">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-gradient-gold">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              {site.footerLine}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexora-gold">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {navLinks.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-nexora-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexora-gold">
              More
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {navLinks.slice(6).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-nexora-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexora-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>
                <a href={`mailto:${site.emails.info}`} className="hover:text-nexora-gold-light">
                  {site.emails.info}
                </a>
              </li>
              
              <li>
                <a href={`mailto:${site.emails.hr}`} className="hover:text-nexora-gold-light">
                  {site.emails.hr}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-nexora-gold/80">{site.footerLine}</p>
        </div>
      </Container>
    </footer>
  );
}
