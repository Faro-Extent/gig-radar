# Tech — Gig Radar

## Stack
- Vanilla HTML, CSS and JavaScript. No framework, no build step, no backend.
- Runs by opening `index.html` or serving the folder with any static server
  (e.g. `python3 -m http.server`).
- Data: a verified snapshot embedded in `app.js` (`BUNDLED`), plus an optional
  live merge from the public Taskmarket API (`GET https://api.taskmarket.dev/api/tasks`,
  no key required). Live fetch fails soft — never blocks rendering.

## Conventions
- All DOM ids used by JS are listed in `index.html` and referenced in `app.js`.
- Escape all data-derived strings before inserting into the DOM (`esc()`).
- Deadlines are ISO 8601 strings with offsets; countdowns are computed in the
  browser from `Date.now()`.
- Filter state lives in the DOM only; nothing is persisted except nothing at all
  (no localStorage use in v1).
- Keep the app dependency-free so a judge can run it in under a minute.

## Verification
- `node --check app.js` for syntax.
- Serve locally and fetch `/` with curl to confirm the page loads.
- Check the browser console is free of errors on load.
