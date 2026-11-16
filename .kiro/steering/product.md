# Product — Gig Radar

## What it is
Gig Radar is a single-page web app that puts every paid opportunity that fits a
beginner freelancer on one screen: hackathons, micro-bounties, and paid-per-view
campaigns. It stitches together sources that were never designed to talk to each
other — Devpost, Kaggle, Taskmarket, Content Rewards — into one filterable list.

## Who it is for
Beginner freelancers in Indonesia and the global south who waste hours jumping
between boards, only to find a contest is US-only, already closed, or needs
years of experience. The app answers, for each opportunity: how much, by when,
who can join, and is it beginner-friendly.

## Goals
1. One screen, every board — no account needed to browse.
2. Verified, not scraped blindly — every entry carries the date it was last
   verified live and a plain-language eligibility note.
3. Honest about freshness — the app tries the public Taskmarket API on load and
   merges fresh tasks; when the API is down it falls back to the bundled
   snapshot and says so plainly instead of pretending the data is live.

## Non-goals (v1)
- No user accounts, no payments, no submissions through the app.
- No background scraping or credential storage.
- No auto-applying to anything.
