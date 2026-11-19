# McCombs Map: CBA 6th Floor

A walkable, third-person 3D model of the CBA 6th floor and the Sixth Floor Walkway to CBA North. The layout is traced from the two floor plans; colors, materials and props come from photos of the hallways. It is a single HTML file using three.js from a CDN, so there is no build step.

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

## What's modeled

- **Every room on the floor plan:** about 110 rooms, each with a door and a room plaque on the side that faces the hallway.
- **North wing (6.3xx and 6.48x–6.49x):** cream walls with a black base, glossy speckled tile, oak doors in black frames, a dead-end hallway with an EXIT sign, trash and recycling bins.
- **6.432 / 6.426 suite:** grey fabric-panel walls and carpet, a frameless glass entry with one leaf swung open, and waiting chairs (black, teal fabric, orange leather).
- **Atrium:** open from the ground floor up to a skylight, with a glass railing along the west corridor.
- **West corridor:** elevator, stairs, restrooms and 6.404–6.418.
- **Sixth Floor Walkway:** dark speckled terrazzo, terracotta columns, a solid half-wall with a black rail around the two escalators down to level 5, green club chairs, tan doors for offices 6.202–6.220, and the glass doors into the Finance Office with the clock and STAIR 4 sign beside them (from the walkway video). Start at "Walkway · toward the Finance Office" to match the video's view.
- **Top of the escalator (the default start):** a glass-walled waiting room with chairs on the left, a wood bench and hanging sign on the right, an A-frame sign, and the opening into CBA under the "Rosenbaum Center for Behavioral Business Studies" lettering, with the yellow 6.499 door at the end of the hall.

On the plan, north is to the left. The minimap follows you and keeps the plan's orientation.

## Features

- **Find a room:** type any room number (`6.492`, `6.432K`, `6.202`) or `elevator`, `restroom`, `stairs`, `walkway`, `atrium`, `lab`, `schwab`. You get arrows on the floor, a beacon at the door, turn-by-turn steps and the route on the minimap. Routing uses A* on a walkable grid, so new rooms are routed around automatically.
- **Start at an entrance:** teleport to the atrium, elevator, the north hallway, the suite doors or either end of the walkway.

## Extending the map

Coordinates in `index.html` use the pixel grid of the 6th floor plan (1542×956), at 0.045 m per pixel. The walkway plan has its own grid; `wu()` and `wv()` convert it.

- **Rooms:** add `[label, x1, y1, x2, y2, door]` to `ROOMS`. `door` is the side facing the hallway (`n`, `s`, `e`, `w`) plus an optional position along that side, e.g. `'e.3'`. The room finder, minimap and routing pick it up.
- **Full names:** add the room to `NAMES` to show a full name in the finder.
- **Entrances:** add an entry to `ENTRANCES` with a spawn `pos` and a `look` target.
- **Suite look:** anything inside the `SUITE` rectangle gets the grey panel walls and carpet.

Rooms are drawn from the floor plan. Interior details (furniture, signs) are only modeled where there are photos.
