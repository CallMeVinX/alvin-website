# Alvin Dinata Portfolio

Production-ready personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This repository powers a multi-mode portfolio website with:

- Professional and personal views
- Project showcase cards with optimized image delivery
- Contact form API integrated with Resend
- CI pipeline for lint, type-check, test, and build verification

The app metadata is configured for production SEO in `src/app/layout.tsx`.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Jest + Testing Library
- Resend (transactional email for contact form)

## Project Structure

High-level application areas:

- `src/app` : routes, layouts, API handlers
- `src/components/layout` : shared navigation/footer
- `src/components/profesional/sections` : professional-mode sections (home/profile/skills/projects/contact)
- `src/components/providers` : mode/theme providers
- `public/image` : static project and profile assets

## Environment Variables

Create `.env.local` in the project root for local development and set the following values:

```env
RESEND_API_KEY=<your_resend_api_key>
RESEND_FROM_EMAIL=<verified_sender_email>
CONTACT_TO_EMAIL=<destination_inbox_email>
```

Notes:

- `CONTACT_TO_EMAIL` defaults to `alvin.dinata.work@gmail.com` when omitted.
- The contact API rejects placeholder credentials and invalid email formats.

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Commands

Use these commands as release gates before deploying:

```bash
npm run lint
npx tsc --noEmit
npm run test
npm run build
```

Run production server locally after build:

```bash
npm run start
```

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push and pull request to `main`:

1. Install dependencies (`npm ci`)
2. Lint (`npm run lint`)
3. Type check (`npx tsc --noEmit`)
4. Unit tests (`npm run test`)
5. Build (`npm run build`)

This ensures only production-safe changes pass into the main branch.

## API: Contact Form

Endpoint: `POST /api/contact`

Runtime:

- Node.js runtime (`export const runtime = "nodejs"`)

Validation behavior:

- Requires `name`, `email`, `subject`, and `message`
- Validates email format
- Returns `400` for invalid payload
- Returns `500` when email service is missing/misconfigured
- Returns `200` on successful email delivery

Operational behavior:

- Sends email through Resend
- Uses sender from `RESEND_FROM_EMAIL`
- Uses `replyTo` as the submitter email
- Sends to `CONTACT_TO_EMAIL`

## Deployment Guidance

Recommended target: Vercel with Node.js 20+.

Deployment checklist:

1. Configure all required environment variables in the hosting platform.
2. Ensure image filename casing in `public/image` matches references exactly (important for Linux production environments).
3. Confirm CI passes for the commit being deployed.
4. Smoke-test `/`, mode switching, project cards, and `/api/contact` after release.

## Troubleshooting

- Symptom: image renders alt text only
	Cause: missing file or filename case mismatch
	Fix: match exact casing between path in code and filename in `public/image`

- Symptom: contact form returns 500
	Cause: Resend env vars missing/placeholder
	Fix: set valid `RESEND_API_KEY` and `RESEND_FROM_EMAIL`

## License

This project is private and maintained as a personal portfolio codebase.
