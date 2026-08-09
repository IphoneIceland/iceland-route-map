# Iceland — 7-day south & west route map

Static Leaflet map of a seven-day guided coach route around south and west Iceland,
6–13 August 2026: South Shore, Vestmannaeyjar, the glacier lagoons, the Golden Circle
and Reykjanes.

No build step, no dependencies to install.

## Files
- `index.html` — the whole app: styles, the day data (`DAYS`, `DWELL`, `SCHED`, `SCHED_END`) and the schedule engine
- `routes-data.js` — points, drawn route geometry, per-leg distances and durations, walking spurs
- `i18n.js` — baked-in translations. Spanish so far
- `HANDOVER.md` — full state of the project, why each decision was made, and what is still open

## Run locally
    python3 -m http.server 8000

## Use
Tap a day to plot it; tap more days to overlay them. The map frames exactly what is
selected. Tap any stop row and the map flies to that pin and opens it.

Opens on the **projected clock** — every arrival computed from the previous departure.
The button toggles to **booked times**, which shows only what the operator actually stated.

Each stop row reads: name, one-line description, then one strip —
**ARRIVE · time there · DEPART · drive to the next stop.**

Basemap switcher, top right: Satellite (Esri, default), Terrain, Dark.

## How the clock works
- **Every computed arrival rounds UP to the next 5 minutes.** That rounding is the traffic
  allowance — it buys 1–4 minutes a leg, always in the safe direction.
- **Booked times are hard anchors.** The clock snaps to them and never drifts past. If the
  stops before one don't fit, the app reports how much time to claw back *before* that stop
  rather than quietly arriving late.
- **The first stop of a day reads DEPART**, not ARRIVE — except 6 Aug, where the flight lands
  at KEF and the coach sits 75 minutes, so both are shown.

## Coordinate provenance
Every stop is tagged on its map pin with where its coordinate came from:

| Tag | Meaning |
|---|---|
| **YOUR PIN** | Ritchie's own dropped Google Maps pin |
| **GOOGLE MAPS** | Named Google Maps place, coordinates read from the place URL |
| **OPENSTREETMAP** | Named OpenStreetMap feature |
| **NOT VERIFIED** | No confirmed coordinate — do not rely on it |

One stop is currently **NOT VERIFIED**: Diamond Beach. The link supplied for it resolves to
the Jökulsárlón boat operator, not the car park.

## What is exact and what is not
- **Booked times** are exact, from the operator itinerary and the issued ferry ticket.
- **Drive times on 9 and 10 August are Google Maps**, checked leg by leg on 8 August.
- **Drive times on the other five days are OSRM** car-profile estimates. Where OSRM was
  checked against Google it ran about **10% slow on every leg**. Those days have not been
  rechecked. They are not coach times either.
- **Time at each stop** is a planning assumption, not the operator's figure.

Walking spurs are drawn dashed where the road does not reach the stop — Kaplagjóta is
379 m from the nearest road, Halldórsskora (Elephant Rock) 641 m, and the Eldfell summit
point 357 m.

## Translations
`i18n.js`. English is the source and has no table: any missing key falls back to the English
string, so a half-finished language degrades to English rather than to blank.

Never translated — **times, distances, coordinates, prices, and every Icelandic place name.**
Seljalandsfoss is Seljalandsfoss in every language. Operational flags and notes stay in
English; they are the guide's working out, not guest-facing copy.

## Notes worth keeping
- There is no *Herjólfsstaðir* on Heimaey. That name belongs to farms in Álftaver and
  Skagafjörður. On the island it is **Herjólfsdalur**, with the reconstructed farm mapped
  in OpenStreetMap as *Herjólfstown* / Herjólfsbær.
- **Kaplagjóta** appears in neither OpenStreetMap nor Google Maps. Source for the history
  is [Heimaslóð](https://heimaslod.is/index.php/Kaplagj%C3%B3ta) — a community wiki, so thin
  for anything said on the microphone.
- Elephant Rock is listed in Google Maps twice, once as **Halldórsskora (Elephant Rock)**.
- The drawn route line does **not** update itself when the stop list changes. Regenerate it
  from OSRM and remember the coordinates come back `[lon,lat]` but Leaflet wants `[lat,lon]`.

## Attribution
Imagery © Esri, Maxar, Earthstar Geographics. Basemap alternatives © OpenStreetMap
contributors, © CARTO, © OpenTopoMap. Routing by [OSRM](https://project-osrm.org/).
Geocoding via OSM Nominatim and Overpass.

## Licence
Code MIT. Map data © OpenStreetMap contributors, ODbL.
