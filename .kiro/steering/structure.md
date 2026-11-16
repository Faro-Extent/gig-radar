# Structure — Gig Radar

```
gig-radar/
├── index.html          # Page structure: header, stats, live bar, filters, grid, how-it-works
├── styles.css          # Dark radar theme, responsive grid
├── app.js              # Data snapshot (BUNDLED), rendering, filters, countdown, live Taskmarket fetch
├── README.md           # What it is, how to run, data sources, Kiro usage
├── SUBMISSION.md       # Kiroween submission checklist + demo video script
├── LICENSE             # MIT
├── .gitignore          # Never ignores .kiro (required by Kiroween rules)
└── .kiro/
    ├── steering/
    │   ├── product.md  # Product goals and non-goals
    │   ├── tech.md     # Stack and conventions
    │   └── structure.md# This file
    ├── specs/gig-radar/
    │   ├── requirements.md
    │   ├── design.md
    │   └── tasks.md
    └── hooks/
        └── test-on-save.json  # Run syntax checks when JS files change
```

## Rules
- The `.kiro/` directory MUST be committed to the repo root and MUST NOT be
  in `.gitignore` (Kiroween submission requirement).
- `app.js` is the only script; keep data and rendering in one place for v1.
- New opportunity types go in `BUNDLED` with all fields present.
