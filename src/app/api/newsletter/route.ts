import { NextResponse } from "next/server";

export const runtime = "nodejs";

const NEWSLETTER_TO = "childhealthcorner@gmail.com";
// Replace with a verified sending address once the Resend domain is verified.
const NEWSLETTER_FROM = "SCHC Website <onboarding@resend.dev>";

type NewsletterPayload = {
  email?: string;
};

export async function POST(request: Request) {
  let body: NewsletterPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const email = body.email?.trim();
  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Resend is not configured yet (pending domain verification).
    // The client treats this as "subscription unavailable" and shows
    // an honest fallback rather than a fake success state.
    return NextResponse.json(
      { error: "Newsletter signup is not configured yet." },
      { status: 501 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NEWSLETTER_FROM,
        to: [NEWSLETTER_TO],
        reply_to: email,
        subject: "[SCHC] New newsletter subscriber",
        text: `New newsletter subscription request: ${email}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to subscribe." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe." },
      { status: 502 },
    );
  }
}
