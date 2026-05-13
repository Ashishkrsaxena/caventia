import { NextResponse } from "next/server";
import { isBusinessEmail, isValidEmail, sendNotification } from "@/lib/email";

export const runtime = "nodejs";

type Body = {
  email?: string;
  paperId?: string;
};

const FORWARD_TO = process.env.CONTACT_FORWARD_EMAIL ?? "ashish@caventia.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com";

const PAPERS: Record<string, { title: string; pdfPath: string | null }> = {
  sr117: {
    title: "SR 11-7 Compliance for AI Agents: A Practical Framework",
    pdfPath: "/whitepaper-sr117.pdf",
  },
  fda: {
    title: "FDA Q-Sub Strategy for AI Agent Governance Platforms",
    pdfPath: null,
  },
};

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

  const paper = PAPERS[paperId];
  const paperTitle = paper?.title ?? paperId;
  const pdfUrl = paper?.pdfPath ? `${SITE_URL}${paper.pdfPath}` : null;

  // 1. Notify the founder.
  await sendNotification({
    to: FORWARD_TO,
    subject: `[Caventia] Whitepaper request - ${paperId}`,
    text: `New whitepaper request.\n\nPaper: ${paperId}\nEmail: ${email}\n`,
    replyTo: email,
  });

  // 2. Acknowledge to the requester. If the PDF exists, link it inline;
  // otherwise fall back to the manual-follow-up wording.
  const requesterText = pdfUrl
    ? [
        `Hi,`,
        ``,
        `Thanks for requesting "${paperTitle}".`,
        ``,
        `Download the PDF here:`,
        pdfUrl,
        ``,
        `If you'd like to discuss your specific examiner readiness, reply to this email. Ashish reads every reply.`,
        ``,
        `- Caventia`,
      ].join("\n")
    : [
        `Hi,`,
        ``,
        `Thanks for requesting "${paperTitle}".`,
        ``,
        `The PDF is being finalized and will arrive in a follow-up email within the next business day. If you'd like to discuss your specific examiner readiness in the meantime, reply to this email. Ashish reads every reply.`,
        ``,
        `- Caventia`,
      ].join("\n");

  await sendNotification({
    to: email,
    subject: pdfUrl
      ? "Your Caventia whitepaper is ready"
      : "Your Caventia whitepaper is on its way",
    text: requesterText,
  });

  return NextResponse.json({
    ok: true,
    message: pdfUrl
      ? "Whitepaper request received. Check your inbox for the download link."
      : "Whitepaper request received. Check your inbox for confirmation; the PDF follows within a business day.",
    pdfUrl,
  });
}
