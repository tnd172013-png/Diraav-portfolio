# Diraav Website Redesign - Implementation Plan

## Context
Diraav is a marketing & consulting agency getting a full website redesign. Moving from a WordPress site (warm brown/cream tones) to a modern, immersive single-page scroll experience with a cool teal/navy palette. The new site should feel premium and intentional — matching the brand's "strategy before aesthetics" philosophy — while incorporating GSAP-driven scroll animations inspired by Frysta, Bliss Agency, and Jaeco.

### Reference Sites
- **Frysta** (https://frysta.framer.website/) — Service section grid layout
- **Bliss Agency** (https://blissagency.it/) — Marquee ticker + image grid
- **Jaeco** (https://www.jaeco.fr/) — Bold case study layouts

### Brand Assets
- **Logo:** `content of brand/logo designs (5) (1).png` (script font "Diraav" with tagline)
- **Color palette:** `content of brand/WhatsApp Image 2026-02-08 at 15.27.03.jpeg`

---

## Tech Stack
- **Next.js 15** (App Router)
- **Tailwind CSS 4**
- **GSAP + ScrollTrigger** (scroll animations, parallax, text reveals, pinning)
- **Lenis** (smooth scroll)
- **TypeScript**

---

## Color Palette

| Token      | Hex       | Usage                                  |
|------------|-----------|----------------------------------------|
| `snow`     | `#f8f9f9` | Light backgrounds, body bg             |
| `lavender` | `#d1dbeb` | Subtle accents, hover states           |
| `sage`     | `#829595` | Secondary text, muted elements         |
| `slate`    | `#596673` | Body text on light bg                  |
| `teal`     | `#2f4f4f` | Primary accent, buttons, links         |
| `navy`     | `#151f28` | Dark sections bg, headings, primary brand |

---

## Typography

- **Headings:** Playfair Display (serif) — matches the elegant script logo
- **Body:** Inter (clean sans-serif)
- Large type scale for hero/section headings using `clamp()` responsive sizing

---

## Single-Page Scroll Structure (7 Sections)

### Section 1: HERO
- Full viewport dark navy (`#151f28`) background
- Diraav logo (script) centered or left-aligned
- Large heading: **"Turning Ideas into Dream Projects"** with GSAP text reveal (words/lines animate in on load)
- Subtext fades in below: *"We blend strategy, storytelling, and soulful design to help brands grow with purpose."*
- Subtle parallax on background or decorative elements
- Scroll indicator at bottom
- **Nav:** Minimal fixed top bar — Logo left, section links right, "Let's Talk Today" CTA button

### Section 2: ABOUT
- Light background (`#f8f9f9`)
- Split layout: Text left, visual element right
- Heading: **"Grounded in Purpose, Built for Visionaries"** with scroll-triggered line reveal
- About text: *"At Diraav, we're more than a marketing and consulting agency—we're a creative partner for purpose-led brands..."*
- Philosophy points animate in staggered:
  1. "Less clutter, more meaning"
  2. "Purpose-led design"
  3. "Strategy before aesthetics"
  4. "Growth with integrity"
- Approach steps as horizontal scroll or stacked reveal:
  1. **Listen Deeply** — We begin with conversations, not assumptions.
  2. **Build Strategically** — Every step is rooted in brand purpose and growth clarity.
  3. **Create Thoughtfully** — From messaging to visuals, everything we craft is minimal, aligned, and built to last.
  4. **Grow with You** — Our role doesn't end at launch. We offer ongoing consulting and collaboration as your brand evolves.

### Section 3: SERVICES
- Top: Animated **services marquee ticker** (infinite horizontal scroll loop):
  `Consulting · Market Research · Website Development · SEO · Marketing · Brand Strategy`
- Below: Clean **2×3 grid** of service cards on light bg
- **6 Service Cards:**
  1. **Marketing Strategy** — Purposeful growth begins with the right direction. We design marketing strategies tailored to your goals, values, and audience.
  2. **Brand Consulting** — A strategic partnership to guide your growth. Whether you're launching or scaling, we bring clarity to your vision.
  3. **Market Research** — Decisions backed by insight, not assumptions. We uncover audience needs, industry patterns, and competitor positioning.
  4. **Brand Strategy** — The foundation of everything that follows. We help you define who you are, who you serve, and how to show up.
  5. **Website Development** — Your brand's digital home—designed with intention. We build minimal, elegant websites that communicate clearly and convert.
  6. **SEO** — Helping your brand show up in all the right places. We align your digital presence to support visibility and organic growth.
- Hover: subtle lift + teal accent border
- Cards stagger-animate in on scroll

### Section 4: PORTFOLIO / SELECTED WORKS
- Dark navy section (`#151f28`)
- Heading: **"Selected Works"** with text reveal
- **4 portfolio categories** as large image cards with overlay text:
  1. **Website Development** — We craft clean, responsive, and purposeful designs that not only look beautiful but also perform seamlessly.
  2. **Branding Mockups** — Our branding mockups bring your visual identity to life, showcasing how your brand feels in the real world.
  3. **Market Research** — We dive deep into your market landscape, analyzing audience behavior, trends, and competitor insights.
  4. **Social Media** — We create content that connects, engages, and converts with an authentic digital presence.
- Each card: full-width or 2-column layout, image with parallax scroll effect
- GSAP: images scale slightly on scroll, text fades in

### Section 5: TESTIMONIALS
- Light section with subtle lavender (`#d1dbeb`) tint
- Heading: **"What Our Clients Say"**
- Horizontal scroll/carousel of testimonial cards
- **5 Testimonials:**
  1. **Deluxe Enterprises** ★★★★★ — "Working with Diraav was a game-changer for Deluxe Enterprises. They built our website from scratch, showcasing our importing and exporting products with an aesthetic flair that perfectly matches our brand."
  2. **Fiesta Hospitality Services** ★★★★★ — "Diraav crafted a professional and compelling company profile for Fiesta Hospitality that left a lasting impression on our investors. Thank you for your outstanding work!"
  3. **Shreya** ★★★★★ — "Vinita has been fantastic collaborator and one that I hope to continue working with across all my professional endeavours. She helped thoughtfully, effectively and patiently as we designed a website for our manufacturing unit..."
  4. **Habot** ★★★★★ — "Vinita has been an invaluable asset to our market research team. She completed our research ahead of time, providing us with detailed information about the Dubai market. Highly recommended!"
  5. **Ek Prayaas** ★★★★★ — "We want to thank you for the redesign of our school website. The site is clean, modern, and easy to navigate. You really understood our vision and brought it to life."
- Smooth drag/swipe interaction

### Section 6: BLOG PREVIEW
- Light background
- Heading: **"The Journal"**
- **3-column grid** of latest blog cards:
  1. **5 Website Essentials Every Service Brand Needs to Convert in 2025** — In 2025, your website is more than just your digital business card...
  2. **Why Your Social Media Engagement Is Dropping in 2025** — You're posting consistently. Your content looks better than ever. But your likes, comments, saves, and reach? They're steadily slipping...
  3. **8 Free Tools That Run Our Small Marketing Agency in 2025** — Running a small business in 2025 isn't about having the most tools — it's about having the right ones...
- Each card: category tag, title, preview excerpt, "Read More" link
- Cards animate in on scroll
- "Explore All Blogs" CTA below

### Section 7: CONTACT / FOOTER
- Dark navy section (`#151f28`) — acts as both contact + footer
- Large heading: **"Let's Build Something Together"**
- Two columns:
  - **Left:** Contact info + social icons
    - Address: Valvan, Lonavala, Pune - 410403
    - Phone: +91 7823082963
    - Email: diraav.com@gmail.com
    - Social: Instagram, LinkedIn, Behance
  - **Right:** Contact form (Name, Email, Subject, Message, Send button)
- Below: Footer bar with logo, nav links, copyright
- Copyright: "© 2026 Diraav | Powered by Diraav"
- GSAP: text reveal on heading, form slides up

---

## GSAP Animation Strategy

| Animation          | Where                          | Type                                     |
|--------------------|--------------------------------|------------------------------------------|
| Text line/word reveal | Hero heading, section headings | `SplitText` + stagger                   |
| Fade up            | Paragraphs, cards, form        | `opacity + y` on scroll                 |
| Parallax           | Portfolio images, hero bg      | `y` movement at different speeds        |
| Marquee            | Services ticker                | Infinite horizontal loop (`xPercent`)   |
| Stagger grid       | Service cards, blog cards      | Cards animate in 1-by-1                 |
| Scale on scroll    | Portfolio images               | Subtle scale from 0.95 to 1            |
| Horizontal scroll  | Testimonials carousel          | `x` movement or drag                   |
| Smooth scroll      | Global                         | Lenis integration                       |

---

## File Structure

```
website diraav/
├── app/
│   ├── layout.tsx              # Root layout with fonts, Lenis, metadata
│   ├── page.tsx                # Single page — assembles all sections
│   └── globals.css             # Tailwind + custom properties
├── components/
│   ├── Navbar.tsx              # Fixed top navigation
│   ├── Hero.tsx                # Section 1
│   ├── About.tsx               # Section 2
│   ├── Services.tsx            # Section 3 (marquee + grid)
│   ├── Portfolio.tsx           # Section 4
│   ├── Testimonials.tsx        # Section 5
│   ├── Blog.tsx                # Section 6
│   ├── Contact.tsx             # Section 7
│   ├── Footer.tsx              # Bottom of Section 7
│   ├── ServiceMarquee.tsx      # Infinite scrolling ticker
│   └── ui/
│       ├── TextReveal.tsx      # Reusable GSAP text reveal component
│       ├── FadeIn.tsx          # Reusable scroll fade-in wrapper
│       └── ParallaxImage.tsx   # Image with parallax effect
├── lib/
│   ├── gsap.ts                # GSAP + plugin registration
│   └── smooth-scroll.ts       # Lenis setup
├── public/
│   ├── logo.png               # Diraav logo
│   └── portfolio/             # Portfolio images (placeholders)
├── content of brand/          # (existing) Brand reference files
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Implementation Order

### Step 1: Project Setup
- Initialize Next.js 15 + Tailwind CSS 4 + TypeScript
- Install dependencies: `gsap`, `@gsap/react`, `lenis`
- Configure Tailwind with custom color tokens
- Set up fonts (Google Fonts: Playfair Display + Inter)
- Set up Lenis smooth scroll in layout

### Step 2: Global Layout + Navbar
- Root layout with fonts, metadata, smooth scroll provider
- Fixed Navbar component with logo, section anchor links, CTA button
- `globals.css` with color custom properties

### Step 3: Hero Section
- Full-viewport dark section
- GSAP text reveal animation on heading
- Subtitle fade-in
- Scroll indicator

### Step 4: About Section
- Split layout with text content
- Scroll-triggered text reveals
- Philosophy points with staggered animation
- Approach steps

### Step 5: Services Section
- Infinite marquee ticker component
- 6 service cards in responsive grid
- Scroll-triggered stagger animation on cards

### Step 6: Portfolio Section
- Dark section with large portfolio image cards
- Parallax scroll effect on images
- Category labels + descriptions
- Scale/reveal animations

### Step 7: Testimonials Section
- Horizontal scrolling carousel
- Testimonial cards with quotes + client info
- Drag/swipe support

### Step 8: Blog Section
- 3-column card grid
- Category tags, titles, excerpts
- Scroll-triggered fade-in

### Step 9: Contact + Footer
- Dark section with contact form + info
- Social links
- Footer bar
- Form animations

### Step 10: Polish & Responsive
- Mobile responsive adjustments for all sections
- Performance optimization (will-change, lazy loading)
- Final animation timing tweaks
- Cross-browser testing

---

## Verification Checklist
1. `npm run dev` — site runs without errors
2. All 7 sections render correctly in viewport
3. GSAP animations trigger on scroll (text reveals, parallax, stagger)
4. Marquee scrolls infinitely
5. Testimonials carousel is draggable
6. Contact form validates required fields
7. Responsive: test at 375px (mobile), 768px (tablet), 1440px (desktop)
8. Smooth scroll works globally (Lenis)
9. Navigation anchor links scroll to correct sections
10. Performance: no layout shift, animations at 60fps


#f8f9f9