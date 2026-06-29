import { NextResponse } from "next/server";
import { auditResultProperties } from "@/lib/campaigns/contact-properties";
import { AuditResultSchema } from "@/lib/campaigns/schemas";
import { calculatePrimaryLeak } from "@/lib/campaigns/profit-leak";
import { leadMagnetSegments, primaryLeakSegment } from "@/lib/campaigns/segments";
import { sendAuditResultEmail } from "@/lib/resend/email";
import { sendCampaignEvent } from "@/lib/resend/events";
import { upsertContact } from "@/lib/resend/contacts";
import type { LeakScores } from "@/lib/campaigns/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = AuditResultSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid audit payload" }, { status: 400 });
  }

  const input = parsed.data;

  if (input.website) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const scores: LeakScores = {
    estimating: input.estimatingLeakScore,
    changeOrder: input.changeOrderLeakScore,
    projectProfit: input.projectProfitLeakScore,
    ownerDependence: input.ownerDependenceLeakScore,
    accountability: input.accountabilityLeakScore,
  };

  const primaryLeak = input.primaryLeak ?? calculatePrimaryLeak(scores);
  const leakSegment = primaryLeakSegment(primaryLeak);
  const properties = auditResultProperties(input, primaryLeak);

  await upsertContact({
    email: input.email,
    firstName: input.firstName || undefined,
    lastName: input.lastName || undefined,
    properties,
    segmentIds: [...leadMagnetSegments("contractor_profit_leak_audit"), ...(leakSegment ? [leakSegment] : [])],
  });

  await sendCampaignEvent("profit_leak_audit_completed", input.email, {
    primary_leak: primaryLeak,
    estimating_leak_score: scores.estimating,
    change_order_leak_score: scores.changeOrder,
    project_profit_leak_score: scores.projectProfit,
    owner_dependence_leak_score: scores.ownerDependence,
    accountability_leak_score: scores.accountability,
  });

  await sendAuditResultEmail({
    email: input.email,
    firstName: input.firstName || undefined,
    primaryLeak,
    scores,
  });

  return NextResponse.json({
    ok: true,
    primaryLeak,
  });
}

