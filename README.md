# McCombs Map

A walkable, third-person 3D model of the McCombs GSB 3rd floor, built from photos of the floor-plan directory and the hallways. It is a single HTML file using three.js from a CDN, so there is no build step.

## 4th floor (`floor4.html`)

Open `floor4.html` for the GSB 4th floor. It's built from `reference/4th-floor/` (the official plan plus hallway photos). What's modeled so far:

- **Escalator hallway:** two escalators down to the 3rd floor, the wood wall behind them, restrooms, elevators, and the hanging MPA and wayfinding signs.
- **MPA corridor:** the oak MPA Program Office portal (4.112CA), the 4.100A–H rooms with the Quiet/Lactation Room (4.100H), and the Recruiting Operations doors (4.128).
- **Balcony:** the bronze storefront with doors, plus the balcony outside it (pavers, parapet, benches, trees). You can look out but can't go outside.
- **Stair 2 lobby:** stair doors, lockers and the fire hose cabinet.
- **Ford Career Center (4.114):** the curved oak and glass front, with open doorways into a lobby you can walk around in.
- **Doors only for now:** NRG Productivity Center (4.112A), AIM Reading Room (4.112B), and the CBA passage toward the 4.3xx classrooms.

In the room finder you can type room numbers or names like `MPA`, `Ford`, `NRG`, `balcony` or `stair`. A 4.3xx classroom routes you to the CBA doors, since the CBA wing isn't built yet. Coordinates in `floor4.html` are pixels on `reference/4th-floor/gsb-fourth-floor-plan.png` at 0.07 m per pixel.

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
