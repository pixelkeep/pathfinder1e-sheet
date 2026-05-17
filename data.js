/* ══════════════════════════════════════════════════
   Pathfinder 1e — data.js
   Hardcoded game data: classes, races, deities,
   weapons, armor, languages, skills
   Source: Archives of Nethys (aonprd.com)
   ══════════════════════════════════════════════════ */

'use strict';

const SHEET_VERSION = '0.9.0';
const SHEET_DATE    = '2026-05-17';

// ── BAB PROGRESSIONS (per level 1-20) ─────────────
// full = +1/level, medium = +¾/level, slow = +½/level
const BAB_TABLE = {
  full:   [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  medium: [0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15],
  slow:   [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10],
};

// ── SAVE PROGRESSIONS (per level 1-20) ────────────
// good = 2+½/level, poor = ⅓/level
const SAVE_TABLE = {
  good: [2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12],
  poor: [0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6],
};

// ── XP TABLE (medium progression) ─────────────────
const XP_TABLE = {
  medium: [0,2000,5000,9000,15000,23000,35000,51000,75000,105000,
           155000,220000,315000,445000,635000,890000,1300000,1800000,2550000,3600000],
};

// ══════════════════════════════════════════════════
// CLASSES
// Source: aonprd.com — CRB, ACG, APG, etc.
// ══════════════════════════════════════════════════
const CLASSES = {

  alchemist: {
    name: 'Alchemist', source: 'APG',
    hd: 8, bab: 'medium', fort: 'good', ref: 'good', will: 'poor',
    skillsPerLevel: 4, spellAbility: 'int',
    classSkills: ['appraise','craft1','craft2','disable_device','fly','heal',
                  'k_arcana','k_nature','perception','profession1','sleight_of_hand',
                  'spellcraft','survival','use_magic_device'],
    proficiencies: 'Simple weapons, bombs. Light armor.',
    resources: [
      { label: 'Bombs/day', formula: 'level + INT mod' },
      { label: 'Mutagen/day', formula: '1' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Alchemist',
  },

  barbarian: {
    name: 'Barbarian', source: 'CRB',
    hd: 12, bab: 'full', fort: 'good', ref: 'poor', will: 'poor',
    skillsPerLevel: 4,
    classSkills: ['acrobatics','climb','craft1','handle_animal','intimidate',
                  'k_nature','perception','ride','survival','swim'],
    proficiencies: 'Simple and martial weapons. Light and medium armor, shields (not tower).',
    resources: [
      { label: 'Rage rounds/day', formula: '4 + CON mod (+ 2/level after 1st)' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Barbarian',
  },

  bard: {
    name: 'Bard', source: 'CRB',
    hd: 8, bab: 'medium', fort: 'poor', ref: 'good', will: 'good',
    skillsPerLevel: 6, spellAbility: 'cha',
    classSkills: ['acrobatics','appraise','bluff','climb','craft1','diplomacy',
                  'disguise','escape_artist','intimidate','k_arcana','k_dungeoneering',
                  'k_engineering','k_geography','k_history','k_local','k_nature',
                  'k_nobility','k_planes','k_religion','linguistics','perception',
                  'perform1','perform2','profession1','sense_motive','sleight_of_hand',
                  'spellcraft','stealth','use_magic_device'],
    proficiencies: 'Simple weapons + longsword, rapier, sap, short sword, shortbow, whip. Light armor and shields (not tower, not while casting).',
    resources: [
      { label: 'Bardic Performance/day', formula: '4 + CHA mod (+ 2/level after 1st)' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Bard',
  },

  cleric: {
    name: 'Cleric', source: 'CRB',
    hd: 8, bab: 'medium', fort: 'good', ref: 'poor', will: 'good',
    skillsPerLevel: 2, spellAbility: 'wis',
    classSkills: ['appraise','craft1','diplomacy','heal','k_arcana','k_history',
                  'k_nobility','k_planes','k_religion','linguistics','profession1',
                  'sense_motive','spellcraft'],
    proficiencies: 'Simple weapons + deity\'s favored weapon. Light and medium armor, shields (not tower).',
    resources: [
      { label: 'Channel Energy/day', formula: '3 + CHA mod' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Cleric',
  },

  druid: {
    name: 'Druid', source: 'CRB',
    hd: 8, bab: 'medium', fort: 'good', ref: 'poor', will: 'good',
    skillsPerLevel: 4, spellAbility: 'wis',
    classSkills: ['climb','craft1','fly','handle_animal','heal','k_geography',
                  'k_nature','perception','profession1','ride','spellcraft',
                  'survival','swim'],
    proficiencies: 'Simple weapons + club, dagger, dart, quarterstaff, scimitar, scythe, sickle, shortspear, sling, spear. Light and medium non-metal armor, wooden shields.',
    resources: [
      { label: 'Wild Shape/day', formula: 'See level table (starts level 4)' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Druid',
  },

  fighter: {
    name: 'Fighter', source: 'CRB',
    hd: 10, bab: 'full', fort: 'good', ref: 'poor', will: 'poor',
    skillsPerLevel: 2,
    classSkills: ['climb','craft1','handle_animal','intimidate','k_dungeoneering',
                  'k_engineering','profession1','ride','survival','swim'],
    proficiencies: 'All simple and martial weapons. All armor. All shields (including tower).',
    resources: [],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Fighter',
  },

  gunslinger: {
    name: 'Gunslinger', source: 'UC',
    hd: 10, bab: 'full', fort: 'good', ref: 'good', will: 'poor',
    skillsPerLevel: 4,
    classSkills: ['acrobatics','bluff','climb','craft1','heal','intimidate',
                  'k_engineering','k_local','perception','profession1','ride',
                  'sleight_of_hand','survival','swim'],
    proficiencies: 'Simple and martial weapons, all firearms. Light and medium armor, shields (not tower).',
    resources: [
      { label: 'Grit/day', formula: 'WIS mod (min 1)' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Gunslinger',
  },

  inquisitor: {
    name: 'Inquisitor', source: 'APG',
    hd: 8, bab: 'medium', fort: 'good', ref: 'poor', will: 'good',
    skillsPerLevel: 6, spellAbility: 'wis',
    classSkills: ['bluff','climb','craft1','diplomacy','disguise','heal',
                  'intimidate','k_arcana','k_dungeoneering','k_local','k_nature',
                  'k_planes','k_religion','perception','profession1','ride',
                  'sense_motive','spellcraft','stealth','survival','swim'],
    proficiencies: 'Simple weapons + hand crossbow, longbow, repeating crossbow, shortbow, deity\'s favored weapon. Light and medium armor, shields (not tower).',
    resources: [
      { label: 'Judgment/day', formula: '1 + 1 per 3 levels after 1st' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Inquisitor',
  },

  magus: {
    name: 'Magus', source: 'UM',
    hd: 8, bab: 'medium', fort: 'good', ref: 'poor', will: 'good',
    skillsPerLevel: 2, spellAbility: 'int',
    classSkills: ['climb','craft1','fly','intimidate','k_arcana','k_dungeoneering',
                  'k_planes','profession1','ride','spellcraft','swim','use_magic_device'],
    proficiencies: 'Simple and martial weapons. Light armor (can cast in it at level 7+).',
    resources: [
      { label: 'Arcane Pool', formula: '½ level + INT mod (min 1)' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Magus',
  },

  monk: {
    name: 'Monk', source: 'CRB',
    hd: 8, bab: 'medium', fort: 'good', ref: 'good', will: 'good',
    skillsPerLevel: 4,
    classSkills: ['acrobatics','climb','craft1','escape_artist','intimidate',
                  'k_history','k_religion','perception','perform1','profession1',
                  'ride','sense_motive','stealth','swim'],
    proficiencies: 'Club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, spear. No armor, no shields.',
    resources: [
      { label: 'Ki Pool', formula: '½ level + WIS mod' },
      { label: 'Stunning Fist/day', formula: 'Level' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Monk',
  },

  oracle: {
    name: 'Oracle', source: 'APG',
    hd: 8, bab: 'medium', fort: 'poor', ref: 'poor', will: 'good',
    skillsPerLevel: 4, spellAbility: 'cha',
    classSkills: ['craft1','diplomacy','heal','k_history','k_planes','k_religion',
                  'profession1','sense_motive','spellcraft'],
    proficiencies: 'Simple weapons. Light and medium armor, shields (not tower).',
    resources: [
      { label: 'Revelation uses/day', formula: 'Varies by revelation' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Oracle',
  },

  paladin: {
    name: 'Paladin', source: 'CRB',
    hd: 10, bab: 'full', fort: 'good', ref: 'poor', will: 'good',
    skillsPerLevel: 2, spellAbility: 'cha',
    classSkills: ['craft1','diplomacy','handle_animal','heal','k_nobility',
                  'k_religion','profession1','ride','sense_motive','spellcraft'],
    proficiencies: 'All simple and martial weapons. All armor. All shields (including tower).',
    resources: [
      { label: 'Lay on Hands/day', formula: '½ level + CHA mod' },
      { label: 'Smite Evil/day', formula: '1 + 1 per 3 levels after 1st' },
      { label: 'Mercy uses/day', formula: 'Same as Lay on Hands' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Paladin',
  },

  ranger: {
    name: 'Ranger', source: 'CRB',
    hd: 10, bab: 'full', fort: 'good', ref: 'good', will: 'poor',
    skillsPerLevel: 6, spellAbility: 'wis',
    classSkills: ['climb','craft1','handle_animal','heal','intimidate',
                  'k_dungeoneering','k_geography','k_nature','perception',
                  'profession1','ride','spellcraft','stealth','survival','swim'],
    proficiencies: 'All simple and martial weapons. Light and medium armor, shields (not tower).',
    resources: [],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Ranger',
  },

  rogue: {
    name: 'Rogue', source: 'CRB',
    hd: 8, bab: 'medium', fort: 'poor', ref: 'good', will: 'poor',
    skillsPerLevel: 8,
    classSkills: ['acrobatics','appraise','bluff','climb','craft1','diplomacy',
                  'disable_device','disguise','escape_artist','intimidate',
                  'k_dungeoneering','k_local','linguistics','perception','perform1',
                  'profession1','sense_motive','sleight_of_hand','stealth',
                  'swim','use_magic_device'],
    proficiencies: 'All simple weapons + hand crossbow, rapier, sap, short sword, shortbow. Light armor (no shields).',
    resources: [],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Rogue',
  },

  shaman: {
    name: 'Shaman', source: 'ACG',
    hd: 8, bab: 'medium', fort: 'poor', ref: 'poor', will: 'good',
    skillsPerLevel: 4, spellAbility: 'wis',
    classSkills: ['craft1','diplomacy','fly','handle_animal','heal','k_arcana',
                  'k_history','k_nature','k_planes','k_religion','profession1',
                  'ride','spellcraft','survival'],
    proficiencies: 'Simple weapons. Light and medium armor, shields (not tower).',
    resources: [],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Shaman',
  },

  skald: {
    name: 'Skald', source: 'ACG',
    hd: 8, bab: 'medium', fort: 'good', ref: 'poor', will: 'good',
    skillsPerLevel: 4, spellAbility: 'cha',
    classSkills: ['acrobatics','bluff','climb','craft1','diplomacy','escape_artist',
                  'intimidate','k_arcana','k_engineering','k_geography','k_history',
                  'k_local','k_nature','k_nobility','k_planes','k_religion',
                  'linguistics','perception','perform1','profession1','sense_motive',
                  'spellcraft'],
    proficiencies: 'Simple and martial weapons. Light and medium armor, shields (not tower). Can cast in light/medium armor and with shields at level 1.',
    resources: [
      { label: 'Raging Song/day', formula: '4 + CHA mod (+ 2/level after 1st)' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Skald',
  },

  sorcerer: {
    name: 'Sorcerer', source: 'CRB',
    hd: 6, bab: 'slow', fort: 'poor', ref: 'poor', will: 'good',
    skillsPerLevel: 2, spellAbility: 'cha',
    classSkills: ['appraise','bluff','craft1','fly','intimidate','k_arcana',
                  'k_planes','profession1','spellcraft','use_magic_device'],
    proficiencies: 'Simple weapons. No armor.',
    resources: [],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Sorcerer',
  },

  swashbuckler: {
    name: 'Swashbuckler', source: 'ACG',
    hd: 10, bab: 'full', fort: 'poor', ref: 'good', will: 'poor',
    skillsPerLevel: 4,
    classSkills: ['acrobatics','bluff','craft1','diplomacy','escape_artist',
                  'intimidate','k_local','k_nobility','perception','perform1',
                  'profession1','ride','sense_motive','sleight_of_hand','swim'],
    proficiencies: 'Simple and martial weapons. Light armor.',
    resources: [
      { label: 'Panache', formula: 'CHA mod (min 1)' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Swashbuckler',
  },

  warpriest: {
    name: 'Warpriest', source: 'ACG',
    hd: 8, bab: 'medium', fort: 'good', ref: 'poor', will: 'good',
    skillsPerLevel: 2, spellAbility: 'wis',
    classSkills: ['climb','craft1','diplomacy','heal','intimidate','k_religion',
                  'profession1','ride','sense_motive','spellcraft','survival','swim'],
    proficiencies: 'Simple and martial weapons + deity\'s favored weapon. Light and medium armor, shields (not tower). Can cast divine spells in armor without arcane spell failure.',
    resources: [
      { label: 'Fervor/day', formula: '½ level + WIS mod' },
      { label: 'Blessings/day', formula: '3 + ½ level (max 13)' },
      { label: 'Sacred Weapon bonus', formula: '+1 per 4 levels' },
    ],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Warpriest',
  },

  witch: {
    name: 'Witch', source: 'APG',
    hd: 6, bab: 'slow', fort: 'poor', ref: 'poor', will: 'good',
    skillsPerLevel: 2, spellAbility: 'int',
    classSkills: ['craft1','fly','heal','intimidate','k_arcana','k_history',
                  'k_nature','k_planes','profession1','spellcraft','use_magic_device'],
    proficiencies: 'Simple weapons. No armor.',
    resources: [],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Witch',
  },

  wizard: {
    name: 'Wizard', source: 'CRB',
    hd: 6, bab: 'slow', fort: 'poor', ref: 'poor', will: 'good',
    skillsPerLevel: 2, spellAbility: 'int',
    classSkills: ['appraise','craft1','fly','k_arcana','k_dungeoneering',
                  'k_engineering','k_geography','k_history','k_local','k_nature',
                  'k_nobility','k_planes','k_religion','linguistics','profession1',
                  'spellcraft'],
    proficiencies: 'Club, dagger, heavy crossbow, light crossbow, quarterstaff. No armor.',
    resources: [],
    aonUrl: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Wizard',
  },
};

// ══════════════════════════════════════════════════
// RACES
// Source: aonprd.com CRB + ARG
// ══════════════════════════════════════════════════
const RACES = {

  dwarf: {
    name: 'Dwarf',
    size: 'Medium', speed: 20,
    abilityMods: { str:0, dex:0, con:2, int:0, wis:2, cha:-2 },
    languages: ['Common','Dwarven'],
    bonusLanguages: ['Giant','Gnome','Goblin','Orc','Terran','Undercommon'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Defensive Training: +4 dodge AC vs. giants.',
      'Greed: +2 Appraise (precious metals/gemstones).',
      'Hatred: +1 attack vs. orcs and goblinoids.',
      'Hardy: +2 racial saving throws vs. poison, spells, spell-like abilities.',
      'Slow and Steady: Speed 20 ft., never modified by armor or encumbrance.',
      'Stability: +4 CMD vs. bull rush and trip while standing.',
      'Stonecunning: +2 Perception vs. unusual stonework; auto-check within 10 ft.',
      'Weapon Familiarity: Proficient with battleaxe, heavy pick, warhammer; treat dwarven weapons as martial.',
    ],
    racialBonuses: { perception: 2, appraise: 2 },
    aonUrl: 'https://aonprd.com/Races.aspx?ItemName=Dwarf',
  },

  elf: {
    name: 'Elf',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:2, con:-2, int:2, wis:0, cha:0 },
    languages: ['Common','Elven'],
    bonusLanguages: ['Celestial','Draconic','Gnoll','Gnome','Goblin','Orc','Sylvan'],
    vision: 'Low-light vision.',
    traits: [
      'Low-Light Vision: See twice as far as humans in dim light.',
      'Elven Immunities: Immune to magic sleep; +2 saves vs. enchantment spells.',
      'Elven Magic: +2 Spellcraft to identify magic item properties.',
      'Keen Senses: +2 Perception.',
      'Weapon Familiarity: Proficient with longbow, longsword, rapier, shortbow; treat elven weapons as martial.',
    ],
    racialBonuses: { perception: 2, spellcraft: 2 },
    aonUrl: 'https://aonprd.com/Races.aspx?ItemName=Elf',
  },

  gnome: {
    name: 'Gnome',
    size: 'Small', speed: 20,
    abilityMods: { str:-2, dex:0, con:2, int:0, wis:0, cha:2 },
    languages: ['Common','Gnome','Sylvan'],
    bonusLanguages: ['Draconic','Dwarven','Elven','Giant','Goblin','Orc'],
    vision: 'Low-light vision.',
    traits: [
      'Low-Light Vision: See twice as far as humans in dim light.',
      'Defensive Training: +4 dodge AC vs. giants.',
      'Gnome Magic: +1 DC to illusion spells; +2 saves vs. illusions.',
      'Hatred: +1 attack vs. reptilian humanoids and goblinoids.',
      'Illusion Resistance: +2 saves vs. illusion spells.',
      'Keen Senses: +2 Perception.',
      'Obsessive: +2 to one Craft or Profession (chosen at creation).',
      'Weapon Familiarity: Proficient with gnome hooked hammer; treat gnome weapons as martial.',
    ],
    racialBonuses: { perception: 2 },
    aonUrl: 'https://aonprd.com/Races.aspx?ItemName=Gnome',
  },

  halfelf: {
    name: 'Half-Elf',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:0, con:0, int:0, wis:0, cha:0 }, // +2 to any one ability
    languages: ['Common','Elven'],
    bonusLanguages: ['Any (except secret languages)'],
    vision: 'Low-light vision.',
    traits: [
      'Low-Light Vision: See twice as far as humans in dim light.',
      'Adaptability: Skill Focus as bonus feat at 1st level.',
      'Elven Immunities: Immune to magic sleep; +2 saves vs. enchantment spells.',
      'Keen Senses: +2 Perception.',
      'Multitalented: Two favored classes at 1st level.',
      'Ability Score: +2 to any one ability score (choose at creation).',
    ],
    racialBonuses: { perception: 2 },
    aonUrl: 'https://aonprd.com/Races.aspx?ItemName=Half-Elf',
  },

  halfling: {
    name: 'Halfling',
    size: 'Small', speed: 20,
    abilityMods: { str:-2, dex:2, con:0, int:0, wis:0, cha:2 },
    languages: ['Common','Halfling'],
    bonusLanguages: ['Dwarven','Elven','Gnome','Goblin'],
    vision: 'Normal.',
    traits: [
      'Fearless: +2 racial saves vs. fear (stacks with halfling luck).',
      'Halfling Luck: +1 racial bonus on all saving throws.',
      'Keen Senses: +2 Perception.',
      'Sure-Footed: +2 Acrobatics and Climb.',
      'Weapon Familiarity: Proficient with slings; treat halfling weapons as martial.',
    ],
    racialBonuses: { perception: 2, acrobatics: 2, climb: 2 },
    aonUrl: 'https://aonprd.com/Races.aspx?ItemName=Halfling',
  },

  halforc: {
    name: 'Half-Orc',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:0, con:0, int:0, wis:0, cha:0 }, // +2 to any one ability
    languages: ['Common','Orc'],
    bonusLanguages: ['Abyssal','Draconic','Giant','Gnoll','Goblin'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Intimidating: +2 Intimidate.',
      'Orc Blood: Counts as both human and orc for effects.',
      'Orc Ferocity: 1/day, when reduced to 0 or fewer HP, remain conscious for 1 round.',
      'Weapon Familiarity: Proficient with greataxe and falchion; treat orc weapons as martial.',
      'Ability Score: +2 to any one ability score (choose at creation).',
    ],
    racialBonuses: { intimidate: 2 },
    aonUrl: 'https://aonprd.com/Races.aspx?ItemName=Half-Orc',
  },

  human: {
    name: 'Human',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:0, con:0, int:0, wis:0, cha:0 }, // +2 to any one ability
    languages: ['Common'],
    bonusLanguages: ['Any (except secret languages)'],
    vision: 'Normal.',
    traits: [
      'Bonus Feat: One extra feat at 1st level.',
      'Skilled: +1 skill rank per level.',
      'Ability Score: +2 to any one ability score (choose at creation).',
    ],
    racialBonuses: {},
    aonUrl: 'https://aonprd.com/Races.aspx?ItemName=Human',
  },
};

// ══════════════════════════════════════════════════
// DEITIES (selection — CRB + Inner Sea Gods)
// Source: aonprd.com
// ══════════════════════════════════════════════════
const DEITIES = [
  // [name, alignment, domains, favored weapon, source]
  ['Abadar',     'LN',  'Earth, Law, Nobility, Protection, Travel',     'Light crossbow',  'CRB'],
  ['Alseta',     'LN',  'Artifice, Law, Nobility, Protection',          'Dagger',          'ISG'],
  ['Apsu',       'LG',  'Artifice, Law, Scalykind, Travel, Water',      'Quarterstaff',    'ISG'],
  ['Arshea',     'NG',  'Charm, Liberation, Strength',                  'Flail',           'ISG'],
  ['Asmodeus',   'LE',  'Evil, Fire, Law, Magic, Trickery',             'Mace, heavy',     'CRB'],
  ['Calistria',  'CN',  'Chaos, Charm, Knowledge, Luck, Trickery',      'Whip',            'CRB'],
  ['Cayden Cailean','CG','Chaos, Charm, Good, Strength, Travel',        'Rapier',          'CRB'],
  ['Daikitsu',   'N',   'Animal, Artifice, Community, Good, Plant',     'Naginata',        'ISG'],
  ['Desna',      'CG',  'Chaos, Good, Liberation, Luck, Travel',        'Starknife',       'CRB'],
  ['Erastil',    'LG',  'Animal, Community, Good, Law, Plant',          'Longbow',         'CRB'],
  ['Gorum',      'CN',  'Chaos, Destruction, Glory, Strength, War',     'Greatsword',      'CRB'],
  ['Gozreh',     'N',   'Air, Animal, Plant, Water, Weather',           'Trident',         'CRB'],
  ['Groetus',    'CN',  'Chaos, Darkness, Destruction, Madness, Void',  'Skull, heavy',    'ISG'],
  ['Grundinnar', 'LG',  'Community, Good, Law',                         'Light hammer',    'ISG'],
  ['Iomedae',    'LG',  'Glory, Good, Law, Sun, War',                   'Longsword',       'CRB'],
  ['Irori',      'LN',  'Healing, Knowledge, Law, Rune, Strength',      'Unarmed strike',  'CRB'],
  ['Ketephys',   'CG',  'Animal, Chaos, Good, Moon, Plant',             'Bow',             'ISG'],
  ['Lamashtu',   'CE',  'Chaos, Evil, Madness, Strength, Trickery',     'Falchion',        'CRB'],
  ['Milani',     'CG',  'Chaos, Good, Healing, Liberation, Protection', 'Morningstar',     'ISG'],
  ['Nethys',     'N',   'Destruction, Knowledge, Magic, Protection, Rune', 'Quarterstaff', 'CRB'],
  ['Norgorber',  'NE',  'Charm, Death, Evil, Knowledge, Trickery',      'Short sword',     'CRB'],
  ['Pharasma',   'N',   'Death, Healing, Knowledge, Repose, Water',     'Dagger',          'CRB'],
  ['Pulura',     'CG',  'Chaos, Good, Teleportation, Water, Weather',   'Starknife',       'ISG'],
  ['Rovagug',    'CE',  'Chaos, Destruction, Evil, War, Weather',       'Greataxe',        'CRB'],
  ['Sarenrae',   'NG',  'Fire, Glory, Good, Healing, Sun',              'Scimitar',        'CRB'],
  ['Shelyn',     'NG',  'Air, Charm, Good, Luck, Protection',           'Glaive',          'CRB'],
  ['Sivanah',    'N',   'Illusion, Knowledge, Magic, Rune, Trickery',   'Blowgun',         'ISG'],
  ['Torag',      'LG',  'Artifice, Earth, Good, Law, Protection',       'Warhammer',       'CRB'],
  ['Urgathoa',   'NE',  'Death, Evil, Magic, Strength, War',            'Scythe',          'CRB'],
  ['Zon-Kuthon', 'LE',  'Darkness, Death, Destruction, Evil, Law',      'Spiked chain',    'CRB'],
  // Dwarven deities
  ['Angradd',    'LG',  'Fire, Good, Law, War',                         'Greataxe',        'ISG'],
  ['Bolka',      'NG',  'Charm, Community, Good, Healing',              'Morningstar',     'ISG'],
  ['Dranngvit',  'LN',  'Knowledge, Law, Rune',                         'Whip',            'ISG'],
  ['Droskar',    'NE',  'Artifice, Darkness, Evil, Trickery',           'Light hammer',    'ISG'],
  ['Folgrit',    'LG',  'Community, Good, Law, Protection',             'Quarterstaff',    'ISG'],
  ['Grundinnar', 'LG',  'Community, Good, Law',                         'Light hammer',    'ISG'],
  ['Kols',       'LN',  'Law, Nobility, Rune, Strength, War',           'Warhammer',       'ISG'],
  ['Magrim',     'LN',  'Death, Earth, Law, Repose',                    'Warhammer',       'ISG'],
  ['Trudd',      'NG',  'Good, Protection, Strength, War',              'Warhammer',       'ISG'],
  // Additional common deities
  // Arqueros — Empyreal Lord (archon). Source: Inner Sea Gods / PathfinderWiki
  // Favored weapon: longspear (the Golden Bulwark wields a longspear with diamond blades)
  ['Arqueros',   'LG',  'Good, Law, Protection, War',                   'Longspear',       'ISG', 'Pray 1 hour holding a heavy shield overhead.', '+4 sacred bonus on Strength checks and Strength-based skill checks.'],

  // Additional empyreal lords & monitor demigods
  ['Andoletta',  'LG',  'Good, Law, Protection',                        'Quarterstaff',    'ISG'],
  ['Ashava',     'CG',  'Chaos, Good, Moon',                            'Falchion',        'ISG'],
  ['Bharnarol',  'NG',  'Artifice, Good, Knowledge',                    'Heavy pick',      'ISG'],
  ['Black Butterfly','CN','Chaos, Darkness, Travel, Void',              'Starknife',       'ISG'],
  ['Eritrice',   'NG',  'Charm, Good, Knowledge',                       'Quarterstaff',    'ISG'],
  ['Falayna',    'LG',  'Community, Good, Law, Strength',               'Falchion',        'ISG'],
  ['Ghenshau',   'NG',  'Good, Healing, Repose',                        'Unarmed strike',  'ISG'],
  ['Halcamora',  'CG',  'Chaos, Good, Plant',                           'Longbow',         'ISG'],
  ['Irez',       'NG',  'Charm, Good, Magic',                           'Dagger',          'ISG'],
  ['Jalaijatali','CG',  'Air, Chaos, Good, Weather',                    'Shortspear',      'ISG'],
  ['Lymnieris',  'LG',  'Good, Law, Liberation',                        'Longspear',       'ISG'],
  ['Olheon',     'LN',  'Law, Nobility, Travel',                        'Javelin',         'ISG'],
  ['Ragathiel',  'LG',  'Destruction, Good, Law, War',                  'Bastard sword',   'ISG'],
  ['Sinashakti', 'CN',  'Chaos, Luck, Travel',                          'Quarterstaff',    'ISG'],
  ['Tanagaar',   'LG',  'Air, Animal, Good, Law',                       'Longbow',         'ISG'],
  ['Tolc',       'LN',  'Knowledge, Law, Rune',                         'Morningstar',     'ISG'],
  ['Winlas',     'NG',  'Good, Healing, Plant',                         'Scythe',          'ISG'],
  ['Ylimancha',  'CG',  'Air, Animal, Chaos, Good',                     'Shortbow',        'ISG'],

  // Demon lords (for evil-aligned characters / GMs)
  ['Abraxas',    'CE',  'Chaos, Evil, Knowledge, Magic',                'Whip',            'ISG'],
  ['Andirifkhu', 'CE',  'Chaos, Evil, Trickery',                        'Scimitar',        'ISG'],
  ['Cyth-V\'sug','CE',  'Chaos, Evil, Plant, Strength',                 'Falchion',        'ISG'],
  ['Deskari',    'CE',  'Chaos, Evil, War',                             'Scythe',          'ISG'],
  ['Gogunta',    'CE',  'Chaos, Death, Evil, Water',                    'Whip',            'ISG'],
  ['Nocticula',  'CE',  'Chaos, Charm, Darkness, Evil',                 'Kukri',           'ISG'],
  ['Pazuzu',     'CE',  'Air, Chaos, Evil, Trickery',                   'Shortspear',      'ISG'],
  ['Xoveron',    'CE',  'Chaos, Earth, Evil, Madness',                  'Greatclub',       'ISG'],

  // Archdevils
  ['Mephistopheles','LE','Evil, Law, Magic, Trickery',                  'Ranseur',         'ISG'],
  ['Barbatos',   'LE',  'Animal, Evil, Law, Trickery',                  'Quarterstaff',    'ISG'],
  ['Dispater',   'LE',  'Evil, Law, Nobility, Trickery',                'Mace, heavy',     'ISG'],
  ['Mammon',     'LE',  'Earth, Evil, Law, Trickery',                   'Spear',           'ISG'],

  // Outer Gods / Great Old Ones
  ['Azathoth',   'CN',  'Chaos, Darkness, Destruction, Madness',        'Quarterstaff',    'Bestiary4'],
  ['Nyarlathotep','CE', 'Chaos, Evil, Knowledge, Trickery',             'Flail',           'Bestiary4'],
  ['Yhidothrus', 'CE',  'Chaos, Evil, Void',                            'Scythe',          'Bestiary4'],

  // Neutral powers
  ['Achaekek',   'LE',  'Death, Evil, Law, Trickery, War',              'Sawtooth sabre',  'ISG'],
  ['Alseta',     'LN',  'Artifice, Law, Nobility, Protection',          'Dagger',          'ISG'],
  ['Besmara',    'CN',  'Chaos, Trickery, War, Water, Weather',         'Rapier',          'ISG'],
  ['Brigh',      'N',   'Artifice, Fire, Knowledge, Magic',             'Light hammer',    'ISG'],
  ['Hanspur',    'CN',  'Chaos, Travel, Water',                         'Trident',         'ISG'],
  ['Naderi',     'N',   'Chaos, Death, Water',                          'Drowning dart',   'ISG'],
  ['Nivi Rhombodazzle','N','Charm, Earth, Luck, Trickery',              'Light hammer',    'ISG'],
  ['Venkelvore', 'NE',  'Death, Earth, Evil',                           'Greatclub',       'ISG'],
].sort((a,b) => a[0].localeCompare(b[0]));

// ══════════════════════════════════════════════════
// LANGUAGES (all Pathfinder 1e languages)
// ══════════════════════════════════════════════════
const ALL_LANGUAGES = [
  'Abyssal','Aklo','Aquan','Auran','Celestial','Common','Cyclops',
  'Dark Folk','Draconic','Druidic','Dwarven','Elven','Giant','Gnoll',
  'Gnome','Goblin','Grippli','Halfling','Ignan','Infernal','Kelish',
  'Orc','Osiriani','Polyglot','Protean','Shoanti','Skald','Sphinx',
  'Sylvan','Tengu','Terran','Thassilonian','Tien','Undercommon',
  'Varisian','Vegepygmy',
];

// ══════════════════════════════════════════════════
// SIZE MODIFIERS
// Source: aonprd.com CRB p.211
// ══════════════════════════════════════════════════
const SIZE_DATA = {
  'Fine':        { acMod:  8, cmbMod: -8, strMod: -8, dexMod:  8, stealthMod: 16, flyMod:  8 },
  'Diminutive':  { acMod:  4, cmbMod: -4, strMod: -4, dexMod:  4, stealthMod: 12, flyMod:  6 },
  'Tiny':        { acMod:  2, cmbMod: -2, strMod: -2, dexMod:  2, stealthMod:  8, flyMod:  4 },
  'Small':       { acMod:  1, cmbMod: -1, strMod:  0, dexMod:  0, stealthMod:  4, flyMod:  2 },
  'Medium':      { acMod:  0, cmbMod:  0, strMod:  0, dexMod:  0, stealthMod:  0, flyMod:  0 },
  'Large':       { acMod: -1, cmbMod:  1, strMod:  0, dexMod:  0, stealthMod: -4, flyMod: -2 },
  'Huge':        { acMod: -2, cmbMod:  2, strMod:  0, dexMod:  0, stealthMod: -8, flyMod: -4 },
  'Gargantuan':  { acMod: -4, cmbMod:  4, strMod:  0, dexMod:  0, stealthMod:-12, flyMod: -6 },
  'Colossal':    { acMod: -8, cmbMod:  8, strMod:  0, dexMod:  0, stealthMod:-16, flyMod: -8 },
};

// ══════════════════════════════════════════════════
// WEAPONS (common — CRB + ACG)
// Source: aonprd.com Equipment
// ══════════════════════════════════════════════════
const WEAPONS = {
  // Simple — Light
  'Dagger':           { dmg:'1d4', crit:'19-20/×2', type:'P or S', range:10,  weight:1,  cost:2,   category:'simple', group:'light' },
  'Mace, light':      { dmg:'1d6', crit:'×2',       type:'B',      range:0,   weight:4,  cost:5,   category:'simple', group:'light' },
  'Sickle':           { dmg:'1d6', crit:'×2',       type:'S',      range:0,   weight:2,  cost:6,   category:'simple', group:'light' },
  'Unarmed strike':   { dmg:'1d3', crit:'×2',       type:'B',      range:0,   weight:0,  cost:0,   category:'simple', group:'unarmed' },

  // Simple — One-handed
  'Club':             { dmg:'1d6', crit:'×2',       type:'B',      range:10,  weight:3,  cost:0,   category:'simple', group:'onehanded' },
  'Mace, heavy':      { dmg:'1d8', crit:'×2',       type:'B',      range:0,   weight:8,  cost:12,  category:'simple', group:'onehanded' },
  'Morningstar':      { dmg:'1d8', crit:'×2',       type:'B&P',    range:0,   weight:6,  cost:8,   category:'simple', group:'onehanded' },
  'Quarterstaff':     { dmg:'1d6/1d6', crit:'×2',   type:'B',      range:0,   weight:4,  cost:0,   category:'simple', group:'twohanded', twoHanded:true },
  'Shortspear':       { dmg:'1d6', crit:'×2',       type:'P',      range:20,  weight:3,  cost:1,   category:'simple', group:'onehanded' },

  // Simple — Ranged
  'Crossbow, light':  { dmg:'1d8', crit:'19-20/×2', type:'P',      range:80,  weight:4,  cost:35,  category:'simple', group:'ranged' },
  'Crossbow, heavy':  { dmg:'1d10',crit:'19-20/×2', type:'P',      range:120, weight:8,  cost:50,  category:'simple', group:'ranged' },
  'Dart':             { dmg:'1d4', crit:'×2',       type:'P',      range:20,  weight:0.5,cost:0.5, category:'simple', group:'ranged' },
  'Javelin':          { dmg:'1d6', crit:'×2',       type:'P',      range:30,  weight:2,  cost:1,   category:'simple', group:'ranged' },
  'Sling':            { dmg:'1d4', crit:'×2',       type:'B',      range:50,  weight:0,  cost:0,   category:'simple', group:'ranged' },

  // Martial — Light
  'Axe, throwing':    { dmg:'1d6', crit:'×2',       type:'S',      range:10,  weight:2,  cost:8,   category:'martial', group:'light' },
  'Handaxe':          { dmg:'1d6', crit:'×3',       type:'S',      range:0,   weight:3,  cost:6,   category:'martial', group:'light' },
  'Kukri':            { dmg:'1d4', crit:'18-20/×2', type:'S',      range:0,   weight:2,  cost:8,   category:'martial', group:'light' },
  'Pick, light':      { dmg:'1d4', crit:'×4',       type:'P',      range:0,   weight:3,  cost:4,   category:'martial', group:'light' },
  'Rapier':           { dmg:'1d6', crit:'18-20/×2', type:'P',      range:0,   weight:2,  cost:20,  category:'martial', group:'light' },
  'Sap':              { dmg:'1d6', crit:'×2',       type:'B',      range:0,   weight:2,  cost:1,   category:'martial', group:'light' },
  'Sword, short':     { dmg:'1d6', crit:'19-20/×2', type:'P',      range:0,   weight:2,  cost:10,  category:'martial', group:'light' },

  // Martial — One-handed
  'Battleaxe':        { dmg:'1d8', crit:'×3',       type:'S',      range:0,   weight:6,  cost:10,  category:'martial', group:'onehanded' },
  'Flail':            { dmg:'1d8', crit:'×2',       type:'B',      range:0,   weight:5,  cost:8,   category:'martial', group:'onehanded' },
  'Longsword':        { dmg:'1d8', crit:'19-20/×2', type:'S',      range:0,   weight:4,  cost:15,  category:'martial', group:'onehanded' },
  'Pick, heavy':      { dmg:'1d6', crit:'×4',       type:'P',      range:0,   weight:6,  cost:8,   category:'martial', group:'onehanded' },
  'Scimitar':         { dmg:'1d6', crit:'18-20/×2', type:'S',      range:0,   weight:4,  cost:15,  category:'martial', group:'onehanded' },
  'Trident':          { dmg:'1d8', crit:'×2',       type:'P',      range:10,  weight:4,  cost:15,  category:'martial', group:'onehanded' },
  'Warhammer':        { dmg:'1d8', crit:'×3',       type:'B',      range:0,   weight:5,  cost:12,  category:'martial', group:'onehanded' },

  // Martial — Two-handed
  'Lucerne hammer':   { dmg:'1d12',crit:'×2',       type:'B or P', range:0,   weight:12, cost:15,  category:'martial', group:'polearm',   twoHanded:true, reach:true, special:'brace; +2 CMB to sunder medium/heavy armor' },
  'Bardiche':         { dmg:'1d10',crit:'19-20/×2', type:'S',      range:0,   weight:14, cost:13,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Bec de corbin':    { dmg:'1d10',crit:'×3',       type:'B or P', range:0,   weight:12, cost:15,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Bill':             { dmg:'1d8', crit:'×3',       type:'S',      range:0,   weight:11, cost:11,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Fauchard':         { dmg:'1d10',crit:'18-20/×2', type:'S',      range:0,   weight:10, cost:14,  category:'exotic',  group:'twohanded', twoHanded:true, reach:true },
  'Glaive-guisarme':  { dmg:'2d4', crit:'×3',       type:'S',      range:0,   weight:15, cost:12,  category:'exotic',  group:'twohanded', twoHanded:true, reach:true },
  'Longspear':        { dmg:'1d8', crit:'×3',       type:'P',      range:0,   weight:9,  cost:5,   category:'simple',  group:'twohanded', twoHanded:true, reach:true },
  'Spear':            { dmg:'1d8', crit:'×3',       type:'P',      range:20,  weight:6,  cost:2,   category:'simple',  group:'onehanded' },
  'Falchion':         { dmg:'2d4', crit:'18-20/×2', type:'S',      range:0,   weight:8,  cost:75,  category:'martial', group:'twohanded', twoHanded:true },
  'Glaive':           { dmg:'1d10',crit:'×3',       type:'S',      range:0,   weight:10, cost:8,   category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Greataxe':         { dmg:'1d12',crit:'×3',       type:'S',      range:0,   weight:12, cost:20,  category:'martial', group:'twohanded', twoHanded:true },
  'Greatsword':       { dmg:'2d6', crit:'19-20/×2', type:'S',      range:0,   weight:8,  cost:50,  category:'martial', group:'twohanded', twoHanded:true },
  'Guisarme':         { dmg:'2d4', crit:'×3',       type:'S',      range:0,   weight:12, cost:9,   category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Halberd':          { dmg:'1d10',crit:'×3',       type:'P or S', range:0,   weight:12, cost:10,  category:'martial', group:'twohanded', twoHanded:true },
  'Ranseur':          { dmg:'2d4', crit:'×3',       type:'P',      range:0,   weight:12, cost:10,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Scythe':           { dmg:'2d4', crit:'×4',       type:'P or S', range:0,   weight:10, cost:18,  category:'martial', group:'twohanded', twoHanded:true },

  // Martial — Ranged
  'Longbow':          { dmg:'1d8', crit:'×3',       type:'P',      range:100, weight:3,  cost:75,  category:'martial', group:'ranged' },
  'Shortbow':         { dmg:'1d6', crit:'×3',       type:'P',      range:60,  weight:2,  cost:30,  category:'martial', group:'ranged' },

  // Dwarven favorites
  'Urgrosh, dwarven': { dmg:'1d8/1d6',crit:'×3',   type:'P or S', range:0,   weight:12, cost:50,  category:'exotic',  group:'twohanded', twoHanded:true },
  'Waraxe, dwarven':  { dmg:'1d10',crit:'×3',       type:'S',      range:0,   weight:8,  cost:30,  category:'exotic',  group:'onehanded' },

  // Common clerical / warpriest weapons
  'Starknife':        { dmg:'1d4', crit:'×3',       type:'P',      range:20,  weight:3,  cost:24,  category:'martial', group:'light' },
  'Spiked chain':     { dmg:'2d4', crit:'×2',       type:'P',      range:0,   weight:10, cost:25,  category:'exotic',  group:'twohanded', twoHanded:true },
};

// ══════════════════════════════════════════════════
// ARMOR & SHIELDS (CRB)
// Source: aonprd.com Equipment
// ══════════════════════════════════════════════════
const ARMOR = {
  // Light armor
  'Padded':           { bonus:1, maxDex:8,  checkPen:0,  sf:5,  weight:10, cost:5,   type:'Light armor',   special:'' },
  'Leather':          { bonus:2, maxDex:6,  checkPen:0,  sf:10, weight:15, cost:10,  type:'Light armor',   special:'' },
  'Studded leather':  { bonus:3, maxDex:5,  checkPen:-1, sf:15, weight:20, cost:25,  type:'Light armor',   special:'' },
  'Chain shirt':      { bonus:4, maxDex:4,  checkPen:-2, sf:20, weight:25, cost:100, type:'Light armor',   special:'' },

  // Medium armor
  'Hide':             { bonus:4, maxDex:4,  checkPen:-3, sf:20, weight:25, cost:15,  type:'Medium armor',  special:'' },
  'Scale mail':       { bonus:5, maxDex:3,  checkPen:-4, sf:25, weight:30, cost:50,  type:'Medium armor',  special:'' },
  'Chainmail':        { bonus:6, maxDex:2,  checkPen:-5, sf:30, weight:40, cost:150, type:'Medium armor',  special:'' },
  'Breastplate':      { bonus:6, maxDex:3,  checkPen:-4, sf:25, weight:30, cost:200, type:'Medium armor',  special:'' },

  // Heavy armor
  'Splint mail':      { bonus:7, maxDex:0,  checkPen:-7, sf:35, weight:45, cost:200, type:'Heavy armor',   special:'' },
  'Banded mail':      { bonus:7, maxDex:1,  checkPen:-6, sf:35, weight:35, cost:250, type:'Heavy armor',   special:'' },
  'Half-plate':       { bonus:8, maxDex:0,  checkPen:-7, sf:40, weight:50, cost:600, type:'Heavy armor',   special:'' },
  'Full plate':       { bonus:9, maxDex:1,  checkPen:-6, sf:35, weight:50, cost:1500,type:'Heavy armor',   special:'' },

  // Shields
  'Buckler':          { bonus:1, maxDex:99, checkPen:-1, sf:5,  weight:5,  cost:5,   type:'Shield',        special:'-1 atk with buckler arm' },
  'Shield, light wooden':{ bonus:1,maxDex:99,checkPen:-1,sf:5, weight:5,  cost:3,   type:'Shield',        special:'' },
  'Shield, light steel': { bonus:1,maxDex:99,checkPen:-1,sf:5, weight:6,  cost:9,   type:'Shield',        special:'' },
  'Shield, heavy wooden':{ bonus:2,maxDex:99,checkPen:-2,sf:15,weight:10, cost:7,   type:'Shield',        special:'' },
  'Shield, heavy steel': { bonus:2,maxDex:99,checkPen:-2,sf:15,weight:15, cost:20,  type:'Shield',        special:'' },
  'Shield, tower':    { bonus:4, maxDex:2,  checkPen:-10,sf:50,weight:45, cost:30,  type:'Shield',        special:'Full cover vs ranged; –2 atk in melee' },
};

// ══════════════════════════════════════════════════
// COMMON GEAR (CRB)
// Source: aonprd.com Equipment
// ══════════════════════════════════════════════════
const COMMON_GEAR = {
  // Adventuring gear
  'Backpack':             { weight:2,  cost:2   },
  'Bedroll':              { weight:5,  cost:0.1 },
  'Blanket, winter':      { weight:3,  cost:0.5 },
  'Canteen/waterskin':    { weight:4,  cost:1   },
  'Flint and steel':      { weight:0,  cost:1   },
  'Grappling hook':       { weight:4,  cost:1   },
  'Lantern, bullseye':    { weight:3,  cost:12  },
  'Lantern, hooded':      { weight:2,  cost:7   },
  'Oil (flask)':          { weight:1,  cost:0.1 },
  'Rations (per day)':    { weight:1,  cost:0.5 },
  'Rope, hemp (50 ft)':   { weight:10, cost:1   },
  'Rope, silk (50 ft)':   { weight:5,  cost:10  },
  'Sack':                 { weight:0.5,cost:0.1 },
  'Sunrod':               { weight:1,  cost:2   },
  'Tent, small':          { weight:20, cost:10  },
  'Thieves\' tools':      { weight:1,  cost:30  },
  'Torch':                { weight:1,  cost:0.01},
  'Trail rations (5)':    { weight:5,  cost:2.5 },

  // Potions
  'Potion: CLW (1d8+1)':  { weight:0,  cost:50  },
  'Potion: CMW (2d8+3)':  { weight:0,  cost:300 },
  'Potion: CSW (3d8+5)':  { weight:0,  cost:750 },
  'Potion: Cure Blind.':  { weight:0,  cost:50  },
  'Potion: Delay Poison': { weight:0,  cost:300 },
  'Potion: Invisibility': { weight:0,  cost:300 },
  'Potion: Mage Armor':   { weight:0,  cost:50  },
  'Potion: Magic Fang':   { weight:0,  cost:50  },
  'Potion: Shield of Faith+2': { weight:0, cost:50 },

  // Scrolls (1st level)
  'Scroll: Bless':        { weight:0,  cost:25  },
  'Scroll: Cure LW':      { weight:0,  cost:25  },
  'Scroll: Detect Magic': { weight:0,  cost:12.5},
  'Scroll: Endure Elems': { weight:0,  cost:25  },
  'Scroll: Magic Weapon': { weight:0,  cost:25  },
  'Scroll: Protection/Evil': { weight:0, cost:25},

  // Tools / kits
  'Healer\'s kit (10)':   { weight:1,  cost:50  },
  'Holy symbol, silver':  { weight:1,  cost:25  },
  'Holy symbol, wooden':  { weight:0,  cost:1   },
  'Spell component pouch':{ weight:2,  cost:5   },
};


// ══════════════════════════════════════════════════
// DEITY OBEDIENCE PERKS
// Source: Inner Sea Gods, Chronicle of the Righteous
// Format: deityName -> { obedience, perk }
// ══════════════════════════════════════════════════
const DEITY_PERKS = {
  'Torag': { obedience: "Spend 1 hour working at a forge, crafting or repairing items while praying.", perk: "+4 sacred bonus on Craft (armor) and Craft (weapons) checks." },
  'Iomedae': { obedience: "Spend 1 hour in prayer and weapon drill, reciting the Acts of Iomedae.", perk: "+4 sacred bonus on saving throws against fear effects." },
  'Sarenrae': { obedience: "Spend 1 hour in prayer facing the sunrise or a flame, reciting the Dawnflower's tenets.", perk: "+4 sacred bonus on Diplomacy checks." },
  'Desna': { obedience: "Spend 1 hour stargazing and singing, tracing constellations on the ground.", perk: "+4 sacred bonus on saves against curses and compulsions." },
  'Pharasma': { obedience: "Lay bones in a spiral with names of the newborn and recently deceased; chant hymns.", perk: "+2 sacred bonus on attack rolls made with daggers." },
  'Nethys': { obedience: "Inscribe blessings and arcane notations on parchment (not complete spells); cast a spell.", perk: "+4 sacred bonus on concentration checks." },
  'Cayden Cailean': { obedience: "Drink a tankard of ale and sing a song of freedom; share a drink with a stranger.", perk: "+4 sacred bonus on saves against poison." },
  'Erastil': { obedience: "Spend 1 hour in prayer while tending crops, livestock, or hunting.", perk: "+4 sacred bonus on Survival checks." },
  'Abadar': { obedience: "Spend 1 hour in meditation on the principles of fair trade; balance your accounts.", perk: "+4 sacred bonus on Appraise checks and Sense Motive checks to detect lies." },
  'Irori': { obedience: "Spend 1 hour in meditation and physical training, working through a prescribed regimen.", perk: "+4 sacred bonus on Knowledge (history) checks." },
  'Gorum': { obedience: "Spend 1 hour in combat practice, reciting prayers of battle while sparring.", perk: "+4 sacred bonus on saves against fear and mind-affecting effects while raging." },
  'Shelyn': { obedience: "Spend 1 hour creating art (painting, music, poetry, sculpture) dedicated to Shelyn.", perk: "+4 sacred bonus on Perform checks." },
  'Arqueros': { obedience: "Pray for 1 hour while holding a heavy shield overhead.", perk: "+4 sacred bonus on Strength checks and Strength-based skill checks." },
};

// ══════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════

/** Get BAB for a class at a given level */
function getBAB(className, level) {
  const cls = CLASSES[className];
  if (!cls) return 0;
  const prog = BAB_TABLE[cls.bab];
  return prog ? (prog[level - 1] || 0) : 0;
}

/** Get base save for a progression type at a given level */
function getBaseSave(progression, level) {
  const prog = SAVE_TABLE[progression];
  return prog ? (prog[level - 1] || 0) : 0;
}

/** Get all class saves at a given level */
function getClassSaves(className, level) {
  const cls = CLASSES[className];
  if (!cls) return { fort:0, ref:0, will:0 };
  return {
    fort: getBaseSave(cls.fort, level),
    ref:  getBaseSave(cls.ref,  level),
    will: getBaseSave(cls.will, level),
  };
}

/** Get XP needed for next level (medium progression) */
function getXPForLevel(level) {
  return XP_TABLE.medium[level] || null;
}
