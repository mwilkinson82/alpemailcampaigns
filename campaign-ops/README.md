# Campaign Ops

This folder is the staging copy for the Contractor Circle lead capture, email delivery, automation, and tracking system.

Long-term, this should become its own GitHub repository.

It is not the public Hub.
It is not the member Hub.
It is not the full product library.

It is the operating layer that keeps the public funnel organized before landing pages and lead magnets go live.

## Repository Decision

Create a separate GitHub repository for campaign operations before implementation.

Recommended repo:

```text
alpemailcampaigns
https://github.com/mwilkinson82/alpemailcampaigns.git
```

Reason:

- Campaigns, lead magnets, and drip strategy will change more often than the core applications.
- The campaign system needs to serve Contractor Circle Hub, AOS, OverWatch/IOR, and future products.
- OverWatch is a product repo, not the owner of the whole acquisition system.
- AOS is a product repo, not the owner of the whole acquisition system.
- Contractor Circle Hub is the paid member environment, not the public campaign command center.
- Resend, landing pages, public quizzes, public PDFs, UTMs, source tracking, and campaign dashboards belong in their own operating layer.

This workspace can hold the planning copy, but it should not be the long-term source of truth for campaigns.

See:

- `repository-architecture.md`

## Operating Split

```text
Campaign repo
  Owns copy, automation maps, contact schema, event schema, dashboard specs, landing pages, public lead magnets, and launch checklists.

Resend
  Sends emails, stores audiences/contacts, runs automations, handles broadcasts, tracks email events, and sends webhooks.

Dashboard / CRM
  Shows leads, audit completions, leak categories, email engagement, Circle intent, member status, and revenue metrics.

Contractor Circle Hub
  Stays gated and delivers full tools, tracks, assignments, calls, replays, and member implementation.
```

## Build Order

1. Set up Resend sending domain, audience, contact properties, segments, and suppression rules.
2. Define the data model for leads, audit results, contact properties, segments, events, and sales intent.
3. Map automations before building landing pages.
4. Create the Day 0 result email and master Profit Leak sequence.
5. Connect the public audit form to Resend and tracking.
6. Connect webhook events to the dashboard.
7. Launch the link-in-bio and landing pages.

## Files

- `repository-architecture.md` defines why the campaign system should be a separate repo.
- `repo-migration-checklist.md` defines what moves into the separate repo.
- `implementation-chunks.md` explains the build order in plain English.
- `resend-infrastructure.md` defines the Resend setup.
- `data-model.md` defines contacts, fields, labels, segments, leak values, and events.
- `automations/resend-map.md` maps the funnel into Resend automations.
- `emails/master-profit-leak-sequence/README.md` defines the first nurture sequence.
- `tracking/dashboard-spec.md` defines what the operating dashboard needs to show.
- `landing-pages/README.md` defines what landing pages need from the email infrastructure before launch.
