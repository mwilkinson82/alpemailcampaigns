import { getResend } from "./client";
import { requireEnv } from "@/lib/env";

export function verifyResendWebhook(payload: string, headers: Headers) {
  return getResend().webhooks.verify({
    payload,
    headers: {
      id: headers.get("svix-id") ?? "",
      timestamp: headers.get("svix-timestamp") ?? "",
      signature: headers.get("svix-signature") ?? "",
    },
    webhookSecret: requireEnv("RESEND_WEBHOOK_SECRET"),
  });
}

