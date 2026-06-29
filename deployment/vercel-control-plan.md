# Vercel Control Plan

The `alpemailcampaigns` repo is connected to Vercel so the campaign system can be controlled from GitHub instead of Lovable.

## Why This Matters

Lovable can be useful for fast site generation, but it should not control the long-term campaign infrastructure.

The campaign system needs:

- Versioned source code.
- Repeatable deployments.
- Controlled landing pages.
- Resend integration.
- Webhook endpoints.
- Tracking events.
- Domain control.
- Rollbacks.
- Clear ownership separate from AOS, OverWatch, and Contractor Circle Hub.

GitHub + Vercel is the right control plane for that.

## Vercel Owns

- Public campaign page hosting.
- Lead magnet page routing.
- Thank-you page routing.
- Link-in-bio page routing.
- Static assets for public tools and PDFs.
- API routes for form submission, if implemented.
- API routes for Resend custom events, if implemented.
- API routes for webhook ingestion, if implemented.

## Vercel Does Not Own

- Resend email delivery.
- Contractor Circle Hub member access.
- AOS product access.
- OverWatch / IOR product access.
- Stripe subscription truth.
- Full member implementation data.

## Initial Deployment Surface

First public pages:

```text
/
/link
/profit-leak-audit
/profit-leak-audit/thanks
/change-order-cash-tracker
/contractor-circle
```

First backend endpoints, when ready:

```text
/api/leads
/api/audit-result
/api/resend/event
/api/webhooks/resend
```

## Environment Variables

Expected later:

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_WEBHOOK_SECRET
NEXT_PUBLIC_SITE_URL
CAMPAIGN_API_KEY
```

If a database is added:

```text
DATABASE_URL
```

If the dashboard lives in Supabase:

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
```

Do not commit secrets to GitHub.

## Migration Away From Lovable

Phase 1:

- Keep the existing main site on Lovable.
- Put new lead magnet pages on the Vercel campaign subdomain.

Phase 2:

- Build the core public marketing site in this repo or a sibling Vercel repo.
- Start moving high-value pages off Lovable.

Phase 3:

- Move the root domain to Vercel when the replacement site is ready.
- Keep product applications separate.

## Rule

```text
Lovable can remain temporary.
Vercel becomes the controlled campaign surface.
Product apps stay separate.
```
