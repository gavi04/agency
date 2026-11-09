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
      setMessage("The form isn't connected yet. Please message us on WhatsApp or email for your trial.");
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
      setMessage("Thank you! Our team will call you within 24 hours to set up your 3-day free trial.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please message us directly on WhatsApp to claim your free trial.");
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
      <input type="hidden" name="_subject" value="New 3-Day Free Trial Request: Minus Zero" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

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
          placeholder="e.g. Rahul Sharma"
          className="field"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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

        <div>
          <label htmlFor="business" className="field-label">
            Your business
          </label>
          <select id="business" name="business" required defaultValue="" className="field appearance-none bg-white">
            <option value="" disabled>
              Select your business
            </option>
            <option value="CA firm">CA firm</option>
            <option value="Service provider">Service provider</option>
            <option value="Trader / retailer">Trader / retailer</option>
            <option value="Manufacturer">Manufacturer</option>
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
          placeholder="e.g. Chasing clients on WhatsApp for GST bills, re-typing purchase invoices into Tally, stock reorder alerts…"
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
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              Open WhatsApp
            </a>
          </>
        ) : (
          "We'll call you within 24 hours. No commitment, no payment details needed."
        )}
      </p>
    </form>
  );
}
