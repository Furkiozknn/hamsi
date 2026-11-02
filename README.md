<p align="center">
  <a href="https://furkiozknn.github.io/hamsi/"><img src="docs/banner.svg" width="100%" alt="Hamsi: a Black Sea fishing and boat-management game. A blue-and-white fishing boat closes a ring of net corks around a school of fish below green tea-terraced mountains. Click to play in your browser."></a>
</p>

<p align="center">
  <a href="https://furkiozknn.github.io/hamsi/"><img src="https://img.shields.io/badge/%E2%96%B6_Play_now-in_your_browser-1E88E5?style=for-the-badge&labelColor=0A1E2C" alt="Play now in your browser"></a>
  <img src="https://img.shields.io/badge/Three.js-r170-64B5F6?style=for-the-badge&logo=threedotjs&logoColor=white&labelColor=0A1E2C" alt="Three.js r170">
  <img src="https://img.shields.io/badge/built_by-Claude_Sonnet_5.5-FFD25A?style=for-the-badge&logo=claude&logoColor=white&labelColor=0A1E2C" alt="Built by Claude Sonnet 5.5">
  <a href="LICENSE"><img src="https://img.shields.io/badge/licence-MIT-7FE3A0?style=for-the-badge&labelColor=0A1E2C" alt="MIT licence"></a>
  <img src="https://img.shields.io/badge/no_install-desktop_%C2%B7_phone-F2F7FB?style=for-the-badge&labelColor=0A1E2C" alt="No install, desktop and phone">
</p>

<p align="center"><b>A 3D fishing and boat-management game on the Black Sea coast: find the schools on the sonar, circle a purse-seine net around them, race home before the storm, sell the catch fresh and pay off the boat loan in a 30-day season to become reis of the harbour.</b></p>

<p align="center">
  <img src="docs/gameplay.gif" width="640" alt="Hamsi gameplay: the bot's boat closes the ring of net corks around a school of anchovy and horse mackerel, then starts hauling">
</p>

<p align="center"><b>Play online: <a href="https://furkiozknn.github.io/hamsi/">https://furkiozknn.github.io/hamsi/</a></b> (desktop and phone, no install)</p>

<!-- portals:start -->
<p align="center">Also on: <a href="https://furkiozknn.itch.io/hamsi">itch.io</a></p>
<!-- portals:end -->

## Highlights

- **A boat that handles like a boat.** The engine builds speed slowly, the rudder only bites when you are moving,
  waves pitch and roll the hull and the wind pushes you sideways.
- **Sonar and real schools.** The schools are boids under the water. The sonar shows them as moving dots with species
  and depth, the fish finder strip shows what is under the keel and how deep your net reaches; gulls circle over rich
  schools and shallow ones splash at the surface.
- **Purse-seine fishing.** Drive a circle around a school while the net pays out, then haul. A tight circle catches
  most of the school; a gap lets fish slip out, and fish deeper than the net escape under it. Hamsi and istavrit are
  slow and calm, palamut and lüfer fast, nervous and worth much more.
- **Weather and a market.** Misty mornings, forecast storms that damage the hull outside the harbour, a coast guard
  tow at 18:00. Prices follow the season and fall as you sell; fresh fish pays more. Buy fuel, ice, repairs and
  upgrades for the net, sonar, engine, hold, ice box and crew.
- **Played by a bot.** `?auto` plays the whole 30-day season with the same controls and rules as a player, using only
  sonar data. Measured: **season finished as reis, loan paid**, 60 fps, 18-56 draw calls.
- **One file, made in code.** One `index.html` with Three.js r170 from a CDN: a wave-displaced ocean, a coast with tea
  terraces and a harbour, a boat lofted in code, and engine, waves, gulls and a kemençe-style horon tune in 7/8
  synthesised with Web Audio.

## How to play

> [!TIP]
> Set the net (`Space`) just ahead of a school and steer a tight circle around it, so the ring closes near where you
> started. Then haul (`Space` again) and head home if the forecast says storm.

1. **Sail out.** Buy fuel and ice in the harbour if needed, then press *Sail out*.
2. **Find a school** on the sonar; the dashed yellow line on the fish finder is how deep your net reaches.
3. **Set the net** near the school, drive a circle around it, then **haul**.
4. **Dock and sell.** Slow down inside the blue ring at the pier and press `Space`. Sell, refuel, add ice, repair,
   pay the loan and buy upgrades.
5. **Win.** After 30 days the loan must be paid. Each day also has a goal with a cash bonus.

### Controls

| Action | Keyboard | Touch |
|---|---|---|
| Throttle | `W` / `S` (the lever stays where you leave it) | throttle slider |
| Rudder | `A` / `D` or arrow keys | rudder wheel |
| Set net / haul net / dock | `Space` | Net / Dock buttons |
| Map | `M` | map button |
| Pause / back | `P` or `Esc` | pause button |
| Music on/off | `N` | sound button (mutes all) |
| Effects on/off | `X` | |
| Language TR / EN | `L` | globe button |
| Time speed x1 / x2 / x3 | `T` | speed button |
| Camera | drag to orbit, wheel to zoom | drag |

`M` opens the map, so music uses `N`. Settings are saved in `localStorage` under `arena.hamsi.settings`, the run under
`arena.hamsi.save` and the best result under `arena.hamsi.best`. Turkish is the default language.

<details>
<summary><b>URL flags for testing</b></summary>

| Flag | Effect |
|---|---|
| `?auto` | a bot plays the whole 30-day season with the same controls and rules as a player (sonar data only) |
| `?debug` | fps, draw calls, triangles, state and any JavaScript errors on screen |
| `?sim=N` | fast-forward N seconds before the first frame (starts a new run if needed) |
| `?low` | no shadows, half the particles, no blur on panels |
| `?lang=en` / `?lang=tr` | language |
| `?noassets` | accepted; the game has no asset files, so nothing changes |

The live state is on `window.hamsi` (day, money, loan, boat, schools, net, weather, the bot's `log` of days, `assets`,
`fps`, `calls`); `window.hamsiSim(seconds)` fast-forwards.

</details>

## Screenshots

<table>
  <tr>
    <td width="33%"><img src="docs/01-title.png" alt="Title screen over the harbour"><br><sub>Title screen</sub></td>
    <td width="33%"><img src="docs/04-net.png" alt="Setting the purse-seine net in a circle around a school, with the sonar and fish finder"><br><sub>Setting the net</sub></td>
    <td width="33%"><img src="docs/02-harbour.png" alt="Fish market prices in the harbour screen"><br><sub>Fish market in the harbour</sub></td>
  </tr>
  <tr>
    <td><img src="docs/03-sailing.png" alt="Sailing out on a clear day"><br><sub>Leaving the harbour</sub></td>
    <td><img src="docs/05-storm.png" alt="A storm with rain and big waves"><br><sub>Caught in a storm</sub></td>
    <td><img src="docs/06-phone.png" alt="Hamsi on a phone with the touch controls"><br><sub>On a phone</sub></td>
  </tr>
</table>

## Redesign (2026-11)

**Art direction:** moody maritime stylized. Palette: Black Sea slate `#24343F`, foam `#E6F0F2`, boat blue `#1E88E5`, tea-terrace green `#4C7A3A`, sodium harbour `#FFB74D`, with sonar green `#00E676` for the instruments. The HUD is a set of wet-weather instrument panels (dark steel, rivets, sonar-green hairlines, monospace readouts, segmented gauge bars).

<p align="center"><img src="docs/redesign-before-after.png" width="100%" alt="Before and after: the same state (day 1, 06:25, clear, same camera) with the old glass HUD on the left and the new instrument-panel look on the right"></p>

What changed (visuals only; physics, controls, scoring, bot, saves and the 30-day structure are untouched):

- **Palette and light:** desaturated slate sea with deeper wave troughs and always-present whitecaps, overcast-leaning sky, warmer low sun, darker forest and wet-concrete quay.
- **Environment:** two scrolling mist rings plus nine low mist banks along the coast (thicker in the morning fog and storms), houses with windows, doors and chimneys, sodium harbour lamps that glow more in mist, storms and evening.
- **Boat and crew:** trawler with an A-frame, fish boxes, navigation lights, lit wheelhouse windows and a deck lamp that brighten in bad light, sou'wester hats on the crew, floats that bob on the net.
- **Animation and FX:** denser, longer rain streaks, rain droplets on the "lens" during storms, a sonar ping ring leaving the hull every 3.2 s.
- **UI:** every screen (title, HUD, harbour, summary, ending, pause, settings, map) restyled; sonar, fish finder and map redrawn in sonar green on dark; Bahnschrift / Cascadia Mono system fonts with fallbacks, no new files or requests.
- **Mist:** tinted slate-blue and capped (fog density and mist alpha), so the sea, wave crests and coast stay readable in misty weather ([docs/07-mist.png](docs/07-mist.png)). Repeated identical toasts no longer stack.
- **Phone:** same layout rules as before, re-checked at 500x900 with the new panels.

Measured on the development laptop (Intel UHD 620, headless Chrome, 1280x720; before is the `main` build, after is this branch): 60 fps in both; draw calls 18 before and 23-24 after while sailing clear water, up to 49-56 after during netting, storms and harbour views (budget about 150). The `?auto` bot finished the 30-day season as reis with the loan paid, with 0 JavaScript errors. Not checked: a real phone, Firefox and Safari.

## Running locally

Serve the folder over HTTP, for example:

```
python -m http.server 8000
```

then open <http://localhost:8000/>.

## How it was made

Built by **Claude Sonnet 5.5** with Claude Code from one prompt: [prompts/hamsi.md](prompts/hamsi.md).
Everything is generated in code, so there are no asset files and no credits to list.

<details>
<summary><b>Technical notes</b></summary>

- **Ocean:** a vertex-displaced grid of four summed waves with whitecaps on the crests and analytic normals that
  follows the camera.
- **World:** the coast is a heightfield with tea terraces, instanced houses and trees, and a harbour with moles, a
  pier, the fish market and a lighthouse; the boat is lofted in code and the fish are boids.
- **Audio:** engine chug, waves, wind, gulls, creaks, market chatter and a kemençe-style horon tune in 7/8, all
  synthesised with Web Audio.
- **Performance:** measured on the development laptop's Intel UHD iGPU in headless Chrome at 1280x720: 60 fps with
  18-56 draw calls (one directional light with a 1024 shadow map, pixel ratio capped at 1.5,
  no post-processing).

</details>

Hamsi is part of the **Claude Game Arena** series, where each game is built by a Claude model from one prompt. The
other games: [Hisar](https://furkiozknn.github.io/kale-savunmasi/) ·
[Çay Ocağı](https://furkiozknn.github.io/cay-ocagi/) · [Çini Ustası](https://furkiozknn.github.io/cini-ustasi/) ·
[Martı](https://furkiozknn.github.io/marti/) · [Kervan](https://furkiozknn.github.io/kervan/) ·
[Dolmuş](https://furkiozknn.github.io/dolmus/) · [Peri Golf](https://furkiozknn.github.io/peri-golf/) ·
[Mehter](https://furkiozknn.github.io/mehter/) · [Boğaz Vapuru](https://furkiozknn.github.io/bogaz-vapuru/) ·
[Simit Fırını](https://furkiozknn.github.io/simit-firini/) · [Karagöz](https://furkiozknn.github.io/karagoz/) ·
[Lale Bahçesi](https://furkiozknn.github.io/lale-bahcesi/)

**Round 5:** [Kapadokya Balonu](https://furkiozknn.github.io/kapadokya-balonu/) ·
[Ebru](https://furkiozknn.github.io/ebru/) · [Kırkpınar](https://furkiozknn.github.io/kirkpinar/) ·
[Çarşı Kaçışı](https://furkiozknn.github.io/carsi-kacisi/)

**Round 6:** [Topkapı Gecesi](https://furkiozknn.github.io/topkapi-gecesi/) · **Hamsi** ·
[Pamukkale](https://furkiozknn.github.io/pamukkale/) · [Mimar Sinan](https://furkiozknn.github.io/mimar-sinan/)

## Türkçe

**Hamsi**, Karadeniz kıyısında geçen 3D balıkçılık ve tekne yönetimi oyunu. Mavi beyaz ahşap teknenle limandan çık,
sonarla balık sürüsünü bul, ağı sürünün çevresinde daire çizerek at, fırtınadan önce limana dön ve balığı tazeyken
balık halinde sat. 30 günlük sezonda tekne kredisini öde, limanın reisi ol. Kurulum yok; masaüstünde ve telefonda
tarayıcıda oynanır. Claude Sonnet 5.5 tarafından Claude Code ile tek bir prompt'tan yapıldı.

**Oyna:** https://furkiozknn.github.io/hamsi/

## License

MIT, see [LICENSE](LICENSE).

Like the game? You can support new rounds on [Buy Me a Coffee](https://buymeacoffee.com/furkiozkann). The game stays free.
