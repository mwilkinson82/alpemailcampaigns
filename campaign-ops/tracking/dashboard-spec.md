# Campaign Dashboard Spec

The campaign dashboard should show whether the public funnel is producing leads, educating them, and converting them into Contractor Circle demand.

It should not try to replace Contractor Circle Hub.

## Dashboard Question

```text
Are public leads moving from pain diagnosis to Contractor Circle intent?
```

## Data Sources

| Source | What it contributes |
| --- | --- |
| Resend | Contact, delivery, open, click, unsubscribe, bounce, complaint, automation events |
| Audit form | Audit answers, scores, primary leak, result type |
| Landing pages | Source, UTM, page visits, CTA clicks |
| Contractor Circle Hub | Member status, onboarding status, high-level activation |
| Manual sales notes | Replies, context, next action |

## Top-Level Metrics

Track weekly:

- New leads.
- Audit starts.
- Audit completions.
- Audit completion rate.
- Primary leak distribution.
- Day 0 result email delivery rate.
- Master sequence click rate.
- Email replies.
- Contractor Circle CTA clicks.
- Sales-intent leads.
- Contractor Circle applications or checkouts.
- New Contractor Circle members.
- Unsubscribes.
- Bounces.
- Complaints.

## Leak Distribution

Show the count and percentage of leads by `primary_leak`:

- Estimating.
- Change orders.
- Project profit.
- Owner dependence.
- Accountability.
- Unknown.

This tells us what public content is attracting and what nurture angles should be emphasized.

## Lead Table

| Lead | Source | Lead magnet | Audit complete | Primary leak | Last email clicked | Sales intent | Circle status | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Email Table

| Email | Sent | Delivered | Opened | Clicked | Replies | Unsubscribes | Bounces | Complaints |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |

Open tracking may be directionally useful, but clicks, replies, applications, and purchases matter more.

## Sales-Intent Table

| Lead | Trigger | Primary leak | Last action | Owner follow-up | Status |
| --- | --- | --- | --- | --- | --- |

Sales-intent triggers:

- Clicked Contractor Circle.
- Replied to an email.
- Requested tracker and completed audit.
- Scored lowest on project profit, owner dependence, or accountability.
- Started application or checkout.

## Member Conversion Table

| Lead | Joined date | Plan tier | Current MRR | Source | Primary leak | Onboarding track |
| --- | --- | --- | ---: | --- | --- | --- |

Only sync high-level member data back to campaign ops. Full member implementation stays in the gated Hub.

## Weekly Review Questions

```text
How many new leads came in?
How many completed the audit?
Which leak category appeared most?
Which emails created clicks or replies?
How many people clicked Contractor Circle?
How many high-intent leads need follow-up?
How many leads became members?
Which content source produced the best lead quality?
Which email or CTA needs to change next?
```

## MVP Dashboard

The first dashboard can be a Google Sheet, Airtable, Notion database, or simple database table.

Minimum columns:

- Email.
- First name.
- Source.
- Lead magnet requested.
- Audit completed.
- Primary leak.
- Last email clicked.
- Sales intent.
- Contractor Circle status.
- Next action.

Do not wait for a perfect BI dashboard before launching the audit.

