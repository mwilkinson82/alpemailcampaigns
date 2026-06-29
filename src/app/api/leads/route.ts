import { NextResponse } from "next/server";
import { leadCaptureProperties } from "@/lib/campaigns/contact-properties";
import { LeadCaptureSchema } from "@/lib/campaigns/schemas";
import { getLeadMagnetDefinition } from "@/lib/campaigns/lead-magnets";
import { leadMagnetSegments } from "@/lib/campaigns/segments";
import { sendLeadMagnetDeliveryEmail } from "@/lib/resend/email";
import { sendCampaignEvent } from "@/lib/resend/events";
import { upsertContact } from "@/lib/resend/contacts";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = LeadCaptureSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead payload" }, { status: 400 });
  }

  const input = parsed.data;

  if (input.website) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const leadMagnet = getLeadMagnetDefinition(input.leadMagnetRequested);
  const properties = leadCaptureProperties(input);

  await upsertContact({
    email: input.email,
    firstName: input.firstName || undefined,
    lastName: input.lastName || undefined,
    properties,
    segmentIds: leadMagnetSegments(input.leadMagnetRequested),
  });

  await sendCampaignEvent("lead_magnet_requested", input.email, {
    lead_magnet_requested: input.leadMagnetRequested,
    source: input.source || "website",
  });

  await sendCampaignEvent(leadMagnet.deliveryEvent, input.email, {
    lead_magnet_requested: input.leadMagnetRequested,
    source: input.source || "website",
  });

  await sendLeadMagnetDeliveryEmail({
    email: input.email,
    firstName: input.firstName || undefined,
    leadMagnet: input.leadMagnetRequested,
  });

  return NextResponse.json({
    ok: true,
    leadMagnet: input.leadMagnetRequested,
    event: leadMagnet.deliveryEvent,
  });
}

