# Email Automation Setup

Resend is the selected delivery and automation layer for the public Contractor Circle funnel.

Campaign source-of-truth should live in a dedicated campaign repository:

- `alpemailcampaigns`
- `https://github.com/mwilkinson82/alpemailcampaigns.git`

Resend should send emails, store contacts, run automations, manage broadcasts, and report events through webhooks. The campaign docs should define what Resend sends, what fields it stores, what events matter, and what the dashboard should track.

Do not make the OverWatch/IOR application repo govern email campaigns for AOS, Contractor Circle Hub, OverWatch, and future products.

The current `campaign-ops/` folder is a staging copy until the dedicated repo exists.

See:

- `campaign-ops/README.md`
- `campaign-ops/repository-architecture.md`
- `campaign-ops/resend-infrastructure.md`
- `campaign-ops/data-model.md`
- `campaign-ops/automations/resend-map.md`
- `campaign-ops/tracking/dashboard-spec.md`

## Core Audience

Use one primary audience/list:

```text
Contractor Money Systems Leads
```

Use contact properties, segments, campaign labels, and events for routing instead of separate lists.

Resend implementation note:

```text
When this doc says "tag," implement it in Resend as a contact property, segment, or event unless a native Resend email tag is specifically useful for email-level reporting.
```

## Primary Form

### Contractor Profit Leak Audit

Form name:

```text
Contractor Profit Leak Audit
```

Campaign labels on submit:

- `lead_profit_leak_audit`
- `source_instagram_bio`
- `funnel_profit_leak_to_contractor_circle`

Automation:

- Send Day 0 result email.
- Save `primary_leak` and route into the matching leak segment.
- Start master drip campaign.
- Store audit completion and result events for the dashboard.

Access note:

```text
This is the public version of the audit. It captures leads and diagnoses pain. The Hub version routes paid members into tools, assignments, and implementation tracks.
```

## Supporting Forms

These forms are allowed, but they should not start separate nurture machines.

They should deliver the supporting tool, record the source label, and route into the Contractor Profit Leak Audit / master sequence.

### Change Order Cash Tracker

Campaign labels on submit:

- `lead_change_order_cash_tracker`
- `source_instagram_bio`
- `route_to_profit_leak_audit`

Automation:

- Deliver lite tracker.
- Invite to complete the Contractor Profit Leak Audit.
- If audit completed, continue master sequence.
- Track the request as `change_order_tracker_lite_requested`.

### Estimating Profit Checklist

Campaign labels on submit:

- `lead_estimating_profit_checklist`
- `source_instagram_bio`
- `route_to_profit_leak_audit`

Automation:

- Deliver lite checklist.
- Invite to complete the Contractor Profit Leak Audit.
- If audit completed, continue master sequence.

### 10-Hat Owner Scorecard

Campaign labels on submit:

- `lead_ten_hat_owner_scorecard`
- `source_instagram_bio`
- `route_to_profit_leak_audit`

Automation:

- Deliver diagnostic scorecard.
- Invite to complete the Contractor Profit Leak Audit.
- If audit completed, continue master sequence.

## Access Segmentation

Public leads can receive:

- Audit result.
- Lite/diagnostic tools.
- Public previews.
- Email nurture.
- Contractor Circle invitation.

Contractor Circle members can access inside the gated Hub:

- Start Here / Profit Leak Audit for members.
- Full Change Order Cash system.
- Full Estimating Profit system.
- Full Project Profit / IOR / OverWatch tools.
- Full AOS tools.
- Implementation tracks.
- Call replays.
- Assignments.
- Wins board.

## Leak-Type Labels / Segments

- `leak_estimating`
- `leak_change_order`
- `leak_project_profit`
- `leak_owner_dependence`
- `leak_accountability`

## Intent Labels / Segments

- `intent_change_order_cash`
- `intent_project_profit_control`
- `intent_contractor_circle`
- `sales_intent`
- `member_contractor_circle`

## Recommended Custom Fields

- `first_name`
- `email`
- `company_name`
- `trade`
- `annual_revenue_range`
- `field_employee_count`
- `primary_leak`
- `estimating_leak_score`
- `change_order_leak_score`
- `project_profit_leak_score`
- `owner_dependence_leak_score`
- `accountability_leak_score`
- `contractor_circle_status`
- `current_mrr`
- `plan_tier`

Full contact and event definitions live in:

- `campaign-ops/data-model.md`

## Primary Leak Values

Use consistent values:

- `estimating`
- `change_order`
- `project_profit`
- `owner_dependence`
- `accountability`
- `unknown`

## Core Automations

### Automation 1: Audit Delivery And Segmentation

Trigger:

- Resend custom event or form event: `profit_leak_audit_completed`.

Rules:

1. Send Day 0 email with audit or result link.
2. Save all leak scores as fields.
3. Save the lowest-score leak as `primary_leak`.
4. If two leak scores tie, save the primary leak and add both leak segments if useful.
5. Start master drip campaign.

Exit:

- If `member_contractor_circle` is applied.
- If unsubscribed.

### Automation 2: Master Profit Leak Sequence

Trigger:

- `lead_profit_leak_audit` campaign label/segment or entry from the audit result automation.

Emails:

- Day 0: Your Profit Leak score.
- Day 1: The estimating leak.
- Day 2: The change-order leak.
- Day 3: The project profit leak.
- Day 4: The owner-dependence leak.
- Day 5: The accountability leak.
- Day 6: Why contractors do not need more motivation, they need operating rhythm.
- Day 7: Contractor Circle invitation.
- Day 10: Case study / teardown.
- Day 14: Inside Contractor Circle.
- Ongoing: Weekly Profit Leak Breakdown.

Conversion labels:

- `intent_change_order_cash`
- `intent_project_profit_control`
- `intent_contractor_circle`

### Automation 3: Low-Ticket Buyer Filter

Trigger:

- Purchased Change Order Cash Kit.
- Purchased Project Profit Control Sprint.

Rules:

1. Save product buyer label or segment.
2. Deliver product.
3. Start short buyer follow-up.
4. Invite to Contractor Circle as the implementation environment.

Buyer follow-up message:

```text
The public tool helps you see the leak. Contractor Circle Hub is where members get the full system, implementation path, call replay, assignment, and weekly rhythm that keeps the leak from coming back.
```

### Automation 4: Sales Intent

Trigger:

Any of:

- Clicked Contractor Circle.
- Clicked a low-ticket offer twice.
- Downloaded the audit and visited Contractor Circle page.
- Replied to any email.
- Scored lowest on project profit, owner-dependence, or accountability leak.

Action:

1. Apply `sales_intent`.
2. Notify owner or sales inbox.
3. Send `What I would fix first`.
4. If no reply after 3 days, send a plain-text follow-up.

## Sales Follow-Up Email

Subject:

```text
What is leaking the most money?
```

Body:

```text
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

## Suppression Rules

Suppress from public sales sequences if:

- `member_contractor_circle`
- `customer_aos`
- `customer_ior`
- `unsubscribed`

Members can still receive:

- Member implementation emails.
- Product update notices.
- Contractor Circle training notices.
- Tool release notices.

## Minimum Viable Launch

Launch with:

1. One Instagram link-in-bio page.
2. One Contractor Profit Leak Audit.
3. One Day 0 result email.
4. One 14-day master nurture sequence.
5. One Contractor Circle CTA.
6. Manual notification on high-intent clicks.
7. Resend webhook or export path into the operating dashboard.

Then add:

1. Change Order Cash Tracker lite supporting lead magnet.
2. Estimating Profit Checklist supporting lead magnet.
3. 10-Hat Owner Scorecard supporting lead magnet.
4. Change Order Cash Kit checkout.
5. Project Profit Control Sprint checkout.
6. Contractor Circle landing page.
7. Inside Contractor Circle walkthrough.
8. Lead, conversion, MRR, churn, activation, and tool-usage dashboard.
