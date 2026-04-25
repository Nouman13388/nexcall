"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { services } from "@/lib/constants";

/* ─── Context ─────────────────────────────────────────── */

interface ContactModalCtx {
  openModal: (service?: string) => void;
}

const ContactModalContext = createContext<ContactModalCtx | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

/* ─── Form types / helpers ─────────────────────────────── */

interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

const fieldClass =
  "w-full rounded-xl border border-dark/15 bg-white px-4 py-3 text-sm text-dark placeholder:text-dark/40 transition-[border-color,box-shadow] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

/* ─── Modal panel (internal) ──────────────────────────── */

interface PanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string | undefined;
}

function ContactModalPanel({ isOpen, onClose, selectedService }: PanelProps) {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Reset form each time the modal opens
  useEffect(() => {
    if (isOpen) {
      setForm({ name: "", email: "", phone: "", service: selectedService ?? "", message: "" });
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen, selectedService]);

  // Esc key to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-close 2 s after success
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(onClose, 2000);
    return () => clearTimeout(t);
  }, [status, onClose]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
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
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            className="relative z-10 max-h-[90vh] w-full max-w-[500px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-dark/40 transition-colors hover:bg-dark/10 hover:text-dark"
            >
              <X className="size-4" />
            </button>

            {/* Header */}
            <h2 id="modal-heading" className="font-heading text-2xl font-bold text-dark">
              Request a Consultation
            </h2>

            {selectedService ? (
              <span className="mt-3 inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-xs font-medium text-dark">
                Service: {selectedService}
              </span>
            ) : (
              <p className="font-body mt-2 text-sm text-dark/55">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            )}

            {/* Alerts */}
            {status === "success" && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-center text-sm text-green-700">
                ✓ Message sent — we&rsquo;ll be in touch shortly.
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            {/* Form */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label htmlFor="cm-name" className="mb-1.5 block text-sm font-medium text-dark">
                    Name <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="cm-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={fieldClass}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="cm-email" className="mb-1.5 block text-sm font-medium text-dark">
                    Email <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="cm-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={fieldClass}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="cm-phone" className="mb-1.5 block text-sm font-medium text-dark">
                    Phone
                  </label>
                  <input
                    id="cm-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 555 000 0000"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="cm-service"
                    className="mb-1.5 block text-sm font-medium text-dark"
                  >
                    Service
                  </label>
                  <select
                    id="cm-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={fieldClass}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cm-message"
                    className="mb-1.5 block text-sm font-medium text-dark"
                  >
                    Message <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="cm-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help…"
                    className={`${fieldClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`inline-flex w-full items-center justify-center rounded-full bg-secondary px-7 py-3 text-base font-semibold text-dark transition-colors hover:bg-secondary/90 ${
                    status === "loading" ? "cursor-not-allowed opacity-60" : ""
                  }`}
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ─── Provider (exported) ──────────────────────────────── */

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const openModal = (service?: string) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <ContactModalContext.Provider value={{ openModal }}>
      {children}
      <ContactModalPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedService={selectedService}
      />
    </ContactModalContext.Provider>
  );
}
