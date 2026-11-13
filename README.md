# Reach Orion — Official Agency Frontend

Bespoke, high-performance web agency frontend for **Reach Orion**, specializing in next-generation Headless CMS architectures, editorial flagships, and sub-second global edge delivery.

Built with an editorial Swiss & Milanese luxury aesthetic (inspired by Apple and Gucci typography), strictly avoiding generic templates and AI design clichés.

---

## 🎨 Design System & Palette (Strict Implementation)

- **DarkGrey**: `#1D1D1F` (Apple Dark / Headings & Primary Contrast Surfaces)
- **White**: `#FFFFFF` (Primary Background / Clean Negative Space)
- **LightBlue Surface**: `#F5F5F7` (Secondary Backgrounds & Surface Modules)
- **LightGrey**: `#D9D9D9` (Hairline Dividers & Minimalist Grid Borders)
- **VividBlue**: `#0071E3` (Primary Interactive CTAs & Key Focal Links)
- **Teal**: `#0F766E` (Complementary Depth, Live Status Badges & Metrics)

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite Development Server
npm run dev
# Running on http://localhost:5175/

# Production Build
npm run build
```

---

## 📝 Easily Editing Testimonials

Testimonials are 100% decoupled from the UI code. To add, edit, or remove client testimonials:

1. Open `src/data/testimonials.json`.
2. Edit or add testimonial objects following the schema:
   - `id`: Unique identifier
   - `quote`: Full quotation
   - `author`: Client name
   - `role`: Corporate title
   - `company`: Brand or firm
   - `location`: City, Country
   - `cmsStack`: Implemented CMS stack (e.g., `Sanity + Next.js Edge`)
   - `keyMetric`: Quantified result (e.g., `85% Faster Deployment`)
   - `date`: Month / Year
   - `industry`: Market sector
   - `avatarInitials`: Two-letter monogram
3. Save the file. The **Minimalist Kinetic Stream** and the **Inspection Dossier Modals** will update automatically!

For full details, see [`src/data/README_TESTIMONIALS.md`](file:///mnt/personal/projects/design/src/data/README_TESTIMONIALS.md).

---

## 📐 Layout Architecture

- **Navbar**: Minimalist floating header with brand monogram, live commission status pill (`EST. 2026 // ACCEPTING SELECT COMMISSIONS`), and consultation CTA.
- **Hero**: Monumental editorial typography (`REACH ORION`), agency metrics (`*100 Core Web Vitals`, `*0.18s TTFB`, `*100% Headless`), and the circular interactive `GET IN TOUCH ↗` button.
- **Brand Manifesto**: High-contrast philosophy on why modern enterprises abandon legacy monolithic CMS platforms.
- **Capabilities Grid**: Asymmetrical staggered 2-row layout with alternating dark (`#242426`) and white/light surfaces with expandable technical deliverables (`+`). **Strictly zero 3-in-a-row cards.**
- **Architecture Comparator**: Technical comparison matrix contrasting decoupled headless systems against legacy monoliths (WordPress/Drupal).
- **Case Archive**: Editorial monograph frames with photographic reveals on hover and interactive project dossiers.
- **Kinetic Testimonials**: Continuous, low-speed horizontal kinetic stream with hover-pause, resume controls, and interactive dossier inspector modals.
- **Methodology Docket**: 6-week architectural protocol from schema modeling to edge cutover.
- **Project Inquiry**: Bespoke consultation configurator with CMS selector, investment tiers, and instant reference logging.
- **Footer**: Luxury Swiss agency footer with real-time live world clocks (Zurich, London, New York, Tokyo).

