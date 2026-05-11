"use client";

import { useState } from "react";
import { Input, FieldLabel, FieldHelp } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function WhitepaperGate({ paperId = "sr117" }: { paperId?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage(null);

    try {
      const res = await fetch("/api/whitepaper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, paperId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again in a moment.");
        return;
      }
      setStatus("success");
      setMessage(data.message ?? "Check your inbox.");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-paper border border-rule rounded-[2px] p-8">
        <p className="type-label text-success mb-3">Confirmed</p>
        <h3 className="font-display text-[24px] font-medium leading-tight mb-3 text-ink">
          {message ?? "Whitepaper sent — check your inbox."}
        </h3>
        <p className="font-body text-[15px] text-ink-mute leading-[1.55]">
          The PDF is on its way. If you don&apos;t see it within a few minutes,
          check spam — and if you&apos;d like to discuss your specific exam,
          reply to that email directly. The founder reads every reply.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper border border-rule rounded-[2px] p-8">
      <p className="type-label mb-3">Download · Free</p>
      <h3 className="font-display text-[24px] md:text-[28px] font-medium leading-tight mb-2 text-ink">
        Get the SR 11-7 framework.
      </h3>
      <p className="font-body text-[15px] text-ink-mute mb-6 leading-[1.55]">
        A 24-page whitepaper written by the founder. Work email only — no
        gmail.com, yahoo.com, outlook.com.
      </p>

      <FieldLabel htmlFor="email" required>
        Work email
      </FieldLabel>
      <Input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@bank.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "submitting"}
      />
      {status === "error" && message && (
        <FieldHelp tone="error">{message}</FieldHelp>
      )}

      <div className="mt-6">
        <Button type="submit" variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send me the PDF →"}
        </Button>
      </div>

      <p className="mt-4 font-mono text-[11px] tracking-[0.06em] text-ink-light">
        We will email you the PDF. We do not sell, share, or rent the email.
      </p>
    </form>
  );
}
