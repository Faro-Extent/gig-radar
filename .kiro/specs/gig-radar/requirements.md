# Requirements — Gig Radar (Kiroween 2026, Frankenstein)

## User stories
1. As a beginner freelancer, I can see paid hackathons, bounties and campaigns
   in one list, so I stop checking five boards a day.
2. As a user in Indonesia, I can see at a glance whether I am eligible, so I
   never waste a week on a US-only contest.
3. As a user, I can filter by type, platform, minimum reward and
   beginner-friendliness, and sort by deadline or reward.
4. As a user, I can see how long is left before each deadline, so I can
   prioritise what closes soon.
5. As a user, I can tell whether the data is live or a snapshot, so I am never
   misled about freshness.

## Acceptance criteria
- [x] Page renders 8 verified opportunities from the bundled snapshot with no
      console errors.
- [x] Search, type/platform/min-reward filters, beginner-only toggle and all
      three sort orders work and update the result count.
- [x] Countdown chips show days/hours left, "Closed" past deadline, and
      "No fixed deadline" for open-ended campaigns.
- [x] Stats header shows opportunity count, total prizes tracked, closing
      within 7 days, and beginner-friendly count.
- [x] On load the app attempts the public Taskmarket API; on failure it shows
      a plain-language fallback notice and keeps the snapshot.
- [x] No build step: opening `index.html` or `python3 -m http.server` runs it.
- [x] `.kiro/` directory present at repo root with specs, hooks and steering,
      and NOT in `.gitignore`.
