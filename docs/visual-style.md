# Yoga Sri — Botanical Manuscript Visual System

Purpose: keep the Yoga Sri website visually consistent with the *Elements / Panchakarma* bilingual learning handbook. This style is used on home, programmes, course details, and later digital brochures.

## Brand character
- Classical Yoga × Ayurveda education: quiet, warm, professional, contemplative.
- Contemporary usability and generous white space, with restrained heritage details.
- Suggested visual balance: roughly 70% white space and clear typography, 20% actual photography or one illustration anchor, 10% classical accents.
- Avoid a crowded temple aesthetic, heavy shadows, neon chakra palettes, lotus as the main motif, complex medical imagery, or spiritual claims.

## Design tokens
| Role | Color |
| --- | --- |
| Warm ivory paper | `#FAF7EF` |
| Forest green | `#2F5D46` |
| Sage green | `#DDE8D3` |
| Antique champagne gold | `#C8A45D` |
| Charcoal brown copy | `#3F3A32` |
| Warm parchment panel | `#F3EEE3` |

These tokens are applied as CSS custom properties in `app/globals.css`.

## Type
- Chinese primary headings: Noto Serif SC (or Source Han Serif), 600 weight.
- English brand lettering: Cormorant Garamond / classical serif.
- Body copy: DM Sans / system sans, with ample line-height.
- Chinese-first bilingual layout: Chinese visually primary; English a supporting secondary line in long-form handbooks.
- Typography should communicate calm authority without ornate display text.

## Classical details
- One thin antique-gold border or corner accent per major region, not multiple decorative frames layered everywhere.
- Botanical sprig dividers (see `components/botanical-divider.tsx`).
- Motifs: branches, leaves, mountain silhouettes, water/ripples, fire/flame, wind lines and subtle stars. Minimal ink or watercolor treatment.
- Do **not** use lotus as the dominant symbol; avoid large or heavy religious iconography.
- Genuine Hatha Yoga practice photography takes precedence over illustrated postures; preserve the full pose in each image.

## Layout & usability
- Prefer editorial chapter composition over advertising banners.
- Large negative space around hero and chapter headings.
- Narrow text column with 1.8–2.0 line-height for Chinese paragraphs.
- Course cards remain scannable; confirmed prices only, date status truthful.
- Clear action path: browse → course detail → WhatsApp enquiry.
- On small screens, preserve contrast, visible programme navigation, keyboard focus and readable fees.

## Status
Visual refinements are on draft PR #4 (branch `upgrade-malaysia-courses`), not `main`. Check Vercel preview and real desktop/mobile screenshots before approving production release.
