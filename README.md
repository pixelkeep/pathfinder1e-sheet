# Pathfinder 1e — Digital Character Sheet

[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1st%20Edition-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-no%20framework-2a4a6b?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-8b6f3e?style=for-the-badge)](LICENSE)

A clean, printable digital character sheet for Pathfinder 1st Edition. Works for all classes — Fighter, Warpriest, Druid, Alchemist, Bard, Cleric, and everything else. Runs fully offline as a local HTML file or via GitHub Pages — no account, no server, no dependencies.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Features

- **Automatic calculations** — ability modifiers, AC, saving throws, CMB/CMD, initiative, and all 38 skill totals update as you type
- **Class skill tracking** — click the dot next to a skill to mark it as a class skill; the +3 bonus is applied automatically when ranks are added
- **Save and load** — export your character as a JSON file and load it back at any time; store JSON files in `characters/` for version history via Git
- **Print-ready** — `@media print` produces a clean A4 sheet per page; toolbar is hidden automatically
- **Works offline** — pages 1 and 2 open directly in your browser; pages 3–5 need a local server (see below)
- **GitHub Pages compatible** — deploy the same files to share a link with your group

## Pages

| Page | Contents | Required? |
|---|---|---|
| 1 | Ability scores, AC, saves, BAB, CMB/CMD, initiative, skills, weapons, speed | Core |
| 2 | AC items, gear, money, XP, feats, special abilities, spell overview | Core |
| 3 | Class resource pools (generic), daily abilities, Alchemist extracts, full spell slots (levels 0–9) with slot trackers and spell name fields | Optional |
| 4 | Combat reference — action types, combat modifiers, attacks of opportunity, concentration DCs, all conditions (from aonprd.com) | Optional |
| 5 | Character cheatsheet — your go-to actions, carry weight (auto from STR), buff/condition tracker, spellcasting quick reference, campaign notes | Optional |

Pages 3–5 are optional. Players who only need the core stats can print pages 1 and 2 and stop there.

## What is calculated automatically

| Field | Derived from |
|---|---|
| Ability modifiers | Ability score (including temp score) |
| Initiative | Dex modifier + misc |
| AC / Touch / Flat-Footed | 10 + armor + shield + dex + size + natural + deflect + misc |
| Armor bonus | Pulled from the AC Items table on page 2 |
| Fortitude / Reflex / Will | Base save + ability mod + magic + misc + temp |
| CMB | BAB + Str + size + misc |
| CMD | 10 + BAB + Str + Dex + size |
| Skill totals | Ability mod + ranks + misc + class skill bonus |
| Spell save DC | 10 + spell level + casting ability modifier |
| Concentration | Caster level + casting ability modifier |
| Carry weight limits | STR score → light / medium / heavy / lift / drag |

## Files

```
pathfinder1e-sheet/
├── index.html       Pages 1 and 2 — core character sheet
├── pages35.html     Pages 3–5 — spells, resources, combat reference, cheatsheet
├── style.css        Layout, print styles, all pages
├── sheet.js         Calculations, skill table, save/load, pages 3–5 logic
├── README.md        This file (English)
├── README.nl.md     This file (Dutch)
└── characters/      Store your saved JSON files here
    └── example.json
```

## Usage

### GitHub Pages (recommended — no setup needed)

Open https://pixelkeep.github.io/pathfinder1e-sheet in your browser. All 5 pages load automatically. Save your character as a JSON file locally.

### Local with a server (all 5 pages)

Pages 3–5 load via `fetch()` and require a local server. Run one of these in the repo folder:

```bash
# Python (built in on macOS and Linux)
python3 -m http.server

# Node.js
npx serve .
```

Then open http://localhost:8000 in your browser.

### Local without a server (pages 1 and 2 only)

Open `index.html` directly by double-clicking it. Pages 1 and 2 work fully. A note will appear with a link to open pages 3–5 separately.

### Save and load

1. Fill in your character
2. Click **Save** — downloads `charactername.json` to your computer
3. Move the file to the `characters/` folder in the repo
4. Click **Load** at any time to restore it

### Level up workflow

```bash
# After saving your updated JSON
git add characters/my_character.json
git commit -m "Level 5 — warpriest, Hammer the Gap feat"
git push
```

Each commit is a snapshot of your character at that level. You can always roll back.

## Sharing with your group

1. Go to your repo on GitHub → **Settings → Pages**
2. Under **Source**: select `main` branch, `/ (root)`
3. Click **Save** — your sheet is now live at `https://pixelkeep.github.io/pathfinder1e-sheet`
4. Each player saves their own JSON file locally

## Class resources (page 3)

The resource pool tracker on page 3 is generic — label each row for your class:

| Class | Resources to track |
|---|---|
| Warpriest | Fervor (pool), Blessings/day, Sacred Weapon enhancement |
| Alchemist | Bombs/day (pool), Mutagen/day; use Extracts section for formulae |
| Magus | Arcane Pool (pool), Spell Combat |
| Barbarian | Rage rounds (pool) |
| Paladin | Lay on Hands/day, Mercy uses, Smite Evil/day |
| Oracle / Cleric | Channel Energy/day, Domain powers/day |
| Monk | Ki pool (pool), Stunning Fist/day |
| Gunslinger | Grit (pool) |
| Bard / Skald | Bardic Performance rounds (pool) |
| Fighter | Stamina points (if using optional rules) |

## Browser compatibility

- Chrome / Chromium 110+
- Firefox 110+
- Edge 110+
- Safari 16+

## Contributing

Pull requests are welcome. If you find a calculation error or a missing field, open an issue with a description of the problem and the expected result according to the Pathfinder 1e rules.

## License

MIT — free to use, modify, and share. Not affiliated with Paizo Publishing. Pathfinder is a registered trademark of Paizo Inc.

## Sources

- Archives of Nethys (official Pathfinder 1e SRD): https://aonprd.com
- Paizo: https://paizo.com/pathfinderRPG
