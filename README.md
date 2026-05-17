# Pathfinder 1e — Digital Character Sheet

[![Version](https://img.shields.io/badge/version-2.3.0-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1st%20Edition-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-no%20framework-2a4a6b?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-8b6f3e?style=for-the-badge)](LICENSE)

A clean, printable, **adaptive** digital character sheet for Pathfinder 1st Edition. Works for all classes — Fighter, Warpriest, Druid, Alchemist, Bard, Cleric, and everything else. Runs fully offline or via GitHub Pages.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Features

- **Automatic calculations** — ability modifiers, AC, saving throws, CMB/CMD, initiative, all 38 skill totals, weapon attack and damage breakdowns
- **Adaptive pages** — class abilities, feats, spells, and class-specific blocks change automatically based on your selected class and level
- **Feat autocomplete** — type 2+ letters to search 80+ feats; auto-fills description and links weapon feats to weapon slots
- **Deity obedience perks** — shown in setup panel; +4 sacred bonuses auto-applied to relevant skill checks
- **Weapon breakdown** — BAB + STR/DEX + enhancement + feats + misc, with material modifiers (alchemical silver, cold iron, adamantine) and Sacred Weapon die comparison
- **Wands & combat magic** — track charges with clickable dots, attack rolls, DCs, and spell effects
- **Magic items** — wands, staves, rods with charge tracking on page 3
- **Class features** — proficiencies, spellcasting type, and special rules pulled from aonprd.com for all 14 classes
- **Class abilities** — auto-populated per level with resource pool calculations (Fervor/day, Bombs/day, etc.)
- **Language picker** — racial languages pre-selected; bonus languages highlighted
- **Save and load** — export as JSON; version history via Git commits
- **Print-ready** — A4, setup panels hidden automatically

## Pages

| Page | Contents | Adaptive? |
|---|---|---|
| 1 | Ability scores, AC, saves, BAB/CMB/CMD, skills, initiative, speed | Fixed |
| 2 | Weapons (with full breakdown), Wands/staves, Feats, Class Abilities + Class Features | ✅ Per class/level |
| 3 | AC Items, Class-specific block (Blessings, Rage, etc.), Gear, Magic items, Notes, Spell overview | ✅ Per class |
| 4 | Full spell tracker (0–9) or Alchemist extracts + bombs | ✅ Hidden for non-casters |
| 5 | Combat reference, cheatsheet, carry weight, campaign notes | Fixed |

## What is calculated automatically

| Field | Source |
|---|---|
| Ability modifiers | Score field (direct, not cached) |
| Initiative | Dex modifier + misc |
| AC / Touch / Flat-Footed | 10 + armor + shield + dex + size + natural + deflect + misc |
| Armor bonus | Pulled from AC Items table on page 3 |
| Fortitude / Reflex / Will | Base save + ability mod + magic + misc + temp |
| CMB / CMD | BAB + STR/DEX + size |
| Skill totals | Ability mod + ranks + misc + class skill bonus + deity bonus |
| Weapon attack | BAB + STR or DEX + enhancement/MW + feat bonuses + misc |
| Weapon damage | Dice + STR (×1.5/×0.5 two-handed/off-hand) + enhancement + feats |
| Material penalty | Alchemical silver: –1 damage |
| Sacred Weapon die | Compared vs weapon die per level; best shown |
| Spell save DC | 10 + spell level + casting ability modifier |
| Concentration | Caster level + casting ability modifier |
| Carry weight limits | STR score → light / medium / heavy / lift / drag |
| Class resource pools | Fervor, Bombs, Rage, Ki, Arcane Pool, etc. per level + ability mod |
| Feat bonuses | Weapon Focus/Specialization auto-applied to linked weapon slot |

## Files

```
pathfinder1e-sheet/
├── index.html       Pages 1–3 and adaptive page 4
├── pages35.html     Combat reference pages (4–5)
├── style.css        All layout and print styles
├── sheet.js         All calculations, adaptive logic, save/load
├── data.js          Game data: classes, races, deities, feats, weapons, armor
├── README.md        This file (English)
├── README.nl.md     Dutch version
└── characters/      Store your JSON character files here
    └── example.json
```

## Usage

### GitHub Pages (recommended)

Open https://pixelkeep.github.io/pathfinder1e-sheet — all pages load automatically.

### Local (all pages)

```bash
python3 -m http.server   # then open http://localhost:8000
```

### Local (pages 1–3 only)

Double-click `index.html`. Pages 1–3 work fully offline.

### Character Setup workflow

1. Select **Race**, **Class**, **Level**, **Size**, **Deity** in the setup panel
2. Enter your ability scores
3. Click **Apply Setup** — BAB, saves, class skills, racial traits, spell ability, resource pools, and deity obedience perk all fill in automatically
4. Use **Weapon Quick-Fill** to populate weapon slots (attack/damage auto-calculated)
5. Use **Armor Quick-Fill** to fill AC items (flows to page 1 AC automatically)
6. Use **Feat** fields — type to search, select to auto-fill with weapon slot linking

### Level up workflow

```bash
# After saving your updated JSON
git add characters/my_character.json
git commit -m "Level 8 — warpriest, bonus feat: Improved Critical"
git push
```

## Supported classes (data.js)

Full class features, abilities per level, and resource formulas for:
Alchemist · Barbarian · Bard · Cleric · Druid · Fighter · Gunslinger · Inquisitor · Magus · Monk · Oracle · Paladin · Ranger · Rogue · Shaman · Skald · Sorcerer · Swashbuckler · Warpriest · Witch · Wizard

## Supported races (data.js)

Core: Dwarf · Elf · Gnome · Half-Elf · Half-Orc · Halfling · Human

## Deity obedience perks (data.js)

Abadar · Andoletta · Angradd · Arqueros · Black Butterfly · Calistria · Cayden Cailean · Desna · Erastil · Gorum · Iomedae · Irori · Lamashtu · Nethys · Pharasma · Ragathiel · Rovagug · Sarenrae · Shelyn · Torag · Urgathoa · Zon-Kuthon

## Feat database (data.js)

80+ feats with auto-complete: Power Attack chain · Weapon Focus/Specialization chain · Two-weapon fighting · Ranged feats · Critical hit feats · Maneuver feats · Divine feats (Channel Smite, Extra Fervor) · Metamagic · Item creation · General feats

## Sources

- Rules and data: **Archives of Nethys** — https://aonprd.com
- Paizo: https://paizo.com/pathfinderRPG

## Contributing

Pull requests welcome. If you find a rules error, open an issue with the correct rule and the aonprd.com source.

## License

MIT — free to use, modify, and share. Not affiliated with Paizo Publishing. Pathfinder is a registered trademark of Paizo Inc.
