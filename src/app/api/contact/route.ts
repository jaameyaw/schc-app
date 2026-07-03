import { NextResponse } from "next/server";
import { createElement } from "react";
import { render } from "@react-email/render";
import { ContactEmail } from "@/emails/ContactEmail";
import { contactSchema } from "@/lib/contactSchema";

export const runtime = "nodejs";

const CONTACT_TO = "childhealthcorner@gmail.com";
const CONTACT_FROM = "Sylfi's Child Health Corner <contact@mail.childhealthcorner.org>";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data." },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Resend is not configured yet (pending domain verification).
    // The client treats this as "online submission unavailable" and shows
    // an honest fallback rather than a fake success state.
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 501 },
    );
  }

  const emailElement = createElement(ContactEmail, {
    name,
    email,
    subject,
    message,
  });
  const html = await render(emailElement);
  const text = await render(emailElement, { plainText: true });

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject,
        headers: { "X-Entity-Ref-ID": crypto.randomUUID() },
        html,
        text,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 },
    );
  }
}
