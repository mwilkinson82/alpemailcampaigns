# Domain Strategy

The campaign system needs a domain or subdomain that can be controlled directly through Vercel.

## Best Immediate Move

Use a subdomain first.

Examples:

```text
leads.yourdomain.com
tools.yourdomain.com
go.yourdomain.com
audit.yourdomain.com
```

Recommended default:

```text
go.yourdomain.com
```

Reason:

- It is short.
- It works for link-in-bio.
- It can host multiple campaigns, not just one audit.
- It can live on Vercel while the root domain remains on Lovable.

## Important DNS Point

The root domain and the campaign subdomain can point to different platforms.

Example:

```text
yourdomain.com        -> Lovable, temporarily
www.yourdomain.com    -> Lovable, temporarily
go.yourdomain.com     -> Vercel / alpemailcampaigns
```

That lets the campaign machine move now without waiting for the full public site migration.

## Dedicated Domain Option

A separate domain can work if the brand needs a cleaner public acquisition name.

Possible types:

```text
contractormoneysystems.com
contractorprofitleak.com
contractorprofittools.com
```

Pros:

- Clean separation from the main site.
- Can become the public education/campaign brand.
- Keeps campaign testing isolated.

Cons:

- Less trust than the known brand domain at first.
- Another domain to manage.
- Email deliverability needs careful setup if used for sending.

## Email Sending Domain

Do not confuse the landing-page domain with the email sending domain.

For Resend, use a sending subdomain:

```text
mail.yourdomain.com
```

or:

```text
send.yourdomain.com
```

Resend needs proper DNS records and domain verification before campaigns go live.

## Recommended Path

1. Put campaign pages on a Vercel-controlled subdomain.
2. Use Resend on a verified sending subdomain.
3. Keep the Lovable root site alive temporarily.
4. Build and prove the lead magnet funnel in Vercel.
5. Migrate the main public site away from Lovable later, after the campaign machine is working.

## Rule

```text
Subdomain now.
Main-site migration later.
Do not let Lovable govern the campaign machine.
```

