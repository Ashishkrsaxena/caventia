"use client";

import { useState } from "react";
import { Input, FieldLabel, FieldHelp } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  paperId?: string;
  comingSoon?: boolean;
};

export default function WhitepaperGate({ paperId = "sr117", comingSoon = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage(null);
    setPdfUrl(null);

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
      setPdfUrl(data.pdfUrl ?? null);
    } catch {
      setStatus("error");
      setMessage("Network error. Try again in a moment.");
    }
  }

  if (status === "success") {
    if (comingSoon) {
      return (
        <div className="bg-paper border border-rule rounded-[2px] p-8">
          <p className="type-label text-success mb-3">On the list</p>
          <h3 className="font-display text-[24px] font-medium leading-tight mb-3 text-ink">
            We&apos;ll send it the morning we ship.
          </h3>
          <p className="font-body text-[15px] text-ink-mute leading-[1.55]">
            The new edition lands later this quarter. If you&apos;d like to talk
            before then, reply to the confirmation email - the founder reads
            every reply.
          </p>
        </div>
      );
    }
    return (
      <div className="bg-paper border border-rule rounded-[2px] p-8">
        <p className="type-label text-success mb-3">Confirmed</p>
        <h3 className="font-display text-[24px] font-medium leading-tight mb-3 text-ink">
          {pdfUrl ? "Your whitepaper is ready." : message ?? "Whitepaper sent - check your inbox."}
        </h3>
        {pdfUrl ? (
          <>
            <p className="font-body text-[15px] text-ink-mute leading-[1.55] mb-5">
              We&apos;ve emailed you the link as well. If you&apos;d like to
              discuss your specific exposure, reply to that email directly. The
              founder reads every reply.
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] bg-accent text-parchment px-7 py-[14px] font-body font-medium text-[14px] tracking-[0.01em] rounded-[2px] hover:bg-accent-deep transition-colors"
            >
              Download the PDF
              <span aria-hidden="true">↓</span>
            </a>
          </>
        ) : (
          <p className="font-body text-[15px] text-ink-mute leading-[1.55]">
            The PDF is on its way. If you don&apos;t see it within a few minutes,
            check spam. If you&apos;d like to discuss your specific exposure,
            reply to that email directly. The founder reads every reply.
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper border border-rule rounded-[2px] p-8">
      {comingSoon ? (
        <>
          <p className="type-label mb-3">Whitepaper · Coming soon</p>
          <h3 className="font-display text-[24px] md:text-[28px] font-medium leading-tight mb-2 text-ink">
            AI Agent Governance After SR 11-7.
          </h3>
          <p className="font-body text-[15px] text-ink-mute mb-6 leading-[1.55]">
            A new edition for the generative and agentic AI agents the 2026
            MRM Guidance left to banks. Work email only - no gmail.com,
            yahoo.com, outlook.com.
          </p>
        </>
      ) : (
        <>
          <p className="type-label mb-3">Download · Free</p>
          <h3 className="font-display text-[24px] md:text-[28px] font-medium leading-tight mb-2 text-ink">
            Get the whitepaper.
          </h3>
          <p className="font-body text-[15px] text-ink-mute mb-6 leading-[1.55]">
            Written by the founder. Work email only - no gmail.com, yahoo.com,
            outlook.com.
          </p>
        </>
      )}

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
          {status === "submitting"
            ? "Sending..."
            : comingSoon
              ? "Notify me on launch →"
              : "Send me the PDF →"}
        </Button>
      </div>

      <p className="mt-4 font-mono text-[11px] tracking-[0.06em] text-ink-light">
        {comingSoon
          ? "We'll email you the moment it ships. We do not sell, share or rent the email."
          : "We'll email you the PDF. We do not sell, share or rent the email."}
      </p>
    </form>
  );
}
