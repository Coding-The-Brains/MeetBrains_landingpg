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
4. Add environment variables:
   `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (optional)
   `SUPABASE_URL=https://your-project-ref.supabase.co`
   `SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key`
5. In Supabase SQL Editor, run [supabase/waitlist.sql](./supabase/waitlist.sql).
6. Deploy.

Notes:
- The app already includes a production-safe `next build` script.
- Metadata now falls back to Vercel preview/production URLs automatically if `NEXT_PUBLIC_SITE_URL` is not set.
- Remote avatar images are allowed from `randomuser.me` in `next.config.ts`.
- The waitlist form submits to `POST /api/waitlist`, which inserts emails server-side into Supabase.
