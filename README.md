# Pathfinder 1e — Digital Character Sheet

[![Version](https://img.shields.io/badge/version-3.0.0-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1st%20Edition-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-no%20framework-2a4a6b?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-8b6f3e?style=for-the-badge)](LICENSE)

An adaptive, printable digital character sheet for Pathfinder 1st Edition. Works for all classes. Runs fully offline (double-click `index.html`) or via GitHub Pages — no account, no server, no dependencies.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Quick start

1. Open https://pixelkeep.github.io/pathfinder1e-sheet
2. In the **Character Setup** panel: select Race, Class, Level, Size, and Deity → click **Apply Setup**
3. Fill in your ability scores
4. Use **Weapon Quick-Fill**, **Armor Quick-Fill**, and **Magic Items Quick-Fill** to populate equipment
5. Click **Save** to download your character as a `.json` file
6. Store the JSON in the `characters/` folder and commit it to Git

---

## Levelling up

This is one of the main workflows the sheet is designed for.

### Step by step

1. **Load** your saved `.json` file
2. Change the **Level** field on page 1 (or in the Character Setup panel)
3. Click **Apply Setup** again with the new level — the sheet updates:
   - BAB recalculated
   - Base saves (Fort/Ref/Will) recalculated
   - New class abilities appear in the Class Abilities column on page 2
   - Resource pools recalculated (Fervor/day, Bombs/day, Rage rounds, etc.)
   - Bonus feat slots added to the Feats column
   - Sacred Weapon die and enhancement auto-updated (Warpriest)
   - HP levelup hint updated (hit die + CON mod shown below Max HP)
4. **HP:** the sheet shows your hit die and CON modifier below the Max HP field. Add your new HP manually (rolled or average — your choice)
5. **New feats:** type in the new feat slot — autocomplete searches 80+ feats and fills the description automatically. Weapon feats (Weapon Focus, Weapon Specialization) link to a weapon slot and auto-apply the bonus to attack/damage
6. **Skill ranks:** add ranks in the Skills table. Class skills automatically show the +3 bonus when you add a rank
7. **Save** the updated character

### What is automatically recalculated after levelup

| Field | How |
|---|---|
| BAB | Class progression table (full/medium/slow) |
| Fortitude / Reflex / Will | Good/poor progression per class |
| Class abilities | All abilities at or below your level appear |
| Bonus feat count | Warpriest: every 3 levels. Fighter: every even level. etc. |
| Fervor/day | ½ level + WIS mod |
| Bombs/day | Level + INT mod |
| Rage rounds | 4 + CON mod + 2 per level after 1st |
| Sacred Weapon die | 1d6 → 1d8 → 1d10 → 2d6 → 2d8 |
| Sacred Weapon enhance | +1 per 4 levels beyond 4th |
| Sacred Armor | Appears at level 7; bonus increases at 13 and 19 |
| Spell save DC | 10 + spell level + casting ability modifier |
| XP to next level | Medium progression table |
| Carry weight | STR-based light/medium/heavy thresholds |
| Deity skill bonus | e.g. Arqueros +4 STR-based skill checks — persists across saves |

### Git version history for levelups

```bash
# After saving your updated JSON
git add characters/my_character.json
git commit -m "Level 8 — warpriest, bonus feat: Improved Critical (Lucerne Hammer)"
git push
```

Each commit is a full snapshot. You can diff any two levels to see exactly what changed.

---

## Pages

| Page | Contents | Adaptive? |
|---|---|---|
| 1 | Ability scores · HP (with levelup hint) · AC · Saves · BAB/CMB/CMD · Initiative · Speed · Skills · Languages | Fixed |
| 2 | Weapons (breakdown) · Wands/staves (breakdown) · Feats (autocomplete, weapon-linked) · Class Features · Class Abilities (per level) | ✅ Per class + level |
| 3 | AC Items · Class-specific block (Blessings, Rage, etc.) · Gear · Magic items/charges · Special Abilities · Notes · Money · Spell overview | ✅ Per class |
| 4 | Full spell tracker (0–9) or Alchemist extracts + bombs | ✅ Hidden for non-casters |
| 5 | Combat reference · Action types · Conditions · Carry weight · Campaign notes | Fixed |

---

## What is calculated automatically

| Field | Derived from |
|---|---|
| Ability modifiers | Score field (always live, never cached) |
| Initiative | DEX mod + misc |
| AC / Touch / Flat-Footed | 10 + armor + shield + DEX + size + natural + deflect + misc |
| Armor bonus to AC | Pulled live from AC Items table on page 3 |
| Fortitude / Reflex / Will | Base save + ability mod + magic + misc + temp |
| CMB / CMD | BAB + STR/DEX + size |
| All 38 skill totals | Ability mod + ranks + CS bonus (+3 first rank) + deity bonus |
| Deity obedience bonus | Applied to relevant skills (e.g. +4 STR skills for Arqueros) |
| Weapon attack total | BAB + STR or DEX + Enh/MW + feat bonus + misc |
| Weapon damage total | Dice + STR (×1.5 two-handed) + Enh + feats + material mod |
| Sacred Weapon comparison | Weapon die vs. sacred die per level — best shown |
| Material penalty | Alchemical silver: –1 damage |
| Wand attack total | BAB + DEX (ray) or STR (touch) + misc |
| Wand save DC | 10 + spell level + casting ability + misc |
| Spell save DC | 10 + spell level + casting ability modifier |
| Concentration | Caster level + casting ability modifier |
| Carry weight | STR → light / medium / heavy / lift / drag |
| Resource pools | All class pools calculated per level + ability mod |
| Feat bonuses | Weapon Focus/Spec auto-applied to linked weapon slot |

---

## File structure

```
pathfinder1e-sheet/
│
├── index.html            Main sheet — pages 1–4 (inline, works offline)
├── pages35.html          Combat reference pages (loaded inline)
├── sheet.js              All calculations, UI logic, save/load
├── style.css             Layout, print styles, color system
│
├── data/                 Game data — one file per category
│   ├── tables.js         BAB, Save, XP progressions · version number
│   ├── classes.js        20 classes — HD, BAB, saves, skills, proficiencies
│   ├── class_features.js Class features, abilities per level, resource formulas
│   ├── races.js          19 races — ability mods, traits, languages, vision
│   ├── deities.js        80+ deities — domains, favored weapons, obedience perks
│   ├── equipment.js      Weapons, armor, materials, gear, size modifiers
│   ├── items.js          100+ magic items — rings, amulets, belts, ioun stones, etc.
│   ├── feats.js          80+ feats with autocomplete
│   └── spells.js         Spell database with autocomplete
│
├── characters/           Your saved character files (JSON)
│   └── example.json
│
├── README.md             This file (English)
└── README.nl.md          Dutch version
```

**To add or correct data:** edit the relevant file in `data/`. Each file is self-contained with a comment header explaining its format. No build step needed — just save and reload.

---

## Setup workflow

### New character

1. Set ability scores to your base values (before racial mods)
2. Select Race → Class → Level → Size → Deity in the Character Setup panel
3. Click **Apply Setup**:
   - Racial ability mods applied (only to fields you have already filled in)
   - Class skills marked (blue dot)
   - BAB, saves, speed, languages filled
   - Racial traits added to Special Abilities
   - Deity obedience perk applied to skills and noted in Special Abilities
   - Resource pools labelled and sized
4. Use Quick-Fill panels for weapons, armor, magic items
5. Fill feats using autocomplete
6. **Save** → store JSON in `characters/`

### Returning player (same character, new session)

1. Click **Load** → select your `.json`
2. Everything restores, including deity bonuses, feat links, wand charges, and spell slots

---

## Supported content

**Classes (20):** Alchemist · Barbarian · Bard · Cleric · Druid · Fighter · Gunslinger · Inquisitor · Magus · Monk · Oracle · Paladin · Ranger · Rogue · Shaman · Skald · Sorcerer · Swashbuckler · Warpriest · Witch · Wizard

**Races (19):** Aasimar · Catfolk · Dhampir · Drow · Dwarf · Elf · Fetchling · Gnome · Goblin · Half-Elf · Half-Orc · Halfling · Hobgoblin · Human · Kobold · Orc · Ratfolk · Tengu · Tiefling

**Deities (80+):** All CRB deities, major Empyreal Lords (incl. Arqueros), dwarven pantheon, demon lords, archdevils, and more. Obedience perks implemented for 22 deities.

**Magic items (100+):** All ability belts and headbands (+2/+4/+6), Cloaks of Resistance (+1–+5), Rings of Protection (+1–+5), Amulets of Natural Armor (+1–+5), ioun stones, bracers of armor, boots, gloves, eyes, wondrous items, mithral and adamantine armor variants, enhanced armor and shields.

**Feats (80+):** Power Attack chain, Weapon Focus chain, TWF, ranged feats, critical hit feats, maneuver feats, divine feats, metamagic, item creation, and general feats.

**Spells (45+):** All major cure spells, buff spells (Bless, Divine Favor, Haste, Prayer), damage spells (Fireball, Flame Strike, Spiritual Weapon), control, utility, and Warpriest favorites.

---

## Usage

### GitHub Pages (recommended)

Open https://pixelkeep.github.io/pathfinder1e-sheet — all pages load automatically.

### Fully offline (double-click)

Open `index.html` directly. All 5 pages work without a server. No internet required after initial load.

### Sharing with your group

Each player loads the same URL. Each saves their own `.json` file locally. The site stores nothing on the server.

---

## Sources

- Rules and data: **Archives of Nethys** — https://aonprd.com
- Paizo: https://paizo.com/pathfinderRPG

## Contributing

Pull requests welcome. If you find a rules error, open an issue with the correct rule and the aonprd.com source URL. To add spells, feats, items, or races: edit the relevant file in `data/` — the format is documented at the top of each file.

## License

MIT — free to use, modify, and share. Not affiliated with Paizo Publishing. Pathfinder is a registered trademark of Paizo Inc.
