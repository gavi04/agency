"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/content/site";
import { Check } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (site.formEndpoint.includes("YOUR_FORM_ID")) {
      setStatus("error");
      setMessage("The form isn't connected yet. Please reach us directly on WhatsApp or email.");
      console.warn("Minus Labs: set site.formEndpoint in content/site.ts to enable form submission.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
      setMessage("Thank you. We'll connect with you within 24 hours to schedule your session.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong sending the form. Please message us directly on WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center py-12 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="h-7 w-7" strokeWidth={2.6} />
        </span>
        <p className="mt-5 font-display text-xl font-bold text-navy">Consultation Request Received</p>
        <p className="mt-2 max-w-sm text-[15px] text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form action={site.formEndpoint} method="POST" onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <input type="hidden" name="_subject" value="New Workflow Assessment: Minus Labs" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. CA Rajesh Kumar"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="firm" className="field-label">
            Firm or Company Name
          </label>
          <input
            id="firm"
            name="firm"
            type="text"
            required
            autoComplete="organization"
            placeholder="e.g. Kumar & Associates / ABC Tech"
            className="field"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="clients" className="field-label">
            Active Clients / Volume
          </label>
          <select id="clients" name="clients" required defaultValue="" className="field appearance-none bg-white">
            <option value="" disabled>
              Select range
            </option>
            <option>Under 50 clients</option>
            <option>50–200 clients (Mid-size CA)</option>
            <option>200–500 clients (Growth Practice)</option>
            <option>500–1,000 clients (Multi-partner)</option>
            <option>1,000+ clients / High-volume Business</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            pattern="[0-9+\-\s()]{8,}"
            className="field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          What manual task consumes the most time in your office?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="e.g. Collecting GST/bank statements each month, manual invoice re-typing into Tally, deadline tracking spreadsheets…"
          className="field resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-coral py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-coral-hover disabled:opacity-70"
      >
        {status === "sending" ? "Submitting Request…" : "Book My Free 20-Min Assessment"}
      </button>

      <p aria-live="polite" className={`text-xs ${status === "error" ? "text-red-600" : "text-muted"}`}>
        {status === "error" ? (
          <>
            {message}{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              Open WhatsApp directly
            </a>
          </>
        ) : (
          "We respect your privacy. Details are only used to prepare for your consultation."
        )}
      </p>
    </form>
  );
}
