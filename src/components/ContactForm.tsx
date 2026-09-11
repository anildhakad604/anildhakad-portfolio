"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.15em] text-ink-faint">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.15em] text-ink-faint">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-mono uppercase tracking-[0.15em] text-ink-faint">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2.5 border-2 border-ink bg-ink px-6 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:border-accent hover:bg-accent"
        >
          Send Message
          <span aria-hidden="true" className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
            →
          </span>
        </button>
        {status === "sent" ? (
          <p className="text-sm text-ink-faint" role="status">
            Opening your email client — feel free to send it straight from there.
          </p>
        ) : null}
      </div>
    </form>
  );
}
