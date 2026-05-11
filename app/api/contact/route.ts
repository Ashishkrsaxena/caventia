import { NextResponse } from "next/server";
import { isValidEmail, sendNotification } from "@/lib/email";

export const runtime = "nodejs";

type Body = {
  kind?: string;
  name?: string;
  email?: string;
  title?: string;
  institution?: string;
  tier?: string;
  pain?: string;
  window?: string;
  outlet?: string;
  deadline?: string;
  topic?: string;
  consent?: string | boolean;
};

const FORWARD_TO = process.env.CONTACT_FORWARD_EMAIL ?? "ashish@caventia.com";

function presentable(body: Body): string {
  const fields: Array<[string, string | undefined]> =
    body.kind === "press"
      ? [
          ["Inquiry type", "Press"],
          ["Name", body.name],
          ["Email", body.email],
          ["Outlet", body.outlet],
          ["Deadline", body.deadline],
          ["Topic", body.topic],
        ]
      : [
          ["Inquiry type", "Design partner"],
          ["Name", body.name],
          ["Email", body.email],
          ["Title", body.title],
          ["Institution", body.institution],
          ["AUM tier / category", body.tier],
          ["Regulator pain", body.pain],
          ["Preferred call window", body.window],
        ];

  return fields
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const kind = body.kind === "press" ? "press" : "design-partner";
  const email = (body.email ?? "").trim();
  const name = (body.name ?? "").trim();

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 }
    );
  }
  if (!body.consent) {
    return NextResponse.json(
      { error: "Please confirm consent to follow-up." },
      { status: 400 }
    );
  }
  if (kind === "design-partner") {
    if (!body.title || !body.institution) {
      return NextResponse.json(
        { error: "Title and institution are required." },
        { status: 400 }
      );
    }
  } else {
    if (!body.outlet || !body.topic) {
      return NextResponse.json(
        { error: "Outlet and topic are required." },
        { status: 400 }
      );
    }
  }

  const subject =
    kind === "press"
      ? `[Caventia] Press inquiry - ${body.outlet}`
      : `[Caventia] Design-partner inquiry - ${body.institution}`;

  await sendNotification({
    to: FORWARD_TO,
    subject,
    text: presentable({ ...body, kind }),
    replyTo: email,
  });

  // Confirmation back to requester.
  await sendNotification({
    to: email,
    subject: "Caventia - we received your note",
    text: [
      `Hi ${name.split(" ")[0]} -`,
      ``,
      `Thanks for writing. Your ${
        kind === "press" ? "press" : "design-partner"
      } note has reached the founder. Expect a reply within two business days.`,
      ``,
      `- Caventia`,
    ].join("\n"),
  });

  return NextResponse.json({
    ok: true,
    message: "Thank you. The founder will be in touch within two business days.",
  });
}
