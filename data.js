/* ══════════════════════════════════════════════════
   Pathfinder 1e — data.js
   Hardcoded game data: classes, races, deities,
   weapons, armor, languages, skills
   Source: Archives of Nethys (aonprd.com)
   ══════════════════════════════════════════════════ */

'use strict';

const SHEET_VERSION = '2.2.0';
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
// DEITY OBEDIENCE PERKS — typed, universal structure
// Source: Inner Sea Gods, Chronicle of the Righteous
//
// bonus: array of typed bonus objects that the sheet
//        can apply automatically. Types:
//   { type, amount, bonusType, targets }
//   type:      'skill_ability' | 'skill' | 'save' |
//              'attack' | 'concentration' | 'ac' |
//              'note' (display only, no auto-calc)
//   amount:    numeric bonus
//   bonusType: 'sacred' | 'profane' | 'insight' etc.
//   targets:   array of specific targets (ability keys,
//              skill ids, save names, etc.)
//   condition: optional string — shown as tooltip/note
// ══════════════════════════════════════════════════
const DEITY_PERKS = {

  // ── CORE DEITIES ──────────────────────────────
  'Abadar': {
    obedience: "Spend 1 hour balancing accounts and meditating on fair trade principles.",
    perk: "+4 sacred bonus on Appraise checks and Sense Motive checks to detect lies.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['appraise'] },
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['sense_motive'], condition: 'to detect lies only' },
    ],
  },

  'Calistria': {
    obedience: "Spend 1 hour recounting wrongs done to you and planning your revenge.",
    perk: "+4 sacred bonus on saves against charm and compulsion effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['fort','ref','will'], condition: 'vs charm and compulsion effects only' },
    ],
  },

  'Cayden Cailean': {
    obedience: "Drink a tankard of ale and sing a song of freedom; share a drink with a stranger.",
    perk: "+4 sacred bonus on saving throws against poison.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['fort'], condition: 'vs poison effects only' },
    ],
  },

  'Desna': {
    obedience: "Spend 1 hour stargazing and singing, tracing constellations on the ground.",
    perk: "+4 sacred bonus on saving throws against curses and compulsions.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs curses and compulsions only' },
    ],
  },

  'Erastil': {
    obedience: "Spend 1 hour in prayer while tending crops, livestock, or practicing your craft.",
    perk: "+4 sacred bonus on Survival checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['survival'] },
    ],
  },

  'Gorum': {
    obedience: "Spend 1 hour in vigorous combat practice while reciting prayers of battle.",
    perk: "+4 sacred bonus on saves against fear and mind-affecting effects while raging.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear and mind-affecting, while raging only' },
    ],
  },

  'Iomedae': {
    obedience: "Spend 1 hour in prayer and weapon drill, reciting the Acts of Iomedae.",
    perk: "+4 sacred bonus on saving throws against fear effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear effects only' },
    ],
  },

  'Irori': {
    obedience: "Spend 1 hour in meditation and physical training following a prescribed regimen.",
    perk: "+4 sacred bonus on Knowledge (history) checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['k_history'] },
    ],
  },

  'Lamashtu': {
    obedience: "Draw your own blood and offer it to Lamashtu while chanting her praises.",
    perk: "+4 profane bonus on saves against confusion and insanity effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'profane', targets: ['will'], condition: 'vs confusion and insanity only' },
    ],
  },

  'Nethys': {
    obedience: "Inscribe blessings and arcane notations on parchment; cast a spell at the culmination.",
    perk: "+4 sacred bonus on concentration checks.",
    bonus: [
      { type: 'concentration', amount: 4, bonusType: 'sacred', targets: ['concentration'] },
    ],
  },

  'Pharasma': {
    obedience: "Lay bones in a spiral; place names of the newborn and recently deceased at each end; chant hymns.",
    perk: "+2 sacred bonus on attack rolls made with daggers.",
    bonus: [
      { type: 'attack', amount: 2, bonusType: 'sacred', targets: ['dagger'], condition: 'with daggers only' },
    ],
  },

  'Rovagug': {
    obedience: "Destroy something beautiful or meaningful; offer the wreckage to the Rough Beast.",
    perk: "+4 profane bonus on saves against paralysis and petrification.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'profane', targets: ['fort'], condition: 'vs paralysis and petrification only' },
    ],
  },

  'Sarenrae': {
    obedience: "Spend 1 hour in prayer facing the sunrise or a flame, reciting the Dawnflower's tenets.",
    perk: "+4 sacred bonus on Diplomacy checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['diplomacy'] },
    ],
  },

  'Shelyn': {
    obedience: "Spend 1 hour creating art — painting, music, poetry, or sculpture — dedicated to Shelyn.",
    perk: "+4 sacred bonus on Perform checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['perform1','perform2'] },
    ],
  },

  'Torag': {
    obedience: "Spend 1 hour working at a forge, crafting or repairing items while praying to Torag.",
    perk: "+4 sacred bonus on Craft (armor) and Craft (weapons) checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['craft1','craft2'], condition: 'for armor and weapons only' },
    ],
  },

  'Urgathoa': {
    obedience: "Consume raw meat while reciting prayers to Urgathoa; allow some to putrefy first if possible.",
    perk: "+4 profane bonus on saves against disease.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'profane', targets: ['fort'], condition: 'vs disease only' },
    ],
  },

  'Zon-Kuthon': {
    obedience: "Inflict or receive pain through ritual; whip your own back while chanting praises.",
    perk: "+2 sacred bonus on saving throws against spells that deal hit point damage.",
    bonus: [
      { type: 'save', amount: 2, bonusType: 'sacred', targets: ['fort','ref','will'], condition: 'vs spells dealing HP damage only' },
    ],
  },

  // ── EMPYREAL LORDS ────────────────────────────
  'Arqueros': {
    obedience: "Pray for 1 hour while holding a heavy shield overhead. Source: Chronicle of the Righteous.",
    perk: "+4 sacred bonus on Strength checks and Strength-based skill checks.",
    bonus: [
      { type: 'skill_ability', amount: 4, bonusType: 'sacred', targets: ['str'] },
    ],
  },

  'Andoletta': {
    obedience: "Recite the Obeisance of Glorious Preservation from memory while weaving a basket for the poor.",
    perk: "+4 sacred bonus on saving throws against fear and charm effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear and charm effects only' },
    ],
  },

  'Black Butterfly': {
    obedience: "Perform an anonymous act of charity without speaking or gazing at the recipient.",
    perk: "+4 sacred bonus on saving throws against gaze and sonic attacks.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['fort','ref','will'], condition: 'vs gaze and sonic attacks only' },
    ],
  },

  'Desna': {
    obedience: "Spend 1 hour stargazing and singing, tracing constellations on the ground.",
    perk: "+4 sacred bonus on saving throws against curses and compulsions.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs curses and compulsions only' },
    ],
  },

  'Iomedae': {
    obedience: "Spend 1 hour in prayer and weapon drill, reciting the Acts of Iomedae.",
    perk: "+4 sacred bonus on saving throws against fear effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear effects only' },
    ],
  },

  'Ragathiel': {
    obedience: "Spend 1 hour in weapons drill and prayer; vow to fight evil with every strike.",
    perk: "+4 sacred bonus on saves against charm and compulsion effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs charm and compulsion only' },
    ],
  },

  // ── DWARVEN DEITIES ───────────────────────────
  'Angradd': {
    obedience: "Spend 1 hour at a forge or campfire, reciting battle-prayers while tending the flame.",
    perk: "+4 sacred bonus on saves against fire effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['ref'], condition: 'vs fire effects only' },
    ],
  },

  'Torag': {
    obedience: "Spend 1 hour working at a forge, crafting or repairing items while praying to Torag.",
    perk: "+4 sacred bonus on Craft (armor) and Craft (weapons) checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['craft1','craft2'], condition: 'for armor and weapons crafting' },
    ],
  },

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


// ══════════════════════════════════════════════════
// CLASS FEATURES — fixed, from the rules (aonprd.com)
// These are always-on class characteristics, not
// per-level abilities. Shown as a reference block.
// proficiencies, spellcasting type, special rules.
// ══════════════════════════════════════════════════
const CLASS_FEATURES = {

  warpriest: {
    proficiencies: {
      weapons: 'All simple and martial weapons, plus deity's favored weapon.',
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
      { name: 'Aura',                text: 'Possesses a powerful aura corresponding to deity's alignment (detectable by detect evil/good/law/chaos).' },
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
      weapons: 'All simple weapons, plus deity's favored weapon.',
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
      { name: 'Spontaneous Casting', text: 'Sacrifice any prepared spell to cast summon nature's ally of same level or lower.' },
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

// Weapon material modifiers
// Source: aonprd.com Equipment > Special Materials
const WEAPON_MATERIALS = {
  'Normal':            { dmgMod: 0,  note: '' },
  'Masterwork':        { dmgMod: 0,  note: '+1 attack (not stacked with enhancement bonus)' },
  'Alchemical Silver': { dmgMod: -1, note: '–1 damage. Bypasses DR/silver. Costs +20 gp/lb.' },
  'Cold Iron':         { dmgMod: 0,  note: 'Bypasses DR/cold iron. Costs double. Masterwork: +6000 gp.' },
  'Adamantine':        { dmgMod: 0,  note: 'Bypasses DR/adamantine and hardness <20. Costs +3000 gp (light), +6000 (1-hand), +9000 (2-hand).' },
  'Mithral':           { dmgMod: 0,  note: 'Counts as silver. Half weight. Costs +500 gp/lb.' },
  'Darkwood':          { dmgMod: 0,  note: 'Wooden weapons only. Half weight. Costs +10 gp/lb.' },
  'Bone':              { dmgMod: 0,  note: 'Fragile. Break DC 20 on attack roll of 1.' },
};

// ══════════════════════════════════════════════════
// CLASS ABILITIES — per level, per class
// Source: aonprd.com
//
// Each entry: { level, name, type, description, resource, weaponLinked }
// type: 'passive'|'active'|'bonus_feat'|'resource'|'weapon'|'armor'
// resource: optional { id, formula } — links to resource pool
// weaponLinked: true = show "link to weapon slot" option in feats
// unlockLevel: ability becomes available at this level
// ══════════════════════════════════════════════════
const CLASS_ABILITIES = {

  warpriest: [
    { level:1,  name:'Aura',                    type:'passive',    description:'Powerful aura matching deity alignment (as cleric). Detected by detect evil/good/law/chaos.' },
    { level:1,  name:'Blessings (minor)',        type:'active',     description:'Two blessings from deity domains. Minor power usable 3+½lvl/day (max 13). Swift action.', resource:'blessings_per_day' },
    { level:1,  name:'Fervor',                  type:'resource',   description:'½lvl+WIS uses/day. Touch ally to heal 1d6+1d6/3lvls as standard, or self as swift. Or: cast any prepared warpriest spell on self as swift action.', resource:'fervor_pool' },
    { level:1,  name:'Orisons',                 type:'passive',    description:'Cast 0-level cleric spells at will. Unlimited uses.' },
    { level:1,  name:'Sacred Weapon — Focus',   type:'weapon',     description:'Weapon Focus as bonus feat for chosen weapon. That weapon becomes the Sacred Weapon.', weaponLinked:true },
    { level:1,  name:'Sacred Weapon — Damage',  type:'weapon',     description:'Override weapon damage die based on class level: 1d6 (lvl1-4), 1d8 (5-9), 1d10 (10-14), 2d6 (15-19), 2d8 (20). Two-handed does not increase this die.', weaponLinked:true },
    { level:1,  name:'Spontaneous Casting',     type:'passive',    description:'Sacrifice prepared spell to cast cure/inflict wounds of same level or lower.' },
    { level:3,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Select any combat feat, treating warpriest level as fighter level for prerequisites. BAB counts as full for feat prerequisites.', bonusFeatCount:1 },
    { level:4,  name:'Channel Energy',          type:'active',     description:'Channel positive/negative energy by spending 2 Fervor uses. Heals/harms as cleric of same level. 30-ft burst.', resource:'fervor_pool' },
    { level:4,  name:'Sacred Weapon — Enhance', type:'weapon',     description:'Swift action: enhance Sacred Weapon for lvl rounds/day. +1 at lvl4 (+2 at 8, +3 at 12, +4 at 16, +5 at 20). Can spend points for special abilities instead.', weaponLinked:true, resource:'sw_enhance_rounds' },
    { level:6,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional combat feat (see level 3).', bonusFeatCount:2 },
    { level:7,  name:'Sacred Armor',            type:'armor',      description:'Swift action: enhance armor/shield for lvl minutes/day. +1 at lvl7 (+2 at 13, +3 at 19). Can spend points for properties.', resource:'sa_enhance_minutes' },
    { level:9,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional combat feat (see level 3).', bonusFeatCount:3 },
    { level:10, name:'Blessings (major)',        type:'active',     description:'Major blessing powers now available. Same pool as minor blessings.', resource:'blessings_per_day' },
    { level:12, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional combat feat (see level 3).', bonusFeatCount:4 },
    { level:13, name:'Sacred Armor (improve)',  type:'armor',      description:'Sacred Armor enhancement bonus increases to +2.' },
    { level:15, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional combat feat (see level 3).', bonusFeatCount:5 },
    { level:16, name:'Sacred Weapon +4',        type:'weapon',     description:'Sacred Weapon enhancement bonus increases to +4.', weaponLinked:true },
    { level:18, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional combat feat (see level 3).', bonusFeatCount:6 },
    { level:19, name:'Sacred Armor (improve)',  type:'armor',      description:'Sacred Armor enhancement bonus increases to +3.' },
    { level:20, name:'Sacred Weapon +5',        type:'weapon',     description:'Sacred Weapon enhancement bonus increases to +5.', weaponLinked:true },
  ],

  fighter: [
    { level:1,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Fighter bonus feat. Access to fighter-only feats.', bonusFeatCount:1 },
    { level:1,  name:'Bravery',                 type:'passive',    description:'+1 Will save vs fear. Increases by +1 every 4 levels.' },
    { level:2,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:2 },
    { level:2,  name:'Armor Training 1',        type:'passive',    description:'Reduce armor check penalty by 1, max Dex bonus +1. Move at full speed in medium armor.' },
    { level:4,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:3 },
    { level:5,  name:'Weapon Training 1',       type:'weapon',     description:'+1 attack and damage with chosen weapon group. Applies to all weapons in group.', weaponLinked:true },
    { level:6,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:4 },
    { level:6,  name:'Armor Training 2',        type:'passive',    description:'Armor check penalty –2, max Dex +2. Move at full speed in heavy armor.' },
    { level:8,  name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:5 },
    { level:9,  name:'Weapon Training 2',       type:'weapon',     description:'+1 attack/damage second weapon group; first group increases to +2.', weaponLinked:true },
    { level:10, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:6 },
    { level:10, name:'Armor Training 3',        type:'passive',    description:'Armor check penalty –3, max Dex +3.' },
    { level:11, name:'Armor Mastery',           type:'passive',    description:'DR 5/— while in medium or heavy armor.' },
    { level:12, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:7 },
    { level:13, name:'Weapon Training 3',       type:'weapon',     description:'+1 to third group; prior groups +1.', weaponLinked:true },
    { level:14, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:8 },
    { level:16, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:9 },
    { level:17, name:'Weapon Training 4',       type:'weapon',     description:'+1 to fourth group; prior groups +1.', weaponLinked:true },
    { level:18, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:10 },
    { level:19, name:'Weapon Mastery',          type:'weapon',     description:'Chosen weapon always scores a critical hit on 19-20. Cannot be disarmed.', weaponLinked:true },
    { level:20, name:'Bonus Combat Feat',       type:'bonus_feat', description:'Additional bonus feat.', bonusFeatCount:11 },
  ],

  barbarian: [
    { level:1,  name:'Fast Movement',           type:'passive',    description:'+10 ft land speed (not in heavy armor).' },
    { level:1,  name:'Rage',                    type:'resource',   description:'4+CON mod rounds/day (+2/level after 1st). +4 morale STR/CON, +2 Will, –2 AC. Fatigued after.', resource:'rage_rounds' },
    { level:2,  name:'Rage Power',              type:'active',     description:'Select one rage power. New power every 2 levels.' },
    { level:2,  name:'Uncanny Dodge',           type:'passive',    description:'Retain Dex to AC when flat-footed or attacked by invisible creature.' },
    { level:3,  name:'Trap Sense',              type:'passive',    description:'+1 Reflex saves and AC vs traps. Increases by +1 every 3 levels.' },
    { level:5,  name:'Improved Uncanny Dodge',  type:'passive',    description:'Cannot be flanked unless rogue is 4+ levels higher.' },
    { level:7,  name:'Damage Reduction',        type:'passive',    description:'DR 1/—. Increases by 1 every 3 levels (max DR 5/— at level 19).' },
    { level:11, name:'Greater Rage',            type:'passive',    description:'Rage bonuses increase to +6 STR/CON, +3 Will.' },
    { level:14, name:'Indomitable Will',        type:'passive',    description:'+4 Will saves vs enchantment while raging.' },
    { level:17, name:'Tireless Rage',           type:'passive',    description:'No longer fatigued after rage.' },
    { level:20, name:'Mighty Rage',             type:'passive',    description:'Rage bonuses increase to +8 STR/CON, +4 Will.' },
  ],

  bard: [
    { level:1,  name:'Bardic Knowledge',        type:'passive',    description:'+½ level on all Knowledge checks. Use all Knowledge untrained.' },
    { level:1,  name:'Bardic Performance',      type:'resource',   description:'4+CHA mod rounds/day (+2/level after 1st). Multiple types available.', resource:'bardic_performance' },
    { level:1,  name:'Cantrips',                type:'passive',    description:'0-level spells at will.' },
    { level:2,  name:'Versatile Performance',   type:'passive',    description:'Use Perform bonus for two related skills. New pair every 4 levels.' },
    { level:2,  name:'Well-Versed',             type:'passive',    description:'+4 saves vs bardic performance, sonic, and language-dependent effects.' },
    { level:3,  name:'Inspire Competence',      type:'active',     description:'+2 competence on ally skill checks. Increases every 4 levels.', resource:'bardic_performance' },
    { level:5,  name:'Lore Master',             type:'active',     description:'Take 10 on Knowledge checks. Once/day take 20 (additional use every 6 levels).' },
    { level:5,  name:'Inspire Greatness',       type:'active',     description:'+2d10 HP, +2 BAB, +1 Fort. Starts at 1 target; 14th level up to 3.', resource:'bardic_performance' },
    { level:8,  name:'Dirge of Doom',           type:'active',     description:'Enemies within 30 ft become shaken while you perform.', resource:'bardic_performance' },
    { level:9,  name:'Inspire Heroics',         type:'active',     description:'+4 morale saves and AC to one ally. At 15th level, up to 2.', resource:'bardic_performance' },
    { level:10, name:'Jack-of-All-Trades',      type:'passive',    description:'Use any skill untrained. At 16th level, all skills count as class skills.' },
    { level:12, name:'Soothing Performance',    type:'active',     description:'Magical calming of violent creatures and removing conditions.', resource:'bardic_performance' },
    { level:20, name:'Deadly Performance',      type:'active',     description:'Target must save or die. Supernatural ability.', resource:'bardic_performance' },
  ],

  cleric: [
    { level:1,  name:'Aura',                    type:'passive',    description:'Aura of alignment matching deity.' },
    { level:1,  name:'Channel Energy',          type:'resource',   description:'3+CHA mod/day. Heal 1d6+1d6/2lvls in 30-ft burst (or harm undead). Vs undead: DC 10+½lvl+CHA.', resource:'channel_energy' },
    { level:1,  name:'Domains',                 type:'passive',    description:'Two domains from deity. Each grants domain power and bonus spells.' },
    { level:1,  name:'Orisons',                 type:'passive',    description:'0-level spells at will.' },
    { level:1,  name:'Spontaneous Casting',     type:'passive',    description:'Sacrifice spell to cast cure/inflict wounds of same level or lower.' },
  ],

  druid: [
    { level:1,  name:'Nature Bond',             type:'passive',    description:'Animal companion or domain (from druid domain list).' },
    { level:1,  name:'Nature Sense',            type:'passive',    description:'+2 Knowledge (nature) and Survival.' },
    { level:1,  name:'Orisons',                 type:'passive',    description:'0-level spells at will.' },
    { level:1,  name:'Wild Empathy',            type:'active',     description:'Improve animal attitude as Diplomacy. Roll d20 + druid level + CHA.' },
    { level:2,  name:'Woodland Stride',         type:'passive',    description:'Move through natural difficult terrain at full speed.' },
    { level:3,  name:'Trackless Step',          type:'passive',    description:'Leave no trail in natural environments.' },
    { level:4,  name:'Resist Nature\'s Lure',   type:'passive',    description:'+4 saves vs fey spell-like abilities and spells with plant descriptor.' },
    { level:4,  name:'Wild Shape',              type:'resource',   description:'1/day at lvl4. +1/day every 2 levels. Becomes small/medium animal. Duration = level hours.', resource:'wild_shape' },
    { level:9,  name:'Venom Immunity',          type:'passive',    description:'Immune to all poisons.' },
    { level:13, name:'A Thousand Faces',        type:'active',     description:'At will: alter self (humanoid forms only).' },
    { level:15, name:'Timeless Body',           type:'passive',    description:'No ability score penalties from aging; immune to magical aging.' },
  ],

  paladin: [
    { level:1,  name:'Aura of Good',            type:'passive',    description:'Powerful aura of good (as cleric).' },
    { level:1,  name:'Detect Evil',             type:'active',     description:'At will: detect evil as the spell.' },
    { level:1,  name:'Smite Evil',              type:'resource',   description:'1+1/3lvls/day. +CHA to attack, +level to damage vs evil. +2 AC vs target.', resource:'smite_evil' },
    { level:2,  name:'Divine Grace',            type:'passive',    description:'+CHA modifier to all saving throws.' },
    { level:2,  name:'Lay on Hands',            type:'resource',   description:'½lvl+CHA/day. Heal 1d6/2lvls as standard (others) or swift (self). Remove conditions with mercies.', resource:'lay_on_hands' },
    { level:3,  name:'Aura of Courage',         type:'passive',    description:'Immune to fear. Allies within 10 ft get +4 vs fear.' },
    { level:3,  name:'Divine Health',           type:'passive',    description:'Immune to all diseases including supernatural.' },
    { level:3,  name:'Mercy',                   type:'passive',    description:'Lay on Hands removes one condition. New mercy every 3 levels.' },
    { level:4,  name:'Channel Positive Energy', type:'resource',   description:'Channel positive energy (costs 2 Lay on Hands uses).', resource:'lay_on_hands' },
    { level:5,  name:'Divine Bond',             type:'active',     description:'Holy weapon or mount. Weapon: enhance 1 min/level, +1 bonus (+1/3 levels beyond 5th).', resource:'divine_bond' },
    { level:8,  name:'Aura of Resolve',         type:'passive',    description:'Immune to charm. Allies within 10 ft +4 vs charm.' },
    { level:11, name:'Aura of Justice',         type:'active',     description:'2 Smite Evil uses: grant allies within 10 ft ability to smite evil.' },
    { level:14, name:'Aura of Faith',           type:'passive',    description:'Weapons count as good-aligned for DR.' },
    { level:17, name:'Aura of Righteousness',   type:'passive',    description:'DR 5/evil. Immune to compulsion.' },
    { level:20, name:'Holy Champion',           type:'passive',    description:'DR 10/evil. Smite evil banishes evil outsiders on kill.' },
  ],

  ranger: [
    { level:1,  name:'Favored Enemy',           type:'passive',    description:'+2 attack/damage and skills vs chosen creature type. +2 more per 5 levels.', weaponLinked:true },
    { level:1,  name:'Track',                   type:'passive',    description:'+½ level on Survival checks to follow tracks.' },
    { level:1,  name:'Wild Empathy',            type:'active',     description:'Improve animal attitude. Roll d20 + ranger level + CHA.' },
    { level:2,  name:'Combat Style Feat',       type:'bonus_feat', description:'Bonus feat from chosen combat style (archery or two-weapon fighting).', bonusFeatCount:1 },
    { level:3,  name:'Endurance',               type:'passive',    description:'Endurance as bonus feat.' },
    { level:3,  name:'Favored Terrain',         type:'passive',    description:'+2 initiative, Knowledge, Perception, Stealth, Survival in chosen terrain. +2 every 5 levels.' },
    { level:4,  name:'Animal Companion',        type:'passive',    description:'Animal companion as druid of level –3.' },
    { level:6,  name:'Combat Style Feat',       type:'bonus_feat', description:'Additional combat style feat.', bonusFeatCount:2 },
    { level:7,  name:'Woodland Stride',         type:'passive',    description:'Move through natural difficult terrain at full speed.' },
    { level:8,  name:'Swift Tracker',           type:'passive',    description:'Track at full speed without –5 penalty.' },
    { level:9,  name:'Evasion',                 type:'passive',    description:'Reflex save for no damage instead of half.' },
    { level:10, name:'Combat Style Feat',       type:'bonus_feat', description:'Additional combat style feat.', bonusFeatCount:3 },
    { level:11, name:'Quarry',                  type:'active',     description:'Standard: designate one creature as quarry. +2 attack, auto-confirm crits.' },
    { level:14, name:'Combat Style Feat',       type:'bonus_feat', description:'Additional combat style feat.', bonusFeatCount:4 },
    { level:16, name:'Improved Evasion',        type:'passive',    description:'Failed Reflex save = half damage.' },
    { level:18, name:'Combat Style Feat',       type:'bonus_feat', description:'Additional combat style feat.', bonusFeatCount:5 },
    { level:19, name:'Improved Quarry',         type:'active',     description:'Free action to quarry. Quarry persists even if you lose sight.' },
    { level:20, name:'Master Hunter',           type:'passive',    description:'Full attack as standard vs Favored Enemy. Kill instantly on hit if target fails Fort save.' },
  ],

  rogue: [
    { level:1,  name:'Sneak Attack',            type:'passive',    description:'+1d6 on flanked/flat-footed/denied Dex targets. +1d6 every 2 levels (max +10d6 at lvl19).' },
    { level:1,  name:'Trapfinding',             type:'passive',    description:'+½ level Perception to find traps. Disable Device on magic traps.' },
    { level:2,  name:'Evasion',                 type:'passive',    description:'Reflex save for no damage instead of half.' },
    { level:2,  name:'Rogue Talent',            type:'active',     description:'Select one rogue talent. Additional talent every 2 levels.' },
    { level:3,  name:'Trap Sense',              type:'passive',    description:'+1 Reflex and AC vs traps. +1 every 3 levels.' },
    { level:4,  name:'Uncanny Dodge',           type:'passive',    description:'Retain Dex to AC when flat-footed.' },
    { level:8,  name:'Improved Uncanny Dodge',  type:'passive',    description:'Cannot be flanked unless rogue is 4+ levels higher.' },
    { level:10, name:'Advanced Talents',        type:'active',     description:'Talent selection expands to advanced rogue talents.' },
    { level:20, name:'Master Strike',           type:'active',     description:'On sneak attack: target must Fort save or be paralyzed/unconscious/dead (your choice).' },
  ],

  alchemist: [
    { level:1,  name:'Alchemy',                 type:'passive',    description:'+level on Craft (alchemy). Can create mundane alchemical items as a wizard creates scrolls.' },
    { level:1,  name:'Bomb',                    type:'resource',   description:'level+INT mod bombs/day. 1d6+INT fire damage +1d6/2lvls. 20-ft range. Splash 1 damage.', resource:'bombs_per_day' },
    { level:1,  name:'Brew Potion',             type:'passive',    description:'Brew Potion as bonus feat.' },
    { level:1,  name:'Mutagen',                 type:'resource',   description:'1/day, 10 min/level. +4 alchemical to chosen physical score, –2 to mental. +2 natural AC.', resource:'mutagen_per_day' },
    { level:1,  name:'Throw Anything',          type:'passive',    description:'Throw Anything as bonus feat. +1 to attack with splash weapons.' },
    { level:2,  name:'Discovery',               type:'active',     description:'Select one discovery. Additional discovery every 2 levels.' },
    { level:2,  name:'Poison Resistance',       type:'passive',    description:'+2 saves vs poison. Increases every 2 levels (+4 at 5, +6 at 8, immune at 10).' },
    { level:3,  name:'Swift Alchemy',           type:'passive',    description:'Create alchemical items in half normal time. Apply poison as move action.' },
    { level:6,  name:'Swift Poisoning',         type:'passive',    description:'Apply poison as free action.' },
    { level:14, name:'Persistent Mutagen',      type:'passive',    description:'Mutagen lasts indefinitely.' },
    { level:18, name:'Instant Alchemy',         type:'passive',    description:'Create alchemical items as standard action.' },
    { level:20, name:'Grand Discovery',         type:'active',     description:'Select one grand discovery (True Mutagen, Philosopher\'s Stone, etc.).' },
  ],

  monk: [
    { level:1,  name:'Bonus Feat',              type:'bonus_feat', description:'Improved Unarmed Strike + one of: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, or Throw Anything.', bonusFeatCount:1 },
    { level:1,  name:'Flurry of Blows',         type:'active',     description:'Full-attack at highest BAB –2 with extra strike. Off-hand penalty does not apply.' },
    { level:1,  name:'Stunning Fist',           type:'resource',   description:'level uses/day. On hit: Fort DC 10+½lvl+WIS or stunned 1 round.', resource:'stunning_fist' },
    { level:1,  name:'Unarmed Strike',          type:'weapon',     description:'1d6 unarmed (medium). Treated as natural and manufactured weapon. +1d die every 4 levels.', weaponLinked:true },
    { level:2,  name:'Bonus Feat',              type:'bonus_feat', description:'Combat Reflexes, Deflect Arrows, Improved Trip, Mobility, Scorpion Style, or Spring Attack.', bonusFeatCount:2 },
    { level:2,  name:'Evasion',                 type:'passive',    description:'Reflex save for no damage.' },
    { level:3,  name:'Fast Movement',           type:'passive',    description:'+10 ft speed (not in armor). +10 every 3 levels.' },
    { level:3,  name:'Maneuver Training',       type:'passive',    description:'Use monk level instead of BAB for CMB.' },
    { level:3,  name:'Still Mind',              type:'passive',    description:'+2 saves vs enchantment spells and effects.' },
    { level:4,  name:'Ki Pool',                 type:'resource',   description:'½lvl+WIS ki points. Spend 1: extra attack at highest BAB, +20 speed, +4 Stealth.', resource:'ki_pool' },
    { level:4,  name:'Slow Fall',               type:'active',     description:'Within arm\'s reach of wall: reduce falling damage. 20 ft at lvl4, +10/2 levels.' },
    { level:5,  name:'High Jump',               type:'passive',    description:'+level on Acrobatics for jumping. Always count as running start.' },
    { level:5,  name:'Purity of Body',          type:'passive',    description:'Immune to all diseases including supernatural.' },
    { level:6,  name:'Bonus Feat',              type:'bonus_feat', description:'Gorgon\'s Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, or Mobility.', bonusFeatCount:3 },
    { level:7,  name:'Wholeness of Body',       type:'active',     description:'Spend 2 ki: heal own HP equal to monk level as standard action.' },
    { level:9,  name:'Improved Evasion',        type:'passive',    description:'Failed Reflex save = half damage.' },
    { level:10, name:'Bonus Feat',              type:'bonus_feat', description:'Combat Reflexes, Medusa\'s Wrath, Snatch Arrows, or Spring Attack.', bonusFeatCount:4 },
    { level:11, name:'Diamond Body',            type:'passive',    description:'Immune to all poisons.' },
    { level:12, name:'Abundant Step',           type:'active',     description:'Spend 2 ki: dimension door as spell-like ability (CL = ½ monk level).' },
    { level:13, name:'Diamond Soul',            type:'passive',    description:'Spell resistance = monk level + 10.' },
    { level:15, name:'Quivering Palm',          type:'resource',   description:'1/day. On hit: set resonance. Use standard action within level days: target Fort DC 10+½lvl+WIS or die.', resource:'quivering_palm' },
    { level:17, name:'Timeless Body',           type:'passive',    description:'No ability score penalties from aging.' },
    { level:19, name:'Empty Body',              type:'active',     description:'Spend 3 ki: etherealness for 1 minute/level.' },
    { level:20, name:'Perfect Self',            type:'passive',    description:'Outsider (native) type. DR 10/chaotic. +2 insight to any ability score.' },
  ],

  magus: [
    { level:1,  name:'Arcane Pool',             type:'resource',   description:'½lvl+INT points (min 1). Spend 1 as swift: enhance weapon +1 magic (+1/4 levels) for 1 minute.', resource:'arcane_pool' },
    { level:1,  name:'Spell Combat',            type:'active',     description:'Full-round: make all attacks and cast one magus spell. –2 to all attacks. Spell in off hand.' },
    { level:2,  name:'Spellstrike',             type:'active',     description:'Cast spell with range "touch" through weapon. Deliver via melee attack. Extra attack of opportunity to deliver.' },
    { level:3,  name:'Magus Arcana',            type:'active',     description:'Select one magus arcana. New arcana every 3 levels.' },
    { level:4,  name:'Spell Recall',            type:'active',     description:'Spend pool points to recall spent spells (1 pt per spell level).' },
    { level:5,  name:'Bonus Feat',              type:'bonus_feat', description:'Combat or metamagic feat.', bonusFeatCount:1 },
    { level:7,  name:'Medium Armor',            type:'passive',    description:'Cast arcane spells in medium armor without arcane spell failure.' },
    { level:8,  name:'Improved Spell Combat',   type:'active',     description:'Spell combat concentration check replaced by concentration check DC 15+spell level.' },
    { level:9,  name:'Magus Arcana',            type:'active',     description:'Additional magus arcana.' },
    { level:10, name:'Fighter Training',        type:'passive',    description:'Count ½ magus level as fighter level for combat feat prerequisites.' },
    { level:11, name:'Bonus Feat',              type:'bonus_feat', description:'Additional combat or metamagic feat.', bonusFeatCount:2 },
    { level:11, name:'Improved Spell Recall',   type:'active',     description:'Spend 1 pool point to recall any 1st-level spell; 2 pts for 2nd-level, etc.' },
    { level:13, name:'Heavy Armor',             type:'passive',    description:'Cast arcane spells in heavy armor without arcane spell failure.' },
    { level:14, name:'Greater Spell Combat',    type:'active',     description:'Add insight bonus from spell to any one attack roll or AC.' },
    { level:15, name:'Bonus Feat',              type:'bonus_feat', description:'Additional combat or metamagic feat.', bonusFeatCount:3 },
    { level:17, name:'Greater Spellstrike',     type:'active',     description:'Free action to release stored spell from weapon at any point in round.' },
    { level:18, name:'Magus Arcana',            type:'active',     description:'Additional magus arcana.' },
    { level:19, name:'Bonus Feat',              type:'bonus_feat', description:'Additional combat or metamagic feat.', bonusFeatCount:4 },
    { level:20, name:'True Magus',              type:'passive',    description:'Spend 2 pool points as swift: all attacks this round are maximized and empowered.' },
  ],

};

// ── RESOURCE FORMULAS per class ──────────────────
// Used to auto-calculate pool sizes on Apply Setup
const CLASS_RESOURCES = {
  warpriest: [
    { id:'fervor_pool',        label:'Fervor/day',              formula: (lvl,mods) => Math.floor(lvl/2) + mods.wis },
    { id:'blessings_per_day',  label:'Blessings/day',           formula: (lvl)      => 3 + Math.floor(lvl/2) },
    { id:'sw_enhance_rounds',  label:'Sacred Weapon rounds/day',formula: (lvl)      => lvl },
    { id:'sa_enhance_minutes', label:'Sacred Armor min/day',    formula: (lvl)      => lvl, minLevel:7 },
  ],
  fighter: [],
  barbarian: [
    { id:'rage_rounds',        label:'Rage rounds/day',         formula: (lvl,mods) => 4 + mods.con + (lvl-1)*2 },
  ],
  bard: [
    { id:'bardic_performance', label:'Bardic Performance/day',  formula: (lvl,mods) => 4 + mods.cha + (lvl-1)*2 },
  ],
  cleric: [
    { id:'channel_energy',     label:'Channel Energy/day',      formula: (lvl,mods) => 3 + mods.cha },
  ],
  druid: [
    { id:'wild_shape',         label:'Wild Shape/day',          formula: (lvl)      => Math.max(0, Math.floor((lvl-2)/2)) },
  ],
  paladin: [
    { id:'smite_evil',         label:'Smite Evil/day',          formula: (lvl)      => 1 + Math.floor((lvl-1)/3) },
    { id:'lay_on_hands',       label:'Lay on Hands/day',        formula: (lvl,mods) => Math.floor(lvl/2) + mods.cha },
    { id:'divine_bond',        label:'Divine Bond min/day',     formula: (lvl)      => lvl, minLevel:5 },
  ],
  ranger: [],
  rogue:   [],
  alchemist: [
    { id:'bombs_per_day',      label:'Bombs/day',               formula: (lvl,mods) => lvl + mods.int },
    { id:'mutagen_per_day',    label:'Mutagen/day',             formula: ()         => 1 },
  ],
  monk: [
    { id:'stunning_fist',      label:'Stunning Fist/day',       formula: (lvl)      => lvl },
    { id:'ki_pool',            label:'Ki Pool',                 formula: (lvl,mods) => Math.floor(lvl/2) + mods.wis },
    { id:'quivering_palm',     label:'Quivering Palm/day',      formula: ()         => 1, minLevel:15 },
  ],
  magus: [
    { id:'arcane_pool',        label:'Arcane Pool',             formula: (lvl,mods) => Math.floor(lvl/2) + mods.int },
  ],
};

// Helper: get class abilities available at or below a given level
function getClassAbilitiesForLevel(className, level) {
  const abilities = CLASS_ABILITIES[className] || [];
  return abilities.filter(a => a.level <= level);
}

// Helper: count bonus feats available at a given level
function getBonusFeatCount(className, level) {
  const abilities = CLASS_ABILITIES[className] || [];
  const bonusFeats = abilities.filter(a => a.type === 'bonus_feat' && a.level <= level);
  return bonusFeats.length > 0 ? bonusFeats[bonusFeats.length-1].bonusFeatCount || bonusFeats.length : 0;
}

// Helper: get resource pool sizes
function getResourcePools(className, level, abilityMods) {
  const resources = CLASS_RESOURCES[className] || [];
  return resources
    .filter(r => !r.minLevel || level >= r.minLevel)
    .map(r => ({
      id:      r.id,
      label:   r.label,
      max:     r.formula(level, abilityMods),
    }));
}
