# Deployment

This folder defines how `alpemailcampaigns` is deployed and how it relates to domains, Vercel, Resend, Lovable, Contractor Circle Hub, AOS, and OverWatch / IOR.

## Deployment Role

`alpemailcampaigns` is the controlled public acquisition surface.

It should power:

- Lead magnet landing pages.
- Quiz/audit pages.
- Thank-you pages.
- Public tool delivery pages.
- Link-in-bio pages.
- Campaign-specific pages.
- Resend webhook endpoints, when implemented.
- Event tracking endpoints, when implemented.

It should not power:

- Full AOS product workflows.
- Full OverWatch / IOR product workflows.
- Contractor Circle Hub member implementation.
- Member-only call replays.
- Member-only assignments.

## Stack

```text
GitHub repo:
https://github.com/mwilkinson82/alpemailcampaigns.git

Deployment:
Vercel

Email:
Resend

Product destinations:
Contractor Circle Hub
AOS
OverWatch / IOR
```

## Control Principle

The main public website may still be on Lovable for now, but new lead magnet and campaign infrastructure should move into this GitHub + Vercel system.

That gives control over:

- Source code.
- Deployment history.
- Branches.
- Rollbacks.
- Landing page URLs.
- Form behavior.
- Resend integrations.
- Tracking events.
- Future migration away from Lovable.

