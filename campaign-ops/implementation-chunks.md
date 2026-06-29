# Campaign Infrastructure Chunks

This is the plain-English build order for using Resend before promoting public lead magnets.

## Chunk 1: Source Of Truth

Where the plan should live:

```text
alpemailcampaigns/
```

This is where we track:

- Email sequence plan.
- Automation map.
- Contact properties.
- Event names.
- Dashboard metrics.
- Landing-page requirements.

Decision:

```text
Create a separate GitHub repo for the campaign system.
```

Use this current folder only as a staging copy until the campaign repo is created.

The campaign repo should govern lead magnets, email campaigns, drip campaigns, landing pages, public quizzes, PDF delivery, Resend automations, and public acquisition tracking across Contractor Circle Hub, AOS, OverWatch/IOR, and future products.

It is also connected to Vercel, so it should govern the controlled public campaign pages instead of relying on Lovable.

## Chunk 2: Resend Foundation

What Resend owns:

- Sending domain.
- API key.
- Audience.
- Contact properties.
- Segments.
- Automations.
- Broadcasts.
- Webhooks.
- Suppression / unsubscribe.

Nothing public should launch until this foundation works.

## Chunk 2A: Vercel Foundation

What Vercel owns:

- Lead magnet pages.
- Quiz/audit pages.
- Thank-you pages.
- Link-in-bio pages.
- Form endpoints, when implemented.
- Resend event endpoints, when implemented.

Use a Vercel-controlled subdomain first. Keep the existing Lovable site live until the replacement public site is ready.

## Chunk 3: Lead Capture Data

Every public form needs to create or update one contact record.

Minimum data to capture:

- Email.
- First name.
- Source.
- Lead magnet requested.
- Audit completed or not.
- Primary leak.
- Leak scores.
- Contractor Circle status.

The audit result should not just send an email. It should update the contact and create a trackable event.

## Chunk 4: Drip Campaign

The first drip is one master sequence:

```text
Day 0: Result
Day 1: Estimating leak
Day 2: Change-order leak
Day 3: Project profit leak
Day 4: Owner-dependence leak
Day 5: Accountability leak
Day 6: Operating rhythm
Day 7: Contractor Circle invitation
Day 10: Case study / teardown
Day 14: Inside Contractor Circle
```

Do not build separate drips for every lead magnet yet.

Supporting lead magnets deliver the lite tool, then route back into the audit and master sequence.

## Chunk 5: Dashboard And Tracking

Track whether the funnel is working:

- New leads.
- Audit completions.
- Primary leak distribution.
- Email delivery.
- Email clicks.
- Replies.
- Contractor Circle clicks.
- Sales-intent leads.
- New members.
- Unsubscribes / bounces / complaints.

The first dashboard can be simple. It just needs to show whether public attention is turning into Contractor Circle demand.

## Chunk 6: Landing Pages

Build landing pages after the first five chunks are defined.

That way every page knows:

- Which Resend automation it triggers.
- Which contact properties it updates.
- Which event it creates.
- Which email gets sent.
- Which dashboard metric changes.

First pages:

1. Contractor Profit Leak Audit.
2. Audit thank-you / result page.
3. Change Order Cash Tracker Lite.
4. Contractor Circle invitation page.
5. Instagram link-in-bio page.

## Simple Rule

```text
Git organizes it.
Resend sends it.
The dashboard measures it.
The product apps fulfill it.
```
