# Campaign Data Model

This is the minimum data model for the public lead magnet and email system.

The purpose is to avoid a pile of disconnected emails. Every form, email, click, and member status change should update the same contact record and event history.

## Contact Fields

Use these fields for each lead/contact.

| Field | Type | Purpose |
| --- | --- | --- |
| `email` | text | Primary identity |
| `first_name` | text | Personalization |
| `last_name` | text | Optional |
| `company_name` | text | Sales context |
| `trade` | text | Market segmentation |
| `annual_revenue_range` | text | Buyer fit |
| `field_employee_count` | number/text | Company size |
| `source` | text | First known lead source |
| `utm_source` | text | Attribution |
| `utm_medium` | text | Attribution |
| `utm_campaign` | text | Attribution |
| `lead_magnet_requested` | text | First requested asset |
| `audit_completed_at` | datetime | Audit activation |
| `primary_leak` | enum | Lowest-scoring leak |
| `estimating_leak_score` | number | Audit score |
| `change_order_leak_score` | number | Audit score |
| `project_profit_leak_score` | number | Audit score |
| `owner_dependence_leak_score` | number | Audit score |
| `accountability_leak_score` | number | Audit score |
| `contractor_circle_status` | enum | Lead, applicant, member, churned |
| `plan_tier` | text | Core, Team, Scale, Boardroom |
| `current_mrr` | number | Revenue tracking |
| `hub_member_id` | text | Link to gated Hub member record |
| `resend_contact_id` | text | Link to Resend contact |
| `consent_source` | text | Where opt-in came from |
| `unsubscribed_at` | datetime | Suppression |
| `last_opened_at` | datetime | Engagement |
| `last_clicked_at` | datetime | Engagement |
| `sales_intent_at` | datetime | Sales follow-up trigger |
| `notes` | text | Manual context |

## Primary Leak Values

Use the same values everywhere:

```text
estimating
change_order
project_profit
owner_dependence
accountability
unknown
```

## Contractor Circle Status Values

```text
lead
applicant
member
churned
customer_aos
customer_ior
suppressed
```

## Lead Magnet Values

```text
contractor_profit_leak_audit
change_order_cash_tracker_lite
estimating_profit_checklist_lite
ten_hat_owner_scorecard_lite
contractor_circle
```

## Campaign Labels

These labels describe how contacts should be grouped.

In Resend, implement them as contact properties, segments, or events. Use native Resend email tags only for email-level reporting where they make sense.

### Source Labels

- `source_instagram_bio`
- `source_instagram_post`
- `source_instagram_story`
- `source_email_forward`
- `source_manual_import`

### Lead Magnet Labels

- `lead_profit_leak_audit`
- `lead_change_order_cash_tracker_lite`
- `lead_estimating_profit_checklist_lite`
- `lead_ten_hat_owner_scorecard_lite`

### Leak Labels / Segments

- `leak_estimating`
- `leak_change_order`
- `leak_project_profit`
- `leak_owner_dependence`
- `leak_accountability`

### Intent Labels / Segments

- `intent_change_order_cash`
- `intent_project_profit_control`
- `intent_contractor_circle`
- `sales_intent`

### Customer Labels / Segments

- `member_contractor_circle`
- `customer_aos`
- `customer_ior`
- `suppressed_public_sales`

## Event Types

Track events separately from contact fields.

| Event | Meaning |
| --- | --- |
| `lead_magnet_requested` | Lead submitted a public form |
| `audit_started` | Lead began the audit |
| `audit_completed` | Lead completed the audit |
| `audit_result_sent` | Day 0 result email sent |
| `email_delivered` | Email delivery event |
| `email_opened` | Open tracking event, if enabled |
| `email_clicked` | Click tracking event, if enabled |
| `email_replied` | Manual or CRM-captured reply |
| `sales_intent_created` | Lead showed buying intent |
| `circle_page_visited` | Contractor Circle page visit |
| `circle_application_started` | Application or checkout started |
| `circle_member_created` | Lead became a member |
| `unsubscribe_created` | Lead unsubscribed |
| `bounce_created` | Email bounced |
| `complaint_created` | Spam complaint |

## Event Fields

| Field | Purpose |
| --- | --- |
| `event_id` | Unique event id |
| `contact_email` | Contact identity |
| `resend_contact_id` | Resend contact link |
| `event_type` | Event name |
| `occurred_at` | Timestamp |
| `source_system` | Resend, form, Hub, manual, dashboard |
| `campaign_id` | Campaign or automation id |
| `email_id` | Email id |
| `lead_magnet` | Asset requested |
| `audit_result` | Primary leak result |
| `link_url` | Clicked link |
| `metadata` | Extra context |

## Gating Rule

Public contact data can store diagnostic fields and lead behavior.

Member implementation data belongs in Contractor Circle Hub:

- Full tool usage.
- Assignments.
- Call replay activity.
- Wins board.
- Track progress.
- AOS, IOR, and OverWatch implementation detail.

Only sync enough Hub data back to the campaign system to stop the wrong emails and report high-level member health.
