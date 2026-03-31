# MeetAlly Landing Page

Marketing site for MeetAlly, built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this folder to a Git provider supported by Vercel.
2. Import the repo in Vercel.
3. Keep the detected framework preset as `Next.js`.
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your final production domain, for example `https://meetally.ai`.
5. Deploy.

Notes:
- The app already includes a production-safe `next build` script.
- Metadata now falls back to Vercel preview/production URLs automatically if `NEXT_PUBLIC_SITE_URL` is not set.
- Remote avatar images are allowed from `randomuser.me` in `next.config.ts`.
