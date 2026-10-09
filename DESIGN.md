# Design system: Sticker board

Warm and personal, in the spirit of the references the user picked (Kane Sherwell, Thaisa Fernandes): thick ink outlines, offset shadows, pastel panels, her photo front and centre, outcome-titled projects with original diagrams.

## Color
| Token | Hex | Use |
|---|---|---|
| `--paper` | #FBF5EA | Page ground (fades to #EFE8F3 lilac at the bottom) |
| `--ink` | #2A2420 | Text, outlines, shadows, quote band |
| `--soft` | #5B524B | Secondary text (AA on paper and white) |
| `--card` | #FFFDF8 | Inner boxes, diagram boxes |
| `--lilac` | #DCD0F4 | Program, education-adjacent accents |
| `--butter` | #F6E19C | Project, launches |
| `--mint` | #C8E9D6 | Product, AI agent |
| `--peach` | #F7CAB4 | Custom machine, awards |
| `--sky` | #C3DEF0 | Pipelines, CTA |
| `--rose` | #F1BCCB | Recognition |

Swatches are applied with `.sw-<name>` classes that set `--c`.

## Type
- Bricolage Grotesque Variable for everything (optical size axis: 14 for body, 96 for display). Display is uppercase, 800 weight.
- Caveat Variable only for handwritten asides ("hi, that's me!", the quote attribution, one note in About).
- Both self-hosted via `@fontsource-variable`.

## Shape and depth
- Outline: 2.5px ink (`--line`). Shadow: `5px 5px 0` ink (`--sh`). Hover lifts to 7–9px; pressed sinks to 2px.
- Radii: 12px controls, 18–22px cards, 999px tags and chips.

## Components
- **Tag**: pill with icon, uppercase 13.5px, pastel fill (hero identity tags).
- **Role button**: outlined, white; pressed takes the role's pastel and sinks.
- **Stat sticker**: white outlined card, slight rotation, big number + labelled dot.
- **Project card**: pastel diagram panel over a white body; role chips, outcome headline, meta, "Read the story".
- **Story**: native `<details>`; shows context, what she did, stack, and the active role's note.
- **Board**: pastel outlined panel holding small outlined items (About, Toolkit).
- **Diagram**: `src/components/Diagram.astro`, server-rendered SVG themed by `--dg-ink/--dg-box/--dg-hi`.

## Role highlight
`?lens=product|program|project` or the buttons set `html[data-lens]`. Matching work moves first and keeps its shadow; other work stays fully readable but flat (dashed outline, grayscale diagram). Clicking the active role again resets to all.

## Rules
- Every claim traces to her resumes or LinkedIn. Unresolved facts are never asserted (see `src/data/work.ts` header).
- Contact is LinkedIn only.
