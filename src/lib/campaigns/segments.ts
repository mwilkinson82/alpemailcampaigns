import type { LeadMagnet, PrimaryLeak } from "./types";
import { getEnv } from "@/lib/env";

export function leadMagnetSegments(leadMagnet: LeadMagnet) {
  const segments = [getEnv("RESEND_SEGMENT_ALL_LEADS")];

  if (leadMagnet === "contractor_profit_leak_audit") {
    segments.push(getEnv("RESEND_SEGMENT_LEAD_PROFIT_LEAK_AUDIT"));
  }

  if (leadMagnet === "change_order_cash_tracker_lite") {
    segments.push(getEnv("RESEND_SEGMENT_LEAD_CHANGE_ORDER_TRACKER"));
  }

  return segments.filter(Boolean) as string[];
}

export function primaryLeakSegment(primaryLeak: PrimaryLeak) {
  const map: Record<PrimaryLeak, string | undefined> = {
    estimating: getEnv("RESEND_SEGMENT_LEAK_ESTIMATING"),
    change_order: getEnv("RESEND_SEGMENT_LEAK_CHANGE_ORDER"),
    project_profit: getEnv("RESEND_SEGMENT_LEAK_PROJECT_PROFIT"),
    owner_dependence: getEnv("RESEND_SEGMENT_LEAK_OWNER_DEPENDENCE"),
    accountability: getEnv("RESEND_SEGMENT_LEAK_ACCOUNTABILITY"),
    unknown: undefined,
  };

  return map[primaryLeak];
}

