# Campaign System Repository Architecture

The campaign system should be its own GitHub repository.

It should not live under OverWatch, AOS, or Contractor Circle Hub as the long-term source of truth.

## Why It Should Be Separate

The email campaigns, drip campaigns, lead magnets, quizzes, PDFs, landing pages, and public capture flows will change more often than the core applications.

Those campaigns also need to serve multiple products:

- Contractor Circle Hub.
- AOS.
- OverWatch / IOR.
- Future calculators, quizzes, tools, PDFs, sprints, and paid products.

If the campaign system lives inside the OverWatch repo, the architecture starts lying.

OverWatch is a product.
AOS is a product.
Contractor Circle Hub is the member environment.
The campaign system is the public acquisition and conversion layer across all of them.

## Recommended Repo

Repository:

```text
alpemailcampaigns
```

GitHub:

```text
https://github.com/mwilkinson82/alpemailcampaigns.git
```

This is the source of truth for public email campaigns, lead magnets, landing pages, Resend automation maps, and campaign tracking across Contractor Circle Hub, AOS, OverWatch/IOR, and future offers.

## Repo Responsibilities

The campaign repo owns:

- Public lead magnet strategy.
- Landing pages.
- Link-in-bio pages.
- Quiz and audit flows.
- Public PDF/tool delivery.
- Email copy.
- Drip campaigns.
- Resend setup docs.
- Resend automation maps.
- Contact fields/properties.
- Segments.
- Event names.
- Webhook specs.
- Campaign dashboard specs.
- UTM/source tracking.
- Public previews of gated tools.
- CTA routing into Contractor Circle Hub, AOS, and OverWatch.
- Vercel campaign deployment structure.
- Domain/subdomain strategy for campaign pages.

The campaign repo does not own:

- Full OverWatch / IOR application logic.
- Full AOS application logic.
- Contractor Circle Hub member tools.
- Member subscriptions.
- Member-only call replays.
- Member assignments.
- Wins board.
- Gated implementation tracks.
- Product databases except for public lead/campaign tracking.

## Product Repo Responsibilities

### Contractor Circle Hub

Owns:

- Paid member environment.
- Member authentication.
- Subscription access.
- Call replays.
- Assignments.
- Wins board.
- Tool index.
- Member implementation tracks.
- Hub version of the Profit Leak Audit.

Sends campaign events:

- `contractor_circle_member_created`
- `contractor_circle_member_cancelled`
- `hub_onboarding_started`
- `hub_track_selected`

### AOS

Owns:

- AOS product experience.
- Company operating system tools.
- Roles, scorecards, rhythms, accountabilities, and related product workflows.

Sends campaign events:

- `aos_signup_started`
- `aos_customer_created`
- `aos_trial_started`
- `aos_activation_completed`

### OverWatch / IOR

Owns:

- Project financial control product.
- IOR/OverWatch workflows.
- Risk, dollars, project profit, and PM financial visibility.

Sends campaign events:

- `overwatch_signup_started`
- `overwatch_customer_created`
- `ior_tool_used`
- `project_profit_snapshot_created`

## Integration Rule

Each product integrates with the campaign system through:

- Links.
- UTMs.
- API events.
- Webhooks.
- Member/customer status updates.

The campaign repo should not reach into product internals.

The product repos should not own public drip strategy.

## Practical Structure

Suggested future repo structure:

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
  assets/
  integrations/
    contractor-circle-hub.md
    aos.md
    overwatch-ior.md
  deployment/
  products/
```

## Vercel Role

This repo is connected to Vercel and should become the controlled public campaign surface.

Vercel should serve:

- Lead magnet pages.
- Link-in-bio pages.
- Thank-you pages.
- Campaign pages.
- Public tool/PDF delivery pages.
- Form/API endpoints when implemented.

Lovable can remain temporary for the existing main site, but it should not govern this campaign system.

## Current Workspace Status

The docs currently live in this workspace as a staging copy.

Decision:

```text
Move campaign-ops, campaigns, lead-magnets, and public funnel docs into a dedicated campaign repository before implementation.
```

The OverWatch/IOR application should consume the campaign system by link or event. It should not govern it.
