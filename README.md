# Pathfinder 1e — Digital Character Sheet

[![Version](https://img.shields.io/badge/version-3.10.0-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1st%20Edition-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-no%20framework-2a4a6b?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-8b6f3e?style=for-the-badge)](LICENSE)

An adaptive, fully automated digital character sheet for Pathfinder 1st Edition. Works for all 37 base classes. Runs fully offline (double-click `index.html`) or via GitHub Pages.

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
| Initiative | DEX mod + misc + feat bonuses (Improved Initiative) |
| AC / Touch / Flat-Footed | 10 + armor (from AC Items) + DEX (capped by armor) + insight (Dusty Rose) + deflection |
| Saves (Fort/Ref/Will) | Base + ability mod + Cloak of Resistance + feat bonus (Iron Will etc.) |
| BAB / CMB / CMD | Class progression + STR/DEX mods (including item bonuses) |
| All 38 skill totals | Ability mod + ranks + CS +3 + deity bonus + item bonus |
| Weapon attack | BAB + STR/DEX + Enh + feat bonus (Weapon Focus) + misc |
| Weapon damage | Dice + STR (×1.5 two-handed) + Enh + Weapon Spec + material mod |
| **Item bonuses** | Belt → STR, Headband → WIS/INT/CHA, Boots → speed, Cloak → saves, Ioun Stone → AC |
| **Ability score item bonuses** | Enhancement bonuses auto-applied; non-stacking correctly handled |
| Spell slots per day | Class table + ability bonus spells (correct PF1e formula) |
| Spell save DCs | 10 + spell level + casting ability mod |
| Carry weight | STR (with item bonus) → light/medium/heavy thresholds |
| Speed | Race base + item bonus (non-accumulating) |
| Warpriest resource pools | Fervor, Blessings, Sacred Weapon rounds, Sacred Armor minutes |
| Feat bonuses | Weapon Focus/Spec auto-applied; Iron Will/Lightning Reflexes/Great Fortitude/Dodge/Improved Initiative auto-applied |
| Power Attack | Conditional — apply manually via Misc field |

---

## Levelling up

1. **Load** your `.json` file
2. Change **Level** in Character Setup
3. Click **Apply Setup** — updates: BAB, saves, class abilities, resource pools, bonus feats, spell slots, HP hint
4. Add HP manually (hit die + CON mod shown below Max HP)
5. Add new feats via autocomplete — weapon feats auto-link to weapon slots
6. Add skill ranks — class skills get automatic +3
7. **Save**

```bash
git add characters/dvalin_steenhart.json
git commit -m "Level 8 — new feat: Cleaving Finish"
git push
```

---

## Pages

| Page | Contents | Adaptive |
|---|---|---|
| 1 | Ability scores · HP · AC · Saves · BAB/CMB/CMD · Initiative · Speed · Skills · Languages · **XP progress bar** | Fixed |
| 2 | Weapons (full breakdown + breakdown hint) · Wands/staves · Feats (autocomplete) · Class Features · Class Abilities | ✅ Per class + level |
| 3 | AC Items (+Enh button) · **Blessings** (Warpriest) · Character Traits · Special Abilities · Gear · Magic items · Spell Overview | ✅ Per class |
| 4 | Full spell tracker (per level, slot dots, ✓ prepared) | ✅ Hidden for non-casters |
| 5 | Combat reference · Action types · Conditions · Carry weight · Campaign notes | Fixed |

---

## File structure

```
pathfinder1e-sheet/
│
├── index.html            Main sheet — pages 1–4 (inline, offline-capable)
├── sheet.js              All calculations, UI, save/load (~3500 lines, 115 functions)
├── style.css             Layout, print styles, color system
│
├── data/
│   ├── tables.js         BAB, Save, XP progressions · version · helper functions
│   ├── classes.js        37 classes — verified against aonprd.com
│   ├── class_features.js Class features, abilities, resource formulas · Warpriest Blessings (35)
│   ├── races.js          32 races — core + ARG featured + uncommon
│   ├── deities.js        80+ deities + obedience perks (22 implemented)
│   ├── equipment.js      Weapons, armor, materials (incl. WEAPON_MATERIALS)
│   ├── items.js          264 magic items — rings, amulets, belts, ioun stones, potions, scrolls
│   ├── feats.js          96 feats with auto-calc (attackMod, damageMod, saveMod, initMod, acMod)
│   ├── spells.js         42 spells with autocomplete
│   └── traits.js         87 traits (combat/faith/magic/social/campaign/racial/regional)
│
├── characters/
│   └── example.json
│
├── README.md             This file (English)
└── README.nl.md          Dutch version
```

---

## Setup workflow

### New character

1. Enter ability scores (before racial mods)
2. Select Race, Class, Level, Size, Deity → **Apply Setup**
   - Racial ability mods applied (idempotent — safe to re-apply)
   - Class skills marked (blue dot)
   - BAB, saves, speed, languages filled
   - Racial traits → Special Abilities
   - Deity perk → skills and Special Abilities
   - Resource pools labelled and calculated
   - Spell slots filled (base + ability bonus)
   - Blessings block shown (Warpriest)
3. Use Quick-Fill panels:
   - **Weapon** → select weapon → slot → MW/enhancement → Fill
   - **Armor** → select armor → slot → Fill (or use **+Enh** button to enhance existing)
   - **Magic Items** → search (filter by slot) → Fill to first empty AC slot or Gear
4. Select **Character Traits** (2 at creation) — bonuses auto-apply
5. Select **Blessings** (Warpriest) — minor/major powers shown per blessing
6. **Save** → store JSON in `characters/`

### Enhancing existing armor

Click the **+Enh** button on any AC Items row and enter:
- `m` — Masterwork (–1 check penalty)
- `1–5` — Enhancement bonus (+X, implies MW)
- `a` — Adamantine (DR 2–3/—)
- `s` — Mithral (lighter category, no divine arcane failure)

---

## Supported content

**Classes (37):** All CRB, APG, ACG, UC, and OA base classes — verified class skills against aonprd.com

**Races (32):** Core 7 + Goblin, Hobgoblin, Kobold, Orc + Aasimar, Tiefling, Dhampir, Fetchling, Tengu, Ratfolk, Catfolk, Drow + Ifrit, Oread, Sylph, Undine, Kitsune, Nagaji, Samsaran, Wayang, Grippli, Strix, Vishkanya, Merfolk, Suli

**Magic items (264):** Ability belts and headbands (+2/+4/+6 all stats), Cloaks of Resistance (+1–+5), Rings of Protection (+1–+5), Amulets of Natural Armor (+1–+5), all CRB ioun stones, bracers of armor, boots, eyes, wrists, body, head, mithral and adamantine armor, enhanced armor and shields, potions, scrolls, adventuring gear

**Feats (96):** Full Weapon Focus/Spec chains, Power Attack chain, TWF, ranged, critical, maneuver, divine, metamagic, item creation. Auto-applied: save feats, Dodge, Improved Initiative

**Traits (87):** All categories including Curse of the Crimson Throne campaign traits (Tortured, Fate's Favored, etc.)

**Warpriest Blessings (35):** All blessings with minor and major powers — searchable autocomplete

**Deities (80+):** All CRB + Empyreal Lords (incl. Arqueros) + dwarven pantheon + demon lords. Obedience perks for 22 deities

**Spell tables:** Warpriest, Cleric, Wizard, Sorcerer, Druid, Oracle, Inquisitor, Bard, Paladin, Ranger, and aliases for Witch, Arcanist, Shaman, Hunter, Magus, Investigator, Bloodrager, Summoner, Skald, Psychic and more

---

## Sources

Rules and data: **Archives of Nethys** — https://aonprd.com · Paizo: https://paizo.com/pathfinderRPG

## License

MIT — free to use, modify, and share. Not affiliated with Paizo Publishing. Pathfinder is a registered trademark of Paizo Inc.
