"use client";

import { type FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMPTY: FormFields = { name: "", email: "", phone: "", company: "", message: "" };

function validate(data: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }
  return errors;
}

const field =
  "w-full rounded-xl border border-dark/15 bg-white px-4 py-3 text-sm text-dark placeholder:text-dark/40 transition-[border-color,box-shadow] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const errorText = "mt-1.5 text-xs text-red-500";

export default function ContactForm() {
  const [form, setForm] = useState<FormFields>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "name" || name === "email" || name === "message") {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-dark">Send Us a Message</h2>
      <p className="font-body mt-2 text-sm text-dark/55">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      {status === "success" && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Thank you! Your message has been sent. We&rsquo;ll be in touch shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-dark">
            Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={field}
          />
          {errors.name && <p className={errorText}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-dark">
            Email <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={field}
          />
          {errors.email && <p className={errorText}>{errors.email}</p>}
        </div>

        {/* Phone + Company */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-dark">
              Phone
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 555 000 0000"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="cf-company" className="mb-1.5 block text-sm font-medium text-dark">
              Company
            </label>
            <input
              id="cf-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className={field}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-dark">
            Message <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help…"
            className={`${field} resize-none`}
          />
          {errors.message && <p className={errorText}>{errors.message}</p>}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          className={`w-full ${status === "loading" ? "cursor-not-allowed opacity-60" : ""}`}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
