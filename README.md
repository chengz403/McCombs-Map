# McCombs Map

A walkable, third-person 3D model of the McCombs GSB 3rd floor, built from photos of the floor-plan directory and the hallways. It is a single HTML file using three.js from a CDN, so there is no build step.

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

Traced from the official McCombs 3rd-floor maps for the GSB and CBA buildings, joined at their "CBA"/"GSB" connector arrows.

- **GSB escalator hallway:** classroom block (3.104/3.106 doors on its corners, teal Student Honor Code wall), GSB 3.128 recessed entry, escalators, elevators, stair 3.1S1, 3.102, 3.108, restrooms, 3.114, 3.116, and the open stair with windows at the west end.
- **Salem Center lobby:** Corporate & Foundation Relations (3.126), Salem Center for Policy (3.124) curved pixel-glass wall with the LED stock ticker, the Financial Education & Research Center (3.120) and the north entrance.
- **GSB ↔ CBA connectors:** both walkways lead into the CBA's south corridor: 3.306–3.330, CBA elevator, stairs and restrooms on one side; the Global Sustainability Leadership Institute (3.302), CBA Events Room (3.304), Atrium (3.400) and Lounge (3.328) on the other.

Not built yet: the classroom interiors, MS Student Lounge, the 3.140 offices, UT Document Solutions, the AV help desk and the rest of the CBA. Walls with signs mark where those areas begin.

## Features

- **Find a room:** type a room number (`3.128`, `3.124`, `3.120`, `3.304`, ...) or a name (`atrium`, `restroom`, `elevator`, `exit`). You get arrows projected on the floor, a beacon at the door, turn-by-turn steps and the route on the minimap. Routes go around walls and pick the shorter connector.
- **Start at an entrance:** teleport to the GSB north entrance, the escalator hallway, or the CBA south corridor.

## Extending the map

New geometry is written in **official-map pixels**. These are the pixel coordinates of the GSB 3rd-floor map screenshot from the McCombs maps page. The CBA map is rotated 180° and scaled 0.78× onto the same grid, so a CBA map point `(cx, cy)` lands at `(393 + (1600 − cx)·0.78, 1077 + (1210 − cy)·0.78)`.

- `OB(x1,y1,x2,y2, y0,y1, material, {mm:color})`: a solid block (wall/room) that you collide with and that shows on the minimap.
- `OSeg(x1,y1,x2,y2, material)`: an angled wall.
- `DOORS`: doors and room signs. `ROOM_DB`: rooms the finder knows. `ENTRANCES`: teleport spots. `NODES`: walkable waypoints for routing.
- `OX`/`OY` convert official-map pixels into the game's internal grid (0.05 m per unit, about 0.097 m per official pixel).

The ticker prices are simulated, not live quotes.
