// This code is inlined in the floor pages by sync-wayfinding.py so each HTML file can run on its own.
function addRoomSuggestions(input, list, options, normalize, choose) {
  let matches = [], active = -1;
  function close() {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    active = -1;
  }
  function update() {
    close();
    const query = normalize(input.value);
    const prefix = /^\d[\dx]{3}$/.test(query) ? query.replace(/x+$/, '') : query;
    matches = !query || /^\d$/.test(query) ? [] : options.filter(option =>
      option.id.startsWith(prefix) || option.aliases.some(alias => alias.startsWith(query)));
    list.replaceChildren(...matches.map(({id, label}) => {
      const option = document.createElement('div');
      option.id = `${list.id}-${id}`;
      option.dataset.room = id;
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', 'false');
      option.textContent = label;
      return option;
    }));
    if (!matches.length) return false;
    list.hidden = false;
    list.scrollTop = 0;
    input.setAttribute('aria-expanded', 'true');
    return true;
  }
  function select(id) {
    close();
    choose(id);
  }
  input.addEventListener('focus', update);
  input.addEventListener('input', update);
  input.addEventListener('blur', close);
  list.addEventListener('mousedown', event => {
    if (event.target.closest('[data-room]')) event.preventDefault();
  });
  list.addEventListener('click', event => {
    const option = event.target.closest('[data-room]');
    if (option) select(option.dataset.room);
  });
  input.addEventListener('keydown', event => {
    if (event.isComposing) return;
    if (event.key === 'Escape' && !list.hidden) {
      event.preventDefault();
      close();
    } else if (event.key === 'Enter' && active >= 0) {
      event.preventDefault();
      select(matches[active].id);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (list.hidden && !update()) return;
      event.preventDefault();
      const step = event.key === 'ArrowDown' ? 1 : -1;
      if (active < 0) active = step > 0 ? 0 : matches.length - 1;
      else {
        list.children[active].setAttribute('aria-selected', 'false');
        active = (active + step + matches.length) % matches.length;
      }
      const option = list.children[active];
      option.setAttribute('aria-selected', 'true');
      input.setAttribute('aria-activedescendant', option.id);
      option.scrollIntoView({block: 'nearest'});
    }
  });
  return {update};
}

function createRouteGuide(findPath, canWalk) {
  let legs = [], markers = [], current = 0, length = 0, lastPlan = -Infinity;
  const pointAt = (leg, meters) => [leg.from[0] + leg.x * meters, leg.from[1] + leg.z * meters];
  function project(position, leg) {
    const x = position[0] - leg.from[0], z = position[1] - leg.from[1];
    const along = Math.max(0, Math.min(leg.length, x * leg.x + z * leg.z));
    return {along, distance: Math.hypot(x - leg.x * along, z - leg.z * along)};
  }
  function plan(position, goal, time) {
    const path = findPath(position, goal);
    legs = [];
    markers = [];
    current = 0;
    length = 0;
    lastPlan = time;
    for (let i = 1; i < path.length; i++) {
      const from = path[i - 1], to = path[i];
      const dx = to[0] - from[0], dz = to[1] - from[1], distance = Math.hypot(dx, dz);
      if (distance < .001) continue;
      const leg = {from, to, x: dx / distance, z: dz / distance, length: distance, offset: length};
      legs.push(leg);
      for (let s = .48; s < distance - .25; s += .95) {
        markers.push({point: pointAt(leg, s), angle: Math.atan2(-dz, dx), at: length + s});
      }
      length += distance;
    }
  }
  function update(position, goal, time) {
    if (!legs.length && time - lastPlan >= .45) plan(position, goal, time);
    if (!legs.length) return null;
    let leg = legs[current], here = project(position, leg);
    while (current < legs.length - 1 && leg.length - here.along < .95) {
      const next = legs[current + 1], there = project(position, next);
      const pastTurn = there.along > .35 && there.distance < here.distance;
      if (!pastTurn && here.distance > .8) break;
      const preview = pointAt(next, Math.min(next.length, there.along + 1));
      if (!canWalk(position, preview)) break;
      current++;
      leg = next;
      here = there;
    }
    // Keep the same corridor through small changes in position, even near a turn.
    if (time - lastPlan >= .45 && (here.distance > 1.45 ||
        (here.distance > .55 && !canWalk(position, pointAt(leg, here.along))))) {
      plan(position, goal, time);
      if (!legs.length) return null;
      leg = legs[0];
      here = project(position, leg);
    }
    const progress = leg.offset + here.along;
    return {
      path: [pointAt(leg, here.along), ...legs.slice(current).map(item => item.to)],
      aim: pointAt(leg, Math.min(leg.length, here.along + 2.6)),
      distance: length - progress,
      markers: markers.filter(marker => marker.at > progress + .5),
    };
  }
  return {update, reset() { legs = []; lastPlan = -Infinity; }};
}

function routeHeading(angle, previous) {
  const magnitude = Math.abs(angle);
  if (magnitude > 2.6 || (previous === 2 && magnitude > 2.25)) return 2;
  if (magnitude < (previous === 0 || previous === null ? .58 : .37)) return 0;
  return Math.sign(angle);
}
