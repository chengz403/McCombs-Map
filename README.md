# McCombs Map

A walkable, third-person 3D model of McCombs Levels 3 and 4, built from floor plans and hallway photos. Each floor has its own HTML file and loads Three.js from a CDN.

## 4th floor (`floor4.html`)

Open `floor4.html` for the GSB 4th floor. Its minimap and textures are built into the file. The model uses the official plan and hallway photos in `reference/4th-floor/`.

- **Escalator hallway:** two escalators down to the 3rd floor, the wood wall behind them, restrooms, elevators, and the hanging MPA and wayfinding signs.
- **MPA corridor:** the oak MPA Program Office portal (4.112CA), the 4.100A–H rooms with the Quiet/Lactation Room (4.100H), and the Recruiting Operations doors (4.128).
- **Balcony:** the bronze storefront with doors, plus the balcony outside it (pavers, parapet, benches, trees). You can look out but can't go outside.
- **Stair 2 lobby:** stair doors, lockers and the fire hose cabinet.
- **Ford Career Center (4.114).** Both glass entrances lead to the furnished lobby and interview corridors. Find rooms such as 4.114FG by number and look for sponsor plaques on the door sidelights.
- **GSB escalators:** two lanes side by side with a small gap, the second lane right against the wood wall. At the west end, by the elevators, you board the escalator down to the 3rd floor, and the one from the 5th floor lets you off. At the east end, the escalator from the 3rd floor lets you off right next to where you board the one up to the 5th. There are bulletin boards on the wood wall at both ends.
- **Elevator lobby.** Two recessed elevator doors share a dark metal surround. Face Stair 1 and turn left to follow the hall straight to the men's room (4.118). The closed custodial door (4.116) is on the hall's right wall.
- **NRG Productivity Center (4.112A).** The entrance opens onto window seating, patterned lounge chairs, communal tables, and computer workstations. Paired study booths flank the corridor for 4.112AM, AN, AO and AP, which ends at the print room. You can find the study rooms by room number or Greek name.
- **CBA passage (heading south from the escalators):** the wood-clad restroom block with Women 4.120, Electrical 4.122, 4.124 and the drinking fountain, the bulletin board, display cases and a bench.
- **Recruiting Operations (4.128) and 4.126:** two office suites off the CBA passage. Each has a bronze-and-glass entrance; the doors are shown closed, but you can walk through them. Inside are carpeted corridors with the 4.128A–J and 4.126A–K offices and benches.
- **GSB/CBA connector.** The hallway narrows along the four matching wood doors for 4.102, 4.106, 4.108 and 4.110. Across the hall are the angled wall with the John Edward Treleven memorial, the electrical entrance at 4.104 and the drinking fountains.
- **CBA north corridor:** the north service row includes Stair 8, Electrical 4.320, room 4.316 between the restrooms, Communications 4.312, Telephone Equipment 4.310, Vending 4.308, the Custodial pantry 4.306, the recessed elevator, and Stair 7 beside the fountain and Storage 4.302. On the south side are classroom 4.322 and Locker E, three round study tables along the atrium windows, and Locker D near classroom 4.304.
- **Atrium:** a deep brick court with a skylight. You can look down into it through the windows but can't walk in it.
- **CBA classroom loop:** the corridor runs all the way around the atrium.
  - West corridor: classrooms 4.324, 4.326, 4.330 and 4.332, the tiered classroom 4.328, a row of benches, and Stair 9 at the southwest corner.
  - South corridor: Storage 4.334, classrooms 4.336–4.346, triangular study desks beside the atrium windows, Locker F across from 4.338, Locker G beside 4.344, benches and a wall clock.
  - It joins the MPA Lounge hallway near 4.348 and Stair 10.
  - Stair 8 is at the west end of the north corridor.
- **CBA escalators:** the west landing has the down escalator to Level 3 and the arrival from Level 5. Follow the study-area corridor past the lockers to reach the east landing, where the escalator goes up to Level 5 and the run from Level 3 arrives.
- **CBA study area:** four six-seat tables with wall TVs, two cream locker banks between three orange pillars, and a view of the mezzanine stair through the Stair 4 glazing. The west escalator landing has a hammer display and floor directory, and the east landing has a recessed desk and chairs by the window.
- **MPA Lounge hallway:** frosted lounge windows and separate cherry-wood double doors for the MPA Lounge and Green Room. Five green benches line the hall near classrooms 4.350 and 4.348 and Stair 10.
- **AIM Reading Room (4.112B).** Its paneled entrance meets the east Ford storefront at the corner.

In the room finder you can type room numbers or names like `MPA`, `Ford`, `NRG`, `balcony` or `stair`. Coordinates in `floor4.html` are pixels on `reference/4th-floor/gsb-fourth-floor-plan.png` at 0.07 m per pixel. The minimap uses the original directory photo, aligned to that plan and extended to include the west end of NRG.

## Run it

Save the raw `floor4.html` from the `4th-floor` branch and open it in your browser to play Level 4. Open `index.html` if you want to play Level 3. Both pages need an internet connection to load Three.js.

[Download Level 4 HTML](https://raw.githubusercontent.com/chengz403/McCombs-Map/4th-floor/floor4.html)

You can also serve the repository folder with Python.

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
