# Design Review

Review recently modified React/TSX components for consistency with the jasonkhanani.com design system.

## What to check

### 1. Brand Color Tokens
Scan the changed files for any raw hex color values. All colors must use Tailwind tokens:
- `text-ricePaper`, `bg-ricePaper` (background #FAF5F0)
- `text-sumiInk`, `bg-sumiInk` (primary text #1A1A1A)
- `text-hankoRust`, `bg-hankoRust`, `border-hankoRust` (#802B0A)
- `text-foxOrange`, `bg-foxOrange`, `border-foxOrange` (#F07F2E)
- `text-sage`, `bg-sage` (#4D6B57)

Flag any `text-[#...]`, `bg-[#...]`, or `border-[#...]` arbitrary values that should use a token.

### 2. Border Convention
All decorative/structural borders should use `border-0.5` (0.5px custom token), not `border` (1px). Flag any `border` class used for decorative lines.

### 3. Responsive Breakpoints
Classes should follow mobile-first order: base → `md:` → `lg:`. Flag any desktop-first patterns.

### 4. Typography
- Headings should use `font-serif`
- Body text should use `font-sans`  
- Personal/accent text can use `font-signature`
- Flag any `font-` class that doesn't match these roles

### 5. Spacing & Layout
- Max content width should be `max-w-7xl mx-auto` for full-width sections
- Article content should be `max-w-3xl`
- Page padding: `px-6 py-24 md:py-32`

## Output format

For each changed file, report:
```
### components/YourComponent.tsx
[PASS / ISSUES FOUND]
- ❌ Line 42: raw hex `text-[#802B0A]` → use `text-hankoRust`
- ❌ Line 67: `border` used for decorative separator → use `border-0.5`
- ✓ Colors: all tokens used correctly
- ✓ Responsive: mobile-first order
```

End with an overall verdict and a list of any changes needed before the component is merged.
