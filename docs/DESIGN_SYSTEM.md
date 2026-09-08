# IdeaForge AI — Design System

## 1. Overview

The IdeaForge AI design system establishes a **modern, colorful, professional educational startup website** visual language for the application. Designed to feel like a modern university entrepreneurship launchpad or academic startup incubator, it prioritizes clarity, structure, and approachable elegance.

### Visual Principles
- **Modern & Colorful**: Vibrant, purposeful accent colors establish information hierarchy rather than random decoration.
- **Professional & Trustworthy**: Professional Blue remains the primary brand foundation, supported by clean typography and generous whitespace.
- **Educational / Academic**: Approachable, structured, and legible—tailored for student entrepreneurs, capstone projects, and hackathons.
- **Harmonious & Controlled**: 70% neutral/light surfaces, 20% primary brand blue, and 10% supporting accent colors.

### Explicit Anti-Patterns
- No dark-mode-first design or pitch-black backgrounds
- No neon colors, glowing borders, or pulsing effects
- No harsh multicolored gradients
- No glassmorphism, heavy backdrop blurs, or transparent overlays
- No complex, floating, or distracting animations (Phase 21 handles animations separately)
- No futuristic AI dashboard aesthetic

---

## 2. Color Palette & Visual Balance (70 / 20 / 10 Rule)

### Color Hierarchy
- **70% Neutral / Light Surfaces**: Canvas background (`#F8FAFC`), pure white cards (`#FFFFFF`), subtle slate borders (`#E2E8F0`).
- **20% Primary Brand Blue**: Primary CTAs, brand emblems, and key focal highlights (`#2563EB`).
- **10% Purposeful Accents**: Intentional color accents to represent distinct concept sections:
  - **Purple (`#7C3AED`)**: AI innovation, Gemini intelligence, operational mechanics.
  - **Emerald (`#059669`)**: Revenue models, financial validation, business success.
  - **Amber (`#F59E0B`)**: Problem validation, market friction, creative spark.
  - **Sky Blue (`#0EA5E9`)**: Target audience, user personas, informational parameters.

### Color Tokens

| Token | Hex | Tailwind Class | Role / Purpose |
|---|---|---|---|
| **Canvas Background** | `#F8FAFC` | `bg-slate-50` | Primary page background |
| **Surface Background** | `#FFFFFF` | `bg-white` | Cards, modals, containers, form panels |
| **Primary Brand (Blue)** | `#2563EB` | `bg-blue-600` / `text-blue-600` | Primary buttons, active nav indicators, solution cards |
| **Primary Hover** | `#1D4ED8` | `bg-blue-700` | Button hover and active states |
| **AI Accent (Purple)** | `#7C3AED` | `bg-purple-600` / `text-purple-600` | AI badges, Gemini metadata, Business Model cards |
| **Revenue Accent (Emerald)** | `#059669` | `bg-emerald-600` / `text-emerald-600` | Revenue model cards, verification tags, metric highlights |
| **Problem Accent (Amber)** | `#F59E0B` | `bg-amber-500` / `text-amber-600` | Problem statement cards, input section accents |
| **Audience Accent (Sky)** | `#0EA5E9` | `bg-sky-500` / `text-sky-600` | Target audience cards, technical framework pills |
| **Main Heading / Text** | `#0F172A` | `text-slate-900` | Primary page headings (H1, H2, H3), bold labels |
| **Body Text** | `#1E293B` | `text-slate-800` | Standard paragraphs and descriptions |
| **Secondary / Muted Text** | `#64748B` | `text-slate-500` | Subtitles, helper text, captions, metadata |
| **Border (Subtle)** | `#E2E8F0` | `border-slate-200` | Card borders, horizontal dividers, separators |
| **Border (Input)** | `#CBD5E1` | `border-slate-300` | Form input fields, dropdowns, textareas |

---

## 3. Typography

Typography is clean and legible, using modern sans-serif fonts optimized for structured reading.

### Font Stack
- **Primary**: `Inter`, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif.

### Type Scale & Hierarchy

| Level | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| **Display / Hero H1** | `2.5rem`–`3.75rem` (40–60px) | ExtraBold (800) | `1.15` | Hero headlines, major landing banners |
| **H1** | `2.25rem` (36px) | Bold (700) | `1.25` | Page titles |
| **H2** | `1.75rem` (28px) | SemiBold (600) | `1.3` | Section headings, card group titles |
| **H3** | `1.25rem` (20px) | SemiBold (600) | `1.4` | Card titles, subsection headers |
| **Body** | `1rem` (16px) | Regular (400) | `1.6` | Default reading text, descriptions |
| **Body Small** | `0.875rem` (14px) | Regular (400) | `1.5` | Helper text, hints, footer links |
| **Badge / Label** | `0.75rem` (12px) | Medium (500) | `1.4` | Badges, tags, status labels |

---

## 4. Components & Layout Guidelines

### Buttons
- **Primary**: Blue background (`bg-blue-600`), white text (`text-white`), rounded corners (`rounded-lg`), subtle elevation (`shadow-sm shadow-blue-500/15`), hover transition (`hover:bg-blue-700`).
- **Secondary / Outline**: White background (`bg-white`), blue border/text (`border-slate-300 text-blue-700 hover:bg-blue-50/50 hover:border-blue-200`).
- **Touch Targets**: Minimum 44px on mobile (`min-h-[44px]` for standard buttons, `min-h-[48px]` for hero/submit actions).

### Badges
- **Purposeful Color Variants**:
  - `primary` (Blue): Core actions, main highlights
  - `purple` (AI): Generative AI tags, machine learning context
  - `emerald` (Success): Ready to prototype, verified, revenue metrics
  - `amber` (Creative): Innovation focus, problem indicators
  - `sky` (Audience): Persona segments, info chips
  - `secondary` (Slate): Neutral categories

### Cards & Panels
- Clean white background (`bg-white`).
- Subtle light gray border (`border border-slate-200`).
- Rounded corners (`rounded-xl`).
- Subtle elevation (`shadow-sm hover:shadow-md transition-shadow duration-150`).
- Purposeful accent bars or badge icons corresponding to section intent.

### Form Inputs
- White background (`bg-white`) with dark text (`text-slate-900`).
- Crisp border (`border border-slate-300 hover:border-slate-400`).
- Blue focus ring (`focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500`).
- Placeholder text in muted slate (`placeholder:text-slate-400`).

### Layout & Navigation
- Centered container layout (`max-w-5xl` or `max-w-6xl`) with comfortable margins and padding (`px-4 sm:px-6 lg:px-8`).
- Top navigation bar: White background with subtle bottom border (`border-b border-slate-200/80 bg-white/95 backdrop-blur-xs`).
- Transitions: Standard, subtle micro-interactions (`duration-150`) restricted to hover and focus states.