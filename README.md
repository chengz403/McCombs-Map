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
| Walk forward / back | W / S or ↑ / ↓ | Push the joystick up / down |
| Turn left / right (the view turns with you) | A / D or ← / → | Push the joystick left / right |
| Step aside | Q / E | — |
| Look | Drag | Drag |
| Jump | Space | Jump button |
| Run | Shift | Push the joystick to the edge |
| Zoom | Scroll | — |

## What's modeled

- **Every room on the floor plan:** about 110 rooms, each with a door and a room plaque on the side that faces the hallway.
- **North wing (6.3xx and 6.48x–6.49x):** cream walls with a black base, oak doors in black frames, a dead-end hallway with an EXIT sign, trash and recycling bins.
- **Herb Kelleher Center for Entrepreneurship, Growth and Renewal (6.426 / 6.432 suite, from the video):** grey fabric-panel walls and carpet inside, entered through an oak-framed glass door with a dark transom. Opposite the door: the center's name in raised letters over two black display cases. At the end of that hall, the Republic Capital Group Wealth Management Conference Room (6.420) has a double door with one leaf open, lettering and an EXIT sign above, and a teal bench and round white bin beside it. The south corridor and this hall have white tile with pairs of grey squares down the middle, and blue and terracotta recycling bins; the long west corridor has round blue bins and double oak fire doors at the stairs. Start at "Herb Kelleher Center · entrance" or "South corridor · toward Herb Kelleher".
- **Suite behind the glass doors at the CBA end of the walkway (photo):** frameless glass double doors with bronze rails, PULL handles and a brass threshold, the right leaf swung open; a waiting area with black, light-blue and orange chairs against a grey partition; and a long carpeted hall on the left with offices on both sides, wastebaskets and an EXIT sign at the far end. Start at "Walkway · glass doors to the suite".
- **Atrium (from a photo of the McCombs atrium):** red brick walls with rows of white-framed windows and stone bands at each floor, a glass skylight on a steel frame, and a ground-floor café with glass shopfronts, a café counter, orange and blue McCombs banners, globe lamps, and wood tables with black bistro chairs. Look over the glass railing on the west corridor, or pick "Atrium · ground floor café" to walk around the tables.
- **West corridor:** elevator, stairs, restrooms and 6.404–6.418.
- **Sixth Floor Walkway:** dark speckled terrazzo, terracotta columns, a solid half-wall with a black rail around the two escalators down to level 5, green club chairs, tan doors for offices 6.202–6.220, and the glass doors into the Finance Office with the clock and STAIR 4 sign beside them (from the walkway video). Start at "Walkway · toward the Finance Office" to match the video's view.
- **Floor:** dark, glossy brown terrazzo on the walkway; white speckled tile on the main floor. It stops at the Rosenbaum Center opening: inside, the halls up to the yellow 6.499 door and around 6.494–6.498 have cream tile with scattered brown and tan squares, and the office halls (6.489–6.492 and the north hallway) have plain white tile. Carpet stays in the 6.432 / 6.426 suite and the waiting room.
- **Rosenbaum Center entry (from the walk-through video):** a long cork bulletin board on the right, yellow doors (6.499, and 6.494 and 6.498 with a narrow window), a whiteboard easel and a sign stand by the opening, and someone waiting on the bench.
- **Rosenbaum office halls (from the second walk-through video):** bright white walls, plain white glossy tile through the whole north wing, oak doors in black frames with room plaques, small black wastebaskets beside the doors, and a grey and blue recycling pair at the end of the 6.304 hall.
- **Camera:** in tight halls where there's no room behind you, the view switches to first person.
- **Bench hall (photos of the top of the escalator):** the escalator corridor opens to the right at the Rosenbaum Center opening into a long hall with teal-and-wood benches on both sides, a grey and blue round bin pair, a wall TV and a "Quiet Please · Office Area" plaque, a water fountain, and double oak doors with an EXIT sign at the end. Hanging signs point to the Republic Capital Group Wealth Management Conference Room, and the bench by the opening has someone waiting on it. Start at "Walkway · bench hall".
- **People on the floor:** six people walk to real office doors along the halls, keep to the middle and to the right, slow down and step aside for you and each other, slide along walls instead of pushing into them, pause at a door, then pick a new one. They glance at you as you pass, and you can't walk through them.
- **Turning corners:** turning swings the view with you, like turning your head. Walking into the end of a hall that only continues one way turns you that way on its own; at a T-junction you choose.
- **No diagonal shortcuts:** people and the route arrows walk straight down the halls and turn square at corners, the way people walk in a building.
- **Top of the escalator (the default start):** a deep corridor under the hanging sign for the Rosenbaum Center for Behavioral Business Studies and the Republic Capital Group Wealth Management Conference Room (6.420), with the glass-fronted suite on the left, a wood bench and hanging sign on the right, an A-frame sign, and the opening into CBA under the "Rosenbaum Center for Behavioral Business Studies" lettering, with the yellow 6.499 door at the end of the hall.

On the plan, north is to the left. The minimap follows you and keeps the plan's orientation.

## Features

- **Find a room:** type any room number (`6.492`, `6.432K`, `6.202`) or `elevator`, `restroom`, `stairs`, `walkway`, `atrium`, `lab`, `republic`, `kelleher`. You get arrows on the floor, a beacon at the door, turn-by-turn steps and the route on the minimap. Routing uses A* on a walkable grid that moves only along the hall axes and penalizes turns, so new rooms are routed around automatically.
- **Start at an entrance:** teleport to the atrium, elevator, the north hallway, the suite doors or either end of the walkway.

## Extending the map

Coordinates in `index.html` use the pixel grid of the 6th floor plan (1542×956), at 0.045 m per pixel. The walkway plan has its own grid; `wu()` and `wv()` convert it.

- **Rooms:** add `[label, x1, y1, x2, y2, door]` to `ROOMS`. `door` is the side facing the hallway (`n`, `s`, `e`, `w`) plus an optional position along that side, e.g. `'e.3'`. The room finder, minimap and routing pick it up.
- **Full names:** add the room to `NAMES` to show a full name in the finder.
- **Entrances:** add an entry to `ENTRANCES` with a spawn `pos` and a `look` target.
- **Suite look:** anything inside the `SUITE` rectangle gets the grey panel walls and carpet.

Rooms are drawn from the floor plan. Interior details (furniture, signs) are only modeled where there are photos.
