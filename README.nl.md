# Pathfinder 1e — Digitaal Karakterblad

[![Versie](https://img.shields.io/badge/versie-2.3.0-8b1a1a?style=for-the-badge)]()
[![Pathfinder 1e](https://img.shields.io/badge/Pathfinder-1e-8b1a1a?style=for-the-badge)](https://paizo.com/pathfinderRPG)
[![HTML](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-geen%20framework-2a4a6b?style=for-the-badge)]()

Een overzichtelijk, printbaar en **adaptief** digitaal karakterblad voor Pathfinder 1e. Werkt voor alle klassen — Fighter, Warpriest, Druid, Alchemist, Bard, Cleric, en alles daartussenin.

**Live:** https://pixelkeep.github.io/pathfinder1e-sheet

---

## Functies

- **Automatische berekeningen** — modifiers, AC, saves, CMB/CMD, initiative, alle 38 skill totalen, aanvals- en schadetotalen voor wapens
- **Adaptieve pagina's** — class abilities, feats, spells en klasse-specifieke blokken veranderen automatisch op basis van klasse en level
- **Feat autocomplete** — typ 2+ letters om te zoeken in 80+ feats; vult beschrijving automatisch in en koppelt wapengerelateerde feats aan wapenslots
- **Godheid-perks** — zichtbaar in setup-paneel; +4 sacred bonussen worden automatisch verwerkt in relevante skill-checks
- **Wapenbreakdown** — BAB + STR/DEX + enhancement + feats + misc, met materiaalbonussen en Sacred Weapon vergelijking
- **Wands & combat magic** — laad wands op met klikbare bolletjes, aanval-rolls, DCs en effecten
- **Klasse-eigenschappen** — profiencies, spellcasting-type en speciale regels per klasse direct uit aonprd.com
- **Klasse-vaardigheden** — automatisch ingevuld per level met resource-pool berekeningen
- **Talen-picker** — raciale standaardtalen voorgeselecteerd; bonus-talen gemarkeerd
- **Opslaan en laden** — exporteer als JSON; gebruik Git voor levelup-geschiedenis
- **Printklaar** — A4-formaat; setup-panelen verdwijnen bij printen

## Pagina's

| Pagina | Inhoud | Adaptief? |
|---|---|---|
| 1 | Ability scores, AC, saves, BAB/CMB/CMD, skills, initiative, snelheid | Vast |
| 2 | Wapens (met breakdown), Wands/staves, Feats, Class Abilities + Class Features | ✅ Per klasse/level |
| 3 | AC Items, Klasse-specifiek (Blessings, Rage, etc.), Uitrusting, Magic items, Notities, Spelloverzicht | ✅ Per klasse |
| 4 | Volledige spelltabel (0–9) of Alchemist Extracts + Bombs | ✅ Verborgen voor non-casters |
| 5 | Gevechtsreferentie, spiekbriefje, draaggewicht, campagnenotities | Vast |

## Gebruik

### GitHub Pages (aanbevolen)

Open https://pixelkeep.github.io/pathfinder1e-sheet — alle pagina's laden automatisch.

### Lokaal (alle pagina's)

```bash
python3 -m http.server   # open daarna http://localhost:8000
```

### Character Setup

1. Selecteer **Race**, **Class**, **Level**, **Size**, **Deity** in het setup-paneel
2. Vul je ability scores in
3. Klik **Apply Setup** — BAB, saves, class skills, racial traits, spell ability, resource pools en deity-perk worden automatisch ingevuld
4. Gebruik **Weapon Quick-Fill** voor wapenslots (aanval/schade automatisch berekend)
5. Gebruik **Armor Quick-Fill** voor AC items (stroomt automatisch door naar pagina 1 AC)
6. **Feat**-velden: typ om te zoeken, klik om in te vullen met wapenslot-koppeling

### Levelup bijhouden

```bash
git add characters/mijn_karakter.json
git commit -m "Level 8 — warpriest, bonus feat: Improved Critical"
git push
```

## Ondersteunde klassen

Volledige klasse-eigenschappen, vaardigheden per level en resource-formules voor:
Alchemist · Barbarian · Bard · Cleric · Druid · Fighter · Gunslinger · Inquisitor · Magus · Monk · Oracle · Paladin · Ranger · Rogue · Shaman · Skald · Sorcerer · Swashbuckler · Warpriest · Witch · Wizard

## Godheden met obedience-perk

Abadar · Andoletta · Angradd · Arqueros · Black Butterfly · Calistria · Cayden Cailean · Desna · Erastil · Gorum · Iomedae · Irori · Lamashtu · Nethys · Pharasma · Ragathiel · Rovagug · Sarenrae · Shelyn · Torag · Urgathoa · Zon-Kuthon

## Feat-database

80+ feats met autocomplete: Power Attack-keten · Weapon Focus/Specialization · Two-weapon fighting · Ranged feats · Critical hit feats · Maneuver feats · Divine feats · Metamagic · Item Creation · General feats

## Bronnen

- Regels en data: **Archives of Nethys** — https://aonprd.com
- Paizo: https://paizo.com/pathfinderRPG

## Licentie

MIT — vrij te gebruiken, aan te passen en te delen. Niet gelieerd aan Paizo Publishing. Pathfinder is een geregistreerd handelsmerk van Paizo Inc.
