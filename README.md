# ALP Email Campaigns

This repository is the standalone campaign system for ALP / Contractor Circle.

It owns public acquisition across:

- Contractor Circle Hub.
- AOS.
- OverWatch / IOR.
- Future lead magnets, quizzes, PDFs, calculators, sprints, and paid offers.

## Operating Rule

```text
Campaign repo owns public acquisition.
Product repos own product fulfillment.
Hub owns member implementation.
Resend delivers email.
Dashboard measures movement.
```

## What This Repo Owns

- Public lead magnet strategy.
- Landing pages.
- Instagram link-in-bio funnels.
- Public quizzes and audits.
- Lite public tools and PDF delivery.
- Email copy.
- Drip campaigns.
- Resend automation maps.
- Contact properties.
- Segments.
- Event names.
- Webhook specs.
- Campaign dashboard specs.
- UTM/source tracking.
- CTA routing into Contractor Circle Hub, AOS, and OverWatch.

## What This Repo Does Not Own

- Full OverWatch / IOR application logic.
- Full AOS application logic.
- Contractor Circle Hub member tools.
- Member subscriptions.
- Member-only call replays.
- Member assignments.
- Wins board.
- Gated implementation tracks.

## Core Folders

- `campaign-ops/` - campaign operations, Resend setup, data model, tracking, and repo architecture.
- `campaigns/` - public campaign strategy, drip campaigns, Instagram funnel, and email setup.
- `lead-magnets/` - public diagnostic/lite lead magnets.
- `operations/` - command center, access model, dashboard, content machine, call system, and execution boards.
- `strategy/` - ecosystem architecture.
- `integrations/` - how Contractor Circle Hub, AOS, and OverWatch/IOR connect by events and links.
- `products-source/` - public offer and product positioning docs copied from the planning workspace.

## Current Build Priority

1. Set up Resend sending domain, audience, contact properties, segments, and suppression rules.
2. Build the Contractor Profit Leak Audit as the primary public front door.
3. Build the Day 0 result email.
4. Build the master Profit Leak sequence.
5. Build the Change Order Cash Tracker Lite delivery.
6. Connect events into the campaign dashboard.
7. Publish landing pages and link-in-bio routing.

## Access Rule

Public assets diagnose and preview.

Member-only tools, implementation tracks, call replays, assignments, wins board, and full AOS/IOR/OverWatch systems stay gated inside the appropriate product or Contractor Circle Hub.
