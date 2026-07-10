"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="font-sans text-[15px] text-ink-muted">Thank you — your message has been received.</p>;
  }

  const fieldClasses =
    "w-full border border-line bg-paper px-3.5 py-2.5 font-sans text-[14px] text-ink placeholder:text-ink-faint focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-sans text-[13px] text-ink-muted">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={fieldClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block font-sans text-[13px] text-ink-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={fieldClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block font-sans text-[13px] text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={fieldClasses}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="border border-ink bg-ink px-5 py-2.5 font-sans text-[13px] uppercase tracking-wide text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && <p className="font-sans text-[13px] text-burgundy">Something went wrong. Please try again.</p>}
    </form>
  );
}
