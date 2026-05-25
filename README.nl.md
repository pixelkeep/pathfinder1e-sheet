# Pathfinder 1e — Digitaal Karakterblad

[![Versie](https://img.shields.io/badge/versie-3.13.5-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1e%20Editie-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-geen%20framework-2a4a6b?style=for-the-badge)]()
[![Licentie](https://img.shields.io/badge/Licentie-MIT-8b6f3e?style=for-the-badge)](LICENSE)

Een adaptief, volledig geautomatiseerd digitaal karakterblad voor Pathfinder 1e. Werkt voor alle 37+ basisklassen. Draait volledig offline (dubbelklik op `index.html`) of via GitHub Pages.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Snel starten

1. Open https://pixelkeep.github.io/pathfinder1e-sheet
2. Selecteer in het **Character Setup** paneel: Ras, Klasse, Level, Grootte, Godheid → klik **Apply Setup**
3. Vul je ability scores in
4. Gebruik de Quick-Fill panelen voor wapens, wapenrusting en magische voorwerpen
5. Klik **Save** → slaat je karakter op als `.json` bestand

---

## Wat automatisch berekend wordt

| Veld | Hoe |
|---|---|
| Ability modifiers | Live vanuit het score-veld |
| Grootte modifiers | Automatisch toegepast vanuit ras (AC, CMB, CMD) bij Apply Setup |
| Initiative | DEX mod + misc + feat bonussen (Improved Initiative) |
| AC / Touch / Flat-Footed | 10 + wapenrusting + DEX (gecapped) + grootte + inzicht + deflectie |
| Saves (Fort/Ref/Will) | Basis + ability mod + Cloak of Resistance + feat bonussen |
| BAB / CMB / CMD | Klasseprogress + ability mods + grootte mod + voorwerp bonussen |
| Alle 38 vaardigheidstotalen | Ability mod + ringen + KV +3 + godheidsbonus + voorwerp bonus |
| Wapen aanval | BAB + STR/DEX + Enh + Weapon Focus + misc |
| Wapen schade | Dobbelstenen + STR (×1,5 tweehands) + Enh + Weapon Spec + materiaal |
| Voorwerp bonussen | Riem → STR, Hoofdband → WIS/INT/CHA, Laarzen → snelheid, Mantel → saves |
| Spreukslots per dag | Klasse-tabel + ability bonuspreuken |
| Spreuk-redding DC's | 10 + spreukniveau + toepassing ability mod |
| Draagvermogen | STR (met voorwerp bonus) → licht/medium/zwaar drempelwaarden |
| Snelheid | Ras basis + voorwerp bonus (niet cumulatief) |
| Hulpbron pools | Fervor, Blessings, Ki, Grit, Panache, Inspiratie, etc. per klasse |
| Feat bonussen | Weapon Focus/Spec, Iron Will, Lightning Reflexes, Great Fortitude, Dodge, Improved Initiative |

---

## Pagina's

| Pagina | Inhoud | Adaptief |
|---|---|---|
| 1 | Ability scores · HP · AC · Saves · BAB/CMB/CMD · Initiative · Snelheid · Vaardigheden · Talen | Vast |
| 2 | Wapens · Staven/toverstaven · Feats (autocomplete) · Klassekenmerken · Klasse-vermogens | ✅ Per klasse + level |
| 3 | AC-voorwerpen · **Klasse-specifiek blok** (Blessings/Rage/Alchemist) · Raskenmerken · Karaktertrekken · Godheidsgehoorzaamheid · Uitrusting · Magische voorwerpen · Spreukenoverzicht · **XP tracker** | ✅ Per klasse |
| 4 | Spreuk/Extract-tracker (per niveau, slotbolletjes, ✓ voorbereid, beschrijvingen) · Spontaan castingtabel met minimaal CL | ✅ Verborgen voor niet-casters |
| 5 | Gevechtsreferentie · Actietypen · Condities · Draagvermogen · Campagne-notities | Vast |

---

## Klasse-specifieke functies

Het blad past zich aan op je klassekeuze:

| Klasse | Adaptieve functies |
|---|---|
| **Warpriest** | Blessings-selector (godheid-gefilterd, minor/major krachten) · Sacred Weapon/Armor pools · Fervor tracker |
| **Barbarian / Bloodrager** | Rage-rondes tracker met balk · Rage powers autocomplete (60+ krachten) + beschrijvingen |
| **Skald** | Inspired Rage tracker · Rage powers (incl. Skald-specifieke krachten) · Bard-spreuktabel |
| **Alchemist** | Bommentracker · Mutagen-selector · Discoveries autocomplete (40+ ontdekkingen) |
| **Investigator** | Inspiratie-pool tracker · Talent autocomplete |
| **Oracle** | Mystery-revelaties weergegeven · Cleric-spreuktabel |
| **Witch / Shaman** | Hex-referentiedata (minor/major/grand) · Spirit-data |
| Alle casters | Spreukautocomplete met klassefilter (⚠ niet op je lijst · Lx verkeerd niveau) |

---

## Spreuksysteem

- **440 preuken** van CRB, APG, UM, UC, ACG — niveaus 0–9, alle kernklassen
- Autocomplete filtert op klasse — preuken niet op jouw lijst zijn gemarkeerd **⚠**, verkeerd niveau als **L2** etc.
- Na het selecteren van een spreuk verschijnt de volledige beschrijving inline (school, castingtijd, bereik, duur, effect)
- Slotbolletjes bijhouden welke preuken per dag gebruikt zijn — klik om te markeren
- Spontane casters (Cleric, Druid, Oracle) tonen een cure/summon tabel met minimaal CL per spreuk

---

## Bestandsstructuur

```
pathfinder1e-sheet/
│
├── index.html            Hoofdblad — pagina's 1–5
├── sheet.js              Alle berekeningen, UI, opslaan/laden (~6000 regels)
├── style.css             Opmaak, afdrukstijlen, kleurensysteem
│
├── data/
│   ├── tables.js         BAB · Save · XP progressies · versie
│   ├── classes.js        37 klassen — geverifieerd via aonprd.com
│   ├── class_features.js Klassekenmerken · Klasse-vermogens (39 klassen) · Hulpbron-formules · Warpriest Blessings (35)
│   ├── races.js          32 rassen
│   ├── deities.js        80+ godheden + gehoorzaamheidskrachten
│   ├── equipment.js      Wapens · wapenrusting · materialen · grootte-data
│   ├── items.js          264+ magische voorwerpen
│   ├── feats.js          171 feats met automatische berekening
│   ├── spells.js         440 preuken (0–9, alle kernklassen, geen duplicaten)
│   ├── traits.js         87 trekken
│   ├── summons.js        142 oproepwezens (Monster I–IX + Nature's Ally I–IX)
│   ├── conditions.js     36 condities met volledige mechanica
│   ├── domains.js        34 cleric/warpriest domeinen met krachten + bonuspreuken
│   ├── bloodlines.js     9 Tovenaar + 6 Bloodrager bloedlijnen
│   ├── mysteries.js      10 Oracle-mysteries met revelaties
│   └── hexes.js          Heksenhexen (minor/major/grand) + 8 Shaman-geesten
│
├── characters/
│   └── *.json            Opgeslagen karakters
│
├── README.md             Engelse versie
└── README.nl.md          Dit bestand (Nederlands)
```

---

## Workflow

### Nieuw karakter

1. Voer ability scores in (vóór rasmodifiers)
2. Selecteer Ras, Klasse, Level, Grootte, Godheid → **Apply Setup**
   - Rasmodifiers worden toegepast (idempotent — veilig om opnieuw toe te passen)
   - Klassevaardigheden gemarkeerd (blauwe stip)
   - BAB, saves, snelheid, talen ingevuld
   - Raskenmerken als kaartjes weergegeven
   - Godheidsbonus weergegeven (ritueel + bonus)
   - Hulpbron pools berekend en gelabeld
   - Spreukslots gevuld (basis + ability bonus)
   - Klasse-specifiek blok weergegeven (Blessings/Rage/Alchemist)
3. Gebruik Quick-Fill panelen (Wapens, Wapenrusting, Magische voorwerpen)
4. Selecteer Karaktertrekken (2 bij aanmaak)
5. Op de spreukpagina: typ spreuknamen → selecteer uit autocomplete
6. **Save** → sla op als JSON

### Oplevelen

1. **Laad** je `.json` bestand
2. Verander Level in Character Setup → **Apply Setup**
3. Voeg HP handmatig toe (aanwijzing onder Max HP)
4. Voeg nieuwe feats, vaardigheidsrangen, preuken toe
5. **Save**

---

## Ondersteunde inhoud

**Klassen (37):** Alle CRB, APG, ACG, UC, OA basisklassen — klasse-vermogens voor alle 39 sleutels

**Rassen (32):** Kern 7 + ARG + zeldzaam (Aasimar, Tiefling, Dhampir, Tengu, Ratfolk, Catfolk, Drow, Ifrit, Oread, Sylph, Undine, Kitsune, Nagaji, Samsaran, Wayang, Grippli, Strix, Vishkanya, Zeemeermin, Suli)

**Feats (171):** Volledige gevechtsketens, veraf, kritisch, metamagie, kanalisatie, twee-wapens, vitale aanval, intimidatie, manoeuvre, goddelijk, voorwerpscreatie

**Trekken (87):** Alle categorieën inclusief Curse of the Crimson Throne campagnetrekken

**Preuken (440):** CRB + APG + ACG + UM preuken, niveaus 0–9, alle kernklassen, geen duplicaten

**Domeinen (34):** Alle CRB cleric/warpriest domeinen met verleende krachten en bonuspreukenlijsten

**Bloedlijnen (15):** 9 Tovenaar + 6 Bloodrager bloedlijnen met volledige krachtsprogressies

**Oracle-mysteries (10):** Strijd, Beenderen, Vlam, Hemel, Leven, Lore, Natuur, Steen, Golven, Wind

**Heksenhexen:** 16 minor + 12 major + 6 grand hexen + 8 Shaman-geesten

**Oproepingen (142):** Volledige Summon Monster I–IX en Summon Nature's Ally I–IX statistieken

**Condities (36):** Alle PF1e condities met volledige mechanische beschrijvingen

---

## Bronnen

Regels en data geverifieerd via **Archives of Nethys** — https://aonprd.com  
Paizo: https://paizo.com/pathfinderRPG

## Licentie

MIT — gratis te gebruiken, aan te passen en te delen. Niet gelieerd aan Paizo Publishing. Pathfinder is een geregistreerd handelsmerk van Paizo Inc.
