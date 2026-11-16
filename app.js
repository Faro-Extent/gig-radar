/* Gig Radar — Kiroween 2026 (Frankenstein category).
   Vanilla JS, no build step, no backend. Data below is a snapshot verified
   live on 16 Nov 2026; see README.md for sources. The app also tries the
   public Taskmarket API on load and merges fresh tasks when reachable. */

"use strict";

/* ------------------------------------------------------------------ */
/* Bundled snapshot — every entry verified live on 2026-11-16.        */
/* rewardUsdMax is used for sorting; rewardLabel is what is shown.    */
/* ------------------------------------------------------------------ */
const SNAPSHOT_DATE = "2026-11-16";
const BUNDLED = [
  {
    id: "kiroween-2026",
    title: "Kiroween 2026",
    platform: "Devpost / Kiro (AWS)",
    type: "hackathon",
    rewardLabel: "$100,000 prize pool · 1st $30,000",
    rewardUsdMax: 100000,
    deadline: "2026-12-04T14:00:00-08:00",
    url: "https://kiroween.devpost.com/",
    beginnerFit: true,
    description: "Annual Halloween hackathon: build a brand-new app with Kiro (AI IDE, specs, hooks, MCP, Kiro Crew). Only new projects count, so nobody starts ahead. 4,000 free Kiro credits for registered participants (request by 1 Dec).",
    eligibility: "Age of majority; most countries. Indonesia NOT on the exclusion list (Quebec, Argentina, Australia, Brazil, Italy, Philippines, Russia, UAE, sanctioned regions are out).",
    verified: "2026-11-16"
  },
  {
    id: "buildhybridai-2026",
    title: "#BuildHybridAI 2026",
    platform: "Devpost / Firebase (Google)",
    type: "hackathon",
    rewardLabel: "$30,000 prize pool · Grand $10,000",
    rewardUsdMax: 30000,
    deadline: "2026-11-30T17:00:00-05:00",
    url: "https://firebasehybridaihackathon.devpost.com/",
    beginnerFit: true,
    description: "Build a Gen AI app using Firebase AI Logic (on-device + cloud hybrid inference) for Web, Android or iOS. Text inference free within limits; existing apps eligible if significantly updated.",
    eligibility: "Individuals, teams and organisations in most countries.",
    verified: "2026-11-16"
  },
  {
    id: "aiforchurch-2026",
    title: "AI for Church Hackathon 2026",
    platform: "AI for Church / Lovable",
    type: "hackathon",
    rewardLabel: "Cash prizes — amounts to be announced · 100 free Lovable credits for every participant",
    rewardUsdMax: 0,
    deadline: "2026-11-27T23:59:00-05:00",
    url: "https://aiforchurch.com/hackathon",
    beginnerFit: true,
    description: "Build a new AI project that serves churches (discipleship, operations, outreach, care, or open track). Solo or team, 100% online and free. Cash prize amounts were not yet announced on the live page at verification time.",
    eligibility: "Open worldwide, 18+. One project per team, one track.",
    verified: "2026-11-16"
  },
  {
    id: "agentware-2026",
    title: "Agentware — AI Agent Hackathon",
    platform: "Hackathon Raptors",
    type: "hackathon",
    rewardLabel: "$1,800 prize pool · 1st $800",
    rewardUsdMax: 1800,
    deadline: "2026-11-30T18:00:00Z",
    url: "https://www.agentwarehack.com/",
    beginnerFit: true,
    description: "72-hour online hackathon (27–30 Nov): build an AI agent that does real work unattended — inbox, research, browser chores, dev workflow. Judges must be able to run it in under 15 minutes; every run leaves an audit trace and a kill switch.",
    eligibility: "Free, online, solo or teams of 1–4. Team formation closes 23 Nov; full brief published 26 Nov.",
    verified: "2026-11-16"
  },
  {
    id: "nfl-big-data-bowl-2027",
    title: "NFL Big Data Bowl 2027",
    platform: "Kaggle / NFL",
    type: "hackathon",
    rewardLabel: "$100,000 prize pool · Open Track $45,000",
    rewardUsdMax: 100000,
    deadline: "2027-01-06T23:59:00Z",
    url: "https://www.kaggle.com/c/nfl-big-data-bowl-2027",
    beginnerFit: false,
    description: "Analyse NFL Combine player-tracking data and connect it to regular-season performance. Submit a write-up (max 2,000 words) plus a public Kaggle Notebook. Pure data/research work — no app to build. 7,000+ entrants already.",
    eligibility: "Worldwide except Crimea, DNR/LNR, Cuba, Iran, North Korea and sanctioned regions. 18+ (or local age of majority) to win. Kaggle account required.",
    verified: "2026-11-16"
  },
  {
    id: "taskmarket-tempo-bounties",
    title: "Tempo coding bounties — “PLZ REMAIN CALM!” game",
    platform: "Taskmarket (Tempo chain)",
    type: "bounty",
    rewardLabel: "$0.15–$0.30 per task · 6 tasks, $1.40 total",
    rewardUsdMax: 1.4,
    deadline: "2026-11-23T23:59:00Z",
    url: "https://taskmarket.dev/",
    beginnerFit: true,
    description: "Small coding bounties on a browser game (responsive layout, UI fixes). No stake required, no gas. Task IDs TSK-MKTH9WZN, TSK-KWSW8ZVW, TSK-6XPX6Z86, TSK-3CVSCGPA, TSK-01AWCTNN, TSK-5E03NXPZ. Award is judged by the requester, not guaranteed.",
    eligibility: "Open bounty; submit a passing Forge check. Taskmarket API was down (502) at verification time — check live status before starting.",
    verified: "2026-11-16"
  },
  {
    id: "frontier-phantom-clipping",
    title: "Frontier x Phantom Clipping Campaign",
    platform: "Content Rewards",
    type: "campaign",
    rewardLabel: "$2.50 per 1,000 views · max $1,000 per video",
    rewardUsdMax: 1000,
    deadline: null,
    url: "https://contentrewards.com/c/campaigns/14b8acd5-1617-4d6e-8885-0355c5bd2d9f",
    beginnerFit: true,
    description: "Clip the Frontier Traders Grand Final stream into vertical 9:16 clips (10–35s). Payment starts only after a video reaches 10,000 views (MVR) and is approved. Submit the clip link within 30 minutes of posting. No AI-generated video; no view manipulation.",
    eligibility: "TikTok / Instagram / X. Audience must be ≥50% from English-speaking countries. Do not post without written approval from KAIKA.",
    verified: "2026-11-16"
  },
  {
    id: "buildable-ugc",
    title: "Buildable AI UGC",
    platform: "Content Rewards",
    type: "campaign",
    rewardLabel: "$5.50 per 1,000 views · max $100 per video",
    rewardUsdMax: 100,
    deadline: null,
    url: "https://contentrewards.com/c/campaigns/288471eb-3925-4360-b6ca-0e09454e22db",
    beginnerFit: true,
    description: "15–45s vertical videos as a small business owner who got a pro website with Buildable. Draft must be approved BEFORE posting. Bonuses: $20 first approved video, $25 for 10 posts in one week.",
    eligibility: "TikTok / Instagram / YouTube / X. Show face on camera; link in bio to buildable.global. Budget $377 of $1,000 left at verification.",
    verified: "2026-11-16"
  }
];

/* ------------------------------------------------------------------ */
/* State + rendering                                                   */
/* ------------------------------------------------------------------ */
let entries = BUNDLED.map((e) => ({ ...e, source: "snapshot" }));

const $ = (id) => document.getElementById(id);
const grid = $("grid");

function fmtMoney(n) {
  if (n >= 1000) return "$" + n.toLocaleString("en-US");
  return "$" + n;
}

function countdown(deadline) {
  if (!deadline) return { text: "No fixed deadline", cls: "ok" };
  const ms = new Date(deadline).getTime() - Date.now();
  if (ms <= 0) return { text: "Closed", cls: "closed" };
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  if (days > 7) return { text: days + " days left", cls: "ok" };
  if (days >= 1) return { text: days + "d " + hours + "h left", cls: "soon" };
  return { text: hours + "h left", cls: "soon" };
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}

function cardHTML(e) {
  const cd = countdown(e.deadline);
  const dl = e.deadline
    ? new Date(e.deadline).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
    : "Open-ended";
  return (
    '<article class="card">' +
      '<div class="card-top"><span class="badge ' + e.type + '">' + e.type + '</span>' +
      '<span class="platform">' + esc(e.platform) + '</span></div>' +
      '<h2>' + esc(e.title) + '</h2>' +
      '<div class="reward">' + esc(e.rewardLabel) + '</div>' +
      '<div class="countdown ' + cd.cls + '">' + cd.text + ' · closes ' + esc(dl) + '</div>' +
      (e.beginnerFit ? '<span class="fit">Beginner-friendly</span>' : "") +
      '<p class="desc">' + esc(e.description) + '</p>' +
      '<p class="meta"><strong>Who can join:</strong> ' + esc(e.eligibility) + '</p>' +
      '<p class="meta">Verified live ' + esc(e.verified) + (e.source === "live" ? " · live from Taskmarket API" : " · snapshot " + SNAPSHOT_DATE) + '</p>' +
      '<a class="card-link" href="' + esc(e.url) + '" target="_blank" rel="noopener">View opportunity →</a>' +
    '</article>'
  );
}

function render() {
  const q = $("q").value.trim().toLowerCase();
  const type = $("type-filter").value;
  const platform = $("platform-filter").value;
  const minReward = Number($("min-reward").value);
  const sort = $("sort").value;
  const beginnerOnly = $("beginner-only").checked;

  let list = entries.filter((e) => {
    if (type !== "all" && e.type !== type) return false;
    if (platform !== "all" && e.platform !== platform) return false;
    if (e.rewardUsdMax < minReward) return false;
    if (beginnerOnly && !e.beginnerFit) return false;
    if (q) {
      const hay = (e.title + " " + e.platform + " " + e.description + " " + e.eligibility).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  list.sort((a, b) => {
    if (sort === "reward") return b.rewardUsdMax - a.rewardUsdMax;
    if (sort === "title") return a.title.localeCompare(b.title);
    const da = a.deadline ? new Date(a.deadline).getTime() : Infinity;
    const db = b.deadline ? new Date(b.deadline).getTime() : Infinity;
    return da - db;
  });

  $("result-count").textContent =
    list.length + " of " + entries.length + " opportunities shown";
  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : '<p class="empty">No opportunities match those filters. Try widening the search.</p>';
  updateStats();
}

function updateStats() {
  const now = Date.now();
  const closing = entries.filter((e) => {
    if (!e.deadline) return false;
    const ms = new Date(e.deadline).getTime() - now;
    return ms > 0 && ms <= 7 * 86400000;
  }).length;
  const total = entries.reduce((s, e) => s + (e.rewardUsdMax || 0), 0);
  $("stat-count").textContent = entries.length;
  $("stat-prizes").textContent = fmtMoney(total) + "+";
  $("stat-closing").textContent = closing;
  $("stat-beginner").textContent = entries.filter((e) => e.beginnerFit).length;
}

function fillPlatforms() {
  const sel = $("platform-filter");
  [...new Set(entries.map((e) => e.platform))].sort().forEach((p) => {
    const o = document.createElement("option");
    o.value = p;
    o.textContent = p;
    sel.appendChild(o);
  });
}

/* ------------------------------------------------------------------ */
/* Live data: public Taskmarket API (no key needed). Fails soft.       */
/* ------------------------------------------------------------------ */
async function tryLiveTaskmarket() {
  const bar = $("live-text");
  const dot = $("live-dot");
  try {
    const res = await fetch("https://api.taskmarket.dev/api/tasks", { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const items = Array.isArray(data) ? data : data.tasks || data.data || [];
    if (!items.length) throw new Error("empty task list");
    const mapped = items.slice(0, 20).map((t, i) => ({
      id: "live-taskmarket-" + (t.id || t.taskId || i),
      title: t.title || t.name || "Taskmarket task",
      platform: "Taskmarket (live)",
      type: "bounty",
      rewardLabel: t.reward != null ? "$" + t.reward : (t.bounty != null ? "$" + t.bounty : "Reward on page"),
      rewardUsdMax: Number(t.reward || t.bounty || 0),
      deadline: t.expiry || t.deadline || t.expiresAt || null,
      url: "https://taskmarket.dev/",
      beginnerFit: true,
      description: (t.description || "Open bounty on Taskmarket.").slice(0, 300),
      eligibility: "Open bounty; check the live Taskmarket page for terms.",
      verified: new Date().toISOString().slice(0, 10),
      source: "live"
    }));
    entries = entries.concat(mapped);
    fillPlatforms();
    render();
    dot.classList.add("ok");
    bar.textContent = "Live: " + mapped.length + " fresh tasks merged from the Taskmarket API · snapshot " + SNAPSHOT_DATE + " kept as fallback.";
  } catch (err) {
    dot.classList.add("bad");
    bar.textContent = "Live Taskmarket feed unreachable (" + err.message + ") — showing the verified snapshot from " + SNAPSHOT_DATE + ".";
  }
}

/* ------------------------------------------------------------------ */
["q", "type-filter", "platform-filter", "min-reward", "sort", "beginner-only"]
  .forEach((id) => $(id).addEventListener("input", render));

fillPlatforms();
render();
tryLiveTaskmarket();
