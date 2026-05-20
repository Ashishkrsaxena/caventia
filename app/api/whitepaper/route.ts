import { NextResponse } from "next/server";
import { isBusinessEmail, isValidEmail, sendNotification } from "@/lib/email";

export const runtime = "nodejs";

type Body = {
  email?: string;
  paperId?: string;
};

const FORWARD_TO = process.env.CONTACT_FORWARD_EMAIL ?? "ashish@caventia.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com";

const PAPERS: Record<string, { title: string; pdfPath: string | null; comingSoon?: boolean }> = {
  sr117: {
    title: "AI Agent Governance After SR 11-7",
    pdfPath: null,
    comingSoon: true,
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
  const comingSoon = paper?.comingSoon === true;

  // 1. Notify the founder.
  await sendNotification({
    to: FORWARD_TO,
    subject: `[Caventia] Whitepaper request - ${paperId}`,
    text: `New whitepaper request.\n\nPaper: ${paperId}\nEmail: ${email}\n`,
    replyTo: email,
  });

  // 2. Acknowledge to the requester. Three modes:
  //    - pdfUrl set: send the download link inline.
  //    - comingSoon: confirm they're on the launch list.
  //    - neither (legacy null-path): manual follow-up wording.
  let requesterText: string;
  let requesterSubject: string;
  let publicMessage: string;

  if (pdfUrl) {
    requesterText = [
      `Hi,`,
      ``,
      `Thanks for requesting "${paperTitle}".`,
      ``,
      `Download the PDF here:`,
      pdfUrl,
      ``,
      `If you'd like to discuss your specific examiner exposure, reply to this email. Ashish reads every reply.`,
      ``,
      `- Caventia`,
    ].join("\n");
    requesterSubject = "Your Caventia whitepaper is ready";
    publicMessage = "Whitepaper request received. Check your inbox for the download link.";
  } else if (comingSoon) {
    requesterText = [
      `Hi,`,
      ``,
      `You're on the launch list for "${paperTitle}".`,
      ``,
      `On April 17 2026 the Federal Reserve, OCC and FDIC rescinded SR 11-7 and excluded generative and agentic AI from the replacement guidance. The new edition rewrites the framework around what banks build instead. We'll send it the morning it ships.`,
      ``,
      `If you'd like to talk before then, reply to this email. Ashish reads every reply.`,
      ``,
      `- Caventia`,
    ].join("\n");
    requesterSubject = "You're on the list - AI Agent Governance After SR 11-7";
    publicMessage = "You're on the list. We'll send it the morning it ships.";
  } else {
    requesterText = [
      `Hi,`,
      ``,
      `Thanks for requesting "${paperTitle}".`,
      ``,
      `The PDF is being finalized and will arrive in a follow-up email within the next business day. If you'd like to discuss your specific examiner exposure in the meantime, reply to this email. Ashish reads every reply.`,
      ``,
      `- Caventia`,
    ].join("\n");
    requesterSubject = "Your Caventia whitepaper is on its way";
    publicMessage = "Whitepaper request received. Check your inbox for confirmation; the PDF follows within a business day.";
  }

  await sendNotification({
    to: email,
    subject: requesterSubject,
    text: requesterText,
  });

  return NextResponse.json({
    ok: true,
    message: publicMessage,
    pdfUrl,
  });
}
