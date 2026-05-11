/**
 * Minimal Resend wrapper that no-ops when no API key is configured.
 *
 * Real Resend integration is intentionally not pulled in as a dependency yet —
 * once `RESEND_API_KEY` is set, install the `resend` package and swap the
 * fetch-based call below for the SDK. The shape stays the same.
 */

type SendArgs = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendNotification({
  to,
  subject,
  text,
  replyTo,
}: SendArgs): Promise<{ ok: boolean; mode: "live" | "logged" }> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "Caventia <noreply@caventia.com>";

  if (!key) {
    // Dev/stub mode — just log to server console.
    // eslint-disable-next-line no-console
    console.log("[email:logged]", { to, subject, text, replyTo });
    return { ok: true, mode: "logged" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      reply_to: replyTo,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "<unreadable>");
    // eslint-disable-next-line no-console
    console.error("[email:error]", res.status, body);
    return { ok: false, mode: "live" };
  }
  return { ok: true, mode: "live" };
}

const PERSONAL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "mail.com",
  "gmx.com",
  "yandex.com",
]);

export function isBusinessEmail(email: string): boolean {
  const match = email.toLowerCase().trim().match(/^[^@\s]+@([^@\s]+)$/);
  if (!match) return false;
  const domain = match[1];
  if (PERSONAL_DOMAINS.has(domain)) return false;
  // basic shape check
  return /\./.test(domain) && domain.length >= 4;
}

export function isValidEmail(email: string): boolean {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());
}
