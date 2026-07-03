import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type ContactEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ORG_NAME = "Sylfi's Child Health Corner";
const SLOGAN = "Healthy Habits. Happy Kids. Brighter Tomorrow.";

// Brand palette (mirrors @theme in globals.css)
const BRAND = "#34C759";
const BRAND_DARK = "#1FA84A";
const DARK_TEXT = "#1F2D2F";
const LIGHT_BG = "#F5F7F7";
const MUTED = "#6B7A7C";
const BORDER = "#E4EAEA";

const SERIF =
  "Georgia, 'Times New Roman', Cambria, 'Iowan Old Style', serif";
const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New contact message from ${name}: ${subject}`}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header — typographic wordmark, no image */}
          <Section style={header}>
            <Heading style={orgName}>{ORG_NAME}</Heading>
            <Text style={slogan}>{SLOGAN}</Text>
          </Section>

          {/* Card */}
          <Section style={card}>
            <Text style={eyebrow}>New contact message</Text>

            <Row label="From" value={name} />
            <Row
              label="Email"
              value={
                <Link href={`mailto:${email}`} style={linkStyle}>
                  {email}
                </Link>
              }
            />
            <Row label="Subject" value={subject} />

            <Hr style={divider} />

            <Text style={messageLabel}>Message</Text>
            <Text style={messageBody}>{message}</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Sent from the contact form at{" "}
              <Link href="https://childhealthcorner.org" style={footerLink}>
                childhealthcorner.org
              </Link>
            </Text>
            <Text style={footerHint}>
              Reply directly to this email to respond to {name}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  );
}

export default ContactEmail;

/* ---------- styles ---------- */

const body: React.CSSProperties = {
  backgroundColor: LIGHT_BG,
  margin: 0,
  padding: "32px 0",
  fontFamily: SANS,
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: 0,
};

const header: React.CSSProperties = {
  padding: "8px 4px 20px",
  borderBottom: `3px solid ${BRAND}`,
};

const orgName: React.CSSProperties = {
  color: DARK_TEXT,
  fontFamily: SERIF,
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: "1.2",
  letterSpacing: "-0.3px",
  margin: 0,
};

const slogan: React.CSSProperties = {
  color: MUTED,
  fontFamily: SERIF,
  fontSize: "14px",
  fontStyle: "italic",
  margin: "6px 0 0",
};

const card: React.CSSProperties = {
  padding: "24px 4px 4px",
};

const eyebrow: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: "0 0 20px",
};

const row: React.CSSProperties = {
  marginBottom: "16px",
};

const rowLabel: React.CSSProperties = {
  color: MUTED,
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  margin: "0 0 3px",
};

const rowValue: React.CSSProperties = {
  color: DARK_TEXT,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "1.4",
  margin: 0,
};

const divider: React.CSSProperties = {
  borderColor: BORDER,
  margin: "22px 0",
};

const messageLabel: React.CSSProperties = {
  color: MUTED,
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  margin: "0 0 10px",
};

const messageBody: React.CSSProperties = {
  color: DARK_TEXT,
  fontFamily: SERIF,
  fontSize: "16px",
  lineHeight: "1.7",
  whiteSpace: "pre-line",
  margin: 0,
  paddingLeft: "16px",
  borderLeft: `3px solid ${BORDER}`,
};

const footer: React.CSSProperties = {
  marginTop: "28px",
  paddingTop: "18px",
  borderTop: `1px solid ${BORDER}`,
};

const footerText: React.CSSProperties = {
  color: MUTED,
  fontSize: "13px",
  lineHeight: "1.5",
  margin: "0 0 4px",
};

const footerHint: React.CSSProperties = {
  color: MUTED,
  fontSize: "12px",
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: "16px",
  fontWeight: 500,
  textDecoration: "none",
};

const footerLink: React.CSSProperties = {
  color: BRAND_DARK,
  textDecoration: "none",
  fontWeight: 600,
};
