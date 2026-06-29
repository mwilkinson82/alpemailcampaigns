import { getLeakDefinition } from "@/lib/campaigns/profit-leak";
import type { LeakScores, PrimaryLeak } from "@/lib/campaigns/types";

type Props = {
  firstName?: string;
  primaryLeak: PrimaryLeak;
  scores: LeakScores;
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

export default function AuditResultEmail({ firstName, primaryLeak, scores, siteUrl }: Props) {
  const result = getLeakDefinition(primaryLeak);
  const displayName = firstName || "there";

  return (
    <html>
      <body style={body}>
        <div style={{ display: "none", maxHeight: 0, overflow: "hidden" }}>
          Your Contractor Profit Leak result is ready.
        </div>
        <div style={container}>
          <section style={card}>
            <p style={{ color: "#115e59", fontSize: "12px", fontWeight: 700 }}>
              Contractor Profit Leak Audit
            </p>
            <h1 style={{ margin: "12px 0", fontSize: "28px", lineHeight: "32px" }}>
              {result?.title ?? "Your Profit Leak Result"}
            </h1>
            <p style={muted}>Hey {displayName},</p>
            <p style={muted}>
              {result?.summary ??
                "Your audit shows where money, attention, and control are leaking in the company."}
            </p>
            <p style={muted}>
              Lowest score is the first place to look. Do not try to fix the whole company today.
              Find the leak, fix the first one, then install the system that keeps it from coming
              back.
            </p>
            <p style={muted}>
              Scores: estimating {scores.estimating}, change orders {scores.changeOrder}, project
              profit {scores.projectProfit}, owner dependence {scores.ownerDependence},
              accountability {scores.accountability}.
            </p>
            <p style={muted}>
              {result?.circleBridge ??
                "Contractor Circle is where the tools, rhythms, and implementation path live."}
            </p>
            <a
              href={`${siteUrl}/contractor-circle`}
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
              See the Contractor Circle path
            </a>
            <p style={{ ...muted, marginTop: "28px" }}>Marshall</p>
          </section>
        </div>
      </body>
    </html>
  );
}
