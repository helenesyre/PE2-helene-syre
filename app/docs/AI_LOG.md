# AI LOG

## Color palette in global CSS

**Tool used:** Claude Code (Claude Opus 5.5) in VS Code

**Date:** 30 October 2026

**Purpose:** I had finished my color palette in Figma and wanted it set up as Tailwind colors in `globals.css`. I gave Claude a screenshot of the color palette from Figma to save time, instead of typing in every hex code in manually myself.

**Outcome:**

- Every color (Cloud white, Warm ivory, Sand, Stone, Seafoam, Ocean, Lime, Fern and Deep forest) now has steps from 50 to 900, for example `bg-sand-200` or `text-ocean-700`. The main color is step 500, and the plain name (for example `bg-sand`) gives the same color.
- Added feedback colors for error, warning, success, info and note (`bg`, `border` and `text` for each). They use Tailwind's built-in red, amber, green, blue and gray, like in my Figma.
- My Stone and Lime replace Tailwind's own `stone` and `lime` colors.

**After using AI:** I went through every line of code to double check if it was correct before sending it.

---

## Typography scale in global CSS

**Tool used:** Claude Code (Claude Opus 5.5) in VS Code

**Date:** 9 November 2026

**Purpose:**

1. I was really tired after work and wanted to know how I could set up the hamburger menu component.
2. I wanted to add my icons fast and asked Claude to add them after I had added my Lucide library to the code.

**Outcome:**

1.  It started by removing everything I had set up (not because it was wrong, just because I only had set up so little at that time) and wrote alot of code I didn't agree with. So I backtracked to where I started and didn't use what it gave me.
2.  It added the code like this:

```ts
{Icon && <Icon size={20} />}
{link.label}
```

**After using AI:** I didn't accept the changes from task 1 and made the menu myself. I did use the two small lines from task 2.

---

## Typography scale in global CSS

**Tool used:** Claude Code (Claude Opus 5.5) in VS Code

**Date:** 11 November 2026

**Purpose:** I wanted to turn my typography design (H1–H4, lead, body, link, small, label and button) into global styles with Tailwind CSS, so I don't have to repeat the same classes in every component. Since I already had this in my Figma design system I saved time by copying in the overview and making Claude do my changes I had done while designing.

**Outcome:**

- Switched the body font from Inter to Poppins (weights 400, 500 and 600) in `layout.tsx`. (I had forgot to do this, since im usually using Inter.)
- Added `font-heading` (Unbounded) and `font-body` (Poppins) tokens in `globals.css` with `@theme inline`, so they use the fonts that `next/font` loads.
- Styled `h1`–`h6`, `body`, `p`, `small` and `button` in `@layer base` to match the design. The weights are now SemiBold or Medium instead of bold, and H1 is `md:text-5xl`.
- Added `.lead`, `.link` and `.label` classes in `@layer components`.
- Moved the old unlayered `body` and heading rules into the base layer, so Tailwind utility classes can still override them.

**After using AI:** I looked over and checked if it worked before sending the code. I removed some unnecessary parts.

---
