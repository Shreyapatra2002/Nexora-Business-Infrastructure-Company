"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-white/10 bg-nexora-black/60 p-8 backdrop-blur-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-wider text-nexora-gold/90">
            Name
          </span>
          <input
            name="name"
            required
            className="mt-2 w-full border border-white/10 bg-nexora-charcoal px-4 py-3 text-sm text-white outline-none transition focus:border-nexora-gold/50"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wider text-nexora-gold/90">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full border border-white/10 bg-nexora-charcoal px-4 py-3 text-sm text-white outline-none transition focus:border-nexora-gold/50"
            placeholder="you@company.com"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wider text-nexora-gold/90">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            className="mt-2 w-full border border-white/10 bg-nexora-charcoal px-4 py-3 text-sm text-white outline-none transition focus:border-nexora-gold/50"
            placeholder="+91 ..."
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-wider text-nexora-gold/90">
            Company / Context
          </span>
          <input
            name="company"
            className="mt-2 w-full border border-white/10 bg-nexora-charcoal px-4 py-3 text-sm text-white outline-none transition focus:border-nexora-gold/50"
            placeholder="Organization, turnover band, city"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-wider text-nexora-gold/90">
            Message
          </span>
          <textarea
            name="message"
            required
            rows={4}
            className="mt-2 w-full resize-y border border-white/10 bg-nexora-charcoal px-4 py-3 text-sm text-white outline-none transition focus:border-nexora-gold/50"
            placeholder="What outcomes are you targeting?"
          />
        </label>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit inquiry"}
        </Button>
        {status === "ok" ? (
          <p className="text-sm text-nexora-gold-light">Received. We will respond shortly.</p>
        ) : null}
        {status === "err" ? (
          <p className="text-sm text-red-400/90">Something went wrong. Please email us directly.</p>
        ) : null}
      </div>
    </form>
  );
}
