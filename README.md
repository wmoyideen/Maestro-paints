# Maestro Paints — Exact Design GitHub Build

This build recreates the approved Maestro design direction in real HTML, CSS and JavaScript.

## Included pages
- `index.html` — homepage
- `products.html` — product catalogue
- `product-acrylic-pva.html` — master product-detail design
- `colours.html`
- `our-story.html`
- `contact.html`
- `style.css`
- `main.js`
- `assets/` — logos, products, Durban image, hero and SVG icons

## Important
The technical product values for coverage, drying times and application instructions are deliberately marked for client confirmation rather than publishing unverified specifications.

## WhatsApp
All WhatsApp links point to:
`+27 84 909 1786`

with the pre-filled message:
"Hi Maestro Paints, I'd like to enquire about your products."

## Contact form
The current static contact form opens the visitor's email application using `mailto:`. When this is migrated to Shopify, replace this with Shopify's native contact form / form handling.

## GitHub / Cloudflare
Upload the CONTENTS of this folder to the root of the existing Maestro GitHub repository, replacing the previous website files. Cloudflare should deploy the new Git commit automatically.

## Shopify later
This frontend is structured so it can later be converted into:
- Shopify Liquid sections
- Shopify product templates
- dynamic product fields / metafields
- cart and checkout

`assets/images/design-reference.png` is included so the approved design can always be checked against the implementation.
