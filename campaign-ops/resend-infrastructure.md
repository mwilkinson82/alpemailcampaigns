# Resend Infrastructure

Resend is the email delivery and automation layer for the public Contractor Circle funnel.

It should handle:

- Transactional delivery for audit results and lead magnet delivery.
- The master Profit Leak nurture sequence.
- Weekly Profit Leak broadcasts.
- Contact storage and segmentation.
- Automations triggered by form submissions and custom events.
- Email engagement tracking.
- Webhooks into the operating dashboard.
- Unsubscribe and suppression handling.

It should not hold:

- Full Contractor Circle Hub tools.
- Member-only call replays.
- Hub implementation tracks.
- AOS, IOR, or OverWatch full systems.
- Member assignments and wins board.

Those stay gated inside Contractor Circle Hub.

## Minimum Resend Setup

### 1. Sending Domain

Verify the sending domain in Resend before launch.

Use a domain or subdomain that can carry the Contractor Circle brand without hurting the main business domain if early deliverability needs tuning.

Examples:

```text
contractorcircle.com
mail.contractorcircle.com
contractormoneysystems.com
```

Final domain is a business decision, but it should be verified before any public promotion.

### 2. DNS And Deliverability

Complete all Resend DNS records before sending:

- DKIM.
- SPF / return path if required by the domain setup.
- DMARC on the domain.
- Tracking domain if using click/open tracking.

Do not launch the audit campaign until the sending domain is verified and test messages reach Gmail inboxes cleanly.

### 3. API Key

Create one server-side API key for the integration.

Recommended environment variable:

```text
RESEND_API_KEY
```

Do not put the API key into Markdown, Git, Google Sheets, or front-end code.

### 4. Sender Identities

Use one primary sender at first:

```text
Marshall <marshall@yourdomain.com>
```

Optional later senders:

```text
Contractor Circle <circle@yourdomain.com>
Support <support@yourdomain.com>
```

Do not create too many senders early. It makes replies and deliverability harder to interpret.

### 5. Audience

Create one audience:

```text
Contractor Money Systems Leads
```

Use contact properties and segments to route leads.

Do not create separate audiences for every lead magnet.

### 6. Segments

Create segments around useful operating states:

- All audit leads.
- Change-order leak leads.
- Estimating leak leads.
- Project-profit leak leads.
- Owner-dependence leak leads.
- Accountability leak leads.
- High-intent leads.
- Contractor Circle members.
- Suppressed / unsubscribed.

Important:

```text
When older campaign docs say "tag," implement that in Resend as a contact property, segment, or event unless a native Resend tag is specifically useful for email-level reporting.
```

### 7. Automations

Use automations for:

- Day 0 audit result delivery.
- Supporting lead magnet delivery.
- Master Profit Leak nurture sequence.
- Sales-intent follow-up.
- Weekly broadcast routing.

Use custom events for form completions, audit completions, link clicks, and Hub/member status changes when needed.

### 8. Broadcasts

Use broadcasts for ongoing emails after the first sequence:

- Weekly Profit Leak Breakdown.
- Case study / teardown.
- Inside Contractor Circle update.
- Call recap preview.
- Direct invitation to Contractor Circle.

Broadcasts should respect suppression and member status.

### 9. Webhooks

Send Resend events into the dashboard or CRM.

Track at minimum:

- Email sent.
- Email delivered.
- Email bounced.
- Email complained.
- Email opened, if tracking is enabled.
- Email clicked, if tracking is enabled.
- Unsubscribed.

The dashboard does not need to be complex at launch. It needs enough event data to show whether leads are moving toward Contractor Circle.

### 10. Unsubscribe And Suppression

Every public nurture and broadcast email must include an unsubscribe path.

Suppress from public sales sequences when:

- The contact unsubscribes.
- The contact becomes a Contractor Circle member.
- The contact is marked as a current AOS or IOR customer.
- The email bounces hard.
- The contact complains.

Member implementation emails can be managed separately, but public promo emails should stop when a lead becomes a member.

## Launch Checklist

- Sending domain verified.
- DNS records complete.
- `RESEND_API_KEY` created and stored securely.
- One audience created.
- Required custom fields created.
- Leak segments created.
- Suppression rules defined.
- Day 0 email loaded.
- Master sequence loaded.
- Test lead submitted.
- Test audit result delivered.
- Test unsubscribe works.
- Test high-intent click creates a dashboard event.
- Test member status suppresses public sales emails.
