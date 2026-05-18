/* Pathfinder 1e Sheet — Races
   Source: aonprd.com */
'use strict';

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
  // ── FEATURED RACES (Advanced Race Guide) ────────
  goblin: {
    name: 'Goblin',
    size: 'Small', speed: 30,
    abilityMods: { str:-2, dex:4, con:0, int:0, wis:0, cha:-2 },
    languages: ['Goblin'],
    bonusLanguages: ['Common','Draconic','Dwarven','Gnoll','Gnome','Halfling','Orc'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Skilled: +4 Ride and +4 Stealth.',
      'Small: +1 size bonus to AC and attacks, –1 CMB/CMD, +4 Stealth.',
      'Fast: Land speed 30 ft. despite Small size.',
      "Goblin Immunity: Immune to their own and other goblins' stench ability.",
      'Weapon Familiarity: Proficient with dogslicer and horsechopper.',
    ],
    racialBonuses: { ride: 4, stealth: 4 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Goblin',
  },

  hobgoblin: {
    name: 'Hobgoblin',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:2, con:2, int:0, wis:0, cha:-2 },
    languages: ['Common','Goblin'],
    bonusLanguages: ['Draconic','Dwarven','Infernal','Giant','Orc'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Sneaky: +4 Stealth.',
      'Fearsome: +2 Intimidate.',
    ],
    racialBonuses: { stealth: 4, intimidate: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Hobgoblin',
  },

  kobold: {
    name: 'Kobold',
    size: 'Small', speed: 30,
    abilityMods: { str:-4, dex:2, con:-2, int:0, wis:0, cha:-2 },
    languages: ['Draconic'],
    bonusLanguages: ['Common','Dwarven','Gnome','Undercommon'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Crafty: +2 Craft (trapmaking), +2 Perception, +2 Profession (miner).',
      'Small: +1 AC and attacks, –1 CMB/CMD, +4 Stealth.',
      'Light Sensitivity: Dazzled in bright sunlight.',
      'Armor: +1 natural armor bonus.',
    ],
    racialBonuses: { perception: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Kobold',
  },

  orc: {
    name: 'Orc',
    size: 'Medium', speed: 30,
    abilityMods: { str:4, dex:0, con:0, int:-2, wis:-2, cha:-2 },
    languages: ['Common','Orc'],
    bonusLanguages: ['Dwarven','Giant','Gnoll','Goblin','Undercommon'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Ferocity: Remains conscious and can act (staggered) when below 0 HP (once per day).',
      'Light Sensitivity: Dazzled in bright sunlight.',
      'Weapon Familiarity: Proficient with greataxes and falchions; treat orc weapons as martial.',
    ],
    racialBonuses: {},
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Orc',
  },

  aasimar: {
    name: 'Aasimar',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:0, con:0, int:0, wis:2, cha:2 },
    languages: ['Common','Celestial'],
    bonusLanguages: ['Draconic','Dwarven','Elven','Gnome','Halfling','Sylvan'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Skilled: +2 Diplomacy and +2 Perception.',
      'Celestial Resistance: Acid resistance 5, cold resistance 5, electricity resistance 5.',
      'Spell-Like Abilities: 1/day — daylight (CL = character level).',
      'Native Outsider: Counts as both outsider (native) and humanoid.',
    ],
    racialBonuses: { diplomacy: 2, perception: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Aasimar',
  },

  tiefling: {
    name: 'Tiefling',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:0, con:0, int:2, wis:0, cha:-2 },
    languages: ['Common','Abyssal','Infernal'],
    bonusLanguages: ['Draconic','Dwarven','Elven','Gnome','Halfling','Orc'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Skilled: +2 Bluff and +2 Stealth.',
      'Fiendish Resistance: Cold resistance 5, electricity resistance 5, fire resistance 5.',
      'Spell-Like Abilities: 1/day — darkness (CL = character level).',
      'Native Outsider: Counts as both outsider (native) and humanoid.',
      'Fiendish Sorcery: If sorcerer with Abyssal or Infernal bloodline, +1 to bloodline bonuses.',
    ],
    racialBonuses: { bluff: 2, stealth: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Tiefling',
  },

  dhampir: {
    name: 'Dhampir',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:2, con:-2, int:0, wis:0, cha:2 },
    languages: ['Common'],
    bonusLanguages: ['Abyssal','Draconic','Dwarven','Elven','Undercommon'],
    vision: 'Darkvision 60 ft., low-light vision.',
    traits: [
      'Darkvision: 60 ft. Low-light vision.',
      'Undead Resistance: +2 racial saves vs. disease and mind-affecting effects.',
      'Spell-Like Abilities: 1/day — detect undead (CL = character level).',
      'Negative Energy Affinity: Healed by negative energy, harmed by positive energy.',
      'Light Sensitivity: Dazzled in bright sunlight.',
      'Skilled: +2 Bluff, +2 Perception.',
      'Manipulative: +2 Bluff and +2 Perception.',
    ],
    racialBonuses: { bluff: 2, perception: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Dhampir',
  },

  fetchling: {
    name: 'Fetchling',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:2, con:0, int:0, wis:-2, cha:2 },
    languages: ['Common'],
    bonusLanguages: ['Aklo','Aquan','Auran','Draconic',"D'ziriak",'Ignan','Terran','Undercommon'],
    vision: 'Darkvision 60 ft., low-light vision.',
    traits: [
      'Darkvision: 60 ft. Low-light vision.',
      'Shadow Blending: Concealment in dim light (20% miss chance).',
      'Shadowy Resistance: Cold resistance 5, electricity resistance 5.',
      'Skilled: +2 Knowledge (planes) and +2 Stealth.',
      'Spell-Like Abilities: 1/day — disguise self (CL = character level).',
    ],
    racialBonuses: { k_planes: 2, stealth: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Fetchling',
  },

  tengu: {
    name: 'Tengu',
    size: 'Medium', speed: 30,
    abilityMods: { str:-2, dex:2, con:0, int:0, wis:0, cha:0 },
    languages: ['Common','Tengu'],
    bonusLanguages: ['Any (except secret languages)'],
    vision: 'Low-light vision.',
    traits: [
      'Low-Light Vision: See twice as far in dim light.',
      'Gifted Linguist: +4 Linguistics; learn 2 languages per rank in Linguistics.',
      'Sneaky: +2 Perception and +2 Stealth.',
      'Natural Weapon: Bite (1d3 damage).',
      'Swordtrained: Proficient with swords of all types (short, long, great, katana, etc.).',
    ],
    racialBonuses: { perception: 2, stealth: 2, linguistics: 4 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Tengu',
  },

  ratfolk: {
    name: 'Ratfolk',
    size: 'Small', speed: 20,
    abilityMods: { str:-2, dex:2, con:0, int:2, wis:0, cha:-2 },
    languages: ['Common'],
    bonusLanguages: ['Aklo','Dwarven','Gnoll','Gnome','Goblin','Halfling','Orc','Undercommon'],
    vision: 'Darkvision 60 ft.',
    traits: [
      'Darkvision: 60 ft.',
      'Tinker: +2 Craft (alchemy), +2 Perception, +2 Use Magic Device.',
      'Small: +1 AC and attacks, –1 CMB/CMD, +4 Stealth.',
      'Swarming: Up to two ratfolk can share the same space; flanking bonus stacks.',
      'Rodent Empathy: +4 Handle Animal to influence rats and dire rats.',
    ],
    racialBonuses: { perception: 2, use_magic_device: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Ratfolk',
  },

  catfolk: {
    name: 'Catfolk',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:2, con:0, int:0, wis:0, cha:2 },
    languages: ['Common','Catfolk'],
    bonusLanguages: ['Elven','Gnome','Gnoll','Halfling','Orc','Sylvan'],
    vision: 'Low-light vision.',
    traits: [
      'Low-Light Vision: See twice as far in dim light.',
      "Cat's Luck: Once/day, roll Reflex save twice and take better result.",
      'Natural Hunter: +2 Perception, +2 Stealth, +2 Survival.',
      'Sprinter: +10 ft speed when charging, running, or withdrawing.',
    ],
    racialBonuses: { perception: 2, stealth: 2, survival: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Catfolk',
  },

  drow: {
    name: 'Drow',
    size: 'Medium', speed: 30,
    abilityMods: { str:0, dex:2, con:-2, int:2, wis:0, cha:2 },
    languages: ['Elven','Undercommon'],
    bonusLanguages: ['Abyssal','Aklo','Aquan','Common','Draconic','Drow Sign Language','Gnome','Goblin'],
    vision: 'Darkvision 120 ft.',
    traits: [
      'Darkvision: 120 ft.',
      'Drow Immunities: Immune to magic sleep; +2 saves vs. enchantment spells.',
      'Keen Senses: +2 Perception.',
      'Poison Use: Never risk poisoning self when applying poison to weapon.',
      'Spell Resistance: 6 + character level.',
      'Spell-Like Abilities: 1/day — dancing lights, darkness, faerie fire (CL = character level).',
      'Light Blindness: Blinded 1 round in bright light; dazzled thereafter.',
      'Weapon Familiarity: Proficient with hand crossbow, rapier, short sword.',
    ],
    racialBonuses: { perception: 2 },
    aonUrl: 'https://aonprd.com/RacesDisplay.aspx?ItemName=Drow',
  },

};

// ══════════════════════════════════════════════════
// DEITIES (selection — CRB + Inner Sea Gods)
// Source: aonprd.com
// ══════════════════════════════════════════════════
