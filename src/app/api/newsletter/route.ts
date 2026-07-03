import { NextResponse } from "next/server";
import { createElement } from "react";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/emails/WelcomeEmail";
import { LOGO_BASE64, LOGO_CID, LOGO_FILENAME } from "@/emails/logoBase64";
import { newsletterSchema } from "@/lib/newsletterSchema";

export const runtime = "nodejs";

const WELCOME_FROM =
  "Sylfi's Child Health Corner <noreply@mail.childhealthcorner.org>";

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

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const { email } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter signup is not configured yet." },
      { status: 501 },
    );
  }

  try {
    // Add the subscriber to the Resend default audience. Resend is idempotent
    // on email, so re-subscribing an existing contact still returns ok.
    const res = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to subscribe." },
        { status: 502 },
      );
    }

    // Best-effort welcome email. The subscriber is already saved, so a failed
    // send should not fail the request — we just log and still return ok.
    try {
      const emailElement = createElement(WelcomeEmail);
      const welcomeHtml = await render(emailElement);
      const welcomeText = await render(emailElement, { plainText: true });

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: WELCOME_FROM,
          to: [email],
          subject: "Welcome to the SCHC Family 💚",
          headers: { "X-Entity-Ref-ID": crypto.randomUUID() },
          html: welcomeHtml,
          text: welcomeText,
          attachments: [
            {
              filename: LOGO_FILENAME,
              content: LOGO_BASE64,
              content_id: LOGO_CID,
            },
          ],
        }),
      });

      if (!emailRes.ok) {
        console.error(
          "Newsletter welcome email failed:",
          emailRes.status,
          await emailRes.text(),
        );
      }
    } catch (err) {
      console.error("Newsletter welcome email error:", err);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe." },
      { status: 502 },
    );
  }
}
