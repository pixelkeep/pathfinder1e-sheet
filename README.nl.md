# Pathfinder 1e — Digitaal Karakterblad

[![Versie](https://img.shields.io/badge/versie-3.0.0-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1e-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML + JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-geen%20framework-2a4a6b?style=for-the-badge)]()

Een adaptief, printbaar digitaal karakterblad voor Pathfinder 1e. Werkt voor alle klassen. Volledig offline (dubbelklik `index.html`) of via GitHub Pages.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Snelstart

1. Open https://pixelkeep.github.io/pathfinder1e-sheet
2. In het **Character Setup** paneel: selecteer Ras, Klasse, Level, Grootte en Deity → klik **Apply Setup**
3. Vul je ability scores in
4. Gebruik **Weapon Quick-Fill**, **Armor Quick-Fill** en **Magic Items Quick-Fill** voor uitrusting
5. Klik **Save** om je karakter als `.json` bestand op te slaan

---

## Levelup — stap voor stap

Dit is één van de kernworkflows van het formulier.

### Procedure

1. **Load** je opgeslagen `.json`
2. Verander het **Level** veld op pagina 1 (of in het Character Setup paneel)
3. Klik **Apply Setup** opnieuw met het nieuwe level — het formulier werkt automatisch bij:
   - BAB herberekend
   - Saves (Fort/Ref/Will) herberekend
   - Nieuwe class abilities verschijnen in de Class Abilities kolom op pagina 2
   - Resource pools herberekend (Fervor/dag, Bombs/dag, Rage rounds, etc.)
   - Nieuwe feat-slots toegevoegd aan de Feats kolom
   - Sacred Weapon schade en enhancement bijgewerkt (Warpriest)
   - HP levelup-hint bijgewerkt (hit die + CON mod zichtbaar onder Max HP)
4. **HP:** het formulier toont je hit die en CON modifier onder het Max HP veld. Voeg de nieuwe HP handmatig toe (gegooid of gemiddeld)
5. **Nieuwe feats:** typ in het nieuwe feat-slot — autocomplete doorzoekt 80+ feats en vult de beschrijving automatisch in. Wapengerelateerde feats (Weapon Focus, Weapon Specialization) koppel je aan een wapenslot; de bonus wordt automatisch verwerkt in aanvals- en schadetotalen
6. **Skill ranks:** voeg ranks toe in de Skills-tabel. Class skills tonen automatisch de +3 bonus bij de eerste rank
7. **Save** het bijgewerkte karakter

### Wat automatisch wordt herberekend na een levelup

| Veld | Hoe |
|---|---|
| BAB | Klasse-progressietabel (vol/medium/traag) |
| Fortitude / Reflex / Will | Good/poor progressie per klasse |
| Class abilities | Alle abilities op of onder je level verschijnen |
| Bonus feat-teller | Warpriest: elke 3 levels. Fighter: elk even level. etc. |
| Fervor/dag | ½ level + WIS mod |
| Bombs/dag | Level + INT mod |
| Rage rounds | 4 + CON mod + 2 per level na het 1e |
| Sacred Weapon schade | 1d6 → 1d8 → 1d10 → 2d6 → 2d8 |
| Sacred Weapon enhancement | +1 per 4 levels vanaf level 4 |
| Sacred Armor | Verschijnt op level 7; bonus stijgt op 13 en 19 |
| Spell save DC | 10 + spelllevel + casting ability modifier |
| XP voor volgend level | Gemiddelde progressietabel |
| Draaggewicht | STR-gebaseerde grenzen |
| Deity skill bonus | bijv. Arqueros +4 STR-gebaseerde checks — blijft bewaard na opslaan |

### Git-versiegeschiedenis voor levelups

```bash
git add characters/mijn_karakter.json
git commit -m "Level 8 — warpriest, bonus feat: Improved Critical (Lucerne Hammer)"
git push
```

Elke commit is een volledige momentopname. Je kunt twee beliebige levels vergelijken om te zien wat er precies veranderd is.

---

## Pagina's

| Pagina | Inhoud | Adaptief? |
|---|---|---|
| 1 | Ability scores · HP (met levelup-hint) · AC · Saves · BAB/CMB/CMD · Initiative · Snelheid · Skills · Talen | Vast |
| 2 | Wapens (breakdown) · Wands/staves (breakdown) · Feats (autocomplete) · Class Features · Class Abilities (per level) | ✅ Per klasse + level |
| 3 | AC Items · Klasse-specifiek blok · Uitrusting · Magic items · Special Abilities · Notities · Geld · Spelloverzicht | ✅ Per klasse |
| 4 | Volledige spelltabel (0–9) of Alchemist extracts + bombs | ✅ Verborgen voor non-casters |
| 5 | Gevechtsreferentie · Condities · Actietypes · Draaggewicht · Campagnenotities | Vast |

---

## Bestandsstructuur

```
pathfinder1e-sheet/
│
├── index.html            Hoofdformulier — pagina's 1–4 (werkt offline)
├── pages35.html          Gevechtsreferentie (inline geladen)
├── sheet.js              Alle berekeningen, UI-logica, opslaan/laden
├── style.css             Opmaak, printstijlen, kleurensysteem
│
├── data/                 Speldata — één bestand per categorie
│   ├── tables.js         BAB, Save, XP progressies · versienummer
│   ├── classes.js        20 klassen — HD, BAB, saves, skills, proficiencies
│   ├── class_features.js Class features en vaardigheden per level
│   ├── races.js          19 rassen — ability mods, traits, talen, vision
│   ├── deities.js        80+ godheden — domeinen, wapens, obedience-perks
│   ├── equipment.js      Wapens, armor, materialen, uitrusting, grootte-mods
│   ├── items.js          100+ magische items — ringen, amuletten, gordels, etc.
│   ├── feats.js          80+ feats met autocomplete
│   └── spells.js         Spell-database met autocomplete
│
├── characters/           Jouw karakterbestanden (JSON)
│   └── example.json
│
├── README.md             Engelstalige handleiding
└── README.nl.md          Dit bestand
```

**Data aanpassen of uitbreiden:** bewerk het relevante bestand in `data/`. Elk bestand staat op zichzelf en heeft een commentaar-header die het formaat uitlegt. Geen buildstap nodig.

---

## Setup-workflow

### Nieuw karakter

1. Stel je ability scores in op de basiswaarden (voor rasmodifiers)
2. Selecteer Ras → Klasse → Level → Grootte → Deity in het setup-paneel
3. Klik **Apply Setup**:
   - Rasmodifiers worden toegepast (alleen op al ingevulde velden)
   - Class skills aangevinkt
   - BAB, saves, snelheid, talen ingevuld
   - Racial traits toegevoegd aan Special Abilities
   - Deity obedience-perk toegepast op skills en genoteerd
   - Resource pools gelabeld en berekend
4. Gebruik Quick-Fill panelen voor wapens, armor, magische items
5. Vul feats in via autocomplete
6. **Save** → bewaar JSON in `characters/`

---

## Ondersteunde inhoud

**Klassen (20):** Alchemist · Barbarian · Bard · Cleric · Druid · Fighter · Gunslinger · Inquisitor · Magus · Monk · Oracle · Paladin · Ranger · Rogue · Shaman · Skald · Sorcerer · Swashbuckler · Warpriest · Witch · Wizard

**Rassen (19):** Aasimar · Catfolk · Dhampir · Drow · Dwarf · Elf · Fetchling · Gnome · Goblin · Half-Elf · Half-Orc · Halfling · Hobgoblin · Human · Kobold · Orc · Ratfolk · Tengu · Tiefling

**Godheden (80+):** Alle CRB-godheden, Empyreal Lords (incl. Arqueros), dwergengodheden, en meer. Obedience-perks voor 22 godheden.

**Magische items (100+):** Ability-gordels en -hoofdbanden (+2/+4/+6), Cloaks of Resistance (+1–+5), Rings of Protection (+1–+5), Amulets of Natural Armor (+1–+5), ioun stones, bracers of armor, laarzen, handschoenen, wonderous items, mithral en adamantine armor, enhanced armor en schilden.

**Feats (80+):** Power Attack-keten, Weapon Focus-keten, TWF, ranged feats, critical hit feats, maneuver feats, divine feats, metamagic, item creation en general feats.

**Spells (45+):** Alle cure-spreuken, buffs (Bless, Divine Favor, Haste, Prayer), schade (Fireball, Flame Strike, Spiritual Weapon), control, utility en Warpriest-favorieten.

---

## Gebruik

### GitHub Pages (aanbevolen)

Open https://pixelkeep.github.io/pathfinder1e-sheet — alle pagina's laden automatisch.

### Volledig offline (dubbelklik)

Open `index.html` direct. Alle 5 pagina's werken zonder server.

### Delen met je spelgroep

Elke speler laadt dezelfde URL. Iedereen slaat zijn eigen `.json` lokaal op. De site bewaart niets op de server.

---

## Bronnen

- Regels en data: **Archives of Nethys** — https://aonprd.com
- Paizo: https://paizo.com/pathfinderRPG

## Licentie

MIT — vrij te gebruiken, aan te passen en te delen. Niet gelieerd aan Paizo Publishing. Pathfinder is een geregistreerd handelsmerk van Paizo Inc.
