# Venezuela: Ayuda Verificada

A single trusted page after the June 24, 2026 Venezuela earthquakes. It gathers **real, verified sources** and guides people by their situation — donate from abroad, help children, ground-coordination tools, find family, in-person drop-offs, official info — with live seismic data. The goal: help people find real ways to help and avoid scams.

**Live:** https://terremoto.site.arepa.ai

Independent, non-profit project. Not affiliated with any government or institution.

## Stack

- **Next.js 14** (App Router) on **Vercel**
- **Live seismic data:** USGS Earthquake API (no key, refreshed hourly)
- **Refresh:** ISR (`revalidate: 3600`) + Vercel Cron (`/api/refresh` hourly) re-renders the page and re-checks every source link
- **Analytics:** Vercel Web Analytics
- **Font:** Hanken Grotesk (self-hosted via `next/font`)
- Bilingual ES/EN, single static-ish page, no backend/database

## Structure

```
app/
  layout.js        # fonts, metadata, analytics
  page.js          # server: fetch USGS + link health, ISR
  ui.js            # client: render, language toggle
  globals.css      # styles
  api/refresh/     # cron target → revalidatePath('/')
lib/
  data.js          # ALL curated content + copy (orgs, tools, locations, strings)
vercel.json        # hourly cron
```

**To update content** (add/edit an organization, location, or copy): edit `lib/data.js`. That's the single source of truth.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deploy

Connected to Vercel (project `venezuela-ayuda`, team `arepa-ai`).

```bash
vercel deploy --prod --yes
```

## Data integrity

Every link points to a recognized organization or official tool. Donation/source links are re-checked hourly; a hard 404/410 flags the card. Physical drop-off addresses are human-confirmed against official announcements (City of Doral, GEM, news outlets) and date-stamped — re-verify periodically. Seismic numbers come straight from USGS.
