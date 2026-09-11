# Aiman — Full-Stack Web Developer

A production-ready React + Vite personal business website for Aiman. It uses semantic sections, responsive CSS, accessible interactions, a validated contact form, and a Vercel-compatible API endpoint.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build:

```bash
npm run build
npm run preview
```

## Contact delivery

The frontend posts to `/api/contact`. The endpoint is ready for Resend, but it intentionally returns a configuration message until credentials are provided. Copy `.env.example` to `.env` for local configuration and add:

- `CONTACT_TO_EMAIL`: the inbox that should receive enquiries
- `RESEND_API_KEY`: a server-side Resend API key

Never put private keys in `src` or commit `.env`.

## Deploy to Vercel

1. Create a Vercel account and choose **Add New Project**, then import this local project or connect your Git provider.
2. Keep the framework preset as **Vite**. Vercel will use `npm run build` and publish `dist`.
3. Add `CONTACT_TO_EMAIL` and `RESEND_API_KEY` under Project Settings > Environment Variables.
4. Deploy. The `vercel.json` rewrite keeps client-side section navigation working on direct visits.

GitHub is not required: Vercel can deploy from a local folder using the Vercel CLI or from another supported Git provider.

## Connect a custom domain

1. In the Vercel project, open Settings > Domains and add `aiman.com` or `aimankhalid.com`.
2. At your domain registrar, add the DNS records Vercel shows. Usually this is an A record for the apex domain and a CNAME for `www`; follow the exact values shown in your dashboard.
3. Wait for DNS verification and then set the custom domain as the primary domain. Vercel automatically provisions HTTPS.
4. The SEO files are configured for `https://aiman.com`; update them if you choose a different final domain, then redeploy.

Visitors will use only the custom domain once it is configured as the primary domain. The platform hostname is not included in the site's branding or UI.

## Personalise before launch

- Replace the placeholder custom domain in the SEO files.
- Replace the `mailto:` address and social links in `src/App.jsx` with your real details.
- Replace the visual project previews with final case-study images or links when available.
- Replace `public/og-image.svg` with a final raster share image if your social platform requires JPEG/PNG.
