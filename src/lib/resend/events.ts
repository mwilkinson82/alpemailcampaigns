import { getResend } from "./client";
import type { CampaignEvent } from "@/lib/campaigns/types";

type EventPayload = Record<string, string | number | boolean>;

export async function sendCampaignEvent(event: CampaignEvent, email: string, payload?: EventPayload) {
  const resend = getResend();
  const result = await resend.events.send({
    event,
    email,
    payload,
  });

  if (result.error) {
    throw result.error;
  }

  return result.data;
}

