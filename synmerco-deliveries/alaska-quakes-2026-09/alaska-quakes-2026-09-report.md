# Alaska earthquakes of magnitude 2.5 or more in September 2026: counts, depth and the largest

Monthly seismic summary for one region (Alaska), from the USGS earthquake catalog.
Job: Synmerco intent d3c2ba12-ae2c-43cc-a9b5-614f2541b067, bid 39093, escrow esc_0dad40d9092340c3a23fdd65.
Seller: Ayak (did:key:z6MkhK1zQqAFFhYU1GSsV9DktjN9PWyPXCYr6kp6kkczFnvu). Awarded 2026-11-19 01:02:39 UTC.

## Parameters (exactly as specified in the job)

Source: USGS earthquake catalog, host earthquake.usgs.gov, endpoint /fdsnws/event/1/query, format geojson.
starttime 2026-09-01, endtime 2026-10-01, minmagnitude 2.5, minlatitude 51, maxlatitude 72, minlongitude -180, maxlongitude -129.
Retrieved 2026-11-19 02:40 UTC. All magnitudes as returned by the source; depths are the third coordinate, in km; times are UTC.

## Raw count excerpt

The /fdsnws/event/1/count endpoint for the same parameters returned, raw:

```
864
```

The /fdsnws/event/1/query for the same parameters returned 864 features (metadata count 864).
The accompanying file ak-quakes-2026-09.csv holds one row per event returned: 864 rows plus the header.
First event in the file: 2026-09-01T02:22:49.340Z. Last event: 2026-09-30T19:51:37.122Z. All 864 events fall inside September 2026 (UTC).
All 864 events are of type "earthquake". Magnitude range 2.5 to 6.5. Depth range 0.9 to 230.217 km.
Tsunami flag set (1) for 6 events, unset (0) for 858.

## Events per magnitude band

| Magnitude band | Events |
|---|---|
| 2.5 to under 3.0 | 565 |
| 3.0 to under 4.0 | 244 |
| 4.0 to under 5.0 | 44 |
| 5.0 or more | 11 |
| Total | 864 |

## Events per depth band

| Depth band | Events |
|---|---|
| under 35 km | 567 |
| 35 to under 70 km | 174 |
| 70 km or more | 123 |
| Total | 864 |

## Events per UTC day

| UTC day | Events |
|---|---|
| 2026-09-01 | 44 |
| 2026-09-02 | 55 |
| 2026-09-03 | 95 |
| 2026-09-04 | 64 |
| 2026-09-05 | 34 |
| 2026-09-06 | 36 |
| 2026-09-07 | 24 |
| 2026-09-08 | 38 |
| 2026-09-09 | 22 |
| 2026-09-10 | 23 |
| 2026-09-11 | 39 |
| 2026-09-12 | 24 |
| 2026-09-13 | 14 |
| 2026-09-14 | 8 |
| 2026-09-15 | 22 |
| 2026-09-16 | 25 |
| 2026-09-17 | 23 |
| 2026-09-18 | 24 |
| 2026-09-19 | 15 |
| 2026-09-20 | 25 |
| 2026-09-21 | 25 |
| 2026-09-22 | 23 |
| 2026-09-23 | 23 |
| 2026-09-24 | 17 |
| 2026-09-25 | 19 |
| 2026-09-26 | 11 |
| 2026-09-27 | 28 |
| 2026-09-28 | 24 |
| 2026-09-29 | 21 |
| 2026-09-30 | 19 |
| Total | 864 |

## Busiest 5 days (UTC)

| Rank | UTC day | Events |
|---|---|---|
| 1 | 2026-09-03 | 95 |
| 2 | 2026-09-04 | 64 |
| 3 | 2026-09-02 | 55 |
| 4 | 2026-09-01 | 44 |
| 5 | 2026-09-11 | 39 |

The busiest day, 2026-09-03 (95 events), follows the magnitude 6.3 earthquake of 2026-09-03 11:17:21 UTC (see the 10 largest below).

## The 10 largest (ties: earlier time first)

| Rank | Magnitude | Type | Time (UTC) | Place | Depth (km) | Tsunami |
|---|---|---|---|---|---|---|
| 1 | 6.5 mww | earthquake | 2026-09-17T14:19:52.234Z | 170 km W of Nikolski, Alaska | 98 | 1 |
| 2 | 6.3 mww | earthquake | 2026-09-03T11:17:21.573Z | 92 km SSW of Nikolski, Alaska | 21 | 1 |
| 3 | 5.4 mww | earthquake | 2026-09-03T20:21:14.883Z | 105 km SSW of Nikolski, Alaska | 10 | 0 |
| 4 | 5.3 mww | earthquake | 2026-09-01T06:44:38.648Z | 83 km SSW of Nikolski, Alaska | 37.077 | 1 |
| 5 | 5.3 mww | earthquake | 2026-09-03T18:45:39.056Z | 108 km SSW of Nikolski, Alaska | 10 | 0 |
| 6 | 5.2 mww | earthquake | 2026-09-02T12:31:58.751Z | 91 km SSW of Nikolski, Alaska | 20.117 | 0 |
| 7 | 5.2 mb | earthquake | 2026-09-03T11:24:50.725Z | 107 km SSW of Nikolski, Alaska | 10 | 0 |
| 8 | 5.2 mb | earthquake | 2026-09-03T13:03:18.581Z | 102 km SSW of Nikolski, Alaska | 10 | 1 |
| 9 | 5.2 mww | earthquake | 2026-09-03T20:22:25.731Z | 68 km SSW of Nikolski, Alaska | 30.778 | 0 |
| 10 | 5.1 mww | earthquake | 2026-09-02T05:13:57.397Z | 98 km SSW of Nikolski, Alaska | 17.515 | 0 |

Largest event: magnitude 6.5 (mww), 2026-09-17T14:19:52.234Z, 170 km W of Nikolski, Alaska, depth 98 km, tsunami flag 1 (event id us7000ti1p).
Second largest: magnitude 6.3 (mww), 2026-09-03T11:17:21.573Z, 92 km SSW of Nikolski, Alaska, depth 21 km, tsunami flag 1 (event id us7000tdvt).
11 events reached magnitude 5.0 or more; the remaining 853 were below 5.0.

## PROOF

One line per request (full request, UTC time, HTTP status):

- Request 1: https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=2026-09-01&endtime=2026-10-01&minmagnitude=2.5&minlatitude=51&maxlatitude=72&minlongitude=-180&maxlongitude=-129 — requested 2026-11-19T02:39:57Z — HTTP 200
- Request 2: https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2026-09-01&endtime=2026-10-01&minmagnitude=2.5&minlatitude=51&maxlatitude=72&minlongitude=-180&maxlongitude=-129 — requested 2026-11-19T02:39:59Z — HTTP 200

First response's Date header line, copied exactly:

```
Date: Thu, 19 Nov 2026 02:40:00 GMT
```

Second response's Date header line, copied exactly:

```
Date: Thu, 19 Nov 2026 02:40:01 GMT
```

## Sources (only the sources listed in the job)

- USGS earthquake catalog, host earthquake.usgs.gov, endpoint /fdsnws/event/1/query
- USGS earthquake count, host earthquake.usgs.gov, endpoint /fdsnws/event/1/count

## Accompanying data file

ak-quakes-2026-09.csv — one row per event returned (864 rows), sorted by time ascending, time written as ISO 8601 UTC.
Columns, in order: id, time, mag, magType, place, depth, type, tsunami. Values as returned by the source.

```synmerco-data
44d9451e9d70c6e6c477d5194eaee52914626b3ae7368203928f10ac97c14081 ak-quakes-2026-09.csv
```

No advice, opinion or forecast is offered beyond the source.
