"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-nexora-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 lg:h-20">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-[0.12em] text-gradient-gold sm:text-xl">
            {site.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.slice(0, 10).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2.5 py-2 text-xs font-medium text-white/70 transition hover:bg-white/5 hover:text-nexora-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/client-login" variant="ghost" className="!px-4 !py-2 text-xs">
            Client Login
          </Button>
          <Button href="/contact" className="!px-5 !py-2.5 text-xs">
            Book Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-white/10 text-white xl:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <div className="mobile-menu-scroll max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 bg-nexora-black px-5 py-6 xl:hidden lg:max-h-[calc(100svh-5rem)]">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-nexora-gold-light"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button href="/client-login" variant="outline" className="w-full">
              Client Login
            </Button>
            <Button href="/contact" className="w-full">
              Book Consultation
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
