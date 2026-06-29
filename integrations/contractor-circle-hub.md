# Contractor Circle Hub Integration

Contractor Circle Hub is the paid member environment.

It does not own the public email campaign system.

## Hub Owns

- Member authentication.
- Subscription access.
- Call replays.
- Assignments.
- Wins board.
- Tool index.
- Member implementation tracks.
- Hub version of the Profit Leak Audit.

## Campaign Events To Send

- `contractor_circle_member_created`
- `contractor_circle_member_cancelled`
- `hub_onboarding_started`
- `hub_track_selected`
- `hub_track_completed`

## Suppression Rule

When a lead becomes a Contractor Circle member:

1. Send `contractor_circle_member_created` to the campaign system.
2. Set `contractor_circle_status` to `member`.
3. Suppress the contact from public sales nurture.
4. Route them into Hub onboarding and member implementation emails.

