import { NextResponse } from "next/server";
import { CampaignEventRequestSchema } from "@/lib/campaigns/schemas";
import { getEnv, requireEnv } from "@/lib/env";
import { sendCampaignEvent } from "@/lib/resend/events";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const expectedKey = requireEnv("CAMPAIGN_API_KEY");
  const actualKey = request.headers.get("x-campaign-api-key");

  if (!actualKey || actualKey !== expectedKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await request.json().catch(() => null);
  const parsed = CampaignEventRequestSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid event payload" }, { status: 400 });
  }

  const result = await sendCampaignEvent(parsed.data.event, parsed.data.email, {
    source_system: getEnv("VERCEL_PROJECT_PRODUCTION_URL") ? "vercel" : "local",
    ...(parsed.data.payload ?? {}),
  });

  return NextResponse.json({
    ok: true,
    event: parsed.data.event,
    result,
  });
}

