# MeetBrains Landing Page

Marketing site for MeetBrains, built with Next.js App Router, Tailwind CSS, and Framer Motion.

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

## Deploy

The site runs as a Docker container on the MeetBrains EC2 box, behind nginx at
`https://www.meetbrains.ai`. Vercel is no longer used.

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://www.meetbrains.ai -t meetbrains-landing:latest .
docker rm -f meetbrains-landing
docker run -d --name meetbrains-landing --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  -e MEETBRAINS_API_URL=https://app.meetbrains.ai \
  meetbrains-landing:latest
```

`NEXT_PUBLIC_SITE_URL` is inlined at build time, so it is a build arg, not a runtime variable.
`MEETBRAINS_API_URL` is read at runtime and defaults to `https://app.meetbrains.ai`.

Notes:
- The app already includes a production-safe `next build` script.
- `output: "standalone"` keeps the runtime image small enough for a 1.8GB box.
- The waitlist form submits to `POST /api/waitlist`, a server-side proxy to the MeetBrains API.
  Signups are stored in the product's own Postgres and are visible at
  `https://app.meetbrains.ai/admin/marketing/waitlistsignup/`.
- Remote avatar images are allowed from `randomuser.me` in `next.config.ts`.
