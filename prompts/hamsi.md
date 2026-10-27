# Arena round 6, game 3: Hamsi (Black Sea fishing boat) — built by Claude Sonnet 5.5

```text
Build a single-file browser game (one index.html with inline CSS and JS) using Three.js r170 loaded as an ES
module from https://cdn.jsdelivr.net/npm/three@0.170.0/ (import map; addons from examples/jsm/).
A 3D fishing and boat-management game called "Hamsi" set on the Black Sea coast. Do not ask questions, build it
end to end.

WORLD: a green, steep Black Sea coast with tea terraces, wooden houses with red roofs, a small harbour with a
breakwater, a lighthouse and a fish market, misty mornings, grey-blue rolling waves (a vertex-displaced ocean
with a few summed waves, foam on crests), seagulls following the boat. The player's boat is a traditional wooden
fishing boat (blue and white hull, wheelhouse, net drum). One accent colour (#1E88E5 boat blue).

CORE MECHANIC:
- Sail out from the harbour with real-feeling boat handling: throttle, rudder, waves pitch and roll the boat,
  wind drift.
- Use the sonar / fish finder (a HUD panel) to find schools of fish: hamsi (anchovy), istavrit, palamut, lüfer,
  each with its own depth, season and price. Schools move as boids under the water and are visible on the sonar.
- Set the purse-seine net in a circle around the school (drive the boat in a loop while the net pays out),
  then close and haul it. A good circle catches more; schools can escape through the gap.
- Weather changes: fog, rising wind, a storm warning. Run back to harbour before the storm or risk damage.
- Fuel, hold capacity and ice: fish lose freshness over time.
- Sell at the fish market, where prices change with supply. Upgrade the boat: a bigger net, a better sonar,
  engine, hold, ice box, a crew member who hauls faster.

CONTENT: a season of 30 days from autumn to winter, with daily goals and a final goal (pay off the boat loan
and become "reis" of the harbour). The bot must be able to finish the season.

INTERACTION: W/S throttle, A/D rudder, Space set or haul the net, M map, camera orbit with drag; touch: throttle
slider, rudder wheel and buttons.

HUD: top bar (logo, day, time, money, loan, pause, sound, language), sonar panel, fuel / hold / freshness
gauges, weather card, toasts, title, harbour screen (market and upgrades), day summary, season ending.

EXTRAS: engine chug, gulls, waves, creak, market chatter blips, a kemençe-style horon tune loop, all
synthesised (CC0 one-shots from asset-forge allowed).
```

The shared rules in `_sablonlar/arena-round6-common.md` are appended to this prompt.
