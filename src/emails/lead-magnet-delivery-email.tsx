import type { LeadMagnetDefinition } from "@/lib/campaigns/lead-magnets";

type Props = {
  firstName?: string;
  leadMagnet: LeadMagnetDefinition;
  siteUrl: string;
};

const body = {
  backgroundColor: "#f7f5ef",
  color: "#171717",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "32px 20px",
  maxWidth: "620px",
};

const card = {
  backgroundColor: "#fffdf7",
  border: "1px solid #d8d2c4",
  borderRadius: "8px",
  padding: "28px",
};

const muted = {
  color: "#67645f",
  fontSize: "15px",
  lineHeight: "24px",
};

export default function LeadMagnetDeliveryEmail({ firstName, leadMagnet, siteUrl }: Props) {
  return (
    <html>
      <body style={body}>
        <div style={{ display: "none", maxHeight: 0, overflow: "hidden" }}>
          {leadMagnet.label} is ready.
        </div>
        <div style={container}>
          <section style={card}>
            <p style={{ color: "#115e59", fontSize: "12px", fontWeight: 700 }}>
              Contractor Money Systems
            </p>
            <h1 style={{ margin: "12px 0", fontSize: "28px", lineHeight: "32px" }}>
              {leadMagnet.label}
            </h1>
            <p style={muted}>Hey {firstName || "there"},</p>
            <p style={muted}>
              Here is the public version you requested. Use it to make the leak visible first.
            </p>
            <p style={muted}>{leadMagnet.privateBridge}</p>
            <a
              href={`${siteUrl}${leadMagnet.publicUrl}`}
              style={{
                backgroundColor: "#115e59",
                borderRadius: "6px",
                color: "#ffffff",
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 700,
                marginTop: "10px",
                padding: "12px 16px",
                textDecoration: "none",
              }}
            >
              Open the tool
            </a>
            <p style={{ ...muted, marginTop: "28px" }}>Marshall</p>
          </section>
        </div>
      </body>
    </html>
  );
}
