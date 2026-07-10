"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-sans text-[14px] text-ink-muted">
        Thank you — you will be notified when new work is published.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-line bg-paper px-3.5 py-2.5 font-sans text-[14px] text-ink placeholder:text-ink-faint focus:border-accent"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 border border-ink bg-ink px-5 py-2.5 font-sans text-[13px] uppercase tracking-wide text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Notify Me"}
      </button>
      {status === "error" && (
        <p className="font-sans text-[13px] text-burgundy">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
