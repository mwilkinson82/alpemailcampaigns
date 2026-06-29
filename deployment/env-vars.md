# Environment Variables

These variables are required for the Vercel campaign app.

## Required

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_WEBHOOK_SECRET
NEXT_PUBLIC_SITE_URL
CAMPAIGN_API_KEY
```

## Optional Resend Segment IDs

These let API routes add contacts to Resend segments when the matching segment already exists.

```text
RESEND_SEGMENT_ALL_LEADS
RESEND_SEGMENT_LEAD_PROFIT_LEAK_AUDIT
RESEND_SEGMENT_LEAD_CHANGE_ORDER_TRACKER
RESEND_SEGMENT_LEAK_ESTIMATING
RESEND_SEGMENT_LEAK_CHANGE_ORDER
RESEND_SEGMENT_LEAK_PROJECT_PROFIT
RESEND_SEGMENT_LEAK_OWNER_DEPENDENCE
RESEND_SEGMENT_LEAK_ACCOUNTABILITY
RESEND_SEGMENT_HIGH_INTENT
RESEND_SEGMENT_MEMBER_CONTRACTOR_CIRCLE
RESEND_SEGMENT_SUPPRESSED_PUBLIC_SALES
```

## Notes

- `RESEND_FROM_EMAIL` must use a verified Resend sending domain before public launch.
- `RESEND_WEBHOOK_SECRET` comes from the Resend webhook detail page.
- `CAMPAIGN_API_KEY` protects `/api/resend/event` so product apps can send events without exposing the endpoint publicly.
- Do not commit real secret values to GitHub.

