# IdeaForge AI — Design System

## 1. Overview

The IdeaForge AI design system establishes a clean, professional, and accessible visual language for the application. Designed to feel like a modern educational institution or university project portal, it prioritizes clarity, structure, and ease of use over flashy AI aesthetics.

### Visual Principles
- **Professional & Trustworthy**: Calm blue accents, structured layouts, and clear information hierarchy.
- **Clean & Modern**: Generous white space, crisp typography, and subtle separation borders.
- **Educational / Academic**: Approachable and functional, designed for students and aspiring entrepreneurs.
- **Human-Designed**: Thoughtful, grounded styling rather than an overly futuristic AI dashboard.

### Explicit Anti-Patterns
- No dark-mode-first design or pitch-black backgrounds
- No neon colors, glowing borders, or pulsing effects
- No multicolored gradients (such as orange/red/yellow)
- No glassmorphism, heavy backdrop blurs, or transparent overlays
- No complex or distracting animations

---

## 2. Color Palette

The color system uses a light, accessible palette centered around **Professional Blue** as the primary brand color.

| Token | Hex | Tailwind Class | Role / Application |
|---|---|---|---|
| **Canvas Background** | `#F8FAFC` | `bg-slate-50` | Primary page background |
| **Surface Background** | `#FFFFFF` | `bg-white` | Cards, modals, containers, form panels |
| **Primary Brand (Blue)** | `#2563EB` | `bg-blue-600` / `text-blue-600` | Primary buttons, active links, key highlights |
| **Primary Hover** | `#1D4ED8` | `bg-blue-700` | Button hover and active states |
| **Accent / Badge Background** | `#EFF6FF` | `bg-blue-50` | Tags, category badges, subtle selected states |
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
| **Display / H1** | `2.25rem` (36px) | Bold (700) | `1.25` | Page titles, hero headings |
| **H2** | `1.75rem` (28px) | SemiBold (600) | `1.3` | Section headings, modal titles |
| **H3** | `1.25rem` (20px) | SemiBold (600) | `1.4` | Card titles, subsection headers |
| **Body** | `1rem` (16px) | Regular (400) | `1.6` | Default reading text, descriptions |
| **Body Small** | `0.875rem` (14px) | Regular (400) | `1.5` | Helper text, hints, footer links |
| **Badge / Label** | `0.75rem` (12px) | Medium (500) | `1.4` | Badges, tags, status labels |

---

## 4. Components & Layout Guidelines

### Buttons
- **Primary**: Blue background (`bg-blue-600`), white text (`text-white`), rounded corners (`rounded-lg`), subtle shadow (`shadow-sm`), hover transition (`hover:bg-blue-700`).
- **Secondary / Outline**: White background (`bg-white`), subtle border (`border border-slate-200`), dark text (`text-slate-900`), hover state (`hover:bg-slate-50`).
- **Text Link**: Blue text (`text-blue-600`), hover underline or `hover:text-blue-700`.

### Cards & Panels
- Clean white background (`bg-white`).
- Subtle light gray border (`border border-slate-200`).
- Rounded corners (`rounded-xl` or `rounded-lg`).
- Subtle elevation (`shadow-sm`), avoiding harsh or colored drop shadows.

### Form Inputs
- White background (`bg-white`) with dark text (`text-slate-900`).
- Light gray border (`border border-slate-300`).
- Blue focus ring (`focus:ring-2 focus:ring-blue-500 focus:border-blue-500`).
- Placeholder text in muted slate (`text-slate-400`).

### Layout & Navigation
- Centered container layout (`max-w-5xl` or `max-w-6xl`) with comfortable margins and padding.
- Top navigation bar: White background with a subtle bottom border (`border-b border-slate-200`).
- Spacing: Consistent spacing based on an 8px grid (`gap-4`, `gap-6`, `p-6`, `p-8`).
- Transitions: Fast, subtle micro-interactions (`duration-150` or `duration-200`) restricted to hover and focus states.