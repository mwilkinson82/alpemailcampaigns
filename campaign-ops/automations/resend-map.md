# Resend Automation Map

This maps the Contractor Circle public funnel into Resend.

## Automation Principle

Do not build separate nurture machines for every lead magnet.

Use one master sequence:

```text
Audit submitted -> leak identified -> result email -> Profit Leak sequence -> Contractor Circle CTA.
```

Supporting lead magnets deliver the lite tool, then route the lead back into the audit and master sequence.

## Event Names

Use consistent custom event names:

```text
profit_leak_audit_submitted
profit_leak_audit_completed
change_order_tracker_lite_requested
estimating_checklist_lite_requested
ten_hat_scorecard_lite_requested
contractor_circle_clicked
contractor_circle_application_started
contractor_circle_member_created
public_unsubscribe_created
```

## Automation 1: Profit Leak Audit

Trigger:

```text
profit_leak_audit_completed
```

Actions:

1. Create or update contact in `Contractor Money Systems Leads`.
2. Save all audit scores as contact fields.
3. Save `primary_leak`.
4. Set the `lead_profit_leak_audit` campaign label.
5. Add the contact to the matching leak segment.
6. Send Day 0 result email.
7. Start the master Profit Leak sequence.

Exit conditions:

- Contact unsubscribes.
- Contact becomes `member_contractor_circle`.
- Contact is marked `customer_aos` or `customer_ior`.

## Automation 2: Change Order Cash Tracker Lite

Trigger:

```text
change_order_tracker_lite_requested
```

Actions:

1. Create or update contact.
2. Set the `lead_change_order_cash_tracker_lite` campaign label.
3. Set `intent_change_order_cash` or add to the matching segment.
4. Deliver Change Order Cash Tracker Lite.
5. Invite the lead to complete the Contractor Profit Leak Audit.
6. If the audit is completed, continue through Automation 1.

Public delivery language:

```text
This is the lite tracker. The full Change Order Cash system, weekly review rhythm, examples, assignments, and implementation support live inside Contractor Circle Hub.
```

## Automation 3: Estimating Profit Checklist Lite

Trigger:

```text
estimating_checklist_lite_requested
```

Actions:

1. Create or update contact.
2. Set the `lead_estimating_profit_checklist_lite` campaign label.
3. Deliver Estimating Profit Checklist Lite.
4. Invite the lead to complete the Contractor Profit Leak Audit.
5. If the audit is completed, continue through Automation 1.

## Automation 4: 10-Hat Owner Scorecard Lite

Trigger:

```text
ten_hat_scorecard_lite_requested
```

Actions:

1. Create or update contact.
2. Set the `lead_ten_hat_owner_scorecard_lite` campaign label.
3. Deliver 10-Hat Owner Scorecard Lite.
4. Invite the lead to complete the Contractor Profit Leak Audit.
5. If the audit is completed, continue through Automation 1.

## Automation 5: Sales Intent

Trigger on any of:

- Clicked Contractor Circle CTA.
- Clicked Contractor Circle CTA twice.
- Replied to a nurture email.
- Requested Change Order Cash Tracker Lite and scored lowest on change orders.
- Scored lowest on project profit, owner dependence, or accountability.
- Visited or started the Contractor Circle application.

Actions:

1. Set `sales_intent` or add the contact to the high-intent segment.
2. Save `sales_intent_at`.
3. Notify the owner/sales inbox.
4. Send the plain-text follow-up:

```text
Subject: What is leaking the most money?

First name,

Quick question.

Which leak is costing you the most right now?

1. Bad estimates.
2. Change orders not getting paid.
3. Jobs managed through status instead of profit.
4. You carrying every decision.
5. People not owning outcomes.

Reply with the number and I will point you to the first move.

Marshall
```

## Automation 6: Contractor Circle Member Suppression

Trigger:

```text
contractor_circle_member_created
```

Actions:

1. Set `member_contractor_circle` or add the contact to the member segment.
2. Set `suppressed_public_sales` or add the contact to the suppression segment.
3. Remove from active public sales nurture.
4. Route to member onboarding inside Contractor Circle Hub.

Important:

```text
Do not send public lead magnet sales emails to current members.
```

## Automation 7: Weekly Profit Leak Broadcast

Trigger:

Manual weekly broadcast.

Audience:

- Subscribed leads.
- Not members.
- Not suppressed.

Suggested segments:

- All public leads.
- Leads by primary leak.
- High-intent leads.

CTA:

```text
Take the audit.
Find the leak.
Join Contractor Circle to fix it.
```

## MVP Launch Automations

Launch only these first:

1. Profit Leak Audit result delivery.
2. Master Profit Leak sequence.
3. Change Order Cash Tracker Lite delivery.
4. Sales-intent notification.
5. Member suppression.

Add the rest after the first campaign is producing leads.
