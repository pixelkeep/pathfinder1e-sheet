# Pathfinder 1e — Digital Character Sheet

[![Version](https://img.shields.io/badge/version-3.13.5-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1st%20Edition-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-no%20framework-2a4a6b?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-8b6f3e?style=for-the-badge)](LICENSE)

An adaptive, fully automated digital character sheet for Pathfinder 1st Edition. Works for all 37+ base classes. Runs fully offline (double-click `index.html`) or via GitHub Pages.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Quick start

1. Open https://pixelkeep.github.io/pathfinder1e-sheet
2. In the **Character Setup** panel: select Race, Class, Level, Size, Deity → click **Apply Setup**
3. Fill in your ability scores
4. Use the Quick-Fill panels for weapons, armor, and magic items
5. Click **Save** → stores your character as a `.json` file

---

## What is calculated automatically

| Field | How |
|---|---|
| Ability modifiers | Live from score field |
| Size modifiers | Auto-applied from race (AC, CMB, CMD) on Apply Setup |
| Initiative | DEX mod + misc + feat bonuses (Improved Initiative) |
| AC / Touch / Flat-Footed | 10 + armor + DEX (capped) + size + insight + deflection |
| Saves (Fort/Ref/Will) | Base + ability mod + Cloak of Resistance + feat bonuses |
| BAB / CMB / CMD | Class progression + ability mods + size mod + item bonuses |
| All 38 skill totals | Ability mod + ranks + CS +3 + deity bonus + item bonus |
| Weapon attack | BAB + STR/DEX + Enh + Weapon Focus + misc |
| Weapon damage | Dice + STR (×1.5 two-handed) + Enh + Weapon Spec + material |
| Item bonuses | Belt → STR, Headband → WIS/INT/CHA, Boots → speed, Cloak → saves |
| Spell slots per day | Class table + ability bonus spells |
| Spell save DCs | 10 + spell level + casting ability mod |
| Carry weight | STR (with item bonus) → light/medium/heavy thresholds |
| Speed | Race base + item bonus (non-accumulating) |
| Resource pools | Fervor, Blessings, Ki, Grit, Panache, Inspiration, etc. per class |
| Feat bonuses | Weapon Focus/Spec, Iron Will, Lightning Reflexes, Great Fortitude, Dodge, Improved Initiative |

---

## Pages

| Page | Contents | Adaptive |
|---|---|---|
| 1 | Ability scores · HP · AC · Saves · BAB/CMB/CMD · Initiative · Speed · Skills · Languages | Fixed |
| 2 | Weapons · Wands/staves · Feats (autocomplete) · Class Features · Class Abilities | ✅ Per class + level |
| 3 | AC Items · **Class-specific block** (Blessings/Rage/Alchemist resources) · Racial Traits · Character Traits · Deity Obedience · Gear · Magic items · Spell Overview · **XP tracker** | ✅ Per class |
| 4 | Spell/Extract tracker (per level, slot dots, ✓ prepared, spell descriptions) · Spontaneous casting table with CL requirements | ✅ Hidden for non-casters |
| 5 | Combat reference · Action types · Conditions · Carry weight · Campaign notes | Fixed |

---

## Class-specific features

The sheet adapts to your class selection. Examples:

| Class | Adaptive features |
|---|---|
| **Warpriest** | Blessings selector (deity-filtered, minor/major powers) · Sacred Weapon/Armor pools · Fervor tracker |
| **Barbarian / Bloodrager** | Rage rounds tracker with bar · Rage powers autocomplete (60+ powers) + descriptions |
| **Skald** | Inspired Rage tracker · Rage powers (incl. Skald-specific powers) · Bard spell table |
| **Alchemist** | Bombs tracker · Mutagen selector · Discoveries autocomplete (40+ discoveries) |
| **Investigator** | Inspiration pool tracker · Talent autocomplete |
| **Oracle** | Mystery revelations listed · Cleric spell table |
| **Witch / Shaman** | Hex reference data (minor/major/grand) · Spirit data |
| All casters | Spell autocomplete with class filter (⚠ off-list warning · Lx wrong-level warning) |

---

## Spell system

- **440 spells** from CRB, APG, UM, UC, ACG — levels 0–9, all core classes
- Autocomplete filters by class — spells not on your list are marked **⚠**, wrong level marked **L2** etc.
- After selecting a spell, the full description (school, casting time, range, duration, effect) appears inline
- Slot dots track spells used per day — click to mark used
- Spontaneous casters (Cleric, Druid, Oracle) show a cure/summon table with minimum CL per spell

---

## File structure

```
pathfinder1e-sheet/
│
├── index.html            Main sheet — pages 1–5
├── sheet.js              All calculations, UI, save/load (~6000 lines)
├── style.css             Layout, print styles, color system
│
├── data/
│   ├── tables.js         BAB · Save · XP progressions · version
│   ├── classes.js        37 classes — verified against aonprd.com
│   ├── class_features.js CLASS_FEATURES · CLASS_ABILITIES (39 classes) · CLASS_RESOURCES · Warpriest Blessings (35)
│   ├── races.js          32 races
│   ├── deities.js        80+ deities + obedience perks
│   ├── equipment.js      Weapons · armor · materials · size data
│   ├── items.js          264+ magic items
│   ├── feats.js          171 feats with auto-calc
│   ├── spells.js         440 spells (0–9, all core classes, no duplicates)
│   ├── traits.js         87 traits
│   ├── summons.js        142 summon creatures (Monster I–IX + Nature's Ally I–IX)
│   ├── conditions.js     36 conditions with full mechanics
│   ├── domains.js        34 cleric/warpriest domains with powers + bonus spells
│   ├── bloodlines.js     9 Sorcerer + 6 Bloodrager bloodlines
│   ├── mysteries.js      10 Oracle mysteries with revelations
│   └── hexes.js          Witch hexes (minor/major/grand) + 8 Shaman spirits
│
├── characters/
│   └── *.json            Saved characters
│
├── README.md             This file (English)
└── README.nl.md          Dutch version
```

---

## Setup workflow

### New character

1. Enter ability scores (before racial mods)
2. Select Race, Class, Level, Size, Deity → **Apply Setup**
   - Racial ability and size mods applied (idempotent — safe to re-apply)
   - Class skills marked (blue dot)
   - BAB, saves, speed, languages filled
   - Racial traits shown as cards
   - Deity perk shown (obedience + bonus)
   - Resource pools labelled and calculated
   - Spell slots filled (base + ability bonus)
   - Class-specific block rendered (Blessings/Rage/Alchemist)
3. Use Quick-Fill panels (Weapons, Armor, Magic Items)
4. Select Character Traits (2 at creation)
5. On spell page: type spell names → select from autocomplete
6. **Save** → store JSON

### Levelling up

1. **Load** your `.json` file
2. Change Level in Character Setup → **Apply Setup**
3. Add HP manually (hint shown below Max HP)
4. Add new feats, skill ranks, spells
5. **Save**

---

## Supported content

**Classes (37):** All CRB, APG, ACG, UC, OA base classes — class abilities for all 39 keys

**Races (32):** Core 7 + ARG featured + uncommon (Aasimar, Tiefling, Dhampir, Tengu, Ratfolk, Catfolk, Drow, Ifrits, Oreads, Sylphs, Undines, Kitsune, Nagaji, Samsaran, Wayang, Grippli, Strix, Vishkanya, Merfolk, Suli)

**Feats (171):** Full combat chains, ranged, critical, metamagic, channeling, two-weapon, vital strike, intimidate, maneuver, divine, item creation

**Traits (87):** All categories including Curse of the Crimson Throne campaign traits

**Spells (440):** CRB + APG + ACG + UM spells, levels 0–9, all core classes, no duplicates

**Domains (34):** All CRB cleric/warpriest domains with granted powers and bonus spell lists

**Bloodlines (15):** 9 Sorcerer + 6 Bloodrager bloodlines with full power progressions

**Oracle Mysteries (10):** Battle, Bones, Flame, Heavens, Life, Lore, Nature, Stone, Waves, Wind

**Witch Hexes:** 16 minor + 12 major + 6 grand hexes + 8 Shaman spirits

**Summons (142):** Full Summon Monster I–IX and Summon Nature's Ally I–IX stat blocks

**Conditions (36):** All PF1e conditions with full mechanical descriptions

---

## Sources

Rules and data verified against **Archives of Nethys** — https://aonprd.com  
Paizo: https://paizo.com/pathfinderRPG

## License

MIT — free to use, modify, and share. Not affiliated with Paizo Publishing. Pathfinder is a registered trademark of Paizo Inc.
