# Reach Orion — Testimonials Management Guide

This file outlines how to edit, add, or remove client testimonials on the Reach Orion website.

## Location
All testimonials live in:
`src/data/testimonials.json`

## Adding or Editing a Testimonial
Each testimonial is a simple JSON object with the following schema:

```json
{
  "id": "t6",                              // Unique identifier (e.g. t6, t7)
  "quote": "The quote from the client.",   // Full client quotation
  "author": "Client Full Name",            // Full name
  "role": "Founder / Owner",                // Founder or owner role
  "company": "Company Name",               // Company or brand name
  "location": "City, Country",             // Geographical origin
  "cmsStack": "Sanity + Next.js",          // The CMS stack implemented
  "keyMetric": "+140% Performance Lift",   // Quantifiable business result
  "date": "Month Year",                    // Launch or testimonial date
  "industry": "Industry Sector",           // Market sector
  "avatarInitials": "CF"                   // Two-letter initials for luxury monogram badge
}
```

## Visual Presentation
- The testimonials automatically stream across the **Minimalist Kinetic Stream** ticker on the homepage.
- Visitors can hover or pause to inspect any testimonial.
- Clicking on any testimonial immediately summons the **High-Fashion Inspection Dossier** modal displaying the verified client metadata, technical architecture stack, and quantified metrics.
- No layout code or styling modifications are required when adding new items.
