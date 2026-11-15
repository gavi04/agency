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
      setMessage(`The form isn't connected yet. Please email us at ${site.email} for your trial.`);
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
      setMessage("Thank you! We'll email you within 24 hours to book a short call and set up your free 3-day trial.");
    } catch {
      setStatus("error");
      setMessage(
        site.whatsappEnabled
          ? "Something went wrong. Please message us directly on WhatsApp to claim your free trial."
          : `Something went wrong. Please email us at ${site.email} to claim your free trial.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center py-12 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="h-7 w-7" strokeWidth={2.6} />
        </span>
        <p className="mt-5 font-display text-xl font-bold text-navy">Trial Request Received</p>
        <p className="mt-2 max-w-sm text-[15px] text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form action={site.formEndpoint} method="POST" onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <input type="hidden" name="_subject" value={`New 3-Day Free Trial Request: ${site.name}`} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Sarah Mitchell"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Work email
          </label>
          {/* Named "email" so Formspree sets it as the reply-to address */}
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="field-label">
            {site.whatsappEnabled ? "Phone / WhatsApp" : "Phone"} <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="With country code"
            pattern="[0-9+\-\s()]{8,}"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="business" className="field-label">
            Your business
          </label>
          <select id="business" name="business" required defaultValue="" className="field appearance-none bg-white">
            <option value="" disabled>
              Select your business
            </option>
            <option value="Accounting firm">Accounting / bookkeeping firm</option>
            <option value="Agency / service business">Agency / service business</option>
            <option value="E-commerce / retail">E-commerce / retail</option>
            <option value="Small business / operations">Small business / operations</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="chore" className="field-label">
          Which chore do you want gone?
        </label>
        <textarea
          id="chore"
          name="chore"
          rows={3}
          required
          placeholder="e.g. Chasing clients for receipts, re-typing invoices into our accounting software, copying leads into our CRM…"
          className="field resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-coral py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-coral-hover disabled:opacity-70"
      >
        {status === "sending" ? "Submitting…" : "Start my free 3-day trial"}
      </button>

      <p aria-live="polite" className={`text-xs ${status === "error" ? "text-red-600" : "text-muted"}`}>
        {status === "error" ? (
          <>
            {message}{" "}
            {site.whatsappEnabled && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              Open WhatsApp
            </a>
            )}
          </>
        ) : (
          "We'll reply within 24 hours. No commitment, no payment details needed."
        )}
      </p>
    </form>
  );
}
