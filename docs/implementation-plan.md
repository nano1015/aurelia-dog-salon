# AURELIA Dog Salon LP Implementation Plan

Owner for this document: Worker A only. Do not edit implementation files from this task.

Reference images:

- `../犬のトリミングサロンLP_ワンページ_GPT.png`
- `../LP_下部4セクション_トリマー_FAQ_アクセス_予約.png`

Both references are `2048 x 2048` PNGs. Treat them as pixel masters for visual matching. The first reference covers hero through gallery. The second reference covers groomers, FAQ, access, and reservation/contact.

## Target Stack And File Map

- App: React 19 + TypeScript + Vite + Tailwind CSS v4.
- Existing section order in `src/App.tsx` already matches the references:
  `Header`, `Hero`, `SalonFeatures`, `MenuPrice`, `ForFirstTime`, `ServiceFlow`, `Gallery`, `OurGroomers`, `FAQ`, `Access`, `ReservationContact`.
- Shared layout and ornaments should live in:
  `src/components/layout/SectionHeading.tsx`, `DecorativeDivider.tsx`, `Header.tsx`, `src/index.css`.
- Section-specific rendering should remain in the matching `src/components/sections/*.tsx` files.
- Content arrays should stay in `src/data/*.ts`.
- Static/generated image assets should be placed under `src/assets/` or `public/` using clear names.

## Global Visual System

### Canvas

- Desktop visual master width: `2048px`.
- Main content max width: `1600px` for large content blocks; inner cards/tables generally span `1520-1620px`.
- Page background: warm ivory, approximately `#fffdf7`, with subtle paper texture or very light radial vignette.
- Section separators: 1px gold-tinted hairline, `#d8c18a` at `45-65%` opacity.
- Section vertical rhythm:
  - Desktop section top padding: `54-76px`.
  - Desktop section bottom padding: `54-72px`.
  - Compact sections such as features/menu may use `36-48px`.
  - Mobile section padding: `48-64px 20px`.

### Color Tokens

- Warm white: `#fffdf7`.
- Soft beige band: `#f7f1e7`.
- Cream card: `#fffaf0`.
- Hairline gold: `#d8bd7a`.
- Primary gold: `#c69b3d`.
- Deep gold: `#a87922`.
- Dark text: `#2f2b29`.
- Muted text: `#5e5650`.
- Pale border: `#e8dcc4`.
- LINE green: `#20a943`.
- Web reservation charcoal: `#2b2b2b`.

### Typography

- Latin display: high-contrast serif similar to Cormorant Garamond or Bodoni/Didot.
- Japanese body: Noto Sans JP or Noto Serif JP depending on local pattern. Use slightly increased tracking to match the elegant salon look.
- Hero brand:
  - `AURELIA`: desktop `88-96px`, letter spacing `0.18em`, font weight `400`, color `#3a302d`.
  - `DOG SALON`: desktop `32-38px`, letter spacing `0.34em`, color `#9c7526`.
  - Japanese tagline: desktop `25-30px`, letter spacing `0.18em`, line height `1.8`.
- Section headings:
  - English heading desktop `44-64px` depending on section prominence.
  - Letter spacing `0.16-0.22em`.
  - Subtitle Japanese `17-22px`, letter spacing `0.1em`.
- Body copy:
  - Desktop `15-18px`, line height `1.8-2.1`.
  - Tables `15-17px`, line height `2.0`.
  - Mobile body `14-16px`, line height `1.75`.

### Shared Ornaments

- Section headings use centered English title with thin gold lines and small decorative flourishes on both sides.
- For major lower sections, add a small top ornament centered above the heading.
- Reuse lucide icons where close enough, but custom SVG icons are acceptable for precise salon-style line icons.
- Icon stroke: gold `#c69b3d`, `1.5-2px`, rounded caps.
- Avoid heavy shadows. Use subtle card shadow only where the reference has depth: `0 8px 24px rgba(80, 55, 25, 0.08)`.

## Section Specs

### 1. Header

Reference visibility is minimal or absent in the masters. Keep header refined and non-intrusive.

- Height desktop: `72-84px` if sticky; transparent over hero at top, ivory after scroll.
- Brand left or centered small logotype; nav right with section anchors.
- Text: serif for brand, sans/serif mixed for nav, `13-14px`, letter spacing `0.12em`.
- Mobile: compact logo plus menu icon; avoid covering hero focal dog.

Acceptance:

- Header does not obscure the large hero logo or dog face.
- Anchor links scroll to all major sections.

### 2. Hero

Reference 1 top band occupies roughly `0-548px` of a `2048px` image.

- Desktop height: `540-600px` at `2048px` viewport width; use `min-height: clamp(520px, 30vw, 660px)`.
- Background image: luxury grooming salon with apricot poodle on right, soft florals left, gold bottles right. Use `src/assets/hero.png` if it matches; otherwise replace/add a closer asset.
- Background positioning:
  - Desktop: image covers full width; dog face center around x `1230-1320`, y `150-230`.
  - Left side remains soft/bright for logo text.
  - Use overlay gradient from left ivory `rgba(255,253,247,0.55)` to transparent at `58%`.
- Logo block:
  - Center-left, bounding box around x `365-860`, y `70-505` in the master.
  - Crest above brand: `110-140px` wide, gold.
  - `AURELIA` width about `520px`.
  - CTA button below tagline: `315px x 58px`, radius `28-32px`, gold gradient, white text, right chevron.
- Mobile:
  - Height `680-760px`.
  - Dog remains visible in upper/right area; logo block moves below or overlays lower third with enough contrast.
  - CTA width `260-300px`.

Animations:

- Hero logo fades in and rises `12px` over `700ms`.
- CTA shimmer on hover only; respect reduced motion.

Acceptance:

- At desktop screenshot, hero bottom aligns near y `548px`.
- Dog face is not cropped on desktop or mobile.
- CTA is visually identical in tone to the reference gold pill.

### 3. Salon Features

Reference 1 y `548-878`.

- Section height desktop: about `330px`.
- Heading centered at y `585-620`; title `SALON FEATURES`, `34-40px`.
- Four columns max width `1500-1580px`, evenly divided.
- Column separators: vertical 1px gold line from y `640-858`, except no line at outer edges.
- Icon area top: `60-72px` above title.
- Feature title: `25-30px`, serif, letter spacing `0.12em`.
- Body: 3 Japanese lines, `16-18px`, line height `1.9`.
- Mobile:
  - 2x2 grid or single column.
  - Use separators as short horizontal rules between items.

Acceptance:

- Four feature columns have equal visual weight.
- Icons and text are centered on each column axis.

### 4. Menu & Price

Reference 1 y `878-1260`.

- Section starts after a thin divider line.
- Heading: centered, `MENU & PRICE`, y around `910`.
- Table container:
  - Width `1620px` max, margin top `24px`.
  - Border 1px `#cdb078`.
  - Four equal columns.
  - Header row height `48-56px`, serif uppercase, gold text.
  - Body padding `28px 40px 22px`.
  - Vertical dividers between columns.
- Menu item row:
  - Label left, price right.
  - Row gap `16-18px`.
  - Price uses tabular numerals if possible.
- Note under table left: `※表示価格はすべて税込です`, `13-14px`.
- Mobile:
  - Convert columns into stacked bordered groups.
  - Preserve course headers and price alignment.

Acceptance:

- Table width, border weight, and four-column rhythm match reference.
- Prices align cleanly right within each course.

### 5. For First Time

Reference 1 y `1260-1508`.

- Heading at y around `1290`.
- Four cards in one row:
  - Container max width `1620px`.
  - Card size approx `340px x 168px`.
  - Gap `64-72px`.
  - Border 1px `#d8bd8a`, radius `6-8px`.
  - Background ivory with subtle inner warmth.
- Icon left, title/body right or centered depending current component structure. Reference uses large icon left with title in gold.
- Title serif uppercase: `18-21px`, letter spacing `0.1em`, gold.
- Body: `14-16px`, centered or balanced 2-3 lines.
- Mobile: 1 column or 2 columns with cards `100%` width.

Acceptance:

- Cards have equal heights and calm spacing.
- Icons remain line-art gold and do not feel filled/heavy.

### 6. Service Flow

Reference 1 y `1508-1732`.

- Thin top divider.
- Heading y around `1545`, `SERVICE FLOW`.
- Four horizontal steps:
  - Max width `1600px`.
  - Circle diameter `118-130px`.
  - Gold circular border `1.5px`.
  - Step badge: small gold filled circle about `32px`, attached left side of main circle.
  - Dotted gold arrow line between steps, ending in arrowhead.
- Text block to right of each circle:
  - English label serif/gold `18-20px`.
  - Japanese two-line description `14-16px`.
- Mobile:
  - Stack vertically.
  - Arrow becomes vertical dotted connector.

Animations:

- Steps stagger fade/slide in with `80-120ms` delay between items.

Acceptance:

- Desktop reads as one continuous left-to-right process.
- Step numbers remain legible at all widths.

### 7. Gallery

Reference 1 y `1732-2048`, partial section.

- Heading at y `1770`.
- Gallery starts y around `1845`.
- Layout:
  - Three comparison/image groups across desktop.
  - Each group width approx `495px`; gap `50-70px`.
  - First two groups are before/after pairs with two equal side-by-side images.
  - Third group has two finished-cut images.
  - Image height visible in reference about `250px`; use aspect ratio around `1.7:1` for pairs.
  - Border 1px gold-tinted around group and between split images.
- Labels:
  - Gold rectangular plaques near image bottom center, `115-160px x 36px`.
  - Serif uppercase white text, `16-18px`, letter spacing `0.08em`.
- Mobile:
  - Stack groups.
  - Preserve before/after split within each group.

Acceptance:

- Image crop shows dog faces centered and not cut off.
- Gold labels overlay consistently at bottom.

### 8. Our Groomers

Reference 2 y `0-772`.

- Section height desktop: about `770px`.
- Heading:
  - Top ornament y `25-50`.
  - `OUR GROOMERS` y `60-110`, very large `58-72px`.
  - Japanese subtitle directly below.
- Cards:
  - Three columns, card width approx `470px`, height approx `610px`.
  - Top y `140`, bottom y `750`.
  - Gap approx `50px`.
  - Cream card with gold border and ornamental corner cuts/caps.
  - Image top height approx `320px`; portrait crop centered.
  - Name: Latin serif `34-40px`, letter spacing `0.12em`.
  - Japanese name `18-20px`.
  - Divider line gold with center diamond.
  - Credentials list with paw icons at left, `17-19px`.
  - Message body centered, `17px`, line height `1.8`.
- Mobile:
  - Single-column cards with image `260-320px` high.
  - Keep name block below image.

Acceptance:

- Card ornamental corners are visible and symmetrical.
- Portraits feel like premium salon staff photography, not generic thumbnails.

### 9. FAQ

Reference 2 y `772-1220`.

- Section height desktop: about `448px`.
- Heading `FAQ`, centered y around `805-850`, `52-62px`.
- Accordion width: `1470-1500px`.
- Items:
  - Height collapsed `54-58px`.
  - Expanded item height about `95-100px`.
  - Border 1px `#eadfcc`, radius `6-8px`.
  - Gap `8-10px`.
  - Left `Q.` gold, `28-32px`, width `68px`.
  - Question text `20-23px`.
  - Toggle circle right `34px`, gold fill, white plus/minus.
  - Answer text indented to align after `Q.`, `16-18px`, line height `1.8`.
- Behavior:
  - At least one item can be expanded. Reference shows the second item open.
  - Smooth height/opacity animation `180-240ms`.
- Mobile:
  - Full width, question text wraps cleanly.
  - Toggle remains right aligned and does not overlap.

Acceptance:

- Expanded answer spacing matches the reference.
- Keyboard accessible accordion with `button`, `aria-expanded`, and focus state.

### 10. Access

Reference 2 y `1220-1688`.

- Section height desktop: about `468px`.
- Heading `ACCESS`, centered y around `1255-1310`, subtitle below.
- Content grid:
  - Max width approx `1480px`.
  - Left map image `685px x 357px`.
  - Right info cards column width `670px`.
  - Gap approx `120px`.
- Map:
  - Cream illustrated map, light roads, labels, station bottom, gold pin/label.
  - Border 1px `#d8c18a`.
  - If implementation cannot source exact map, recreate simplified vector/HTML map matching layout.
- Info cards:
  - Four cards, each `670px x 76px`.
  - Border 1px `#eadfcc`, radius `8px`.
  - Icon left column `90px`, gold.
  - Label `22-26px`.
  - Detail `18-20px`, line height `1.5`.
- Mobile:
  - Map full width first, info cards below.
  - Info card icons shrink to `44-52px`.

Acceptance:

- Map and card tops align.
- Four info rows have identical heights.

### 11. Reservation & Contact

Reference 2 y `1688-2048`.

- Section starts after thin divider.
- Heading:
  - `RESERVATION & CONTACT`, very large `54-68px`, centered y around `1735`.
  - Japanese subtitle y around `1800`.
- CTA row:
  - Max width approx `1510px`.
  - Three buttons, each `480px x 120px`.
  - Gap `36-42px`.
  - Radius `10-12px`.
  - Border/inner white highlight and gold outline.
  - Icon left, label center-left, chevron right.
- Button styles:
  - LINE: green gradient `#1aa044` to `#23b654`, white icon circle.
  - Phone: gold gradient `#c99a35` to `#e2bd67`.
  - Web: charcoal gradient `#252525` to `#3a3a3a`.
- Footer tagline:
  - y around `1975`, Japanese large serif `38-48px`, centered, dark text with gold flourishes on both sides.
- Mobile:
  - CTA buttons stack, `100%` width, `88-104px` high.
  - Heading reduces to avoid wrapping awkwardly: `32-40px`.

Animations:

- Buttons lift `2px` and brighten on hover.
- Chevron moves `4px` right on hover.

Acceptance:

- CTA row is the strongest interaction area on the lower page.
- Phone number and availability text are readable at desktop and mobile.

## Imagery Requirements

- Hero must use the exact or very close composition: apricot poodle on the right, luxury grooming products, soft floral salon environment.
- Gallery dogs should match the reference categories:
  - Before/after shaggy small dog.
  - Before/after poodle.
  - Finished white dog and finished yorkshire terrier.
- Groomer portraits should be consistent: three young Japanese female groomers, cream uniforms with gold trim, warm salon background.
- Access map should be custom illustrated or closely recreated; do not use a dark embedded map.
- All raster assets should be optimized for web and include meaningful `alt` text.

## Motion And Interaction

- Use existing `framer-motion` and/or `useScrollAnimation` patterns.
- Standard reveal: opacity `0 -> 1`, y `18px -> 0`, duration `550-700ms`, ease-out.
- Stagger repeated cards by `80ms`.
- Hover interactions:
  - CTA shimmer/lift.
  - FAQ plus/minus rotation or fade.
  - Gallery plaques may subtly brighten.
- Add `prefers-reduced-motion` handling so animations are disabled or reduced.

## Responsive Breakpoints

- Large desktop: `1440px+`, match screenshots most closely.
- Tablet: `768-1199px`, reduce max widths and convert 4-column content to 2 columns where needed.
- Mobile: `<768px`, single-column sections except paired gallery images.
- No text should overlap or overflow buttons/cards at `375px`, `390px`, `430px`, `768px`, `1440px`.

## Browser Visual Checks

Browser visual checks should be done with Browser Use/Playwright.

Required checks:

- Start Vite dev server.
- Capture screenshots at `1440x2200`, `2048x2200`, `390x1800`, and `768x1800`.
- Compare against both references section by section.
- Use Playwright locator checks for:
  - All section headings are present.
  - FAQ accordion toggles expand/collapse.
  - Reservation buttons are visible and clickable.
  - No horizontal page overflow on mobile.
- Use screenshot review for:
  - Hero dog crop.
  - Section divider alignment.
  - Table column alignment.
  - Groomer card border/corner ornament fidelity.
  - CTA color and spacing.

## Acceptance Criteria

- Overall page order exactly matches the two references from hero to reservation/contact.
- Desktop layout visually matches the 2048px references within approximately `5-8%` for section heights, spacing, and element positions.
- Color palette reads ivory, gold, dark charcoal, and warm salon beige; no unrelated accent colors except LINE green.
- Typography has the same luxury serif character, generous tracking, and refined Japanese readability.
- All sections are responsive and free of overlap at mobile widths.
- FAQ is accessible and animated.
- CTAs have clear hover/focus states.
- `npm run build` and `npm run lint` pass after implementation.
- Browser Use/Playwright screenshots have been reviewed against both reference images.

## Worker TODO Checklist

### Worker A - Planning/Docs

- [x] Create `docs/implementation-plan.md`.
- [x] Document section-by-section pixel specs from both references.
- [x] Include Browser Use/Playwright visual verification requirements.
- [ ] Stay out of implementation files unless explicitly reassigned.

### Worker B - Global Design System

- [ ] Audit `src/index.css` theme tokens against this plan.
- [ ] Add/adjust global fonts, background texture, section spacing, and reduced-motion rules.
- [ ] Implement/refine `SectionHeading` and `DecorativeDivider` for shared gold ornaments.
- [ ] Validate typography and color tokens at desktop and mobile breakpoints.

### Worker C - Top Page Sections

- [ ] Recreate `Hero` composition, logo block, CTA, and responsive crop.
- [ ] Recreate `SalonFeatures` four-column layout and icons.
- [ ] Recreate `MenuPrice` four-column pricing table.
- [ ] Recreate `ForFirstTime` cards.
- [ ] Recreate `ServiceFlow` horizontal/vertical stepper.
- [ ] Recreate `Gallery` image grid and overlay labels.

### Worker D - Lower Page Sections

- [ ] Recreate `OurGroomers` heading and three ornate profile cards.
- [ ] Recreate `FAQ` accordion styling and behavior.
- [ ] Recreate `Access` illustrated map layout and info cards.
- [ ] Recreate `ReservationContact` three CTA buttons and final tagline.
- [ ] Confirm lower section heights and divider positions against reference 2.

### Worker E - Assets And Content

- [ ] Inventory existing assets and identify gaps.
- [ ] Produce or source hero, gallery, groomer, and access map assets.
- [ ] Optimize images and provide alt text.
- [ ] Verify data files contain exact Japanese copy shown or approved replacement copy.

### Worker F - QA/Visual Verification

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Use Browser Use/Playwright to capture required screenshots.
- [ ] Check desktop visual match against both `2048 x 2048` references.
- [ ] Check mobile/tablet responsiveness and no horizontal overflow.
- [ ] File visual deltas by section with screenshot coordinates where fixes are needed.
