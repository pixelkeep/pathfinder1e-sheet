# Pathfinder 1e — Digitaal Karakterblad

[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1e-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-geen%20framework-2a4a6b?style=for-the-badge)]()

Een overzichtelijk, printbaar digitaal karakterblad voor Pathfinder 1e. Werkt volledig offline als lokaal HTML-bestand, of via GitHub Pages als gedeelde link — geen account, geen server, geen afhankelijkheden.

---

## Functies

- **Automatische berekeningen** — modifiers, AC, saves, CMB/CMD, initiative en skill totalen worden automatisch bijgewerkt
- **Class skill bijhouden** — klik op het bolletje naast een skill om het als class skill te markeren; de +3 bonus wordt automatisch toegepast zodra je ranks invult
- **Twee pagina's** — pagina 1 bevat de kernstatistieken en skills; pagina 2 bevat AC-items, uitrusting, geld, feats, speciale vaardigheden en spells
- **Opslaan en laden** — exporteer je karakter als JSON-bestand; laad het op elk moment terug
- **Printklaar** — `@media print` zorgt voor een nette A4-uitdraai; de werkbalk verdwijnt automatisch
- **Werkt offline** — open `index.html` direct in je browser
- **GitHub Pages** — zet dezelfde bestanden online en deel een link met je spelgroep

## Wat wordt automatisch berekend

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

## Bestanden

```
pathfinder-sheet/
├── index.html       Het complete blad (pagina 1 en 2)
├── style.css        Opmaak en printstijlen
├── sheet.js         Berekeningen, skilltabel, opslaan/laden
├── README.md        Handleiding in het Engels
├── README.nl.md     Deze handleiding
└── characters/      Sla je JSON-bestanden hier op (optioneel)
    └── voorbeeld.json
```

## Gebruik

### Lokaal (offline)

1. Download of clone deze repository
2. Open `index.html` in je browser (Chrome, Firefox of Edge aanbevolen)
3. Vul je karakter in
4. Klik op **Save** om een `.json`-bestand te exporteren; bewaar het in de map `characters/`
5. Klik op **Load** om een opgeslagen karakter te herstellen
6. Klik op **Print** of gebruik `Ctrl+P` om af te drukken

### GitHub Pages (gedeelde link)

1. Fork of push deze repository naar je eigen GitHub-account
2. Ga naar **Settings → Pages**
3. Kies bij **Source** voor de `main`-branch en `/ (root)`
4. Klik op **Save** — GitHub geeft je een URL zoals `https://jouwnaam.github.io/pathfinder-sheet`
5. Deel die link met je spelgroep

Je karakter wordt altijd lokaal opgeslagen als JSON-bestand. De site zelf slaat niets op.

### Levelup bijhouden

Omdat je karakter als JSON-bestand is opgeslagen, kun je de geschiedenis bijhouden via Git:

```bash
# Na het opslaan van je bijgewerkte karakter-JSON
git add characters/mijn_karakter.json
git commit -m "Level 5 — warpriest, feat Hammer the Gap toegevoegd"
git push
```

Elke commit is een momentopname van je karakter op dat level.

## Spells

De spelltabel (pagina 2) houdt spells known, spell save DC, spells per day en bonusspells per level bij. Een volledig interactieve spelllijst met checkboxjes per slot is gepland voor een toekomstige update. Gebruik voorlopig het tekstveld **Spell List** om je voorbereide of gekende spells te noteren.

## Gezelschapskarakters

Ondersteuning voor een tweede karakter op hetzelfde blad (animal companion, cohort) is gepland. Open voorlopig een tweede browsertabblad en laad een apart JSON-bestand.

## Browsers

Getest en werkend in:

- Chrome / Chromium 110+
- Firefox 110+
- Edge 110+
- Safari 16+

## Licentie

MIT — vrij te gebruiken, aan te passen en te delen. Niet gelieerd aan Paizo Publishing. Pathfinder is een geregistreerd handelsmerk van Paizo Inc.
