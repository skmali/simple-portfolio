# Simple Portfolio

A single-page personal portfolio for Shravan Mali, built with vanilla HTML, CSS,
and JavaScript plus Tailwind CSS via CDN. No build step - deploy by uploading
the files to any static host.

## Structure

- `index.html` - page markup, SEO meta, Tailwind CDN + inline theme config,
  pre-paint theme script
- `css/styles.css` - dark/light theme tokens and base styles
- `js/data.js` - resume content (skills, experience, projects)
- `js/main.js` - theme toggle, mobile menu, section rendering
- `assets/` - profile photo, resume PDF, favicon

## Run locally

Open `index.html` directly, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8080
```

## Deploy to Hostinger (static)

1. hPanel - File Manager - open `public_html` (or your subdomain folder).
2. Upload the contents of this folder (index.html, css/, js/, assets/).
3. Visit your domain.

No `.htaccess` is required for routing (single page, hash navigation). The
included `.htaccess` only adds a friendly 404 fallback and basic caching.