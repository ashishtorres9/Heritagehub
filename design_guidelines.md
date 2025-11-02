# Heritage Hub Nepal - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from modern agricultural tech and sustainable business landing pages (similar to Shopify's product pages, Airbnb's trust-building patterns, and Linear's clean calculator interfaces). Focus on building credibility for agricultural investment while maintaining approachable, earthy aesthetics.

## Core Design Principles
1. **Trust Through Clarity**: Every number, statistic, and claim should be immediately readable and trustworthy
2. **Nature-Inspired Professionalism**: Balance organic, earthy elements with clean, modern business aesthetics
3. **Conversion-Focused**: Guide users naturally from interest → understanding → action

## Typography System
**Headings**: Playfair Display (Serif)
- Hero H1: 3.5rem (56px) / Bold / Leading tight (1.1)
- Section H2: 2.5rem (40px) / SemiBold / Leading tight (1.2)
- Subsection H3: 1.75rem (28px) / SemiBold
- Card Titles: 1.25rem (20px) / SemiBold

**Body**: Inter (Sans-serif)
- Primary: 1rem (16px) / Regular / Leading relaxed (1.7)
- Large Body: 1.125rem (18px) / Regular / For key value props
- Small: 0.875rem (14px) / Regular / For disclaimers, footnotes
- Labels: 0.875rem (14px) / Medium / All caps with letter-spacing

## Layout System
**Spacing Primitives**: Use Tailwind units 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 (desktop), py-12 (mobile)
- Component gaps: gap-8 (desktop), gap-6 (mobile)
- Card padding: p-8 (desktop), p-6 (mobile)

**Container Widths**:
- Max content: max-w-6xl (1152px)
- Calculator/Forms: max-w-4xl (896px)
- Text content: max-w-3xl (768px)

## Color Implementation
**Primary Palette**:
- Bamboo Green #2E5E3E: Primary CTAs, navigation active states, trust badges, section accents
- Terracotta #C44536: Secondary CTAs, highlights, urgent actions, price callouts
- Cream #F8F4E9: Page background, card backgrounds, soft sections

**Extended Palette**:
- Dark Green #1A3A2A: Text on light backgrounds, footer background
- Light Green #E8F3ED: Success states, subtle highlights
- Warm Gray #6B5D56: Secondary text, muted elements
- Pure White #FFFFFF: Card surfaces, input fields

**Usage Rules**:
- Hero CTA: Terracotta background with white text
- Secondary CTA: Bamboo green border with green text
- Backgrounds: Alternate cream and white sections for depth
- Text: Dark green for primary, warm gray for secondary

## Component Library

### Navigation
- Fixed top navigation: White background, subtle shadow on scroll
- Logo left, navigation center (desktop) / hamburger right (mobile)
- Links: Dark green, underline animation on hover
- CTA button in header: Terracotta, small pill shape

### Hero Section
**Layout**: Full-width with image background (bamboo/mushroom farm imagery)
- Height: 85vh minimum
- Content: Centered overlay with semi-transparent dark green gradient (from rgba(30,60,40,0.85) to transparent)
- Headline + subtitle stack centered
- Dual CTAs horizontal (desktop) / stacked (mobile) with 16px gap

**CTA Buttons**:
- Primary: Terracotta bg, white text, backdrop-blur-md, px-8 py-4, rounded-lg, shadow-lg
- Secondary: White bg with 50% opacity, bamboo green text, backdrop-blur-md, px-8 py-4, rounded-lg

### Farm Model Calculator
**Layout**: Centered card on cream background section
- Card: White background, rounded-2xl, shadow-xl, p-12 (desktop) / p-6 (mobile)
- Two-column grid for controls (desktop) / single column (mobile)

**Interactive Elements**:
- Radio buttons: Custom styled, bamboo green when selected, 48px tap target
- Toggle switch: Large pill shape (64px wide), bamboo green active state, smooth slide animation
- Checkbox: Rounded square, terracotta accent color

**Results Display**:
- Three-column grid (desktop) / single stack (mobile)
- Each metric card: Cream background, rounded-xl, p-6
- Label: All caps, warm gray, 12px
- Value: Playfair Display, 32px, dark green
- Subtext: Inter, 14px, warm gray

### Trust Badges
**Layout**: Four-column grid (desktop) / two-column (mobile)
- Each badge: White card, rounded-xl, p-6, text-center
- Icon/number: Terracotta, 36px
- Label: Dark green, 14px, medium weight
- Subtle hover lift effect (translateY -4px)

### Contact Form
**Layout**: Single column, max-w-2xl, centered
- Input fields: Full width, cream background, dark green border on focus, rounded-lg, py-3 px-4
- Dropdown: Custom styled select with chevron icon
- Labels: Above inputs, warm gray, 14px, medium
- Submit button: Full width on mobile, auto width desktop, terracotta, py-4, rounded-lg

**Validation**:
- Error states: Red border, small error text below field
- Success: Light green background flash

### Footer
**Layout**: Dark green background (#1A3A2A), cream text
- Three-section grid (desktop) / stacked (mobile)
- Left: Logo + copyright (14px, 60% opacity)
- Center: Tech partner attribution
- Right: Social icons (24px, circular hover backgrounds)
- Top border: Terracotta accent, 4px

## Images Strategy

**Hero Section**:
- Large hero image: Vibrant bamboo grove with mushroom cultivation in foreground
- Treatment: 40% dark overlay for text readability
- Aspect: 16:9 minimum, cover fit
- Position: Center center

**Additional Images**:
- Farm model cards: Square images (400x400) showing different anna sizes
- Trust badge section background: Subtle bamboo texture pattern at 5% opacity
- About/Process section: Rectangular images (800x500) showing farming process

## Responsive Breakpoints
- Mobile: 320px - 767px (single column, stacked elements)
- Tablet: 768px - 1023px (two-column grids)
- Desktop: 1024px+ (full multi-column layouts)

## Animation Guidelines
**Minimal & Purposeful**:
- Page load: Subtle fade-in for hero content (0.5s delay)
- Scroll: Gentle fade-in for trust badges when entering viewport
- Interactions: Smooth 0.2s transitions for button hovers, form focuses
- Calculator: 0.3s ease transition when values update

**Strictly Avoid**: Parallax scrolling, auto-playing carousels, excessive scroll animations

## Accessibility Standards
- Minimum touch target: 44x44px for all interactive elements
- Color contrast: WCAG AA compliance (4.5:1 for body text)
- Focus indicators: 2px terracotta outline on all focusable elements
- Form labels: Always visible, never placeholder-only
- Semantic HTML: Proper heading hierarchy, landmark regions

This design creates a professional, trustworthy agricultural investment platform that balances modern web aesthetics with earthy, sustainable brand values while maintaining excellent usability and conversion optimization.