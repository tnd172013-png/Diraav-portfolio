# Diraav Mobile Responsiveness Plan

## Skill Used
`tailwindcss-mobile-first` — Tailwind CSS v4 mobile-first responsive patterns (2025/2026 best practices)

## Core Approach
Mobile-first: unprefixed utilities = mobile base, then `sm:` / `md:` / `lg:` for progressive enhancement.

---

## HIGH PRIORITY — Layout/Readability Fixes

### 1. Heading Clamp Minimums Too Low
**Problem:** `clamp(2rem,4vw,3.5rem)` = 12.8px on 320px phones — nearly invisible.
**Affected:** About, Services, Blog, Clientele, Contact, AboutContent, ServicesContent, ContactContent
**Fix:** Change all section heading clamps to `clamp(2rem,5vw,3.5rem)` (minimum stays 2rem = 32px, scales faster)

### 2. Navbar Menu Link Text Too Small
**Problem:** `clamp(1.5rem,3vw,2.5rem)` = 9.6px on 320px
**Fix:** `clamp(1.8rem,4vw,2.5rem)`

### 3. Fixed Large Step Numbers (48-56px)
**Problem:** `text-5xl` / `text-6xl` on mobile — giant numbers breaking layout
**Affected:** About.tsx, AboutContent.tsx
**Fix:** `text-3xl md:text-5xl` and `text-4xl md:text-6xl`

### 4. Navbar Padding + Logo Sizing
**Problem:** `px-6` and `h-20` logo on 320px phones — cramped
**Fix:** `px-4 md:px-6 lg:px-10`, logo `h-16 md:h-20 lg:h-24`

### 5. Fullscreen Menu Padding
**Problem:** `px-10 md:px-16 py-28` — 40px padding on mobile too aggressive
**Fix:** `px-6 md:px-10 lg:px-16 py-24 md:py-28`

### 6. Footer Stacking
**Problem:** Logo + copyright side-by-side breaks on narrow screens
**Fix:** `flex flex-col sm:flex-row items-center` with centered stacking on mobile

---

## MEDIUM PRIORITY — Mobile UX Improvements

### 7. Excessive Vertical Gaps on Mobile
**Problem:** Fixed `gap-8`, `gap-12`, `gap-16` waste vertical space on phones
**Affected:** About, Services, Blog, AboutContent, ServicesContent, ContactContent
**Fix:** Make gaps responsive — `gap-4 md:gap-6 lg:gap-8` pattern

### 8. Hero Section Top Padding
**Problem:** `pt-40` (160px) on all subpages — too much on mobile
**Affected:** AboutContent, ServicesContent, ContactContent, JournalContent, JournalPostContent
**Fix:** `pt-32 md:pt-40`

### 9. Card Padding
**Problem:** Fixed `p-6` or `p-8` inside cards — tight on 320px
**Affected:** Blog cards, testimonial cards, about approach cards
**Fix:** `p-4 md:p-6` and `p-5 md:p-8`

### 10. Image Aspect Ratios on Mobile
**Problem:** `aspect-[4/5]` hero images take too much vertical space on mobile
**Affected:** AboutContent, ServicesContent, ContactContent hero images
**Fix:** No change needed — they stack below text on mobile (grid cols collapse)

### 11. ServiceMarquee Image Sizing
**Problem:** `w-[220px] h-[300px]` takes 58% of 375px viewport
**Fix:** `w-[160px] sm:w-[220px] md:w-[280px]` and `h-[220px] sm:h-[300px] md:h-[400px]`

### 12. Portfolio Card Heights
**Problem:** `h-[380px]` on mobile phones — tall relative to viewport
**Fix:** `h-[300px] sm:h-[380px] md:h-[480px]`

---

## LOW PRIORITY — Polish

### 13. Body Text Sizing
**Pattern:** Use `text-sm md:text-base` or `text-base md:text-lg` for progressive text sizing

### 14. Touch Targets
**Fix:** Ensure all interactive SVG icons are minimum `w-5 h-5` with adequate padding (44px touch area)

### 15. Button Padding
**Fix:** `px-6 md:px-8 lg:px-10` pattern for CTAs

### 16. Clientele Logo Sizing
**Fix:** `h-12 sm:h-16 md:h-20` and `w-28 sm:w-36 md:w-44`

---

## Components to Modify (in order)

1. `components/Navbar.tsx` — padding, logo, menu links, menu overlay padding
2. `components/Hero.tsx` — heading clamp, grid stacking, tagline sizing
3. `components/About.tsx` — heading clamp, step numbers, gaps, text sizing
4. `components/Services.tsx` — heading clamp, gaps, card text
5. `components/ServiceMarquee.tsx` — image sizing
6. `components/Portfolio.tsx` — card heights, padding
7. `components/Clientele.tsx` — heading clamp, logo sizing
8. `components/Blog.tsx` — heading clamp, card padding, gaps
9. `components/Contact.tsx` — heading clamp, button, text sizing
10. `components/Footer.tsx` — flex stacking
11. `components/about/AboutContent.tsx` — hero padding, heading clamps, numbers, gaps, card padding
12. `components/services/ServicesContent.tsx` — hero padding, heading clamps, gaps, text
13. `components/contact/ContactContent.tsx` — hero padding, heading clamps, gaps, form
14. `components/journal/JournalContent.tsx` — hero padding, card grid
15. `components/journal/JournalPostContent.tsx` — hero padding, article width
