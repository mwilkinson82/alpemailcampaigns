import type { CampaignEvent, LeadMagnet } from "./types";

export type LeadMagnetDefinition = {
  key: LeadMagnet;
  label: string;
  deliveryEvent: CampaignEvent;
  deliverySubject: string;
  publicUrl: string;
  privateBridge: string;
};

export const leadMagnetDefinitions: Record<LeadMagnet, LeadMagnetDefinition> = {
  contractor_profit_leak_audit: {
    key: "contractor_profit_leak_audit",
    label: "Contractor Profit Leak Audit",
    deliveryEvent: "profit_leak_audit_submitted",
    deliverySubject: "Take the Contractor Profit Leak Audit",
    publicUrl: "/profit-leak-audit",
    privateBridge: "The public audit diagnoses the leak. Contractor Circle is where members fix it.",
  },
  change_order_cash_tracker_lite: {
    key: "change_order_cash_tracker_lite",
    label: "Change Order Cash Tracker Lite",
    deliveryEvent: "change_order_tracker_lite_requested",
    deliverySubject: "Your Change Order Cash Tracker Lite",
    publicUrl: "/change-order-cash-tracker",
    privateBridge:
      "This is the lite tracker. The full Change Order Cash system lives inside Contractor Circle Hub.",
  },
  estimating_profit_checklist_lite: {
    key: "estimating_profit_checklist_lite",
    label: "Estimating Profit Checklist Lite",
    deliveryEvent: "estimating_checklist_lite_requested",
    deliverySubject: "Your Estimating Profit Checklist Lite",
    publicUrl: "/estimating-profit-checklist",
    privateBridge:
      "This is the lite checklist. The full Estimating Profit system lives inside Contractor Circle Hub.",
  },
  ten_hat_owner_scorecard_lite: {
    key: "ten_hat_owner_scorecard_lite",
    label: "10-Hat Owner Scorecard Lite",
    deliveryEvent: "ten_hat_scorecard_lite_requested",
    deliverySubject: "Your 10-Hat Owner Scorecard Lite",
    publicUrl: "/ten-hat-owner-scorecard",
    privateBridge: "This is the public scorecard. The full AOS implementation path is member-only.",
  },
  contractor_circle: {
    key: "contractor_circle",
    label: "Contractor Circle",
    deliveryEvent: "contractor_circle_clicked",
    deliverySubject: "Inside Contractor Circle",
    publicUrl: "/contractor-circle",
    privateBridge: "Contractor Circle is the gated implementation environment.",
  },
};

export function getLeadMagnetDefinition(leadMagnet: LeadMagnet) {
  return leadMagnetDefinitions[leadMagnet];
}

