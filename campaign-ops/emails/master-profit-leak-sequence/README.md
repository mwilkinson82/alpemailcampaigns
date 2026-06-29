# Master Profit Leak Sequence

This is the first Resend nurture sequence.

It starts after the Contractor Profit Leak Audit is completed.

The full copy currently lives in:

- `campaigns/drip-campaigns.md`

This folder turns that copy into a sequence map for Resend.

## Sequence Goal

Move the contractor through:

```text
Result -> pain awareness -> leak education -> system principle -> Contractor Circle invitation -> proof -> inside look.
```

## Sequence Emails

| Day | Email | Purpose | CTA |
| ---: | --- | --- | --- |
| 0 | Your Profit Leak score | Deliver result and name the biggest leak | See the Contractor Circle path |
| 1 | The estimating leak | Show how bad jobs are built before they start | Join Contractor Circle |
| 2 | The change-order leak | Show why extra work becomes free work | Get the tracker / Circle |
| 3 | The project profit leak | Bridge into IOR and OverWatch | Project Profit Control / Circle |
| 4 | The owner-dependence leak | Bridge into AOS | 10-Hat Scorecard / Circle |
| 5 | The accountability leak | Show why people do not own outcomes | Circle |
| 6 | Operating rhythm | Explain why motivation is not enough | Circle |
| 7 | Contractor Circle invitation | Make the direct offer | Join Contractor Circle |
| 10 | Case study / teardown | Show proof | See inside Circle |
| 14 | Inside Contractor Circle | Show the private implementation environment | Join Contractor Circle |

## Required Personalization

Use these fields where available:

- `first_name`
- `company_name`
- `primary_leak`
- `estimating_leak_score`
- `change_order_leak_score`
- `project_profit_leak_score`
- `owner_dependence_leak_score`
- `accountability_leak_score`

## Result Email Logic

Day 0 should include the specific result block for the lead's `primary_leak`.

Result types:

- `estimating` -> The Bad-Bid Contractor.
- `change_order` -> The Free-Work Contractor.
- `project_profit` -> The Blind-Job Contractor.
- `owner_dependence` -> The Bottleneck Owner.
- `accountability` -> The No-Accountability Contractor.
- `unknown` -> General Profit Leak result.

## CTA Rule

Every email should point to one of three places:

1. Finish the Contractor Profit Leak Audit.
2. Use a public lite/diagnostic tool.
3. Join Contractor Circle.

Do not send public leads directly to full Hub tools.

## Suppression Rule

Stop this public sequence when:

- The contact unsubscribes.
- The contact becomes a Contractor Circle member.
- The contact is marked as current AOS or IOR customer.
- The contact hard bounces or complains.

Current members should receive member onboarding and implementation emails inside the Hub flow, not public sales nurture.

