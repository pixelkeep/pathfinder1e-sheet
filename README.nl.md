# Pathfinder 1e — Digitaal Karakterblad

[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1e-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-geen%20framework-2a4a6b?style=for-the-badge)]()
[![License](https://img.shields.io/badge/Licentie-MIT-8b6f3e?style=for-the-badge)](LICENSE)

Een overzichtelijk, printbaar digitaal karakterblad voor Pathfinder 1e. Werkt voor alle klassen — Fighter, Warpriest, Druid, Alchemist, Bard, Cleric, en alles daartussenin. Volledig offline bruikbaar als lokaal HTML-bestand, of via GitHub Pages als gedeelde link.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Functies

- **Automatische berekeningen** — modifiers, AC, saves, CMB/CMD, initiative en alle 38 skill totalen worden automatisch bijgewerkt
- **Class skill bijhouden** — klik op het bolletje naast een skill om het als class skill te markeren; de +3 bonus wordt automatisch toegepast zodra je ranks invult
- **Opslaan en laden** — exporteer je karakter als JSON-bestand en laad het op elk moment terug; bewaar JSON-bestanden in `characters/` voor versiebeheer via Git
- **Printklaar** — `@media print` zorgt voor een nette A4-uitdraai per pagina; de werkbalk verdwijnt automatisch
- **Werkt offline** — pagina's 1 en 2 open je direct in je browser; pagina's 3–5 hebben een lokale server nodig (zie hieronder)
- **GitHub Pages** — zet dezelfde bestanden online en deel een link met je spelgroep

## Pagina's

| Pagina | Inhoud | Verplicht? |
|---|---|---|
| 1 | Ability scores, AC, saves, BAB, CMB/CMD, initiative, skills, wapens, snelheid | Kern |
| 2 | AC-items, uitrusting, geld, XP, feats, speciale vaardigheden, spelloverzicht | Kern |
| 3 | Generieke resource pools, dagelijkse vaardigheden, Alchemist extracts, volledige spelltabel (level 0–9) met slot-trackers en spellnaamvelden | Optioneel |
| 4 | Gevechtsreferentie — actietypes, gevechtsmodifiers, aanvallen van gelegenheid, concentratie-DCs, alle condities (van aonprd.com) | Optioneel |
| 5 | Spiekbriefje — jouw go-to acties, draaggewicht (automatisch op basis van STR), buff/conditie-tracker, spellcasting-snelreferentie, campagnenotities | Optioneel |

Pagina's 3–5 zijn optioneel. Spelers die alleen de kernstatistieken nodig hebben kunnen pagina's 1 en 2 afdrukken en daarmee klaar zijn.

## Wat automatisch wordt berekend

| Veld | Gebaseerd op |
|---|---|
| Ability modifiers | Ability score (inclusief tijdelijke score) |
| Initiative | Dex modifier + misc |
| AC / Touch / Flat-Footed | 10 + armor + shield + dex + size + natural + deflect + misc |
| Armor bonus | Opgehaald uit de AC Items-tabel op pagina 2 |
| Fortitude / Reflex / Will | Base save + ability mod + magic + misc + temp |
| CMB | BAB + Str + size + misc |
| CMD | 10 + BAB + Str + Dex + size |
| Skill totalen | Ability mod + ranks + misc + class skill bonus |
| Spell save DC | 10 + spelllevel + casting ability modifier |
| Concentration | Caster level + casting ability modifier |
| Draaggewicht | STR score → licht / medium / zwaar / tillen / duwen |

## Bestanden

```
pathfinder1e-sheet/
├── index.html       Pagina's 1 en 2 — het kerndeel van het blad
├── pages35.html     Pagina's 3–5 — spells, resources, gevechtsreferentie, spiekbriefje
├── style.css        Opmaak en printstijlen voor alle pagina's
├── sheet.js         Berekeningen, skilltabel, opslaan/laden, pagina's 3–5 logica
├── README.md        Handleiding in het Engels
├── README.nl.md     Deze handleiding
└── characters/      Bewaar je JSON-bestanden hier
    └── example.json
```

## Gebruik

### GitHub Pages (aanbevolen — geen installatie nodig)

Open https://pixelkeep.github.io/pathfinder1e-sheet in je browser. Alle 5 pagina's laden automatisch. Sla je karakter lokaal op als JSON-bestand.

### Lokaal met een server (alle 5 pagina's)

Pagina's 3–5 laden via `fetch()` en hebben een lokale server nodig. Start er een in de repo-map:

```bash
# Python (standaard aanwezig op macOS en Linux)
python3 -m http.server

# Node.js
npx serve .
```

Open daarna http://localhost:8000 in je browser.

### Lokaal zonder server (pagina's 1 en 2)

Dubbelklik op `index.html`. Pagina's 1 en 2 werken volledig. Er verschijnt een melding met een link om pagina's 3–5 apart te openen.

### Opslaan en laden

1. Vul je karakter in
2. Klik op **Save** — downloadt `karakternaam.json` naar je computer
3. Verplaats het bestand naar de map `characters/` in de repo
4. Klik op **Load** om het op elk moment te herstellen

### Levelup bijhouden

```bash
# Na het opslaan van je bijgewerkte JSON
git add characters/mijn_karakter.json
git commit -m "Level 5 — warpriest, feat Hammer the Gap toegevoegd"
git push
```

Elke commit is een momentopname van je karakter op dat level. Je kunt altijd terugkijken.

## Delen met je spelgroep

1. Ga naar je repo op GitHub → **Settings → Pages**
2. Kies bij **Source**: `main`-branch, `/ (root)`
3. Klik op **Save** — je sheet is nu bereikbaar via `https://pixelkeep.github.io/pathfinder1e-sheet`
4. Elke speler slaat zijn eigen JSON-bestand lokaal op

## Class resources (pagina 3)

De resource pool-tracker op pagina 3 is generiek — label elke rij voor jouw klasse:

| Klasse | Te tracken resources |
|---|---|
| Warpriest | Fervor (pool), Blessings/dag, Sacred Weapon enhancement |
| Alchemist | Bombs/dag (pool), Mutagen/dag; gebruik de Extracts-sectie voor formulae |
| Magus | Arcane Pool (pool), Spell Combat |
| Barbarian | Rage rounds (pool) |
| Paladin | Lay on Hands/dag, Mercy-gebruik, Smite Evil/dag |
| Oracle / Cleric | Channel Energy/dag, Domain powers/dag |
| Monk | Ki pool (pool), Stunning Fist/dag |
| Gunslinger | Grit (pool) |
| Bard / Skald | Bardic Performance rounds (pool) |
| Fighter | Stamina points (optionele regels) |

## Browsers

- Chrome / Chromium 110+
- Firefox 110+
- Edge 110+
- Safari 16+

## Bijdragen

Pull requests zijn welkom. Als je een berekeningsfout of ontbrekend veld vindt, open dan een issue met een beschrijving van het probleem en het verwachte resultaat volgens de Pathfinder 1e-regels.

## Licentie

MIT — vrij te gebruiken, aan te passen en te delen. Niet gelieerd aan Paizo Publishing. Pathfinder is een geregistreerd handelsmerk van Paizo Inc.

## Bronnen

- Archives of Nethys (officiële Pathfinder 1e SRD): https://aonprd.com
- Paizo: https://paizo.com/pathfinderRPG
