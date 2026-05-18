/* Pathfinder 1e Sheet — Magic Items Database
   Source: aonprd.com (CRB + APG + Ultimate Equipment)
   Wondrous items, ioun stones, rings, rods, staves
   Used by AC Items quick-fill and gear tracker
*/
'use strict';

// ══════════════════════════════════════════════════
// MAGIC ITEM SLOT TYPES
// For filtering in the quick-fill UI
// ══════════════════════════════════════════════════
const ITEM_SLOTS = [
  'Belt','Body','Chest','Eyes','Feet','Hands',
  'Head','Headband','Neck','Ring','Shoulders',
  'Slotless','Wrist',
];

// ══════════════════════════════════════════════════
// WONDROUS ITEMS & MAGIC ITEMS
// Format:
//   name, slot, cost (gp), weight (lbs),
//   acBonus, acType (enhancement/deflection/natural/etc),
//   statBonus: { ability: amount },  — feeds ability score
//   skillBonus: { skillId: amount }, — feeds skill misc
//   speedBonus,                       — feeds speed_land
//   note,                             — display-only
//   source
// ══════════════════════════════════════════════════
const MAGIC_ITEMS = {

  // ── BELTS ────────────────────────────────────────
  'Belt of Giant Strength +2': {
    slot:'Belt', cost:4000, weight:1,
    statBonus:{ str:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Strength.',
    source:'CRB',
  },
  'Belt of Giant Strength +4': {
    slot:'Belt', cost:16000, weight:1,
    statBonus:{ str:4 }, bonusType:'enhancement',
    note:'+4 enhancement bonus to Strength.',
    source:'CRB',
  },
  'Belt of Giant Strength +6': {
    slot:'Belt', cost:36000, weight:1,
    statBonus:{ str:6 }, bonusType:'enhancement',
    note:'+6 enhancement bonus to Strength.',
    source:'CRB',
  },
  'Belt of Incredible Dexterity +2': {
    slot:'Belt', cost:4000, weight:1,
    statBonus:{ dex:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Dexterity.',
    source:'CRB',
  },
  'Belt of Mighty Constitution +2': {
    slot:'Belt', cost:4000, weight:1,
    statBonus:{ con:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Constitution.',
    source:'CRB',
  },
  'Belt of Physical Might +2 (STR/DEX)': {
    slot:'Belt', cost:10000, weight:1,
    statBonus:{ str:2, dex:2 }, bonusType:'enhancement',
    note:'+2 enhancement to both STR and DEX.',
    source:'CRB',
  },
  'Belt of Physical Perfection +2': {
    slot:'Belt', cost:16000, weight:1,
    statBonus:{ str:2, dex:2, con:2 }, bonusType:'enhancement',
    note:'+2 enhancement to STR, DEX, and CON.',
    source:'CRB',
  },

  // ── HEADBANDS ────────────────────────────────────
  'Headband of Inspired Wisdom +2': {
    slot:'Headband', cost:4000, weight:0,
    statBonus:{ wis:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Wisdom. Grants +2 ranks in one Wis-based skill.',
    source:'CRB',
  },
  'Headband of Inspired Wisdom +4': {
    slot:'Headband', cost:16000, weight:0,
    statBonus:{ wis:4 }, bonusType:'enhancement',
    note:'+4 enhancement to WIS. Grants +4 ranks in one Wis-based skill.',
    source:'CRB',
  },
  'Headband of Vast Intelligence +2': {
    slot:'Headband', cost:4000, weight:0,
    statBonus:{ int:2 }, bonusType:'enhancement',
    note:'+2 enhancement to INT. Grants +2 ranks in one Int-based skill.',
    source:'CRB',
  },
  'Headband of Alluring Charisma +2': {
    slot:'Headband', cost:4000, weight:0,
    statBonus:{ cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to CHA. Grants +2 ranks in one Cha-based skill.',
    source:'CRB',
  },
  'Headband of Mental Prowess +2 (WIS/CHA)': {
    slot:'Headband', cost:10000, weight:0,
    statBonus:{ wis:2, cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to WIS and CHA.',
    source:'CRB',
  },
  'Headband of Mental Superiority +2': {
    slot:'Headband', cost:16000, weight:0,
    statBonus:{ int:2, wis:2, cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to INT, WIS, and CHA.',
    source:'CRB',
  },

  // ── BOOTS / FEET ─────────────────────────────────
  'Boots of Speed': {
    slot:'Feet', cost:12000, weight:1,
    note:'10 rounds/day: haste effect (activate as free action).',
    source:'CRB',
  },
  'Boots of Striding and Springing': {
    slot:'Feet', cost:5500, weight:1,
    speedBonus:10,
    skillBonus:{ acrobatics:5 },
    note:'+10 ft. enhancement to land speed. +5 competence on Acrobatics (jumping).',
    source:'CRB',
  },
  'Boots of Elvenkind': {
    slot:'Feet', cost:2500, weight:0.5,
    skillBonus:{ stealth:5 },
    note:'+5 competence on Stealth checks.',
    source:'CRB',
  },
  'Boots of the Winterlands': {
    slot:'Feet', cost:2500, weight:1,
    note:'Ignore difficult terrain in ice/snow. Cold resistance 10. Treat cold as 0°F.',
    source:'CRB',
  },
  'Winged Boots': {
    slot:'Feet', cost:16000, weight:1,
    note:'3/day: fly 60 ft (good maneuverability) for up to 5 minutes each use.',
    source:'CRB',
  },
  'Boots of Levitation': {
    slot:'Feet', cost:7500, weight:1,
    note:'At will: levitate (as the spell, CL 6th).',
    source:'CRB',
  },

  // ── CLOAKS / SHOULDERS ───────────────────────────
  'Cloak of Resistance +1': {
    slot:'Shoulders', cost:1000, weight:1,
    saveBonus:1, bonusType:'resistance',
    note:'+1 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +2': {
    slot:'Shoulders', cost:4000, weight:1,
    saveBonus:2, bonusType:'resistance',
    note:'+2 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +3': {
    slot:'Shoulders', cost:9000, weight:1,
    saveBonus:3, bonusType:'resistance',
    note:'+3 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +4': {
    slot:'Shoulders', cost:16000, weight:1,
    saveBonus:4, bonusType:'resistance',
    note:'+4 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +5': {
    slot:'Shoulders', cost:25000, weight:1,
    saveBonus:5, bonusType:'resistance',
    note:'+5 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Elvenkind': {
    slot:'Shoulders', cost:2500, weight:1,
    skillBonus:{ stealth:5 },
    note:'+5 competence on Stealth checks.',
    source:'CRB',
  },
  'Cloak of the Manta Ray': {
    slot:'Shoulders', cost:7200, weight:1,
    note:'Breathe underwater. Swim speed 60 ft. AC 3 vs aquatic creatures.',
    source:'CRB',
  },

  // ── AMULETS / NECK ───────────────────────────────
  'Amulet of Natural Armor +1': {
    slot:'Neck', cost:2000, weight:0,
    acBonus:1, acType:'natural armor',
    note:'+1 enhancement to natural armor (stacks with existing natural armor).',
    source:'CRB',
  },
  'Amulet of Natural Armor +2': {
    slot:'Neck', cost:8000, weight:0,
    acBonus:2, acType:'natural armor',
    note:'+2 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Natural Armor +3': {
    slot:'Neck', cost:18000, weight:0,
    acBonus:3, acType:'natural armor',
    note:'+3 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Natural Armor +4': {
    slot:'Neck', cost:32000, weight:0,
    acBonus:4, acType:'natural armor',
    note:'+4 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Natural Armor +5': {
    slot:'Neck', cost:50000, weight:0,
    acBonus:5, acType:'natural armor',
    note:'+5 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Mighty Fists +1': {
    slot:'Neck', cost:4000, weight:0,
    note:'+1 enhancement on unarmed strikes and natural attacks (attack and damage).',
    source:'CRB',
  },
  'Periapt of Wisdom +2': {
    slot:'Neck', cost:4000, weight:0,
    statBonus:{ wis:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Wisdom.',
    source:'CRB',
  },
  'Periapt of Health': {
    slot:'Neck', cost:7500, weight:0,
    note:'Immune to disease (including magical diseases).',
    source:'CRB',
  },
  'Periapt of Proof against Poison': {
    slot:'Neck', cost:27000, weight:0,
    note:'Immune to all poisons.',
    source:'CRB',
  },
  'Necklace of Fireballs (Type I)': {
    slot:'Neck', cost:1650, weight:0,
    note:'2 beads: 5d6 fireball (Ref DC 14 half).',
    source:'CRB',
  },

  // ── RINGS ────────────────────────────────────────
  'Ring of Protection +1': {
    slot:'Ring', cost:2000, weight:0,
    acBonus:1, acType:'deflection',
    note:'+1 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +2': {
    slot:'Ring', cost:8000, weight:0,
    acBonus:2, acType:'deflection',
    note:'+2 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +3': {
    slot:'Ring', cost:18000, weight:0,
    acBonus:3, acType:'deflection',
    note:'+3 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +4': {
    slot:'Ring', cost:32000, weight:0,
    acBonus:4, acType:'deflection',
    note:'+4 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +5': {
    slot:'Ring', cost:50000, weight:0,
    acBonus:5, acType:'deflection',
    note:'+5 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Feather Falling': {
    slot:'Ring', cost:2200, weight:0,
    note:'Constant feather fall effect (as spell).',
    source:'CRB',
  },
  'Ring of Sustenance': {
    slot:'Ring', cost:2500, weight:0,
    note:'Need only 2 hours of sleep. Does not need to eat or drink.',
    source:'CRB',
  },
  'Ring of Invisibility': {
    slot:'Ring', cost:20000, weight:0,
    note:'At will: become invisible (as the spell). Ends on attack.',
    source:'CRB',
  },
  'Ring of Spell Storing (Minor)': {
    slot:'Ring', cost:18000, weight:0,
    note:'Store up to 3 levels of spells. Cast stored spell as if you cast it.',
    source:'CRB',
  },
  'Ring of Freedom of Movement': {
    slot:'Ring', cost:40000, weight:0,
    note:'Constant freedom of movement. Immune to paralysis, entangle, slow, solid fog.',
    source:'CRB',
  },
  'Ring of Counterspells': {
    slot:'Ring', cost:4000, weight:0,
    note:'Store one spell. Automatically counterspells the same spell cast at you.',
    source:'CRB',
  },
  'Ring of Evasion': {
    slot:'Ring', cost:25000, weight:0,
    note:'Constant evasion (Ref save for no damage instead of half).',
    source:'CRB',
  },
  'Ring of Force Shield': {
    slot:'Ring', cost:8500, weight:0,
    acBonus:4, acType:'shield',
    note:'Activate as free action: +4 shield bonus to AC (force). No check penalty or spell failure.',
    source:'CRB',
  },

  // ── IOUN STONES ──────────────────────────────────
  'Dusty Rose Prism Ioun Stone': {
    slot:'Slotless', cost:5000, weight:0,
    acBonus:1, acType:'insight',
    note:'+1 insight bonus to AC.',
    source:'CRB',
  },
  'Pale Blue Rhomboid Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ str:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Strength.',
    source:'CRB',
  },
  'Pink and Green Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Charisma.',
    source:'CRB',
  },
  'Incandescent Blue Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ wis:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Wisdom.',
    source:'CRB',
  },
  'Dark Blue Rhomboid Ioun Stone': {
    slot:'Slotless', cost:10000, weight:0,
    note:'Alertness (as feat): +2 Perception and +2 Sense Motive.',
    source:'CRB',
  },
  'Scarlet and Blue Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ int:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Intelligence.',
    source:'CRB',
  },
  'Pink Rhomboid Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ con:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Constitution.',
    source:'CRB',
  },
  'Deep Red Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ dex:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Dexterity.',
    source:'CRB',
  },
  'Pearly White Spindle Ioun Stone': {
    slot:'Slotless', cost:20000, weight:0,
    note:'Regenerate 1 HP per 10 minutes.',
    source:'CRB',
  },
  'Iridescent Spindle Ioun Stone': {
    slot:'Slotless', cost:18000, weight:0,
    note:'Sustains creature without air.',
    source:'CRB',
  },
  'Orange Prism Ioun Stone': {
    slot:'Slotless', cost:30000, weight:0,
    note:'+1 caster level.',
    source:'CRB',
  },

  // ── GLOVES / HANDS ───────────────────────────────
  'Gloves of Swimming and Climbing': {
    slot:'Hands', cost:6250, weight:0,
    skillBonus:{ swim:5, climb:5 },
    note:'+5 competence on Swim and Climb checks.',
    source:'CRB',
  },
  'Gauntlets of Ogre Power': {
    slot:'Hands', cost:4000, weight:4,
    statBonus:{ str:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Strength.',
    source:'CRB',
  },
  'Gloves of Arrow Snaring': {
    slot:'Hands', cost:4000, weight:0,
    note:'2/day: catch an arrow or bolt shot at you (no action required). Must be aware of attack.',
    source:'CRB',
  },

  // ── EYES / GOGGLES ───────────────────────────────
  'Eyes of the Eagle': {
    slot:'Eyes', cost:2500, weight:0,
    skillBonus:{ perception:5 },
    note:'+5 competence on Perception checks.',
    source:'CRB',
  },
  'Goggles of Night': {
    slot:'Eyes', cost:12000, weight:0,
    note:'Darkvision 60 ft. (or +60 ft if already have darkvision).',
    source:'CRB',
  },
  'Eyes of Keen Sight': {
    slot:'Eyes', cost:6000, weight:0,
    note:'See invisible creatures and objects (as see invisibility). Constant effect.',
    source:'APG',
  },

  // ── WRISTS / BRACERS ─────────────────────────────
  'Bracers of Armor +1': {
    slot:'Wrist', cost:1000, weight:1,
    acBonus:1, acType:'armor',
    note:'+1 armor bonus to AC (as mage armor). No max Dex, no check penalty.',
    source:'CRB',
  },
  'Bracers of Armor +2': {
    slot:'Wrist', cost:4000, weight:1,
    acBonus:2, acType:'armor',
    note:'+2 armor bonus to AC.',
    source:'CRB',
  },
  'Bracers of Armor +4': {
    slot:'Wrist', cost:16000, weight:1,
    acBonus:4, acType:'armor',
    note:'+4 armor bonus to AC.',
    source:'CRB',
  },
  'Bracers of Armor +6': {
    slot:'Wrist', cost:36000, weight:1,
    acBonus:6, acType:'armor',
    note:'+6 armor bonus to AC.',
    source:'CRB',
  },
  'Bracers of Archery (Lesser)': {
    slot:'Wrist', cost:5000, weight:1,
    note:'+1 competence on attack rolls with bows. Treat all bows as proficient.',
    source:'CRB',
  },

  // ── CHEST / VEST ─────────────────────────────────
  'Vest of Resistance +1': {
    slot:'Chest', cost:1000, weight:1,
    saveBonus:1, bonusType:'resistance',
    note:'+1 resistance to all saves (alternative to cloak).',
    source:'UE',
  },
  'Vest of Resistance +3': {
    slot:'Chest', cost:9000, weight:1,
    saveBonus:3, bonusType:'resistance',
    note:'+3 resistance to all saves.',
    source:'UE',
  },
  'Vest of Escape': {
    slot:'Chest', cost:5200, weight:0.5,
    skillBonus:{ escape_artist:4, disable_device:4 },
    note:'+4 competence on Escape Artist and Disable Device. Hidden tools.',
    source:'CRB',
  },

  // ── HEAD ─────────────────────────────────────────
  'Helm of Comprehend Languages and Read Magic': {
    slot:'Head', cost:5200, weight:3,
    note:'At will: comprehend languages. 3/day: read magic (1 min each).',
    source:'CRB',
  },
  'Helm of Telepathy': {
    slot:'Head', cost:27000, weight:3,
    note:'At will: detect thoughts (DC 13). 1/day: suggestion (DC 15).',
    source:'CRB',
  },
  'Helm of Brilliance': {
    slot:'Head', cost:125000, weight:3,
    note:'Multiple effects: fireballs, prismatic spray, daylight. Gems expended.',
    source:'CRB',
  },
  'Circlet of Persuasion': {
    slot:'Head', cost:4500, weight:0,
    skillBonus:{ diplomacy:3, bluff:3, intimidate:3, perform1:3 },
    note:'+3 competence on Charisma-based skill checks.',
    source:'CRB',
  },

  // ── BODY ─────────────────────────────────────────
  'Robe of Blending': {
    slot:'Body', cost:27000, weight:1,
    note:'At will: change appearance (as disguise self). Continuous.',
    source:'CRB',
  },
  'Robe of the Archmagi': {
    slot:'Body', cost:75000, weight:1,
    note:'+5 armor AC, +4 resistance to saves, SR 18. Color matches alignment.',
    source:'CRB',
  },
  'Monk\'s Robe': {
    slot:'Body', cost:13000, weight:1,
    note:'Treat monk level as 5 higher (or as 5th level if not a monk) for AC, unarmed damage.',
    source:'CRB',
  },

  // ── ARMOR MATERIALS (for AC Items table) ─────────
  // These modify existing armor entries

  // MITHRAL ARMOR — lighter, no spell failure, lower check penalty
  'Mithral Chain Shirt': {
    slot:'Armor', cost:1100+100*25, weight:10, // 25gp/lb mithral premium, half weight
    acBonus:4, acType:'Light armor',
    maxDex:6, checkPen:0, spellFail:10,
    note:'Counts as light armor even for proficiency. No spell failure for divine casters.',
    source:'CRB',
  },
  'Mithral Full Plate +1': {
    slot:'Armor', cost:1500+18000, weight:25,
    acBonus:10, acType:'Heavy armor',
    maxDex:3, checkPen:-3, spellFail:25,
    note:'Mithral: counts as medium armor. +1 enhancement.',
    source:'CRB',
  },
  'Mithral Breastplate': {
    slot:'Armor', cost:200+4200, weight:15,
    acBonus:6, acType:'Medium armor',
    maxDex:5, checkPen:-1, spellFail:15,
    note:'Mithral: counts as light armor for all purposes.',
    source:'CRB',
  },

  // ADAMANTINE ARMOR — DR bonus
  'Adamantine Full Plate': {
    slot:'Armor', cost:3000+1500, weight:50,
    acBonus:9, acType:'Heavy armor',
    maxDex:1, checkPen:-6, spellFail:35,
    note:'DR 3/—. Immunity to critical hits from adamantine weapons.',
    source:'CRB',
  },
  'Adamantine Breastplate': {
    slot:'Armor', cost:3000+200, weight:30,
    acBonus:6, acType:'Medium armor',
    maxDex:3, checkPen:-4, spellFail:25,
    note:'DR 2/—.',
    source:'CRB',
  },

  // ── ENHANCED ARMOR ───────────────────────────────
  'Chainmail +1': {
    slot:'Armor', cost:150+1000, weight:40,
    acBonus:7, acType:'Medium armor',
    maxDex:2, checkPen:-4, spellFail:30,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Breastplate +1': {
    slot:'Armor', cost:200+1000, weight:30,
    acBonus:7, acType:'Medium armor',
    maxDex:3, checkPen:-3, spellFail:25,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Full Plate +1': {
    slot:'Armor', cost:1500+1000, weight:50,
    acBonus:10, acType:'Heavy armor',
    maxDex:1, checkPen:-5, spellFail:35,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Buckler +1': {
    slot:'Shield', cost:5+1000, weight:5,
    acBonus:2, acType:'Shield',
    checkPen:-0, spellFail:5,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Shield, Heavy Steel +1': {
    slot:'Shield', cost:20+1000, weight:15,
    acBonus:3, acType:'Shield',
    checkPen:-1, spellFail:15,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Shield, Heavy Steel +2': {
    slot:'Shield', cost:20+4000, weight:15,
    acBonus:4, acType:'Shield',
    checkPen:-1, spellFail:15,
    note:'+2 enhancement bonus.',
    source:'CRB',
  },

  // ── SPECIAL ARMOR PROPERTIES ─────────────────────
  'Armor of Fortification (Light)': {
    slot:'Armor', cost:1000, weight:0,
    note:'+1 armor property: 25% chance to negate critical hit or sneak attack.',
    source:'CRB',
  },
  'Armor of Fortification (Medium)': {
    slot:'Armor', cost:9000, weight:0,
    note:'+3 armor property: 75% chance to negate critical hit or sneak attack.',
    source:'CRB',
  },
  'Armor of Fire Resistance': {
    slot:'Armor', cost:18000, weight:0,
    note:'+3 armor property: fire resistance 10.',
    source:'CRB',
  },
  'Armor of Energy Resistance': {
    slot:'Armor', cost:18000, weight:0,
    note:'+3 armor property: choose one energy type, resistance 10.',
    source:'CRB',
  },
  'Glamered Armor': {
    slot:'Armor', cost:2700, weight:0,
    note:'+1 armor property: change armor appearance to any other armor type or clothing.',
    source:'CRB',
  },

  // ── MISCELLANEOUS USEFUL ITEMS ───────────────────
  'Handy Haversack': {
    slot:'Slotless', cost:2000, weight:5,
    note:'Backpack: stores up to 120 lbs. Any item can be retrieved as move action. Bag weighs 5 lbs regardless of contents.',
    source:'CRB',
  },
  'Bag of Holding (Type I)': {
    slot:'Slotless', cost:2500, weight:15,
    note:'Holds 250 lbs (30 cubic ft). Internal weight ignored. Bag weighs 15 lbs.',
    source:'CRB',
  },
  'Bag of Holding (Type II)': {
    slot:'Slotless', cost:5000, weight:25,
    note:'Holds 500 lbs (70 cubic ft). Bag weighs 25 lbs.',
    source:'CRB',
  },
  'Portable Hole': {
    slot:'Slotless', cost:20000, weight:0,
    note:'Creates 6-ft deep, 10-ft diameter extradimensional space. Holds unlimited weight.',
    source:'CRB',
  },
  'Decanter of Endless Water': {
    slot:'Slotless', cost:9000, weight:2,
    note:'Produces 1 gallon/round (stream), 5 gallons/round (fountain), or 30 gallons/round (geyser).',
    source:'CRB',
  },
  'Rope of Climbing': {
    slot:'Slotless', cost:3000, weight:3,
    skillBonus:{ climb:10 },
    note:'+10 competence on Climb. Can tie/untie knots on command. Move 10 ft/round.',
    source:'CRB',
  },
  'Lantern of Revealing': {
    slot:'Slotless', cost:30000, weight:2,
    note:'Illuminates as a normal lantern AND reveals invisible creatures/objects within 25 ft.',
    source:'CRB',
  },
  'Figurine of Wondrous Power (Silver Raven)': {
    slot:'Slotless', cost:3800, weight:0,
    note:'1/week: animate as raven for up to 24 hours. Can deliver messages.',
    source:'CRB',
  },
  'Phylactery of Faithfulness': {
    slot:'Head', cost:1000, weight:0,
    note:'Worn on forehead. Warns if any action would violate the wearer\'s code of conduct.',
    source:'CRB',
  },
  'Phylactery of Positive Channeling': {
    slot:'Head', cost:11000, weight:0,
    note:'+2d6 to positive channel energy (requires channel positive energy class feature).',
    source:'APG',
  },
  'Bead of Newt Prevention': {
    slot:'Slotless', cost:1000, weight:0,
    note:'If you fail a save vs polymorph, bead negates effect. 1 use only.',
    source:'CRB',
  },
  'Stone of Good Luck (Luckstone)': {
    slot:'Slotless', cost:20000, weight:0,
    note:'+1 luck bonus on all ability checks, saving throws, and skill checks.',
    source:'CRB',
  },
  'Strand of Prayer Beads': {
    slot:'Neck', cost:45800, weight:0,
    note:'Multiple beads with various powers: bless, cure serious, greater turning, smite, wind walk, etc.',
    source:'CRB',
  },
  'Broom of Flying': {
    slot:'Slotless', cost:17000, weight:3,
    note:'Fly speed 40 ft (good) with 1 passenger, or 30 ft (clumsy) with 2 passengers.',
    source:'CRB',
  },

};

// ── HELPERS ──────────────────────────────────────────
function searchMagicItems(query, slotFilter) {
  if (!query && !slotFilter) return Object.entries(MAGIC_ITEMS).slice(0, 15);
  const q = (query || '').toLowerCase();
  return Object.entries(MAGIC_ITEMS).filter(([name, item]) => {
    const matchesSlot  = !slotFilter || item.slot === slotFilter;
    const matchesQuery = !q || name.toLowerCase().includes(q) ||
                         (item.note || '').toLowerCase().includes(q);
    return matchesSlot && matchesQuery;
  }).slice(0, 20);
}

function getMagicItem(name) {
  return MAGIC_ITEMS[name] || null;
}
