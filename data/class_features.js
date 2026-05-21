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
  "Air":         { minor: "Lightning Arc: touch one creature, 1d6+½ level electricity (Ref neg).", major: "Storm Blast: 20-ft cone, 1d6/2 levels electricity + push 5 ft (Ref half)." },
  "Animal":      { minor: "Animal Fury: gain claws/bite 1d6 for 1 min.", major: "Beast Form: wild shape as druid for 1 min/level." },
  "Artifice":    { minor: "Animate Weapon: touched weapon fights for you for 1 min.", major: "Golem Form: become construct-type, DR 5/adamantine for 1 min." },
  "Chaos":       { minor: "Chaos Surge: +1d4 luck on next attack/save/skill.", major: "Unholy Ground: random effects on enemies entering 20-ft area." },
  "Charm":       { minor: "Charming Presence: +2 morale on CHA checks for 1 min.", major: "Captivating Presence: daze one creature (Will neg)." },
  "Community":   { minor: "Unity: grant adjacent ally a reroll on failed attack/save/skill.", major: "Protective Aura: allies in 30 ft gain +2 sacred AC and saves for 1 min." },
  "Darkness":    { minor: "Blind: touched creature blinded 1 round (Fort neg).", major: "Dark Shroud: 30-ft radius darkness for 1 min, enemies –2 attacks." },
  "Death":       { minor: "Deadly Touch: 1d6+½ level negative energy damage.", major: "Bleeding Wound: target bleeds for level rounds on hit." },
  "Destruction": { minor: "Destructive Smite: +½ level damage on one attack (swift).", major: "Destructive Aura: allies in 30 ft deal +level damage for 1 min." },
  "Earth":       { minor: "Acid Dart: ranged touch, 1d6+½ level acid damage.", major: "Stone Blades: melee attacks count as adamantine for 1 min." },
  "Evil":        { minor: "Touch of Evil: touched target sickened 1 round/2 levels (Fort neg).", major: "Evil Aura: undead and evil creatures ignore you unless provoked." },
  "Fire":        { minor: "Fire Bolt: ranged touch, 1d6+½ level fire damage.", major: "Wall of Fire: 20-ft wall deals 2d6+level fire damage." },
  "Glory":       { minor: "Holy Strike: +1d6 holy damage vs evil (swift).", major: "Aura of Glory: evil creatures in 30 ft frightened for 1 min." },
  "Good":        { minor: "Holy Strike: +1d6 holy damage vs evil on one attack (swift).", major: "Holy Aura: +4 sacred AC and saves vs evil for 1 min." },
  "Healing":     { minor: "Healer's Blessing: +50% healing from cure spells for 1 min.", major: "Greater Healing: cure serious wounds as spell-like ability." },
  "Knowledge":   { minor: "Lore Keeper: ask one question, get answer as divination.", major: "Remote Viewing: clairvoyance/clairaudience at range." },
  "Law":         { minor: "Touch of Law: target treated as rolling 11 on next d20.", major: "Iron Aura: attackers must pass concentration check to use magic." },
  "Liberation":  { minor: "Liberation: ignore impediments to movement for 1 round.", major: "Freedom: freedom of movement for 1 min/level." },
  "Luck":        { minor: "Bit of Luck: reroll one d20, take better result (swift).", major: "Good Fortune: two creatures reroll saves vs one attack/spell." },
  "Madness":     { minor: "Vision of Madness: +2 or –2 on attack/save for 1 round.", major: "Aura of Madness: confused creatures in 30 ft for 1 min." },
  "Magic":       { minor: "Spell Snare: counter one spell as immediate action.", major: "Wild Magic: 50% chance spells randomly alter in 60-ft area." },
  "Nobility":    { minor: "Inspiring Word: +2 morale on attacks/saves/skills for 1 rd.", major: "Leadership: allies in 30 ft gain +4 morale for 1 min." },
  "Plant":       { minor: "Wooden Fist: unarmed 1d6+½ level, count as magic for 1 min.", major: "Entangle: area entanglement, plants grasp foes." },
  "Protection":  { minor: "Deflection Aura: +2 deflection AC in 10 ft for 1 min.", major: "Aura of Protection: resist 10 and +1 sacred AC for 1 min." },
  "Repose":      { minor: "Gentle Rest: touched creature staggered 1 round (Fort neg).", major: "Ward Against Death: immune to death effects in 30 ft for 1 min." },
  "Rune":        { minor: "Blast Rune: adjacent rune explodes 1d6+½ level when triggered.", major: "Warding Rune: permanent magic circle vs alignment." },
  "Strength":    { minor: "Strength Surge: +level to one STR check or CMB (immediate).", major: "Strength of the Lion: +4 enhancement to STR for 1 min." },
  "Sun":         { minor: "Sun's Blessing: undead take +level divine damage from channel.", major: "Nimbus of Light: 30-ft daylight, +level divine damage to undead." },
  "Travel":      { minor: "Agile Feet: ignore difficult terrain for 1 round.", major: "Dimensional Hop: teleport as dimension door once per round." },
  "Trickery":    { minor: "Copycat: create mirror image (1/2 level images) for 1 min.", major: "Master's Illusion: mass suggestion for 1 min/level." },
  "Void":        { minor: "Void Embrace: cold 5 and electricity 5 resistance for 1 min.", major: "Starfield: 30-ft stardust cloud, foes blinded within." },
  "War":         { minor: "Battle Rage: touched creature +level melee damage for 1 round.", major: "War Mind: allies in 30 ft +1 attack and damage for 1 min." },
  "Water":       { minor: "Cold Blast: ranged touch, 1d6+½ level cold damage.", major: "Icy Prison: target paralyzed in ice (Fort neg)." },
  "Weather":     { minor: "Storm Burst: ranged touch, 1d6+½ level dmg + –2 attack 1 rd.", major: "Storm Frenzy: ranged –4, flying creatures grounded in 30 ft." },
};
function searchBlessings(query) {
  const q = (query || '').toLowerCase();
  return Object.entries(WARPRIEST_BLESSINGS)
    .filter(([name]) => !q || name.toLowerCase().startsWith(q))
    .slice(0, 20);
}
