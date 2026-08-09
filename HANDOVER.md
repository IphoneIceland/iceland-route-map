# Boswell group — complete handover
**State as of 8 Aug 2026, 23:35 (Atlantic/Reykjavik).**
Tagged `boswell-locked-2026-08-08` · commit `a2a610a` · verified identical across local, GitHub, live site and gist.

---

## 1. Where everything lives

| What | Where |
|---|---|
| **Repo** | `github.com/IphoneIceland/iceland-route-map` (branch `main`) |
| **Live site** | https://iphoneiceland.github.io/iceland-route-map/ |
| **Backup gist** | `908e13377978cb9e9748e5cdb3cf110b` (secret) |
| **Local clone** | `~/Downloads/iceland-route-map` |
| **Lock tag** | `boswell-locked-2026-08-08` |

**Three separate projects. Do not mix them:**
- `iceland-route-map` — this one. Gist `908e1337…`
- Scriptable tour system — gist `7ae4b8a9…` ("Scriptable FULL BACKUP")
- Golden Circle standalone — not started. Own handover doc exists.

### Files
| File | Size | SHA-256 |
|---|---|---|
| `index.html` | 45,711 | `8d671dc6d71b644c65108b579a0ef4a4c0d207f24b21e3db7ff53ba55c979c03` |
| `routes-data.js` | 638,788 | `6134c84395ceb176160d077d7a0a0ce5721299c3d3cc521e37a2dea75d3329ef` |
| `i18n.js` | 10,860 | `5aa9b3d3a5982fa59dd4da4444bb3979737ea28c3d0c7b02cc3849e65ab18297` |
| `README.md` | 2,552 | `65f8103a1997ff23e6d77a59f0a1b936c76a176d71d6fea10494fba80eeb861a` |

- `index.html` — the whole app: styles, the `DAYS` array (stop lists and descriptions), `DWELL` (minutes at each stop), `SCHED` / `SCHED_END` (booked times), and the schedule engine
- `routes-data.js` — `points` (42 coordinates), `routes` (drawn geometry + per-leg km/min), `spurs` (walking legs on Heimaey)
- `i18n.js` — translations. Spanish only so far

---

## 2. The week as it stands

### Thu 6 Aug — Arrival + South Shore → Umi Hotel · 288 km / 4h35
| Time | Stop | Mins | Away |
|---|---|---|---|
| 06:25 | Keflavík Airport | 75 | 07:40 |
| 09:05 | Almar Bakari | 25 | 09:30 |
| 10:30 | Hvolsvöllur | — | through |
| 10:55 | Seljalandsfoss | 35 | 11:30 |
| 12:30 | Reynisfjara | 35 | 13:05 |
| 13:20 | Vík | 50 | 14:10 |
| 14:45 | Skógafoss | 40 | 15:25 |
| **15:40** | **Umi Hotel** | | |

Reordered from the operator's email — saves 54 km and 47 min. Guide's call, not signed off by the operator.

### Fri 7 Aug — Westman Islands · 96 km / 1h45 island driving
| Time | Stop | Mins | Away |
|---|---|---|---|
| 08:50 | Umi Hotel | — | depart |
| 09:30 | Landeyjahöfn | 30 | 10:00 |
| 10:00 | **FERRY** → Heimaey | 40 | 10:40 |
| 10:40 | Heimaey terminal | 10 | 10:50 |
| 10:55 | Herjólfsdalur | 30 | 11:25 |
| 11:30 | Þjóðhátíð Amphitheatre | 15 | 11:45 |
| 11:50 | Kaplagjóta | 20 | 12:10 |
| 12:15 | Elephant Rock | 20 | 12:35 |
| 12:45 | Stórhöfði | 25 | 13:10 |
| 13:20 | Eldfell | 40 | 14:00 |
| 14:10 | næs lunch | 45 | 14:55 |
| **15:00** | **Eldheimar — booked** | 60 | 16:00 |
| 17:30 | Heimaey terminal | 30 | 18:00 |
| 18:00 | **FERRY** → Landeyjahöfn | 40 | 18:40 |
| 18:40 | Landeyjahöfn | 10 | 18:50 |
| **19:25** | **Umi Hotel** | | |

Ferry is the **18:00**, per the paid ticket. The itinerary email said 17:00 — the ticket wins. Hotel is ~55 min later than the email implies.

### Sat 8 Aug — Umi → glacier lagoons · 249 km / 3h42
| Time | Stop | Mins | Away |
|---|---|---|---|
| 08:30 | Umi Hotel | — | depart |
| 10:10 | Kirkjubæjarklaustur | 30 | 10:40 |
| 11:45 | Freysnes | 5 | 11:50 |
| **12:30** | **Frost lunch — booked** | 60 | 13:30 |
| 13:45 | Diamond Beach | 55 | 14:40 |
| **15:10** | **Amphibian boat — booked** | 75 | 16:25 |
| **16:40** | **Hotel Jökulsárlón** | | |

Boat is 15:10 (25 pax) and 15:20 (7 pax).

### Sun 9 Aug — Hotel Jökulsárlón → Vík → Hotel Geysir · 406 km / 5h15
| Time | Stop | Mins | Away | Drive to next |
|---|---|---|---|---|
| — | Hotel Jökulsárlón | — | **09:00** | 50 min / 62.3 km |
| 09:50 | Freysnes | 15 | 10:05 | 70 min / 79.1 km |
| 11:15 | Fjaðrárgljúfur | 60 | 12:15 | 50 min / 68.8 km |
| 13:05 | Vík — lunch | 60 | 14:05 | 35 min / 41.9 km |
| 14:40 | **Umi Hotel — collect medicine** | 10 | 14:50 | 65 min / 92.7 km |
| 15:55 | Olís Selfossi — WC | 20 | 16:15 | 45 min / 60.8 km |
| **17:00** | **Hotel Geysir** | | | |
| 17:00 | Strokkur, on foot | 40 | 17:40 | |

Hveragerði / Gróðurhúsið was **dropped** — it cost a 128 km overshoot past the Geysir turnoff. Kirkjubæjarklaustur and Hvolsvöllur also cut. Hotel arrival moved from the email's 16:00; arrangements being changed.

### Mon 10 Aug — Golden Circle · 172 km / 3h06
| Time | Stop | Mins | Away | Drive to next |
|---|---|---|---|---|
| — | Hótel Geysir | — | **09:50** | 55 min / 55.8 km |
| 10:45 | Þingvellir P5 | 55 | 11:40 | 55 min / 51.6 km — **via road 360** |
| 12:35 | Kerið | 30 | 13:05 | 25 min / 28 km |
| **13:30** | **Friðheimar — booked** | 90 | 15:00 | 40 min / 25.1 km — **via Flúðir** |
| 15:40 | Gullfoss | 45 | 16:25 | 10 min / 11.4 km |
| 16:35 | Geysir | 45 | 17:20 | 1 min / 0.5 km |
| **17:25** | **Hótel Geysir** | | | |

Road 360 is **Grafningsvegur efri**, down the west side of Þingvallavatn. Pickup moved 10:15 → 09:50 because Ritchie's Google times cost 25 min more than the email allowed; Friðheimar 13:30 is the only real booking and it held.

### Tue 11 Aug — Hotel Geysir → Reykjavík · 116 km / 1h56
| Time | Stop | Mins | Away |
|---|---|---|---|
| — | Hótel Geysir | — | **09:00** |
| 09:55 | Úlfljótsvatnskirkja | 20 | 10:15 |
| 10:35 | Nesjavellir Viewing Point | 25 | 11:00 |
| **11:45** | **Bus Stop #6 – Safnahúsið** | | |

Group is at Centerhotel Þingholt, 4 min walk. Whale watching with Special Tours later — guide not attending. **No programme was issued for Wed 12 Aug** — the group's own day.

### Thu 13 Aug — Reykjanes · 125 km / 2h13
| Time | Stop | Mins | Away |
|---|---|---|---|
| — | Bus Stop #6 | — | **09:30** |
| 10:15 | Seltún, Krýsuvík | 25 | 10:40 |
| 11:00 | Fagradalsfjall | 120 | 13:00 |
| 13:15 | Papa's, Grindavík | 50 | 14:05 |
| 14:15 | Grindavík drive | 45 | 15:00 |
| **16:30** | **Sky Lagoon — Sér booked** | 105 | 18:15 |
| **18:30** | **Bus Stop #6** | | |

---

## 3. How the app behaves

- **Every computed arrival rounds UP to the next 5 minutes.** That rounding is the traffic allowance.
- **Booked times are hard anchors.** The clock snaps to them and never drifts past. A shortfall is reported as time to claw back *before* that stop, not as a late arrival.
- **First stop of a day reads DEPART**, not ARRIVE — except Thu 6, which lands at KEF and sits 75 min, so shows both.
- Opens on the **projected clock**. The booked clock is the toggle.
- Each row: name, one-line description, then one strip — **ARRIVE · time there · DEPART · drive to next**.
- Provenance badge and Google Maps link are on the **map pins only**, not the rows.
- Tap any stop row → map flies to that pin at zoom 14 and opens it.
- Satellite (Esri) by default; Terrain and Dark alternatives; `maxNativeZoom` set so imagery blurs rather than going blank.
- `no-store` cache headers and a `?v=` build stamp on the data files, so a stale tab can't make shipped work look reverted.

### Translations
`i18n.js`. English is the source and has **no table** — any missing key falls back to English, so a half-finished language degrades to English, not to blank. Spanish complete.
**Never translated:** times, distances, coordinates, prices, and every Icelandic place name.
**Left in English:** operational flags and notes — the guide's working out.

---

## 4. Drive times — which are trustworthy

| Day | Source | Status |
|---|---|---|
| **Sun 9 Aug** | Google Maps, checked leg by leg 8 Aug | Good — except the two legs created by the Umi insert (see below) |
| **Mon 10 Aug** | Google, from Ritchie | Good |
| Thu 6, Fri 7, Sat 8, Tue 11, Thu 13 | **OSRM** | **Runs ~10% slow on every leg tested.** Not rechecked |

**Two Sunday legs are derived, not measured:** Vík→Umi 35 min and Umi→Selfoss 65 min. Google gave Vík→Selfoss as one 100-min figure; it was split by distance when Umi went in. Umi is on Route 1 between them, so the split is sound but the individual numbers are not from Google.

**To fix any day:** get Google's minutes per leg, then edit `min` on that route's `legs` in `routes-data.js`.

---

## 5. Open items

- **Diamond Beach — NOT VERIFIED.** The Google link resolves to the Jökulsárlón boat operator, twice now. Needs a fresh link to the actual car park.
- **Fagradalsfjall pin** is the *Fagradalsfjall Volcano Tours* business listing at the Suðurstrandarvegur road head, not a car park. Official ones: **P1 Geldingadalir**, **P2 Stóri-Leirdalur**, 1000 ISK at parka.is. Access changes with eruption activity — check on the morning.
- **Grindavík access** is subject to civil-protection closures. Verify on the day.
- **No offline support.** Leaflet, tiles and the app all load from the network. No signal, no map. A service worker caching the shell would fix it.
- Flags and notes still present on **Thu 6, Fri 7, Sat 8, Thu 13**. Removed from Sun, Mon, Tue.
- Descriptions trimmed on **Sun and Mon** only; other days still wordier.
- Tapping ~50 stop rows in fast succession can show the previous stop's popup. One tap and a look is fine. Cause not found.
- **Kaplagjóta's only source is Heimaslóð**, a community wiki — thin for on-mic use. The 1528 Vilborgarstaðaþing 16-horse cap especially.

---

## 6. Tooling set up on the Mac, 8 Aug

- **Homebrew** at `/opt/homebrew`, added to `~/.zprofile`
- **GitHub CLI** `gh` 2.97.0, authenticated as **IphoneIceland**, git credential helper configured

In a shell older than 8 Aug, run first:
```
eval "$(/opt/homebrew/bin/brew shellenv zsh)"
```

### Ship ritual — every change
1. Edit in `~/Downloads/iceland-route-map`
2. `git add -A && git commit && git push origin HEAD:main`
3. Refresh the gist:
   ```
   node -e "const fs=require('fs');const files={};['index.html','i18n.js','routes-data.js','README.md'].forEach(f=>files[f]={content:fs.readFileSync(f,'utf8')});fs.writeFileSync('/tmp/gp.json',JSON.stringify({files}))"
   gh api -X PATCH /gists/908e13377978cb9e9748e5cdb3cf110b --input /tmp/gp.json
   ```
4. **Verify by checksum.** `curl` the live URL, `shasum -a 256`, compare to local. Never trust "it pushed" — `gh gist edit -a` silently added instead of replacing once tonight and was only caught by cloning the gist back.

### Regenerating a route line
The drawn polyline does **not** update when you change the stop list. Redraw it:
```
curl "http://router.project-osrm.org/route/v1/driving/LON,LAT;LON,LAT;...?overview=full&geometries=geojson"
```
Then map `coordinates` from `[lon,lat]` to `[lat,lon]` into `routes.dN.geometry`. This was missed once and Sunday's line still ran through Hveragerði after the stop was cut.

---

## 7. Commit history, this session

```
a2a610a  Stop the browser serving a stale copy
5235983  Monday: Ritchie's Google times; pickup moves to 09:50 so Fridheimar holds
d305016  Monday: route out via road 360, Grafningsvegur efri
161c1b1  Redraw Sunday's route line - it still went through Hveragerdi
1ac177c  Sunday: 10 min at Umi Hotel to collect the medicine
033c500  Olis Selfossi pin from Ritchie's Google Maps link
9f4cbb8  Selfoss row reads 'Toilet stop.'
a8d3825  Sunday: lunch moves to Vik (60), Olis Selfoss WC (20), Grodurhusid dropped
bc3aa01  Drop the provenance badge and Google Maps link from the stop rows
3d4b194  Times move to one line along the bottom of each stop
4e01ba5  Monday and Tuesday: remove the flags and notes blocks
1c2ec5f  First stop of a day reads DEPART, not ARRIVE
647307b  Sunday: remove the flags and notes blocks
db89e7e  Day header shows depart and arrive
93df53c  Open on the projected clock, not the booked one
83f0603  Sunday: cut Klaustur and Hvolsvollur; arrival 17:10
2a5e5a0  Spell out ARRIVE / time there / DEPART on every stop row
21ec51f  Sunday: Hvolsvollur 15 -> 20 min
55037f3  Sunday: replace OSRM drive times with Google Maps
f671c25  Sunday: 20 min at Klaustur and 20 min at Vik
19c0330  Sunday: 09:00 departure with Freysnes, Klaustur, Hvolsvollur added
67a5755  Add baked-in translations with a language switcher; Spanish first
94bf0e1  Cancel a pending fly-to before starting another
9064b3d  Cap fly-to zoom at 14 and set maxNativeZoom
d11adc8  Lock the clock to booked times; rebalance stop times
670b503  (pre-session) Remove BSI positioning stops
```

## 8. To recover this exact state
```
git clone https://github.com/IphoneIceland/iceland-route-map.git
cd iceland-route-map
git checkout boswell-locked-2026-08-08
```
