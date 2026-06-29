export type PrimaryLeak =
  | "estimating"
  | "change_order"
  | "project_profit"
  | "owner_dependence"
  | "accountability"
  | "unknown";

export type LeadMagnet =
  | "contractor_profit_leak_audit"
  | "change_order_cash_tracker_lite"
  | "estimating_profit_checklist_lite"
  | "ten_hat_owner_scorecard_lite"
  | "contractor_circle";

export type CampaignEvent =
  | "profit_leak_audit_submitted"
  | "profit_leak_audit_completed"
  | "change_order_tracker_lite_requested"
  | "estimating_checklist_lite_requested"
  | "ten_hat_scorecard_lite_requested"
  | "contractor_circle_clicked"
  | "contractor_circle_application_started"
  | "contractor_circle_member_created"
  | "public_unsubscribe_created"
  | "lead_magnet_requested"
  | "sales_intent_created";

export type LeakScores = {
  estimating: number;
  changeOrder: number;
  projectProfit: number;
  ownerDependence: number;
  accountability: number;
};

export type ContactProperties = Record<string, string>;

