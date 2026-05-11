import { NextResponse } from "next/server";
import { isBusinessEmail, isValidEmail, sendNotification } from "@/lib/email";

export const runtime = "nodejs";

type Body = {
  email?: string;
  paperId?: string;
};

const FORWARD_TO = process.env.CONTACT_FORWARD_EMAIL ?? "ashish@caventia.com";

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Malformed request." },
      { status: 400 }
    );
  }

  const email = (body.email ?? "").trim();
  const paperId = (body.paperId ?? "sr117").trim();

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!isBusinessEmail(email)) {
    return NextResponse.json(
      { error: "Please use your work email - no gmail.com, yahoo.com or outlook.com." },
      { status: 400 }
    );
  }

  // 1. Notify the founder.
  await sendNotification({
    to: FORWARD_TO,
    subject: `[Caventia] Whitepaper request - ${paperId}`,
    text: `New whitepaper request.\n\nPaper: ${paperId}\nEmail: ${email}\n`,
    replyTo: email,
  });

  // 2. Acknowledge to the requester. The actual PDF link goes here once available.
  await sendNotification({
    to: email,
    subject: "Your Caventia whitepaper is on its way",
    text: [
      `Hi -`,
      ``,
      `Thanks for requesting "${paperId === "sr117" ? "SR 11-7 Compliance for AI Agents: A Practical Framework" : paperId}".`,
      ``,
      `The PDF will arrive in a follow-up email within the next business day. If you'd like to discuss your specific examiner readiness in the meantime, reply to this email - Ashish reads every reply.`,
      ``,
      `- Caventia`,
    ].join("\n"),
  });

  return NextResponse.json({
    ok: true,
    message:
      "Whitepaper request received. Check your inbox for confirmation; the PDF follows within a business day.",
  });
}
