# Design system: Departures

Airport wayfinding signage. One page; the work is a split-flap departures board.

## Color
| Token | Hex | Use |
|---|---|---|
| `--signage` | #FFC20E | Page field, sign text on black |
| `--ink` | #0E0E0C | Type on yellow, sign buttons |
| `--board` | #121311 | Board and recommendation bands |
| `--tile` | #2A2B27 | Flap face (hinge `--tile-edge` #070706) |
| `--flap` | #F3EFE3 | Primary characters on the board |
| `--flap-dim` | #A29D8C | Year, gate and column labels on the board |
| `--paper` | #F4EEDC | Boarding pass details and About band |

Strategy: committed. Yellow carries the page, black carries the board.

## Type
- Display and board: Barlow Condensed 500/600/700, uppercase, tracked +0.04 to +0.14em on labels. Display max 6rem.
- Body: Public Sans Variable, 17px, 1.55 line height, measure about 38rem.
- Both self-hosted through `@fontsource` packages.

## Components
- **Sign**: black rounded (4px) button, yellow condensed caps, arrow drawn as inline SVG (stroke 3).
- **Gate**: large sign used as the role switcher; `aria-pressed` true = yellow with ink inset border.
- **Board row**: native `<details>`; summary holds four tile fields (year 7, where 10, project 24, result 24 cells). Tiles flip through random characters before landing (`flipTile` in `src/pages/index.astro`).
- **Boarding pass**: paper panel, dashed perforation between stub and body; shows the lens-specific note for the active role.
- **Toolkit row**: dt/dd list with 4px ink rules; the active lens row inverts.

## Motion
One authored moment: the flap cascade on load and on role change. Reduced motion shows final characters immediately. Hover nudges signs 3px.

## Rules
- Every board string is uppercase and length-limited (see `src/data/work.ts`).
- Claims only from resumes or LinkedIn; see `vaishnavi-kulkarni/context.md` in the source workspace.
- Shareable role links: `?lens=product|program|project`.
