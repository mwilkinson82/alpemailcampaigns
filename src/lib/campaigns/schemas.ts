import { z } from "zod";

export const LeadMagnetSchema = z.enum([
  "contractor_profit_leak_audit",
  "change_order_cash_tracker_lite",
  "estimating_profit_checklist_lite",
  "ten_hat_owner_scorecard_lite",
  "contractor_circle",
]);

export const PrimaryLeakSchema = z.enum([
  "estimating",
  "change_order",
  "project_profit",
  "owner_dependence",
  "accountability",
  "unknown",
]);

export const CampaignEventSchema = z.enum([
  "profit_leak_audit_submitted",
  "profit_leak_audit_completed",
  "change_order_tracker_lite_requested",
  "estimating_checklist_lite_requested",
  "ten_hat_scorecard_lite_requested",
  "contractor_circle_clicked",
  "contractor_circle_application_started",
  "contractor_circle_member_created",
  "public_unsubscribe_created",
  "lead_magnet_requested",
  "sales_intent_created",
]);

const OptionalString = z.string().trim().optional().or(z.literal(""));

export const LeadCaptureSchema = z.object({
  email: z.email(),
  firstName: OptionalString,
  lastName: OptionalString,
  companyName: OptionalString,
  trade: OptionalString,
  annualRevenueRange: OptionalString,
  fieldEmployeeCount: OptionalString,
  source: OptionalString.default("website"),
  utmSource: OptionalString,
  utmMedium: OptionalString,
  utmCampaign: OptionalString,
  consentSource: OptionalString.default("lead_magnet_form"),
  leadMagnetRequested: LeadMagnetSchema,
  website: OptionalString,
});

export const AuditResultSchema = LeadCaptureSchema.extend({
  estimatingLeakScore: z.coerce.number().min(5).max(25),
  changeOrderLeakScore: z.coerce.number().min(5).max(25),
  projectProfitLeakScore: z.coerce.number().min(5).max(25),
  ownerDependenceLeakScore: z.coerce.number().min(5).max(25),
  accountabilityLeakScore: z.coerce.number().min(5).max(25),
  primaryLeak: PrimaryLeakSchema.optional(),
});

export const CampaignEventRequestSchema = z.object({
  email: z.email(),
  event: CampaignEventSchema,
  payload: z.record(z.string(), z.string().or(z.number()).or(z.boolean())).optional(),
});

export type LeadCaptureInput = z.infer<typeof LeadCaptureSchema>;
export type AuditResultInput = z.infer<typeof AuditResultSchema>;

