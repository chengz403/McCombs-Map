# McCombs Map

A walkable, third-person 3D map of the McCombs School of Business, built from floor plans and reference photos. It covers parts of GSB Level 3 and GSB/CBA Level 5. Level 5 is a work in progress.

## Run it

From the repository folder, start a static web server. The maps use Three.js from a CDN and require no build step.

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) for Level 3, then use the floor selector to switch to Level 5. You can also open [Level 3](index.html) or [Level 5](floor5.html) directly on the hosted site.

Keep `fifth-floor-map-corrected.svg` and `peggy-lounge-textures.jpg` beside `floor5.html` when serving the fifth-floor map.

## Controls

| Action | Desktop | Touch |
| --- | --- | --- |
| Move | WASD or arrow keys | Left joystick |
| Look | Drag | Drag |
| Jump | Space | Jump button |
| Run | Shift | Push the joystick to the edge |
| Zoom | Scroll | — |

## Explore the maps

### Level 3

- The main escalator hallway includes GSB 3.128, the Student Honor Code wall, and the bulletin board.
- The Salem Center lobby (3.118) includes the curved glass wall and a simulated stock ticker, near Corporate & Foundation Relations (3.126) and the north entrance.

### Level 5

- Explore the main escalators, GSB classrooms and office corridors, the Finance Centers hallway, and the print station near 5.142.
- The Peggy Drake Holland Student Lounge (5.130), the CBA atrium and classroom corridor, and the Ph.D. Lounge (5.336A) are modeled from reference photos.
- The CBA 5.322 study lounge has recessed windows with venetian blinds, two study islands, and a window counter. The adjacent classroom corridor has overhead concrete portals and glass classroom doors.

Use **Find a room** for floor arrows, turn instructions, and a route on the minimap. Try `3.128` or `exit` on Level 3, and `5.142`, `printer`, `peggy`, `5.322 lounge`, or `5.336A` on Level 5. Use the **Start at** menu to teleport to a listed location. On Level 5, click the minimap to enlarge the floor plan.

## Extending the map

Each map defines its own plan-to-world transforms in `X` and `Z`. The Level 5 minimap uses `MAP_ANCHORS` and `MAP_TRIANGLES` to align the plan to the 3D model.

- Add finder destinations to `ROOM_DB` with a walkable `dest` and a `beacon` location.
- Add teleport locations to `ENTRANCES` with a `pos` and `look` target.
- When changing geometry, check its collision boundaries and retest routes through the affected area.
