# Campaign Repo Migration Checklist

This checklist moves campaign operations out of the OverWatch/IOR planning workspace and into a standalone campaign repository.

## Target Repo

```text
alpemailcampaigns
https://github.com/mwilkinson82/alpemailcampaigns.git
```

## Move Into The Campaign Repo

Move these folders/files:

- `campaign-ops/`
- `campaigns/`
- `lead-magnets/`
- Public funnel portions of `operations/access-model.md`
- Public funnel portions of `operations/command-center.md`
- Public funnel portions of `operations/dashboard-metrics.md`
- Product offer docs that drive public acquisition, if needed:
  - `products/offer-ladder.md`
  - `products/change-order-cash-kit.md`
  - `products/project-profit-control-sprint.md`
  - `products/contractor-circle-core-offer.md`

Do not move:

- Full OverWatch / IOR application code.
- Full AOS application code.
- Contractor Circle Hub member implementation code.
- Member-only call replay assets.
- Member-only assignments.
- Full gated tools.

## Leave Behind In Product Repos

Each product repo should keep only an integration note.

### OverWatch / IOR

Keep:

- Link to campaign repo.
- Event names OverWatch sends to the campaign system.
- CTA destinations from campaigns into OverWatch.

### AOS

Keep:

- Link to campaign repo.
- Event names AOS sends to the campaign system.
- CTA destinations from campaigns into AOS.

### Contractor Circle Hub

Keep:

- Link to campaign repo.
- Member status events sent to campaign system.
- Suppression rules so members stop receiving public sales nurture.
- Hub onboarding events.

## First Repo Structure

```text
alpemailcampaigns/
  README.md
  access-model/
  campaign-ops/
  campaigns/
  lead-magnets/
  landing-pages/
  emails/
  automations/
  tracking/
  integrations/
    contractor-circle-hub.md
    aos.md
    overwatch-ior.md
  assets/
  products/
```

## First Implementation Milestone

Before promoting any lead magnet, the standalone repo should define:

- Resend domain and sender setup.
- One audience.
- Contact properties.
- Segments.
- Event names.
- Day 0 result email.
- Master Profit Leak sequence.
- Audit form event.
- Tracker lite delivery event.
- Contractor Circle click event.
- Member suppression event.
- Dashboard fields.

## Rule

```text
Campaign repo owns public acquisition.
Product repos own product fulfillment.
Hub owns member implementation.
Resend delivers email.
Dashboard measures movement.
```
