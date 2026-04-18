# National As Built Inc. — Website

Production-ready Next.js 14 website for National As Built Inc.

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** (custom navy/blue/steel palette)
- **Nodemailer** (SMTP email for quote form submissions)
- **Google Fonts** — Playfair Display + Outfit

## Project Structure

```
app/
  page.tsx              — Homepage (hero, services, process, pricing, FAQ, quote form)
  layout.tsx            — Root layout + metadata
  globals.css           — Design system, CSS variables, global styles
  not-found.tsx         — 404 page
  sitemap.ts            — Auto-generated XML sitemap
  robots.ts             — robots.txt
  api/contact/route.ts  — Quote form email API (POST /api/contact)
  cities/[slug]/page.tsx — 10 city landing pages (static generated)

components/
  Logo.tsx              — SVG logo mark + wordmark (navy/blue/silver palette)
  Header.tsx            — Sticky header, cities dropdown, mobile menu
  Footer.tsx            — Full footer with all links
  QuoteForm.tsx         — Full quote form with live email submission
  QuoteCalculator.tsx   — Interactive slider-based cost estimator

lib/
  data.ts               — All site content (company info, services, cities, pricing, FAQs)
  email.ts              — Nodemailer email function + branded HTML template
```

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password      # Gmail: Settings → 2FA → App Passwords
CONTACT_EMAIL=info@nationalasbuilt.com
```

**Gmail App Password setup:**
1. Enable 2-Factor Authentication on your Google account
2. Go to myaccount.google.com → Security → App Passwords
3. Generate a password for "Mail" — use that 16-character string as SMTP_PASS

### 3. Run locally
```bash
npm run dev
# → http://localhost:3000
```

### 4. Deploy to Vercel

```bash
# Push to GitHub, then:
# 1. Import repo at vercel.com/new
# 2. Add environment variables in Project Settings → Environment Variables
# 3. Deploy
```

**Required Vercel env vars:**
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

## City Pages

10 city landing pages auto-generated at build time:
- `/cities/dallas`
- `/cities/houston`
- `/cities/new-york-city`
- `/cities/los-angeles`
- `/cities/chicago`
- `/cities/miami`
- `/cities/atlanta`
- `/cities/phoenix`
- `/cities/seattle`
- `/cities/denver`

Add more cities by editing `lib/data.ts` → `CITIES` array. No other changes needed.

## Customisation

- **Content & copy** → `lib/data.ts`
- **Colors** → `app/globals.css` CSS variables (`:root`) + `tailwind.config.ts`
- **Logo** → `components/Logo.tsx` (SVG, fully editable)
- **Email template** → `lib/email.ts` → `html` string
- **Add a city** → append to `CITIES` in `lib/data.ts`

## Contact / Support

- Phone: 972-342-7070
- Email: info@nationalasbuilt.com
