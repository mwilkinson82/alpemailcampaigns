import { masterProfitLeakSequence } from "@/lib/campaigns/sequences";

export default function Home() {
  return (
    <main className="shell">
      <div className="eyebrow">Campaign Infrastructure</div>
      <h1 className="page-title">Lead magnets, drip campaigns, and Resend events now have a home.</h1>
      <p className="lede">
        This Vercel app is the controlled public acquisition surface for Contractor Circle, AOS, and
        OverWatch / IOR. Landing pages come next; the infrastructure comes first.
      </p>

      <section className="grid" aria-label="Infrastructure status">
        <div className="panel">
          <h2>Email delivery</h2>
          <p>
            Resend is wired through server routes with lazy runtime initialization, React Email
            templates, and signed webhook intake.
          </p>
        </div>
        <div className="panel">
          <h2>Drip sequence</h2>
          <p>
            The master Profit Leak sequence has {masterProfitLeakSequence.length} mapped emails, from
            Day 0 result delivery to the Day 14 inside look.
          </p>
        </div>
        <div className="panel">
          <h2>Public endpoints</h2>
          <ul>
            <li>
              <span className="code">POST /api/leads</span>
            </li>
            <li>
              <span className="code">POST /api/audit-result</span>
            </li>
            <li>
              <span className="code">POST /api/webhooks/resend</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

