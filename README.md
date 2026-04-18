# National As Built Live Frontend

Production-ready Next.js + Tailwind marketing frontend built around lead generation, local landing pages, pricing orientation, and enterprise sales routing.

## What is included

- App Router Next.js site
- Conversion-focused homepage
- 10 city landing pages
- Working lead capture API route
- Optional HubSpot contact creation
- Optional Resend notification emails
- Enterprise page for portfolio / rollout selling
- Quote and ROI calculators
- Pricing and packaging section

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

See `.env.example`.

## CRM setup

### HubSpot
Create a private app in HubSpot with CRM contacts write permission.
Set:

- `HUBSPOT_ACCESS_TOKEN`

The API route will create a contact on every valid lead submission.

### Email notifications with Resend
Set:

- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_TO`
- `LEAD_FROM_EMAIL`

Every new lead will trigger a notification email.

## Pages

- `/` Home
- `/enterprise`
- `/locations/dallas`
- `/locations/fort-worth`
- `/locations/houston`
- `/locations/austin`
- `/locations/san-antonio`
- `/locations/miami`
- `/locations/orlando`
- `/locations/atlanta`
- `/locations/phoenix`
- `/locations/denver`

## Recommended deployment

Deploy on Vercel for easiest App Router support.

## Notes

This build uses public facts pulled from the live National As Built site for company foundation, service list, contact details, and coverage. Replace any strategic positioning language, counts, SLA promises, and packaging ranges with client-approved values before launch.


## HubSpot note
This version uses standard contact properties for safer default installs, then attaches project details as a HubSpot note associated to the contact.
