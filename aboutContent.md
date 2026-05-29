# SCHC App Structure (Pages and Sections)

This file describes how folders in `schc-app` map to pages and page sections, so you can commit in a clear top-to-bottom order (navbar -> hero -> subsequent sections).

## High-level folder map

- `src/app/` contains route-level pages in the Next.js App Router.
- `src/components/` contains reusable UI and page section components.
- `public/` contains static assets (images, thumbnails, leadership photos, etc.).
- `src/data/` contains data helpers such as blur placeholders.
- `src/lib/` contains shared utilities.

## Route pages and their sections

### Home

- Route: `src/app/page.tsx`
- Sections live in: `src/components/home/`
  - `Navbar` is in `src/components/layout/Navbar.tsx`
  - `Hero` is in `src/components/home/Hero.tsx`
  - `AboutPreview` is in `src/components/home/AboutPreview.tsx`
  - `ProgramsPreview` is in `src/components/home/ProgramsPreview.tsx`
  - `ImpactStats` is in `src/components/home/ImpactStats.tsx`
  - `Testimonials` is in `src/components/home/Testimonials.tsx`
  - `CTABanner` is in `src/components/home/CTABanner.tsx`
  - `Newsletter` is in `src/components/home/Newsletter.tsx`
  - `Footer` is in `src/components/layout/Footer.tsx`

### About

- Route: `src/app/about/page.tsx`
- Sections live in: `src/app/about/components/`
  - `AboutHero.tsx`
  - `OurStory.tsx`
  - `MissionVision.tsx`
  - `Leadership.tsx`

### Programs

- Route: `src/app/programs/page.tsx`
- Sections live in: `src/app/programs/components/`
  - `ProgramsHero.tsx`
  - `ProgramCTAGrid.tsx`
  - `ProgramCard.tsx`
  - `LoveBackdrop.tsx`

### Volunteer

- Route: `src/app/volunteer/page.tsx`
- Sections live in: `src/app/volunteer/components/`
  - `EngagementSection.tsx`

### Other routes

- `src/app/contact/page.tsx`
- `src/app/donate/page.tsx`
- `src/app/gallery/page.tsx`

## Shared layout and UI

- `src/app/layout.tsx` defines the global layout for all routes.
- `src/app/globals.css` defines global styles.
- `src/components/layout/` holds `Navbar` and `Footer` used across pages.
- `src/components/ui/` holds generic UI building blocks:
  - `Button.tsx`, `SectionHeader.tsx`, `AnimatedSection.tsx`, `Particles.tsx`

## Suggested commit order (navbar -> hero -> sections)

1. Layout shell
   - `src/app/layout.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`
2. Home page top
   - `src/components/home/Hero.tsx`
3. Home page mid
   - `AboutPreview`, `ProgramsPreview`, `ImpactStats`
4. Home page bottom
   - `Testimonials`, `CTABanner`, `Newsletter`
5. Page-specific sections
   - About, Programs, Volunteer components
6. Supporting assets and data
   - `public/` images, `src/data/` helpers

## Commit checklist (trackable)

1. Layout shell and globals
   - [X] `src/app/layout.tsx`
   - [X] `src/app/globals.css`
   - [X] `src/components/layout/Navbar.tsx`
   - [X] `src/components/layout/Footer.tsx`

2. Home page composition (top-to-bottom)
   - [X] `src/app/page.tsx`
   - [X] `src/components/home/Hero.tsx`
   - [X] `src/components/home/AboutPreview.tsx`
   - [X] `src/components/home/ProgramsPreview.tsx`
   - [X] `src/components/home/ImpactStats.tsx`
   - [X] `src/components/home/Testimonials.tsx`
   - [X] `src/components/home/CTABanner.tsx`
   - [X] `src/components/home/Newsletter.tsx`

3. About page
   - [X] `src/app/about/page.tsx`
   - [X] `src/app/about/components/AboutHero.tsx`
   - [X] `src/app/about/components/OurStory.tsx`
   - [X] `src/app/about/components/MissionVision.tsx`
   - [X] `src/app/about/components/Leadership.tsx`

4. Programs page
   - [X] `src/app/programs/page.tsx`
   - [X] `src/app/programs/components/ProgramsHero.tsx`
   - [X] `src/app/programs/components/ProgramCTAGrid.tsx`
   - [X] `src/app/programs/components/ProgramCard.tsx`
   - [X] `src/app/programs/components/LoveBackdrop.tsx`

5. Volunteer page
   - [X] `src/app/volunteer/page.tsx`
   - [X] `src/app/volunteer/components/EngagementSection.tsx`

6. Other routes
   - [ ] `src/app/contact/page.tsx`
   - [ ] `src/app/donate/page.tsx`
   - [ ] `src/app/gallery/page.tsx`

7. Shared UI building blocks
   - [X] `src/components/ui/Button.tsx`
   - [X] `src/components/ui/SectionHeader.tsx`
   - [X] `src/components/ui/AnimatedSection.tsx`
   - [X] `src/components/ui/Particles.tsx`

8. Data and assets
   - [ ] `src/data/blur-placeholders.ts`
   - [ ] `public/images/**`

## Notes

- Keep page-level composition in each `page.tsx` ordered top-to-bottom.
- Keep `Navbar` and `Footer` changes together so navigation stays consistent across pages.
