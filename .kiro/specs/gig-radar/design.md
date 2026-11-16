# Design — Gig Radar

## Architecture
Single-page static app. No server, no database, no framework.

```
index.html  →  styles.css (theme)
            →  app.js ──► BUNDLED snapshot (verified 2026-11-16)
                       └─► fetch https://api.taskmarket.dev/api/tasks (best effort)
```

## Data model (one entry)
| Field | Meaning |
|---|---|
| id | stable slug |
| title, platform, type | display; type is `hackathon`, `bounty` or `campaign` |
| rewardLabel | human text, e.g. "$100,000 prize pool · 1st $30,000" |
| rewardUsdMax | number used only for sorting/filtering |
| deadline | ISO 8601 with offset, or `null` for open-ended |
| url | official opportunity page |
| beginnerFit | boolean |
| description | what it is, in one or two sentences |
| eligibility | who can join, plain language |
| verified | date the entry was last checked live |
| source | `snapshot` or `live` |

## Rendering
- `render()` reads the filter controls, filters + sorts `entries`, and injects
  card HTML (escaped) into `#grid`. Stats update from the same list.
- Countdowns are computed at render time from `Date.now()`.

## Live merge
- `tryLiveTaskmarket()` fetches the public Taskmarket tasks endpoint with an
  8s timeout, defensively maps unknown shapes, caps at 20 items, and appends
  them with `source: "live"`. Any failure (network, HTTP error, empty list,
  unparseable body) leaves the snapshot untouched and updates the status bar
  with the reason.

## Frankenstein story (why this category)
The app stitches together Devpost hackathons, a Kaggle data competition,
Taskmarket crypto bounties and Content Rewards clipping campaigns — four
platforms with different data shapes, currencies, deadlines and eligibility
rules — into one normalised list. That is the chimera: incompatible pieces,
one working animal.
