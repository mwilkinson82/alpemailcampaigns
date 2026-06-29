import AuditResultEmail from "@/emails/audit-result-email";
import LeadMagnetDeliveryEmail from "@/emails/lead-magnet-delivery-email";
import { getSiteUrl, requireEnv } from "@/lib/env";
import type { LeadMagnet, LeakScores, PrimaryLeak } from "@/lib/campaigns/types";
import { getLeadMagnetDefinition } from "@/lib/campaigns/lead-magnets";
import { getResend } from "./client";

type SendAuditEmailInput = {
  email: string;
  firstName?: string;
  primaryLeak: PrimaryLeak;
  scores: LeakScores;
};

type SendLeadMagnetEmailInput = {
  email: string;
  firstName?: string;
  leadMagnet: LeadMagnet;
};

function fromEmail() {
  return requireEnv("RESEND_FROM_EMAIL");
}

export async function sendAuditResultEmail(input: SendAuditEmailInput) {
  const resend = getResend();
  const result = await resend.emails.send({
    from: fromEmail(),
    to: input.email,
    subject: "Your Profit Leak score",
    react: AuditResultEmail({
      firstName: input.firstName,
      primaryLeak: input.primaryLeak,
      scores: input.scores,
      siteUrl: getSiteUrl(),
    }),
  });

  if (result.error) {
    throw result.error;
  }

  return result.data;
}

export async function sendLeadMagnetDeliveryEmail(input: SendLeadMagnetEmailInput) {
  const definition = getLeadMagnetDefinition(input.leadMagnet);
  const resend = getResend();
  const result = await resend.emails.send({
    from: fromEmail(),
    to: input.email,
    subject: definition.deliverySubject,
    react: LeadMagnetDeliveryEmail({
      firstName: input.firstName,
      leadMagnet: definition,
      siteUrl: getSiteUrl(),
    }),
  });

  if (result.error) {
    throw result.error;
  }

  return result.data;
}

