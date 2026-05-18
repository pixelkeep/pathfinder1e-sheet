/* Pathfinder 1e Sheet — Spells Database — CRB + APG + ACG with autocomplete data
   Source: aonprd.com
   Part of split data files — loaded in order by index.html
*/
'use strict';

const SPELLS_DB = [

  // ── CURE / HEALING ──────────────────────────────
  { name:'Cure Light Wounds',
    school:'Conjuration (healing)', level:{Clr:1,Drd:1,Wpr:1,Pal:1,Rgr:2,Brd:2},
    castTime:'Standard', range:'Touch', duration:'Instant',
    saveDC:'Will half (harmless)', sr:'Yes (harmless)',
    calcValue:'1d8 + 1/level (max +5)',
    description:'Heals target for 1d8 + 1 per caster level (max +5). On undead: 1d8+1/level damage (Will half).' },

  { name:'Cure Moderate Wounds',
    school:'Conjuration (healing)', level:{Clr:2,Drd:3,Wpr:2,Pal:3,Rgr:3,Brd:2},
    castTime:'Standard', range:'Touch', duration:'Instant',
    saveDC:'Will half (harmless)', sr:'Yes (harmless)',
    calcValue:'2d8 + 1/level (max +10)',
    description:'Heals target for 2d8 + 1 per caster level (max +10).' },

  { name:'Cure Serious Wounds',
    school:'Conjuration (healing)', level:{Clr:3,Drd:4,Wpr:3,Pal:4,Rgr:4,Brd:3},
    castTime:'Standard', range:'Touch', duration:'Instant',
    saveDC:'Will half (harmless)', sr:'Yes (harmless)',
    calcValue:'3d8 + 1/level (max +15)',
    description:'Heals 3d8 + 1/level (max +15).' },

  { name:'Cure Critical Wounds',
    school:'Conjuration (healing)', level:{Clr:4,Drd:5,Wpr:4,Brd:4},
    castTime:'Standard', range:'Touch', duration:'Instant',
    saveDC:'Will half (harmless)', sr:'Yes (harmless)',
    calcValue:'4d8 + 1/level (max +20)',
    description:'Heals 4d8 + 1/level (max +20).' },

  { name:'Heal',
    school:'Conjuration (healing)', level:{Clr:6,Drd:7,Wpr:6},
    castTime:'Standard', range:'Touch', duration:'Instant',
    saveDC:'Will negates (harmless)', sr:'Yes (harmless)',
    calcValue:'10 × caster level',
    description:'Eliminates all diseases, blindness, deafness, and mental conditions. Heals 10 × CL HP.' },

  { name:'Mass Cure Light Wounds',
    school:'Conjuration (healing)', level:{Clr:5,Drd:6,Wpr:5,Brd:5},
    castTime:'Standard', range:'Close', duration:'Instant',
    saveDC:'Will half (harmless)', sr:'Yes (harmless)',
    calcValue:'1d8 + 1/level (max +25)',
    description:'Heals 1d8+1/level (max +25) to all targets in range.' },

  // ── BUFFS ────────────────────────────────────────
  { name:'Bless',
    school:'Enchantment (compulsion)', level:{Clr:1,Wpr:1,Pal:1},
    castTime:'Standard', range:'50 ft.', duration:'1 min/level',
    saveDC:'None', sr:'Yes',
    calcValue:'+1 morale to attacks and saves vs fear',
    description:'Allies within 50 ft. gain +1 morale bonus on attack rolls and saves vs fear.' },

  { name:'Divine Favor',
    school:'Evocation', level:{Clr:1,Wpr:1,Pal:1,Inq:1},
    castTime:'Standard', range:'Personal', duration:'1 min',
    saveDC:'None', sr:'No',
    calcValue:'+1 luck per 3 levels (max +3) to attacks and damage',
    description:'You gain +1 luck bonus per 3 caster levels (max +3) on attacks and damage.' },

  { name:'Shield of Faith',
    school:'Abjuration', level:{Clr:1,Wpr:1,Inq:1},
    castTime:'Standard', range:'Touch', duration:'1 min/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'+2 deflection AC (+1 per 6 levels, max +5)',
    description:'Target gains +2 deflection bonus to AC (+1 per 6 caster levels, max +5).' },

  { name:'Aid',
    school:'Enchantment (compulsion)', level:{Clr:2,Wpr:2},
    castTime:'Standard', range:'Touch', duration:'1 min/level',
    saveDC:'None', sr:'Yes',
    calcValue:'+1 morale atk/saves vs fear, +1d8+1/level temp HP',
    description:'+1 morale on attacks and saves vs fear. Temporary HP: 1d8 + 1/level (max +10).' },

  { name:'Prayer',
    school:'Enchantment (compulsion)', level:{Clr:3,Wpr:3,Pal:3,Inq:3},
    castTime:'Standard', range:'40 ft.', duration:'1 round/level',
    saveDC:'None', sr:'Yes',
    calcValue:'+1 luck attacks/dmg/saves/skills allies; –1 enemies',
    description:'Allies +1 luck on attacks/damage/saves/skills. Enemies –1 on all of the above.' },

  { name:'Haste',
    school:'Transmutation', level:{Sor:3,Wiz:3,Brd:3,Alc:3},
    castTime:'Standard', range:'Close', duration:'1 round/level',
    saveDC:'Fort neg (harmless)', sr:'Yes (harmless)',
    calcValue:'+1 atk, +1 AC/Ref, +30 speed, extra attack',
    description:'1 extra attack at highest BAB on full attack. +30 speed. +1 AC, +1 Ref, +1 atk.' },

  { name:"Bull's Strength",
    school:'Transmutation', level:{Clr:2,Drd:2,Pal:2,Sor:2,Wiz:2,Wpr:2},
    castTime:'Standard', range:'Touch', duration:'1 min/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'+4 enhancement to STR',
    description:'Target gains +4 enhancement bonus to Strength.' },

  { name:"Bear's Endurance",
    school:'Transmutation', level:{Clr:2,Drd:2,Rgr:2,Sor:2,Wiz:2,Wpr:2},
    castTime:'Standard', range:'Touch', duration:'1 min/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'+4 enhancement to CON',
    description:'Target gains +4 enhancement bonus to Constitution.' },

  { name:'Magic Vestment',
    school:'Transmutation', level:{Clr:3,Wpr:3},
    castTime:'Standard', range:'Touch', duration:'1 hour/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'+1 enhancement per 4 levels (max +5) to armor or shield',
    description:'Armor or shield gains +1 enhancement bonus per 4 levels (max +5).' },

  { name:'Magic Weapon',
    school:'Transmutation', level:{Clr:1,Pal:1,Wpr:1,Sor:1,Wiz:1},
    castTime:'Standard', range:'Touch', duration:'1 min/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'+1 enhancement to attack and damage',
    description:'Weapon gains +1 enhancement bonus on attack and damage rolls.' },

  { name:'Greater Magic Weapon',
    school:'Transmutation', level:{Clr:4,Pal:3,Wpr:4,Sor:3,Wiz:3},
    castTime:'Standard', range:'Close', duration:'1 hour/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'+1 per 4 levels (max +5) to attack and damage',
    description:'Weapon gains +1 enhancement per 4 caster levels (max +5) on attack and damage.' },

  // ── DAMAGE ───────────────────────────────────────
  { name:'Spiritual Weapon',
    school:'Evocation [force]', level:{Clr:2,Wpr:2,Inq:2},
    castTime:'Standard', range:'Medium', duration:'1 round/level (D)',
    saveDC:'None', sr:'Yes',
    calcValue:'1d8 + 1/3 levels force, attacks at BAB+WIS mod',
    description:'Force weapon attacks your target each round at your direction. BAB + WIS mod to hit. 1d8+1 per 3 levels force damage.' },

  { name:'Flame Strike',
    school:'Evocation [fire]', level:{Clr:5,Drd:4,Wpr:5},
    castTime:'Standard', range:'Medium', duration:'Instant',
    saveDC:'Ref half', sr:'Yes',
    calcValue:'1d6/level (max 15d6) — half fire, half divine',
    description:'10-ft radius, 40-ft tall pillar. 1d6/level (max 15d6), half fire/half divine. Ref save halves.' },

  { name:'Fireball',
    school:'Evocation [fire]', level:{Sor:3,Wiz:3},
    castTime:'Standard', range:'Long', duration:'Instant',
    saveDC:'Ref half', sr:'Yes',
    calcValue:'1d6/level (max 10d6) fire',
    description:'20-ft radius burst. 1d6 fire per level (max 10d6). Ref save halves.' },

  { name:'Lightning Bolt',
    school:'Evocation [electricity]', level:{Sor:3,Wiz:3},
    castTime:'Standard', range:'120 ft line', duration:'Instant',
    saveDC:'Ref half', sr:'Yes',
    calcValue:'1d6/level (max 10d6) electricity',
    description:'120-ft line of electricity. 1d6/level (max 10d6). Ref halves.' },

  { name:'Magic Missile',
    school:'Evocation [force]', level:{Sor:1,Wiz:1},
    castTime:'Standard', range:'Medium', duration:'Instant',
    saveDC:'None', sr:'Yes',
    calcValue:'1d4+1 per missile (1 + 1/2 levels, max 5 missiles)',
    description:'Missiles deal 1d4+1 force damage each. Automatically hit. 1 missile at level 1, +1 per 2 levels (max 5).' },

  { name:'Scorching Ray',
    school:'Evocation [fire]', level:{Sor:2,Wiz:2},
    castTime:'Standard', range:'Close', duration:'Instant',
    saveDC:'None', sr:'Yes',
    calcValue:'4d6 fire/ray (1 ray + 1/4 levels, max 3)',
    description:'Ranged touch attacks. 4d6 fire per ray. 1 ray at level 3, 2 at level 7, 3 at level 11.' },

  { name:'Searing Light',
    school:'Evocation', level:{Clr:3,Wpr:3},
    castTime:'Standard', range:'Medium', duration:'Instant',
    saveDC:'None', sr:'Yes',
    calcValue:'1d8/2 levels (max 5d8), ×2 vs undead, 1d6/2 lvls vs constructs',
    description:'Ranged touch. 1d8/2 levels (max 5d8). Undead: full d8s per level. Constructs: 1d6/2 levels.' },

  // ── CONTROL ─────────────────────────────────────
  { name:'Hold Person',
    school:'Enchantment (compulsion)', level:{Clr:2,Wpr:2,Brd:2,Sor:2,Wiz:2,Inq:2},
    castTime:'Standard', range:'Medium', duration:'1 round/level',
    saveDC:'Will negates', sr:'Yes',
    calcValue:'DC 10 + ½ level + ability mod — paralyzed',
    description:'Humanoid target paralyzed. Will save negates. May re-save each round.' },

  { name:'Slow',
    school:'Transmutation', level:{Brd:3,Sor:3,Wiz:3},
    castTime:'Standard', range:'Close', duration:'1 round/level',
    saveDC:'Will negates', sr:'Yes',
    calcValue:'Staggered — 1 action/round, –1 atk/AC/Ref',
    description:'Up to 1 creature/level. Staggered (1 action/turn), –1 atk/AC/Reflex, –1 all per round.' },

  { name:'Entangle',
    school:'Transmutation', level:{Drd:1,Rgr:1},
    castTime:'Standard', range:'Long', duration:'1 min/level (D)',
    saveDC:'Ref partial', sr:'No',
    calcValue:'Entangled; DC Str or Ref to break free each round',
    description:'40-ft radius. Plants grab creatures. Ref to avoid; if failed, entangled. New save each round to break free.' },

  // ── UTILITY / INFORMATION ────────────────────────
  { name:'Detect Magic',
    school:'Divination', level:{Clr:0,Drd:0,Wpr:0,Brd:0,Sor:0,Wiz:0,Alc:1},
    castTime:'Standard', range:'60 ft cone', duration:'Conc., up to 1 min/level',
    saveDC:'None', sr:'No',
    calcValue:'Detects spells and magic items',
    description:'Detects spells and magic items within 60-ft cone. 1st round: presence. 2nd: number/strength. 3rd: location/school.' },

  { name:'Identify',
    school:'Divination', level:{Brd:1,Wiz:1,Sor:1,Alc:1},
    castTime:'1 min', range:'Touch', duration:'Instant',
    saveDC:'None', sr:'No',
    calcValue:'Reveals properties of magic item',
    description:'Reveals all magical properties of one item, including command words.' },

  { name:'See Invisibility',
    school:'Divination', level:{Brd:3,Sor:2,Wiz:2,Alc:2},
    castTime:'Standard', range:'Personal', duration:'10 min/level',
    saveDC:'None', sr:'No',
    calcValue:'See invisible/ethereal creatures and objects',
    description:'You see all invisible and ethereal creatures and objects as if they were normally visible.' },

  { name:'Invisibility',
    school:'Illusion (glamer)', level:{Brd:2,Sor:2,Wiz:2,Alc:2},
    castTime:'Standard', range:'Personal or Touch', duration:'1 min/level (D)',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'Invisible until attack or spell cast',
    description:'Target becomes invisible. Ends immediately when subject attacks or casts an offensive spell.' },

  { name:'Fly',
    school:'Transmutation', level:{Sor:3,Wiz:3,Clr:4,Wpr:4},
    castTime:'Standard', range:'Touch', duration:'1 min/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'Fly 60 ft (good); 40 ft in armor',
    description:'Target gains fly speed 60 ft (good maneuverability). 40 ft in medium/heavy armor.' },

  { name:'Teleport',
    school:'Conjuration (teleportation)', level:{Sor:5,Wiz:5},
    castTime:'Standard', range:'Personal + touched objects', duration:'Instant',
    saveDC:'None', sr:'Yes',
    calcValue:'Teleport anywhere on same plane',
    description:'Teleport yourself and up to 50 lbs/level to any destination on same plane. Familiarity determines error chance.' },

  { name:'Restoration',
    school:'Conjuration (healing)', level:{Clr:4,Pal:4,Wpr:4},
    castTime:'3 rounds', range:'Touch', duration:'Instant',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'Removes level drain, ability damage, conditions',
    description:'Removes one negative level. Restores all ability damage to one score. Removes fatigued, exhausted, shaken, frightened, panicked, blinded, deafened, stunned, confused, nauseated, sickened, staggered.' },

  { name:'Lesser Restoration',
    school:'Conjuration (healing)', level:{Clr:2,Drd:2,Pal:1,Rgr:2,Wpr:2},
    castTime:'3 rounds', range:'Touch', duration:'Instant',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'Removes 1d4 ability damage or fatigue/exhaustion',
    description:'Removes 1d4 ability damage from one score, OR removes fatigued or exhausted.' },

  { name:'Protection from Evil',
    school:'Abjuration', level:{Clr:1,Pal:1,Sor:1,Wiz:1,Wpr:1},
    castTime:'Standard', range:'Touch', duration:'1 min/level (D)',
    saveDC:'Will neg (harmless)', sr:'No',
    calcValue:'+2 AC and saves vs evil; blocks mental control',
    description:'+2 deflection AC and +2 resistance saves vs evil creatures. Blocks mental control/possession.' },

  { name:'Dispel Magic',
    school:'Abjuration', level:{Clr:3,Wpr:3,Drd:4,Pal:3,Sor:3,Wiz:3,Brd:3},
    castTime:'Standard', range:'Medium', duration:'Instant',
    saveDC:'None', sr:'No',
    calcValue:'1d20 + CL (max +10) vs DC 11 + caster level of effect',
    description:'Targeted: dispel one spell. Area: dispel highest-level spell per creature/object. Counterspell: negate spell being cast.' },

  { name:'Align Weapon',
    school:'Transmutation', level:{Clr:2,Wpr:2},
    castTime:'Standard', range:'Touch', duration:'1 min/level',
    saveDC:'Will neg (harmless)', sr:'Yes (harmless)',
    calcValue:'Weapon bypasses alignment-based DR',
    description:'Weapon becomes good, evil, lawful, or chaotic for DR purposes. Must match your deity\'s alignment.' },

  { name:'Consecrate',
    school:'Evocation', level:{Clr:2,Wpr:2},
    castTime:'Standard', range:'Close', duration:'2 hours/level',
    saveDC:'None', sr:'No',
    calcValue:'+3 sacred bonus to turning; undead in area –1 atk/dmg/saves',
    description:'20-ft radius. Undead in area: –1 atk/dmg/saves. +3 sacred bonus to Turn Undead checks. Blocks desecrate.' },

  // ── WARPRIEST FAVORITES ──────────────────────────
  { name:'Divine Power',
    school:'Evocation', level:{Clr:4,Wpr:4,Inq:4},
    castTime:'Standard', range:'Personal', duration:'1 round/level',
    saveDC:'None', sr:'No',
    calcValue:'+1/3 levels luck to BAB, STR, temp HP = 1/level',
    description:'You gain +1 luck bonus per 3 levels on BAB and STR. Temp HP = 1 per level.' },

  { name:'Righteous Might',
    school:'Transmutation', level:{Clr:5,Wpr:5},
    castTime:'Standard', range:'Personal', duration:'1 round/level',
    saveDC:'None', sr:'No',
    calcValue:'+2 size to STR/CON, +2 AC, Enlarge to Large',
    description:'You grow to Large size. +4 STR, +2 CON, +2 natural armor, –1 atk/AC, reach +5 ft. Weapons deal +1 size category.' },

  { name:'Word of Recall',
    school:'Conjuration (teleportation)', level:{Clr:6,Drd:8,Wpr:6},
    castTime:'Standard', range:'Unlimited', duration:'Instant',
    saveDC:'None or Will neg', sr:'Yes (harmless)',
    calcValue:'Teleport to your sanctuary',
    description:'Teleport to your sanctuary (defined at casting time). Can bring willing creatures touching you (200 lbs/level).' },

];

// Helpers
function searchSpells(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return SPELLS_DB.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.school.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q)
  ).slice(0, 10);
}

function getSpellByName(name) {
  return SPELLS_DB.find(s => s.name.toLowerCase() === name.toLowerCase()) || null;
}

function getSpellsForClass(classAbbrev, maxLevel) {
  return SPELLS_DB.filter(s =>
    s.level[classAbbrev] !== undefined &&
    s.level[classAbbrev] <= (maxLevel || 9)
  ).sort((a,b) => (a.level[classAbbrev]||0) - (b.level[classAbbrev]||0) || a.name.localeCompare(b.name));
}
