/* Pathfinder 1e Sheet — Class Features & Abilities — per level, with resources
   Source: aonprd.com
   Part of split data files — loaded in order by index.html
*/
'use strict';

const CLASS_FEATURES = {

  warpriest: {
    proficiencies: {
      weapons: 'All simple and martial weapons, plus deity\'s favored weapon.',
      armor:   'Light, medium, and heavy armor. All shields except tower shields.',
      note:    'Can cast divine spells in any armor without arcane spell failure.',
    },
    spellcasting: {
      type:       'Divine',
      ability:    'WIS',
      maxLevel:   6,
      prepared:   true,
      list:       'Cleric spell list (spells of 7th level and higher are not available).',
      bonusSpells:'Yes — based on WIS modifier.',
    },
    specialRules: [
      { name: 'Spontaneous Casting', text: 'Can sacrifice any prepared spell to cast a cure wounds (or inflict wounds if evil) spell of the same level or lower. Does not need to prepare these spells.' },
      { name: 'Aura',                text: 'Possesses a powerful aura corresponding to deity\'s alignment (detectable by detect evil/good/law/chaos).' },
      { name: 'Orisons',             text: 'Can prepare a number of orisons (0-level spells). These are not expended and can be used again.' },
      { name: 'Bonus Languages',     text: 'May learn Abyssal, Celestial, or Infernal as a bonus language (in addition to racial bonus languages).' },
    ],
    healSpells: {
      note: 'Warpriest does NOT need to prepare cure spells — they are cast spontaneously. Channel Energy (costs 2 Fervor) also heals.',
      available: ['Cure Light Wounds','Cure Moderate Wounds','Cure Serious Wounds','Cure Critical Wounds','Mass Cure Light Wounds','Heal'],
    },
  },

  fighter: {
    proficiencies: {
      weapons: 'All simple and martial weapons.',
      armor:   'All armor (light, medium, heavy). All shields including tower shields.',
      note:    '',
    },
    spellcasting: null,
    specialRules: [
      { name: 'Bonus Feats',    text: 'Gains a bonus combat feat at 1st level and every even level. Counts as fighter for feat prerequisites.' },
      { name: 'Bravery',        text: '+1 Will save vs fear at level 2, increasing by +1 every 4 levels.' },
      { name: 'Armor Training', text: 'Reduces armor check penalty and increases max Dex bonus from armor. Can move at full speed in medium/heavy armor.' },
      { name: 'Weapon Training',text: 'Gains attack and damage bonus with chosen weapon groups starting at level 5.' },
    ],
    healSpells: null,
  },

  barbarian: {
    proficiencies: {
      weapons: 'All simple and martial weapons.',
      armor:   'Light and medium armor. Shields (not tower). Cannot use heavy armor.',
      note:    'Rage class feature is lost while wearing heavy armor.',
    },
    spellcasting: null,
    specialRules: [
      { name: 'Fast Movement', text: '+10 ft land speed (unarmored or light/medium armor only).' },
      { name: 'Rage',          text: 'See class abilities. Fatigued for 2× rounds spent raging after rage ends.' },
      { name: 'Rage Powers',   text: 'Select one rage power at level 2 and every 2 levels thereafter.' },
      { name: 'Trap Sense',    text: '+1 Reflex saves and AC vs traps. Increases by +1 every 3 levels.' },
    ],
    healSpells: null,
  },

  bard: {
    proficiencies: {
      weapons: 'All simple weapons, plus longsword, rapier, sap, short sword, shortbow, and whip.',
      armor:   'Light armor and shields (not tower). Can cast spells in light armor without arcane spell failure.',
      note:    'Arcane spell failure applies with medium/heavy armor or tower shield.',
    },
    spellcasting: {
      type:     'Arcane',
      ability:  'CHA',
      maxLevel: 6,
      prepared: false,
      list:     'Bard spell list. Knows a limited number of spells (see table). Casts spontaneously.',
      bonusSpells: 'No bonus spells from CHA.',
    },
    specialRules: [
      { name: 'Bardic Knowledge',      text: '+½ level on all Knowledge checks; use any Knowledge skill untrained.' },
      { name: 'Bardic Performance',    text: 'Activate as standard action, maintain as free. Multiple performances listed as class abilities.' },
      { name: 'Countersong',           text: 'Use Perform vs sound-based magical effects within 30 ft.' },
      { name: 'Distraction',           text: 'Use Perform vs visual-based magical effects.' },
      { name: 'Fascinate',             text: 'One creature per 3 levels must make Will save or become fascinated.' },
      { name: 'Inspire Courage',       text: '+1 morale to attacks/damage/saves vs fear and charm (scales with level).' },
      { name: 'Versatile Performance', text: 'Use Perform bonus for related skills (Bluff, Diplomacy, etc.).' },
    ],
    healSpells: null,
  },

  cleric: {
    proficiencies: {
      weapons: 'All simple weapons, plus deity\'s favored weapon.',
      armor:   'Light, medium, and heavy armor. All shields except tower shields.',
      note:    '',
    },
    spellcasting: {
      type:     'Divine',
      ability:  'WIS',
      maxLevel: 9,
      prepared: true,
      list:     'Cleric spell list (full 9 levels).',
      bonusSpells: 'Yes — based on WIS modifier.',
    },
    specialRules: [
      { name: 'Spontaneous Casting', text: 'Sacrifice any prepared spell to cast cure wounds (good/neutral) or inflict wounds (evil) of same level or lower.' },
      { name: 'Orisons',             text: '0-level spells prepared; not expended on casting.' },
      { name: 'Aura',                text: 'Aura corresponding to deity alignment.' },
      { name: 'Domains',             text: 'Two domains from deity list. Each grants one domain spell slot per spell level and domain powers.' },
      { name: 'Channel Energy',      text: '3+CHA/day. Positive energy heals living / harms undead in 30-ft burst. DC 10+½lvl+CHA.' },
    ],
    healSpells: null,
  },

  druid: {
    proficiencies: {
      weapons: 'Club, dagger, dart, quarterstaff, scimitar, scythe, sickle, shortspear, sling, and spear.',
      armor:   'Light and medium non-metal armor. Wooden shields only. No metal armor.',
      note:    'Druids cannot use metal armor or metal shields (code of the wild).',
    },
    spellcasting: {
      type:     'Divine',
      ability:  'WIS',
      maxLevel: 9,
      prepared: true,
      list:     'Druid spell list (full 9 levels).',
      bonusSpells: 'Yes — based on WIS modifier.',
    },
    specialRules: [
      { name: 'Spontaneous Casting', text: 'Sacrifice any prepared spell to cast summon nature\'s ally of same level or lower.' },
      { name: 'Orisons',             text: '0-level spells prepared; not expended.' },
      { name: 'Nature Bond',         text: 'Choose animal companion (as druid of level –3) OR one domain from druid domain list.' },
      { name: 'Wild Empathy',        text: 'Improve animal attitude. d20 + druid level + CHA vs DC.' },
      { name: 'Woodland Stride',     text: 'Level 2: move through natural difficult terrain at full speed.' },
      { name: 'Trackless Step',      text: 'Level 3: leaves no trail in natural environments.' },
    ],
    healSpells: null,
  },

  paladin: {
    proficiencies: {
      weapons: 'All simple and martial weapons.',
      armor:   'All armor (light, medium, heavy). All shields including tower shields.',
      note:    'Can cast divine spells in any armor without arcane spell failure.',
    },
    spellcasting: {
      type:     'Divine',
      ability:  'CHA',
      maxLevel: 4,
      prepared: true,
      list:     'Paladin spell list (spells of 5th level and higher not available). Begins at level 4.',
      bonusSpells: 'Yes — based on CHA modifier.',
    },
    specialRules: [
      { name: 'Code of Conduct',  text: 'Must be lawful good. Cannot associate with evil creatures or condone evil acts. Violating loses all paladin abilities until atonement.' },
      { name: 'Aura of Good',     text: 'Powerful aura of good (as cleric of same level).' },
      { name: 'Detect Evil',      text: 'At will, as the spell.' },
      { name: 'Divine Grace',     text: 'Add CHA modifier to all saving throws.' },
      { name: 'Lay on Hands',     text: 'Heals 1d6/2 levels. Used as swift action on self, standard on others. Remove conditions with mercies.' },
      { name: 'Smite Evil',       text: 'Swift action. +CHA to attack, +level to damage. +2 dodge AC vs smite target. Lasts until target dead.' },
    ],
    healSpells: null,
  },

  ranger: {
    proficiencies: {
      weapons: 'All simple and martial weapons.',
      armor:   'Light and medium armor. Shields (not tower).',
      note:    '',
    },
    spellcasting: {
      type:     'Divine',
      ability:  'WIS',
      maxLevel: 4,
      prepared: true,
      list:     'Ranger spell list (spells of 5th level and higher not available). Begins at level 4.',
      bonusSpells: 'Yes — based on WIS modifier.',
    },
    specialRules: [
      { name: 'Favored Enemy',    text: 'Choose one creature type. +2 attack, damage, Bluff, Knowledge, Perception, Sense Motive, Survival vs that type. +2 more every 5 levels.' },
      { name: 'Track',            text: '+½ level on Survival checks to follow tracks.' },
      { name: 'Wild Empathy',     text: 'Improve animal attitude. d20 + ranger level + CHA.' },
      { name: 'Combat Style',     text: 'Choose archery or two-weapon fighting. Gain bonus feats from that style (ignoring prerequisites).' },
    ],
    healSpells: null,
  },

  rogue: {
    proficiencies: {
      weapons: 'All simple weapons, plus hand crossbow, rapier, sap, short sword, shortbow.',
      armor:   'Light armor only. No shields.',
      note:    '',
    },
    spellcasting: null,
    specialRules: [
      { name: 'Sneak Attack',  text: 'Extra damage when target is flanked or denied Dex bonus. +1d6 at level 1, +1d6 every 2 levels.' },
      { name: 'Trapfinding',   text: '+½ level on Perception to find traps and on Disable Device. Can disarm magical traps.' },
      { name: 'Evasion',       text: 'Level 2: Reflex save for no damage (instead of half).' },
      { name: 'Rogue Talents', text: 'Select one talent at level 2, then every 2 levels. Expands to advanced talents at level 10.' },
      { name: 'Trap Sense',    text: '+1 Reflex and AC vs traps, increasing every 3 levels.' },
    ],
    healSpells: null,
  },

  alchemist: {
    proficiencies: {
      weapons: 'All simple weapons and bombs.',
      armor:   'Light armor only. No shields.',
      note:    '',
    },
    spellcasting: {
      type:     'Extracts',
      ability:  'INT',
      maxLevel: 6,
      prepared: true,
      list:     'Alchemist formula list. Extracts function as spells but must be brewed in advance and consumed to activate.',
      bonusSpells: 'Yes — based on INT modifier (bonus extracts per day).',
    },
    specialRules: [
      { name: 'Alchemy',        text: '+level on Craft (alchemy) checks. Brew alchemical items as a spellcaster creates scrolls (as move action at level 3).' },
      { name: 'Bomb',           text: 'Level+INT mod bombs/day. 1d6+INT fire damage +1d6/2 levels. 20-ft range increment. Splash = 1 fire damage.' },
      { name: 'Mutagen',        text: '1/day, 10 min/level. +4 alchemical bonus to one physical ability, –2 to associated mental ability. +2 natural AC.' },
      { name: 'Throw Anything', text: 'No penalty for improvised thrown weapons. +1 attack with splash weapons.' },
      { name: 'Brew Potion',    text: 'Brew Potion as a bonus feat.' },
      { name: 'Discoveries',    text: 'Select one discovery at level 2, then every 2 levels. Highly varied effects.' },
    ],
    healSpells: null,
  },

  monk: {
    proficiencies: {
      weapons: 'Club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, spear.',
      armor:   'No armor. No shields. Loses class abilities if wearing armor or using shield.',
      note:    'AC bonus (WIS mod) is lost when wearing armor.',
    },
    spellcasting: null,
    specialRules: [
      { name: 'AC Bonus',         text: '+WIS modifier and +1/4 levels to AC and CMD (unarmored only, not encumbered).' },
      { name: 'Flurry of Blows',  text: 'Full-attack at highest BAB (–2 penalty on all attacks) with bonus strike. Uses two-weapon fighting penalties without off-hand.' },
      { name: 'Unarmed Strike',   text: '1d6 (medium) at level 1. Treated as both natural and manufactured weapon. Counts as magic for DR purposes at level 4.' },
      { name: 'Stunning Fist',    text: 'Bonus feat. Level uses/day. On hit: Fort DC 10+½lvl+WIS or stunned 1 round.' },
      { name: 'Ki Pool',          text: 'Spend ki to gain extra attack, +20 speed, +4 Stealth, or count attacks as magic/cold iron/silver/lawful.' },
    ],
    healSpells: null,
  },

  magus: {
    proficiencies: {
      weapons: 'All simple and martial weapons.',
      armor:   'Light armor only. Medium armor at level 7. Heavy armor at level 13.',
      note:    'Can cast arcane spells in light armor without spell failure at level 1; medium at 7; heavy at 13.',
    },
    spellcasting: {
      type:     'Arcane',
      ability:  'INT',
      maxLevel: 6,
      prepared: true,
      list:     'Magus spell list (arcane, max 6th level).',
      bonusSpells: 'Yes — based on INT modifier.',
    },
    specialRules: [
      { name: 'Spell Combat',  text: 'Full-round action: make all attacks AND cast one magus spell. –2 to all attack rolls. Must have one hand free.' },
      { name: 'Spellstrike',   text: 'Deliver touch spells through weapon attacks. Free attack of opportunity to deliver.' },
      { name: 'Arcane Pool',   text: '½lvl+INT points. Swift: enhance weapon +1 magic (+1 per 4 levels) for 1 minute.' },
      { name: 'Magus Arcana',  text: 'Select one magus arcana at level 3, then every 3 levels.' },
      { name: 'Spell Recall',  text: 'Spend arcane pool points to recall expended spells (1 pt per spell level).' },
    ],
    healSpells: null,
  },

  wizard: {
    proficiencies: {
      weapons: 'Club, dagger, heavy crossbow, light crossbow, quarterstaff.',
      armor:   'No armor. No shields. Arcane spell failure applies to all armor.',
      note:    '',
    },
    spellcasting: {
      type:     'Arcane',
      ability:  'INT',
      maxLevel: 9,
      prepared: true,
      list:     'Wizard spell list (full 9 levels). Maintains a spellbook.',
      bonusSpells: 'Yes — based on INT modifier.',
    },
    specialRules: [
      { name: 'Arcane Bond',     text: 'Choose bonded object (extra spell/day) or familiar. Familiar grants bonus based on type.' },
      { name: 'Arcane School',   text: 'Specialize in one school, gaining two school powers and bonus spells. Two opposition schools lose one spell slot each.' },
      { name: 'Scribe Scroll',   text: 'Scribe Scroll as bonus feat at level 1.' },
      { name: 'Bonus Feats',     text: 'Bonus metamagic or item creation feat at levels 5, 10, 15, 20.' },
      { name: 'Spellbook',       text: 'Knows 3+INT spells at level 1 (plus all cantrips). Learns 2 new spells per level. Can copy from scrolls/other spellbooks.' },
    ],
    healSpells: null,
  },

  sorcerer: {
    proficiencies: {
      weapons: 'All simple weapons.',
      armor:   'No armor. No shields. Arcane spell failure applies.',
      note:    '',
    },
    spellcasting: {
      type:     'Arcane',
      ability:  'CHA',
      maxLevel: 9,
      prepared: false,
      list:     'Sorcerer/Wizard spell list. Knows a limited number permanently. Casts spontaneously.',
      bonusSpells: 'No bonus spells from CHA. Bloodline grants bonus spells known.',
    },
    specialRules: [
      { name: 'Bloodline',      text: 'Choose one bloodline at level 1. Grants bonus spells known, class skills, and bloodline powers at various levels.' },
      { name: 'Eschew Materials',text: 'Eschew Materials as bonus feat.' },
      { name: 'Cantrips',        text: '0-level spells known are cast spontaneously at will.' },
    ],
    healSpells: null,
  },

  witch: {
    proficiencies: {
      weapons: 'All simple weapons.',
      armor:   'No armor. No shields.',
      note:    '',
    },
    spellcasting: {
      type:     'Arcane',
      ability:  'INT',
      maxLevel: 9,
      prepared: true,
      list:     'Witch spell list. Spells stored in and prepared from a familiar.',
      bonusSpells: 'Yes — based on INT modifier.',
    },
    specialRules: [
      { name: 'Patron',    text: 'Choose a patron at level 1. Grants bonus spells added to familiar at each level.' },
      { name: 'Familiar',  text: 'Bonded familiar stores all witch spells. If familiar dies, witch loses all spells until a new one is found (1 week). Standard familiar bonuses also apply.' },
      { name: 'Hexes',     text: 'Select one hex at level 2, then every 2 levels. Most hexes can only target each creature once per 24 hours.' },
      { name: 'Cantrips',  text: '0-level spells prepared; not expended.' },
    ],
    healSpells: null,
  },

};

// Helper: get class features for display
function getClassFeatures(className) {
  return CLASS_FEATURES[className] || null;
}

// Helper: sacred weapon damage die by level (Warpriest, medium size)
const SACRED_WEAPON_DIE = [
  null,           // 0
  '1d6','1d6','1d6','1d6',   // 1-4
  '1d8','1d8','1d8','1d8','1d8',  // 5-9
  '1d10','1d10','1d10','1d10','1d10',  // 10-14
  '2d6','2d6','2d6','2d6','2d6',  // 15-19
  '2d8',  // 20
];

function getSacredWeaponDie(level) {
  return SACRED_WEAPON_DIE[Math.min(level, 20)] || '1d6';
}


// ══════════════════════════════════════════════════
// FEATS DATABASE — CRB + APG + UC + UM
// Source: aonprd.com
// Format: { name, type, prereqs, benefit, weaponLinked, attackMod, damageMod }
// type: 'combat'|'general'|'metamagic'|'item_creation'|'teamwork'
// weaponLinked: needs weapon name specified
// ══════════════════════════════════════════════════
