# Pathfinder 1e — Digitaal Karakterblad

[![Versie](https://img.shields.io/badge/versie-3.10.0-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1e-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-geen%20framework-2a4a6b?style=for-the-badge)]()

Een adaptief, volledig geautomatiseerd digitaal karakterblad voor Pathfinder 1e. Werkt voor alle 37 basisklassen. Volledig offline (dubbelklik `index.html`) of via GitHub Pages.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Snelstart

1. Open https://pixelkeep.github.io/pathfinder1e-sheet
2. Selecteer Ras, Klasse, Level, Grootte en Deity → klik **Apply Setup**
3. Vul ability scores in
4. Gebruik de Quick-Fill panelen voor wapens, armor en magic items
5. Klik **Save** → karakter opgeslagen als `.json`

---

## Wat automatisch berekend wordt

| Veld | Hoe |
|---|---|
| Ability modifiers | Live van het score-veld |
| Initiative | DEX mod + misc + feat-bonussen |
| AC / Touch / Flat-Footed | 10 + armor (uit AC Items) + DEX (gecapped) + inzicht + deflectie |
| Saves | Basis + ability mod + Cloak of Resistance + feat-bonus |
| BAB / CMB / CMD | Klasse-progressie + STR/DEX (inclusief item-bonussen) |
| Skill-totalen | Ability mod + ranks + CS +3 + deity-bonus + item-bonus |
| Wapen aanval | BAB + STR/DEX + Enh + Weapon Focus + misc |
| Wapen schade | Dice + STR (×1.5 twee-handig) + Enh + Weapon Spec + materiaal |
| **Item-bonussen** | Belt → STR, Headband → WIS/INT/CHA, Laarzen → snelheid, Mantel → saves |
| Spellaantallen | Klasse-tabel + ability-bonusspells (correcte PF1e-formule) |
| Spell-DC's | 10 + spelllevel + casting ability mod |
| Draaggewicht | STR (met itembonussen) → licht/midden/zwaar |
| Snelheid | Ras-basis + itembonussen (geen accumulatie) |
| Resource pools | Fervor, Blessings, Sacred Weapon rounds, Sacred Armor minuten |
| Feat-bonussen | Weapon Focus/Spec, Iron Will, Great Fortitude, Lightning Reflexes, Dodge, Improved Initiative |
| Power Attack | Conditioneel — handmatig invullen via Misc-veld |

---

## Levelup — stap voor stap

1. **Laad** je `.json`
2. Verander **Level** in het Character Setup-paneel
3. Klik **Apply Setup** — werkt bij: BAB, saves, class-abilities, resource pools, bonus feats, spellaantallen, HP-hint
4. Voeg HP handmatig toe (hit die + CON mod zichtbaar onder Max HP)
5. Voeg nieuwe feats toe via autocomplete — wapengerelateerde feats koppelen automatisch
6. Voeg skill-ranks toe — class-skills krijgen automatisch +3
7. **Save**

```bash
git add characters/dvalin_steenhart.json
git commit -m "Level 8 — nieuwe feat: Cleaving Finish"
git push
```

---

## Pagina-overzicht

| Pagina | Inhoud | Adaptief? |
|---|---|---|
| 1 | Ability scores · HP · AC · Saves · BAB/CMB/CMD · Initiative · Snelheid · Skills · Talen · **XP-voortgangsbalk** | Vast |
| 2 | Wapens (breakdown + hint) · Wands/staves · Feats (autocomplete) · Class Features · Class Abilities | ✅ Per klasse + level |
| 3 | AC Items (+Enh-knop) · **Blessings** (Warpriest) · Character Traits · Special Abilities · Uitrusting · Spelloverzicht | ✅ Per klasse |
| 4 | Volledige spelltabel (per level, slot-bolletjes, ✓ prepared) | ✅ Verborgen voor non-casters |
| 5 | Gevechtsreferentie · Acties · Condities · Draaggewicht · Campagnenotities | Vast |

---

## Bestandsstructuur

```
pathfinder1e-sheet/
│
├── index.html            Hoofdblad — pagina's 1–4 (offline bruikbaar)
├── sheet.js              Alle berekeningen, UI, opslaan/laden
├── style.css             Opmaak, printstijlen, kleurensysteem
│
├── data/
│   ├── tables.js         BAB, saves, XP · versienummer · helperfuncties
│   ├── classes.js        37 klassen — geverifieerd via aonprd.com
│   ├── class_features.js Features, abilities, resources · Warpriest Blessings (35)
│   ├── races.js          32 rassen
│   ├── deities.js        80+ godheden + obedience-perks
│   ├── equipment.js      Wapens, armor, materialen
│   ├── items.js          264 magische items (ringen, gordels, headbands, ioun stones, potions…)
│   ├── feats.js          96 feats met auto-berekening
│   ├── spells.js         42 spreuken met autocomplete
│   └── traits.js         87 traits (incl. alle CotCT-campagnetraits)
│
├── characters/
│   └── example.json
│
├── README.md             Engelstalige handleiding
└── README.nl.md          Dit bestand
```

---

## Setup-workflow

### Nieuw karakter

1. Ability scores invullen (voor rasmodifiers)
2. Ras, Klasse, Level, Grootte, Deity → **Apply Setup**
3. Quick-Fill voor wapens, armor en magic items
4. **Character Traits** kiezen (2 bij character creation) — bonussen worden automatisch verwerkt
5. **Blessings** kiezen (Warpriest) — minor en major powers worden getoond
6. **Save**

### Armor verbeteren

Klik de **+Enh** knop op een AC Items-rij:
- `m` — Masterwork (–1 check penalty)
- `1–5` — Enhancement bonus (impliceert MW)
- `a` — Adamantine (DR 2–3/—)
- `s` — Mithral (lichter type, geen divine arcane failure)

---

## Ondersteunde inhoud

**Klassen (37):** Alle CRB, APG, ACG, UC en OA — class skills geverifieerd via aonprd.com

**Rassen (32):** Core 7 + Goblin, Hobgoblin, Kobold, Orc + Aasimar, Tiefling, Dhampir, Fetchling, Tengu, Ratfolk, Catfolk, Drow + Ifrit, Oread, Sylph, Undine, Kitsune, Nagaji, Samsaran, Wayang, Grippli, Strix, Vishkanya, Merfolk, Suli

**Magische items (264):** Ability-gordels/headbands (+2/+4/+6), Cloaks of Resistance (+1–+5), Rings of Protection (+1–+5), alle CRB ioun stones, bracers, laarzen, handschoenen, mithral/adamantine armor, potions, scrolls, avontuursgear

**Feats (96):** Alle Weapon Focus/Spec-ketens, Power Attack, TWF, ranged, kritisch, manoeuvre, divine, metamagic. Auto-verwerkt: save-feats, Dodge, Improved Initiative

**Traits (87):** Alle categorieën inclusief Curse of the Crimson Throne (Tortured, Fate's Favored, etc.)

**Warpriest Blessings (35):** Alle blessings met minor en major powers — zoekbare autocomplete

**Godheden (80+):** Alle CRB + Empyreal Lords (incl. Arqueros) + dwergengodheden + demonlords. Obedience-perks voor 22 godheden

---

## Gebruik

### GitHub Pages (aanbevolen)

Open https://pixelkeep.github.io/pathfinder1e-sheet

### Volledig offline

Dubbelklik `index.html` — alle 5 pagina's werken zonder server of internet.

---

## Bronnen

Regels en data: **Archives of Nethys** — https://aonprd.com · Paizo: https://paizo.com/pathfinderRPG

## Licentie

MIT — vrij te gebruiken, aan te passen en te delen. Niet gelieerd aan Paizo Publishing. Pathfinder is een geregistreerd handelsmerk van Paizo Inc.
