export interface ContentSection {
  heading?: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: ContentSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "website-essentials-service-brand-2025",
    title:
      "5 Website Essentials Every Service Brand Needs to Convert in 2025",
    category: "Web Design",
    excerpt:
      "In 2025, your website is more than just your digital business card — it's your first impression, your sales pitch, and your silent salesperson.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    date: "April 2025",
    readTime: "6 min read",
    content: [
      {
        body: "In 2025, your website is more than just your digital business card — it's your first impression, your sales pitch, and your silent salesperson. Whether you're a coach, consultant, freelancer, or agency, your website has one job: to convert curious visitors into confident clients.\n\nAt Diraav, we've worked with enough service-led brands to know that fancy design alone doesn't convert. Simplicity, clarity, and intentional strategy do.\n\nSo if you're wondering why your site isn't converting — or if you're about to build a new one — here are 5 essentials every service-based website must have to drive real results in 2025:",
      },
      {
        heading: "1. A Clear, Bold Value Statement — Right at the Top",
        body: "This is the first thing someone should read when they land on your site — before scrolling, clicking, or second-guessing.\n\nYour value statement should instantly answer: What do you do? Who do you help? What result can I expect?\n\nVisitors don't have time to figure it out. If it's not crystal clear in the first 5 seconds, they're likely to bounce.\n\nAvoid vague words like \"empower,\" \"transform,\" or \"innovative solutions.\" Instead, go straight to the point. It builds instant clarity and tells your ideal client, \"Hey, this is for you.\"",
      },
      {
        heading: "2. One Primary Call-to-Action — Repeated Throughout",
        body: "Every page of your website should gently guide the visitor to take one clear action. That might be booking a discovery call, downloading a free resource, or filling out your contact form — but it needs to be obvious, intentional, and repeated consistently.\n\nToo many CTAs confuse people. A single CTA, used smartly across your homepage, services page, and footer, removes decision fatigue. It's not about being pushy — it's about giving people direction.\n\nIf your CTA is \"Book a free 15-min consult,\" make sure it appears on your hero banner, mid-scroll, and at the bottom of the page. And bonus: make sure it works just as well on mobile!",
      },
      {
        heading: "3. Social Proof That Builds Real Trust",
        body: "People don't trust websites — they trust people. And in 2025, vague testimonials don't move the needle. Your social proof needs to feel real, grounded, and specific.\n\nThis can be in the form of written testimonials with full names and photos, quick win-stats, or short client videos and screenshots of feedback.\n\nDon't just tell your audience you're good at what you do — let your clients show them.\n\nIf you're just starting out and don't have dozens of reviews, that's okay. Even two well-written, honest testimonials are enough to start building credibility.",
      },
      {
        heading: "4. A Mobile-First, Friction-Free Experience",
        body: "In 2025, chances are your ideal client is browsing your website from their phone — possibly while multitasking or on the move. If your website loads slowly, has unclickable buttons, or breaks the layout on mobile, you've already lost them.\n\nDesign your website with mobile as the first priority, not an afterthought. That means fast-loading images, short scroll sections, clear text hierarchy, and easy-to-tap buttons.\n\nDon't hide your call-to-action inside a hamburger menu or bury your contact form at the bottom. The mobile experience should feel smooth, intuitive, and tailored for short attention spans.\n\nA mobile-first design doesn't just improve user experience — it increases conversions, builds trust, and makes your brand feel modern and thoughtful.",
      },
      {
        heading:
          "5. A Service Section That Speaks to Their Problems — Not Just Your Process",
        body: "The biggest mistake service brands make? Turning their Services page into a list of deliverables. Your potential client doesn't care about your 6-step framework or how many revisions you offer — they care about what problem you solve and what result they'll get.\n\nSpeak in outcomes, not tasks. Write like you're talking to your dream client — the one who's overwhelmed, unsure, and looking for someone to make things easy. Help them feel seen, not sold to.",
      },
      {
        heading: "Final Thoughts",
        body: "You don't need a fancy website with ten pages and five animations. What you do need is a website that's easy to navigate, clearly communicates what you do, and invites people to work with you — without confusion or friction.\n\nThese five essentials are what we focus on with every service-based brand we work with. They're simple, timeless, and rooted in trust-building.\n\nBecause in the end, great design might catch attention — but great clarity is what drives conversions.",
      },
    ],
  },
  {
    slug: "social-media-engagement-dropping-2025",
    title: "Why Your Social Media Engagement Is Dropping in 2025",
    category: "Social Media",
    excerpt:
      "You're posting consistently. Your content looks better than ever. But your likes, comments, saves, and reach? They're steadily slipping.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    date: "March 2025",
    readTime: "7 min read",
    content: [
      {
        body: "You're posting consistently. Your content looks better than ever. But your likes, comments, saves, and reach? They're steadily slipping.\n\nIf you're a founder, creator, or marketer in 2025 — you're not alone. Social media engagement is down across the board, and it's not just because \"the algorithm hates you.\"\n\nThe platforms are evolving, audience behavior is shifting, and businesses that don't adapt are feeling the heat.\n\nLet's break down why your engagement is dropping, and more importantly — what you can actually do about it.",
      },
      {
        heading:
          "1. The Platforms Are Prioritizing Paid Content (More Than Ever)",
        body: "In 2025, organic reach is no longer enough — and it's not your fault. Platforms like Instagram, Facebook, LinkedIn, and even Pinterest are doubling down on pay-to-play models. That means your content might not reach even your most loyal followers unless it's backed by ad spend or performs exceptionally well in the first few minutes.\n\nWhat to do: Boost high-performing organic content with small budgets. Start thinking of social media as top-of-funnel, and build email/SMS lists for deeper engagement. Post valuable content consistently, so when something does hit, you're ready to amplify it.",
      },
      {
        heading: "2. Your Audience Has Content Fatigue",
        body: "Let's be real — your followers are tired. In 2025, people are exposed to hundreds of posts per day, across multiple apps. If your content isn't clear, relatable, or relevant in the first few seconds, they scroll past — not because they don't like you, but because their brain is protecting them from overload.\n\nWhat to do: Use strong hooks in your reels and captions. Add face-led content — people crave connection. Focus on quality over quantity — fewer but more thoughtful posts win.",
      },
      {
        heading: "3. You're Not Using AI the Right Way",
        body: "In 2025, everyone has access to AI. But here's the catch — if you're using AI to replace your voice, instead of enhancing it, your content can start to feel generic, robotic, and forgettable.\n\nWhat to do: Use AI tools to refine your message — not write it fully. Inject personal stories, real experiences, or behind-the-scenes — things AI can't replicate. Mix templates with your tone — combine automation with authenticity for best results.",
      },
      {
        heading: "4. You've Become Too Structured",
        body: "If your feed looks like a polished pitch deck — but no longer feels like a real person or brand — you may have slipped into the \"aesthetic trap.\" Uniform carousels, overly branded posts, and forced trends can kill engagement. Remember: people connect with people.\n\nWhat to do: Loosen up. Try spontaneous stories, unfiltered reels, or casual memes. Share WIP moments, fails, or honest thoughts. Your brand doesn't need to be chaotic — but it does need to be human.",
      },
      {
        heading: "5. You're Not Tracking What Actually Works",
        body: "Guesswork kills consistency. If you're just posting because \"Tuesday is a reel day,\" but you're not analyzing performance — you'll keep missing what your audience actually loves.\n\nWhat to do: Track what type of posts get the most saves, shares, and comments (not just likes). Review your analytics weekly. Double down on content pillars that spark responses, not just views.",
      },
      {
        heading: "So… What's the Fix?",
        body: "There's no magic formula — but here's a reliable 2025 game plan: Prioritize connection over perfection. Create a mix of content: educational, emotional, and entertaining. Focus on engagement metrics more than vanity likes. Use tools smartly. Show your face, voice, and story often. Drive traffic to owned platforms — like email, community, or website.",
      },
      {
        heading: "Final Thoughts",
        body: "Your engagement isn't dropping because your content sucks. It's dropping because the platforms — and the people — have changed.\n\nAnd you can either keep doing what worked in 2022… or step into what works now — storytelling, clarity, and brand trust.\n\nAt Diraav, we build brands that connect beyond the scroll. If you're ready to revive your strategy with content that engages and converts — let's talk.",
      },
    ],
  },
  {
    slug: "free-tools-marketing-agency-2025",
    title: "8 Free Tools That Run Our Small Marketing Agency in 2025",
    category: "Tools & Resources",
    excerpt:
      "Running a small business in 2025 isn't about having the most tools — it's about having the right ones.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "February 2025",
    readTime: "8 min read",
    content: [
      {
        body: "Running a small business in 2025 isn't about having the most tools — it's about having the right ones.\n\nBecause let's be honest: between chasing clients, building content, running ads, handling finances, and trying to stay sane… you don't have time to test 25 tools every month.\n\nAt Diraav, we're a small team that builds and scales brands — and we use just a few free or freemium tools to run everything from design to lead management.\n\nThese aren't tools we found on a random blog. They're the actual tools we use daily — for client work, internal processes, and our own marketing.",
      },
      {
        heading: "1. Adobe Express",
        body: "Purpose: To create polished, professional-looking graphics for brand decks, flyers, and promo creatives.\n\nWhen we need visuals that feel a step above Canva but still easy to make, Adobe Express comes through. It has cleaner fonts, smoother animations, and a more corporate finish — perfect for high-value pitches and presentations.\n\nWe use it for brand strategy decks, event posters, and social media promos — especially carousels with animation.",
      },
      {
        heading: "2. Canva",
        body: "Purpose: To design daily social media content, client creatives, templates, and internal brand kits.\n\nCanva is our go-to for everything fast. From Instagram posts to email headers and proposal covers, it handles quick-turnaround creative work beautifully.\n\nWe use it for our own Instagram carousels, reels covers, story templates, client social media creatives, PDF lead magnets, pitch decks, and website wireframes for initial review.",
      },
      {
        heading: "3. CapCut",
        body: "Purpose: To edit short-form videos (Reels, YouTube Shorts, client testimonials) quickly and on the go.\n\nCapCut makes video editing feel manageable — even fun. We use templates to keep brand consistency, auto-captions for retention, and trending audio to boost reach.\n\nWe use it for founder reels, client testimonial edits, and explainer videos with animations and music.",
      },
      {
        heading: "4. Pixelcut AI",
        body: "Purpose: To create clean, professional product shots — especially when the original photo wasn't great.\n\nFor clients who run product-based businesses, Pixelcut is a game-changer. It helps us quickly remove backgrounds, clean up images, and add light shadows for a studio-like feel — all on mobile.\n\nWe use it for e-commerce post designs, product catalog mockups, and before/after photo clean-ups.",
      },
      {
        heading: "5. AlsoAsked",
        body: "Purpose: To find real-time content and blog topic ideas that people are actively searching for.\n\nWe use AlsoAsked when we're building out content strategies. It shows us the \"branches\" of questions people have — and that becomes the foundation of our Reels, blogs, website copy, and SEO game.\n\nWe use it for reels hooks, carousel topics, blog outlines, and client FAQs.",
      },
      {
        heading: "6. BlackBox AI",
        body: "Purpose: To generate content prompts, caption ideas, email copy, and refine marketing messaging.\n\nWhen our brain hits a creative block, BlackBox helps. It doesn't replace creativity — but it definitely accelerates the starting point. Especially useful for clients in tough or niche industries.\n\nWe use it for caption prompts, rewriting CTAs or taglines, repurposing long-form content, and client ad copy testing.",
      },
      {
        heading: "7. Google Analytics (GA4)",
        body: "Purpose: To track how users interact with our website and where our traffic is coming from.\n\nWe use GA4 to make smart decisions — not just \"we think it's working\" assumptions. It helps us see if our blogs are bringing leads, what pages are underperforming, and what channels are converting.\n\nWe use it for traffic source breakdown, time on page analysis, lead form clicks, and SEO performance checks.",
      },
      {
        heading: "8. Zoho CRM (Free Plan)",
        body: "Purpose: To track and manage client leads, discovery calls, and follow-ups — in one place.\n\nWithout a CRM, you end up losing track of warm leads. Zoho's free plan helps us centralize everything — so we know who's in our pipeline, who needs follow-up, and which client stage they're in.\n\nWe use it for lead tracking, inquiry follow-ups, client conversion analytics, and basic email flows.",
      },
      {
        heading: "Final Thoughts",
        body: "Marketing in 2025 doesn't require a huge team or a huge tech stack. What it really requires is clarity, consistency, and a few tools that work hard for you.\n\nThese 8 tools keep our agency running smoothly — from creating content to closing clients. You don't need everything. You just need a system that makes sense for you.\n\nAnd if you're in that stage where things feel a little scattered — we'd love to help you turn the chaos into a calm, structured brand system that grows with you.",
      },
    ],
  },
  {
    slug: "aesthetic-not-enough-strategy-2025",
    title:
      "Aesthetic Is Not Enough in 2025: Strategy Is the Real Currency",
    category: "Strategy",
    excerpt:
      "In a world where every Instagram post is beautifully designed and every brand has a clean-looking logo, aesthetic is no longer the differentiator — it's the entry ticket.",
    image:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=600&h=400&fit=crop",
    date: "January 2025",
    readTime: "5 min read",
    content: [
      {
        body: "In a world where every Instagram post is beautifully designed and every brand has a clean-looking logo, aesthetic is no longer the differentiator — it's the entry ticket.\n\n2025 is proving that design alone won't build you a loyal audience, consistent sales, or a sustainable brand.\n\nBecause looking good is easy. But making sense — that's where the real work begins.",
      },
      {
        heading: "The Aesthetic Trap",
        body: "We get it. You spend hours choosing the right font, obsess over your color palette, and scroll endlessly for carousel inspiration.\n\nBut let's be honest — how many posts do you save just because they \"look\" good, and how many do you remember because they taught you something, made you feel seen, or solved your problem?\n\nThat's the difference between a brand that's just present and a brand that connects.",
      },
      {
        heading: "Your Design Needs a Purpose",
        body: "A good design should communicate clearly, guide the viewer to take action, reflect your brand voice, and be consistent across all touchpoints.\n\nIf it only \"looks good\" but doesn't convert, inform, or connect — it's decoration, not design.\n\nIn 2025, strategy and design must work together. Aesthetics are how you get noticed, but strategy is how you get chosen.",
      },
      {
        heading: "What Strategy Looks Like (in Simple Words)",
        body: "Whether you're a small business, a freelancer, or a founder building from scratch — your brand needs clarity.\n\nStrategic branding and marketing includes knowing your \"why\" — what problem are you solving and why does it matter. It means having clear audience insight, consistent messaging across your website, posts, and captions. It includes content goals — posting with intent to educate, sell, or build trust. And it requires clear conversion paths so people know what to do after they find you.\n\nIn short: Pretty without purpose is pointless.",
      },
      {
        heading: "Real Brands That Got It Right",
        body: "Take a look at brands like Paperboat or HeadsUpForTails. Their aesthetic is strong, sure. But what keeps people hooked? A deep emotional story, consistent experience, clear messaging, and purpose behind every visual and word.\n\nThat's strategy at work. And that's what builds brands that last.",
      },
      {
        heading: "So What Now?",
        body: "If you're spending too much time on Canva and too little time thinking about your offer, your audience, or your message — take a step back.\n\nAsk yourself: \"What am I really trying to say?\" \"Why would someone care about this post or product?\" \"Does my visual actually support my message?\"\n\nAt Diraav, we believe in design that makes sense. Because in 2025 and beyond, strategy is the real currency.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
