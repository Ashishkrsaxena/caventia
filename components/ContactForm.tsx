"use client";

import { useState } from "react";
import {
  FieldLabel,
  Input,
  Textarea,
  Select,
  FieldHelp,
} from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

type Kind = "design-partner" | "press";

type Status = "idle" | "submitting" | "success" | "error";

const AUM_TIERS = [
  "$10B–$50B AUM",
  "$50B–$100B AUM",
  "$100B–$500B AUM",
  "$500B+ AUM",
  "Series B+ fintech",
  "Health system ($1B+ revenue)",
  "Other regulated industry",
];

export default function ContactForm() {
  const [kind, setKind] = useState<Kind>("design-partner");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.kind = kind;

    setStatus("submitting");
    setMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again in a moment.");
        return;
      }
      setStatus("success");
      setMessage(
        data.message ??
          "Thank you. The founder will be in touch within two business days."
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-paper border border-rule rounded-[2px] p-10 md:p-12">
        <p className="type-label text-success mb-4">Received</p>
        <h2 className="font-display text-[28px] md:text-[36px] font-medium leading-[1.15] mb-6 text-ink">
          We have your note.
        </h2>
        <p className="font-body text-[17px] text-ink-mute max-w-[480px] leading-[1.6]">
          {message}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Kind toggle */}
      <div
        role="tablist"
        aria-label="Inquiry type"
        className="inline-flex border border-rule-strong rounded-[2px] overflow-hidden mb-8"
      >
        {([
          ["design-partner", "Design partner"],
          ["press", "Press"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            role="tab"
            aria-selected={kind === value}
            type="button"
            onClick={() => setKind(value)}
            className={`px-5 py-3 font-body text-[14px] font-medium tracking-[0.02em] transition-colors ${
              kind === value
                ? "bg-ink text-parchment"
                : "bg-parchment text-ink hover:bg-paper"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          <FieldLabel htmlFor="name" required>Name</FieldLabel>
          <Input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="md:col-span-1">
          <FieldLabel htmlFor="email" required>Work email</FieldLabel>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>

        {kind === "design-partner" ? (
          <>
            <div className="md:col-span-1">
              <FieldLabel htmlFor="title" required>Title</FieldLabel>
              <Input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Chief Model Risk Officer"
              />
            </div>
            <div className="md:col-span-1">
              <FieldLabel htmlFor="institution" required>Institution</FieldLabel>
              <Input
                id="institution"
                name="institution"
                type="text"
                required
                placeholder="Regional bank or fintech"
              />
            </div>
            <div className="md:col-span-2">
              <FieldLabel htmlFor="tier">AUM / category</FieldLabel>
              <Select id="tier" name="tier" defaultValue="">
                <option value="">Select one</option>
                {AUM_TIERS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </Select>
            </div>
            <div className="md:col-span-2">
              <FieldLabel htmlFor="pain">Specific regulator pain</FieldLabel>
              <Textarea
                id="pain"
                name="pain"
                rows={5}
                placeholder="What's the SR 11-7, ECOA, or examiner-readiness gap you're trying to close?"
              />
            </div>
            <div className="md:col-span-2">
              <FieldLabel htmlFor="window">Preferred call window</FieldLabel>
              <Input
                id="window"
                name="window"
                type="text"
                placeholder="e.g. Tuesday/Thursday afternoons ET"
              />
            </div>
          </>
        ) : (
          <>
            <div className="md:col-span-1">
              <FieldLabel htmlFor="outlet" required>Outlet</FieldLabel>
              <Input id="outlet" name="outlet" type="text" required />
            </div>
            <div className="md:col-span-1">
              <FieldLabel htmlFor="deadline">Deadline</FieldLabel>
              <Input id="deadline" name="deadline" type="text" placeholder="e.g. EOW" />
            </div>
            <div className="md:col-span-2">
              <FieldLabel htmlFor="topic" required>Topic</FieldLabel>
              <Textarea id="topic" name="topic" rows={5} required />
            </div>
          </>
        )}

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 font-body text-[14px] text-ink-mute leading-[1.6]">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 w-4 h-4 accent-[#8B2C2C]"
            />
            <span>
              I agree to receive a follow-up from Caventia regarding this inquiry.
              We don&apos;t sell, share, or rent contact information.
            </span>
          </label>
        </div>

        {status === "error" && message && (
          <div className="md:col-span-2">
            <FieldHelp tone="error">{message}</FieldHelp>
          </div>
        )}

        <div className="md:col-span-2 pt-2">
          <Button type="submit" variant="primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send to the founder →"}
          </Button>
        </div>
      </form>
    </div>
  );
}
