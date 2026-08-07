# Iceland — 7-day south & west route map

Static Leaflet map of a seven-day guided coach route around south and west Iceland,
6–13 August 2026: South Shore, Vestmannaeyjar, the glacier lagoons, the Golden Circle
and Reykjanes.

No build step, no dependencies to install.

## Files
- `index.html` — the whole app, Leaflet from CDN
- `routes-data.js` — coordinates, road geometry, per-leg distances and durations

## Run locally
    python3 -m http.server 8000

## Use
Opens with nothing plotted. Tap a day to plot it; tap more days to overlay them. The map
frames exactly what is selected. `Clock: booked times` toggles to a projected clock that
adds assumed time on the ground.

## Coordinate provenance
Every stop is tagged in the UI with where its coordinate came from:

| Tag | Meaning |
|---|---|
| **FIELD PIN** | Verified on the ground and pinned manually |
| **GOOGLE MAPS** | Named Google Maps place, coordinates read from the place URL |
| **OPENSTREETMAP** | Named OpenStreetMap feature |
| **NOT VERIFIED** | No confirmed coordinate — do not rely on it |

One stop is currently **NOT VERIFIED**: Diamond Beach. The Greenhouse Hotel food hall and the
Fagradalsfjall road head were confirmed from Google Maps place URLs on 5 Aug 2026.

## What is exact and what is not
- **Booked times** are exact, taken from the operator itinerary and the issued ferry ticket.
- **Drive times** are OSRM car-profile estimates on OpenStreetMap data. They are not coach
  times and they exclude time spent at stops.
- **The projected clock** adds assumed stop durations. Those are assumptions, not the
  operator's figures.

Walking spurs are drawn dashed where the road does not reach the stop — Kaplagjóta is
379 m from the nearest road, Halldórsskora (Elephant Rock) 641 m, and the Eldfell summit
point 357 m.

## Notes worth keeping
- There is no *Herjólfsstaðir* on Heimaey. That name belongs to farms in Álftaver and
  Skagafjörður. On the island it is **Herjólfsdalur**, with the reconstructed farm mapped
  in OpenStreetMap as *Herjólfstown* / Herjólfsbær.
- **Kaplagjóta** appears in neither OpenStreetMap nor Google Maps. Source for the history
  is [Heimaslóð](https://heimaslod.is/index.php/Kaplagj%C3%B3ta).
- Elephant Rock is listed in Google Maps twice, once as **Halldórsskora (Elephant Rock)**.

## Attribution
Basemap © OpenStreetMap contributors, © CARTO. Routing by [OSRM](https://project-osrm.org/).
Geocoding via OSM Nominatim and Overpass.

## Licence
Code MIT. Map data © OpenStreetMap contributors, ODbL.
