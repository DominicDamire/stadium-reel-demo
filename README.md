# Intergalactic Stadium: live demo

_Intergalactic Stadium is the working title; the real name will be chosen by the fans._

A 3D fan stadium in the browser. Clubs fill the sectors in proportion to their fan count, fans pick their own seat, and the arena has VIP lounges, a rewards ladder, celebrities and footballers in the stands, and a space scene around the bowl.

**Live: https://d14life.github.io/stadium-reel-demo/**

This repo holds only the built, minified static demo. The source lives in a private repository.

## Stack
- three.js r160 (loaded from the jsDelivr CDN, unpkg as fallback), plain ES modules, no framework
- Instanced crowds, merged geometry, WebAudio spatial crowd sound
- Phone budget: at most 80 draw calls and 396k triangles
- Bundled with esbuild (shared modules stay one instance), no source maps

## Features
- Sectors sized by fan count, seat picking, seat map, VIP lounges
- Rewards ladder with ranks, club crests, kits and shirt crests
- Celebrities (lounge) and footballer legends (ring) with photos
- Space scene by default (Earth), or the city scene
- Fan pages: public profile (`/fan/@handle`, points history, badges, follow), fantasy «My XI» on a pitch (captain, bench, deadline), leaderboards (all fans / my club / friends)
- Russian, English and other UI languages (`?lang=`)
- First-paint loader (pure CSS/SVG, about 8 KB inline): real byte-based progress, fades into the first rendered frame, honours `prefers-reduced-motion`

## URL flags
| Flag | Effect |
|------|--------|
| `?scene=rewards` | load the rewards-ladder scene |
| `?space=0` | city backdrop instead of space |
| `?shirtcrest=0` | no crest on shirts |
| `?players=0&celebs=0&legends=0` | hide players, celebrities, legends |

## How it is tested
- A strict audit gate (`tools/audit.py`) loads the page in headless Chromium and fails on any console error, 404, or budget overrun (draw calls, triangles).
- `check_sectors.py` verifies the seat-allocator invariants: every fan gets exactly one seat, no seat is shared, sector sizes follow the fan counts.
- The tools are not included in this demo.

Photos and crest images are used for demonstration only.
