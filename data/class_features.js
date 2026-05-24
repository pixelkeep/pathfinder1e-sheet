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

// ══════════════════════════════════════════════════
// CLASS ABILITIES — per level, per class
// ══════════════════════════════════════════════════
const CLASS_ABILITIES = {

  warpriest: [
    { level:1,  name:'Aura',                   type:'passive',  description:'Powerful aura matching deity alignment.' },
    { level:1,  name:'Blessings (minor)',       type:'resource', description:'Two blessings from deity domains. Minor power usable 3+½lvl/day. Swift action.', resource:'blessings_per_day' },
    { level:1,  name:'Fervor',                 type:'resource', description:'½lvl+WIS uses/day. Heals 1d6+1d6/3lvls. Or: cast prepared spell on self as swift action.', resource:'fervor_pool' },
    { level:1,  name:'Orisons',                type:'passive',  description:'Cast 0-level cleric spells at will.' },
    { level:1,  name:'Sacred Weapon — Focus',  type:'weapon',   description:'Weapon Focus as bonus feat for chosen weapon.', weaponLinked:true },
    { level:1,  name:'Sacred Weapon — Damage', type:'weapon',   description:'Override weapon damage die per level: 1d6→1d8→1d10→2d6→2d8.', weaponLinked:true },
    { level:1,  name:'Spontaneous Casting',    type:'passive',  description:'Sacrifice prepared spell to cast cure/inflict wounds of same level.' },
    { level:3,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Any combat feat; treat warpriest level as fighter level.', bonusFeatCount:1 },
    { level:4,  name:'Channel Energy',         type:'active',   description:'Spend 2 Fervor: heal/harm 30-ft burst. DC 10+½lvl+WIS.', resource:'fervor_pool' },
    { level:4,  name:'Sacred Weapon — Enhance',type:'weapon',   description:'Swift action: +1 enhancement (+1/4 levels) for level rounds/day.', weaponLinked:true, resource:'sw_enhance_rounds' },
    { level:6,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional combat feat.', bonusFeatCount:2 },
    { level:7,  name:'Sacred Armor',           type:'armor',    description:'Swift action: enhance armor +1 (+1/6 levels) for level minutes/day.', resource:'sa_enhance_minutes' },
    { level:9,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional combat feat.', bonusFeatCount:3 },
    { level:10, name:'Blessings (major)',       type:'active',   description:'Major blessing powers now unlocked.', resource:'blessings_per_day' },
    { level:12, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional combat feat.', bonusFeatCount:4 },
    { level:15, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional combat feat.', bonusFeatCount:5 },
    { level:18, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional combat feat.', bonusFeatCount:6 },
  ],

  fighter: [
    { level:1,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Fighter bonus feat at level 1 and every even level.', bonusFeatCount:1 },
    { level:1,  name:'Bravery',                type:'passive',  description:'+1 Will vs fear at level 2, +1 per 4 levels.' },
    { level:2,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:2 },
    { level:2,  name:'Armor Training 1',       type:'passive',  description:'Reduce armor check penalty by 1, max Dex +1.' },
    { level:4,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:3 },
    { level:5,  name:'Weapon Training 1',      type:'weapon',   description:'+1 attack and damage with chosen weapon group.', weaponLinked:true },
    { level:6,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:4 },
    { level:8,  name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:5 },
    { level:10, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:6 },
    { level:12, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:7 },
    { level:14, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:8 },
    { level:16, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:9 },
    { level:18, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:10 },
    { level:20, name:'Bonus Combat Feat',      type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:11 },
  ],

  barbarian: [
    { level:1,  name:'Fast Movement',          type:'passive',  description:'+10 ft land speed (not in heavy armor).' },
    { level:1,  name:'Rage',                   type:'resource', description:'4+CON mod rounds/day (+2/level). +4 STR/CON, +2 Will, –2 AC.', resource:'rage_rounds' },
    { level:2,  name:'Rage Power',             type:'active',   description:'Select one rage power every 2 levels.' },
    { level:2,  name:'Uncanny Dodge',          type:'passive',  description:'Retain Dex to AC when flat-footed.' },
    { level:3,  name:'Trap Sense',             type:'passive',  description:'+1 Reflex/AC vs traps every 3 levels.' },
    { level:5,  name:'Improved Uncanny Dodge', type:'passive',  description:'Cannot be flanked unless rogue is 4+ levels higher.' },
    { level:7,  name:'Damage Reduction',       type:'passive',  description:'DR 1/—. +1 every 3 levels (max DR 5/— at level 19).' },
    { level:11, name:'Greater Rage',           type:'passive',  description:'+6 STR/CON, +3 Will while raging.' },
    { level:17, name:'Tireless Rage',          type:'passive',  description:'No longer fatigued after rage.' },
    { level:20, name:'Mighty Rage',            type:'passive',  description:'+8 STR/CON, +4 Will while raging.' },
  ],

  bard: [
    { level:1,  name:'Bardic Knowledge',       type:'passive',  description:'+½ level on all Knowledge; use untrained.' },
    { level:1,  name:'Bardic Performance',     type:'resource', description:'4+CHA mod rounds/day (+2/level). Multiple types.', resource:'bardic_performance' },
    { level:1,  name:'Inspire Courage',        type:'active',   description:'+1 morale atk/dmg/saves vs fear (scales with level).', resource:'bardic_performance' },
    { level:2,  name:'Versatile Performance',  type:'passive',  description:'Use Perform bonus for two related skills.' },
    { level:2,  name:'Well-Versed',            type:'passive',  description:'+4 saves vs bardic performance and sonic effects.' },
    { level:5,  name:'Lore Master',            type:'active',   description:'Take 10 on Knowledge. Once/day: take 20.' },
  ],

  cleric: [
    { level:1,  name:'Aura',                   type:'passive',  description:'Aura of alignment matching deity.' },
    { level:1,  name:'Channel Energy',         type:'resource', description:'3+CHA mod/day. Heal 1d6/2lvls in 30-ft burst.', resource:'channel_energy' },
    { level:1,  name:'Domains',               type:'passive',  description:'Two domains: domain power + bonus spells per level.' },
    { level:1,  name:'Spontaneous Casting',    type:'passive',  description:'Sacrifice spell to cast cure/inflict wounds.' },
  ],

  druid: [
    { level:1,  name:'Nature Bond',            type:'passive',  description:'Animal companion (as druid –3) OR domain.' },
    { level:1,  name:'Wild Empathy',           type:'active',   description:'Improve animal attitude: d20+druid lvl+CHA.' },
    { level:2,  name:'Woodland Stride',        type:'passive',  description:'Move through natural difficult terrain at full speed.' },
    { level:4,  name:'Wild Shape',             type:'resource', description:'1/day at lvl4, +1/day per 2 levels. Small/medium animal.', resource:'wild_shape' },
    { level:9,  name:'Venom Immunity',         type:'passive',  description:'Immune to all poisons.' },
  ],

  paladin: [
    { level:1,  name:'Smite Evil',             type:'resource', description:'1+1/3lvls/day. +CHA to hit, +level damage, +2 AC vs target.', resource:'smite_evil' },
    { level:2,  name:'Divine Grace',           type:'passive',  description:'+CHA modifier to all saving throws.' },
    { level:2,  name:'Lay on Hands',           type:'resource', description:'½lvl+CHA/day. Heals 1d6/2 levels.', resource:'lay_on_hands' },
    { level:3,  name:'Aura of Courage',        type:'passive',  description:'Immune to fear. Allies within 10 ft +4 vs fear.' },
    { level:3,  name:'Mercy',                  type:'passive',  description:'Lay on Hands removes one condition. New mercy every 3 levels.' },
    { level:5,  name:'Divine Bond',            type:'active',   description:'Holy weapon or mount. +1 enhancement/3 levels beyond 5th.', resource:'divine_bond' },
  ],

  ranger: [
    { level:1,  name:'Favored Enemy',          type:'passive',  description:'+2 attack/damage/skills vs chosen creature type.', weaponLinked:true },
    { level:1,  name:'Track',                  type:'passive',  description:'+½ level on Survival to track.' },
    { level:2,  name:'Combat Style Feat',      type:'bonus_feat', description:'Bonus feat from archery or TWF style.', bonusFeatCount:1 },
    { level:3,  name:'Favored Terrain',        type:'passive',  description:'+2 initiative/skills in chosen terrain.' },
    { level:4,  name:'Animal Companion',       type:'passive',  description:'Animal companion as druid of level –3.' },
    { level:6,  name:'Combat Style Feat',      type:'bonus_feat', description:'Additional combat style feat.', bonusFeatCount:2 },
    { level:9,  name:'Evasion',                type:'passive',  description:'Reflex save for no damage.' },
    { level:10, name:'Combat Style Feat',      type:'bonus_feat', description:'Additional combat style feat.', bonusFeatCount:3 },
  ],

  rogue: [
    { level:1,  name:'Sneak Attack',           type:'passive',  description:'+1d6 on flanked/flat-footed. +1d6 every 2 levels.' },
    { level:1,  name:'Trapfinding',            type:'passive',  description:'+½ level Perception vs traps. Disable Device on magic traps.' },
    { level:2,  name:'Evasion',                type:'passive',  description:'Reflex save for no damage.' },
    { level:2,  name:'Rogue Talent',           type:'active',   description:'Select one rogue talent every 2 levels.' },
    { level:4,  name:'Uncanny Dodge',          type:'passive',  description:'Retain Dex to AC when flat-footed.' },
    { level:10, name:'Advanced Talents',       type:'active',   description:'Talent selection expands to advanced rogue talents.' },
  ],

  alchemist: [
    { level:1,  name:'Alchemy',                type:'passive',  description:'+level on Craft (alchemy). Brew as wizard creates scrolls.' },
    { level:1,  name:'Bomb',                   type:'resource', description:'level+INT mod/day. 1d6+INT fire +1d6/2lvls. Range 20 ft.', resource:'bombs_per_day' },
    { level:1,  name:'Mutagen',                type:'resource', description:'1/day, 10 min/level. +4 physical ability, –2 mental, +2 AC.', resource:'mutagen_per_day' },
    { level:2,  name:'Discovery',              type:'active',   description:'Select one discovery every 2 levels.' },
    { level:3,  name:'Swift Alchemy',          type:'passive',  description:'Create alchemical items in half time. Apply poison as move action.' },
    { level:14, name:'Persistent Mutagen',     type:'passive',  description:'Mutagen lasts indefinitely.' },
  ],

  monk: [
    { level:1,  name:'Flurry of Blows',        type:'active',   description:'Full-attack at highest BAB –2, extra strike.' },
    { level:1,  name:'Unarmed Strike',         type:'weapon',   description:'1d6 unarmed (medium). Treated as natural and manufactured.', weaponLinked:true },
    { level:1,  name:'Stunning Fist',          type:'resource', description:'level/day. Fort DC 10+½lvl+WIS or stunned 1 round.', resource:'stunning_fist' },
    { level:2,  name:'Evasion',                type:'passive',  description:'Reflex save for no damage.' },
    { level:4,  name:'Ki Pool',                type:'resource', description:'½lvl+WIS ki points. Extra attack, +20 speed, +4 Stealth.', resource:'ki_pool' },
    { level:5,  name:'Purity of Body',         type:'passive',  description:'Immune to all diseases.' },
    { level:9,  name:'Improved Evasion',       type:'passive',  description:'Failed Reflex save = half damage.' },
  ],

  magus: [
    { level:1,  name:'Arcane Pool',            type:'resource', description:'½lvl+INT points. Swift: +1 magic enhancement (1 min).', resource:'arcane_pool' },
    { level:1,  name:'Spell Combat',           type:'active',   description:'Full-round: attack AND cast one magus spell. –2 all attacks.' },
    { level:2,  name:'Spellstrike',            type:'active',   description:'Deliver touch spells through weapon attacks.' },
    { level:3,  name:'Magus Arcana',           type:'active',   description:'Select one magus arcana every 3 levels.' },
    { level:5,  name:'Bonus Feat',             type:'bonus_feat', description:'Combat or metamagic feat.', bonusFeatCount:1 },
    { level:7,  name:'Medium Armor',           type:'passive',  description:'Cast arcane spells in medium armor without failure.' },
  ],
};

// ── CLASS RESOURCES ──────────────────────────────────
const CLASS_RESOURCES = {
  warpriest: [
    { id:'fervor_pool',        label:'Fervor/day',               formula: (lvl,m) => Math.floor(lvl/2) + m.wis },
    { id:'blessings_per_day',  label:'Blessings/day',            formula: (lvl)   => 3 + Math.floor(lvl/2) },
    { id:'sw_enhance_rounds',  label:'Sacred Weapon rounds/day', formula: (lvl)   => lvl },
    { id:'sa_enhance_minutes', label:'Sacred Armor min/day',     formula: (lvl)   => lvl, minLevel:7 },
  ],
  fighter:   [],
  barbarian: [
    { id:'rage_rounds',        label:'Rage rounds/day', formula: (lvl,m) => 4 + m.con + (lvl-1)*2 },
  ],
  bard: [
    { id:'bardic_performance', label:'Bardic Performance/day', formula: (lvl,m) => 4 + m.cha + (lvl-1)*2 },
  ],
  cleric: [
    { id:'channel_energy',     label:'Channel Energy/day', formula: (lvl,m) => 3 + m.cha },
  ],
  druid: [
    { id:'wild_shape',         label:'Wild Shape/day', formula: (lvl) => Math.max(0, Math.floor((lvl-2)/2)) },
  ],
  paladin: [
    { id:'smite_evil',         label:'Smite Evil/day',    formula: (lvl) => 1 + Math.floor((lvl-1)/3) },
    { id:'lay_on_hands',       label:'Lay on Hands/day',  formula: (lvl,m) => Math.floor(lvl/2) + m.cha },
    { id:'divine_bond',        label:'Divine Bond min/day',formula: (lvl) => lvl, minLevel:5 },
  ],
  ranger:   [],
  rogue:    [],
  alchemist: [
    { id:'bombs_per_day',      label:'Bombs/day',     formula: (lvl,m) => lvl + m.int },
    { id:'mutagen_per_day',    label:'Mutagen/day',   formula: () => 1 },
  ],
  monk: [
    { id:'stunning_fist',      label:'Stunning Fist/day', formula: (lvl) => lvl },
    { id:'ki_pool',            label:'Ki Pool',           formula: (lvl,m) => Math.floor(lvl/2) + m.wis },
  ],
  magus: [
    { id:'arcane_pool',        label:'Arcane Pool', formula: (lvl,m) => Math.floor(lvl/2) + m.int },
  ],
};

// ── HELPERS ──────────────────────────────────────────
function getClassAbilitiesForLevel(className, level) {
  const abilities = (typeof CLASS_ABILITIES !== 'undefined') ?
    (CLASS_ABILITIES[className] || []) : [];
  return abilities.filter(a => a.level <= level);
}

function getBonusFeatCount(className, level) {
  const abilities = getClassAbilitiesForLevel(className, level)
    .filter(a => a.type === 'bonus_feat');
  return abilities.length > 0
    ? (abilities[abilities.length-1].bonusFeatCount || abilities.length)
    : 0;
}

function getResourcePools(className, level, abilityMods) {
  const resources = (typeof CLASS_RESOURCES !== 'undefined') ?
    (CLASS_RESOURCES[className] || []) : [];
  return resources
    .filter(r => !r.minLevel || level >= r.minLevel)
    .map(r => ({
      id:    r.id,
      label: r.label,
      max:   r.formula(level, abilityMods),
    }));
}


// ══════════════════════════════════════════════════
// WARPRIEST BLESSINGS
// Source: ACG p.60 — each blessing has minor (1st level) and major (10th level)
// ══════════════════════════════════════════════════
const WARPRIEST_BLESSINGS = {
  "Air": {
    minor: "Zephyr's Gift (minor): Touch one ally. For 1 min, the ally gains a +10-ft. enhancement bonus to its land speed and can move across liquid surfaces as if under water walk.",
    major: "Wind Wall (major): Create a wind wall as the spell centered on you. The wall lasts 1 minute."
  },
  "Animal": {
    minor: "Animal Fury (minor): Touch one ally. For 1 min, the ally gains two claw attacks (1d6 for Medium, 1d4 for Small) or one bite attack (1d8 for Medium, 1d6 for Small). Primary natural attacks.",
    major: "Battle Companion (major): Summon Nature's Ally V (duration 1 min, one animal only). Every 2 levels beyond 10th, increases by one spell level (max Summon Nature's Ally IX at 18th)."
  },
  "Artifice": {
    minor: "Crafter's Wrath (minor): Touch one melee weapon. For 1 min, whenever it deals damage to constructs or objects, it bypasses hardness and damage reduction.",
    major: "Transfer Magic (major): Transfer a +1 or +2 weapon/armor special ability from one item to another (both bearers willing, touch both). Lasts 1 minute, then returns to source."
  },
  "Chaos": {
    minor: "Anarchic Strike (minor): Touch one weapon. For 1 min, deals +1d6 damage against lawful creatures and is treated as chaotic for overcoming DR. Doesn't stack with anarchic weapon ability.",
    major: "Battle Companion (major): Summon Monster IV (duration 1 min, one chaotic outsider or entropic animal only). Every 2 levels beyond 10th, increases by one spell level (max IX at 20th)."
  },
  "Charm": {
    minor: "Charming Presence (minor): Touch one ally. For 1 min, ally functions as sanctuary (if ally attacks opponent, effect ends for that opponent). Mind-affecting effect.",
    major: "Dominance Aura (major): 30-ft aura for 1 min. Once per round as swift action, issue command (as the command spell, Will negates) to one creature within 30 ft."
  },
  "Community": {
    minor: "Communal Aid (minor): Touch one ally. For 1 min, whenever that ally uses aid another, the bonus granted increases to +4. Can use on self as swift action.",
    major: "Fight as One (major): For 1 min, when you succeed at a melee/ranged attack, allies within 10 ft gain +2 insight bonus on attacks of the same type against that foe. +4 on a critical hit until your next turn."
  },
  "Darkness": {
    minor: "Enshrouding Darkness (minor): Touch one ally. For 1 min, the ally gains concealment (20% miss chance) in combat. Creatures that see in supernatural darkness ignore this.",
    major: "Darkened Vision (major): One foe within 30 ft, Will save or blinded for 1 minute (as blindness/deafness)."
  },
  "Death": {
    minor: "From the Grave (minor): Take on a corpse-like visage for 1 min. Gain +4 bonus on Disguise/Intimidate checks and +2 profane bonus on saves vs. disease, mind-affecting, paralysis, poison, and stunning.",
    major: "Death's Touch (major): Melee touch attack — inflict 1 temporary negative level for 1 min. Alternatively, swift action when hitting with melee attack. Negative levels stack. You gain no benefit."
  },
  "Destruction": {
    minor: "Destructive Attacks (minor): Touch one ally. For 1 min, the ally gains a morale bonus on weapon damage rolls equal to half your warpriest level (minimum 1).",
    major: "Heart of Carnage (major): Touch one ally. For 1 min, the ally gains +4 insight bonus to confirm critical hits and has 50% chance to treat any critical hit or sneak attack against it as a normal hit."
  },
  "Earth": {
    minor: "Acid Strike (minor): Touch one weapon. For 1 min, deals +1d4 acid damage per hit. Doesn't stack with the corrosive weapon special ability.",
    major: "Armor of Earth (major): Touch one ally. For 1 min, gains DR 1/—. Every 2 levels beyond 10th, DR increases by 1 (max DR 5/— at 18th). Doesn't stack with other DR."
  },
  "Evil": {
    minor: "Unholy Strike (minor): Touch one weapon. For 1 min, deals +1d6 damage against good creatures and treated as evil for overcoming DR. Doesn't stack with unholy weapon ability.",
    major: "Battle Companion (major): Summon Monster IV (duration 1 min, one evil outsider or fiendish animal only). Every 2 levels beyond 10th, increases by one spell level (max IX at 20th)."
  },
  "Fire": {
    minor: "Fire Strike (minor): Touch one weapon. For 1 min, deals +1d4 fire damage per hit. Doesn't stack with flaming or flaming burst weapon ability.",
    major: "Armor of Flame (major): Touch one ally to wreathe it in flames. Functions as fire shield (warm shield only), duration 1 minute."
  },
  "Glory": {
    minor: "Glorious Presence (minor): Touch one ally. For 1 min, functions as sanctuary (if ally attacks opponent, effect ends for that opponent). Mind-affecting effect.",
    major: "Demoralizing Glory (major): When you successfully damage an opponent with a melee attack or attack spell, as a swift action attempt to demoralize that opponent using your Intimidate ranks or warpriest level (whichever is higher)."
  },
  "Good": {
    minor: "Holy Strike (minor): Touch one weapon. For 1 min, deals +1d6 damage against evil creatures and treated as good for overcoming DR. Doesn't stack with holy weapon ability.",
    major: "Battle Companion (major): Summon Monster IV (duration 1 min, one good outsider or celestial animal only). Every 2 levels beyond 10th, increases by one spell level (max IX at 20th)."
  },
  "Healing": {
    minor: "Powerful Healer (minor): Swift action — treat any cure spell as if empowered (Empower Spell feat), healing 50% more damage. Doesn't stack with itself or Empower Spell feat.",
    major: "Fast Healing (major): Touch one ally, grant it fast healing 3 for 1 minute."
  },
  "Knowledge": {
    minor: "Lore Keeper (minor): Successful touch attack — gain knowledge as if your Knowledge check result equaled 15 + your warpriest level + your Wisdom modifier.",
    major: "Monster Lore (major): When you succeed at a Knowledge check against a foe (or lore keeper touch), as a swift action gain +2 insight bonus on attacks, saves, ability checks, skill checks, and AC against that creature for 1 minute."
  },
  "Law": {
    minor: "Axiomatic Strike (minor): Touch one weapon. For 1 min, deals +1d6 damage against chaotic creatures and treated as lawful for overcoming DR. Doesn't stack with axiomatic weapon ability.",
    major: "Battle Companion (major): Summon Monster IV (duration 1 min, one lawful outsider or resolute animal only). Every 2 levels beyond 10th, increases by one spell level (max IX at 20th)."
  },
  "Liberation": {
    minor: "Liberation (minor): Swift action — ignore impediments to movement and effects that cause paralysis for 1 round (as freedom of movement). Can activate even if unable to take actions.",
    major: "Freedom's Shout (major): Swift action — emit 30-ft aura for 1 round. All allies within gain the liberation minor blessing effect."
  },
  "Luck": {
    minor: "Lucky Presence (minor): Touch one ally. The ally can roll any one ability check, attack roll, saving throw, or skill check twice and take the better result. Must declare before rolling. Lasts 1 minute or until used.",
    major: "Unlucky Enemy (major): Immediate action — force an adjacent opponent to reroll an ability check, attack roll, saving throw, or skill check it just made; it must take the lower roll. Declare after roll but before result."
  },
  "Madness": {
    minor: "Madness Supremacy (minor): Swift action — target a creature within 30 ft with a cowering/frightened/panicked/paralyzed condition. Condition suspended 1 round; creature gains confused (rerolls results other than 'attack self/nearest'). Then condition resumes.",
    major: "Control Madness (major): Swift action — choose one behavior for all confused creatures within 30 ft for 1 round. Can use while confused yourself."
  },
  "Magic": {
    minor: "Hand of the Acolyte (minor): Make a single melee weapon attack at range 30 ft (treated as ranged thrown weapon). Add Wisdom modifier to attack roll instead of Dexterity. Cannot use for combat maneuvers.",
    major: "Blessed Magic (major): Cast one prepared warpriest spell without expending its slot. Spell must have 1-standard-action casting time and be at least 3 levels below your highest castable level. Must damage/penalize a creature."
  },
  "Nobility": {
    minor: "Inspiring Word (minor): Creature within 30 ft gains +2 morale bonus on attack rolls, ability checks, skill checks, or saving throws (your choice) for 1 minute.",
    major: "Lead by Example (major): Swift action — if next action you take is an attack or skill check, all allies within 30 ft who take the same action against the same foe on their next turn gain +4 morale bonus on that roll."
  },
  "Plant": {
    minor: "Creeping Vines (minor): When you hit with a melee attack, as a swift action the creature you hit must succeed at a Reflex save or be entangled for 1 round.",
    major: "Battle Companion (major): Summon Nature's Ally IV (duration 1 min, one creature whose type changes to plant). Every 2 levels beyond 10th, increases by one spell level (max IX at 20th)."
  },
  "Protection": {
    minor: "Increased Defense (minor): Gain +1 sacred bonus on saving throws and +1 sacred bonus to AC for 1 minute. Bonus increases to +2 at 10th level and +3 at 20th level.",
    major: "Aura of Protection (major): 30-ft aura for 1 min. You and allies gain resistance 10 vs. acid, cold, electricity, fire, and sonic. Increases to resistance 20 at 15th level."
  },
  "Repose": {
    minor: "Gentle Rest (minor): Melee touch attack — living creature becomes staggered for 1 round (if already staggered, falls asleep for 1 round). Undead is staggered for rounds equal to your Wisdom modifier (min 1).",
    major: "Back to the Grave (major): When channeling energy to heal living creatures, swift action on same turn to also deal damage to undead (half the amount healed; normal save for half)."
  },
  "Rune": {
    minor: "Blast Rune (minor): Create a blast rune in an adjacent square. Creature entering takes 1d6 + ½ level damage (acid/cold/electricity/fire, chosen on creation). Lasts level rounds or until discharged. DC 26 Perception/Disable Device.",
    major: "Spell Storing Weapon (major): Cast a spell into a magic weapon as if it had the spell storing special ability. If not used within 10 minutes, it dissipates."
  },
  "Strength": {
    minor: "Strength Surge (minor): Swift action — gain enhancement bonus equal to ½ warpriest level (min +1) on melee attack rolls, CMB (Strength-based), Strength skill checks, and Strength checks for 1 round.",
    major: "Strength of Will (major): Swift action — ignore movement penalties from medium/heavy armor or load for 1 min. Add Strength modifier on saves vs. entangled, staggered, or paralyzed."
  },
  "Sun": {
    minor: "Blinding Strike (minor): One opponent is blinded for 1 round (Reflex save: dazzled instead). Light blindness/sensitivity creatures take −4 penalty on save. Light effect; sightless creatures unaffected.",
    major: "Cleansing Fire (major): Touch a weapon and grant it flaming or undead-bane for 1 min. Spend two uses of blessing to grant both special abilities."
  },
  "Travel": {
    minor: "Agile Feet (minor): Swift action — for 1 round, ignore all difficult terrain (including magical) and take no penalties for moving through it.",
    major: "Dimensional Hop (major): Teleport up to 20 ft as a move action (line of sight required, no AoO). Each additional use spent adds 20 ft. Each additional willing creature transported costs 1 extra use."
  },
  "Trickery": {
    minor: "Double (minor): Move action — create one illusory double (as mirror image) for level rounds, or until dispelled/destroyed. No more than one double at a time. Doesn't stack with mirror image.",
    major: "Greater Invisibility (major): You become invisible (as greater invisibility) for 1 round per warpriest level. Unlike normal invisibility, this doesn't end when you attack."
  },
  "War": {
    minor: "War Mind (minor): Swift action (affects YOU only). Gain a +1 insight bonus on one of the following: attack rolls, AC, or saving throws for 1 minute. At the start of each subsequent round, you can switch to a different type of bonus as a free swift action.",
    major: "Battle Lust (major): Touch one ALLY (not yourself). For 1 minute, the ally gains a +2 morale bonus on attack rolls and a +2 morale bonus to AC, and its melee attacks deal an additional 1d6 damage. However, the ally must make a melee attack each round if possible."
  },
  "Water": {
    minor: "Ice Strike (minor): Touch one weapon. For 1 min, deals +1d4 cold damage per hit. Doesn't stack with the frost or icy burst weapon special ability.",
    major: "Armor of Ice (major): Touch one ally to cover it in protective ice. Functions as fire shield (chill shield only), duration 1 minute."
  },
  "Weather": {
    minor: "Storm Strike (minor): Touch one weapon. For 1 min, deals +1d4 electricity damage per hit. Doesn't stack with the shock or shocking burst weapon special ability.",
    major: "Wind Wall (major): Create a wind wall as the spell. The wall lasts 1 minute."
  },
};
function searchBlessings(query) {
  const q = (query || '').toLowerCase();
  return Object.entries(WARPRIEST_BLESSINGS)
    .filter(([name]) => !q || name.toLowerCase().startsWith(q))
    .slice(0, 20);
}
