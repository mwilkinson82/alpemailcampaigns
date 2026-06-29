export const campaignEventDefinitions = [
  {
    name: "lead_magnet_requested",
    schema: {
      lead_magnet_requested: "string",
      source: "string",
    },
  },
  {
    name: "profit_leak_audit_submitted",
    schema: {
      lead_magnet_requested: "string",
      source: "string",
    },
  },
  {
    name: "profit_leak_audit_completed",
    schema: {
      primary_leak: "string",
      estimating_leak_score: "number",
      change_order_leak_score: "number",
      project_profit_leak_score: "number",
      owner_dependence_leak_score: "number",
      accountability_leak_score: "number",
    },
  },
  {
    name: "change_order_tracker_lite_requested",
    schema: {
      lead_magnet_requested: "string",
      source: "string",
    },
  },
  {
    name: "estimating_checklist_lite_requested",
    schema: {
      lead_magnet_requested: "string",
      source: "string",
    },
  },
  {
    name: "ten_hat_scorecard_lite_requested",
    schema: {
      lead_magnet_requested: "string",
      source: "string",
    },
  },
  {
    name: "contractor_circle_clicked",
    schema: {
      source: "string",
    },
  },
  {
    name: "contractor_circle_application_started",
    schema: {
      source: "string",
    },
  },
  {
    name: "contractor_circle_member_created",
    schema: {
      source: "string",
      plan_tier: "string",
    },
  },
  {
    name: "public_unsubscribe_created",
    schema: {
      source: "string",
    },
  },
  {
    name: "sales_intent_created",
    schema: {
      source: "string",
      trigger: "string",
    },
  },
] as const;

