# Gig Radar

**Paid gigs, bounties & hackathons that fit a beginner — on one screen.**

Built for **Kiroween 2026** (Frankenstein category): stitching together Devpost
hackathons, a Kaggle data competition, Taskmarket crypto bounties and Content
Rewards clipping campaigns — four platforms that were never designed to talk to
each other — into one filterable list with plain-language eligibility notes.

## Run it

No build step, no backend, no account needed:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

or just open `index.html` in a browser (the bundled snapshot works from
`file://`; the live Taskmarket merge needs http/https).

## What it does

- 8 verified opportunities with reward, deadline countdown, eligibility and
  beginner-fit flags.
- Search + filters (type, platform, minimum reward, beginner-only) and sorting
  (deadline, reward, title).
- Stats header: total opportunities, total prizes tracked, closing within 7
  days, beginner-friendly count.
- On load it tries the public Taskmarket API and merges fresh tasks. When the
  API is down it falls back to the bundled snapshot and says so plainly.

## Data sources (all verified live 16 Nov 2026)

| Opportunity | Source |
|---|---|
| Kiroween 2026 ($100,000) | https://kiroween.devpost.com/ (+ Official Rules) |
| #BuildHybridAI 2026 ($30,000) | https://firebasehybridaihackathon.devpost.com/ |
| AI for Church Hackathon (prizes TBA) | https://aiforchurch.com/hackathon |
| Agentware ($1,800) | https://www.agentwarehack.com/ |
| NFL Big Data Bowl 2027 ($100,000) | https://www.kaggle.com/c/nfl-big-data-bowl-2027 |
| Tempo coding bounties ($1.40 total) | Taskmarket API, verified via live check 16 Nov 2026 |
| Frontier x Phantom + Buildable UGC campaigns | Content Rewards (Ahmad's own campaigns) |

Deadlines and prizes change — always re-check the official page before entering.

## How Kiro was used (honest note)

The spec-driven workflow was followed: `.kiro/steering/` holds the product,
tech and structure decisions; `.kiro/specs/gig-radar/` holds requirements,
design and tasks; `.kiro/hooks/` runs syntax checks on save. The code was
written to those specs.

What is **not** yet true: the build was not yet iterated inside the Kiro IDE
itself, because Kiro requires an AWS Builder ID sign-in (Ahmad's account) and
no account was created on his behalf. Once Ahmad signs in to Kiro, the
prepared `.kiro/` scaffolding lets Kiro pick the project up immediately —
specs, steering and hooks are already in place. The submission write-up must
describe Kiro usage accurately at submission time.

## License

MIT — see `LICENSE`.
