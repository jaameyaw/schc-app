import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { LOGO_CID } from "./logoBase64";

const ORG_NAME = "Sylfi's Child Health Corner";
const SLOGAN = "Healthy Habits. Happy Kids. Brighter Tomorrow.";

// Brand palette (mirrors @theme in globals.css / ContactEmail.tsx)
const BRAND = "#34C759";
const BRAND_DARK = "#1FA84A";
const DARK_TEXT = "#1F2D2F";
const LIGHT_BG = "#F5F7F7";
const MUTED = "#6B7A7C";
const BORDER = "#E4EAEA";

const BENEFITS = [
  "Updates from our outreach programs and campaigns",
  "Inspiring stories of lives being impacted",
  "Volunteer and partnership opportunities",
  "Practical child health tips and resources",
  "Ways you can help create lasting change",
];

export function WelcomeEmail({ subscriberName }: { subscriberName?: string }) {
  const greetingText = subscriberName
    ? `Hello ${subscriberName}, and welcome! 💚`
    : "Hello, and welcome! 💚";

  return (
    <Html>
      <Head />
      <Preview>Welcome to Sylfi&apos;s Child Health Corner — you&apos;re in! 💚</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header — white, full logo + name + slogan */}
          <Section style={header}>
            <Img
              src={`cid:${LOGO_CID}`}
              width="180"
              alt={ORG_NAME}
              style={logo}
            />
            <Heading style={orgName}>{ORG_NAME}</Heading>
            <Text style={slogan}>{SLOGAN}</Text>
          </Section>

          {/* Green accent bar with eyebrow */}
          <Section style={eyebrowBar}>
            <Text style={eyebrow}>Welcome to the Family</Text>
          </Section>

          {/* Body card */}
          <Section style={card}>
            <Heading style={greeting}>{greetingText}</Heading>

            <Text style={paragraph}>
              We&apos;re grateful you&apos;ve joined our community of people who
              believe every child deserves a healthy start in life.
            </Text>

            <Text style={leadIn}>By subscribing, you&apos;ll receive:</Text>

            {BENEFITS.map((item) => (
              <Section key={item} style={benefitRow}>
                <Text style={benefitBullet}>✓</Text>
                <Text style={benefitText}>{item}</Text>
              </Section>
            ))}

            <Text style={paragraph}>
              Every child reached, every family supported, and every community
              strengthened is possible because people like you choose to care.
            </Text>

            <Text style={paragraph}>
              Thank you for being part of our mission. We&apos;re excited to have
              you with us — together, we&apos;re building healthier children and
              stronger communities.
            </Text>

            <Hr style={divider} />

            {/* Signature */}
            <Text style={signOff}>With gratitude,</Text>
            <Text style={signTeam}>The {ORG_NAME} Team</Text>
            <Text style={signSlogan}>🌿 {SLOGAN}</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Visit us at{" "}
              <Link href="https://childhealthcorner.org" style={footerLink}>
                childhealthcorner.org
              </Link>
            </Text>
            <Text style={footerHint}>
              You&apos;re receiving this because you subscribed to updates from{" "}
              {ORG_NAME}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;

/* ---------- styles ---------- */

const body: React.CSSProperties = {
  backgroundColor: LIGHT_BG,
  margin: 0,
  padding: "24px 0",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: 0,
};

const header: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "16px 16px 0 0",
  border: `1px solid ${BORDER}`,
  borderBottom: "none",
  padding: "32px 24px 24px",
  textAlign: "center",
};

const logo: React.CSSProperties = {
  margin: "0 auto",
};

const orgName: React.CSSProperties = {
  color: DARK_TEXT,
  fontSize: "22px",
  fontWeight: 700,
  margin: "16px 0 0",
};

const slogan: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: "13px",
  fontWeight: 600,
  margin: "6px 0 0",
  letterSpacing: "0.2px",
};

const eyebrowBar: React.CSSProperties = {
  background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
  padding: "10px 24px",
  textAlign: "center",
};

const eyebrow: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: 0,
};

const card: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "32px 28px 8px",
  border: `1px solid ${BORDER}`,
  borderTop: "none",
};

const greeting: React.CSSProperties = {
  color: DARK_TEXT,
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "1.3",
  margin: "0 0 18px",
};

const paragraph: React.CSSProperties = {
  color: DARK_TEXT,
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "0 0 18px",
};

const leadIn: React.CSSProperties = {
  color: DARK_TEXT,
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: "1.6",
  margin: "0 0 12px",
};

const benefitRow: React.CSSProperties = {
  margin: "0 0 10px",
};

const benefitBullet: React.CSSProperties = {
  display: "inline-block",
  width: "22px",
  color: BRAND_DARK,
  fontSize: "15px",
  fontWeight: 700,
  margin: 0,
  verticalAlign: "top",
};

const benefitText: React.CSSProperties = {
  display: "inline-block",
  width: "calc(100% - 26px)",
  color: DARK_TEXT,
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
  verticalAlign: "top",
};

const divider: React.CSSProperties = {
  borderColor: BORDER,
  margin: "24px 0 20px",
};

const signOff: React.CSSProperties = {
  color: MUTED,
  fontSize: "15px",
  margin: "0 0 2px",
};

const signTeam: React.CSSProperties = {
  color: DARK_TEXT,
  fontSize: "15px",
  fontWeight: 700,
  margin: "0 0 6px",
};

const signSlogan: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.2px",
  margin: 0,
};

const footer: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 16px 16px",
  border: `1px solid ${BORDER}`,
  borderTop: "none",
  padding: "20px 28px 28px",
  textAlign: "center",
};

const footerText: React.CSSProperties = {
  color: MUTED,
  fontSize: "13px",
  margin: "0 0 4px",
};

const footerHint: React.CSSProperties = {
  color: MUTED,
  fontSize: "12px",
  lineHeight: "1.5",
  margin: 0,
};

const footerLink: React.CSSProperties = {
  color: BRAND_DARK,
  textDecoration: "none",
  fontWeight: 600,
};
