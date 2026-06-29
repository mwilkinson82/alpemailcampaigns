import type { AuditResultInput, LeadCaptureInput } from "./schemas";
import type { ContactProperties, PrimaryLeak } from "./types";

function clean(value: unknown) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  return String(value);
}

export function leadCaptureProperties(input: LeadCaptureInput): ContactProperties {
  return Object.fromEntries(
    Object.entries({
      first_name: clean(input.firstName),
      last_name: clean(input.lastName),
      company_name: clean(input.companyName),
      trade: clean(input.trade),
      annual_revenue_range: clean(input.annualRevenueRange),
      field_employee_count: clean(input.fieldEmployeeCount),
      source: clean(input.source),
      utm_source: clean(input.utmSource),
      utm_medium: clean(input.utmMedium),
      utm_campaign: clean(input.utmCampaign),
      consent_source: clean(input.consentSource),
      lead_magnet_requested: clean(input.leadMagnetRequested),
      contractor_circle_status: "lead",
    }).filter(([, value]) => value !== undefined),
  ) as ContactProperties;
}

export function auditResultProperties(input: AuditResultInput, primaryLeak: PrimaryLeak): ContactProperties {
  return {
    ...leadCaptureProperties(input),
    audit_completed_at: new Date().toISOString(),
    primary_leak: primaryLeak,
    estimating_leak_score: String(input.estimatingLeakScore),
    change_order_leak_score: String(input.changeOrderLeakScore),
    project_profit_leak_score: String(input.projectProfitLeakScore),
    owner_dependence_leak_score: String(input.ownerDependenceLeakScore),
    accountability_leak_score: String(input.accountabilityLeakScore),
  };
}

