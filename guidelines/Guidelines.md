# Argymaq Design System — Dark Luxury Edition

## Overview
Argymaq is a premium nature retreat destination featuring traditional Kazakh yurts, sauna facilities, and equestrian experiences. The redesigned multi-page website embraces a **dark, cinematic, luxury nature aesthetic** that evokes the mystery and elegance of the wilderness at twilight.

## Aesthetic Stance
**Dark Luxury Nature** — Deep forest tones meet golden accents in a sophisticated nocturnal palette. This is nature after dark: mysterious, elegant, and inviting. The design balances raw natural beauty with refined luxury touches, creating an exclusive yet accessible brand identity.

## Color Palette

### Primary Colors
- **Deep Forest Green** `#0D1F0F` — Main background, represents the night forest
- **Gold/Ochre** `#D4A843` — Primary accent, warmth of firelight and sunset
- **Off-White** `#F5EFE0` — Text and contrast, moonlight on canvas

### Neutrals & Accents
- **Dark Card** `#1A2E1C` — Elevated surfaces and cards
- **Muted Green** `#B8AE9C` — Secondary text and labels
- **Dark Secondary** `#2A3F2C` — Subtle backgrounds

## Typography

### Font Families
- **Display**: Playfair Display (Italic, Bold) — Elegant serif for hero headings, evokes luxury and tradition
- **Body**: Nunito Sans (Regular, Medium) — Clean, modern sans-serif for readability
- **Accent**: Playfair Display (Italic) used throughout for section headings

### Hierarchy
- Hero titles: 4rem - 7rem, Playfair Display Bold Italic, color: primary gold
- Section headings: 2.5rem - 4rem, Playfair Display Italic, color: primary gold
- Subheadings: 1.5rem - 2rem, Nunito Sans Medium
- Body text: 1rem - 1.125rem, Nunito Sans Regular, color: off-white
- Labels: 0.875rem, Nunito Sans Regular

## UI Components

### Buttons
- **Primary**: Gold border (2px) with gold text, fills with gold background on hover
- **Secondary**: Solid gold background with dark text, slight transparency on hover
- Border radius: 8px
- Padding: 12px 32px for primary CTAs
- Smooth transitions (300ms)

### Cards
- Background: `#1A2E1C` (dark card)
- Border: 2px solid gold with 20% opacity (`border-primary/20`)
- Border radius: 12px
- Hover: Border becomes fully opaque gold, shadow with gold glow
- Padding: 32px

### Icons
- Style: Thin line icons (lucide-react)
- Stroke width: 1.5px
- Color: Primary gold or foreground off-white
- Icon containers: Rounded squares with gold/10% background

### Dividers
- Thin hairline rules in gold with 20% opacity
- Used to separate major sections

## Visual Effects

### Grain Texture Overlay
- Subtle noise texture applied as fixed overlay across entire site
- Opacity: 3%
- Adds organic, film-like quality to the dark backgrounds
- Enhances the luxury, crafted feeling

### Image Treatments
- All images have subtle border (2px gold at 20% opacity)
- Hover state: Scale 105% with smooth transition (500ms)
- Rounded corners: 8px - 12px
- Images are full-bleed where appropriate (hero sections)

## Layout Principles

### Multi-Page Structure
The site uses React Router with true multi-page navigation:
- `/` — Home (hero + service cards)
- `/retreat` — Services (yurts + sauna with price tables)
- `/horses` — Horse Club (carousel + dual price tables)
- `/entertainment` — Entertainment (2×3 service grid)
- `/directions` — Directions (map embed + contact info)

### Fixed Navigation
- Semi-transparent background with backdrop blur
- Gold border bottom (20% opacity)
- Logo: Playfair Display Italic in gold
- Desktop: Horizontal nav with hover states
- Mobile: Hamburger menu with slide-down panel

### Spacing Scale
- Base unit: 8px
- Generous whitespace on dark backgrounds
- Section padding: 96px - 120px vertical
- Card internal padding: 32px

### Grid & Responsive
- Content max-width: 1280px (7xl)
- Breakpoint: ~1024px for mobile/tablet collapse
- Service grids: 2 or 3 columns on desktop, stack on mobile

## Photography
- **Style**: Cinematic, natural landscapes, warm golden-hour lighting
- **Treatment**: High contrast, rich shadows, warm color grading
- **Subject matter**: Horses, mountains, yurts, nature, fire/warmth
- **Sources**: Unsplash (thematically curated)
- All images have descriptive alt text

## Price Tables
- Clean table layouts with semantic structure
- Left-aligned service names, right-aligned prices
- Gold accent for price values (larger, bold)
- Bottom border separators in gold/20%
- CTA button at bottom of each table
- Prices are editable constants at top of page components

## Multilingual Support
The site supports three languages with full translations:
- **KZ** — Kazakh (primary local audience)
- **RU** — Russian (regional audience)
- **ENG** — English (international visitors)

Language switcher in header and footer, persisted across pages.

## Accessibility
- Text contrast meets WCAG AA standards (4.5:1 for body, 3:1 for large text)
- Interactive elements have clear focus states (gold ring)
- Semantic HTML structure throughout
- All images include descriptive alt text
- Keyboard navigation supported

## Page-Specific Features

### Home
- Full-screen hero with background image and gradient overlay
- Animated scroll-down indicator
- 4 service cards grid linking to detail pages
- Social media links (Instagram, WhatsApp)

### Retreat
- Side-by-side content/image layout
- Two major services: Yurts and Sauna
- Price tables with 2-3 line items each
- Replaceable photo slots (2 per service)

### Horses
- Full-width hero image
- 10-image carousel with arrow navigation (Embla Carousel)
- Dual price tables: Equestrian Sport & Riding Lessons
- Each table has 3 pricing tiers

### Entertainment
- 2×3 grid of service cards
- Each card: Photo, emoji icon, title, description, price badge
- Hover effects with border and shadow
- 6 distinct activities with individual pricing

### Directions
- Embedded Google Maps iframe
- Two CTA buttons: Google Maps & 2GIS
- Contact info cards: Address, Phone, Working Hours
- Icons for each info type

## Brand Voice
- **Tone**: Sophisticated yet warm, exclusive yet welcoming
- **Language**: Evocative, nature-focused, heritage-aware
- **Messaging**: Emphasizes authenticity, tradition, luxury, and natural connection
- **Calls to Action**: Direct ("Book Now", "Contact Us"), friendly, action-oriented

## Technical Notes
- Built with React 18 + React Router 7
- Tailwind CSS 4 for styling
- Motion library for animations (where needed)
- Embla Carousel for image galleries
- Lucide React for iconography
- Font loading: Google Fonts API
- All components are functional React components with TypeScript
