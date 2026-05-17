# Pathfinder 1e — Digital Character Sheet

[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1st%20Edition-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-no%20framework-2a4a6b?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-8b6f3e?style=for-the-badge)](LICENSE)

A clean, printable digital character sheet for Pathfinder 1st Edition. Runs fully offline as a local HTML file or via GitHub Pages — no account, no server, no dependencies.

---

## Features

- **Automatic calculations** — ability modifiers, AC, saving throws, CMB/CMD, initiative, and all skill totals update as you type
- **Class skill tracking** — click the dot next to a skill to mark it as a class skill; the +3 bonus is applied automatically when ranks are added
- **Two-page layout** — page 1 covers core stats and skills; page 2 covers AC items, gear, money, feats, special abilities, and spells
- **Save and load** — export your character as a JSON file; load it back at any time
- **Print-ready** — `@media print` styles produce a clean A4 sheet; toolbar and UI chrome are hidden automatically
- **Works offline** — open `index.html` directly in your browser, no internet required
- **GitHub Pages compatible** — deploy the same files to share a link with your group

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

## Files

```
pathfinder1e-sheet/
├── index.html       Main sheet (pages 1 and 2)
├── style.css        Layout and print styles
├── sheet.js         Calculations, skill table, save/load
├── README.md        This file (English)
├── README.nl.md     This file (Dutch)
└── characters/      Put your saved JSON files here (optional)
    └── example.json
```

## Usage

### Local (offline)

1. Download or clone this repository
2. Open `index.html` in your browser (Chrome, Firefox, or Edge recommended)
3. Fill in your character
4. Click **Save** to export a `.json` file; store it in the `characters/` folder
5. Click **Load** to restore a saved character
6. Click **Print** or use `Ctrl+P` / `Cmd+P` to print

### GitHub Pages (shared link)

1. Fork or push this repository to your GitHub account
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)`
4. Click **Save** — GitHub will provide a URL such as `https://yourusername.github.io/pathfinder-sheet`
5. Share that URL with your play group

Your character is still saved locally as a JSON file. The site itself stores nothing.

### Levelling up

Because your character is stored as a JSON file, you can track changes over time using Git:

```bash
# After saving your updated character JSON
git add characters/my_character.json
git commit -m "Level 5 — warpriest, added Hammer the Gap feat"
git push
```

Each commit becomes a snapshot of your character at that level.

## Spells

The spell table (page 2) tracks spells known, spell save DC, spells per day, and bonus spells per level. A full interactive spell list (with checkboxes per slot and prepared spell names) is planned for a future update. For now, use the **Spell List** text area to write your prepared or known spells.

## Companion characters

Support for a second character on the same page (animal companion, cohort) is planned. For now, open a second browser tab and load a separate JSON file.

## Browser compatibility

Tested and working in:

- Chrome / Chromium 110+
- Firefox 110+
- Edge 110+
- Safari 16+

## Contributing

Pull requests are welcome. If you find a calculation error or missing field, open an issue with a description of the problem and the expected result.

## License

MIT — free to use, modify, and share. Not affiliated with Paizo Publishing. Pathfinder is a registered trademark of Paizo Inc.

## Sources

- Pathfinder Reference Document: https://www.d20pfsrd.com
- Paizo: https://paizo.com/pathfinderRPG
