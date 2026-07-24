# Lumera Path, The Bridge Identity Reset

Custom website build for Lumera Path, created by Scavolution / Golden Graphix
Studios for the client under the agreed project contract.

This repository contains the custom-coded offer funnel and program experience
for The Bridge Identity Reset, an 8-week leadership program for
high-performing women leaders. The build is designed to support client
conversion goals while keeping the client's existing WordPress root site
separate.

## Project Purpose

This site was built as a client deliverable, not as a template or public starter
project. The experience is tailored around Lumera Path's program positioning,
coach credibility, free training funnel, clarity-call prequalification, and
waitlist capture.

## Contract Scope

| Deliverable | Route or trigger |
| --- | --- |
| Home / offer funnel page | `/` |
| 8-week program sales page | `/program` |
| Testimonials holding page | `/testimonials` |
| Free training registration modal | "Get the Free Training" and related CTAs |
| Clarity call prequalification modal | "Book a Clarity Call" and related CTAs |
| Program waitlist form | `/program#waitlist` |
| Bottom private contact form | Site footer |
| Responsive design and animation system | Across desktop and mobile breakpoints |
| Vercel-ready deployment setup | Next.js production build |

## Technical Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lenis smooth scrolling
- Vercel-ready static and server route output

## Lead Capture

All client-facing forms submit to the internal lead route:

```txt
app/api/leads/route.ts
```

Current supported lead types include:

- `free-training`
- `clarity-call`
- `waitlist`
- `contact`

Before final launch, this endpoint should be connected to the approved client
destination, such as the client CRM, Supabase, Resend, or another agreed lead
handoff system.

## Development

```bash
npm install
npm run dev
```

Default local URL:

```txt
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment

The intended deployment target is Vercel. After deployment, the selected client
subdomain can be pointed to the Vercel project while the existing WordPress site
continues to live on the root domain.

```bash
vercel --prod
```

## Assets

Brand and coach assets are stored in:

```txt
public/images/
```

These assets are client-specific and should remain tied to the Lumera Path
project unless the client gives separate written approval for another use.

## Ownership and Handoff

This repository represents custom work produced for Lumera Path according to
the project agreement. Source files, design execution, animations, page
structure, and implementation decisions were created for the client's website
delivery and should be treated as client project materials.

Any transfer, deployment access, final unlock, CRM connection, or production
handoff should follow the contract terms and payment status agreed between the
builder and the client.
