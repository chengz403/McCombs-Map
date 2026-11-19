# McCombs Map

A walkable, third-person 3D model of the McCombs GSB 3rd floor, built from photos of the floor-plan directory and the hallways. It is a single HTML file using three.js from a CDN, so there is no build step.

## 4th floor (`floor4.html`)

Open `floor4.html` for the GSB 4th floor. It's built from `reference/4th-floor/` (the official plan plus hallway photos). What's modeled so far:

- **Escalator hallway:** two escalators down to the 3rd floor, the wood wall behind them, restrooms, elevators, and the hanging MPA and wayfinding signs.
- **MPA corridor:** the oak MPA Program Office portal (4.112CA), the 4.100A–H rooms with the Quiet/Lactation Room (4.100H), and the Recruiting Operations doors (4.128).
- **Balcony:** the bronze storefront with doors, plus the balcony outside it (pavers, parapet, benches, trees). You can look out but can't go outside.
- **Stair 2 lobby:** stair doors, lockers and the fire hose cabinet.
- **Ford Career Center (4.114):** the curved oak and glass front, with open doorways into a lobby you can walk around in.
- **GSB escalators:** all three board at the west end, by the elevators, and run east toward the MPA office. The two down escalators are on the AIM Reading Room side. The one up to the 5th floor runs along the wood wall and rises through the ceiling to a small slice of Level 5.
- **Elevator lobby:** dark brown elevator surrounds and the three-part wayfinding sign. Beside the elevators, a short hall holds Stair 1 and its fire hose cabinet, Custodial 4.116, and the men's room (4.118, with an automatic door) at the end.
- **NRG and Ford entrances:** the NRG Productivity Center's cherry portal with a glass door and the small nrg plaque. Next to it are the Ford Career Center's glass double doors, which stand open so you can walk in.
- **CBA passage (heading south from the escalators):** the wood-clad restroom block with Women 4.120, Electrical 4.122, 4.124 and the drinking fountain, the bulletin board, display cases and a bench.
- **Recruiting Operations (4.128):** the glass entrance with the QR poster. You can walk in: there's a carpeted corridor with the 4.128 offices, benches and a window at the end.
- **GSB/CBA connector:** runs straight south from the GSB elevator lobby, with its west wall in line with the CBA women's restroom wall, past 4.102, 4.104 and 4.106, through a cherry frame into the CBA. It has the hanging sign pointing to AIM, MPA, Ford and Recruiting, plus Comm Chase 4.312 and the drinking fountains.
- **CBA north corridor:** the north side is the service row, from a stair, Electrical 4.320, the men's and women's rooms, Tele Equip 4.310, Vending 4.308 (you can walk in), Janitor 4.306, the CBA elevator and another stair. The south side has classroom 4.322 and Locker E, then the atrium windows between orange piers with round study tables, then 4.304 and Storage 4.302.
- **Atrium:** a deep brick court with a skylight. You can look down into it through the windows but can't walk in it.
- **CBA classroom loop:** the corridor runs all the way around the atrium.
  - West corridor: classrooms 4.324, 4.326, 4.330 and 4.332, the tiered classroom 4.328, a row of benches, and the exit stair at the south-west corner.
  - South corridor: Storage 4.334, classrooms 4.336–4.346, narrow atrium windows, lockers, study tables, benches and a wall clock.
  - It joins the MPA Lounge hallway, where you'll find 4.348 and Stair 7.
  - Stair 8 is at the west end of the north corridor.
- **CBA escalators:** one down to the 3rd floor under a black-clad bulkhead, and one up to the Mezzanine along the gray wall.
- **CBA study area:** bar tables with wall monitors, cream lockers with orange columns, and a glass wall at the end. Behind the glass is the Mezzanine stair, which you can see but can't climb. The Mezzanine isn't walkable and isn't in the room finder.
- **MPA Lounge hallway:** the cherry-wood MPA Lounge doors with gold lettering, the Green Room, classrooms 4.304, 4.344 and 4.350, the TA Room, the bench row, a drinking fountain, and Stair 7 at the south end.
- **Doors only for now:** NRG Productivity Center (4.112A) and AIM Reading Room (4.112B).

In the room finder you can type room numbers or names like `MPA`, `Ford`, `NRG`, `balcony` or `stair`. A 4.3xx classroom routes you to the CBA doors, since the CBA wing isn't built yet. Coordinates in `floor4.html` are pixels on `reference/4th-floor/gsb-fourth-floor-plan.png` at 0.07 m per pixel. The minimap is `reference/4th-floor/minimap.jpg`: the directory photo from the building, warped onto those same plan pixels (within about 0.2 m), so it also covers the CBA wing.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Controls

| Action | Desktop | Touch |
| --- | --- | --- |
| Move | WASD or arrow keys | Left joystick |
| Look | Drag | Drag |
| Jump | Space | Jump button |
| Run | Shift | Push the joystick to the edge |
| Zoom | Scroll | — |

## What's modeled so far

- **Escalator hallway:** wood wall with bulletin board, escalators down, GSB 3.128 recessed entry with double doors, teal Student Honor Code wall, benches, hanging wayfinding sign, windows at the far end.
- **Salem Center lobby (3.118):** curved pixel-film glass wall with a scrolling LED stock ticker, Corporate & Foundation Relations (3.126) door, wall clock showing the real time, column and the north entrance doors.

## Features

- **Find a room:** type `3.128`, `3.118`, `3.126` or `exit` to get arrows projected on the floor, a beacon at the destination, live turn-by-turn steps and the route on the minimap.
- **Start at an entrance:** teleport to the north entrance or the escalator hallway.

## Extending the map

Coordinates in `index.html` use the pixel grid of the floor-plan directory photo: `X(px)` and `Z(px)` convert to meters at 0.05 m per pixel.

- **Rooms for the finder:** add an entry to `ROOM_DB` with a `dest` point in front of the door.
- **Entrances:** add an entry to `ENTRANCES` with a spawn `pos` and a `look` target.
- **Routing:** if new walls block a route, add walkable waypoints to `NODES`.

The ticker prices are simulated, not live quotes.
