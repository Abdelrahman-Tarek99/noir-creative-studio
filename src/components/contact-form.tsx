"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/action";

const initial: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="form-success">
        <p className="form-success-icon" aria-hidden>✓</p>
        <p className="form-success-msg">{state.message}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={formAction} noValidate>
      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={100}
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          placeholder="your@email.com"
          autoComplete="email"
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Tell us about your project…"
        />
      </div>

      {state.status === "error" && (
        <p className="form-error" role="alert">{state.message}</p>
      )}

      <button type="submit" className="cta-btn" disabled={pending}>
        {pending ? "Sending…" : "Send message"} <span aria-hidden>↗</span>
      </button>
    </form>
  );
}
